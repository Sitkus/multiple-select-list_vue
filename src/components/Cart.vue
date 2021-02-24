<template>
  <section class="cart">
    <input class="cart__input" type="text" v-model.trim="searchTerm" @input="checkIfInputIsNotEmpty" />
    <button class="cart__search-button"><FontAwesomeIcon icon="search"></FontAwesomeIcon></button>

    <ul class="items-list">
      <CartItem :key="item.id" v-for="item in itemsOutsideOfCart || itemsAddedToCart" :item="item" />
    </ul>

    <p v-if="error">{{ error }}</p>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { CartItem } from '@/components/common';

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  data() {
    return {
      searchTerm: '',
      error: ''
    };
  },
  props: {
    itemsOutsideOfCart: {
      type: Array
    },
    itemsAddedToCart: {
      type: Array
    }
  },
  methods: {
    ...mapActions(['searchItem']),
    checkIfInputIsNotEmpty() {
      if (this.searchTerm.length > 0) {
        this.error = '';
      } else {
        this.error = 'You must enter characters between 1-20';
      }

      this.filterItems();
    },
    filterItems() {
      // this.currentList = this.listToFilter.filter((item) =>
      //   item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      // );
    }
  }
};
</script>

<style scoped lang="scss">
.cart {
  //
  &__input {
    //
  }

  &__search-button {
    //
  }
}

.items-list {
  //
}

.item {
  &__button {
    //
  }
}
</style>
