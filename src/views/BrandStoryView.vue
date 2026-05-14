<script setup>
const emit = defineEmits(['navigate']);
</script>

<template>
  <div class="bg-[#F5F2EB] min-h-screen">
    <div class="relative h-screen min-h-[600px] w-full">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" alt="Tranquil Furniture" class="w-full h-full object-cover grayscale contrast-[0.8]">
        <div class="absolute inset-0 bg-black/20" />
      </div>
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <span class="text-white/80 font-sans uppercase tracking-[0.3em] text-xs mb-8">始于 1999</span>
        <h1 class="text-6xl md:text-8xl font-serif text-white tracking-wide mix-blend-overlay">时间的沉淀</h1>
      </div>
    </div>

    <div class="max-w-[1200px] mx-auto px-6 lg:px-12 py-24 md:py-32">
      <div class="max-w-3xl mx-auto text-center mb-32 animate-fade-in-up">
        <h2 class="text-2xl md:text-3xl font-serif text-[#2C2A26] leading-relaxed mb-8">
          “真正的设计，不应是对空间的占领，而应是对时间的谦逊。从 1999 到今天，我们一直在木的肌理中寻找生活的答案。”
        </h2>
          <p class="text-[#5D5A53] font-light tracking-widest text-sm uppercase">2026 · 第 27 年</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center mb-32">
        <div class="md:col-span-7 h-[500px] md:h-[700px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200" alt="Workshop by the Cedar Forest" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] sepia-[0.2]">
        </div>
        <div class="md:col-span-5 space-y-8">
          <span class="text-xs tracking-[0.2em] text-[#A8A29E] uppercase">1999 · 起点</span>
          <h3 class="text-3xl font-serif text-[#2C2A26]">从一颗橡木种子开始</h3>
          <p class="text-base font-light text-[#5D5A53] leading-relaxed">
            1999 年，Aura 的第一间工作坊诞生在静谧的杉树林旁。我们放弃喧闹的工业流水线，选择回到最原始的手工雕刻。在那个速度至上的年代，我们决定慢下来。
          </p>
          <p class="text-base font-light text-[#5D5A53] leading-relaxed">
            我们相信，只有经历漫长生长的木材，在工匠布满老茧的双手中，才能被打磨成真正有灵魂的家具。
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center mb-32">
        <div class="md:col-span-4 order-2 md:order-1 space-y-8 md:pl-8">
          <span class="text-xs tracking-[0.2em] text-[#A8A29E] uppercase">2026 · 当下</span>
          <h3 class="text-3xl font-serif text-[#2C2A26]">回归安静的美学</h3>
          <p class="text-base font-light text-[#5D5A53] leading-relaxed">
            时间来到 2026 年，数字洪流淹没了生活，人们对“真实触感”的渴望也抵达高峰。我们的家具不只是填补空间的对象，更是帮助人们平静下来的情绪媒介。
          </p>
          <p class="text-base font-light text-[#5D5A53] leading-relaxed">
            每一张实木长桌、每一把亚麻座椅，都保留着材料本来的性格。它们退居生活背景，却在每一次触碰时给出温暖而坚定的回应。
          </p>
        </div>
        <div class="md:col-span-8 order-1 md:order-2 h-[450px] md:h-[600px] overflow-hidden">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200" alt="Minimalist Furniture Design" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] sepia-[0.1]">
        </div>
      </div>

      <div class="text-center pt-24 border-t border-[#D6D1C7]">
          <h4 class="font-serif text-2xl text-[#2C2A26] mb-8">感受生活真正的样子</h4>
        <button class="text-xs font-medium uppercase tracking-[0.2em] text-[#2C2A26] border-b border-[#2C2A26] pb-2 hover:text-[#5D5A53] hover:border-[#5D5A53] transition-colors" @click="emit('navigate', { type: 'home' })">
          返回首页继续探索系列
        </button>
      </div>
    </div>
  </div>
</template>
