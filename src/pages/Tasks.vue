<template>
  <div class="wrapper__content wrapper__content_fixed">
    <section class="section">
      <div class="container">
        <header-task />
        <transition-group name="list" class="tasks" v-if="tasks.length" tag="ul">
          <taskItem v-for="task of tasks" :key="task.id" v-bind="{ task }" />
        </transition-group>
        <p v-else>{{ messageNoTasks }}</p>
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
    tasks() {
      return this.$store.getters.getFilteredTasks;
    },
    messageNoTasks() {
      return this.$store.getters.getMessageTasks;
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

.list-enter-active, .list-leave-active {
  transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
