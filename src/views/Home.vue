<template>
  <v-card class="mt-10">
    <v-alert type="info" prominent>
      Selamat datang di Nggon Ngaji IAIN Salatiga
    </v-alert>

    <!-- isLoading -->
    <Loader v-if="isLoading" />
    <!-- grid view -->
    <div v-else class="d-flex flex-wrap pa-8">
      <v-hover v-slot="{ hover }" v-for="(pak, index) in parent" :key="index">
        <v-card
          class="mx-4 my-4 pa-2"
          width="400"
          :elevation="hover ? 12 : 2"
          @click="replace(pak.judul)"
        >
          <v-img
            class="ma-2"
            height="183"
            :src="match(pak.img)"
            referrerpolicy="no-referrer"
          >
          </v-img>

          <v-card-title>
            <span>{{ pak.judul }}</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-subtitle class="pb-0">
            {{ pak.descriptions }}
          </v-card-subtitle>

          <!-- <v-card-actions>
            <v-btn color="orange" text @click="replace(pak)"> Details </v-btn>

            <v-spacer />

            <v-tooltip left color="red" v-if="$route.name == 'auditi'">
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  color="red"
                  @click="del(pak.uid)"
                  >mdi-delete</v-icon
                >
              </template>
              <span>Delete</span>
            </v-tooltip>
          </v-card-actions> -->
        </v-card>
      </v-hover>
    </div>
  </v-card>
</template>

<script>
import Loader from '/src/components/Loader';
export default {
  components: { Loader },
  data() {
    return {
      parent: {},
      isLoading: true,
    };
  },
  methods: {
    match(url) {
      var link = url.match(/.*[^-\w]([-\w]{25,})[^-\w]?.*/);
      link = 'https://drive.google.com/uc?export=view&id=' + link[1];
      console.log(link);
      return link;
    },
    replace(item) {
      this.$router.push(`/${item}`);
    },
  },
  computed: {},
  mounted() {
    this.axios
      .get(
        'https://script.google.com/macros/s/AKfycbzXUeVxg7RnLijJ8mmWi7pn_FktOd_UNNjavcwn407VZ5zpn7YdNAPi46GiYY1qLrzd/exec?id=parent'
      )
      .then((res) => {
        this.parent = res.data;
        this.isLoading = false;
      });
  },
  created() {},
};
</script>
