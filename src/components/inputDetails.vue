<template>
  <v-card class="d-block" height="400" style="overflow: auto">
    <br /><br />
    <v-card
      v-for="(item, index) in details"
      :key="item.no"
      elevation="4"
      class="ma-4"
      width="auto"
    >
      <v-alert :type="item.terjawab ? 'success' : 'info'">
        No. {{ item.no }} | {{ item.bab }}
      </v-alert>

      <p class="text-justify px-2">
        <b>Deskripsi</b> :
        {{ item.des }}
      </p>
      <p class="text-justify px-2" v-if="item.ket">
        <b>ket</b> :
        {{ item.ket }}
      </p>

      <v-textarea
        :disabled="item.terjawab"
        class="mx-2"
        prepend-icon="mdi-bullhorn-outline"
        outlined
        name="input-7-4"
        label="Argumentasi"
        v-model="formDetails[index].jawaban"
        auto-grow
        counter="2000"
        :rules="[
          (value) => (value || '').length <= 2000 || 'Max 2000 characters',
        ]"
      ></v-textarea>
      <v-card-actions>
        <v-spacer />
        <v-icon
          @click="save(index)"
          color="primary"
          v-if="!item.terjawab && formDetails[index].jawaban.length <= 2000"
          >mdi-content-save</v-icon
        >
        <v-icon
          color="warning"
          v-if="item.terjawab"
          @click="details[index].terjawab = false"
          >mdi-note-edit</v-icon
        >
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
import { getOnce, updateData } from '../firebase/firestore';
import data from '../assets/data';
import { cons } from '../views/conditions';
export default {
  props: ['id'],
  components: {},
  data() {
    return {
      formDetails: false,
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
    save(index) {
      this.formDetails[index].terjawab = true;
      this.details[index].terjawab = true;
      updateData(this.formDetails, 'parent', this.id, `penilaianDetails`);
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
      this.details.find((item) => item.id == id) ? 'success' : 'info';
    },
    counter() {
      this.wordCount = this.jawabData.jawaban.split(' ').length - 1;
      console.log(this.jawabData.jawaban.split(' ').length);
    },
    getDetails() {
      getOnce('parent', this.id).then((cb) => {
        this.formDetails = cb.penilaianDetails;
        let res = [];
        this.xx.map((item) => {
          let temp = {};
          let itemDetail = cb.penilaianDetails.find((it) => it.no == item.no);

          temp = { ...item, ...itemDetail };
          res.push(temp);
        });
        this.details = res;
      });
    },
  },
  computed: {},
  mounted() {
    this.getDetails();
  },
};
</script>
