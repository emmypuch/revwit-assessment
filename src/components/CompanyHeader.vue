<template>
  <div class="flex flex-col md:flex-row justify-between items-center md:mt-2">
    <div class="flex mt-4">
      <ul class="list-none bg-transparent border-solid border-[1px] border-[#313337] rounded-lg">
        <li>
          <router-link
            to="#"
            class="no-underline flex items-center text-[11px] leading-[24px] text-white px-3"
          >
            <div class="bg-[#0fc27b] p-[2px] h-3 w-4 rounded-[3px] mr-1">
              <img src="/src/assets/images/user.png" alt="" class="w-4 h-2 mr-2" />
            </div>
            All Companies
            <img src="/src/assets/images/arrow-down.png" alt="" class="w-4 h-4 ml-2" />
          </router-link>
        </li>
      </ul>

      <ul
        class="list-none bg-transparent border-solid border-[1px] border-[#313337] rounded-lg ml-2"
      >
        <li>
          <router-link
            to="#"
            class="no-underline flex items-center text-[11px] leading-[24px] text-white px-3"
          >
            <img src="/src/assets/images/filter.png" alt="" class="w-4 h-4 mr-2" />
            Filter
          </router-link>
        </li>
      </ul>

      <ul
        class="list-none bg-transparent border-solid border-[1px] border-[#313337] rounded-lg ml-2"
      >
        <li>
          <router-link
            to="#"
            class="no-underline flex items-center text-[11px] leading-[24px] text-white px-3"
          >
            <img src="/src/assets/images/user.png" alt="" class="w-4 h-3 mr-1" />
            Sort
          </router-link>
        </li>
      </ul>
    </div>

    <div class="flex mt-4 mr-4">
      <ul
        class="list-none bg-transparent border-solid border-[1px] border-[#313337] rounded-lg ml-2"
      >
        <li>
          <router-link to="#" class="no-underline flex items-center px-2">
            <img src="/src/assets/images/chat.png" alt="" class="w-4 h-4 mr-2 mt-1" />
          </router-link>
        </li>
      </ul>
      <ul
        class="list-none bg-transparent border-solid border-[1px] border-[#313337] rounded-lg ml-2 mr-2"
      >
        <li>
          <router-link
            to="#"
            class="no-underline flex items-center text-[11px] leading-[24px] text-white px-3"
          >
            <img src="/src/assets/images/setting.png" alt="" class="w-4 h-4 mr-2" />
            View Setting
          </router-link>
        </li>
      </ul>

      <ul class="list-none bg-transparent border-solid border-[1px] border-[#313337] rounded-lg">
        <li>
          <router-link
            to="#"
            class="no-underline flex items-center text-[11px] leading-[24px] text-white px-3"
          >
            <img src="/src/assets/images/download.png" alt="" class="w-4 h-4 mr-2" />
            Import / Export
            <img src="/src/assets/images/arrow-down.png" alt="" class="w-4 h-4 ml-2" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
