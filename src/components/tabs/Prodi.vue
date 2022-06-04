<template>
  <div>
    <v-card>
      <v-card-title>
        <b>Prodi</b>
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
        v-if="items"
        :headers="headers"
        :items="items"
        :search="search"
      ></v-data-table>
    </v-card>

    <!-- Dialog -->
    <v-dialog v-model="dialog" max-width="600" persistent>
      <v-card>
        <v-app-bar color="primary" dense dark>
          <v-icon color="" @click="reset()">mdi-close</v-icon>

          <v-spacer></v-spacer>

          <v-expand-transition>
            <v-btn
              text
              @click="save"
              v-if="form.jenjang && form.nama && form.fak && form.email"
            >
              Save
            </v-btn>
          </v-expand-transition>
        </v-app-bar>
        <div class="mt-2 pa-3">
          <v-select
            :rules="[(value) => !!value || 'Required']"
            color
            v-model="form.fak"
            :items="$store.state.fakultas"
            item-value="id"
            item-text="nama"
            filled
            label="Fakultas"
            prepend-icon="mdi-domain"
          ></v-select>

          <v-select
            :rules="[(value) => !!value || 'Required']"
            color
            v-model="form.jenjang"
            :items="['D2', 'D3', 'S1', 'S2', 'S3']"
            filled
            label="Jenjang"
            prepend-icon="mdi-finance"
          ></v-select>

          <v-text-field
            :rules="[(value) => !!value || 'Required']"
            placeholder="e.g.PBA"
            label="Singkatan"
            prepend-icon="mdi-alphabetical"
            v-model="form.short"
            outlined
            @keyup="toUp"
          ></v-text-field>

          <v-text-field
            :rules="[(value) => !!value || 'Required']"
            placeholder="Nama Prodi Lengkap"
            label="Nama Prodi"
            prepend-icon="mdi-home"
            v-model="form.nama"
            outlined
            @keyup="toUp"
          ></v-text-field>

          <v-text-field
            :rules="[(value) => !!value || 'Required']"
            placeholder="Email Resmi Prodi"
            label="Email Prodi"
            prepend-icon="mdi-mail"
            v-model="form.email"
            outlined
          ></v-text-field>
        </div>
      </v-card>
    </v-dialog>

    <v-btn fixed bottom right fab dark color="primary" @click="dialog = true">
      <v-icon color=""> mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { fireSetDataWithId, getData } from '../../firebase/firestore';
export default {
  data() {
    return {
      main: 'users',
      height: window.innerHeight - 100,
      dialog: false,
      items: false,
      form: {
        active: true,
        fak: '',
        short: '',
        nama: '',
        email: '',
        jenjang: '',
        role: 'prodi',
      },
      search: null,
      headers: [
        { text: 'No', value: 'index' },
        { text: 'Fakultas', value: 'fak' },
        { text: 'Prodi', value: 'short' },
        { text: 'Lengkap', value: 'nama' },
        { text: 'Email', value: 'email' },
      ],
    };
  },
  methods: {
    reset() {
      this.form = {
        active: true,
        fak: '',
        short: '',
        nama: '',
        email: '',
        jenjang: '',
        role: 'prodi',
      };
      this.dialog = !this.dialog;
    },
    toUp() {
      this.form.short = this.form.short.toUpperCase();
      this.form.nama = this.form.nama.toUpperCase();
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
      getData(this.main, 'role', '==', 'prodi').then((res) => {
        res = res.map((item, index) => ({ ...item, index: index + 1 }));
        this.items = res;
      });
    },
  },
  computed: {},
  mounted() {
    this.get();
  },
};
</script>
