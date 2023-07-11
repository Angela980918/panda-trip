import { getHotSuggest } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotData: []
  }),

  actions: {
    // 获取热门数据
    async fetchAllHotData(){
      const res =  await getHotSuggest()
      this.hotData = res.data
    }
  }
});

export default useHomeStore
