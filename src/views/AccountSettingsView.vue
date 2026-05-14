<script setup>
import { ref, watch } from 'vue';
import { getCurrentUser, getUsers, saveUsers, setCurrentUser } from '../api/storage.js';

const props = defineProps({
  currentUser: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(['navigate', 'user-changed']);

const defaultAvatar = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A8A29E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' style='background-color:%23EAE7E0'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";

const activeTab = ref('profile');
const username = ref('');
const avatarUrl = ref('');
const bio = ref('');
const oldPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');
const newPhone = ref('');
const error = ref('');
const success = ref('');

watch(() => props.currentUser, (user) => {
  username.value = user?.username || '';
  avatarUrl.value = user?.avatarUrl || '';
  bio.value = user?.bio || '';
  newPhone.value = user?.phone || '';
}, { immediate: true });

function validatePhone(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

function handleUpdateProfile(event) {
  event.preventDefault();
  error.value = '';
  success.value = '';
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.phone === props.currentUser.phone);
  if (userIndex === -1) {
    error.value = '未找到用户';
    return;
  }
  const targetUser = users[userIndex];
  targetUser.username = username.value;
  targetUser.avatarUrl = avatarUrl.value;
  targetUser.bio = bio.value;
  users[userIndex] = targetUser;
  saveUsers(users);
  setCurrentUser(targetUser);
  success.value = '个人资料更新成功';
  emit('user-changed', getCurrentUser());
}

function handleUpdateSecurity(event) {
  event.preventDefault();
  error.value = '';
  success.value = '';
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.phone === props.currentUser.phone);
  if (userIndex === -1) {
    error.value = '未找到用户';
    return;
  }

  const targetUser = users[userIndex];
  if (oldPassword.value && targetUser.password !== oldPassword.value) {
    error.value = '当前密码不正确';
    return;
  }
  if (newPassword.value && newPassword.value !== confirmNewPassword.value) {
    error.value = '新密码两次输入不一致';
    return;
  }
  if (newPassword.value && newPassword.value.length < 6) {
    error.value = '新密码至少需要 6 位';
    return;
  }
  if (newPhone.value !== targetUser.phone) {
    if (!validatePhone(newPhone.value)) {
      error.value = '手机号格式不正确';
      return;
    }
    if (users.find((user) => user.phone === newPhone.value && user.phone !== targetUser.phone)) {
      error.value = '该手机号已被其他账号使用';
      return;
    }
    targetUser.phone = newPhone.value;
  }
  if (newPassword.value) {
    targetUser.password = newPassword.value;
  }
  users[userIndex] = targetUser;
  saveUsers(users);
  setCurrentUser(targetUser);
  oldPassword.value = '';
  newPassword.value = '';
  confirmNewPassword.value = '';
  success.value = '安全设置更新成功';
  emit('user-changed', getCurrentUser());
}

function handleLogout() {
  setCurrentUser(null);
  emit('user-changed', null);
  emit('navigate', { type: 'home' });
}
</script>

<template>
  <div v-if="currentUser" class="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up pb-24">
    <div class="max-w-5xl mx-auto px-6 lg:px-12">
      <div class="flex flex-col md:flex-row gap-12 mt-8">
        <aside class="md:w-64 flex-shrink-0">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-16 rounded-full overflow-hidden border border-[#D6D1C7] flex-shrink-0">
              <img :src="currentUser.avatarUrl || defaultAvatar" alt="User Avatar" class="w-full h-full object-cover">
            </div>
            <div class="overflow-hidden">
              <h2 class="text-xl font-serif text-[#2C2A26] truncate flex items-center gap-2">
                {{ currentUser.username || 'User' }}
                <span v-if="currentUser.role === 'admin'" class="text-[10px] bg-[#2C2A26] text-[#F5F2EB] px-2 py-0.5 rounded-sm uppercase tracking-wider font-sans whitespace-nowrap">管理员</span>
              </h2>
              <p class="text-sm text-[#5D5A53] truncate">{{ currentUser.phone }}</p>
            </div>
          </div>

          <nav class="flex flex-col space-y-2">
            <button :class="activeTab === 'profile' ? 'bg-[#2C2A26] text-[#F5F2EB]' : 'text-[#5D5A53] hover:bg-[#D6D1C7]/30 hover:text-[#2C2A26]'" class="text-left px-4 py-3 rounded-md transition-colors" @click="activeTab = 'profile'; error = ''; success = ''">个人资料</button>
            <button :class="activeTab === 'security' ? 'bg-[#2C2A26] text-[#F5F2EB]' : 'text-[#5D5A53] hover:bg-[#D6D1C7]/30 hover:text-[#2C2A26]'" class="text-left px-4 py-3 rounded-md transition-colors" @click="activeTab = 'security'; error = ''; success = ''">安全设置</button>
            <button class="text-left px-4 py-3 rounded-md text-[#5D5A53] hover:bg-[#D6D1C7]/30 hover:text-[#2C2A26] transition-colors" @click="emit('navigate', { type: 'home' })">返回商城</button>
            <div class="pt-4 mt-4 border-t border-[#D6D1C7]/50">
              <button class="text-left px-4 py-3 rounded-md text-red-600 hover:bg-red-50 w-full transition-colors" @click="handleLogout">退出登录</button>
            </div>
          </nav>
        </aside>

        <main class="flex-1 bg-white/50 border border-[#D6D1C7] p-8 md:p-12 rounded-xl">
          <div v-if="error" class="mb-6 p-4 bg-red-50 text-red-600 rounded-md text-sm">{{ error }}</div>
          <div v-if="success" class="mb-6 p-4 bg-green-50 text-green-700 rounded-md text-sm">{{ success }}</div>

          <div v-if="activeTab === 'profile'" class="animate-fade-in-up">
            <h3 class="text-2xl font-serif text-[#2C2A26] mb-8 border-b border-[#D6D1C7] pb-4">个人资料</h3>
            <form class="space-y-6 max-w-lg" @submit="handleUpdateProfile">
              <div class="flex items-center gap-6 mb-8">
                <div class="w-24 h-24 rounded-full overflow-hidden border border-[#D6D1C7] bg-[#F5F2EB]">
                  <img :src="avatarUrl || defaultAvatar" alt="User Avatar Preview" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 space-y-2">
                  <label class="text-xs text-[#5D5A53] uppercase tracking-widest block">头像链接</label>
                  <input v-model="avatarUrl" type="url" placeholder="输入图片链接（可选）" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                  <p class="text-xs text-[#A8A29E]">留空则使用默认头像</p>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs text-[#5D5A53] uppercase tracking-widest">用户名 / 昵称</label>
                <input v-model="username" type="text" placeholder="设置你的昵称" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
              </div>
              <div class="space-y-2">
                <label class="text-xs text-[#5D5A53] uppercase tracking-widest">个人简介</label>
                <textarea v-model="bio" placeholder="简单介绍一下你自己" class="w-full bg-transparent border border-[#D6D1C7] rounded-md p-3 text-[#2C2A26] outline-none focus:border-[#2C2A26] resize-none h-32" />
              </div>
              <button type="submit" class="px-8 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors rounded-sm">保存资料</button>
            </form>
          </div>

          <div v-else class="animate-fade-in-up">
            <h3 class="text-2xl font-serif text-[#2C2A26] mb-8 border-b border-[#D6D1C7] pb-4">安全设置</h3>
            <form class="space-y-8 max-w-lg" @submit="handleUpdateSecurity">
              <div class="space-y-2">
                <label class="text-xs text-[#5D5A53] uppercase tracking-widest">绑定手机号</label>
                <input v-model="newPhone" type="text" placeholder="手机号" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] outline-none focus:border-[#2C2A26]" required>
              </div>
              <div class="space-y-6 pt-4">
                <h4 class="text-sm font-serif text-[#2C2A26]">修改密码</h4>
                <input v-model="oldPassword" type="password" placeholder="当前密码" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                <input v-model="newPassword" type="password" placeholder="新密码（留空则保持不变）" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
                <input v-model="confirmNewPassword" type="password" placeholder="确认新密码" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] outline-none focus:border-[#2C2A26]">
              </div>
              <button type="submit" class="px-8 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors rounded-sm">更新安全设置</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
