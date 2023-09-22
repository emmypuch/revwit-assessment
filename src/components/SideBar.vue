<script setup></script>

<template>
  <div>
    <div
      class="card-container h-screen z-[1] w-full min-w-[220px] flex-[160px] top-0 left-0 overflow-x-hidden"
    >
      <div
        class="card-sidebar_link border-r border-solid border-gray-900 bg-gray-900 fixed max-w-[220px] w-full top-0 bottom-0"
      >
        <div class="sidebar-wrapper flex flex-col justify-between w-full h-full">
          <div class="sidebar-contents">
            <div class="card-logo_flex flex justify-between py-3 px-3">
              <div class="flex justify-center items-center">
                <h4 class="bg-blue-500 text-sm rounded-lg p-1 text-center text-white w-8 h-7">A</h4>
                <h3 class="text-white text-base ml-2">Acclaim</h3>
              </div>
              <div class="flex justify-center items-center">
                <h3 class="text-white">W</h3>
              </div>
            </div>
            <div class="border-b border-solid border-gray-500"></div>

            <div class="actions-flex flex py-3 px-3 mt-2">
              <div
                class="action-icon bg-gray-800 border-solid border-[1px] border-gray-500 rounded-lg px-1 w-full max-h-14"
              >
                <div class="flex-icon flex justify-between">
                  <div class="flex justify-center items-center">
                    <h5 class="text-sm text-white">K</h5>
                    <h3 class="text-sm text-white ml-2">Quick actions</h3>
                  </div>
                  <div
                    class="bg-gray-800 border-solid border-[1px] border-gray-500 rounded-lg w-8 h-7 p-1 text-center"
                  >
                    Q
                  </div>
                </div>
              </div>

              <div
                class="flex bg-gray-800 border-solid border-[1px] p-[6px] border-gray-500 rounded-lg ml-4"
              >
                <h5 class="text-sm text-white">S</h5>
                <div
                  class="bg-gray-800 border-solid border-[1px] p-[2px] border-gray-500 rounded-lg text-white"
                >
                  /
                </div>
              </div>
            </div>

            <!-- SideBar Links -->
            <div class="links pt-1 pr-[20px] flex flex-col justify-between">
              <ul class="sidebar-links list-none">
                <li class="">
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3"
                  >
                    <img src="" alt="" />
                    Notifications
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    Tasks
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    Notes
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    Emails
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    Reports
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="records">
              <img src="" alt="" />
              <h4 class="text-gray-500 text-sm mt-6 ml-3">Records</h4>
              <ul class="sidebar-links">
                <li class="bg-gray-500 rounded-lg w-10/12 ml-2">
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    Companies
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    People
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    Deals
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="lists">
              <img src="" alt="" />
              <h4 class="text-gray-500 text-sm mt-6 ml-3">Lists</h4>
              <ul class="sidebar-links">
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="" alt="" />
                    Sales
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="help_center pb-3">
            <router-link
              to="#"
              class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
            >
              <img src="" alt="" />
              Upgrade Attio
            </router-link>
            <router-link
              to="#"
              class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
            >
              <img src="" alt="" />
              Invite teammates
            </router-link>
            <router-link
              to="#"
              class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
            >
              <img src="" alt="" />
              Help and first steps
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Toggle Area -->
    <div class="toggle" id="navLinks">
      <div class="menu-icon"></div>
      <div class="menu-icon"></div>
      <div class="menu-icon"></div>
    </div>
  </div>
</template>
