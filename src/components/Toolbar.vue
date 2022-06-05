<template>
  <v-app-bar color="white" elevation="12" fixed class="mb-6">
    <img src="@/assets/logo.png" height="32" width="32" alt="" />

    <h2>Nggon Ngaji</h2>

    <VSpacer />
    <span></span>
    <!-- <v-btn v-if="$route.path == '/'" @click="signIn" id="signIn">
      <img src="@/assets/google-logo.png" height="30" width="30" alt="" />
      sign in
    </v-btn>
    <div v-else @click="menu = true" style="cursor: pointer">
      <span>{{ $store.state.profile.displayName }} </span>
      <v-avatar size="32">
        <img :src="$store.state.profile.photoURL" alt="" />
      </v-avatar> -->

    <!-- Dialog -->
    <!-- <VDialog
        v-model="menu"
        scrollable
        :overlay="false"
        max-width="300px"
        transition="dialog-transition"
      >
        <VCard>
          <v-img
            class="white--text align-end"
            height="200px"
            :src="$store.state.profile.photoURL"
          >
          </v-img>
          <VCardTitle> {{ $store.state.profile.displayName }} </VCardTitle>
          <v-card-subtitle class="pb-0"> detail Profil disini </v-card-subtitle>

          <VCardActions>
            <v-btn color="orange" text> Catatan </v-btn>
            <VSpacer />
            <v-icon color="red" @click="signOut()">mdi-logout-variant</v-icon>
          </VCardActions>
        </VCard>
      </VDialog>
    </div> -->
  </v-app-bar>
</template>

<script>
import * as Auth from '../firebase/auth';
import { getOnce } from '../firebase/firestore';

export default {
  computed: {},
  methods: {
    signOut() {
      this.$store.commit('signOut');
      localStorage.clear();
      Auth.fireSignOut();
      this.$router.replace('/');
    },
    signIn() {
      Auth.googleLogin().then((res) => {
        this.$store.commit('setProfile', res);
        getOnce('users', res.email).then((cb) => {
          if (cb) {
            this.$store.commit('setState', ['userDetails', cb, false]);
            cb.role == 'admin'
              ? this.$router.push('/admin')
              : cb.role == 'auditor'
              ? this.$router.push('/auditor')
              : cb.role == 'prodi'
              ? this.$router.push('/auditi')
              : this.$router.push('/');
          } else {
            this.signOut();
          }
        });
      });
    },
  },
  data() {
    return {
      menu: false,
    };
  },
};
</script>
