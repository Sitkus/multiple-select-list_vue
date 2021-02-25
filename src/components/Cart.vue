<template>
  <section class="cart">
    <h1 class="cart__title">{{ cartName }}</h1>

    <div class="search">
      <input
        class="search__input"
        type="text"
        placeholder="Search for something"
        name="search"
        v-model.trim="searchTerm"
      />
      <FontAwesomeIcon class="search__icon" icon="search"></FontAwesomeIcon>
    </div>

    <ul class="items-list">
      <CartItem :key="item.id" v-for="item in filterCurrentList" :item="item" />
    </ul>
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
      searchTerm: ''
    };
  },
  props: {
    cartName: {
      type: String,
      required: true
    },
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
  flex: 1;
  margin-bottom: 3rem;

  &__title {
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
  }
}

.search {
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  &__input {
    font-family: $font-family;
    width: 100%;
    padding: 1.5rem 6rem 1.5rem 2rem;
    outline: none;
    font-size: 1.6rem;
    color: $blue;
    background-color: $light-gray;

    &:focus {
      background-color: $green;
      color: white;

      &::placeholder {
        color: white;
      }
    }

    &::placeholder {
      color: $blue;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    background: none;
    outline: none;
    border: 0;
    font-size: 2rem;
    color: white;
  }
}

.items-list {
  border: 0.2rem solid $light-gray;
  height: 20rem;
  max-height: 20rem;
  overflow-y: scroll;
}
</style>
