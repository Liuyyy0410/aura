<script setup>
import { nextTick, ref, watch } from 'vue';
import { sendMessageToGemini } from '../api/assistantApi.js';
import { getAssistantMessages, saveAssistantMessages } from '../api/storage.js';

const isOpen = ref(false);
const messages = ref(getAssistantMessages());
const inputValue = ref('');
const isThinking = ref(false);
const scrollRef = ref(null);

async function syncScroll() {
  await nextTick();
  if (scrollRef.value) {
    scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
  }
}

watch([messages, isOpen], syncScroll, { deep: true });
watch(messages, (value) => {
  saveAssistantMessages(value);
}, { deep: true });

async function handleSend() {
  if (!inputValue.value.trim()) {
    return;
  }

  const userMessage = { role: 'user', text: inputValue.value, timestamp: Date.now() };
  messages.value = [...messages.value, userMessage];
  inputValue.value = '';
  isThinking.value = true;

  try {
    const history = messages.value.map((message) => ({ role: message.role, text: message.text }));
    const responseText = await sendMessageToGemini(history, userMessage.text);
    messages.value = [...messages.value, { role: 'model', text: responseText, timestamp: Date.now() }];
  } finally {
    isThinking.value = false;
  }
}

function handleKeyPress(event) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    handleSend();
  }
}
</script>

<template>
  <div class="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
    <div v-if="isOpen" class="bg-[#F5F2EB] rounded-none shadow-2xl shadow-[#2C2A26]/10 w-[90vw] sm:w-[380px] h-[550px] mb-6 flex flex-col overflow-hidden border border-[#D6D1C7] animate-slide-up-fade">
      <div class="bg-[#EBE7DE] p-5 border-b border-[#D6D1C7] flex justify-between items-center">
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 bg-[#2C2A26] rounded-full animate-pulse" />
          <span class="font-serif italic text-[#2C2A26] text-lg">AI 顾问</span>
        </div>
        <button class="text-[#A8A29E] hover:text-[#2C2A26] transition-colors" @click="isOpen = false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div ref="scrollRef" class="flex-1 overflow-y-auto p-6 space-y-8 bg-[#F5F2EB]">
        <div v-for="(message, index) in messages" :key="index" :class="message.role === 'user' ? 'justify-end' : 'justify-start'" class="flex">
          <div :class="message.role === 'user' ? 'bg-[#2C2A26] text-[#F5F2EB]' : 'bg-white border border-[#EBE7DE] text-[#5D5A53] shadow-sm'" class="max-w-[85%] p-5 text-sm leading-relaxed">
            {{ message.text }}
          </div>
        </div>

        <div v-if="isThinking" class="flex justify-start">
          <div class="bg-white border border-[#EBE7DE] p-5 flex gap-1 items-center shadow-sm">
            <div class="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce" />
            <div class="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-75" />
            <div class="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-150" />
          </div>
        </div>
      </div>

      <div class="p-5 bg-[#F5F2EB] border-t border-[#D6D1C7]">
        <div class="flex gap-2 relative">
          <input
            v-model="inputValue"
            type="text"
            placeholder="请输入你想咨询的内容..."
            class="flex-1 bg-white border border-[#D6D1C7] focus:border-[#2C2A26] px-4 py-3 text-sm outline-none transition-colors placeholder-[#A8A29E] text-[#2C2A26]"
            @keydown="handleKeyPress"
          >
          <button class="bg-[#2C2A26] text-[#F5F2EB] px-4 hover:bg-[#444] transition-colors disabled:opacity-50" :disabled="!inputValue.trim() || isThinking" @click="handleSend">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <button class="bg-[#2C2A26] text-[#F5F2EB] w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-105 transition-all duration-500 z-50" @click="isOpen = !isOpen">
      <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
      <span v-else class="font-serif italic text-lg">Ai</span>
    </button>
  </div>
</template>
