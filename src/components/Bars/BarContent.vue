<script>
import SideBar from './SideBar.vue'
import MainBar from './MainBar.vue'

export default {
  components: { SideBar, MainBar }
}
</script>

<template>
  <div class="container relative">
    <div class="absolute">
      <SideBar />
    </div>
    <MainBar />
  </div>
</template>

<style scoped>
/* @media screen and (max-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
} */
</style>
