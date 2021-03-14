<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section">
      <div class="container">
        <header-task />
        <ul class="tasks">
          <taskItem v-for="task of getTasks" :key="task.id" v-bind="{ task }" />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import taskItem from '@/components/TaskItem.vue';
import headerTask from '@/components/HeaderTask.vue';

export default {
  components: { taskItem, headerTask },
  computed: {
    getTasks() {
      return this.$store.getters.getFilteredTasks;
    },
  },
};
</script>

<style lang="scss" scoped>
.tasks {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  @media (min-width: 480px) {
    flex-direction: row;
  }
  &__close {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 5px;
    right: 5px;
    transition: 0.3s transform;
    &:hover {
      transform: scale(1.2);
      &::before,
      &::after {
        background-color: crimson;
      }
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 11px;
      right: 5px;
      width: 16px;
      height: 2px;
      background-color: #000;
      transition: 0.3s background-color;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
}
p {
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #999999;
  font-style: italic;
}
</style>
