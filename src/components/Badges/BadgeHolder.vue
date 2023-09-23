<template>
  <div>
    <div v-for="(badgeHolder, index) in mockData" :key="index" class="badge">
      <span :style="{ backgroundColor: badgeHolder.backgroundColor, color: badgeHolder.textColor }">
        {{ badgeHolder.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mockData: Array
  }
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;
}
</style>
