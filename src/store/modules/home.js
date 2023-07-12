import { getHotSuggest, getCategory } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotData: [],
    categoryData: []
  }),

  actions: {
    // 获取热门数据
    async fetchAllHotData(){
      const res =  await getHotSuggest()
      this.hotData = res.data
    },
    async fetchAllCategoryData(){
      const res = await getCategory()
      this.categoryData = res.data
    }
  }
});

export default useHomeStore
