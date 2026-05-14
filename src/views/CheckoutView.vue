<script setup>
import { computed, reactive, ref } from 'vue';
import { addOrder } from '../api/storage.js';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  currentUser: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['back', 'clear-cart']);

const shippingInfo = reactive({
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postalCode: '',
});

const paymentInfo = reactive({
  cardNumber: '',
  expiry: '',
  cvc: '',
});

const isProcessing = ref(false);
const isSuccess = ref(false);

const subtotal = computed(() => props.items.reduce((sum, item) => sum + item.price, 0));
const total = computed(() => subtotal.value);

function handleCheckout(event) {
  event.preventDefault();
  if (!props.currentUser) {
    window.alert('请先登录再进行结账');
    return;
  }
  if (props.items.length === 0) {
    window.alert('购物车为空');
    return;
  }

  isProcessing.value = true;
  window.setTimeout(() => {
    addOrder({
      id: `ord_${Date.now()}`,
      userId: props.currentUser.phone || '',
      items: [...props.items],
      total: total.value,
      date: new Date().toISOString(),
      status: 'paid',
    });
    emit('clear-cart');
    isProcessing.value = false;
    isSuccess.value = true;
  }, 1500);
}
</script>

<template>
  <div v-if="isSuccess" class="min-h-screen pt-32 pb-24 px-6 bg-[#F5F2EB] flex flex-col items-center animate-fade-in-up text-center">
    <h1 class="text-4xl font-serif text-[#2C2A26] mb-6">支付成功</h1>
    <p class="text-[#5D5A53] mb-12">感谢你的购买！</p>
    <button class="px-8 py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors" @click="emit('back')">
      返回商城
    </button>
  </div>

  <div v-else class="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
    <div class="max-w-6xl mx-auto">
      <button class="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12" @click="emit('back')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:-translate-x-1 transition-transform">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        返回商城
      </button>

      <form class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24" @submit="handleCheckout">
        <div>
          <h1 class="text-3xl font-serif text-[#2C2A26] mb-4">结账</h1>
          <div class="space-y-12">
            <div>
              <h2 class="text-xl font-serif text-[#2C2A26] mb-6">联系信息</h2>
              <input :value="currentUser?.phone || currentUser?.email || ''" type="text" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none" disabled>
            </div>

            <div>
              <h2 class="text-xl font-serif text-[#2C2A26] mb-6">收货地址</h2>
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <input v-model="shippingInfo.firstName" type="text" placeholder="名" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                  <input v-model="shippingInfo.lastName" type="text" placeholder="姓" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                </div>
                <input v-model="shippingInfo.address" type="text" placeholder="详细地址" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                <div class="grid grid-cols-2 gap-4">
                  <input v-model="shippingInfo.city" type="text" placeholder="城市" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                  <input v-model="shippingInfo.postalCode" type="text" placeholder="邮编" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-xl font-serif text-[#2C2A26] mb-6">支付信息</h2>
              <div class="p-6 border border-[#D6D1C7] bg-white/50 space-y-4">
                <input v-model="paymentInfo.cardNumber" type="text" placeholder="银行卡号" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                <div class="grid grid-cols-2 gap-4">
                  <input v-model="paymentInfo.expiry" type="text" placeholder="有效期（MM/YY）" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                  <input v-model="paymentInfo.cvc" type="text" placeholder="安全码" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                </div>
              </div>
            </div>

            <button type="submit" :disabled="isProcessing || items.length === 0" class="w-full py-5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] disabled:bg-[#A8A29E] disabled:cursor-not-allowed transition-colors">
              {{ isProcessing ? '支付处理中...' : `立即支付 - $${total}` }}
            </button>
          </div>
        </div>

        <div class="lg:pl-12 lg:border-l border-[#D6D1C7]">
          <h2 class="text-xl font-serif text-[#2C2A26] mb-8">订单摘要</h2>
          <div class="space-y-6 mb-8">
            <div v-for="(item, index) in items" :key="index" class="flex gap-4">
              <div class="w-16 h-16 bg-[#EBE7DE] relative">
                <img :src="item.imageUrl" :alt="item.name" class="w-full h-full object-cover">
              </div>
              <div class="flex-1">
                <h3 class="font-serif text-[#2C2A26] text-base">{{ item.name }}</h3>
                <p class="text-xs text-[#A8A29E]">{{ item.category }}</p>
              </div>
              <span class="text-sm text-[#5D5A53]">${{ item.price }}</span>
            </div>
          </div>

          <div class="border-t border-[#D6D1C7] pt-6 space-y-2">
            <div class="flex justify-between text-sm text-[#5D5A53]">
              <span>商品小计</span>
              <span>${{ subtotal }}</span>
            </div>
            <div class="flex justify-between text-sm text-[#5D5A53]">
              <span>运费</span>
              <span>免运费</span>
            </div>
          </div>

          <div class="border-t border-[#D6D1C7] mt-6 pt-6">
            <div class="flex justify-between items-center">
                <span class="font-serif text-xl text-[#2C2A26]">合计</span>
              <div class="flex items-end gap-2">
                <span class="text-xs text-[#A8A29E] mb-1">USD</span>
                <span class="font-serif text-2xl text-[#2C2A26]">${{ total }}</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
