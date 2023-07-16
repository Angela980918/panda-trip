import { onMounted, onUnmounted } from "vue";
import { ref } from "vue";

// 封装滚动到底部自动加载的函数
export default function useScroll() {
  // 初始默认为没有到底
  const isReachBottom = ref(false);

  const scrollListener = () => {
    // 文档距离窗口顶部的距离
    const scrollTop = document.documentElement.scrollTop;
    // 页面总体长度
    const scrollHeight = document.documentElement.scrollHeight;
    // 屏幕的长度
    const clientHeight = document.documentElement.clientHeight;

    if (clientHeight + scrollTop >= scrollHeight) {
      // homeStore.fetchAllHouse();
      console.log("加载更多");
      isReachBottom.value = true;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", scrollListener);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListener);
  });

  return { isReachBottom }; 
}
