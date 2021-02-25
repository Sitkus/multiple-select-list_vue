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
  selectItem({ commit }, id) {
    commit('SELECT_ITEM', id);
  },
  moveAllItemsToCart({ commit }) {
    commit('MOVE_ALL_ITEMS_TO_CART');
  },
  moveAllItemsFromCart({ commit }) {
    commit('MOVE_ALL_ITEMS_FROM_CART');
  },
  moveSelectedItemsToCart({ commit }) {
    commit('MOVE_SELECTED_ITEMS_TO_CART');
  },
  moveSelectedItemsFromCart({ commit }) {
    commit('MOVE_SELECTED_ITEMS_FROM_CART');
  },
  clearAllItems({ commit }) {
    commit('CLEAR_ALL_ITEMS');
  }
};
