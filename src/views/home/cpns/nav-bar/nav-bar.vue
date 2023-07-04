<template>
  <div class="nav-bar">
    <img src="/public/favicon.ico" alt="">
    <span>熊猫旅途</span>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.nav-bar {
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 40px;
    border-radius: 50%;
  }

  span {
    margin-left: 6px;
    font-size: 18px;
    font-weight: bold;
    font-family: "YouYuan", "幼圆", "圆体", cursive;
  }
}
</style>