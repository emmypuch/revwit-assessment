<script>
import CompanyHeader from '../CompanyHeader.vue'
import BadgeLists from '../Badges/BadgeLists.vue'

export default {
  components: { CompanyHeader, BadgeLists }
}
</script>

<template>
  <div class="">
    <div class="main-bar bg-[#1b1d21] h-screen w-screen">
      <div class="company-card_container">
        <div class="card-heading md:ml-[16rem]">
          <div class="flex">
            <router-link to="#" class="text-base text-white mt-4 ml-16 md:ml-0">
              Companies
            </router-link>
            <img src="/src/assets/images/help.png" alt="" class="w-3 h-3 mt-[22px] ml-2" />
          </div>
        </div>
        <div class="border-b border-solid border-[1px] border-gray-500 mt-3"></div>

        <CompanyHeader class="md:ml-[15rem]" />
        <div>
          <BadgeLists />
        </div>
      </div>
    </div>
  </div>
</template>
