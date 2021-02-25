<template>
  <form class="add-item" @submit.prevent="checkIfInputIsNotEmpty">
    <input
      class="add-item__input"
      :class="{ 'add-item__input--error': error }"
      type="text"
      placeholder="Add your item"
      name="add-item"
      v-model.trim="description"
    />
    <button class="add-item__button" :class="{ 'add-item__button--error': error }" type="submit">
      <FontAwesomeIcon icon="plus-square"></FontAwesomeIcon>
    </button>
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
      this.error = '';

      if (this.description.length > 0 && this.description.length <= 160) {
        this.addItem(this.description);

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
  position: relative;
  flex: 0 0 100%;
  margin-bottom: 4rem;

  &__input {
    font-family: $font-family;
    width: 100%;
    padding: 1.5rem 6rem 1.5rem 2rem;
    border: 0;
    border-radius: 0;
    outline: none;
    font-size: 1.8rem;
    color: white;
    background-color: $blue;
    box-shadow: 0.4rem 0.4rem 0 0 $green;
    -webkit-box-shadow: 0.4rem 0.4rem 0 0 $green;

    &::placeholder {
      color: white;
    }

    &:focus {
      background-color: $green;
      box-shadow: 0.4rem 0.4rem 0 0 $blue;
    }
  }

  &__input--error {
    box-shadow: 0.4rem 0.4rem 0 0 $red;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    background: none;
    outline: none;
    border: 0;
    font-size: 2.4rem;
    color: white;

    &:focus {
      color: $green;
    }
  }

  &__button--error:focus {
    color: white;
  }
}
</style>
