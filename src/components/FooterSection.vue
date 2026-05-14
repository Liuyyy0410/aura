<script setup>
import { ref } from 'vue';

const emit = defineEmits(['scroll-to', 'navigate']);

const subscribeStatus = ref('idle');
const email = ref('');

function handleSubscribe() {
  if (!email.value) {
    return;
  }
  subscribeStatus.value = 'loading';
  window.setTimeout(() => {
    subscribeStatus.value = 'success';
    email.value = '';
  }, 1500);
}
</script>

<template>
  <footer class="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
    <div class="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
      <div class="md:col-span-4">
        <h4 class="text-2xl font-serif text-[#2C2A26] mb-6">Aura</h4>
        <p class="max-w-xs font-light leading-relaxed">
          让设计像自然一样融入日常。<br>取材于自然，为安放心绪而造。
        </p>
      </div>

      <div class="md:col-span-2">
        <h4 class="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">商城</h4>
        <ul class="space-y-4 font-light">
          <li><a href="#products" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline" @click.prevent="emit('scroll-to', 'products')">全部产品</a></li>
          <li><a href="#products" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline" @click.prevent="emit('scroll-to', 'products')">座椅与沙发</a></li>
          <li><a href="#products" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline" @click.prevent="emit('scroll-to', 'products')">桌几与收纳</a></li>
          <li><a href="#products" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline" @click.prevent="emit('scroll-to', 'products')">家居照明</a></li>
        </ul>
      </div>

      <div class="md:col-span-2">
        <h4 class="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">品牌</h4>
        <ul class="space-y-4 font-light">
          <li><button class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline text-left" @click="emit('navigate', { type: 'brand-story' })">品牌故事</button></li>
          <li><button class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline text-left" @click="emit('navigate', { type: 'sustainability' })">可持续理念</button></li>
          <li><a href="#journal" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline" @click.prevent="emit('scroll-to', 'journal')">生活日志</a></li>
        </ul>
      </div>

      <div class="md:col-span-4">
        <h4 class="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">订阅通讯</h4>
        <div class="flex flex-col gap-4">
          <input
            v-model="email"
            type="email"
            placeholder="请输入你的邮箱地址"
            :disabled="subscribeStatus === 'loading' || subscribeStatus === 'success'"
            class="bg-transparent border-b border-[#A8A29E] py-2 text-lg outline-none focus:border-[#2C2A26] transition-colors placeholder-[#A8A29E]/70 text-[#2C2A26] disabled:opacity-50"
          >
          <button
            :disabled="subscribeStatus !== 'idle' || !email"
            class="self-start text-sm font-medium uppercase tracking-widest mt-2 hover:text-[#2C2A26] disabled:cursor-default disabled:hover:text-[#5D5A53] disabled:opacity-50 transition-opacity"
            @click="handleSubscribe"
          >
            {{ subscribeStatus === 'idle' ? '立即订阅' : subscribeStatus === 'loading' ? '订阅中...' : '已订阅' }}
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60" />
  </footer>
</template>
