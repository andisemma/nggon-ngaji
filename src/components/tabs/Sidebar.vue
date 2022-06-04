<template>
  <div style="width: 20%">
    <v-card>
      <v-navigation-drawer permanent>
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jane Smith</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="tab(item)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Fakultas', icon: 'mdi-domain' },
        {
          title: 'Prodi',
          icon: 'mdi-home',
        },
        {
          title: 'Auditi',
          icon: 'mdi-account-edit',
        },
        {
          title: 'Auditor',
          icon: 'mdi-account-multiple-check',
        },
        {
          title: 'Assignment',
          icon: 'mdi-clipboard-account',
        },
        {
          title: 'Forum',
          icon: 'mdi-forum',
        },
      ],
    };
  },
  methods: {
    tab(item) {
      this.$store.commit('setState', ['tab', item.title, false]);
    },
  },
  computed: {},
  mounted() {},
};
</script>
