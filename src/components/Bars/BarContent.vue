<script>
import SideBar from './SideBar.vue'
import MainBar from './MainBar.vue'

export default {
  components: { SideBar, MainBar }
}
</script>

<template>
  <div class="flex flex-wrap">
    <div>
      <SideBar />
    </div>
    <MainBar />
  </div>
</template>
