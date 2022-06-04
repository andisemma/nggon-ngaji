<template>
  <div class="d-flex flex-wrap">
    <v-card
      v-for="item in xx"
      :key="item.no"
      elevation="4"
      class="ma-8 click"
      scrollable
      style="width: 400px; height: 300px; overflow: auto"
      @click="jawab(item)"
    >
      <v-alert :type="check(item.no)" :value="true">
        No. {{ item.no }} | {{ item.bab }}
      </v-alert>

      <p class="text-justify px-2">
        <b>Deskripsi</b> :
        {{ item.des }}
      </p>
      <p class="text-justify px-2">
        <b>ket</b> :
        {{ item.ket }}
      </p>
    </v-card>

    <Dialog
      :title="`No. ${jawabData.id} | ${jawabData.bab}`"
      :dialog="dialog"
      color="primary"
      @close="dialog = false"
      @save="save"
    >
      <v-card>
        <div class="mx-6">
          <div>
            <span><b>Deskripsi</b></span>
            <p class="text-justify">{{ jawabData.des }}</p>
          </div>

          <div v-if="jawabData.ket">
            <span><b>Keterangan</b></span>
            <p class="text-justify">{{ jawabData.ket }}</p>
          </div>

          <v-textarea
            @keyup="counter"
            prepend-icon="mdi-bullhorn-outline"
            outlined
            name="input-7-4"
            label="Argumentasi"
            v-model="jawabData.jawaban"
            auto-grow
            counter="2000"
            :rules="[
              (value) => (value || '').length <= 2000 || 'Max 2000 characters',
            ]"
          ></v-textarea>

          <v-text-field
            v-for="key in Object.keys(jawabData.details)"
            :key="key"
            :label="key"
            v-model.number="jawabData.details[key]"
            prepend-icon="mdi-key"
            outlined
            color
          ></v-text-field>

          <v-text-field
            outlined
            label="Link"
            prepend-icon="mdi-link"
            placeholder="Link Google drive dokumen pendukung"
          ></v-text-field>
        </div>
      </v-card>
    </Dialog>
  </div>
</template>

<script>
import { getData, setData } from '../firebase/firestore';
import data from '../assets/data';
import Dialog from '../components/Dialog.vue';
import { cons } from './conditions';
export default {
  components: { Dialog },
  data() {
    return {
      xx: data,
      wordCount: 0,
      dialog: false,
      helper: { key: [''], val: [''] },
      jawabData: {
        groupId: parseInt(this.$route.params.id),
        id: null,
        bab: '',
        jawaban: '',
        des: '',
        nilai: null,
        link: '',
        details: {},
      },
      details: null,
    };
  },
  methods: {
    addDetails(key, val) {
      return { [key]: val };
    },
    remDetails() {
      this.jawabData.details.splice(-1, 1);
    },
    close() {
      this.dialog = !this.dialog;
    },
    save() {
      setData('details', this.jawabData).then(() => {
        getData(
          'details',
          'groupId',
          '==',
          parseInt(this.$route.params.id)
        ).then((res) => {
          this.details = res;
          this.close();
        });
      });
    },
    jawab(item) {
      this.jawabData.id = item.no;
      this.jawabData.bab = item.bab;
      this.jawabData.des = item.des;
      this.jawabData.ket = item.ket;
      this.jawabData.jawaban = '';
      this.jawabData.details = cons[item.no];
      this.dialog = true;
    },
    check(id) {
      if (this.details) {
        return this.details.find((item) => item.id == id) ? 'success' : 'info';
      }
    },
    counter() {
      this.wordCount = this.jawabData.jawaban.split(' ').length - 1;
      console.log(this.jawabData.jawaban.split(' ').length);
    },
  },
  computed: {},
  mounted() {
    getData('details', 'groupId', '==', parseInt(this.$route.params.id)).then(
      (res) => {
        this.details = res;
      }
    );
  },
};
</script>

<style scoped>
.click {
  cursor: pointer;
}
</style>
