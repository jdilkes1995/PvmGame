<template>
  <div class="modal">
    <h3 class="modal__header">{{ header }}</h3>
    <h4>Budget Gear</h4>
    <p>
      {{ head }}
    </p>
    <button @click="$emit('toggle')">close</button>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    head: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  justify-content: center;
  top: 0;
  right: 0;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  width: 1000px;
  height: 100vh;
  float: right;
  background: var(--dark);
  padding: 16px 24px;
}

button {
  margin-top: 16px;
  padding: 8px 16px;
  border: 1px solid black;
}
</style>
