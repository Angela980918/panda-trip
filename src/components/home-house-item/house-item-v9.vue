<template>
  <div class="house-v9">
    <div class="item-card">
      <div class="img-top">
        <img :src="item.image.url" alt="">
      </div>
      <div class="intro-bottom">
        <div class="summary">{{ item.summaryText }}</div>
        <div class="title">{{ item.houseName }}</div>
        <div class="price">￥ {{ item.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.house-v9 {
  // 每个item宽度占屏幕一半
  width: 50%;
  margin-top: 20px;

  .item-card {
    // 信息在img上：子绝父相
    position: relative;
    margin: 5px;

    .img-top {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .intro-bottom {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .title {
        // 超过2行就省略号省略...
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        margin: 5px 0;
      }
    }
  }
}
</style>