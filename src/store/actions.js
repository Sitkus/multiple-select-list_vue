import { uuid } from 'vue-uuid';

export default {
  addItem({ commit }, description) {
    const newItem = {
      id: uuid.v4(),
      description,
      addedToCart: false
    };

    commit('ADD_ITEM', newItem);
  },
  removeItem({ commit }, id) {
    commit('REMOVE_ITEM', id);
  },
  searchItem({ commit }, input, list) {
    commit('FILTER_LIST', input, list);
  }
};
