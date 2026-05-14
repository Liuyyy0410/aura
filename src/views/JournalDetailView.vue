<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['back']);
</script>

<template>
  <div class="min-h-screen bg-[#F5F2EB] animate-fade-in-up">
    <div class="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
      <img :src="article.image" :alt="article.title" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/20" />
    </div>

    <div class="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
      <div class="bg-[#F5F2EB] p-8 md:p-16 shadow-xl shadow-[#2C2A26]/5">
        <div class="flex justify-between items-center mb-12 border-b border-[#D6D1C7] pb-8">
          <button class="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors" @click="emit('back')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:-translate-x-1 transition-transform">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            返回日志
          </button>
          <span class="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">{{ article.date }}</span>
        </div>

        <h1 class="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-12 leading-tight text-center">{{ article.title }}</h1>
        <div class="journal-content mx-auto font-light leading-loose text-[#5D5A53]" v-html="article.contentHtml" />
        <div class="mt-16 pt-12 border-t border-[#D6D1C7] flex justify-center">
          <span class="text-2xl font-serif italic text-[#2C2A26]">Aura</span>
        </div>
      </div>
    </div>
  </div>
</template>
