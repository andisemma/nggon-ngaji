<template>
  <div>
    <v-app-bar color="primary" dense dark>
      <v-toolbar-title>Auditi</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-expand-transition>
        <v-btn text @click="save" v-if="form.fak && form.prodi && form.email">
          Save
        </v-btn>
      </v-expand-transition>
    </v-app-bar>
    <div class="mt-2 pa-3">
      <v-select
        color
        :rules="$store.state.req"
        v-model="form.fak"
        :items="$store.state.fakultas"
        item-value="id"
        item-text="nama"
        filled
        label="Fakultas"
        prepend-icon="mdi-domain"
      >
      </v-select
      ><v-select
        :rules="$store.state.req"
        color
        v-model="form.prodi"
        :items="prodi"
        item-value="id"
        item-text="nama"
        filled
        label="Prodi"
        prepend-icon="mdi-home"
      ></v-select>

      <v-text-field
        :rules="$store.state.req"
        placeholder="Email Resmi Prodi"
        label="Email Prodi"
        prepend-icon="mdi-mail"
        v-model="form.email"
        outlined
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { fireSetDataWithId, getData } from '../../firebase/firestore';
export default {
  data() {
    return {
      main: 'users',
      form: {
        active: true,
        fak: '',
        prodi: '',
        email: '',
        role: 'auditi',
      },
    };
  },
  methods: {
    reset() {
      this.form = { active: true, fak: '', prodi: '', email: '' };
    },
    toUp() {
      this.form.id = this.form.id.toUpperCase();
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
          getData(this.main, 'active', '==', true).then((res) =>
            this.$store.commit('setState', [this.main, res, false])
          );
          this.reset;
        } else {
          this.$swal({
            icon: 'error',
            title: 'Data sudah Ada!!',
          });
          this.reset;
        }
      });
    },
  },
  computed: {
    prodi() {
      let x = [];
      this.$store.state.prodi.forEach((item) => {
        this.form.fak !== item.fak || x.push(item);
      });
      return x;
    },
  },
  mounted() {},
};
</script>
