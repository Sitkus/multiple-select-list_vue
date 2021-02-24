export default {
  itemsOutsideOfCart: (state) => state.items.filter((item) => !item.addedToCart),
  itemsAddedToCart: (state) => state.items.filter((item) => item.addedToCart)
};
