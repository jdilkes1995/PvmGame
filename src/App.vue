<template>
  <div class="App">
    <template v-if="!$route.meta.hideNavbar">
      <sidebar />
    </template>
  </div>
  <router-view />
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: { Sidebar },
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  /* margin-top: 60px; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jura", sans-serif;
}

.container {
  padding: 16px 96px;
}

:root {
  --primary: #4ade80;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --gearcards: #001d38;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

body {
  // background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

// .app {
//   display: flex;

//   main {
//     flex: 1 1 0;
//     padding: 2rem;

//     @media (max-width: 768px) {
//       padding-left: 6rem;
//     }
//   }
// }
</style>
