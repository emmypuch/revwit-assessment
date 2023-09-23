<template>
  <div>
    <div class="flex justify-between pl-2">
      <div class="flex mt-4">
        <ul class="list-none bg-transparent border-solid border-[1px] border-gray-500 rounded-lg">
          <li>
            <router-link
              to="#"
              class="no-underline flex items-center text-center text-[11px] text-white px-3 py-[5px]"
            >
              <img src="/src/assets/images/bell.png" alt="" class="w-3 h-3 mr-2" />
              Quick actions
              <img src="/src/assets/images/arrow-down.png" alt="" class="w-4 h-4 ml-2" />
            </router-link>
          </li>
        </ul>
      </div>

      <div class="flex mt-4 mr-4">
        <ul
          class="list-none bg-transparent border-solid border-[1px] border-gray-500 rounded-lg ml-2"
        >
          <li class="mt-1">
            <router-link to="#" class="no-underline flex items-center text-sm text-white px-3">
              <img src="/src/assets/images/search.png" alt="" class="w-3 h-3 mr-2" />
              <p class="">/</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
