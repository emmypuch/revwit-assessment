<script>
import CompanyHeader from './CompanyHeader.vue'

export default {
  components: { CompanyHeader }
}
</script>

<template>
  <div>
    <div class="main-bar bg-[#1b1d21] h-screen w-screen">
      <div class="company-card_container">
        <div class="card-heading ml-[16rem]">
          <div class="flex">
            <router-link to="#" class="text-base text-white mt-4"> Companies </router-link>
            <img src="/src/assets/images/help.png" alt="" class="w-3 h-3 mt-[22px] ml-2" />
          </div>
        </div>
        <div class="border-b border-solid border-[1px] border-gray-500 mt-3"></div>

        <!-- Company Header Section -->
        <CompanyHeader class="ml-[15rem]" />
      </div>
    </div>
  </div>
</template>
