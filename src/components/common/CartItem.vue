<template>
  <li
    class="item"
    :class="{ 'item--selected': item.selected }"
    @click="(e) => checkIfCartItemIsClicked(e, item.id)"
    data-click="item"
  >
    {{ item.description }}
    <button class="item__button" @click="removeItem(item.id)"><FontAwesomeIcon icon="times"></FontAwesomeIcon></button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeItem', 'selectItem']),
    checkIfCartItemIsClicked(e, id) {
      if (e.target.getAttribute('data-click') === 'item') {
        this.selectItem(id);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.item {
  cursor: pointer;
  user-select: none;

  &__button {
    //
  }

  &--selected {
    background-color: blue;
  }
}
</style>
