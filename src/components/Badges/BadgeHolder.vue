<template>
  <div>
    <div
      v-for="(badgeHolder, index) in mockData"
      :key="index"
      class="inline-block rounded-[999px] mr-[5px]"
    >
      <span
        :style="{ backgroundColor: badgeHolder.backgroundColor, color: badgeHolder.textColor }"
        class="px-2 py-[0.5px] rounded-lg"
      >
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
