<template>
  <div v-if="user">
    <h1>{{ user.displayName }} has successfully signed in</h1>
    <span>{{ user.metadata.lastSignInTime }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    console.log("success user", this.user);
    if (!this.user) {
      this.$router.push("/"); // Redirect to login if no user is logged in
    }
  },
};
</script>
