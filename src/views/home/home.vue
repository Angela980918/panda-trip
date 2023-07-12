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
  </div>
</template>

<script setup>
import NavBar from '@/views/home/cpns/nav-bar/nav-bar.vue'
import HomeBanner from '@/views/home/cpns/home-banner/home-banner.vue'
import HomeSearchBox from '@/views/home/cpns/home-searchbox/home-searchbox.vue'
import HomeCategory from '@/views/home/cpns/home-category/home-category.vue'

</script>

<style lang="less" scoped></style>