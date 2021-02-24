<template>
  <li class="item" :class="{ 'item--selected': item.selected }">
    {{ item.description }} <button class="item__button"><FontAwesomeIcon icon="times"></FontAwesomeIcon></button>
  </li>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.item {
  &__button {
    //
  }

  &--selected {
    color: blue;
  }
}
</style>
