<template>
  <v-dialog
    max-width="400"
    v-model="this.$attrs.isLoading"
    persistent
    transition="dialog-transition"
  >
    <v-card>
      <v-card-title class="text-center">Please wait...</v-card-title>
      <v-progress-linear
        color="deep-purple accent-4"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    attrs() {
      return this.$attrs.isLoading;
    },
  },
};
</script>
