<template>
  <div>
    <v-card>
      <v-card-title>
        <b>Auditor</b>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        :headers="headers"
        :items="$store.state.auditor"
        :search="search"
      >
      </v-data-table>
    </v-card>
    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-app-bar color="primary" dense dark>
          <v-icon @click="reset">mdi-close</v-icon>
          <v-spacer></v-spacer>

          <v-expand-transition>
            <v-btn text @click="save" v-if="form.email && form.nama">
              Save
            </v-btn>
          </v-expand-transition>
        </v-app-bar>
        <div class="mt-2 pa-3">
          <!-- Nama -->
          <v-text-field
            :rules="[(value) => !!value || 'Required']"
            placeholder="Nama Auditor"
            label="Nama Auditor"
            prepend-icon="mdi-alphabetical"
            v-model="form.nama"
            outlined
          ></v-text-field>
          <!-- Email -->
          <v-text-field
            :rules="[(value) => !!value || 'Required']"
            placeholder="Email Auditor"
            label="Email Auditor"
            prepend-icon="mdi-mail"
            v-model="form.email"
            outlined
          ></v-text-field></div
      ></v-card>
    </v-dialog>
    <v-btn fab fixed bottom right dark color="primary" @click="dialog = true">
      <v-icon color=""> mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { fireSetDataWithId, getData } from '../../firebase/firestore';
export default {
  data() {
    return {
      dialog: false,
      main: 'users',
      form: {
        active: true,
        nama: '',
        email: '',
        role: 'auditor',
      },
      search: null,
      headers: [
        { text: 'No', value: 'index' },
        { text: 'Nama', value: 'nama' },
        { text: 'Email', value: 'email' },
      ],
    };
  },
  methods: {
    reset() {
      this.form = { active: true, nama: '', email: '', role: 'auditor' };
      this.dialog = !this.dialog;
    },
    save() {
      fireSetDataWithId(this.main, this.form.email, this.form).then((res) => {
        if (res) {
          this.$swal({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          this.get();
          this.reset();
        } else {
          this.$swal({
            icon: 'error',
            title: 'Data sudah Ada!!',
          });
          this.reset();
        }
      });
    },
    get() {
      getData(this.main, 'role', '==', 'auditor').then((res) => {
        res = res.map((item, index) => ({ ...item, index: index + 1 }));
        this.$store.commit('setState', ['auditor', res, false]);
      });
    },
  },
  computed: {
    auditor() {
      return this.$store.state.auditor.map((item, index) => ({
        ...item,
        index: index + 1,
      }));
    },
  },
  mounted() {
    this.get();
  },
};
</script>
