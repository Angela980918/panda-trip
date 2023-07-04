<template>
  <div class="home">
    <!-- 导航头部 -->
    <nav-bar></nav-bar>

    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe>
        <van-swipe-item>
          <img src="https://pic.tujia.com/upload/resourcespic/day_230601/thumb/202306011051192791_750_250.jpg_.webp"
            alt="">
        </van-swipe-item>
      </van-swipe>
    </div>

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

</script>

<style lang="less" scoped>
.home {

  .banner {
    height: 128px;
    background-color: aqua;

    img {
      width: 100%;
    }
  }

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
      }

      img {
        width: 20px;
        margin-right: 20px;
      }
    }
  }
}
</style>