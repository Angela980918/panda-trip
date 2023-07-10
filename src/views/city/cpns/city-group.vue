<template>
  <div class="city-group">
    <van-index-bar highlight-color="#3cb490">
      <template v-for="item in groupData.cities" :key="item.id">
          <van-index-anchor class="title" :index="item.group" />
            <template v-for="city in item.cities" :key="city.id">
                <van-cell class="city-item" :title="city.cityName" />
                <van-back-top/>
              </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
// 定义Props
defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped></style>