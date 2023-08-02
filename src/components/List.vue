<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => ([])
  }
});
</script>

<template>
  <h2 class="text-lg font-semibold text-gray-900 dark:text-white mt-5">
    Famílias:
  </h2>

  <ul 
    v-for="(item, index) in list"
    :key="index"
    class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400"
  >
    <li
      class="flex items-center my-3"
    >
      <svg
        v-if="item.drawn"
        class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>

      <svg
        v-else
        class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      
      {{ item.name }}
    </li>
  </ul>
</template>