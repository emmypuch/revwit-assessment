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
