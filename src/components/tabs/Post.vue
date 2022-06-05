<template>
  <div>
    <v-card class="pa-2">
      <v-text-field
        label="Judul"
        v-model="baru.judul"
        prepend-icon="mdi-text-recognition"
        :rules="[(value) => !!value || 'Required']"
      />

      <v-text-field
        name="Img"
        label="Img-Link"
        v-model.trim="baru.img"
        prepend-icon="mdi-image"
        :rules="[(value) => !!value || 'Required']"
      />

      <v-textarea
        label="Descriptions"
        prepend-icon="mdi-text-box"
        v-model="baru.descriptions"
        :rules="[(value) => !!value || 'Required']"
      />

      <!-- Save Button -->
      <v-card-actions class="mb-4">
        <v-btn absolute right color="success" dark @click="submit"
          >Save <v-icon>mdi-content-save</v-icon></v-btn
        >
      </v-card-actions>
    </v-card>
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
