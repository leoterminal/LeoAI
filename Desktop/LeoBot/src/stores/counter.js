import { defineStore } from 'pinia'


export const useAiStore = defineStore('ai', {
  state: () => ({
    aiResponses: []
  }),
  actions: {
    addAiResponse(response) {
      this.aiResponses.push(response);
      console.log(this.addAiResponse);
    }
   
  }
});



