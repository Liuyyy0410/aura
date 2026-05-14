<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { BRAND_NAME } from '../data/constants.js';

const props = defineProps({
  cartCount: {
    type: Number,
    required: true,
  },
  currentUser: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['open-cart', 'navigate', 'scroll-to']);

const defaultAvatar = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A8A29E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' style='background-color:%23EAE7E0'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});

const textColorClass = computed(() =>
  scrolled.value || mobileMenuOpen.value ? 'text-[#2C2A26]' : 'text-[#F5F2EB]',
);

const avatar = computed(() => props.currentUser?.avatarUrl || defaultAvatar);

function closeAndRun(callback) {
  mobileMenuOpen.value = false;
  callback();
}
</script>

<template>
  <div>
    <nav
      :class="scrolled || mobileMenuOpen ? 'bg-[#F5F2EB]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'"
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out"
    >
      <div class="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
        <a
          href="#"
          :class="textColorClass"
          class="text-3xl font-serif font-medium tracking-tight z-50 relative transition-colors duration-500"
          @click.prevent="emit('scroll-to', '')"
        >
          {{ BRAND_NAME }}
        </a>

        <div :class="textColorClass" class="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase transition-colors duration-500" />

        <div :class="textColorClass" class="flex items-center gap-6 z-50 relative transition-colors duration-500">
          <button
            v-if="currentUser && currentUser.role === 'admin'"
            class="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block text-[#2C2A26] bg-[#D6D1C7]/30 px-3 py-1 rounded"
            @click="emit('navigate', { type: 'admin-dashboard' })"
          >
            后台
          </button>

          <button
            v-if="currentUser"
            class="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity"
            @click="emit('navigate', { type: 'account-security' })"
          >
            <div class="w-8 h-8 rounded-full overflow-hidden border border-current shadow-sm">
              <img :src="avatar" alt="User Avatar" class="w-full h-full object-cover">
            </div>
            <span class="text-sm font-medium uppercase tracking-widest">{{ currentUser.username || 'My Account' }}</span>
          </button>

          <button
            v-else
            class="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block"
            @click="emit('navigate', { type: 'login' })"
          >
            登录 / 注册
          </button>

          <button
            class="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block"
            @click="emit('open-cart')"
          >
            购物车 ({{ cartCount }})
          </button>

          <button class="block md:hidden focus:outline-none transition-colors duration-500" :class="textColorClass" @click="mobileMenuOpen = !mobileMenuOpen">
            <svg v-if="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <div
      :class="mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'"
      class="fixed inset-0 bg-[#F5F2EB] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out"
    >
      <div class="flex flex-col items-center space-y-8 text-xl font-serif font-medium text-[#2C2A26]">
        <a href="#products" class="hover:opacity-60 transition-opacity" @click.prevent="closeAndRun(() => emit('scroll-to', 'products'))">商城</a>
        <a href="#about" class="hover:opacity-60 transition-opacity" @click.prevent="closeAndRun(() => emit('scroll-to', 'about'))">关于</a>
        <a href="#journal" class="hover:opacity-60 transition-opacity" @click.prevent="closeAndRun(() => emit('scroll-to', 'journal'))">日志</a>

        <div class="w-12 h-[1px] bg-[#D6D1C7] my-4" />

        <button
          v-if="currentUser && currentUser.role === 'admin'"
          class="text-base uppercase tracking-widest font-sans bg-[#D6D1C7]/30 px-4 py-2 rounded"
          @click="closeAndRun(() => emit('navigate', { type: 'admin-dashboard' }))"
        >
          后台
        </button>

        <button
          v-if="currentUser"
          class="flex flex-col items-center gap-3"
          @click="closeAndRun(() => emit('navigate', { type: 'account-security' }))"
        >
          <div class="w-16 h-16 rounded-full overflow-hidden border border-[#D6D1C7] shadow-sm">
            <img :src="avatar" alt="User Avatar" class="w-full h-full object-cover">
          </div>
          <span class="text-base uppercase tracking-widest font-sans">{{ currentUser.username || 'My Account' }}</span>
        </button>

        <button
          v-else
          class="text-base uppercase tracking-widest font-sans"
          @click="closeAndRun(() => emit('navigate', { type: 'login' }))"
        >
          登录 / 注册
        </button>

        <button class="hover:opacity-60 transition-opacity text-base uppercase tracking-widest font-sans mt-4" @click="closeAndRun(() => emit('open-cart'))">
          购物车 ({{ cartCount }})
        </button>
      </div>
    </div>
  </div>
</template>
