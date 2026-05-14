<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['back', 'add-to-cart']);

const selectedSize = ref(null);
const sizes = ['S', 'M', 'L'];
const showSizes = computed(() => props.product.category === 'Wearable');
</script>

<template>
  <div class="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up">
    <div class="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
      <button class="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-8" @click="emit('back')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:-translate-x-1 transition-transform">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        返回商城
      </button>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div class="flex flex-col gap-4">
          <div class="w-full aspect-[4/5] bg-[#EBE7DE] overflow-hidden">
            <img :src="product.imageUrl" :alt="product.name" class="w-full h-full object-cover animate-fade-in-up">
          </div>
        </div>

        <div class="flex flex-col justify-center max-w-xl">
          <span class="text-sm font-medium text-[#A8A29E] uppercase tracking-widest mb-2">{{ product.category }}</span>
          <h1 class="text-4xl md:text-5xl font-serif text-[#2C2A26] mb-4">{{ product.name }}</h1>
          <span class="text-2xl font-light text-[#2C2A26] mb-8">${{ product.price }}</span>
          <p class="text-[#5D5A53] leading-relaxed font-light text-lg mb-8 border-b border-[#D6D1C7] pb-8">{{ product.longDescription || product.description }}</p>

          <div v-if="showSizes" class="mb-8">
            <span class="block text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-4">Select Size</span>
            <div class="flex gap-4">
              <button
                v-for="size in sizes"
                :key="size"
                :class="selectedSize === size ? 'border-[#2C2A26] bg-[#2C2A26] text-[#F5F2EB]' : 'border-[#D6D1C7] text-[#5D5A53] hover:border-[#2C2A26]'"
                class="w-12 h-12 flex items-center justify-center border transition-all duration-300"
                @click="selectedSize = size"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <button class="w-full py-5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors" @click="emit('add-to-cart', product)">
              加入购物车 - ${{ product.price }}
            </button>
            <ul class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#5D5A53]">
              <li v-for="(feature, index) in product.features" :key="index" class="flex items-center gap-3 p-3 bg-white/40 border border-[#D6D1C7] rounded-sm transition-all hover:bg-white hover:border-[#2C2A26] group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#A8A29E] group-hover:text-[#2C2A26] transition-colors">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span class="font-medium text-[#2C2A26] tracking-wide">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
