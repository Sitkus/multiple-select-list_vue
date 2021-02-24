<template>
  <button class="clear-button" @click="clearAllItems"><FontAwesomeIcon icon="trash"></FontAwesomeIcon>Clear All</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ClearAll',
  methods: mapActions(['clearAllItems'])
};
</script>

<style scoped lang="scss">
.clear-button {
  //
}
</style>
