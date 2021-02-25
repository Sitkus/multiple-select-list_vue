<template>
  <section class="cart">
    <input class="cart__input" type="text" v-model.trim="searchTerm" />
    <button class="cart__search-button"><FontAwesomeIcon icon="search"></FontAwesomeIcon></button>

    <ul class="items-list">
      <CartItem :key="item.id" v-for="item in filterCurrentList" :item="item" />
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
      error: false
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
  methods: mapActions(['searchForItems']),
  computed: {
    filterCurrentList: function() {
      if (this.itemsOutsideOfCart !== undefined) {
        return this.itemsOutsideOfCart.filter((item) =>
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        return this.itemsAddedToCart.filter((item) =>
          item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
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
