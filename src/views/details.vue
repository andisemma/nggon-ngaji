<template>
  <div>
    <!-- PDF -->
    <iframe
      class="ma-2"
      v-if="pak.group == 'pdf'"
      :src="pdf_embed(pak.link)"
      height="183"
      width="370"
    ></iframe>

    <!-- Youtube -->
    <video-embed
      v-if="pak.group == 'youtube'"
      :src="youtube_embed(pak.link)"
    ></video-embed>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
  created() {},
};
</script>
