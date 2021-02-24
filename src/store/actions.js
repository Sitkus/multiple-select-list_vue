import { uuid } from 'vue-uuid';

export default {
  addItem({ commit }, description) {
    const newItem = {
      id: uuid.v4(),
      description,
      addedToCart: false,
      selected: false
    };

    commit('ADD_ITEM', newItem);
  },
  removeItem({ commit }, id) {
    commit('REMOVE_ITEM', id);
  },
  // searchItem({ commit }, searchParameters) {
  //   commit('FILTER_LIST', searchParameters);
  // },
  selectItem({ commit }, id) {
    commit('SELECT_ITEM', id);
  },
  clearAllItems({ commit }) {
    commit('CLEAR_ALL_ITEMS');
  }
};
