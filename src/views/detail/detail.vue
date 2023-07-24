<template>
  <div class="detail bar-hidden">
    <van-nav-bar title="房屋详情" left-text="返回" left-arrow clickable @click-left="onClickLeft">
    </van-nav-bar>

    <div v-if="houseDetailData.mainPart">
      <!-- 轮播图 -->
      <detail-swpie :swipeData="houseDetailData.mainPart.topModule.housePicture.housePics" />

      <!-- info -->
      <detail-info :topInfos="houseDetailData.mainPart.topModule" />


      <!-- section  -->
      <div class="facility">
        <detail-section :topInfos="houseDetailData.mainPart.topModule"></detail-section>
      </div>

    </div>


  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useDetailStore from '@/store/modules/detail'
import { storeToRefs } from 'pinia';
import detailSwpie from './cpns/detail-swipe/detail-swipe.vue'
import detailInfo from './cpns/detail-info/detail-info.vue'
import detailSection from './cpns/detail-section/detail-section.vue'

const route = useRoute()
// console.log(route);
const houseID = route.params.id
// console.log(houseID);
const onClickLeft = () => history.back();


// getHouseDetail(houseID).then( res =>{
//   console.log(res);
// },err => {
//   console.log(err);
// }
// )

const detailStore = useDetailStore()
detailStore.fetchHouseDetail(houseID)
// 房屋详情数据
const { houseDetailData } = storeToRefs(detailStore)


</script>

<style lang="less" scoped>
.detail {}
</style>