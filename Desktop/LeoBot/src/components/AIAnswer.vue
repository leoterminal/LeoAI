<template>
  <div class="text-center">
    <p class="w-full overflow-y-auto" v-if="answer">{{ answer }}</p>
  </div>
</template>

<script setup>
defineProps({
  answer: {
    type: String,
    default: 'Answer will be displayed here...'
  }
})
</script>

<style lang="scss" scoped></style>
