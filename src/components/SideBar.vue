<!-- eslint-disable vue/no-export-in-script-setup -->
<script>
export default {
  data() {
    return {
      cardContainerStyle: {
        transform: window.innerWidth >= 768 ? 'translateX(0%)' : 'translateX(-100%)'
      },
      menuIconClicked: false
    }
  },
  methods: {
    toggleCard() {
      if (window.innerWidth < 768) {
        this.cardContainerStyle.transform = 'translateX(0%)'
        document.body.addEventListener('click', this.closeCardOnClickOutside)
      }
    },
    closeCard() {
      this.cardContainerStyle.transform = 'translateX(-100%)'
      document.body.removeEventListener('click', this.closeCardOnClickOutside)
    },
    closeCardOnClickOutside(event) {
      if (
        this.$el &&
        !this.$el.contains(event.target) &&
        event.target !== document.getElementById('navLinks')
      ) {
        this.closeCard()
        this.menuIconClicked = false
      }
    }
  }
}
</script>

<template>
  <div>
    <div
      v-if="!menuIconClicked"
      class="card-container h-screen z-[1] w-full md:w-[220px] min-w-[220px] flex-[160px] top-0 left-0 overflow-x-hidden md:fixed md:rounded-lg md:shadow-sm md:duration-500 md:-translate-x-full md:bg-gray-500"
      :style="cardContainerStyle"
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
                class="action-icon bg-gray-800 border-solid border-[1px] border-gray-500 rounded-lg px-1 w-full md:max-h-14 md:h-auto"
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

              <div class="md:w-1/2 md:pl-2 mt-2 md:mt-0">
                <div
                  class="flex bg-gray-800 border-solid border-[1px] p-[6px] border-gray-500 rounded-lg ml-4"
                >
                  <h5 class="text-sm text-white">S</h5>
                  <div
                    class="bg-gray-800 border-solid border-[1px] p-[2px] border-gray-500 rounded-lg text-white ml-2"
                  >
                    /
                  </div>
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
                    <img src="/src/assets/images/bell.png" alt="" class="w-4 h-4 mr-2" />
                    Notifications
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="/src/assets/images/bell.png" alt="" class="w-4 h-4 mr-2" />
                    <div class="flex justify-between">
                      <div>Tasks</div>
                      <div
                        class="flex justify-end ml-[120px] text-[#c59502] bg-[#574305] p-[4px] rounded-md h-5 w-4 items-center"
                      >
                        a
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="/src/assets/images/note.png" alt="" class="w-4 h-4 mr-2" />
                    Notes
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="/src/assets/images/email.png" alt="" class="w-4 h-4 mr-2" />
                    Emails
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="/src/assets/images/bell.png" alt="" class="w-4 h-4 mr-2" />
                    Reports
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="records">
              <img src="" alt="" />
              <h4 class="text-gray-500 text-sm mt-6 ml-3">Records</h4>
              <ul class="sidebar-links">
                <li class="bg-gray-500 rounded-lg w-11/12 ml-2 h-[27px]">
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img
                      src="/src/assets/images/user.png"
                      alt=""
                      class="w-4 h-3 mr-2 bg-[#296aea] rounded-md"
                    />
                    Companies
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img
                      src="/src/assets/images/user.png"
                      alt=""
                      class="w-4 h-3 mr-2 bg-[#276cf0] rounded-md"
                    />
                    People
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img
                      src="/src/assets/images/user.png"
                      alt=""
                      class="w-4 h-3 mr-2 bg-[#fd9037] rounded-md"
                    />
                    Deals
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="lists">
              <div class="flex justify-between">
                <div class="flex justify-center items-center">
                  <img src="/src/assets/images/arrow-down.png" alt="" class="w-5 h-5 mt-6 ml-3" />
                  <div><h4 class="text-gray-500 text-sm mt-6 ml-3">Lists</h4></div>
                </div>
                <div class="text-white mt-6 mr-3 flex justify-center items-center">a</div>
              </div>
              <ul class="sidebar-links">
                <li>
                  <router-link
                    to="#"
                    class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
                  >
                    <img src="/src/assets/images/pin.png" alt="" class="w-5 h-5 mr-2" />
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
              <img src="/src/assets/images/upgrade.png" alt="" class="w-4 h-4 mr-2" />
              Upgrade Attio
            </router-link>
            <router-link
              to="#"
              class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
            >
              <img src="/src/assets/images/user.png" alt="" class="w-5 h-3 mr-2" />
              Invite teammates
            </router-link>
            <router-link
              to="#"
              class="no-underline flex items-center text-sm leading-[24px] text-white px-3 mt-2"
            >
              <img src="/src/assets/images/help.png" alt="" class="w-4 h-4 mr-2" />
              Help and first steps
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Toggle Area -->
    <div
      v-if="!menuIconClicked"
      class="toggle md:hidden mr-[10px] items-center flex flex-col justify-center absolute left-0 top-[25px] rounded-sm ml-[15px]"
      @click="toggleCard"
      id="navLinks"
    >
      <div class="menu-icon w-[25px] h-[3px] bg-gray-800 m-1"></div>
      <div class="menu-icon w-[25px] h-[3px] bg-gray-800 m-1"></div>
      <div class="menu-icon w-[25px] h-[3px] bg-gray-800 m-1"></div>
    </div>
  </div>
</template>
