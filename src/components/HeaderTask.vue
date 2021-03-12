<template>
  <div class="header-tasks">
    <h1>Tasks</h1>
    <switchsViewsTasks />
  </div>
</template>

<script>
import switchsViewsTasks from './SwitchsViewsTasks.vue';

export default {
  components: { switchsViewsTasks },
};
</script>

<style lang="scss" scoped>
.header-tasks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
</style>
