<script setup>
import { computed, onMounted, ref } from 'vue';
import { getJournalArticles, getProducts } from '../api/storage.js';

const emit = defineEmits(['navigate', 'scroll-to']);

const categories = ['全部', '座椅', '桌几', '收纳', '照明'];
const activeCategory = ref('All');
const products = ref([]);
const articles = ref([]);

onMounted(() => {
  products.value = getProducts();
  articles.value = getJournalArticles();
});

const filteredProducts = computed(() => {
  if (activeCategory.value === '全部') {
    return products.value;
  }
  return products.value.filter((product) => product.category === activeCategory.value);
});
</script>

<template>
  <div>
    <section class="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#D6D1C7]">
      <div class="absolute inset-0 w-full h-full">
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" alt="Serene misty landscape" class="w-full h-full object-cover grayscale contrast-[0.7] brightness-[0.95] animate-[pulse_15s_ease-in-out_infinite_alternate]">
        <div class="absolute inset-0 bg-[#433E38]/40 mix-blend-multiply" />
        <div class="absolute inset-0 bg-[#313030]/20" />
      </div>

      <div class="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div class="animate-fade-in-up w-full md:w-auto">
          <span class="block text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/90 mb-6 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full mx-0 md:mx-auto w-fit">
            2026 春季系列
          </span>
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 drop-shadow-sm">
            静谧 <span class="italic text-[#F5F2EB]">生活</span>
          </h1>
          <p class="max-w-lg mx-0 md:mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed mb-12 text-shadow-sm">
            让耐用设计自然融入生活。<br>
            回到木与石最初的温度。
          </p>

          <a href="#products" class="group relative px-10 py-4 bg-[#F5F2EB] text-[#2C2A26] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl inline-block" @click.prevent="emit('scroll-to', 'products')">
            <span class="relative z-10 group-hover:text-[#2C2A26]">探索本季系列</span>
          </a>
        </div>
      </div>

      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <section id="products" class="py-32 px-6 md:px-12 bg-[#F5F2EB]">
      <div class="max-w-[1800px] mx-auto">
        <div class="flex flex-col items-center text-center mb-24 space-y-8">
          <h2 class="text-4xl md:text-6xl font-serif text-[#2C2A26]">精选系列</h2>
          <div class="flex flex-wrap justify-center gap-8 pt-4 border-t border-[#D6D1C7]/50 w-full max-w-2xl">
            <button
              v-for="category in categories"
              :key="category"
              :class="activeCategory === category ? 'border-[#2C2A26] text-[#2C2A26]' : 'border-transparent text-[#A8A29E] hover:text-[#2C2A26]'"
              class="text-sm uppercase tracking-widest pb-1 border-b transition-all duration-300"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          <div v-for="product in filteredProducts" :key="product.id" class="group flex flex-col gap-6 cursor-pointer" @click="emit('navigate', { type: 'product', product })">
            <div class="relative w-full aspect-[4/5] overflow-hidden bg-[#EBE7DE]">
              <img :src="product.imageUrl" :alt="product.name" class="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 sepia-[0.1]">
              <div class="absolute inset-0 bg-[#2C2A26]/0 group-hover:bg-[#2C2A26]/5 transition-colors duration-500 flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span class="bg-white/90 backdrop-blur text-[#2C2A26] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium">查看详情</span>
                </div>
              </div>
            </div>
            <div class="text-center">
              <h3 class="text-2xl font-serif font-medium text-[#2C2A26] mb-1 group-hover:opacity-70 transition-opacity">{{ product.name }}</h3>
              <p class="text-sm font-light text-[#5D5A53] mb-3 tracking-wide">{{ product.category }}</p>
              <span class="text-sm font-medium text-[#2C2A26] block">${{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="bg-[#EBE7DE]">
      <div class="py-32 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32 border-b border-[#D6D1C7]">
        <div class="md:w-1/3">
          <h2 class="text-5xl md:text-7xl font-serif text-[#2C2A26] leading-[1.1] tracking-tight">
            源于自然，<br>为生活而作。
          </h2>
          <div class="w-12 h-[2px] bg-[#2C2A26] mt-8" />
        </div>
        <div class="md:w-2/3 max-w-2xl">
          <p class="text-xl md:text-2xl text-[#5D5A53] font-serif italic leading-relaxed mb-10">
            “Aura 始终相信，家具不只是填满空间的物件，更是安顿身心的容器。”
          </p>
          <p class="text-lg text-[#5D5A53] font-light leading-relaxed mb-8">
            它应像被流水打磨过的卵石一样持久，为你带来深沉而安静的舒适感。在这个充满噪音的时代，我们设计的每一件作品都尊重你的宁静。
          </p>
          <p class="text-lg text-[#5D5A53] font-light leading-relaxed mb-12">
            我们细致挑选会随着时间愈发温润的天然材料，如实木、粗亚麻与全粒面皮革，让自然的呼吸自由流动在你的家中。
          </p>
          <img src="https://images.pexels.com/photos/6583355/pexels-photo-6583355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Aura Design Studio" class="w-full h-[500px] object-cover grayscale-[0.2] contrast-[0.95] brightness-105">
          <p class="text-xs font-medium uppercase tracking-[0.3em] text-[#A8A29E] mt-6">Aura 京都工作室</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div class="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200" alt="Natural Stone Texture" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105">
        </div>
        <div class="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">材质</span>
          <h3 class="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">会随时间渐暖的<br>肌理触感</h3>
          <p class="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
            我们拒绝快消式使用。Aura 的每件家具都由精选实木、传统工艺黄铜与天然透气亚麻制成。随着时间流逝，它们会因触碰形成独特包浆，记录下属于你的居家故事。
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div class="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">设计理念</span>
          <h3 class="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">大音希声，<br>大象无形。</h3>
          <p class="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
            我们的设计懂得克制地退入背景。没有喧闹的色彩阵列，也没有繁复浮夸的线条。我们以最简洁的形态提供稳定支撑，在噪音中保留一块不被打扰的留白，成为平静生活最合适的容器。
          </p>
        </div>
        <div class="relative h-[500px] lg:h-auto overflow-hidden group">
          <img src="https://images.pexels.com/photos/6801917/pexels-photo-6801917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Woman sitting on wooden floor reading" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90">
        </div>
      </div>
    </section>

    <section id="journal" class="bg-[#F5F2EB] py-32 px-6 md:px-12">
      <div class="max-w-[1800px] mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D6D1C7]">
          <div>
            <span class="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">精选专栏</span>
            <h2 class="text-4xl md:text-6xl font-serif text-[#2C2A26]">生活日志</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="article in articles" :key="article.id" class="group cursor-pointer flex flex-col text-left" @click="emit('navigate', { type: 'journal', article })">
            <div class="w-full aspect-[4/3] overflow-hidden mb-8 bg-[#EBE7DE]">
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0">
            </div>
            <div class="flex flex-col flex-1 text-left">
              <span class="text-xs font-medium uppercase tracking-widest text-[#A8A29E] mb-3">{{ article.date }}</span>
              <h3 class="text-2xl font-serif text-[#2C2A26] mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">{{ article.title }}</h3>
              <p class="text-[#5D5A53] font-light leading-relaxed">{{ article.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
