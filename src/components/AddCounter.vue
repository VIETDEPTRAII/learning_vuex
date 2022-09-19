<template>
  <button @click="increaseValue({value: 10})">Add 10</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      increaseValue: 'counter/increment'
    })
  }
};
</script>
