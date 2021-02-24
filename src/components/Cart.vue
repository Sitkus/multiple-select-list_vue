<template>
  <section class="cart">
    <form class="search">
      <input class="search__input" type="text" />
      <button class="search__button"><FontAwesomeIcon icon="search"></FontAwesomeIcon></button>
    </form>

    <ul class="items-list">
      <li class="item">
        Item 1 <button class="item__button"><FontAwesomeIcon icon="times"></FontAwesomeIcon></button>
      </li>
      <li class="item">
        Item 2 <button class="item__button"><FontAwesomeIcon icon="times"></FontAwesomeIcon></button>
      </li>
      <li class="item">
        Item 3 <button class="item__button"><FontAwesomeIcon icon="times"></FontAwesomeIcon></button>
      </li>
      <li class="item">
        Item 4 <button class="item__button"><FontAwesomeIcon icon="times"></FontAwesomeIcon></button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Cart'
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
