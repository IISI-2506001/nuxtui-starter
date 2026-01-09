<template>
  <table class="vertical-table">
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <th>{{ headers[rowIndex] }}</th>
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">"{{ cell }}"</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.vertical-table {
  border-collapse: collapse;
  width: 100%;
}

.vertical-table th,
.vertical-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  vertical-align: top;
  min-width: 120px;
}
</style>
