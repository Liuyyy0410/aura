<script setup>
import { ref } from 'vue';
import { addUser, getCurrentUser, getUsers, saveUsers, setCurrentUser } from '../api/storage.js';

const props = defineProps({
  mode: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['navigate', 'user-changed']);

const phone = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const rememberMe = ref(false);
const code = ref('');
const newPassword = ref('');
const step = ref(1);
const error = ref('');
const success = ref('');

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function handleLogin(event) {
  event.preventDefault();
  error.value = '';
  const user = getUsers().find((entry) => entry.phone === phone.value && entry.password === password.value);
  if (user) {
    setCurrentUser(user);
    emit('user-changed', getCurrentUser());
    emit('navigate', { type: 'home' });
  } else {
    error.value = '手机号或密码错误';
  }
}

function handleRegister(event) {
  event.preventDefault();
  error.value = '';
  if (!validateEmail(email.value)) {
    error.value = '邮箱格式不正确';
    return;
  }
  if (password.value.length < 6) {
    error.value = '密码强度过弱，请至少输入 6 位字符';
    return;
  }
  if (password.value !== confirmPassword.value) {
    error.value = '两次输入的密码不一致';
    return;
  }
  if (getUsers().find((user) => user.phone === phone.value)) {
    error.value = '该手机号已被注册';
    return;
  }
  const newUser = { phone: phone.value, email: email.value, password: password.value, role: 'user' };
  addUser(newUser);
  setCurrentUser(newUser);
  emit('user-changed', getCurrentUser());
  emit('navigate', { type: 'home' });
}

function handleSendCode(event) {
  event.preventDefault();
  error.value = '';
  if (!getUsers().find((user) => user.email === email.value)) {
    error.value = '该邮箱未找到对应账号';
    return;
  }
  success.value = '验证码已发送到你的邮箱';
  window.setTimeout(() => {
    step.value = 2;
  }, 1500);
}

function handleResetPassword(event) {
  event.preventDefault();
  error.value = '';
  if (code.value !== '1234') {
    error.value = '验证码错误（测试请使用 1234）';
    return;
  }
  if (newPassword.value.length < 6) {
    error.value = '密码长度至少需要 6 位';
    return;
  }
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.email === email.value);
  if (userIndex === -1) {
    error.value = '系统错误，无法重置密码';
    return;
  }
  users[userIndex].password = newPassword.value;
  saveUsers(users);
  success.value = '密码重置成功';
  window.setTimeout(() => {
    emit('navigate', { type: 'login' });
  }, 2000);
}
</script>

<template>
  <div class="pt-24 min-h-screen bg-[#F5F2EB] flex flex-col items-center animate-fade-in-up">
    <div class="w-full max-w-md p-8 bg-white/50 border border-[#D6D1C7] mt-12">
      <h2 class="text-3xl font-serif text-[#2C2A26] mb-8 text-center bg-transparent">
        {{ mode === 'login' ? '登录' : mode === 'register' ? '注册' : '重置密码' }}
      </h2>
      <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>
      <p v-if="success" class="text-green-600 text-sm mb-4">{{ success }}</p>

      <form v-if="mode === 'login'" class="space-y-6" @submit="handleLogin">
        <input v-model="phone" type="text" placeholder="手机号" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
        <input v-model="password" type="password" placeholder="密码" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <input id="rememberMe" v-model="rememberMe" type="checkbox" class="accent-[#2C2A26]">
            <label for="rememberMe" class="text-sm text-[#5D5A53]">记住我</label>
          </div>
          <button type="button" class="text-sm text-[#5D5A53] hover:text-[#2C2A26]" @click="emit('navigate', { type: 'forgot-password' })">忘记密码？</button>
        </div>
        <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">登录</button>
        <div class="mt-6 text-center text-sm text-[#5D5A53]">
          还没有账号？
          <button type="button" class="text-[#2C2A26] underline underline-offset-4" @click="emit('navigate', { type: 'register' })">立即注册</button>
        </div>
      </form>

      <form v-else-if="mode === 'register'" class="space-y-6" @submit="handleRegister">
        <input v-model="phone" type="text" placeholder="手机号" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
        <input v-model="email" type="email" placeholder="邮箱地址" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
        <input v-model="password" type="password" placeholder="密码（至少 6 位）" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
        <input v-model="confirmPassword" type="password" placeholder="确认密码" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
        <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">注册</button>
        <div class="mt-6 text-center text-sm text-[#5D5A53]">
          已有账号？
          <button type="button" class="text-[#2C2A26] underline underline-offset-4" @click="emit('navigate', { type: 'login' })">立即登录</button>
        </div>
      </form>

      <template v-else>
        <form v-if="step === 1" class="space-y-6" @submit="handleSendCode">
          <input v-model="email" type="email" placeholder="注册邮箱地址" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
          <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">发送验证码</button>
        </form>
        <form v-else class="space-y-6" @submit="handleResetPassword">
          <input v-model="code" type="text" placeholder="输入验证码（1234）" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
          <input v-model="newPassword" type="password" placeholder="新密码（至少 6 位）" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required>
          <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">重置密码</button>
        </form>
        <div class="mt-6 text-center text-sm text-[#5D5A53]">
          <button type="button" class="text-[#2C2A26] underline underline-offset-4" @click="emit('navigate', { type: 'login' })">返回登录</button>
        </div>
      </template>
    </div>
  </div>
</template>
