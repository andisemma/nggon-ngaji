<template>
  <div>
    <div class="d-flex flex-wrap pa-8">
      <v-hover v-slot="{ hover }" v-for="(pak, index) in parent" :key="index">
        <v-card class="mx-4 my-4 pa-2" width="400" :elevation="hover ? 12 : 2">
          <v-img
            class="ma-2"
            height="183"
            width="400"
            :src="
              'https://avatars.dicebear.com/api/jdenticon/' +
              pak.timestamp +
              '.svg'
            "
          >
          </v-img>
          <v-card-title>
            <span>{{ pak.tahun }}-{{ pak.periode }}</span>
            <v-spacer></v-spacer>
            <v-btn small :color="stateColor(state(index))">
              {{ state(index) }}
            </v-btn></v-card-title
          >
          <v-card-subtitle class="pb-0">
            Diajukan tgl : {{ tgl(pak.timestamp.seconds * 1000) }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text @click="replace(pak)"> Details </v-btn>

            <v-spacer />

            <v-tooltip left color="red" v-if="$route.name == 'auditi'">
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  color="red"
                  @click="del(pak.uid)"
                  >mdi-delete</v-icon
                >
              </template>
              <span>Delete</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { del, getData, setData } from '../firebase/firestore';

export default {
  props: ['role'],
  components: {},
  data() {
    return {};
  },
  methods: {
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
    replace(item) {
      this.$router.push(`/${this.role}/${item.uid}`);
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
        case 'Finished':
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
    getAssesment() {
      this.loading = true;
      getData('parent', 'email', '==', this.$store.state.profile.email).then(
        (res) => {
          this.$store.commit('setState', ['parent', res, false]);
          this.loading = false;
        }
      );
    },
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
  },
  computed: {
    parent() {
      return this.$store.state.parent;
    },
  },
  mounted() {
    this.getAssesment();
  },
  created() {},
};
</script>
