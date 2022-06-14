import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';

const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: 's@yaGant3ng',
  isCompression: true,
});
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    parent: [],
    children: [],
    userDetails: {},
    isLoading: false,
    data: null,
  },
  mutations: {
    setProfile(state, data) {
      state.profile = data;
    },
    signOut(state) {
      state.profile = null;
    },
    /**
     *
     * @param {*} mutation_Name
     * @param {*} stateNAme
     * @param {*} Data
     * @param {*} isArray
     */
    setState(state, [stateName, data, isArray]) {
      isArray ? state[stateName].push(data) : (state[stateName] = data);
    },
    del(state, [index, stateName]) {
      state[stateName].splice(index, 1);
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
