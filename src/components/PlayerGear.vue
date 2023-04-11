<template>
  <div>
    <GearPopUp
      v-show="selectedBoss !== null"
      @toggle="selectedBoss = null"
      :header="selectedBoss ? selectedBoss.name : ''"
      :head="selectedBoss ? selectedBoss.budgetGear?.head : ''"
    />
    <div :class="selectedBoss ? 'bodyBlur' : 'body'">
      <div class="outer_box">
        <h1>GEAR SETUPS FOR VAIROUS BOSSES!</h1>

        <div class="inner_box">
          <div class="bosscard">
            <div v-for="boss in bosses" :key="boss">
              <img class="boss-image" :src="boss.image" />
              <h2>{{ boss.name }}</h2>
              <h3 :class="bossLevel(boss)">{{ boss.lvl }}</h3>
              <button class="gear_button" @click="selectedBoss = boss">
                GEAR SETUP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GearPopUp from "@/components/GearPopUp.vue";

export default {
  components: {
    GearPopUp,
  },
  data() {
    return {
      bosses: [
        {
          name: "GENERAL GRAARDOR",
          image: require("@/assets/gcards/Bandos.webp"),
          lvl: "MEDIUM",
          budgetGear: {
            head: "Dragon Helm",
          },
        },
        {
          name: "COMMANDER ZILYANA",
          image: require("@/assets/gcards/Zilyana.webp"),
          lvl: "MEDIUM",
        },
        {
          name: "KREE'ARRA",
          image: require("@/assets/gcards/Kree.webp"),
          lvl: "MEDIUM",
        },
        {
          name: "K'RIL TSUTASROTH",
          image: require("@/assets/gcards/Kril.png"),
          lvl: "MEDIUM",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "THEATRE OF BLOOD",
          image: require("@/assets/gcards/Tob.png"),
          lvl: "HARD",
        },
        {
          name: "TOMBS OF AMASCUT",
          image: require("@/assets/gcards/Toa.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
        {
          name: "Chambers Of Xeric",
          image: require("@/assets/gcards/CoX.webp"),
          lvl: "HARD",
        },
      ],
      selectedBoss: null,
    };
  },
  computed: {
    bossLevel() {
      return (boss) =>
        boss.lvl === "EASY"
          ? "easy"
          : boss.lvl === "MEDIUM"
          ? "medium"
          : "hard";
    },
  },
};
</script>

<style scoped>
.inner_box {
  display: flex;
  position: relative;
  flex-direction: column;
  overflow-y: scroll;
  align-content: center;
  border: 3px solid var(--dark);
  box-shadow: 25%;
  background-color: var(--dark-alt);
  border-radius: 10px;
  padding: 30px 30px;
  width: 1100px;
  max-width: 100%;
  height: 800px;
}

.bodyBlur {
  filter: blur(5px); /* styles for the blurred body class */
  background-color: rgba(0, 0, 0, 0.5);
}

.inner_box::-webkit-scrollbar {
  width: 8px;
}

.inner_box::-webkit-scrollbar-thumb {
  background-color: var(--dark-alt);
  height: 20%;
  border-radius: 20px;
}

.inner_box::-webkit-scrollbar-thumb:hover {
  background-color: var(--dark);
  border-radius: 13px;
}

.outer_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  margin: 0 auto;
}

.bosscard {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.bosscard > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  min-height: 300px;
  /* padding: 20px; */
  margin: 15px;
  background-color: var(--light);
  color: black;
  box-shadow: black 100%;
  border-radius: 8px;
}

.boss-image {
  width: 80px;
}

.hard {
  color: red;
  margin-top: 4px;
  font-weight: bolder;
}

.medium {
  color: orange;
  margin-top: 4px;
  font-weight: bolder;
}

.easy {
  color: green;
  margin-top: 4px;
  font-weight: bolder;
}

.gear_button {
  width: 150px;
  height: 35px;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 15px;
  border: 1px solid var(--dark);
  border-radius: 4px;
}

.gear_button:hover {
  background-color: var(--dark-alt);
  transition: 0.2s ease-in;
}
</style>
