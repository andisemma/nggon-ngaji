<template>
  <div>
    <!-- Parent -->
    <Parent role="auditi" />
    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="700">
      <v-card class="pa-4">
        <v-app-bar color="primary" dense dark class="mb-4">
          <v-icon color="" @click="reset()">mdi-close</v-icon>

          <v-spacer></v-spacer>

          <v-expand-transition>
            <v-btn text @click="save"> Save </v-btn>
          </v-expand-transition>
        </v-app-bar>

        <!-- Dialog Body -->
        <v-text-field
          :rules="[(value) => !!value || 'Required']"
          placeholder="e.g., 2021"
          label="Tahun Assesment"
          prepend-icon="mdi-calendar"
          v-model="form.tahun"
          outlined
          type="number"
        ></v-text-field>

        <v-select
          :items="['APRIL', 'OKTOBER']"
          v-model="form.periode"
          outlined
          prepend-icon="mdi-clock"
        >
        </v-select>
      </v-card>
    </v-dialog>

    <!-- Add Botton -->
    <v-tooltip left color="primary">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          bottom
          right
          fab
          fixed
          elevation="5"
          color="primary"
          dark
          @click="add"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add AMI</span>
    </v-tooltip>

    <!-- Loader -->
    <Loader v-if="loading" />
  </div>
</template>

<script>
import { serverTimestamp } from 'firebase/firestore';
import { getData, del, setData } from '../firebase/firestore';
import dayjs from 'dayjs';
import Loader from '../components/ProgressBar.vue';
import Parent from '../components/Parent.vue';
import data from '../assets/data';

export default {
  components: { Loader, Parent },
  data() {
    return {
      loading: false,
      dialog: false,
      parent: null,
      form: {
        email: this.$store.state.profile.email,
        details: this.$store.state.userDetails,
        active: true,
        tahun: 2021,
        periode: '',
        timestamp: serverTimestamp(),
        auditor: {
          email: ['NA', 'NA'],
          name: ['NA', 'NA'],
        },
        data: {
          state: false,
        },
        penilaian: [false, false],
        perbaikan: {
          state: false,
        },
        penilaianDetails: false,
      },
    };
  },
  methods: {
    add() {
      this.dialog = !this.dialog;
    },
    reset() {
      this.form.tahun = 2021;
      this.dialog = !this.dialog;
      this.loading = !this.loading;
    },
    getUserDetails() {
      getData('users', 'email', '==', this.$store.state.profile.email).then(
        (res) => {
          this.$store.commit('setState', ['userDetails', res, false]);
        }
      );
    },
    getAssesment() {
      this.loading = true;
      getData('parent', 'email', '==', this.$store.state.profile.email).then(
        (res) => {
          this.$store.commit('setState', ['parent', res, false]);
          this.loading = false;
        }
      );
    },
    penilaian() {},
    perbaikan() {},
    save() {
      this.loading = true;
      getData('parent', 'id', '==', this.formData.id).then((res) => {
        if (res.length === 0) {
          setData('parent', this.formData).then(() => {
            this.$swal({
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1000,
            });
            this.getAssesment();
            this.reset();
            this.loading = false;
          });
        } else {
          this.$swal({
            icon: 'error',
            title: 'Data Sudah Tersedia',
          });
          this.reset();
        }
      });
    },
    tgl(date) {
      return dayjs(date).format('DD-MM-YYYY');
    },
    del(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          del('parent', id).then(() => {
            this.$swal({
              icon: 'warning',
              title: 'Deleted!!',
              showConfirmButton: false,
              timer: 1000,
            });
            this.getAssesment();
          });
        }
      });
    },
    async setAuditi(item) {
      this.$store.commit('setState', ['auditiDetails', item, false]);
      return item;
    },
    replace(item) {
      this.$store.commit('setState', ['auditiDetails', item, false]);
      this.$router.push(`/auditi/${item.uid}`);
    },
    stateColor(state) {
      switch (state) {
        case 'Created':
          return 'warning';
        case 'Submitted':
          return 'primary';
        case 'On progress':
          return 'basil';
        case 'Rejected':
          return 'danger';
        case 'Done':
          return 'success';
      }
    },
    state(index) {
      if (!this.parent[index].perbaikan.state) {
        if (
          !this.parent[index].penilaian[0] ||
          !this.parent[index].penilaian[1]
        ) {
          if (!this.parent[index].data.state) {
            return 'Created';
          } else {
            return 'Submitted';
          }
        } else {
          return 'Peninjauan';
        }
      } else {
        return 'Finished';
      }
    },
    async newDetails() {
      let x = await Array(data.length);
      console.log('🚀 ~ file: Auditi.vue ~ line 219 ~ newDetails ~ x', x);
      console.log('🚀 ~ file: Auditi.vue ~ line 219 ~ newDetails ~ x', x);
      console.log(x);

      for (let index = 0; index < data.length; index++) {
        x.splice(index, 1, {
          no: index + 1,
          nilai: false,
          catatan: '',
          terjawab: false,
          jawaban: '',
        });
      }
      this.form.penilaianDetails = x;
    },
  },
  computed: {
    formData() {
      return {
        ...this.form,
        ...{ id: `${this.form.email}_${this.form.tahun}_${this.form.periode}` },
      };
    },
  },
  mounted() {
    this.getAssesment();
    this.newDetails();
  },
};
</script>
