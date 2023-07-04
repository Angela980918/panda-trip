<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#3cb490" inactive-color="#000000">
      <van-tabbar-item v-for="(item, index) in tabbarData" :key="index" :to="item.path">
        <span>{{ item.text }}</span>
        <template #icon>
          <!-- <img v-if="currentIndex === index" :src="getAssetUrl(item.imageActive)">
          <img v-else :src="getAssetUrl(item.image)"> -->
          <van-icon v-if="currentIndex === index" :name="item.iconActive" />
          <van-icon v-else :name="item.icon" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
// import { getAssetUrl } from '@/utils/get_img.js'
import { ref } from 'vue';

const currentIndex = ref(0)

// const itemClick = (index, path) => {
//   // console.log(index);
//   currentIndex.value = index
//   router.push(path)
// }




</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 30px;
  }
}
</style>