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
import { mapActions } from 'vuex';

export default {
  name: 'ButtonsRow',
  methods: mapActions([
    'moveAllItemsToCart',
    'moveSelectedItemsToCart',
    'moveSelectedItemsFromCart',
    'moveAllItemsFromCart'
  ])
};
</script>

<style scoped lang="scss">
.buttons-row {
  display: flex;
  margin: 0 auto 3rem;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
    width: 5rem;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    background-color: $blue;
    border: 0;
    color: white;

    &:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (min-width: 860px) {
  .buttons-row {
    flex-direction: column;
    justify-content: center;
    margin: 0 4rem;

    &__button {
      width: 4rem;
      padding: 1rem 0;
      margin: 0 0 1.5rem;
      transition: 100ms background-color ease-in-out;

      &:last-child {
        margin: 0 0;
      }

      &:hover {
        background-color: $green;
        transition: 100ms background-color ease-in-out;
      }
    }
  }
}
</style>
