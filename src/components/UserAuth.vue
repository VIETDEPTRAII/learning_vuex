<template>
  <h1>{{ isUserAuthenticated === true ? 'Login' : 'Not login' }}</h1>
  <button @click="login()" v-if="!isUserAuthenticated">Login</button>
  <button @click="logout()" v-if="isUserAuthenticated">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },

  computed: {
    ...mapGetters(['isUserAuthenticated'])
  }
}
</script>
