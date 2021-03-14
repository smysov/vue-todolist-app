<template>
  <header class="header">
    <div class="navbar">
      <div class="container">
        <div class="navbar__content">
          <span class="navbar__logo">Todolist</span>
          <ul class="navbar__list">
            <li v-for="link of links" :key="link.name">
              <router-link class="navbar__link" :to="link.url">{{
                link.name
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'add task',
          url: '/',
        },
        {
          name: 'tasks',
          url: '/tasks',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 15px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);

  @media (min-width: 480px) {
    padding: 20px 0;
  }

  @media (min-width: 768px) {
    padding: 25px 0;
  }
}

.navbar {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-weight: 700;
    text-transform: uppercase;
    color: #be9446;

    @media (min-width: 480px) {
      font-size: 20px;
    }
  }

  &__list {
    font-weight: 600;
    display: flex;
    column-gap: 15px;

    @media (min-width: 480px) {
      font-size: 18px;
      column-gap: 20px;
    }
  }

  &__link {
    text-transform: uppercase;
    transition: 0.3s all;
    color: #a17728;

    &:hover {
      color: #c59d5c;
    }
  }

  .router-link-exact-active {
    position: relative;
    color: #dac226;

    &::before {
      position: absolute;
      bottom: -3px;
      content: '';
      width: 100%;
      height: 3px;
      background-color: #dac226;
    }
  }
}
</style>
