<template>
  <div>
    <h1 class="text-center mt-12 mb-5 Ojuju font-extrabold text-[40px]">
      Hello i'm LEO AI, ask me anything
    </h1>

    <form class="mb-5" @submit.prevent="fetchAnswer">
      <div class="flex gap-4 justify-center items-center">
        <input
          class="py-2 px-4 border-2 border-green-800 w-[300px] text-black placeholder:text-blackn placeholder:font-thin rounded-md"
          autocomplete="off"
          type="text"
          name="question"
          id="question"
          v-model="question"
        />

        <button
          type="submit"
          :disabled="!question"
          class="overflow-hidden rounded-md bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110"
        >
          Ask
        </button>

    </div>
    <div class="Ojuju text-xs font-thin text-center" v-if="isLoading">Asking AI , Please wait...</div>
    </form>

    <!-- <div v-if="aiResponses.length > 0">
        <h2 class="text-center mt-5 text-lg font-bold">Previous Responses:</h2>
        <ul class="list-disc pl-5">
          <li v-for="(response, index) in aiResponses" :key="index">{{ response }}</li>
        </ul>
    </div> -->
    <AIAnswer :answer="answer" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useGetGenerativeModelGP } from '../composables/useGetGenerativeModelGP.js'
import AIAnswer from '../components/AIAnswer.vue'
import { useAiStore } from '@/stores/counter';

const question = ref('')
const answer = ref('')
const isLoading = ref(false)
const aiStore = useAiStore()

const fetchAnswer = async () => {
  answer.value = ''
  isLoading.value = true

  try {
    const response = await useGetGenerativeModelGP(question.value)
    answer.value = response
    aiStore.addAiResponse(answer.value)
  } catch (error) {
    console.log({ error })
  } finally {
    isLoading.value = false
    question.value = ''
  }
}
</script>
