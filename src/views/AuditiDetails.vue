<template>
  <div>
    <v-card class="ma-6 pa-4">
      <v-tooltip left v-if="active">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            @click="perbaikanDialog = true"
            fab
            fixed
            right
            bottom
          >
            <v-icon>mdi-file-document-edit</v-icon></v-btn
          >
        </template>
        <span>Perbaikan</span>
      </v-tooltip>

      <!-- display -->
      <Display :parent="parent" />

      <!-- Loader -->
      <Loader v-if="loader" />

      <!-- Input Form -->
      <div v-if="!parent.data.state && !loader" class="mt-2" id="input-form">
        <v-text-field
          placeholder="Nama Lengkap dan Gelar Pengusul"
          label="Nama Pengusul"
          prepend-icon="mdi-account"
          v-model="form.nama"
          outlined
          color
          autofocus
          :rules="[(value) => !!value || 'Required']"
        ></v-text-field>

        <v-text-field
          placeholder="Link dokumen pendukung"
          label="Link dokumen pendukung"
          prepend-icon="mdi-link"
          v-model.trim="form.link"
          outlined
          color
          :rules="[(value) => !!value || 'Required']"
        ></v-text-field>

        <v-row class="px-4" v-for="(item, index) in lampiranJudul" :key="index">
          <v-file-input
            :prepend-icon="
              index == 4 ? 'mdi-microsoft-excel' : 'mdi-file-pdf-box'
            "
            v-model="files[index]"
            :label="item"
            show-size
            @change="
              check(files[index], index);
              rules(index);
            "
            :rules="[validator[index].message]"
            class="mr-4"
          >
          </v-file-input>

          <v-icon v-if="validator[index].state" color="green"
            >mdi-cloud-check</v-icon
          >
        </v-row>

        <!-- Submit btn -->
        <v-btn v-if="!valid && active" fab right fixed bottom
          ><v-icon disabled>mdi-cloud-off-outline</v-icon></v-btn
        >
        <v-btn
          v-else-if="valid && active"
          color="success"
          fab
          right
          fixed
          bottom
          @click="chainUpload"
          ><v-icon>mdi-cloud-upload</v-icon></v-btn
        >
      </div>

      <!-- input Details Button -->
      <v-tooltip left v-if="active">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            v-bind="attrs"
            v-on="on"
            fab
            fixed
            right
            bottom
            class="mb-16"
            @click="inputDetails = true"
            ><v-icon>mdi-text-box</v-icon></v-btn
          >
        </template>
        <span>Details</span>
      </v-tooltip>
    </v-card>

    <!-- Upload Dialog -->
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title
          v-for="(item, index) in uploading.progress"
          :key="index"
          class="my-2 mx-6"
        >
          <b class="mr-4"> {{ lampiranJudul[index] }} </b>
          <v-progress-linear
            v-model="uploading.progress[index]"
            color="purple accent-4"
            height="25"
            dark
          >
            {{ Math.round(uploading.progress[index]) }}%
          </v-progress-linear></v-card-title
        >
        <p class="text-center">
          <b>{{ loaderLabel }}</b>
        </p>
        <v-progress-linear
          color="deep-purple accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-card>
    </v-dialog>

    <v-dialog v-model="perbaikanDialog">
      <v-card class="pa-4">
        <!-- App BAr -->
        <v-app-bar color="primary" dense dark>
          <v-toolbar-title>Perbaikan AMI</v-toolbar-title>
        </v-app-bar>
        <br />
        <v-card class="pa-3">
          <v-text-field
            placeholder="Link dokumen pendukung diawali dengan https://"
            label="Link dokumen pendukung "
            prepend-icon="mdi-link"
            v-model.trim="perbaikanForm.link"
            outlined
            color
            :rules="[(value) => !!value || 'Required']"
          ></v-text-field>

          <!-- Catatan -->
          <v-textarea
            label="Catatan"
            placeholder="Catatan"
            outlined
            auto-grow
            clearable
            prepend-icon="mdi-forum"
            v-model="perbaikanForm.catatan"
          >
          </v-textarea>

          <!-- Save Button -->
          <v-card-actions>
            <v-spacer />
            <v-btn right color="primary" dark @click="perbaikan"
              >Save <v-icon>mdi-content-save</v-icon></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-card>
    </v-dialog>

    <!-- input Details -->
    <v-dialog
      v-model="inputDetails"
      fullscreen
      transition="dialog-bottom-transition"
    >
      <v-app-bar absolute color="orange" dark>
        <span>Input Details</span>
        <v-spacer />
        <v-icon @click="inputDetails = false">mdi-window-close</v-icon>
      </v-app-bar>

      <!-- Input criteria details -->
      <input-details-vue :id="id" />
    </v-dialog>
  </div>
</template>

<script>
import { serverTimestamp } from 'firebase/firestore';
import { getOnce, updateData } from '../firebase/firestore';
import { resumableUpload, downloadURL } from '../firebase/storage';
import Display from '../components/display.vue';
import Loader from '../components/Loader.vue';
import inputDetailsVue from '../components/inputDetails.vue';

export default {
  components: {
    Display,
    Loader,
    inputDetailsVue,
  },
  props: ['id'],
  data() {
    return {
      inputDetails: false,
      active: null,
      perbaikanDialog: false,
      loader: false,
      details: {},
      lampiranJudul: [
        'Surat Pengantar',
        'Surat Pernyataan',
        'Surat Laporan Evaluasi Diri',
        'Lampiran(Izin pendirian PS, Renstra)',
        'LKPS',
      ],
      lampiranNames: [
        'surat_pengantar',
        'surat_pernyataan',
        'led',
        'lampiran',
        'lkps',
      ],
      files: [],
      form: {
        state: true,
        parentId: this.id,
        id: serverTimestamp(),
        nama: null,
        files: ['', '', '', '', ''],
        link: '',
      },
      fileName: ['', '', '', '', ''],
      fileRefs: ['', '', '', '', ''],
      fileExt: [null, null, null, null, null],
      fileSize: [null, null, null, null, null],
      validator: [null, null, null, null, null].fill(
        { state: false, message: 'Required!' },
        0,
        5
      ),
      uploading: {
        progress: [0, 0, 0, 0, 0],
        err: ['', '', '', '', ''],
        url: ['', '', '', '', ''],
      },
      dialog: false,
      link: ['', '', '', '', ''],
      parent: {
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
      perbaikanForm: {
        state: true,
        link: '',
        catatan: '',
        timestamp: serverTimestamp(),
      },
    };
  },
  methods: {
    check(item, index) {
      if (item) {
        const ext = item.name.split('.')[item.name.split('.').length - 1];
        const size = item.size;
        const ref =
          this.form.short +
          '_' +
          this.form.tahun +
          '/' +
          this.lampiranNames[index] +
          '.' +
          ext;

        this.fileSize.splice(index, 1, size);
        this.fileExt.splice(index, 1, ext);
        this.form.files.splice(index, 1, ref);
      }
    },
    rules(index) {
      let res = {
        state: false,
        message: 'Required',
      };
      if (this.files[index]) {
        if (this.fileSize[index] < 1000000) {
          if (index == 4) {
            if (this.fileExt[index] == 'xls' || this.fileExt[index] == 'xlsx') {
              res.state = true;
              res.message = true;
            } else {
              res.message = 'Accept MS Excel file ONLY!';
            }
          } else {
            if (this.fileExt[index] == 'pdf') {
              res.state = true;
              res.message = true;
            } else {
              res.message = 'Accept PDF file ONLY!';
            }
          }
        } else {
          res.message = 'File size should be less than 1MB !!';
        }
      }

      this.validator.splice(index, 1, res);
    },
    /* Upload */
    async upload(item, index) {
      return new Promise((resolve, reject) => {
        const folderName = this.parent.id;
        const fileName = this.lampiranNames[index];
        const fileExt = this.fileExt[index];
        const gsRefs = `${folderName}/${fileName}.${fileExt}`;

        resumableUpload(folderName, fileName, fileExt, item).on(
          'state_changed',
          /* Progress */
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.uploading.progress.splice(index, 1, progress);
          },
          /* onErr */
          (error) => {
            this.uploading.err.splice(index, 1, error);
            reject(error);
          },
          /* onSuccess */
          () => {
            downloadURL(gsRefs).then((res) => {
              this.form.files.splice(index, 1, res);
              resolve(res);
            });
          }
        );
      });
    } /* upload */,
    async chainUpload() {
      this.dialog = !this.dialog;
      Promise.all(this.files.map((item, index) => this.upload(item, index)))
        .then(() => {
          updateData(this.form, 'parent', this.id, 'data')
            .then(
              getOnce('parent', this.id).then((cb) => {
                this.parent = cb;
                this.dialog = !this.dialog;
              })
            )
            .catch((e) => console.log('update => ', e));
        })
        .catch((error) => {
          console.log(`Some failed: `, error);

          //Handle Failure some/all  upload failed
        });
    },
    submit() {
      this.dialog = !this.dialog;
      this.chainUpload()
        .then(() => {
          updateData(this.form, 'parent', this.id, 'data')
            .then(
              getOnce('parent', this.id).then((cb) => {
                this.parent = cb;
                this.dialog = !this.dialog;
              })
            )
            .catch((e) => console.log('setDataFailed => ', e));
        })
        .catch((e) => console.log('filesUploadDailed => ', e));
    },
    perbaikan() {
      this.perbaikanDialog = !this.perbaikanDialog;
      this.loader = !this.loader;
      updateData(this.perbaikanForm, 'parent', this.id, 'perbaikan').then(
        getOnce('parent', this.id).then((cb) => {
          this.parent = cb;
          this.loader = !this.loader;
        })
      );
    },
    stateColor(state) {
      switch (state) {
        case 'Created':
          return 'warning';
        case 'Submitted':
          return 'primary';
        case 'Penilaian':
          return 'basil';
        case 'Rejected':
          return 'danger';
        case 'Done':
          return 'success';
      }
    },
  },
  computed: {
    valid() {
      let res = 0;
      this.validator.forEach((item) => {
        if (item.state !== false) {
          console.log((res += 1));
        }
      });

      return res == 5 && this.form.nama ? true : false;
    },
    loaderLabel() {
      let x = this.uploading.progress;

      let res = x.reduce((prev, cur) => prev + cur, 0);

      return res == 500 ? 'Almost done...' : 'Please wait...';
    },
    formLabel() {
      return [
        {
          label: 'Fakultas',
          val: this.parent.details.fak,
          icon: 'mdi-domain',
        },
        {
          label: 'Prodi',
          val: this.parent.details.nama,
          icon: 'mdi-home',
        },
        {
          label: 'Tahun',
          val: this.parent.tahun,
          icon: 'mdi-calendar',
        },
        {
          label: 'Jenjang',
          val: this.parent.details.jenjang,
          icon: 'mdi-finance',
        },
      ];
    },
    state() {
      if (!this.parent.perbaikan.state) {
        if (!this.parent.penilaian[0] && !this.parent.penilaian[1]) {
          if (!this.parent.data.state) {
            return 'Created';
          } else {
            return 'Submitted';
          }
        } else {
          return 'Penilaian';
        }
      } else {
        return 'Finished';
      }
    },
    penilaian() {
      let res = [];
      Array.from(this.parent.penilaian).forEach((item, index) => {
        if (item) {
          let x = { ...{ index: index + 1 }, ...item };
          res.push(x);
        }
      });

      return res;
    },
  },
  mounted() {
    this.loader = !this.loader;
    getOnce('parent', this.id).then((cb) => {
      this.parent = cb;
      this.loader = !this.loader;
    });
    getOnce('auth', 'auth').then((res) => {
      this.active = res.active;
    });
  },
};
</script>
