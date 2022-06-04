<template>
  <div>
    <v-card>
      <v-card-title>
        <b>Assignment</b>
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
        v-if="!loader"
        :headers="headers"
        :items="items"
        :search="search"
        @click:row="details"
      ></v-data-table>

      <!--Main Loader  -->
      <v-container style="height: 200px" v-else>
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="text-subtitle-1 text-center" cols="12">
            Please wait..
          </v-col>
          <v-col cols="6">
            <v-progress-linear
              color="deep-purple accent-4"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <!-- Dialog -->
    <v-dialog v-model="dialog">
      <v-card v-if="row" class="pa-4">
        <!--Loader  -->
        <v-container style="height: 200px" v-if="loadAuditor">
          <v-row class="fill-height" align-content="center" justify="center">
            <v-col class="text-subtitle-1 text-center" cols="12">
              Please wait..
            </v-col>
            <v-col cols="6">
              <v-progress-linear
                color="deep-purple accent-4"
                indeterminate
                rounded
                height="6"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-container>

        <!-- Body -->
        <div v-else>
          <v-app-bar color="purple accent-4" class="mb-2" dense dark>
            <v-toolbar-title>
              <span>Assign Auditor</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-icon @click="assign">mdi-content-save</v-icon>
          </v-app-bar>

          <v-autocomplete
            v-for="(item, index) in row.auditor.email"
            :key="index"
            v-model="row.auditor.email[index]"
            :items="auditor"
            outlined
            :label="`Auditor ${[index + 1]}`"
            item-text="nama"
            item-value="email"
            prepend-icon="mdi-account"
          ></v-autocomplete>
        </div>
      </v-card>
    </v-dialog>

    <!-- Search Dialog -->
    <v-dialog v-model="searchDialog">
      <v-app-bar color="purple accent-4" dense dark>
        <v-icon @click="searchDialog = !searchDialog">mdi-close</v-icon>
        <v-spacer></v-spacer>
        <v-btn @click="fetchTable" dark text right absolute
          ><v-icon class="mr-2">mdi-magnify-expand</v-icon> Tampilkan
        </v-btn>
      </v-app-bar>

      <v-card class="pa-4">
        <v-radio-group v-model="radios">
          <template v-slot:label>
            <div>Tampilkan berdasar</div>
          </template>
          <v-radio value="tahun">
            <template v-slot:label>
              <div>Berdasar tahun</div>
            </template>
          </v-radio>
          <v-text-field
            type="number"
            v-model="select.tahun"
            v-if="radios == 'tahun'"
          ></v-text-field>
          <v-radio value="NA">
            <template v-slot:label>
              <div>Semua yang belum ada Auditor</div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-card>
    </v-dialog>
    <!-- Search Button -->
    <v-btn @click="searchDialog = true" fab fixed bottom right color="orange"
      ><v-icon>mdi-table-clock</v-icon></v-btn
    >

    <Dialog :isLoading="mainLoader" />
  </div>
</template>

<script>
import { getData, updateData } from '../../firebase/firestore';
import dayjs from 'dayjs';
import Dialog from '../Dialog.vue';
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      mainLoader: false,
      loadAuditor: false,
      searchDialog: false,
      dialog: false,
      loader: false,
      search: null,
      headers: [
        { text: 'No', value: 'index' },
        { text: 'Fakultas', value: 'details.fak' },
        { text: 'Prodi', value: 'details.short' },
        { text: 'Tahun', value: 'tahun' },
        { text: 'Periode', value: 'periode' },
        { text: 'Auditor', value: 'auditor.name' },
        { text: 'UID', value: 'uid', align: ' d-none' },
      ],
      items: [],
      row: null,
      radios: 'tahun',
      select: {
        tahun: 2021,
        none: 'NA',
      },
      auditor: [],
    };
  },
  methods: {
    async changeAuditorName() {
      let i = -1;
      this.row.auditor.email.forEach((item) => {
        i = i + 1;
        this.auditor.find((val) => {
          if (val.email == item) {
            console.log('from cahngeee', val);
            this.row.auditor.name[i] = val.nama;
          }
        });
      });
    },
    details(row) {
      this.dialog = !this.dialog;
      this.loadAuditor = !this.loadAuditor;
      this.row = row;
      getData('users', 'role', '==', 'auditor').then((res) => {
        this.auditor = res;
        this.loadAuditor = !this.loadAuditor;
      });
    },
    tgl(date) {
      return dayjs(date).format('DD-MM-YYYY');
    },
    fetchTable() {
      this.loader = !this.loader;
      this.searchDialog = !this.searchDialog;
      switch (this.radios) {
        case 'tahun':
          getData('parent', 'tahun', '==', this.select.tahun).then((res) => {
            this.items = res;
            this.loader = !this.loader;
          });
          break;
        case 'NA':
          getData('parent', 'auditor.email', 'array-contains', 'NA').then(
            (res) => {
              this.items = res;
              this.loader = !this.loader;
            }
          );
          break;
      }
    },
    assign() {
      this.mainLoader = !this.mainLoader;
      this.changeAuditorName().then(() => {
        updateData(this.row.auditor, 'parent', this.row.uid, 'auditor').then(
          () => {
            this.dialog = !this.dialog;
            this.mainLoader = !this.mainLoader;
          }
        );
      });
    },
  },
  computed: {},
  mounted() {
    this.loader = !this.loader;
    getData('parent', 'auditor.email', 'array-contains', 'NA').then((res) => {
      this.items = res;
      this.loader = !this.loader;
    });
  },
};
</script>
