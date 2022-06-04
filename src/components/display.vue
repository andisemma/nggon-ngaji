<template>
  <div class="">
    <v-divider class="my-2" />
    <!-- App BAr -->
    <v-app-bar :color="color" dense dark>
      <v-toolbar-title>Detail Pengajuan AMI </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small :color="stateColor(state)"> {{ state }} </v-btn>
    </v-app-bar>

    <!-- Body -->
    <v-card class="pa-4 pt-6 ma-4" v-if="parent.data">
      <v-row v-for="(item, index) in formLabel" :key="index">
        <span class="col-6"
          ><v-icon class="mr-4">{{ item.icon }}</v-icon> {{ item.label }}
        </span>
        <span class="col-6">: {{ item.val }} </span>
      </v-row>

      <!-- Submited Form-->
      <div v-if="parent.data.state">
        <v-row v-for="(item, index) in parent.data.files" :key="index">
          <span class="col-6"
            ><v-icon class="mr-4">{{
              index == 4 ? 'mdi-microsoft-excel' : 'mdi-file-pdf-box'
            }}</v-icon>
            {{ lampiranJudul[index] }}
          </span>
          <span class="col-6"
            >:
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <a
                  v-bind="attrs"
                  v-on="on"
                  class="ml-2"
                  :href="item"
                  :target="index == 4 || 'blank'"
                >
                  <v-icon color="primary">mdi-cloud-download</v-icon>
                </a>
              </template>
              <span>{{ lampiranJudul[index] }}</span>
            </v-tooltip>
          </span>
        </v-row>

        <v-row>
          <span class="col-6"
            ><v-icon class="mr-4">mdi-link</v-icon>Link dokumen pendukung
          </span>
          <span class="col-6"
            >:
            <a :href="parent.data.link" target="_blank"> Dokumen Pendukung</a>
          </span>
        </v-row>

        <v-row v-for="(item, i) in parent.auditor.name" :key="'x' + i">
          <span class="col-6"
            ><v-icon class="mr-4">mdi-account</v-icon>Auditor {{ i + 1 }}
          </span>
          <span class="col-6">: {{ parent.auditor.name[i] }} </span>
        </v-row>
      </div>

      <!-- Penilaian detail -->
      <br />
      <div v-if="penilaian.length !== 0">
        <v-app-bar :color="color" dense dark>
          <v-toolbar-title>Detail Penilaian</v-toolbar-title>
        </v-app-bar>
        <div v-for="(item, index) in penilaian" :key="index">
          <v-divider class="my-2" />
          <v-row>
            <span class="col-6"
              ><v-icon class="mr-4">mdi-account</v-icon>Auditor {{ item.index }}
            </span>
            <span class="col-6"
              >:
              <VAvatar size="30">
                <img :src="item.photoUrl" alt="alt" />
              </VAvatar>
              <span> {{ item.name }} </span>
            </span>
          </v-row>

          <v-row>
            <span class="col-6"
              ><v-icon class="mr-4">mdi-finance</v-icon>Nilai
            </span>
            <span class="col-6"
              >:
              <span>
                {{ item.nilai }}
              </span>
            </span>
          </v-row>

          <v-row
            v-for="(i, z) in [item.terAkreditasi, item.unggul, item.baikSekali]"
            :key="'x' + z"
          >
            <span class="col-6"
              ><v-icon class="mr-4">{{
                z == 0
                  ? 'mdi-check-circle'
                  : z == 1
                  ? 'mdi-checkbox-marked'
                  : 'mdi-check-decagram'
              }}</v-icon
              >Syarat
              {{ z == 0 ? 'Terakreditasi' : z == 1 ? 'Unggul' : 'Baik Sekali' }}
            </span>
            <span class="col-6"
              >:

              <span>
                {{ i }}
                <v-icon :color="i !== 'Terpenuhi' ? 'red' : 'success'">{{
                  i !== 'Terpenuhi'
                    ? 'mdi-close-circle'
                    : 'mdi-check-circle-outline'
                }}</v-icon>
              </span>
            </span>
          </v-row>

          <v-row>
            <span class="col-6"
              ><v-icon class="mr-4">mdi-microsoft-excel</v-icon>Detaill
              Penilaian
            </span>
            <span class="col-6"
              >:
              <a :href="item.file">Download Detail Penilaian</a>
            </span>
          </v-row>

          <v-row>
            <span class="col-6"
              ><v-icon class="mr-4">mdi-message-text</v-icon>Catatan
            </span>
            <span class="col-6"
              >:
              <span class="text-justify">{{ item.catatan }}</span>
            </span>
          </v-row>
        </div>
      </div>
      <!-- penilaian -->

      <!-- Perbaikan Detail -->
      <div v-if="parent.perbaikan.state">
        <v-app-bar :color="color" dense dark class="my-2">
          <v-toolbar-title>Detail Perbaikan</v-toolbar-title>
        </v-app-bar>
        <!-- link perbaikan -->
        <v-row>
          <span class="col-6"
            ><v-icon class="mr-4">mdi-link</v-icon>Dokumen Pendukung
          </span>
          <span class="col-6"
            >:
            <a :href="parent.perbaikan.link">Dokumen pendukung perbaikan</a>
          </span>
        </v-row>

        <!-- Catatan -->
        <v-row>
          <span class="col-6"
            ><v-icon class="mr-4">mdi-message-text</v-icon>Catatan
          </span>
          <span class="col-6"
            >:
            <span class="text-justify">{{ parent.perbaikan.catatan }}</span>
          </span>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    parent: {
      penilaian: Array,
    },
  },
  components: {},
  data() {
    return {
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
    };
  },
  methods: {
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
        case 'Finished':
          return 'success';
      }
    },
  },
  computed: {
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
    color() {
      const role = this.$route.name;
      return role === 'auditiDetails' ? 'primary' : 'success';
    },
  },
  mounted() {},
  created() {},
};
</script>
