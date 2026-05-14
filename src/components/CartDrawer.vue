<script setup>
import { computed } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['close', 'remove-item', 'checkout']);

const total = computed(() => props.items.reduce((sum, item) => sum + item.price, 0));
</script>

<template>
  <div>
    <div
      :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
      class="fixed inset-0 bg-[#2C2A26]/30 backdrop-blur-sm z-[60] transition-opacity duration-500"
      @click="emit('close')"
    />

    <div
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
      class="fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#F5F2EB] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-[#D6D1C7] flex flex-col"
    >
      <div class="flex items-center justify-between p-6 border-b border-[#D6D1C7]">
        <h2 class="text-xl font-serif text-[#2C2A26]">购物车 ({{ items.length }})</h2>
        <button class="text-[#A8A29E] hover:text-[#2C2A26] transition-colors" @click="emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-6 space-y-8">
        <div v-if="items.length === 0" class="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-12 h-12 text-[#A8A29E]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p class="font-light text-[#5D5A53]">购物车还是空的</p>
        </div>

        <div v-for="(item, index) in items" :key="item.id + '-' + index" class="flex gap-4 animate-fade-in-up">
          <div class="w-20 h-24 bg-[#EBE7DE] flex-shrink-0">
            <img :src="item.imageUrl" :alt="item.name" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start">
                <h3 class="font-serif text-[#2C2A26]">{{ item.name }}</h3>
                <span class="text-sm font-light text-[#2C2A26]">${{ item.price }}</span>
              </div>
              <p class="text-xs text-[#A8A29E] uppercase tracking-widest mt-1">{{ item.category }}</p>
            </div>
            <button class="text-xs text-[#A8A29E] hover:text-[#2C2A26] self-start underline underline-offset-4 transition-colors" @click="emit('remove-item', index)">
              删除
            </button>
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-[#D6D1C7] bg-[#EBE7DE]/30">
        <div class="flex justify-between items-center mb-6">
            <span class="text-sm font-medium uppercase tracking-widest text-[#5D5A53]">小计</span>
          <span class="text-xl font-serif text-[#2C2A26]">${{ total }}</span>
        </div>
        <p class="text-xs text-[#A8A29E] mb-6 text-center">运费和税费将在结账时计算</p>
        <button
          :disabled="items.length === 0"
          class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          @click="emit('checkout')"
        >
          去结账
        </button>
      </div>
    </div>
  </div>
</template>
