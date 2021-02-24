export default {
  ADD_ITEM: (state, newItem) => {
    console.log(state, newItem);
  },
  REMOVE_ITEM: (state, id) => {
    console.log(state, id);
  },
  FILTER_LIST: (state, input, list) => {
    console.log(state, input, list);
  }
};
