<template>
  <div>
    <v-card>
      <v-card-title>
        <b>Fakultas</b>
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
        :items="$store.state.fakultas"
        :search="search"
      ></v-data-table>
    </v-card>

    <!-- DIALOG -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-app-bar color="primary" dense dark>
          <v-toolbar-title
            ><v-icon @click="dialog = !dialog"
              >mdi-close</v-icon
            ></v-toolbar-title
          >

          <v-spacer></v-spacer>

          <v-expand-transition>
            <v-btn text @click="save" v-if="form.id && form.nama"> Save </v-btn>
          </v-expand-transition>
        </v-app-bar>
        <div class="mt-2 pa-3">
          <v-text-field
            :rules="[(value) => !!value || 'Required']"
            placeholder="e.g.FTIK"
            label="Singkatan"
            prepend-icon="mdi-alphabetical"
            v-model="form.id"
            outlined
            @keyup="toUp"
          ></v-text-field>

          <v-text-field
            :rules="[(value) => !!value || 'Required']"
            placeholder="Nama Fakultas Lengkap"
            label="Nama Fakultas"
            prepend-icon="mdi-domain"
            v-model="form.nama"
            outlined
            @keyup="toUp"
          ></v-text-field>
        </div>
      </v-card>
    </v-dialog>

    <v-btn fab dark bottom right fixed color="primary" @click="dialog = true">
      <v-icon color=""> mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { fireSetDataWithId, getData } from '../../firebase/firestore';
export default {
  data() {
    return {
      main: 'fakultas',
      dialog: false,
      form: {
        active: true,
        id: '',
        nama: '',
      },
      search: '',
      headers: [
        { text: 'Fakultas', value: 'id' },
        { text: 'Lengkap', value: 'nama' },
      ],
    };
  },
  methods: {
    toUp() {
      this.form.id = this.form.id.toUpperCase();
      this.form.nama = this.form.nama.toUpperCase();
    },
    save() {
      fireSetDataWithId('fakultas', this.form.id, this.form).then((res) => {
        if (res) {
          this.$swal({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          this.get();
          this.form = {
            active: true,
            id: '',
            nama: '',
          };
        } else {
          this.$swal({
            icon: 'error',
            title: 'Data sudah Ada!!',
          });
          this.form = {
            active: true,
            id: '',
            nama: '',
          };
        }
      });
    },
    get() {
      getData(this.main, 'active', '==', true).then((res) => {
        res = res.map((item, index) => ({ ...item, index: index + 1 }));
        this.$store.commit('setState', ['fakultas', res, false]);
      });
    },
  },
  computed: {},
  mounted() {
    this.get();
  },
};
</script>
