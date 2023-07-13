<template>
  <div class="house-v3">
    <h2>v3  {{ item.houseName }}</h2>
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

<style lang="less" scoped></style>