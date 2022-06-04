<template>
  <div>
    <!-- Parent Details -->
    <Display :parent="details" />

    <Loader v-if="loading" />

    <!--Penilaian Dialog -->
    <v-dialog
      v-model="dialog"
      fullscreen
      persistent
      transition="dialog-bottom-transition"
    >
      <v-card>
        <!-- App BAr -->
        <v-app-bar color="purple accent-4" dense dark>
          <v-toolbar-title>Form Penilaian AMI </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon dark @click="dialog = !dialog">mdi-close</v-icon>
        </v-app-bar>
        <div class="px-6 mt-10">
          <!-- Nilai -->
          <v-text-field
            type="number"
            placeholder="Nilai"
            label="Nilai"
            prepend-icon="mdi-numeric"
            v-model.number="form.nilai"
            outlined
            autofocus
            :rules="[(value) => !!value || 'Required']"
          ></v-text-field>

          <!-- Syarat Akreditasi -->
          <v-select
            :items="items"
            outlined
            label="Syarat Terakreditasi"
            v-model="form.terAkreditasi"
            prepend-icon="mdi-checkbox-marked"
            :rules="[(value) => !!value || 'Required']"
          ></v-select>

          <!-- Syarat Unggul -->
          <v-select
            :items="items"
            outlined
            label="Syarat Unggul"
            v-model="form.unggul"
            prepend-icon="mdi-check-decagram"
            :rules="[(value) => !!value || 'Required']"
          ></v-select>

          <!-- Syarat Unggul -->
          <v-select
            item
            :items="items"
            outlined
            label="Syarat Baik Sekali"
            v-model="form.baikSekali"
            prepend-icon="mdi-check-circle"
            :rules="[(value) => !!value || 'Required']"
          ></v-select>

          <!-- File Upload -->
          <v-file-input
            prepend-icon="mdi-microsoft-excel"
            v-model="file"
            label="Form Penilaian"
            show-size
            @change="rules"
            :rules="[fileMsg]"
            class="mr-4"
          >
          </v-file-input>

          <!-- Catatan -->
          <v-textarea
            label="Catatan"
            placeholder="Catatan"
            outlined
            auto-grow
            clearable
            prepend-icon="mdi-forum"
            v-model="form.catatan"
          >
          </v-textarea>

          <!-- Save Button -->
          <v-card-actions>
            <v-btn absolute right color="success" dark @click="submit"
              >Save <v-icon>mdi-content-save</v-icon></v-btn
            >
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>

    <!-- Upload Dialog -->
    <v-dialog v-model="uploadDialog" id="Upload Dialog">
      <v-card>
        <v-card-title class="my-2 mx-6">
          <b class="mr-4"> Uploading... </b>
          <v-progress-linear
            v-model="uploading.progress"
            color="purple accent-4"
            height="25"
            dark
          >
            {{ Math.round(uploading.progress) }}%
          </v-progress-linear></v-card-title
        >
        <p class="text-center">
          <b>Please Wait...</b>
        </p>
        <v-progress-linear
          color="deep-purple accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-card>
    </v-dialog>

    <!-- penilain button -->
    <v-btn
      v-if="active"
      fixed
      fab
      bottom
      right
      color="success"
      @click="dialog = true"
      ><v-icon>mdi-book-edit</v-icon></v-btn
    >
  </div>
</template>

<script>
import { getOnce, updateData } from '../firebase/firestore';
import { downloadURL, resumableUpload } from '../firebase/storage';
import Display from '../components/display.vue';
import Loader from '../components/Loader.vue';

export default {
  components: {
    Display,
    Loader,
  },
  props: ['id'],
  data() {
    return {
      active: null,
      loading: false,
      uploadDialog: false,
      file: null,
      items: ['Terpenuhi', 'Tidak Terpenuhi'],
      dialog: false,
      details: {
        email: '',
        details: '',
        active: true,
        tahun: 0,
        periode: '',
        timestamp: null,
        auditor: {
          email: ['NA', 'NA'],
          name: ['NA', 'NA'],
        },
        data: {
          state: false,
        },
        penilaian: {
          state: false,
        },
        perbaikan: {
          state: false,
        },
      },
      lampiranJudul: [
        'Surat Pengantar',
        'Surat Pernyataan',
        'Surat Laporan Evaluasi Diri',
        'Lampiran(Izin pendirian PS, Renstra)',
        'LKPS',
      ],
      form: {
        state: true,
        nilai: 0,
        terAkreditasi: '',
        unggul: '',
        baikSekali: '',
        file: '',
        catatan: '',
        email: this.$store.state.profile.email,
        photoUrl: this.$store.state.profile.photoURL,
        name: this.$store.state.profile.displayName,
      },
      formSubmit: null,
      fileMsg: 'Required',
      uploading: {
        progress: 0,
        err: {},
        url: '',
      },
    };
  },
  methods: {
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
    state() {
      console.log(this.details.perbaikan.state);
      if (!this.details.perbaikan.state) {
        if (!this.details.penilaian[0].state) {
          if (!this.details.data.state) {
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
    rules() {
      const file = this.file;
      if (file) {
        const fileExt = file.name.split('.')[file.name.split('.').length - 1];
        if (fileExt == 'xls' || fileExt == 'xlsx') {
          if (file.size <= 10000000) {
            this.fileMsg = true;
          } else {
            this.fileMsg = 'File size should be less than 1MB !!';
          }
        } else {
          this.fileMsg = 'Accept MS Excell Only';
        }
      } else {
        this.fileMsg = 'Required!!';
      }
    },
    /* Upload */
    async upload() {
      return new Promise((resolve, reject) => {
        const file = this.file;
        const folderName = this.details.id;
        const fileName = 'Penilaian';
        const fileExt = file.name.split('.')[file.name.split('.').length - 1];
        const gsRefs = `${folderName}/${fileName}.${fileExt}`;

        resumableUpload(folderName, fileName, fileExt, this.file).on(
          'state_changed',
          /* Progress */
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.uploading.progress = progress;
          },
          /* onErr */
          (error) => {
            this.uploading.err = error;
            reject(error);
          },
          /* onSuccess */
          () => {
            downloadURL(gsRefs).then((res) => {
              this.form.file = res;
              resolve(res);
            });
          }
        );
      });
    } /* upload */,
    submit() {
      this.uploadDialog = !this.uploadDialog;
      this.formSubmit.splice(this.auditorID, 1, this.form);
      this.upload().then(() => {
        updateData(this.formSubmit, 'parent', this.id, 'penilaian').then(() => {
          getOnce('parent', this.id).then((res) => {
            this.details = res;
            this.uploadDialog = !this.uploadDialog;
            this.dialog = !this.dialog;
          });
        });
      });
    },
  },
  computed: {
    auditorID() {
      let x = null;
      this.details.auditor.email.forEach((item, index) => {
        if (item == this.$store.state.profile.email) {
          x = index;
        }
      });
      return x;
    },
    formLabel() {
      return [
        {
          label: 'Fakultas',
          val: this.details.details.fak,
          icon: 'mdi-domain',
        },
        {
          label: 'Prodi',
          val: this.details.details.nama,
          icon: 'mdi-home',
        },
        {
          label: 'Tahun',
          val: this.details.tahun,
          icon: 'mdi-calendar',
        },
        {
          label: 'Jenjang',
          val: this.details.details.jenjang,
          icon: 'mdi-finance',
        },
      ];
    },
  },
  mounted() {},
  created() {
    this.loading = !this.loading;
    getOnce('parent', this.id).then((res) => {
      this.details = res;
      this.formSubmit = res.penilaian;
      this.loading = !this.loading;
    });
    getOnce('auth', 'auth').then((res) => {
      this.active = res.active;
    });
  },
};
</script>
