<template>
  <main class="main" id="app">
    <AddItem />
    <Cart />
    <ButtonsRow />
    <Cart />
    <ClearAll />
  </main>
</template>

<script>
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
  }
};
</script>

<style lang="scss">
.main {
  //
}
</style>
