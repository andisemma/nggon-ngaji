<template>
  <v-card class="pl-2 pt-6 ma-4">
    <div class="mt-4">
      <v-tabs vertical v-model="tab">
        <v-tab v-for="(item, index) in items" :key="index" class="ml-0 mr-auto">
          <v-icon left> {{ item.icon }} </v-icon>
          {{ item.title }}
        </v-tab>

        <v-tabs-items v-model="tab" class="pa-2">
          <v-tab-item> <Dashboard /> </v-tab-item>
          <v-tab-item> <Post /></v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </div>
  </v-card>
</template>

<script>
import Dashboard from '../components/tabs/Dashboard.vue';
import Post from '../components/tabs/Post.vue';
import { getData, updateData, getOnce } from '../firebase/firestore';
export default {
  components: {
    Dashboard,
    Post,
  },
  data() {
    return {
      active: false,
      tab: null,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Post', icon: 'mdi-domain' },
      ],
    };
  },
  methods: {
    submitState() {
      updateData(this.active, 'auth', 'auth', 'active').then(() => {
        this.$store.commit('setState', ['auth', this.active, false]);
      });
    },
  },
  computed: {},
  mounted() {
    getData('fakultas', 'active', '==', true).then((res) =>
      this.$store.commit('setState', ['fakultas', res, false])
    );
    getOnce('auth', 'auth').then((res) => {
      this.active = res.active;
    });
  },
};
</script>

<style scoped>
.content {
  border-left: 2px solid black;
}
</style>
