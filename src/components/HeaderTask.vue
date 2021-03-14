<template>
  <div class="header-tasks">
    <search :value="getSearch" @search="getSearch = $event" />
    <switchsViewsTasks />
  </div>
</template>

<script>
import switchsViewsTasks from './SwitchsViewsTasks.vue';
import search from './Search.vue';

export default {
  components: { switchsViewsTasks, search },
  computed: {
    getSearch() {
      return this.$store.getters.getSearch;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-tasks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
