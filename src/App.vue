<template>
  <base-container title="Vuex" v-if="isUserAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <add-counter></add-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import AddCounter from './components/AddCounter.vue';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    AddCounter,
    FavoriteValue,
    UserAuth
  },

  computed: {
    ...mapGetters(['isUserAuthenticated'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
