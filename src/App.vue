<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import AssistantWidget from './components/AssistantWidget.vue';
import CartDrawer from './components/CartDrawer.vue';
import FooterSection from './components/FooterSection.vue';
import Navbar from './components/Navbar.vue';
import { getCartItems, getCurrentUser, initStorage, saveCartItems } from './api/storage.js';
import AccountSettingsView from './views/AccountSettingsView.vue';
import AdminDashboardView from './views/AdminDashboardView.vue';
import AuthViews from './views/AuthViews.vue';
import BrandStoryView from './views/BrandStoryView.vue';
import CheckoutView from './views/CheckoutView.vue';
import HomeView from './views/HomeView.vue';
import JournalDetailView from './views/JournalDetailView.vue';
import ProductDetailView from './views/ProductDetailView.vue';
import SustainabilityView from './views/SustainabilityView.vue';

const view = ref({ type: 'home' });
const cartItems = ref([]);
const isCartOpen = ref(false);
const currentUser = ref(null);

onMounted(() => {
  initStorage();
  currentUser.value = getCurrentUser();
  cartItems.value = getCartItems();
});

watch(cartItems, (value) => {
  saveCartItems(value);
}, { deep: true });

function scrollToSection(targetId) {
  if (!targetId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(targetId);
  if (element) {
    const headerOffset = 85;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    try {
      window.history.pushState(null, '', `#${targetId}`);
    } catch (error) {
      // Ignore restricted environment errors.
    }
  }
}

async function handleScrollNavigation(targetId) {
  if (view.value.type !== 'home') {
    view.value = { type: 'home' };
    await nextTick();
    scrollToSection(targetId);
  } else {
    scrollToSection(targetId);
  }
}

function handleNavigate(nextView) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  view.value = nextView;
  currentUser.value = getCurrentUser();
}

function addToCart(product) {
  const user = getCurrentUser();
  currentUser.value = user;
  if (!user) {
    window.alert('Please log in before adding items to the cart!');
    view.value = { type: 'login' };
    return;
  }
  cartItems.value = [...cartItems.value, product];
  isCartOpen.value = true;
}

function removeFromCart(index) {
  const nextItems = [...cartItems.value];
  nextItems.splice(index, 1);
  cartItems.value = nextItems;
}

function syncCurrentUser(user) {
  currentUser.value = user ?? getCurrentUser();
}

function backToProducts() {
  handleNavigate({ type: 'home' });
  window.setTimeout(() => {
    handleScrollNavigation('products');
  }, 50);
}
</script>

<template>
  <div class="min-h-screen bg-[#F5F2EB] font-sans text-[#2C2A26] selection:bg-[#D6D1C7] selection:text-[#2C2A26]">
    <Navbar
      v-if="view.type !== 'checkout'"
      :cart-count="cartItems.length"
      :current-user="currentUser"
      @navigate="handleNavigate"
      @open-cart="isCartOpen = true"
      @scroll-to="handleScrollNavigation"
    />

    <main>
      <HomeView v-if="view.type === 'home'" @navigate="handleNavigate" @scroll-to="handleScrollNavigation" />
      <ProductDetailView v-else-if="view.type === 'product'" :product="view.product" @add-to-cart="addToCart" @back="backToProducts" />
      <JournalDetailView v-else-if="view.type === 'journal'" :article="view.article" @back="handleNavigate({ type: 'home' })" />
      <CheckoutView v-else-if="view.type === 'checkout'" :items="cartItems" :current-user="currentUser" @back="handleNavigate({ type: 'home' })" @clear-cart="cartItems = []" />
      <AuthViews v-else-if="view.type === 'login'" mode="login" @navigate="handleNavigate" @user-changed="syncCurrentUser" />
      <AuthViews v-else-if="view.type === 'register'" mode="register" @navigate="handleNavigate" @user-changed="syncCurrentUser" />
      <AuthViews v-else-if="view.type === 'forgot-password'" mode="forgot-password" @navigate="handleNavigate" />
      <AccountSettingsView v-else-if="view.type === 'account-security'" :current-user="currentUser" @navigate="handleNavigate" @user-changed="syncCurrentUser" />
      <AdminDashboardView v-else-if="view.type === 'admin-dashboard'" :current-user="currentUser" @navigate="handleNavigate" />
      <BrandStoryView v-else-if="view.type === 'brand-story'" @navigate="handleNavigate" />
      <SustainabilityView v-else-if="view.type === 'sustainability'" @navigate="handleNavigate" />
    </main>

    <FooterSection v-if="view.type !== 'checkout'" @navigate="handleNavigate" @scroll-to="handleScrollNavigation" />
    <AssistantWidget />

    <CartDrawer
      :is-open="isCartOpen"
      :items="cartItems"
      @checkout="isCartOpen = false; handleNavigate({ type: 'checkout' })"
      @close="isCartOpen = false"
      @remove-item="removeFromCart"
    />
  </div>
</template>
