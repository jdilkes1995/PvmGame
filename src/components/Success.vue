<template>
  <h1>{{ user.email }} has successfully signed in</h1>
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
