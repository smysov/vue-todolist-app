<template>
  <li class="tasks__item">
    <h2>{{ task.title }}</h2>
    <p>{{ task.descr }}</p>
    <span>{{ task.date }}</span>
    <a class="tasks__close"></a>
  </li>
</template>

<script>
export default {
  props: {
    task: Object,
    default: () => {},
  },
};
</script>

<style lang="scss" scoped>
.tasks__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 100%;
  padding: 20px 30px 10px 10px;
  background-color: #fff;
  box-shadow: 0 0 5px 0 #999999;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
  &.column {
    width: 48%;
    align-items: flex-start;
  }
}
.tasks__close {
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
h2 {
  font-size: 14px;
  @media (min-width: 480px) {
    font-size: 18px;
  }
  @media (min-width: 980px) {
    font-size: 22px;
  }
}
p {
  font-size: 14px;
  margin-bottom: auto;
  @media (min-width: 480px) {
    font-size: 18px;
  }
  @media (min-width: 980px) {
    font-size: 22px;
  }
}
span {
  font-size: 14px;
  color: #a7a7a7;
  @media (min-width: 480px) {
    font-size: 18px;
  }
  @media (min-width: 980px) {
    font-size: 20px;
  }
}
</style>
