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

    <div v-if="houseDetailData.mainPart">
      <!-- 轮播图 -->
      <detail-swpie
        :swipeData="houseDetailData.mainPart.topModule.housePicture.housePics"
      />

      <!-- info -->
      <detail-info :topInfos="houseDetailData.mainPart.topModule" />

      <!-- 房屋设施  -->
      <detail-section :titleText="'房屋设施'" :moreText="'查看全屋设施'">
        <detailFacility
          :houseFacility="
            houseDetailData.mainPart.dynamicModule.facilityModule.houseFacility
          "
        />
      </detail-section>

      <!-- 房东介绍  -->
      <detail-section :titleText="'房东介绍'" :moreText="'查看房东主页'">
        <detailLandlord
          :landlordModule="
            houseDetailData.mainPart.dynamicModule.landlordModule
          "
        />
      </detail-section>

      <!-- 热门评论  -->
      <detail-section
        :titleText="'热门评论'"
        :moreText="`查看全部${houseDetailData.mainPart.dynamicModule.commentModule.totalCount}条评论`"
      >
        <detailComment
          :commentModule="houseDetailData.mainPart.dynamicModule.commentModule"
        />
      </detail-section>

      <!-- 预定须知  -->
      <detail-section :titleText="'预定须知'">
        <detailBook
          :rulesModule="houseDetailData.mainPart.dynamicModule.rulesModule"
        />
      </detail-section>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import useDetailStore from "@/store/modules/detail";
import { storeToRefs } from "pinia";
import detailSwpie from "./cpns/detail-swipe/detail-swipe.vue";
import detailInfo from "./cpns/detail-info/detail-info.vue";
import detailSection from "./cpns/detail-section/detail-section.vue";
import detailFacility from "./cpns/detail-facility/detail-facility.vue";
import detailLandlord from "./cpns/detail-landlord/detail-landlord.vue";
import detailComment from "./cpns/detail-comment/detail-comment.vue";
import detailBook from "./cpns/detail-book/detail-book.vue";

const route = useRoute();
// console.log(route);
const houseID = route.params.id;
// console.log(houseID);
const onClickLeft = () => history.back();

// getHouseDetail(houseID).then( res =>{
//   console.log(res);
// },err => {
//   console.log(err);
// }
// )

const detailStore = useDetailStore();
detailStore.fetchHouseDetail(houseID);
// 房屋详情数据
const { houseDetailData } = storeToRefs(detailStore);
</script>

<style lang="less" scoped>

</style>