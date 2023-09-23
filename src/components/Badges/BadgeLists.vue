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
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#7f9f95' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#7f9f95' }
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
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#7f9f95' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#7f9f95' }
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
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#7f9f95' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#7f9f95' }
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
            { text: 'Marketplace', backgroundColor: '#254f46', textColor: '#7f9f95' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#7f9f95' },
            { text: 'Webservice', backgroundColor: '#1c4b61', textColor: '#97b4c6' }
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
            { text: 'Technoloy', backgroundColor: '#254f46', textColor: '#7f9f95' }
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
            { text: 'SAAS', backgroundColor: '#254f46', textColor: '#7f9f95' },
            { text: 'Technology', backgroundColor: '#254f46', textColor: '#7f9f95' }
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div class="md:ml-[15rem] mt-4">
    <div class="overflow-x-auto overflow-y-auto max-h-[470px]">
      <table class="table-auto min-w-full">
        <thead>
          <tr>
            <th class="border px-4 py-2 text-white text-sm">
              <div
                class="w-4 h-4 bg-transparent rounded-md p-2 border-solid border-[1px] border-gray-500 mr-2"
              ></div>
              Company
              <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4 ml-2" />
            </th>
            <th class="border px-4 py-2 text-white text-sm">
              <div class="flex items-center">
                <img src="/src/assets/images/note.png" alt="" class="w-4 h-4 mr-2" />
                Categories
              </div>
              <img src="/src/assets/images/stars.png" alt="Second Image" class="w-4 h-4 ml-2" />
            </th>
            <th class="border px-4 py-2 text-white text-sm flex items-center">
              LinkedIn
              <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4 ml-2" />
            </th>
            <th class="border px-4 py-2 text-white text-sm">
              Last Interact...
              <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4 ml-2" />
              <img src="/src/assets/images/stars.png" alt="Second Image" class="w-4 h-4 ml-2" />
            </th>
            <th class="border px-4 py-2 text-white text-sm">
              <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4 ml-2" />
              Connection Strength
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in mockData" :key="index">
            <td class="border px-4 py-2 text-white text-sm whitespace-pre-line">{{ item.name }}</td>
            <td class="border px-4 py-2 whitespace-pre-line">
              <BadgeHolder :badgeData="item.badges" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
