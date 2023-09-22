<template>
  <table>
    <tbody>
      <tr>
        <td v-for="(badge, index) in badgeData" :key="index">
          <span
            :style="{ backgroundColor: badge.backgroundColor, color: badge.textColor }"
            class="badge"
          >
            {{ badge.text }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    badgeData: Array
  }
}
</script>

<style scoped>
/* Badge styling */
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px; /* Makes it round */
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px; /* Add some spacing between badges */
}
</style>
