<template>
  <div class="home">
    <!-- 导航头部 -->
    <nav-bar></nav-bar>

    <!-- 轮播图 -->
    <home-banner></home-banner>

    <!-- 定位 -->
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/views/home/cpns/nav-bar/nav-bar.vue'
import HomeBanner from '@/views/home/cpns/home-banner/home-banner.vue'


</script>

<style lang="less" scoped>
.home {

  .location {
    display: flex;
    justify-content: center;
    align-items: center;

    .city {
      flex: 1;
      margin-left: 20px;
      font-size: 15px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }

    .position {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;

      .text {
        font-family: PingFangSC-Light;
        font-weight: 300;
        font-size: 12px;
        margin-right: 8px;
        color: #666;
      }

      img {
        width: 20px;
        margin-right: 20px;
      }
    }
  }
}
</style>