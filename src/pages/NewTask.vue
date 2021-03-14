<template>
  <div class="wrapper__content">
    <section class="section">
      <div class="container">
        <form novalidate autocomplete="off" class="add-task" @submit.prevent="addTask">
          <div class="add-task__group">
            <input type="text" id="title" required="" v-model="task.title" />
            <label class="add-task__title" for="title">Title</label>
          </div>
          <div class="add-task__group">
            <textarea id="description" required="" v-model="task.descr"></textarea>
            <label class="add-task__title" for="description">Description</label>
          </div>
          <p>Priority</p>
          <div class="add-task__group add-task__group_row">
            <div class="add-task__row">
              <input
                v-model="task.priority"
                class="add-task__radio"
                type="radio"
                name="priority"
                id="low"
                value="low"
              />
              <label class="add-task__radio-title" for="low">Low</label>
            </div>
            <div class="add-task__row">
              <input
                v-model="task.priority"
                class="add-task__radio"
                type="radio"
                name="priority"
                id="medium"
                value="medium"
              />
              <label class="add-task__radio-title" for="medium">Medium</label>
            </div>
            <div class="add-task__row">
              <input
                v-model="task.priority"
                class="add-task__radio"
                type="radio"
                name="priority"
                id="high"
                value="high"
              />
              <label class="add-task__radio-title" for="high">High</label>
            </div>
          </div>
          <div class="add-task__group">
            <button class="add-task__button button">Add task</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    task() {
      return this.$store.getters.getTask;
    },
  },
  methods: {
    addTask() {
      const { title, descr, priority } = this.task;
      if (!title) {
        return;
      }

      this.$store.dispatch('addTask', {
        id: Math.random()
          .toString(32)
          .toLowerCase()
          .slice(2, 9),
        title,
        descr,
        priority,
        date: new Date(Date.now()).toLocaleString(),
      });

      this.task.title = '';
      this.task.descr = '';
      this.task.priority = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper__content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
.message {
  color: crimson;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
}
.add-task {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 50px;
  max-width: 500px;
  margin: 0 auto;
  &__group {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 90%;
    &_row {
      flex-direction: row;
      justify-content: center;
      column-gap: 20px;
      @media (min-width: 480px) {
        justify-content: space-around;
      }
      @media (min-width: 768px) {
        justify-content: space-evenly;
      }
    }
  }
  &__row {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
  &__title {
    position: absolute;
    top: -5px;
    font-size: 18px;
    font-weight: 500;
    pointer-events: none;
    transition: 0.5s;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 22px;
    }
    @media (min-width: 1100px) {
      font-size: 24px;
    }
  }
  &__button {
    position: relative;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 15px;
    background-color: #8b6f0a;
    align-self: center;
    border: 2px solid transparent;
    outline-offset: 5px;
    outline-color: #8b6f0a;
    cursor: pointer;
    transition: 0.5s linear;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 3px;
      height: 50px;
      background-color: #e7e7e7;
    }

    &::before {
      top: -15px;
      left: 9px;
      transform: rotate(45deg);
    }

    &::after {
      bottom: -18px;
      right: 10px;
      transform: rotate(45deg);
    }
    &:hover {
      background-color: #237c08;
    }
  }
}
.add-task {
  &__radio {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }
  &__radio-title {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      width: 20px;
      height: 20px;
      border: 2px solid #8b6f0a;
      border-radius: 50%;
    }
    &::after {
      content: '';
      position: absolute;
      left: 5px;
      top: 5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #8b6f0a;
      transform: scale(0);
      transition: 0.5s;
    }
  }
  &__radio:checked + .add-task__radio-title::after {
    transform: scale(1);
  }
}
input,
textarea {
  border: none;
  padding: 0 0 3px 10px;
  border-bottom: 2px solid #c5c4c4;
  outline: none;
  background-color: transparent;
  &:focus,
  &:valid {
    border-color: #8b6f0a;
    & ~ label {
      top: -23px;
    }
  }
}
textarea {
  resize: none;
}

p {
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
  @media (min-width: 1100px) {
    font-size: 24px;
  }
}
</style>
