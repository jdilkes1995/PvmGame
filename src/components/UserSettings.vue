<template>
  <div v-if="user">
    <h1>{{ user.displayName || "User" }} has successfully signed in</h1>
    <!-- <span>{{ user.metadata.lastSignInTime || "N/A" }}</span> -->
    <div>
      <button @click="handleSignOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async handleSignOut() {
      try {
        await this.$store.dispatch("signOut");
        // Clear the user data from local storage
        localStorage.removeItem("user");
        localStorage.removeItem("isSignedIn"); // Remove the isSignedIn flag from local storage
        // Redirect the user to the login page or some other page
        this.$router.push("/register");
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    isSignedIn() {
      return localStorage.getItem("isSignedIn") === "true";
    },
  },
  mounted() {
    if (!this.user) {
      // Retrieve the user object from local storage
      const user = JSON.parse(localStorage.getItem("user"));
      this.$store.commit("setUser", user);
    }
    console.log(this.user);
  },
};
</script>
