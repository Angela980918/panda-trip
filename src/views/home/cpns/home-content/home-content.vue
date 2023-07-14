<template>
  <div class="content">
    <button @click="houseLsitClick" class="btn">加载更多</button>
    <div class="list">
      <template v-for="item in houseData" :key="item.data.houseId">
        <house-item-v9 v-if="item.discoveryContentType === 9" :item="item.data"/>
        <house-item-v3 v-else-if="item.discoveryContentType === 3" :item="item.data"/>
      </template>
    </div>
  </div>

</template>

<script setup>
import houseItemV3 from '@/components/home-house-item/house-item-v3.vue'
import houseItemV9 from '@/components/home-house-item/house-item-v9.vue'
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from "pinia"

const homeStore = useHomeStore()
const { houseData } = storeToRefs(homeStore)

const houseLsitClick = () => {
  console.log("房屋列表点击");
  homeStore.fetchAllHouse();
}
</script>

<style lang="less" scoped>
.content{
  .list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
}
</style>