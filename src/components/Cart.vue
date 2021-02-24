<template>
  <section class="cart">
    <form class="search">
      <input class="search__input" type="text" />
      <button class="search__button"><FontAwesomeIcon icon="search"></FontAwesomeIcon></button>
    </form>

    <ul class="items-list">
      <CartItem :key="item.id" v-for="item in itemsOutsideOfCart || itemsAddedToCart" :item="item" />
    </ul>
  </section>
</template>

<script>
import { CartItem } from '@/components/common';

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  props: {
    itemsOutsideOfCart: {
      type: Array
    },
    itemsAddedToCart: {
      type: Array
    }
  }
};
</script>

<style scoped lang="scss">
.cart {
  //
}

.search {
  &__input {
    //
  }

  &__button {
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
