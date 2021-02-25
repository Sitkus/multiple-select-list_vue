export default {
  ADD_ITEM: (state, newItem) => {
    state.items.unshift(newItem);
  },
  MOVE_ALL_ITEMS_TO_CART: (state) => {
    state.items = state.items.map((item) => {
      if (!item.addedToCart) {
        item.addedToCart = true;
      }

      return item;
    });
  },
  REMOVE_ITEM: (state, id) => {
    state.items = state.items.filter((item) => item.id !== id);
  },
  MOVE_ALL_ITEMS_FROM_CART: (state) => {
    state.items = state.items.map((item) => {
      if (item.addedToCart) {
        item.addedToCart = false;
      }

      return item;
    });
  },
  // FILTER_LIST: (state, { items, input }) => {
  //   state.items = items.filter((item) => item.description.toLowerCase().includes(input.toLowerCase()));
  // },
  SELECT_ITEM: (state, id) => {
    state.items = state.items.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      }

      return item;
    });
  },
  MOVE_SELECTED_ITEMS_TO_CART: (state) => {
    state.items = state.items.map((item) => {
      if (!item.addedToCart && item.selected) {
        item.addedToCart = true;
        item.selected = false;
      }

      return item;
    });
  },
  MOVE_SELECTED_ITEMS_FROM_CART: (state) => {
    state.items = state.items.map((item) => {
      if (item.addedToCart && item.selected) {
        item.addedToCart = false;
        item.selected = false;
      }

      return item;
    });
  },
  CLEAR_ALL_ITEMS: (state) => {
    state.items = [];
  }
};
