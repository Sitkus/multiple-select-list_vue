<template>
  <button class="clear-button" @click="clearAllItems">
    <FontAwesomeIcon class="clear-button__icon" icon="trash"></FontAwesomeIcon>Clear All
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ClearAll',
  methods: mapActions(['clearAllItems'])
};
</script>

<style scoped lang="scss">
.clear-button {
  font-family: $font-family;
  width: 100%;
  padding: 1.5rem 0;
  font-size: 1.6rem;
  color: white;
  background-color: $blue;
  margin-top: 1rem;

  &__icon {
    color: white;
    margin-right: 1rem;
  }
}

@media screen and (min-width: 860px) {
  .clear-button {
    transition: 100ms background-color ease-in-out;

    &:hover {
      background-color: $red;
      transition: 100ms background-color ease-in-out;
    }
  }
}
</style>
