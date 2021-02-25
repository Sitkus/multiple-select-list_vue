<template>
  <main class="main" id="app">
    <AddItem />
    <Cart :cartName="'Selected items'" :items-outside-of-cart="itemsOutsideOfCart" />
    <ButtonsRow />
    <Cart :cartName="'Added items'" :items-added-to-cart="itemsAddedToCart" />
    <ClearAll />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Cart from '@/components/Cart.vue';
import AddItem from '@/components/forms/AddItem.vue';
import { ButtonsRow, ClearAll } from '@/components/common';

export default {
  name: 'App',
  components: {
    AddItem,
    Cart,
    ButtonsRow,
    ClearAll
  },
  computed: mapGetters(['itemsOutsideOfCart', 'itemsAddedToCart'])
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
}
</style>
