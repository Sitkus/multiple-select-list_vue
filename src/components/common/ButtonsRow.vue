<template>
  <div class="buttons-row">
    <button class="buttons-row__button" @click="moveAllItemsToCart">
      <FontAwesomeIcon icon="angle-double-right"></FontAwesomeIcon>
    </button>
    <button class="buttons-row__button" @click="moveSelectedItemsToCart">
      <FontAwesomeIcon icon="angle-right"></FontAwesomeIcon>
    </button>
    <button class="buttons-row__button" @click="moveSelectedItemsFromCart">
      <FontAwesomeIcon icon="angle-left"></FontAwesomeIcon>
    </button>
    <button class="buttons-row__button" @click="moveAllItemsFromCart">
      <FontAwesomeIcon icon="angle-double-left"></FontAwesomeIcon>
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ButtonsRow',
  methods: mapActions([
    'moveAllItemsToCart',
    'moveSelectedItemsToCart',
    'moveSelectedItemsFromCart',
    'moveAllItemsFromCart'
  ]),
  computed: mapGetters(['itemsOutsideOfCart', 'itemsAddedToCart'])
};
</script>

<style scoped lang="scss">
.buttons-row {
  &__button {
    //
  }
}
</style>
