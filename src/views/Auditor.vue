<template>
  <div>
    <!-- Loader -->
    <Loader v-if="dialog" />
    <!-- body -->
    <Parent role="auditor" />
  </div>
</template>

<script>
import { getData } from '../firebase/firestore';
import Loader from '../components/Loader.vue';
import Parent from '../components/Parent.vue';
import dayjs from 'dayjs';

export default {
  components: {
    Loader,
    Parent,
  },
  data() {
    return {
      dialog: false,
      parent: {},
    };
  },
  methods: {
    replace(item) {
      this.$store.commit('setState', ['auditiDetails', item, false]);
      this.$router.push(`/auditor/${item.uid}`);
    },
    tgl(date) {
      return dayjs(date).format('DD-MM-YYYY');
    },
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
    state(index) {
      if (!this.parent[index].perbaikan.state) {
        if (
          !this.parent[index].penilaian[0] ||
          !this.parent[index].penilaian[1]
        ) {
          if (!this.parent[index].data.state) {
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
  },
  computed: {},
  mounted() {
    this.dialog = !this.dialog;
    getData(
      'parent',
      'auditor.email',
      'array-contains',
      this.$store.state.profile.email
    ).then((res) => {
      this.$store.commit('setState', ['parent', res, false]);
      this.dialog = !this.dialog;
    });
  },
};
</script>
