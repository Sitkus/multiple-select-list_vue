<template>
  <form class="add-item" @submit.prevent="checkIfInputIsNotEmpty">
    <input class="add-item__input" type="text" placeholder="Add your item" v-model.trim="description" />
    <button class="add-item__button"><FontAwesomeIcon icon="plus-square"></FontAwesomeIcon></button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddItem',
  data() {
    return {
      description: '',
      error: ''
    };
  },
  methods: {
    ...mapActions(['addItem']),
    checkIfInputIsNotEmpty() {
      if (this.description.length > 0 && this.description.length <= 160) {
        this.addItem(this.description);

        this.error = '';
        this.description = '';
      } else {
        this.error = 'You must enter characters between 1-160';
      }
    }
  }
};
</script>

<style scoped lang="scss">
.add-item {
  &__input {
    //
  }

  &__button {
    //
  }
}
</style>
