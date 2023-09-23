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
    <div class="overflow-x-auto overflow-y-auto max-h-[500px]">
      <div class="flex text-white font-semibold text-sm border-b border-t border-gray-500">
        <div class="p-4 border-r border-gray-500 flex">
          <div
            class="w-4 h-4 bg-transparent rounded-md p-2 border-solid border-[1px] border-gray-500 mr-2"
          ></div>
          Company
          <img
            src="/src/assets/images/plus.png"
            alt="Category Image"
            class="w-4 h-4 ml-[4rem] mt-1"
          />
        </div>
        <div class="p-4 border-r border-gray-500 flex justify-between">
          <div class="flex items-center">
            <img src="/src/assets/images/note.png" alt="" class="w-4 h-4 mr-2" />
            Categories
          </div>
          <div class="ml-[5rem]">
            <img src="/src/assets/images/stars.png" alt="Second Image" class="w-4 h-4 ml-2" />
          </div>
        </div>
        <div class="p-4 border-r border-gray-500 flex">
          LinkedIn
          <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4 ml-2" />
        </div>
        <div class="p-4 border-r border-gray-500 flex">
          Last Interact...
          <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4 ml-2" />
          <img src="/src/assets/images/stars.png" alt="Second Image" class="w-4 h-4 ml-2" />
        </div>
        <div class="p-4 flex">
          <img src="/src/assets/images/plus.png" alt="Category Image" class="w-4 h-4 ml-2" />
          Connection Strength
        </div>
      </div>

      <div
        v-for="(item, index) in mockData"
        :key="index"
        class="flex text-white text-sm border-t border-b border-gray-500"
      >
        <div class="p-4 border-r border-gray-500 w-1/5 whitespace-pre-line">{{ item.name }}</div>
        <div class="p-4 border-r border-gray-500 w-3/5 whitespace-pre-line bg-gray-800">
          <BadgeHolder :mockData="item.badges" />
        </div>
        <div class="p-4 w-1/5 border-r border-gray-500"></div>
      </div>
    </div>
  </div>
</template>
