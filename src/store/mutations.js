export default {
  ADD_ITEM: (state, newItem) => {
    state.items.unshift(newItem);
  },
  REMOVE_ITEM: (state, id) => {
    state.items = state.items.filter((item) => item.id !== id);
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
  CLEAR_ALL_ITEMS: (state) => {
    state.items = [];
  }
};
