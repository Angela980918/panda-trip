<template>
  <div class="detail bar-hidden">
    <van-nav-bar 
      title="房屋详情" 
      left-text="返回" 
      left-arrow 
      clickable
      @click-left="onClickLeft"
    >
    </van-nav-bar>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useDetailStore from '@/store/modules/detail'
import { storeToRefs } from 'pinia';

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
console.log(houseDetailData);

</script>

<style lang="less" scoped>
</style>