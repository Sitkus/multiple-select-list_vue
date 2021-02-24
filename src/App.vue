<template>
  <main class="main" id="app">
    <AddItem />
    <Cart :items-outside-of-cart="itemsOutsideOfCart" />
    <ButtonsRow />
    <Cart :items-added-to-cart="itemsAddedToCart" />
    <ClearAll />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
  methods: mapActions(['selectItem']),
  computed: mapGetters(['itemsOutsideOfCart', 'itemsAddedToCart'])
};
</script>

<style lang="scss">
.main {
  //
}
</style>
