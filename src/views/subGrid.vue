<template>
  <v-card class="mt-10">
    <!-- isLoading -->
    <Loader v-if="isLoading" />
    <!-- grid view -->
    <div v-else class="d-flex flex-wrap pa-8">
      <v-hover v-slot="{ hover }" v-for="(pak, index) in parent" :key="index">
        <v-card
          class="mx-4 my-4 pa-2"
          width="400"
          :elevation="hover ? 12 : 2"
          :href="pak.link"
          target="_blank"
        >
          <v-img
            v-if="pak.group == 'pdf'"
            class="ma-2"
            height="183"
            :src="require('/src/assets/pdf-logo.png')"
          ></v-img>

          <v-img
            v-if="pak.group == 'android'"
            class="ma-2"
            :src="pak.caption"
            height="183"
          ></v-img>

          <v-img
            v-if="pak.group == 'web'"
            class="ma-2"
            height="183"
            :src="require('/src/assets/web-logo.webp')"
          >
          </v-img>

          <v-img
            v-if="pak.group == 'youtube'"
            class="ma-2"
            height="183"
            :src="youtube_thumbnail(pak.link)"
          >
          </v-img>

          <v-card-title>
            <span>
              <v-icon>{{
                pak.group == 'pdf'
                  ? 'mdi-file-pdf-box'
                  : pak.group == 'youtube'
                  ? 'mdi-play-box'
                  : pak.group == 'android'
                  ? 'mdi-android'
                  : 'mdi-web-box'
              }}</v-icon>
              {{ pak.judul }}</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-subtitle class="pb-0">
            {{ pak.descriptions }}
          </v-card-subtitle>
        </v-card>
      </v-hover>
    </div>
  </v-card>
</template>

<script>
import Loader from '/src/components/Loader';

export default {
  components: { Loader },
  props: ['id'],
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
    youtube_thumbnail(url) {
      var link = url.match(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );
      link = 'http://img.youtube.com/vi/' + link[1] + '/hqdefault.jpg';
      console.log(link);
      return link;
    },
    youtube_embed(url) {
      var link = url.match(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );
      link = 'https://www.youtube.com/watch?v=' + link[1];
      console.log(link);
      return link;
    },
    pdf_embed(url) {
      var link = url.match(/.*[^-\w]([-\w]{25,})[^-\w]?.*/);
      link = 'https://drive.google.com/file/d/' + link[1] + '/preview';
      console.log(link);
      return link;
    },
  },
  computed: {},
  mounted() {
    console.log(this.$route.params.id);
    this.axios
      .get(
        `https://script.google.com/macros/s/AKfycbzXUeVxg7RnLijJ8mmWi7pn_FktOd_UNNjavcwn407VZ5zpn7YdNAPi46GiYY1qLrzd/exec?id=${this.$route.params.id}`
      )
      .then((res) => {
        this.parent = res.data;
        this.isLoading = false;
      });
  },
  created() {},
};
</script>
