<script setup>
import { ref } from 'vue'
import GeminiAI from './components/GeminiAI.vue'
import GeminiAITNI from './components/GeminiAITNI.vue'

const geminiOptions = ref('text')
</script>

<template>
  <div class="bg-blue-900 text-white min-h-screen">
  <header class="">
    <select v-model="geminiOptions">
      <option disabled value="">Please select one</option>
      <option value="text">Text</option>
      <option value="textImage">Text and Image</option>
      <option disabled>Chat (coming soon...)</option>
    </select>
  </header>
  <main>
    <KeepAlive>
      <GeminiAI v-if="geminiOptions === 'text'" />
      <GeminiAITNI v-else />
    </KeepAlive>
  </main>
  </div>
</template>
