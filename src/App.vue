<template>
  <VApp>
    <div>
      <Toolbar />
      <v-divider class="my-10"></v-divider>
      <router-view />
      <v-divider class="my-4"></v-divider>
      <v-footer absolute>
        <div style="text-align: center; width: 100%">
          Made with <v-icon color="red">mdi-heart</v-icon> by andisemma &copy;
          {{ new Date().getFullYear() }}
        </div>
      </v-footer>
    </div>
  </VApp>
</template>

<script>
import Toolbar from '@/components/Toolbar';

export default {
  components: {
    Toolbar,
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>
