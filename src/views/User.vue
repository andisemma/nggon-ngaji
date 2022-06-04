<template>
  <div>
    <v-container class="d-flex d-flex-wrap" v-if="pak">
      <!-- list Pertemuan -->
      <v-container v-if="pak" class="d-flex flex-wrap">
        <v-card
          class="ma-auto"
          max-width="400"
          v-for="(pak, index) in pak"
          :key="index"
          elevation="1"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="
              'https://avatars.dicebear.com/api/identicon/' + pak.id + '.svg'
            "
          >
          </v-img>
          <v-card-title>
            {{ pak.fakultas }} - {{ pak.prodi }} {{ pak.tahun }}
          </v-card-title>
          <v-card-subtitle class="pb-0">
            Diajukan tgl : {{ tgl(pak.id) }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text @click="$router.push(`/user/${pak.id}`)">
              Details
            </v-btn>
            <v-btn color="orange" @click="catatanData(pak.id)" text>
              Catatan
            </v-btn>
            <VSpacer />
            <v-icon color="red" @click="del(pak.uid)">mdi-delete</v-icon>
          </v-card-actions>
        </v-card>
      </v-container>

      <v-btn class="mx-2 plus" fab dark color="indigo" @click="modalParent">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <!-- Modal Parent -->
      <v-dialog v-model="dialog" max-width="50%">
        <v-card>
          <v-card-title primary-title>Prodi & Tahun</v-card-title>
          <v-select
            :items="fakultas"
            v-model="parent.fakultas"
            label="Fakultas"
            outlined
            class="mx-4"
            prepend-icon="mdi-hospital-building"
          ></v-select>
          <v-text-field
            label="Prodi"
            v-model="parent.prodi"
            outlined
            class="mx-4"
            prepend-icon="mdi-domain"
          ></v-text-field>
          <v-text-field
            label="Tahun"
            v-model="parent.tahun"
            outlined
            class="mx-4"
            type="number"
            prepend-icon="mdi-calendar"
          ></v-text-field>
          <v-card-actions>
            <v-btn color="warning" @click="modalParent">Cancel</v-btn>
            <v-btn color="info" @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import { getData, setData, del } from '../firebase/firestore';
import dayjs from 'dayjs';

export default {
  components: {},
  data() {
    return {
      dialog: false,
      fakultas: ['FTIK', 'FUADAH', 'SYARIAH', 'DAKWAH', 'FEBI'],
      parent: {
        fakultas: '',
        prodi: '',
        tahun: 2021,
        groupId: this.$store.state.profile.email,
        id: null,
      },
      pak: {},
    };
  },
  methods: {
    modalParent() {
      this.dialog = !this.dialog;
      this.parent.tahun = 2021;
      this.parent.fakultas = '';
      this.parent.id = +new Date();
    },
    save() {
      setData('parent', this.parent).then(() => {
        this.getData();
        this.modalParent();
      });
    },
    getData() {
      getData('parent', 'groupId', '==', this.parent.groupId).then(
        (res) => (this.pak = res)
      );
    },
    tgl(date) {
      return dayjs(date).format('DD-MM-YYYY HH:mm:ss');
    },
    del(index) {
      del('parent', index).then(this.getData());
    },
    catatanData(id) {
      getData('catatan', 'groupId', '==', id).then((res) => {
        this.catatan = true;
        this.catatanCur = res;
      });
    },
  },
  computed: {
    parData() {
      return this.$store.state.parent;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.plus {
  position: fixed;
  bottom: 3%;
  right: 3%;
}

.text-center {
  text-align: center;
  color: aliceblue;
}
</style>
