<template>
  <div class="home">
    <!-- 导航头部 -->
    <nav-bar></nav-bar>

    <!-- 轮播图 -->
    <home-banner></home-banner>

    <!-- 定位 -->
    <home-search-box></home-search-box>

    <!-- 分类 -->
    <home-category></home-category>

    <!-- 热门精选 -->
    <home-content></home-content>
  </div>
</template>

<script setup>
import NavBar from '@/views/home/cpns/nav-bar/nav-bar.vue'
import HomeBanner from '@/views/home/cpns/home-banner/home-banner.vue'
import HomeSearchBox from '@/views/home/cpns/home-searchbox/home-searchbox.vue'
import HomeCategory from '@/views/home/cpns/home-category/home-category.vue'
import HomeContent from '@/views/home/cpns/home-content/home-content.vue'
import useHomeStore from '@/store/modules/home'
import useScroll from '@/hooks/useScroll'
import { watch } from 'vue'

// 发起网络请求
const homeStore = useHomeStore()
homeStore.fetchAllCategoryData();
homeStore.fetchAllHotData();
homeStore.fetchAllHouse();

// 监听window的滚动
// window.addEventListener('scroll', () => {

//   // 滚动到页面底部,相当于scrollHeight <= clientHeight + scrollTop 
//   // console.log('scrollHeight',scrollHeight,'scrollTop',scrollTop,'clientHeight',clientHeight);
// })

const { isReachBottom } = useScroll();
// watch监听
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchAllHouse().then(()=>{
      // 等待数据请求完成
      isReachBottom.value = false
    })
  }
})

</script>

<style lang="less" scoped></style>