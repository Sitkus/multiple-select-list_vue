import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'vue-uuid';
import createPersistedState from 'vuex-persistedstate';

import App from './App.vue';
import storeConfig from '@/store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusSquare,
  faTimes,
  faTrash,
  faSearch,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusSquare, faTimes, faTrash, faSearch, faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(Vuex);
Vue.use(uuid);

const store = new Vuex.Store({
  ...storeConfig,
  plugins: [createPersistedState()]
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');
