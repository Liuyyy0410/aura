<script setup>
const emit = defineEmits(['navigate']);
</script>

<template>
  <div class="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up pb-24">
    <div class="max-w-[1200px] mx-auto px-6 lg:px-12">
      <div class="mb-16 md:mb-24 text-center">
        <h1 class="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-6 drop-shadow-sm">可持续理念</h1>
        <p class="text-[#5D5A53] tracking-widest uppercase text-sm font-medium">尊重自然，承诺更长久的明日居所</p>
      </div>

      <div class="grid grid-cols-1 mb-24">
        <div class="h-[400px] md:h-[500px] overflow-hidden rounded-sm mb-16 shadow-md relative">
          <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" alt="Vast Forest" class="absolute inset-0 w-full h-full object-cover grayscale contrast-[0.9] brightness-[0.85] hover:scale-105 transition-transform duration-[2s]">
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-3xl md:text-5xl font-serif text-white tracking-wide">2026 绿色计划</h2>
          </div>
        </div>

        <div class="max-w-3xl mx-auto space-y-12">
          <div>
            <h3 class="text-2xl font-serif text-[#2C2A26] mb-4 border-b border-[#D6D1C7] pb-2 text-center md:text-left">长久设计，拒绝一次性消费</h3>
            <p class="text-lg font-light text-[#5D5A53] leading-relaxed">
              在家具制造中，真正的可持续不是更换包装，而是做出能陪伴你多年甚至一生的作品。从 2026 年起，Aura 所有核心家具都承诺 30 年使用寿命。通过更坚固的榫卯结构与可拆换布套设计，我们让你的沙发和餐桌不仅能抵御时间，也能承载传承。
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-serif text-[#2C2A26] mb-4 border-b border-[#D6D1C7] pb-2 text-center md:text-left">100% 负责任采购木材</h3>
            <p class="text-lg font-light text-[#5D5A53] leading-relaxed">
              木材是我们产品的灵魂。我们只从 FSC 认证森林采购原材料。并且每取用一棵可用树木，我们都会在同片林地补种三棵树苗。我们以可追溯记录确保所消耗的自然资源形成良性循环。
            </p>
          </div>
          <div>
            <h3 class="text-2xl font-serif text-[#2C2A26] mb-4 border-b border-[#D6D1C7] pb-2 text-center md:text-left">无毒的居住环境</h3>
            <p class="text-lg font-light text-[#5D5A53] leading-relaxed">
              家具是与你肌肤接触最频繁的家中物件。我们彻底放弃含甲醛胶黏剂与合成纤维，转而使用水性涂料、纯蜂蜡、天然亚麻与有机棉。无论在我们的工坊还是你的客厅，你都能自由呼吸清洁空气。
            </p>
          </div>
        </div>
      </div>

      <div class="text-center pt-12 border-t border-[#D6D1C7]">
        <button class="text-sm font-medium uppercase tracking-widest text-[#2C2A26] border border-[#2C2A26] px-8 py-3 hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-colors" @click="emit('navigate', { type: 'home' })">
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>
