<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <div class="text">我的位置</div>
        <img src="@/assets/img/home/location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();


// 点击获取城市位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取成功", res);
    // const latitude = res.coords.latitude;
    // const longitude = res.coords.longitude;
  }, err => {
    console.log("获取失败", err);
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

// 城市切换
const cityClick = () => {
  router.push('./city');
}
</script>

<style lang="less" scoped>
.search-box {
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