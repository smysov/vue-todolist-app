<template>
  <div class="search">
    <input class="search__input" placeholder="Search" v-model="search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: this.value,
    };
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  watch: {
    search(value) {
      this.$store.dispatch('setSearch', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  &::before {
    position: absolute;
    content: '';
    top: 7px;
    left: 9px;
    width: 15px;
    height: 15px;
    border: 1px solid #a3a3a3;
    border-radius: 50%;

    @media (min-width: 480px) {
      top: 8px;
    }
  }

  &::after {
    position: absolute;
    content: '';
    top: 22px;
    left: 20px;
    width: 10px;
    height: 1px;
    background-color: #a3a3a3;
    transform: rotate(45deg);

    @media (min-width: 480px) {
      top: 23px;
    }
  }

  &__input {
    font-style: italic;
    color: #505050;
    padding: 6px 6px 6px 30px;
    max-width: 165px;
    border: 1px solid #707070;
    border-radius: 20px;
    outline: none;
    background-color: #eeeeee;

    @media (min-width: 480px) {
      max-width: 220px;
      padding: 7px 7px 7px 32px;
      border-width: 2px;
    }

    &:focus {
      border-color: #8b6f0a;
    }
  }
}
</style>
