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
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 1rem 1.5rem;

  &__button {
    background: none;
    border: 0;
    margin-left: 1.5rem;
    font-size: 1.6rem;
    color: $blue;
  }

  &--selected {
    background-color: $light-gray;
    color: $green;
  }
}
</style>
