<template>
  <div class="tab-bar">
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link> -->
    <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tab-bar-item" :class="{ active: currentIndex === index }" @click="itemClick(index, item.path)">
        <img v-if="currentIndex === index" :src="getAssetUrl(item.imageActive)" alt="">
        <img v-else :src="getAssetUrl(item.image)" alt="">
        <div class="text">{{ item.text }}</div>
      </div>
    </template>

  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetUrl } from '@/utils/get_img.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const currentIndex = ref(0)

const itemClick = (index,path) => {
  // console.log(index);
  currentIndex.value = index
  router.push(path)

}




</script>

<style lang="less" scoped>
.tab-bar {
  // background-color: aqua;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 55px;

  // flex布局,
  display: flex;

  // 浅浅的上边缘
  border-top: 1px solid #000000;


  .tab-bar-item {
    // 每一个item各占1个位置->平分所有位置
    flex: 1;

    // 对于每个item里面的img和text
    // 要求上下排列,要求他们居中,所以flex
    display: flex;
    flex-direction: column;

    // align-items会让元素在Y轴对齐
    align-items: center;

    // x轴方向上居中
    justify-content: center;

    //icon大小
    img {
      height: 30px;
    }

    //icon文本
    .text {
      font-size: 12px;
      margin-top: 3px;
    }

    // 选中后的颜色
    &.active {
      color: var(--primary-color)
    }

  }
}
</style>