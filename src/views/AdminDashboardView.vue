<script setup>
import { reactive, ref } from 'vue';
import { addProduct, deleteProduct, getOrders, getProducts, updateProduct } from '../api/storage.js';

const props = defineProps({
  currentUser: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['navigate']);

const activeTab = ref('products');
const products = ref(getProducts());
const orders = ref(getOrders());
const showAddForm = ref(false);
const editingProductId = ref(null);
const form = reactive({
  name: '',
  tagline: '',
  price: '',
  category: '娌欏彂',
  description: '',
  imageUrl: '',
  features: '',
});

function refreshProducts() {
  products.value = getProducts();
}

function resetForm() {
  form.name = '';
  form.tagline = '';
  form.price = '';
  form.description = '';
  form.imageUrl = '';
  form.features = '';
}

function cancelEdit() {
  editingProductId.value = null;
  showAddForm.value = false;
  resetForm();
}

function startEdit(product) {
  editingProductId.value = product.id;
  form.name = product.name;
  form.tagline = product.tagline;
  form.price = String(product.price);
  form.category = product.category;
  form.description = product.description;
  form.imageUrl = product.imageUrl || '';
  form.features = product.features?.join(', ') || '';
  showAddForm.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleDelete(id) {
  if (window.confirm('Are you sure you want to delete this product?')) {
    deleteProduct(id);
    refreshProducts();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const productData = {
    id: editingProductId.value || `p_${Date.now()}`,
    name: form.name,
    tagline: form.tagline,
    price: Number(form.price) || 0,
    category: form.category,
    description: form.description,
    imageUrl: form.imageUrl || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
    features: form.features.split(',').map((item) => item.trim()).filter(Boolean).length > 0
      ? form.features.split(',').map((item) => item.trim()).filter(Boolean)
      : ['New Feature'],
  };

  if (editingProductId.value) {
    updateProduct(editingProductId.value, productData);
  } else {
    addProduct(productData);
  }

  refreshProducts();
  cancelEdit();
}
</script>

<template>
  <div v-if="!currentUser || currentUser.role !== 'admin'" class="pt-32 text-center text-red-500">无权限访问</div>
  <div v-else class="pt-24 min-h-screen bg-[#F5F2EB] px-6 lg:px-12 animate-fade-in-up pb-24">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-end mb-12 border-b border-[#D6D1C7] pb-6">
        <div>
          <h2 class="text-3xl lg:text-4xl font-serif text-[#2C2A26]">后台管理</h2>
          <p class="text-[#5D5A53] mt-2">管理员 {{ currentUser.phone }}</p>
        </div>
        <button class="text-sm uppercase tracking-widest text-[#5D5A53] hover:text-[#2C2A26] transition-colors" @click="emit('navigate', { type: 'home' })">返回首页</button>
      </div>

      <div class="flex gap-8 mb-12 border-b border-[#D6D1C7]">
        <button :class="activeTab === 'products' ? 'text-[#2C2A26] border-b-2 border-[#2C2A26]' : 'text-[#A8A29E] hover:text-[#2C2A26]'" class="pb-4 text-sm font-medium uppercase tracking-widest transition-colors" @click="activeTab = 'products'">商品管理</button>
        <button :class="activeTab === 'orders' ? 'text-[#2C2A26] border-b-2 border-[#2C2A26]' : 'text-[#A8A29E] hover:text-[#2C2A26]'" class="pb-4 text-sm font-medium uppercase tracking-widest transition-colors" @click="activeTab = 'orders'">订单查询</button>
      </div>

      <div v-if="activeTab === 'products'">
        <div class="mb-8">
          <button v-if="!showAddForm" class="px-6 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-xs font-medium hover:bg-[#433E38] transition-colors" @click="showAddForm = true">新增商品</button>
        </div>

        <div v-if="showAddForm" class="bg-white/50 p-6 border border-[#D6D1C7] mb-12">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-serif text-[#2C2A26]">{{ editingProductId ? '编辑商品' : '新增商品信息' }}</h3>
            <button class="text-[#A8A29E] hover:text-[#2C2A26] text-sm uppercase tracking-widest transition-colors" @click="cancelEdit">取消</button>
          </div>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-6" @submit="handleSubmit">
            <input v-model="form.name" type="text" placeholder="商品名称" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26]">
            <input v-model="form.tagline" type="text" placeholder="副标题" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26]">
            <input v-model="form.price" type="number" placeholder="价格" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26]">
            <select v-model="form.category" class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] text-[#5D5A53]">
              <option>Seating</option>
              <option>Storage</option>
              <option>Lighting</option>
              <option>Table</option>
            </select>
            <input v-model="form.features" type="text" placeholder="商品特性（用逗号分隔）" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] md:col-span-2">
            <input v-model="form.imageUrl" type="text" placeholder="图片链接（可选）" class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] md:col-span-2">
            <textarea v-model="form.description" placeholder="商品描述" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] md:col-span-2 resize-none h-24" />
            <button type="submit" class="md:col-span-2 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors mt-4">
              {{ editingProductId ? '保存修改' : '确认新增' }}
            </button>
          </form>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-[#D6D1C7] text-xs uppercase tracking-widest text-[#A8A29E]">
                <th class="py-4 font-medium">名称</th>
                <th class="py-4 font-medium">分类</th>
                <th class="py-4 font-medium">价格</th>
                <th class="py-4 font-medium text-right">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id" class="border-b border-[#D6D1C7]/50 hover:bg-[#EBE7DE]/30 transition-colors">
                <td class="py-4 flex items-center gap-4">
                  <img :src="product.imageUrl" :alt="product.name" class="w-12 h-12 object-cover rounded-sm grayscale contrast-125">
                  <span class="font-medium text-[#2C2A26]">{{ product.name }}</span>
                </td>
                <td class="py-4 text-[#5D5A53]">{{ product.category }}</td>
                <td class="py-4 text-[#2C2A26]">${{ product.price }}</td>
                <td class="py-4 text-right">
                  <button class="text-[#5D5A53] hover:text-[#2C2A26] text-sm font-medium mr-4 transition-colors" @click="startEdit(product)">编辑</button>
                  <button class="text-red-500 hover:text-red-700 text-sm font-medium transition-colors" @click="handleDelete(product.id)">删除</button>
                </td>
              </tr>
              <tr v-if="products.length === 0">
                <td colspan="4" class="py-8 text-center text-[#A8A29E]">暂无商品</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-[#D6D1C7] text-xs uppercase tracking-widest text-[#A8A29E]">
                <th class="py-4 font-medium">订单号</th>
                <th class="py-4 font-medium">日期</th>
                <th class="py-4 font-medium">用户（手机号）</th>
                <th class="py-4 font-medium">总额</th>
                <th class="py-4 font-medium">状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id" class="border-b border-[#D6D1C7]/50 hover:bg-[#EBE7DE]/30 transition-colors">
              <td class="py-4 text-[#2C2A26] font-medium">{{ order.id }}</td>
              <td class="py-4 text-[#5D5A53]">{{ new Date(order.date).toLocaleDateString() }}</td>
              <td class="py-4 text-[#5D5A53]">{{ order.userId }}</td>
              <td class="py-4 text-[#2C2A26]">${{ order.total }}</td>
              <td class="py-4 text-green-600 uppercase tracking-widest text-xs font-semibold">已支付</td>
            </tr>
            <tr v-if="orders.length === 0">
              <td colspan="5" class="py-8 text-center text-[#A8A29E]">暂无订单记录</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
