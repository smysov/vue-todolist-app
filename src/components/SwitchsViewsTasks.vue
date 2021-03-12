<template>
  <div class="icons">
    <button class="icons__button" @click="setGridClass(true)">
      <svg
        :class="{ active: column }"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
      </svg>
    </button>
    <button class="icons__button" @click="setColumnClass(false)">
      <svg
        :class="{ active: !column }"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="8" y1="6" x2="21" y2="6"></line>
        <line x1="8" y1="12" x2="21" y2="12"></line>
        <line x1="8" y1="18" x2="21" y2="18"></line>
        <line x1="3" y1="6" x2="3" y2="6"></line>
        <line x1="3" y1="12" x2="3" y2="12"></line>
        <line x1="3" y1="18" x2="3" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SwitchViewTasks',
  methods: {
    setGridClass(value) {
      this.$store.dispatch('setColumn', value);
    },
    setColumnClass(value) {
      this.$store.dispatch('setColumn', value);
    },
  },
  computed: {
    column() {
      return this.$store.state.column;
    },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  display: flex;
  align-items: center;
  column-gap: 8px;
  &__button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    outline-color: #d86314;
    cursor: pointer;
  }
}

svg {
  color: #949494;
  &.active {
    color: #d86314;
    width: 30px;
    height: 30px;
  }
}
</style>
