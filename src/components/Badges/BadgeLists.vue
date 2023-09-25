<script>
import BadgeHolder from './BadgeHolder.vue'

export default {
  components: {
    BadgeHolder
  },
  data() {
    return {
      mockData: [
        {
          name: 'Sample',
          badges: [{}, {}, {}, {}]
        },
        {
          name: 'Intercom',
          badges: [
            { text: 'B2B', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            {
              text: 'Information Technology & Services',
              backgroundColor: '#4a3f15',
              textColor: '#e9e0b9'
            },
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#cae4d8' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#cae4d8' }
          ]
        },
        {
          name: 'Apple',
          badges: [
            { text: 'Computer Hardware', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'E-commerce', backgroundColor: '#583524', textColor: '#e7d4cf' },
            { text: 'Mobile', backgroundColor: '#4a3f15', textColor: '#e9e0b9' }
          ]
        },
        {
          name: 'Google',
          badges: [
            { text: 'B2B', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'B2C', backgroundColor: '#583524', textColor: '#e7d4cf' },
            { text: 'Information Te...', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'Internet', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'Mobile', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#cae4d8' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#cae4d8' }
          ]
        },
        {
          name: 'Attio',
          badges: [
            { text: 'B2B', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            {
              text: 'Enterprise',
              backgroundColor: '#4b2956',
              textColor: '#d6c0dd'
            },
            {
              text: 'Information Technology & Services',
              backgroundColor: '#4a3f15',
              textColor: '#e9e0b9'
            },
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#cae4d8' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#cae4d8' }
          ]
        },
        {
          name: 'Go to all companies page',
          badges: [
            { text: 'Airlines', backgroundColor: '#484c2b', textColor: '#d5d8b5' },
            { text: 'B2C', backgroundColor: '#484c2b', textColor: '#d5d8b5' },
            { text: 'E-commerce', backgroundColor: '#583524', textColor: '#e7d4cf' }
          ]
        },
        {
          name: 'Airbnb',
          badges: [
            { text: 'B2C', backgroundColor: '#484c2b', textColor: '#d5d8b5' },
            {
              text: 'Information Te... & Services',
              backgroundColor: '#4a3f15',
              textColor: '#e9e0b9'
            },
            { text: 'Internet', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'Marketplace', backgroundColor: '#254f46', textColor: '#cae4d8' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#cae4d8' },
            { text: 'Webservice', backgroundColor: '#1c4b61', textColor: '#cfe6f7' }
          ]
        },
        {
          name: 'PayPal',
          badges: [
            { text: 'B2C', backgroundColor: '#484c2b', textColor: '#d5d8b5' },
            {
              text: 'Financial Ser...',
              backgroundColor: '#484c2b',
              textColor: '#d5d8b5'
            },
            { text: 'Information Technolog...', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'Mobile', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            { text: 'Technoloy', backgroundColor: '#254f46', textColor: '#cae4d8' }
          ]
        },
        {
          name: 'LVMH',
          badges: [
            { text: 'B2C', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            {
              text: 'Consumer Discretionary',
              backgroundColor: '#374979',
              textColor: '#b2bcd8'
            },
            { text: 'E-commerce', backgroundColor: '#583524', textColor: '#e7d4cf' }
          ]
        },
        {
          name: 'Disney',
          badges: [
            { text: 'B2C', backgroundColor: '#484c2b', textColor: '#eff2cf' },
            {
              text: 'Entertainment & Recreation',
              backgroundColor: '#4a3f15',
              textColor: '#e9e0b9'
            }
          ]
        },
        {
          name: 'Microsoft',
          badges: [
            { text: 'B2B', backgroundColor: '#4a3f15', textColor: '#e9e0b9' },
            {
              text: 'Enterprise',
              backgroundColor: '#4b2956',
              textColor: '#d6c0dd'
            },
            {
              text: 'Information Technology & Services',
              backgroundColor: '#4a3f15',
              textColor: '#e9e0b9'
            },
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#cae4d8' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#cae4d8' }
          ]
        }
      ],

      linkedIn: [
        '166733',
        'intercom',
        'apple',
        'google',
        'attio',
        'united-airlines',
        'airbnb',
        'paypal',
        'lmvh',
        'the-wait-disney-com...',
        'microsoft'
      ],

      logoMapping: {
        Sample: '/src/assets/images/attio.png',
        Intercom: '/src/assets/images/intercom.png',
        Apple: '/src/assets/images/apple.png',
        Google: '/src/assets/images/google.png',
        Attio: '/src/assets/images/attio.png',
        Gotoallcompaniespage: '/src/assets/images/user.png',
        Airbnb: '/src/assets/images/airbnb.png',
        PayPal: '/src/assets/images/paypal.png',
        LVMH: '/src/assets/images/lvmh.png',
        Disney: '/src/assets/images/disney.png',
        Microsoft: '/src/assets/images/microsoft.png'
      }
    }
  }
}
</script>

<template>
  <div class="md:ml-[15rem] mt-6">
    <div class="overflow-x-auto overflow-y-auto max-h-[500px]">
      <table class="table-auto w-full">
        <thead>
          <tr class="text-white text-[11px] border-b border-t border-gray-500">
            <th class="p-[3px] border-r border-gray-500 flex justify-between">
              <div class="flex">
                <div
                  class="w-4 h-4 bg-transparent rounded-md p-2 border-solid border-[1px] border-gray-500 mr-2"
                ></div>
                <div class="text-[11px]">Company</div>
              </div>
              <div>
                <img
                  src="/src/assets/images/plus.png"
                  alt="Category Image"
                  class="w-3 h-3 ml-[0rem] mt-[1.5px]"
                />
              </div>
            </th>
            <th class="border-r border-gray-500">
              <div class="flex justify-between mb-[20px]">
                <div class="flex">
                  <img src="/src/assets/images/note.png" alt="" class="w-3 h-3 mr-2 mt-[2px]" />
                  <div class="text-[11px]">Categories</div>
                </div>
                <div class="ml-[0rem]">
                  <img src="/src/assets/images/stars.png" alt="Second Image" class="w-3 h-3 mr-2" />
                </div>
              </div>
            </th>
            <th class="p-[3px] border-r border-gray-500 flex justify-between">
              <div class="flex">
                <img
                  src="/src/assets/images/in.png"
                  alt="Category Image"
                  class="w-4 h-4 mt-[1.9px] mr-1"
                />
                <div class="text-[11px]">LinkedIn</div>
              </div>
              <div>
                <img src="/src/assets/images/stars.png" alt="Second Image" class="w-3 h-3 ml-2" />
              </div>
            </th>
            <th class="p-[3px] border-r border-gray-500">
              <div class="flex justify-between">
                <div class="flex mb-[20px]">
                  <img src="/src/assets/images/plus.png" alt="Category Image" class="w-3 h-3" />
                  <div class="text-[11px]">Last Interact...</div>
                </div>
                <div class="flex">
                  <img
                    src="/src/assets/images/plus.png"
                    alt="Category Image"
                    class="w-3 h-3 ml-3"
                  />
                  <img
                    src="/src/assets/images/stars.png"
                    alt="Second Image"
                    class="w-3 h-3 ml-3 mt-[2px]"
                  />
                </div>
              </div>
            </th>
            <th class="p-[3px] flex">
              <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4" />
              <div class="text-[11px]">Connection Strength</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in mockData"
            :key="index"
            class="text-white text-[11px] border-t border-b border-gray-500"
          >
            <td class="p-[3px] border-r text-[11px] flex border-gray-500 whitespace-pre-line">
              <div
                class="w-4 h-4 bg-transparent mt-1 rounded-md p-[5px] border-solid border-[1px] border-gray-500 mr-2"
              ></div>
              <div>
                <img
                  :src="logoMapping[item.name]"
                  alt="Company Logo"
                  class="w-3 h-3 rounded-md mt-[5px] mr-1"
                />
              </div>
              <div class="flex text-[12px]">{{ item.name }}</div>
            </td>
            <td
              class="p-[3px] border-r text-[11px] border-gray-500 w-2/5 whitespace-pre-line bg-[#21212e]"
            >
              <BadgeHolder :mockData="item.badges" />
            </td>

            <td
              class="p-[3px] w-32 border-r border-gray-500 text-[11px] bg-[#21212e] text-gray-500"
            >
              <li class="underline list-none">
                {{ linkedIn[index] }}
              </li>
            </td>

            <td
              class="p-[3px] w-44 border-r border-gray-500 text-[13px] text-gray-500 bg-[#21212e]"
            >
              <li class="list-none text-[11px]">No contact</li>
            </td>
            <td class="p-[3px] w-44 border-r border-gray-500 text-[13px] bg-[#21212e]">
              <div class="flex">
                <div class="bg-gray-500 p-[5px] h-[1px] w-[2px] mt-[5px] rounded-full"></div>
                <div class="ml-2 text-[11px]">No communication</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
