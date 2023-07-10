<template>
  <div class="city bar-hidden">
    <!-- 顶部 固定-->
    <div class="top">
      <!-- 搜索框 -->
      <van-search v-model="searchValue" show-action placeholder="城市/区域/位置" @search="onSearch" @cancel="onCancel"
        shape="round" />

      <!-- 标签页 -->
      <van-tabs v-model:active="tabActive" @click-tab="onClickTab">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 内容 滚动 -->
    <div class="content">
      <template v-for="item in currentGroup?.cities">
        <div class="group-item">
          <h2 class="title">{{ item.group }} </h2>
          <div class="list">
            <template v-for="city in item.cities" :key="city.id">
              <div class="list-item">
                {{ city.cityName }}
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/store/modules/city'
import { storeToRefs } from 'pinia';
import { showToast } from 'vant/es';

const searchValue = ref('')
const router = useRouter()
const tabActive = ref()

//pinia封装  
const cityStore = useCityStore()
//请求
cityStore.fetchAllCitiesData()
//解构cityStore，并且是响应式数据
const { allCities } = storeToRefs(cityStore)

//监听取消点击，返回上一层
const onCancel = () => {
  router.back()
}

//监听搜索功能
const onSearch = () => {
  console.log("搜索测试");
}

//监听tab标签页点击
const onClickTab = (e) => {
  console.log(e);
}

// 获取选中标签后的数据,并且成为响应式数据
const currentGroup = computed(() =>
  allCities.value[tabActive.value]
)
</script>

<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 100px);
    margin-top: 20px;
    overflow-y: auto;
  }
}
</style>