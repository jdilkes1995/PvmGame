<template>
  <div class="create-team">
    <div class="create-team__form-inner">
      <input type="text" placeholder="Team Name" v-model="teamName" />
      <input type="text" placeholder="Team Phrase" v-model="teamPhrase" />
      <input type="text" placeholder="Team Colour" v-model="teamColour" />
      <button class="submit" @click="createTeam">Create Team</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamName: "",
      teamPhrase: "",
      teamColour: "",
    };
  },

  methods: {
    createTeam() {
      this.$store.dispatch("createTeam", {
        teamName: this.teamName,
        teamPhrase: this.teamPhrase,
        teamColour: this.teamColour,
      });
    },
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  mounted() {
    console.log(this.user);
  },
};
</script>
