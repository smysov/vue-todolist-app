<template>
  <div class="wrapper">
    <navigation />
    <transition name="opacity">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import navigation from '@/components/Navigation.vue';

export default {
  components: { navigation },
};
</script>

<style lang="scss">
*,
::after,
::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

body {
  font-family: Georgia, Times, serif;
  font-size: 16px;
  font-weight: 500;
  background-color: #e7e7e7;
}

a {
  cursor: pointer;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
}

.wrapper__content {
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  &_fixed {
    margin-top: 40px;
  }
}

.container {
  width: 100%;
  flex: 0 0 auto;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: 480px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 25px;
  }
  @media screen and (min-width: 1100px) {
    padding: 0 35px;
  }
}

.opacity-enter-from {
  opacity: 0;
  transform: translateX(-10%);
}

.opacity-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.opacity-enter-active {
  transition: all .5s linear;
}

.opacity-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.opacity-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}

.opacity-leave-active {
  transition: all .5s linear;
}
</style>
