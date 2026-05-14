(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const U=[{id:"p1",name:"Aura Whisper Chair",tagline:"Quiet seating",description:"A seating experience that feels like a gentle embrace. Carefully crafted with coarse linen fabric and a solid ash wood frame.",longDescription:"Feel the peace as it was meant to be-unconstrained, natural, and pure. The Aura Whisper single sofa chair uses a unique ergonomic design, wrapped in breathable natural linen that adapts to seasonal temperatures. The base is made of aged ash wood, retaining the original wood grain, making every sitting a peaceful meditation.",price:6800,category:"Seating",imageUrl:"https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000"],features:["Natural linen","Ash wood frame","Ergonomic support"]},{id:"p2",name:"Aura Epoch Table",tagline:"Feel the moments together",description:"A solid wood round table designed for long-lasting companionship. The hand-polished tabletop paired with a walnut base exudes a warm glow.",longDescription:"Time is not just a series of beating numbers, but the laughter shared around the table. The Aura Epoch reimagines the dining room boundaries with a pebble-like rounded edge structure. It has no sharp corners, only a warm touch. The walnut wood goes through 48 hours of hand-polishing and plant-based oil coating, emitting a faint woody fragrance.",price:12800,category:"Table",imageUrl:"https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=1000"],features:["No sharp corners","North American walnut","Hand polished"]},{id:"p3",name:"Aura Canvas Bookshelf",tagline:"Carrying thoughts",description:"Display your collection like an unfolding scroll. The traditional mortise and tenon structure brings unparalleled visual balance.",longDescription:'A bookshelf should not just be a cold storage tool. The Aura Canvas bookshelf uses traditional mortise and tenon joinery, discarding all metal pins. The open shelves allow light to pass through freely, so whether it is books, pottery, or plants, they can all find their place on this "canvas" built of white pine.',price:8500,category:"Storage",imageUrl:"https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80&w=1000"],features:["Traditional joinery","Open shelves","Natural white pine"]},{id:"p4",name:"Aura Essence Cabinet",tagline:"Return to order",description:"A quiet storage space that doubles as an art sculpture in the room. Sliding door design opens and closes silently.",longDescription:"A fresh living environment is the foundation for a clear mind. The Aura Essence sideboard features minimalist geometric lines, hiding clutter into order with its large storage capacity. The unique wooden sliding tracks are polished thousands of times, leaving no harsh noise between opening and closing, only a faint scent of cedar.",price:9800,category:"Storage",imageUrl:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1000"],features:["Silent sliding tracks","Geometric lines","Hidden storage"]},{id:"p5",name:"Aura Beam Lamp",tagline:"Breathing light",description:"A walnut floor lamp that follows the flow of time. The combination of brass and wood casts a warm afterglow.",longDescription:"Lighting often affects our perception of space. The stem of the Aura Beam is turned from a single piece of solid walnut, and the base is heavy brass, which will develop a charming patina over time. The lampshade is made of rice paper. During the day it acts as a still sculpture, and at night it emits a warm amber glow that dispels fatigue.",price:3200,category:"Lighting",imageUrl:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1000"],features:["Solid brass base","Rice paper shade","Diffused light source"]},{id:"p6",name:"Aura Scribe Desk",tagline:"Leaping thoughts",description:"A natural desk that provides you with pure focus. The floating tabletop design makes desk work feel lighter.",longDescription:"The moment inspiration strikes is particularly sacred. The Aura Scribe desk comes with a custom cherry wood tabletop, perfectly replicating the traces of natural growth. Hidden cable management keeps the desk tidy at all times. The just-right height and proportions make you feel like you are in a forest of inspiration, leaving only flowing thoughts under your pen.",price:11500,category:"Table",imageUrl:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1000"],features:["Cherry wood tabletop","Floating design","Cable management system"]},{id:"p7",name:"Aura Solid Wood Dining Table",tagline:"The warmth of gathering",description:"Made from wide solid wood, the clear and natural wood grain exudes warmth, suitable for multi-person gatherings and daily family dining.",longDescription:"The dining room is the most lively place in a home. The Aura Solid Wood Dining Table is built with hard solid wood, featuring a rectangular wide tabletop large enough to accommodate multiple people dining together. It preserves the natural wood texture, feels warm to the touch, and becomes deeply lustrous over time. The minimalist and stable base structure leaves plenty of space for legs, making every gathering free and comfortable.",price:16800,category:"Table",imageUrl:"https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=1000"],features:["Solid wood material","Wide tabletop","Minimalist structure"]},{id:"p8",name:"Aura Haven Sofa",tagline:"Pure white",description:"Minimalist lines merged with cloud-like soft seating. The natural cotton-linen blend fabric offers excellent breathability.",longDescription:"Less is more, but we never compromise on comfort. The Aura Haven Sofa uses a minimalist straight-line design that appears visually light and airy. The fabric selected is a natural cotton-linen blend treated with special washing, making it skin-friendly and breathable. The removable and washable design makes cleaning a breeze, making it an excellent choice for modern, bright home styles.",price:18500,category:"Sofa",imageUrl:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000"],features:["Cotton-linen blend fabric","Removable cover","Down filling"]},{id:"p9",name:"Aura Natural Sofa",tagline:"Where time stands still",description:"The same texture as the materials we display in our studio, bringing you earth-like tranquil support.",longDescription:"This is a sofa directly born from our design philosophy. It uses the same natural materials found in our display cabinets, intertwining roughness with delicacy. When sitting down, you can almost feel the earth breathing and time standing still. It is wide, sturdy, and serves as the ultimate sanctuary undisturbed by modern bustle.",price:22800,category:"Sofa",imageUrl:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000"],features:["Natural dyes","Wide and deep seat","Linen texture"]},{id:"p10",name:"Aura Heritage Sofa",tagline:"Marks of time",description:"Hand-distressed full-grain cowhide that will leave your unique marks of use over time.",longDescription:"Some items depreciate over time, while others become more charming. The Aura Heritage Sofa is carefully selected from full-grain cowhide, left without excessive modification to retain the leather's natural pores and textures. As you use it, it will gradually absorb the surrounding temperature and oils, revealing a warm, captivating patina.",price:35800,category:"Sofa",imageUrl:"https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=1000",gallery:["https://images.unsplash.com/photo-1512212621149-107ffe572d2f?auto=format&fit=crop&q=80&w=1000"],features:["Full-grain cowhide","Solid wood frame","Vintage distressing process"]}],H=[{id:1,title:"The Psychology of Texture",date:"April 12, 2026",excerpt:"Why do our fingertips crave the touch of natural surfaces in a world filled with glass and plastic?",image:"https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000",contentHtml:`
      <p class="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53]">
        We live in a frictionless world. Phones are smooth glass, laptops are polished aluminum, and countertops are artificial quartz. No resistance, no grain, no texture. Yet, our physical instincts crave them immensely.
      </p>
      <p class="mb-8 text-[#5D5A53]">
        Fingertips are undoubtedly one of the most densely packed areas of nerves in the human body. They are born with the ability to decipher an object's past-its age, its origin, its temperature. When we deprive our fingertips of the right to receive this information, we are essentially experiencing a subtle form of sensory deprivation.
      </p>
      <blockquote class="border-l-2 border-[#2C2A26] pl-6 italic text-xl text-[#2C2A26] my-10 font-serif">
        "To touch is to know, to feel is to be grounded."
      </blockquote>
      <p class="mb-6 text-[#5D5A53]">
        At Aura, our designs please the eyes but, more importantly, treat the hands well. We select materials that speak: sandstone that grows warm beneath your palm; textured fabrics that beg to be touched; and natural solid wood that retains the memory of the forest.
      </p>
    `},{id:2,title:"Living in Simplicity",date:"March 28, 2026",excerpt:"Discussing the art of blank space with designers.",image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000",contentHtml:`
      <p class="mb-6 text-[#5D5A53]">
        Void is not nothingness. In Eastern aesthetics, there is a concept called "<em>Ma</em>"-it refers to the intervals between things, and it is exactly this pause that gives the whole a shape to breathe.
      </p>
      <p class="mb-8 text-[#5D5A53]">
        "We are always accustomed to filling our lives with noise," said a craftsman drinking tea in a woodworking shop overlooking slick, rain-washed streets. "Buying more items was meant to save time, but we ended up finding less and less energy for ourselves. True luxury is an undisturbed peace."
      </p>
      <div class="my-12 p-8 bg-[#EBE7DE] font-serif text-[#2C2A26] italic text-center">
        <p>The room is empty,</p>
        <p>But filled with light.</p>
        <p>The mind is quiet,</p>
        <p>But filled with thought.</p>
        <p>This is the weight</p>
        <p>Contained in minimalist living.</p>
      </div>
      <p class="mb-6 text-[#5D5A53]">
        This philosophy runs through the curve of every piece in our new furniture collection. We constantly ask ourselves: What can be removed? Before keeping only the core elements, how much more purposeless decoration can we discard?
      </p>
    `},{id:3,title:"Spring Mood Board",date:"March 15, 2026",excerpt:"Design studio notes: Morning mist, wet stones, and pale linen.",image:"https://images.unsplash.com/photo-1516834474-48c0abc2a902?auto=format&fit=crop&q=80&w=1000",contentHtml:`
      <p class="mb-6 text-[#5D5A53]">
        Spring in the studio is the turning point of recovery. The sunlight shifts from a harsh and low winter angle to a softer, more diffused warmth. We find ourselves deeply drawn to lighter tones-the gray of damp pavement, the off-white of unbleached linen, and the slightly gray-green of early spring sage.
      </p>
      <p class="mb-8 text-[#5D5A53]">
        This month's mood board is a variation on softness. It's about transitional states-neither cold nor hot, neither dark nor bright. It's the dawn of a new year.
      </p>
      <div class="my-12 p-8 bg-[#2C2A26] text-[#F5F2EB] font-serif italic text-center">
        <p>The fresh green breaking ground,</p>
        <p>The cold gray stone under your touch,</p>
        <p>It's the sunlight warming the air.</p>
      </div>
    `}],J="Aura",B="aura_users",x="aura_current_user",T="aura_products",N="aura_orders";function Y(){let e=[];try{const s=localStorage.getItem(T);s&&(e=JSON.parse(s))}catch{e=[]}let t=!1;const o=e.map(s=>{const a=U.find(r=>r.id===s.id);return a&&(a.imageUrl!==s.imageUrl||a.name!==s.name||a.description!==s.description||a.tagline!==s.tagline)?(t=!0,{...s,name:a.name,tagline:a.tagline,description:a.description,longDescription:a.longDescription,price:a.price,features:a.features,category:a.category,imageUrl:a.imageUrl,gallery:a.gallery}):s}),i=U.filter(s=>!o.find(a=>a.id===s.id));i.length>0||t?localStorage.setItem(T,JSON.stringify([...o,...i])):e.length===0&&localStorage.setItem(T,JSON.stringify(U)),localStorage.getItem(B)||localStorage.setItem(B,JSON.stringify([{phone:"15920051067",password:"0234161",role:"admin"}])),localStorage.getItem(N)||localStorage.setItem(N,JSON.stringify([]))}function D(){const e=localStorage.getItem(T);return e?JSON.parse(e):U}function O(e){localStorage.setItem(T,JSON.stringify(e))}function K(e){const t=D();t.push(e),O(t)}function G(e){const t=D();O(t.filter(o=>o.id!==e))}function Q(e,t){const o=D(),i=o.findIndex(s=>s.id===e);i!==-1&&(o[i]=t,O(o))}function A(){const e=localStorage.getItem(B);return e?JSON.parse(e):[]}function j(e){localStorage.setItem(B,JSON.stringify(e))}function X(e){const t=A();t.push(e),j(t)}function w(){const e=localStorage.getItem(x)||sessionStorage.getItem(x);return e?JSON.parse(e):null}function P(e,t=!0){e?t?(localStorage.setItem(x,JSON.stringify(e)),sessionStorage.removeItem(x)):(sessionStorage.setItem(x,JSON.stringify(e)),localStorage.removeItem(x)):(localStorage.removeItem(x),sessionStorage.removeItem(x))}function z(){const e=localStorage.getItem(N);return e?JSON.parse(e):[]}function Z(e){const t=z();t.push(e),localStorage.setItem(N,JSON.stringify(t))}function ee(){return`You are the exclusive AI advisor for "Aura", a tech lifestyle brand focused on warmth, organics, and returning to nature.
Your tone should be calm, friendly, grounded, and elegant. Avoid overly "techy" terms; use words like "natural," "seamless," "warm," and "tactile." Please answer in English.

Here is the current product catalog:
${U.map(t=>`- ${t.name} ($${t.price}): ${t.description}. Features: ${t.features.join(", ")}`).join(`
`)}

Please answer customer questions about specifications, recommendations, and brand philosophy.
Keep your answers concise (usually no more than three sentences) to fit the chat interface.
If asked about products not on the list, gently guide the conversation back to Aura products.`}function te(){var e;return((e=window.__AURA_CONFIG__)==null?void 0:e.GEMINI_API_KEY)||window.GEMINI_API_KEY||""}function se(e){const t=[];let o="model";for(let i=e.length-1;i>=0;i-=1)e[i].role===o&&(t.unshift({role:e[i].role,text:e[i].text}),o=o==="user"?"model":"user");return t.length>0&&t[0].role==="model"&&t.shift(),t}async function re(e,t){var o,i,s,a;try{const r=te();if(!r)return"Sorry, I cannot connect to the server right now (Missing API Key).";const d=se(e),u={system_instruction:{parts:[{text:ee()}]},contents:[...d.map(g=>({role:g.role==="model"?"model":"user",parts:[{text:g.text}]})),{role:"user",parts:[{text:t}]}],generationConfig:{temperature:.7}},p=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!p.ok)throw new Error(`Gemini request failed: ${p.status}`);const n=await p.json();return((a=(s=(i=(o=n==null?void 0:n.candidates)==null?void 0:o[0])==null?void 0:i.content)==null?void 0:s.parts)==null?void 0:a.map(g=>g.text||"").join("").trim())||"Sorry, I am currently unable to provide an answer."}catch(r){return console.error("Gemini API Error:",r),"Sorry, I seem to be unable to access our data archives right now."}}const{computed:k,createApp:ae,defineComponent:m,nextTick:V,onBeforeUnmount:oe,onMounted:I,reactive:q,ref:l,watch:W}=window.Vue,_="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23A8A29E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' style='background-color:%23EAE7E0'%3E%3Cpath d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E",ie=m({emits:["scroll-to"],template:`
    <section class="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#D6D1C7]">
      <div class="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
          alt="Serene misty landscape"
          class="w-full h-full object-cover grayscale contrast-[0.7] brightness-[0.95] animate-[pulse_15s_ease-in-out_infinite_alternate]"
        />
        <div class="absolute inset-0 bg-[#433E38]/40 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-[#313030]/20"></div>
      </div>

      <div class="relative z-10 h-full flex flex-col justify-center items-start text-left md:items-center md:text-center px-6">
        <div class="animate-fade-in-up w-full md:w-auto">
          <span class="block text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white/90 mb-6 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full mx-0 md:mx-auto w-fit">
            Spring 2026 Collection
          </span>
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 drop-shadow-sm">
            Quiet <span class="italic text-[#F5F2EB]">Living</span>
          </h1>
          <p class="max-w-lg mx-0 md:mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed mb-12 text-shadow-sm">
            Long-lasting design naturally integrated into life.<br />
            Returning to the original warmth of wood and stone.
          </p>

          <a
            href="#products"
            @click.prevent="$emit('scroll-to', 'products')"
            class="group relative px-10 py-4 bg-[#F5F2EB] text-[#2C2A26] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl inline-block"
          >
            <span class="relative z-10 group-hover:text-[#2C2A26]">Explore the Collection</span>
          </a>
        </div>
      </div>

      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  `}),ne=m({props:{product:{type:Object,required:!0}},emits:["select"],template:`
    <div class="group flex flex-col gap-6 cursor-pointer" @click="$emit('select', product)">
      <div class="relative w-full aspect-[4/5] overflow-hidden bg-[#EBE7DE]">
        <img :src="product.imageUrl" :alt="product.name" class="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110 sepia-[0.1]" />
        <div class="absolute inset-0 bg-[#2C2A26]/0 group-hover:bg-[#2C2A26]/5 transition-colors duration-500 flex items-center justify-center">
          <div class="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span class="bg-white/90 backdrop-blur text-[#2C2A26] px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium">
              View Details
            </span>
          </div>
        </div>
      </div>

      <div class="text-center">
        <h3 class="text-2xl font-serif font-medium text-[#2C2A26] mb-1 group-hover:opacity-70 transition-opacity">{{ product.name }}</h3>
        <p class="text-sm font-light text-[#5D5A53] mb-3 tracking-wide">{{ product.category }}</p>
        <span class="text-sm font-medium text-[#2C2A26] block">\${{ product.price }}</span>
      </div>
    </div>
  `}),le=m({components:{ProductCard:ne},emits:["select"],setup(){const e=["All","Seating","Tables","Storage","Lighting"],t=l("All"),o=l([]);I(()=>{o.value=D()});const i=k(()=>t.value==="All"?o.value:o.value.filter(s=>s.category===t.value));return{activeCategory:t,categories:e,filteredProducts:i}},template:`
    <section id="products" class="py-32 px-6 md:px-12 bg-[#F5F2EB]">
      <div class="max-w-[1800px] mx-auto">
        <div class="flex flex-col items-center text-center mb-24 space-y-8">
          <h2 class="text-4xl md:text-6xl font-serif text-[#2C2A26]">Featured Collection</h2>
          <div class="flex flex-wrap justify-center gap-8 pt-4 border-t border-[#D6D1C7]/50 w-full max-w-2xl">
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              :class="activeCategory === category
                ? 'border-[#2C2A26] text-[#2C2A26]'
                : 'border-transparent text-[#A8A29E] hover:text-[#2C2A26]'"
              class="text-sm uppercase tracking-widest pb-1 border-b transition-all duration-300"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            @select="$emit('select', $event)"
          />
        </div>
      </div>
    </section>
  `}),ce=m({template:`
    <section id="about" class="bg-[#EBE7DE]">
      <div class="py-32 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32 border-b border-[#D6D1C7]">
        <div class="md:w-1/3">
          <h2 class="text-5xl md:text-7xl font-serif text-[#2C2A26] leading-[1.1] tracking-tight">
            Derived from nature,<br /> Crafted for life.
          </h2>
          <div class="w-12 h-[2px] bg-[#2C2A26] mt-8"></div>
        </div>
        <div class="md:w-2/3 max-w-2xl">
          <p class="text-xl md:text-2xl text-[#5D5A53] font-serif italic leading-relaxed mb-10">
            "Aura is built on a simple and pure belief: furniture is not just to fill space, but a vessel to settle the body and mind."
          </p>
          <p class="text-lg text-[#5D5A53] font-light leading-relaxed mb-8">
            It should be as enduring as a pebble washed by flowing water, bringing deep and quiet comfort. In this era full of infinite noise, every item we design respects your tranquility.
          </p>
          <p class="text-lg text-[#5D5A53] font-light leading-relaxed mb-12">
            We meticulously select natural materials that age gracefully over time-solid wood, coarse linen, and full-grain leather-allowing the breath of nature to flow freely in your home.
          </p>
          <img
            src="https://images.pexels.com/photos/6583355/pexels-photo-6583355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Aura Design Studio"
            class="w-full h-[500px] object-cover grayscale-[0.2] contrast-[0.95] brightness-105"
          />
          <p class="text-xs font-medium uppercase tracking-[0.3em] text-[#A8A29E] mt-6">Aura Kyoto Studio</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div class="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200"
            alt="Natural Stone Texture"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
        </div>
        <div class="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7]">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] mb-6">Material</span>
          <h3 class="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
            Textures that grow <br /> warmer with time
          </h3>
          <p class="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
            We reject fast-food consumption. Each Aura furniture piece is crafted from carefully selected pure solid wood, traditionally crafted brass, and naturally breathable linen. Over time, they will develop a unique patina from contact, recording your home story.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div class="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
          <span class="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">Design Philosophy</span>
          <h3 class="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
            Greatest sound is silent,<br /> Greatest form is shapeless.
          </h3>
          <p class="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
            Our designs know how to subtly recede into the background. No loudly colored arrays, no cluttered and flashy lines. We provide stable support in the simplest form, retaining an undisturbed blank space amidst the noise, serving as the perfect vessel for a peaceful life.
          </p>
        </div>
        <div class="relative h-[500px] lg:h-auto overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/6801917/pexels-photo-6801917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Woman sitting on wooden floor reading"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
          />
        </div>
      </div>
    </section>
  `}),de=m({emits:["select"],setup(){return{articles:H}},template:`
    <section id="journal" class="bg-[#F5F2EB] py-32 px-6 md:px-12">
      <div class="max-w-[1800px] mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D6D1C7]">
          <div>
            <span class="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">Featured Columns</span>
            <h2 class="text-4xl md:text-6xl font-serif text-[#2C2A26]">Life Journal</h2>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            v-for="article in articles"
            :key="article.id"
            class="group cursor-pointer flex flex-col text-left"
            @click="$emit('select', article)"
          >
            <div class="w-full aspect-[4/3] overflow-hidden mb-8 bg-[#EBE7DE]">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
              />
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
  `}),ue=m({emits:["scroll-to","navigate"],setup(){const e=l("idle"),t=l("");return{email:t,handleSubscribe:()=>{t.value&&(e.value="loading",window.setTimeout(()=>{e.value="success",t.value=""},1500))},subscribeStatus:e}},template:`
    <footer class="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div class="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4">
          <h4 class="text-2xl font-serif text-[#2C2A26] mb-6">Aura</h4>
          <p class="max-w-xs font-light leading-relaxed">
            Technology designed as naturally as the world around us.<br />Derived from nature, crafted for the mind.
          </p>
        </div>

        <div class="md:col-span-2">
          <h4 class="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Shop</h4>
          <ul class="space-y-4 font-light">
            <li><a href="#products" @click.prevent="$emit('scroll-to', 'products')" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">All Products</a></li>
            <li><a href="#products" @click.prevent="$emit('scroll-to', 'products')" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Seating & Sofas</a></li>
            <li><a href="#products" @click.prevent="$emit('scroll-to', 'products')" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Tables & Storage</a></li>
            <li><a href="#products" @click.prevent="$emit('scroll-to', 'products')" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Home Lighting</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h4 class="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Company</h4>
          <ul class="space-y-4 font-light">
            <li><button @click="$emit('navigate', { type: 'brand-story' })" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline text-left">Brand Story</button></li>
            <li><button @click="$emit('navigate', { type: 'sustainability' })" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline text-left">Sustainability</button></li>
            <li><a href="#journal" @click.prevent="$emit('scroll-to', 'journal')" class="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Journal</a></li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <h4 class="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Newsletter</h4>
          <div class="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email address"
              v-model="email"
              :disabled="subscribeStatus === 'loading' || subscribeStatus === 'success'"
              class="bg-transparent border-b border-[#A8A29E] py-2 text-lg outline-none focus:border-[#2C2A26] transition-colors placeholder-[#A8A29E]/70 text-[#2C2A26] disabled:opacity-50"
            />
            <button
              @click="handleSubscribe"
              :disabled="subscribeStatus !== 'idle' || !email"
              class="self-start text-sm font-medium uppercase tracking-widest mt-2 hover:text-[#2C2A26] disabled:cursor-default disabled:hover:text-[#5D5A53] disabled:opacity-50 transition-opacity"
            >
              {{ subscribeStatus === 'idle' ? 'Subscribe' : subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribed' }}
            </button>
          </div>
        </div>
      </div>

      <div class="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60"></div>
    </footer>
  `}),pe=m({props:{cartCount:{type:Number,required:!0},currentUser:{type:Object,default:null}},emits:["open-cart","navigate","scroll-to"],setup(){const e=l(!1),t=l(!1),o=()=>{e.value=window.scrollY>50};return I(()=>{window.addEventListener("scroll",o)}),oe(()=>{window.removeEventListener("scroll",o)}),{closeAndNavigate:s=>{t.value=!1,s()},mobileMenuOpen:t,scrolled:e}},computed:{textColorClass(){return this.scrolled||this.mobileMenuOpen?"text-[#2C2A26]":"text-[#F5F2EB]"},avatar(){var e;return((e=this.currentUser)==null?void 0:e.avatarUrl)||_}},template:`
    <div>
      <nav
        :class="scrolled || mobileMenuOpen ? 'bg-[#F5F2EB]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'"
        class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out"
      >
        <div class="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          <a
            href="#"
            @click.prevent="$emit('scroll-to', '')"
            :class="textColorClass"
            class="text-3xl font-serif font-medium tracking-tight z-50 relative transition-colors duration-500"
          >
            ${J}
          </a>

          <div :class="textColorClass" class="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase transition-colors duration-500"></div>

          <div :class="textColorClass" class="flex items-center gap-6 z-50 relative transition-colors duration-500">
            <button
              v-if="currentUser && currentUser.role === 'admin'"
              @click="$emit('navigate', { type: 'admin-dashboard' })"
              class="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block text-[#2C2A26] bg-[#D6D1C7]/30 px-3 py-1 rounded"
            >
              Admin
            </button>

            <button
              v-if="currentUser"
              @click="$emit('navigate', { type: 'account-security' })"
              class="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div class="w-8 h-8 rounded-full overflow-hidden border border-current shadow-sm">
                <img :src="avatar" alt="User Avatar" class="w-full h-full object-cover" />
              </div>
              <span class="text-sm font-medium uppercase tracking-widest">{{ currentUser.username || 'My Account' }}</span>
            </button>

            <button
              v-else
              @click="$emit('navigate', { type: 'login' })"
              class="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block"
            >
              Login / Register
            </button>

            <button
              @click="$emit('open-cart')"
              class="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block"
            >
              Cart ({{ cartCount }})
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
          <a href="#products" @click.prevent="closeAndNavigate(() => $emit('scroll-to', 'products'))" class="hover:opacity-60 transition-opacity">Shop</a>
          <a href="#about" @click.prevent="closeAndNavigate(() => $emit('scroll-to', 'about'))" class="hover:opacity-60 transition-opacity">About</a>
          <a href="#journal" @click.prevent="closeAndNavigate(() => $emit('scroll-to', 'journal'))" class="hover:opacity-60 transition-opacity">Journal</a>

          <div class="w-12 h-[1px] bg-[#D6D1C7] my-4"></div>

          <button
            v-if="currentUser && currentUser.role === 'admin'"
            @click="closeAndNavigate(() => $emit('navigate', { type: 'admin-dashboard' }))"
            class="text-base uppercase tracking-widest font-sans bg-[#D6D1C7]/30 px-4 py-2 rounded"
          >
            Admin
          </button>

          <button
            v-if="currentUser"
            @click="closeAndNavigate(() => $emit('navigate', { type: 'account-security' }))"
            class="flex flex-col items-center gap-3"
          >
            <div class="w-16 h-16 rounded-full overflow-hidden border border-[#D6D1C7] shadow-sm">
              <img :src="avatar" alt="User Avatar" class="w-full h-full object-cover" />
            </div>
            <span class="text-base uppercase tracking-widest font-sans">{{ currentUser.username || 'My Account' }}</span>
          </button>

          <button
            v-else
            @click="closeAndNavigate(() => $emit('navigate', { type: 'login' }))"
            class="text-base uppercase tracking-widest font-sans"
          >
            Login / Register
          </button>

          <button @click="closeAndNavigate(() => $emit('open-cart'))" class="hover:opacity-60 transition-opacity text-base uppercase tracking-widest font-sans mt-4">
            Cart ({{ cartCount }})
          </button>
        </div>
      </div>
    </div>
  `}),me=m({props:{isOpen:{type:Boolean,required:!0},items:{type:Array,required:!0}},emits:["close","remove-item","checkout"],setup(e){return{total:k(()=>e.items.reduce((o,i)=>o+i.price,0))}},template:`
    <div>
      <div
        :class="isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
        class="fixed inset-0 bg-[#2C2A26]/30 backdrop-blur-sm z-[60] transition-opacity duration-500"
        @click="$emit('close')"
      ></div>

      <div
        :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
        class="fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#F5F2EB] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-[#D6D1C7] flex flex-col"
      >
        <div class="flex items-center justify-between p-6 border-b border-[#D6D1C7]">
          <h2 class="text-xl font-serif text-[#2C2A26]">Your Cart ({{ items.length }})</h2>
          <button @click="$emit('close')" class="text-[#A8A29E] hover:text-[#2C2A26] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-6 space-y-8">
          <div v-if="items.length === 0" class="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-12 h-12 text-[#A8A29E]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p class="font-light text-[#5D5A53]">Your cart is empty</p>
          </div>

          <div v-for="(item, index) in items" :key="item.id + '-' + index" class="flex gap-4 animate-fade-in-up">
            <div class="w-20 h-24 bg-[#EBE7DE] flex-shrink-0">
              <img :src="item.imageUrl" :alt="item.name" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex justify-between items-start">
                  <h3 class="font-serif text-[#2C2A26]">{{ item.name }}</h3>
                  <span class="text-sm font-light text-[#2C2A26]">\${{ item.price }}</span>
                </div>
                <p class="text-xs text-[#A8A29E] uppercase tracking-widest mt-1">{{ item.category }}</p>
              </div>
              <button @click="$emit('remove-item', index)" class="text-xs text-[#A8A29E] hover:text-[#2C2A26] self-start underline underline-offset-4 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div class="p-6 border-t border-[#D6D1C7] bg-[#EBE7DE]/30">
          <div class="flex justify-between items-center mb-6">
            <span class="text-sm font-medium uppercase tracking-widest text-[#5D5A53]">Subtotal</span>
            <span class="text-xl font-serif text-[#2C2A26]">\${{ total }}</span>
          </div>
          <p class="text-xs text-[#A8A29E] mb-6 text-center">Shipping and taxes will be calculated at checkout</p>
          <button
            @click="$emit('checkout')"
            :disabled="items.length === 0"
            class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  `}),fe=m({props:{product:{type:Object,required:!0}},emits:["back","add-to-cart"],setup(e){const t=l(null),o=["S","M","L"],i=k(()=>e.product.category==="Wearable");return{selectedSize:t,showSizes:i,sizes:o}},template:`
    <div class="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up">
      <div class="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        <button @click="$emit('back')" class="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Shop
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div class="flex flex-col gap-4">
            <div class="w-full aspect-[4/5] bg-[#EBE7DE] overflow-hidden">
              <img :src="product.imageUrl" :alt="product.name" class="w-full h-full object-cover animate-fade-in-up" />
            </div>
          </div>

          <div class="flex flex-col justify-center max-w-xl">
            <span class="text-sm font-medium text-[#A8A29E] uppercase tracking-widest mb-2">{{ product.category }}</span>
            <h1 class="text-4xl md:text-5xl font-serif text-[#2C2A26] mb-4">{{ product.name }}</h1>
            <span class="text-2xl font-light text-[#2C2A26] mb-8">\${{ product.price }}</span>

            <p class="text-[#5D5A53] leading-relaxed font-light text-lg mb-8 border-b border-[#D6D1C7] pb-8">
              {{ product.longDescription || product.description }}
            </p>

            <div v-if="showSizes" class="mb-8">
              <span class="block text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-4">Select Size</span>
              <div class="flex gap-4">
                <button
                  v-for="size in sizes"
                  :key="size"
                  @click="selectedSize = size"
                  :class="selectedSize === size ? 'border-[#2C2A26] bg-[#2C2A26] text-[#F5F2EB]' : 'border-[#D6D1C7] text-[#5D5A53] hover:border-[#2C2A26]'"
                  class="w-12 h-12 flex items-center justify-center border transition-all duration-300"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <button @click="$emit('add-to-cart', product)" class="w-full py-5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">
                Add to Cart - \${{ product.price }}
              </button>
              <ul class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#5D5A53]">
                <li v-for="(feature, index) in product.features" :key="index" class="flex items-center gap-3 p-3 bg-white/40 border border-[#D6D1C7] rounded-sm transition-all hover:bg-white hover:border-[#2C2A26] group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[#A8A29E] group-hover:text-[#2C2A26] transition-colors">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span class="font-medium text-[#2C2A26] tracking-wide">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}),he=m({props:{article:{type:Object,required:!0}},emits:["back"],template:`
    <div class="min-h-screen bg-[#F5F2EB] animate-fade-in-up">
      <div class="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/20"></div>
      </div>

      <div class="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-10 pb-32">
        <div class="bg-[#F5F2EB] p-8 md:p-16 shadow-xl shadow-[#2C2A26]/5">
          <div class="flex justify-between items-center mb-12 border-b border-[#D6D1C7] pb-8">
            <button @click="$emit('back')" class="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Journal
            </button>
            <span class="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">{{ article.date }}</span>
          </div>

          <h1 class="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-12 leading-tight text-center">{{ article.title }}</h1>
          <div class="journal-content mx-auto font-light leading-loose text-[#5D5A53]" v-html="article.contentHtml"></div>
          <div class="mt-16 pt-12 border-t border-[#D6D1C7] flex justify-center">
            <span class="text-2xl font-serif italic text-[#2C2A26]">Aura</span>
          </div>
        </div>
      </div>
    </div>
  `}),ge=m({emits:["navigate","user-changed"],setup(e,{emit:t}){const o=l(""),i=l(""),s=l(!1),a=l("");return{error:a,handleLogin:d=>{d.preventDefault(),a.value="";const p=A().find(n=>n.phone===o.value&&n.password===i.value);p?(P(p,s.value),t("user-changed",w()),t("navigate",{type:"home"})):a.value="Incorrect phone number or password"},password:i,phone:o,rememberMe:s}},template:`
    <div class="pt-24 min-h-screen bg-[#F5F2EB] flex flex-col items-center animate-fade-in-up">
      <div class="w-full max-w-md p-8 bg-white/50 border border-[#D6D1C7] mt-12">
        <h2 class="text-3xl font-serif text-[#2C2A26] mb-8 text-center bg-transparent">Login</h2>
        <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>
        <form @submit="handleLogin" class="space-y-6">
          <input v-model="phone" type="text" placeholder="Phone Number" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <input v-model="password" type="password" placeholder="Password" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <input id="rememberMe" v-model="rememberMe" type="checkbox" class="accent-[#2C2A26]" />
              <label for="rememberMe" class="text-sm text-[#5D5A53]">Remember me</label>
            </div>
            <button type="button" @click="$emit('navigate', { type: 'forgot-password' })" class="text-sm text-[#5D5A53] hover:text-[#2C2A26]">Forgot password?</button>
          </div>
          <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">Login</button>
        </form>
        <div class="mt-6 text-center text-sm text-[#5D5A53]">
          Don't have an account? <button @click="$emit('navigate', { type: 'register' })" class="text-[#2C2A26] underline underline-offset-4">Register Now</button>
        </div>
      </div>
    </div>
  `}),be=m({emits:["navigate","user-changed"],setup(e,{emit:t}){const o=l(""),i=l(""),s=l(""),a=l(""),r=l(""),d=n=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n),u=n=>n.length>=6;return{confirmPassword:a,email:i,error:r,handleRegister:n=>{if(n.preventDefault(),r.value="",!d(i.value)){r.value="Invalid email format";return}if(!u(s.value)){r.value="Password is too weak, please enter at least 6 characters";return}if(s.value!==a.value){r.value="Passwords do not match";return}if(A().find(f=>f.phone===o.value)){r.value="This phone number is already registered";return}const g={phone:o.value,email:i.value,password:s.value,role:"user"};X(g),P(g),t("user-changed",w()),t("navigate",{type:"home"})},password:s,phone:o}},template:`
    <div class="pt-24 min-h-screen bg-[#F5F2EB] flex flex-col items-center animate-fade-in-up">
      <div class="w-full max-w-md p-8 bg-white/50 border border-[#D6D1C7] mt-12">
        <h2 class="text-3xl font-serif text-[#2C2A26] mb-8 text-center bg-transparent">Register</h2>
        <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>
        <form @submit="handleRegister" class="space-y-6">
          <input v-model="phone" type="text" placeholder="Phone Number" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <input v-model="email" type="email" placeholder="Email Address" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <input v-model="password" type="password" placeholder="Password (at least 6 characters)" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <input v-model="confirmPassword" type="password" placeholder="Confirm Password" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">Register</button>
        </form>
        <div class="mt-6 text-center text-sm text-[#5D5A53]">
          Already have an account? <button @click="$emit('navigate', { type: 'login' })" class="text-[#2C2A26] underline underline-offset-4">Login Now</button>
        </div>
      </div>
    </div>
  `}),ve=m({emits:["navigate"],setup(e,{emit:t}){const o=l(""),i=l(""),s=l(""),a=l(1),r=l(""),d=l("");return{code:i,email:o,error:r,handleSendCode:n=>{if(n.preventDefault(),r.value="",!A().find(g=>g.email===o.value)){r.value="No account found with this email";return}d.value="Verification code sent to your email",window.setTimeout(()=>{a.value=2},1500)},handleVerifyAndReset:n=>{if(n.preventDefault(),r.value="",i.value!=="1234"){r.value="Incorrect code (use 1234 for testing)";return}if(s.value.length<6){r.value="Password must be at least 6 characters";return}const c=A(),g=c.findIndex(f=>f.email===o.value);g>-1?(c[g].password=s.value,j(c),d.value="Password reset successfully",window.setTimeout(()=>t("navigate",{type:"login"}),2e3)):r.value="System error, could not reset password"},newPassword:s,step:a,success:d}},template:`
    <div class="pt-24 min-h-screen bg-[#F5F2EB] flex flex-col items-center animate-fade-in-up">
      <div class="w-full max-w-md p-8 bg-white/50 border border-[#D6D1C7] mt-12">
        <h2 class="text-3xl font-serif text-[#2C2A26] mb-8 text-center bg-transparent">Reset Password</h2>
        <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>
        <p v-if="success" class="text-green-600 text-sm mb-4">{{ success }}</p>

        <form v-if="step === 1" @submit="handleSendCode" class="space-y-6">
          <input v-model="email" type="email" placeholder="Registered Email Address" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">Send Code</button>
        </form>

        <form v-else @submit="handleVerifyAndReset" class="space-y-6">
          <input v-model="code" type="text" placeholder="Enter Verification Code (1234)" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <input v-model="newPassword" type="password" placeholder="New Password (at least 6 chars)" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
          <button type="submit" class="w-full py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">Reset Password</button>
        </form>

        <div class="mt-6 text-center text-sm text-[#5D5A53]">
          <button @click="$emit('navigate', { type: 'login' })" class="text-[#2C2A26] underline underline-offset-4">Back to Login</button>
        </div>
      </div>
    </div>
  `}),xe=m({props:{items:{type:Array,required:!0},currentUser:{type:Object,default:null}},emits:["back","clear-cart"],setup(e,{emit:t}){const o=q({firstName:"",lastName:"",address:"",city:"",postalCode:""}),i=q({cardNumber:"",expiry:"",cvc:""}),s=l(!1),a=l(!1),r=k(()=>e.items.reduce((n,c)=>n+c.price,0)),d=k(()=>0),u=k(()=>r.value+d.value);return{handleCheckout:n=>{if(n.preventDefault(),!e.currentUser){window.alert("Please login before checking out");return}if(e.items.length===0){window.alert("Your cart is empty");return}s.value=!0,window.setTimeout(()=>{Z({id:`ord_${Date.now()}`,userId:e.currentUser.phone||"",items:[...e.items],total:u.value,date:new Date().toISOString(),status:"paid"}),t("clear-cart"),s.value=!1,a.value=!0},1500)},isProcessing:s,isSuccess:a,paymentInfo:i,shippingInfo:o,shipping:d,subtotal:r,total:u}},template:`
    <div v-if="isSuccess" class="min-h-screen pt-32 pb-24 px-6 bg-[#F5F2EB] flex flex-col items-center animate-fade-in-up text-center">
      <h1 class="text-4xl font-serif text-[#2C2A26] mb-6">Payment Successful</h1>
      <p class="text-[#5D5A53] mb-12">Thank you for your purchase!</p>
      <button @click="$emit('back')" class="px-8 py-4 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors">
        Return to Shop
      </button>
    </div>

    <div v-else class="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div class="max-w-6xl mx-auto">
        <button @click="$emit('back')" class="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Shop
        </button>

        <form @submit="handleCheckout" class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h1 class="text-3xl font-serif text-[#2C2A26] mb-4">Checkout</h1>
            <div class="space-y-12">
              <div>
                <h2 class="text-xl font-serif text-[#2C2A26] mb-6">Contact Information</h2>
                <div class="space-y-4">
                  <input :value="currentUser?.phone || currentUser?.email || ''" type="text" class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" disabled />
                </div>
              </div>

              <div>
                <h2 class="text-xl font-serif text-[#2C2A26] mb-6">Shipping Address</h2>
                <div class="space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <input v-model="shippingInfo.firstName" type="text" placeholder="First Name" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                    <input v-model="shippingInfo.lastName" type="text" placeholder="Last Name" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                  </div>
                  <input v-model="shippingInfo.address" type="text" placeholder="Address" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                  <div class="grid grid-cols-2 gap-4">
                    <input v-model="shippingInfo.city" type="text" placeholder="City" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                    <input v-model="shippingInfo.postalCode" type="text" placeholder="Postal Code" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <h2 class="text-xl font-serif text-[#2C2A26] mb-6">Payment</h2>
                <div class="p-6 border border-[#D6D1C7] bg-white/50 space-y-4">
                  <input v-model="paymentInfo.cardNumber" type="text" placeholder="Card Number" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                  <div class="grid grid-cols-2 gap-4">
                    <input v-model="paymentInfo.expiry" type="text" placeholder="Expiry (MM/YY)" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                    <input v-model="paymentInfo.cvc" type="text" placeholder="CVC" required class="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors" />
                  </div>
                </div>
              </div>

              <div>
                <button type="submit" :disabled="isProcessing || items.length === 0" class="w-full py-5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] disabled:bg-[#A8A29E] disabled:cursor-not-allowed transition-colors">
                  {{ isProcessing ? 'Processing...' : 'Pay Now - $' + total }}
                </button>
              </div>
            </div>
          </div>

          <div class="lg:pl-12 lg:border-l border-[#D6D1C7]">
            <h2 class="text-xl font-serif text-[#2C2A26] mb-8">Order Summary</h2>

            <div class="space-y-6 mb-8">
              <div v-for="(item, index) in items" :key="index" class="flex gap-4">
                <div class="w-16 h-16 bg-[#EBE7DE] relative">
                  <img :src="item.imageUrl" :alt="item.name" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <h3 class="font-serif text-[#2C2A26] text-base">{{ item.name }}</h3>
                  <p class="text-xs text-[#A8A29E]">{{ item.category }}</p>
                </div>
                <span class="text-sm text-[#5D5A53]">\${{ item.price }}</span>
              </div>
            </div>

            <div class="border-t border-[#D6D1C7] pt-6 space-y-2">
              <div class="flex justify-between text-sm text-[#5D5A53]">
                <span>Subtotal</span>
                <span>\${{ subtotal }}</span>
              </div>
              <div class="flex justify-between text-sm text-[#5D5A53]">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div class="border-t border-[#D6D1C7] mt-6 pt-6">
              <div class="flex justify-between items-center">
                <span class="font-serif text-xl text-[#2C2A26]">Total</span>
                <div class="flex items-end gap-2">
                  <span class="text-xs text-[#A8A29E] mb-1">USD</span>
                  <span class="font-serif text-2xl text-[#2C2A26]">\${{ total }}</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `}),we=m({props:{currentUser:{type:Object,default:null}},emits:["navigate","user-changed"],setup(e,{emit:t}){var $,M,L,R;const o=l("profile"),i=l((($=e.currentUser)==null?void 0:$.username)||""),s=l(((M=e.currentUser)==null?void 0:M.avatarUrl)||""),a=l(((L=e.currentUser)==null?void 0:L.bio)||""),r=l(""),d=l(""),u=l(""),p=l(((R=e.currentUser)==null?void 0:R.phone)||""),n=l(""),c=l("");W(()=>e.currentUser,h=>{i.value=(h==null?void 0:h.username)||"",s.value=(h==null?void 0:h.avatarUrl)||"",a.value=(h==null?void 0:h.bio)||"",p.value=(h==null?void 0:h.phone)||""},{immediate:!0}),I(()=>{e.currentUser||t("navigate",{type:"login"})});const g=h=>/^1[3-9]\d{9}$/.test(h);return{activeTab:o,avatarUrl:s,bio:a,confirmNewPassword:u,defaultAvatar:_,error:n,handleLogout:()=>{P(null),t("user-changed",null),t("navigate",{type:"home"})},handleUpdateProfile:h=>{h.preventDefault(),n.value="",c.value="";const F=e.currentUser;if(!F){t("navigate",{type:"login"});return}const v=A(),y=v.findIndex(C=>C.phone===F.phone);if(y===-1){n.value="User not found";return}const b=v[y];b.username=i.value,b.avatarUrl=s.value,b.bio=a.value,v[y]=b,j(v),P(b),c.value="Profile updated successfully",t("user-changed",w())},handleUpdateSecurity:h=>{h.preventDefault(),n.value="",c.value="";const F=e.currentUser;if(!F){t("navigate",{type:"login"});return}const v=A(),y=v.findIndex(C=>C.phone===F.phone);if(y===-1){n.value="User not found";return}const b=v[y];if(r.value&&b.password!==r.value){n.value="Incorrect current password";return}if(d.value&&d.value!==u.value){n.value="New passwords do not match";return}if(d.value&&d.value.length<6){n.value="New password must be at least 6 characters";return}if(p.value!==b.phone){if(!g(p.value)){n.value="Invalid phone number format";return}if(v.find(C=>C.phone===p.value&&C.phone!==b.phone)){n.value="This phone number is already in use by another account";return}b.phone=p.value}d.value&&(b.password=d.value),v[y]=b,j(v),P(b),c.value="Security settings updated successfully",r.value="",d.value="",u.value="",t("user-changed",w())},newPassword:d,newPhone:p,oldPassword:r,success:c,username:i}},template:`
    <div v-if="currentUser" class="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up pb-24">
      <div class="max-w-5xl mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row gap-12 mt-8">
          <aside class="md:w-64 flex-shrink-0">
            <div class="flex items-center gap-4 mb-8">
              <div class="w-16 h-16 rounded-full overflow-hidden border border-[#D6D1C7] flex-shrink-0">
                <img :src="currentUser.avatarUrl || defaultAvatar" alt="User Avatar" class="w-full h-full object-cover" />
              </div>
              <div class="overflow-hidden">
                <h2 class="text-xl font-serif text-[#2C2A26] truncate flex items-center gap-2">
                  {{ currentUser.username || 'User' }}
                  <span v-if="currentUser.role === 'admin'" class="text-[10px] bg-[#2C2A26] text-[#F5F2EB] px-2 py-0.5 rounded-sm uppercase tracking-wider font-sans whitespace-nowrap">Admin</span>
                </h2>
                <p class="text-sm text-[#5D5A53] truncate">{{ currentUser.phone }}</p>
              </div>
            </div>

            <nav class="flex flex-col space-y-2">
              <button @click="activeTab = 'profile'; error = ''; success = ''" :class="activeTab === 'profile' ? 'bg-[#2C2A26] text-[#F5F2EB]' : 'text-[#5D5A53] hover:bg-[#D6D1C7]/30 hover:text-[#2C2A26]'" class="text-left px-4 py-3 rounded-md transition-colors">
                Profile
              </button>
              <button @click="activeTab = 'security'; error = ''; success = ''" :class="activeTab === 'security' ? 'bg-[#2C2A26] text-[#F5F2EB]' : 'text-[#5D5A53] hover:bg-[#D6D1C7]/30 hover:text-[#2C2A26]'" class="text-left px-4 py-3 rounded-md transition-colors">
                Security Settings
              </button>
              <button @click="$emit('navigate', { type: 'home' })" class="text-left px-4 py-3 rounded-md text-[#5D5A53] hover:bg-[#D6D1C7]/30 hover:text-[#2C2A26] transition-colors">
                Back to Shop
              </button>
              <div class="pt-4 mt-4 border-t border-[#D6D1C7]/50">
                <button @click="handleLogout" class="text-left px-4 py-3 rounded-md text-red-600 hover:bg-red-50 w-full transition-colors">
                  Logout
                </button>
              </div>
            </nav>
          </aside>

          <main class="flex-1 bg-white/50 border border-[#D6D1C7] p-8 md:p-12 rounded-xl">
            <div v-if="error" class="mb-6 p-4 bg-red-50 text-red-600 rounded-md text-sm">{{ error }}</div>
            <div v-if="success" class="mb-6 p-4 bg-green-50 text-green-700 rounded-md text-sm">{{ success }}</div>

            <div v-if="activeTab === 'profile'" class="animate-fade-in-up">
              <h3 class="text-2xl font-serif text-[#2C2A26] mb-8 border-b border-[#D6D1C7] pb-4">Personal Profile</h3>
              <form @submit="handleUpdateProfile" class="space-y-6 max-w-lg">
                <div class="flex items-center gap-6 mb-8">
                  <div class="w-24 h-24 rounded-full overflow-hidden border border-[#D6D1C7] bg-[#F5F2EB]">
                    <img :src="avatarUrl || defaultAvatar" alt="User Avatar Preview" class="w-full h-full object-cover" />
                  </div>
                  <div class="flex-1 space-y-2">
                    <label class="text-xs text-[#5D5A53] uppercase tracking-widest block">Avatar URL</label>
                    <input v-model="avatarUrl" type="url" placeholder="Enter image link (optional)" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" />
                    <p class="text-xs text-[#A8A29E]">Leave blank to use default avatar</p>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-xs text-[#5D5A53] uppercase tracking-widest">Username / Nickname</label>
                  <input v-model="username" type="text" placeholder="Set your nickname" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" />
                </div>

                <div class="space-y-2">
                  <label class="text-xs text-[#5D5A53] uppercase tracking-widest">Bio</label>
                  <textarea v-model="bio" placeholder="Tell us a little about yourself" class="w-full bg-transparent border border-[#D6D1C7] rounded-md p-3 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] resize-none h-32"></textarea>
                </div>

                <button type="submit" class="px-8 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors rounded-sm">
                  Save Profile
                </button>
              </form>
            </div>

            <div v-else class="animate-fade-in-up">
              <h3 class="text-2xl font-serif text-[#2C2A26] mb-8 border-b border-[#D6D1C7] pb-4">Security Settings</h3>
              <form @submit="handleUpdateSecurity" class="space-y-8 max-w-lg">
                <div class="space-y-2">
                  <label class="text-xs text-[#5D5A53] uppercase tracking-widest">Bind Phone Number</label>
                  <input v-model="newPhone" type="text" placeholder="Phone Number" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" required />
                </div>

                <div class="space-y-6 pt-4">
                  <h4 class="text-sm font-serif text-[#2C2A26]">Change Password</h4>
                  <div class="space-y-2">
                    <input v-model="oldPassword" type="password" placeholder="Current Password" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" />
                  </div>
                  <div class="space-y-2">
                    <input v-model="newPassword" type="password" placeholder="New Password (leave blank to keep current)" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" />
                  </div>
                  <div class="space-y-2">
                    <input v-model="confirmNewPassword" type="password" placeholder="Confirm New Password" class="w-full bg-transparent border-b border-[#D6D1C7] py-2 text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26]" />
                  </div>
                </div>

                <button type="submit" class="px-8 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors rounded-sm">
                  Update Security Settings
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  `}),ye=m({props:{currentUser:{type:Object,default:null}},emits:["navigate"],setup(e){const t=l("products"),o=l(D()),i=l(z()),s=l(!1),a=l(null),r=q({name:"",tagline:"",price:"",category:"娌欏彂",description:"",imageUrl:"",features:""}),d=()=>{o.value=D()},u=f=>{window.confirm("Are you sure you want to delete this product?")&&(G(f),d())},p=()=>{r.name="",r.tagline="",r.price="",r.description="",r.imageUrl="",r.features=""},n=()=>{a.value=null,s.value=!1,p()};return{activeTab:t,cancelEdit:n,editingProductId:a,form:r,handleAddOrEditProduct:f=>{f.preventDefault();const E={id:a.value||`p_${Date.now()}`,name:r.name,tagline:r.tagline,price:Number(r.price)||0,category:r.category,description:r.description,imageUrl:r.imageUrl||"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",features:r.features.split(",").map(S=>S.trim()).filter(Boolean).length>0?r.features.split(",").map(S=>S.trim()).filter(Boolean):["New Feature"]};a.value?Q(a.value,E):K(E),d(),n()},handleDelete:u,orders:i,products:o,showAddForm:s,startEdit:f=>{a.value=f.id,r.name=f.name,r.tagline=f.tagline,r.price=String(f.price),r.category=f.category,r.description=f.description,r.imageUrl=f.imageUrl||"",r.features=f.features?f.features.join(", "):"",s.value=!0,window.scrollTo({top:0,behavior:"smooth"})}}},template:`
    <div v-if="!currentUser || currentUser.role !== 'admin'" class="pt-32 text-center text-red-500">Unauthorized access</div>
    <div v-else class="pt-24 min-h-screen bg-[#F5F2EB] px-6 lg:px-12 animate-fade-in-up pb-24">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-end mb-12 border-b border-[#D6D1C7] pb-6">
          <div>
            <h2 class="text-3xl lg:text-4xl font-serif text-[#2C2A26]">Admin Dashboard</h2>
            <p class="text-[#5D5A53] mt-2">Admin {{ currentUser.phone }}</p>
          </div>
          <button @click="$emit('navigate', { type: 'home' })" class="text-sm uppercase tracking-widest text-[#5D5A53] hover:text-[#2C2A26] transition-colors">
            Back to Home
          </button>
        </div>

        <div class="flex gap-8 mb-12 border-b border-[#D6D1C7]">
          <button @click="activeTab = 'products'" :class="activeTab === 'products' ? 'text-[#2C2A26] border-b-2 border-[#2C2A26]' : 'text-[#A8A29E] hover:text-[#2C2A26]'" class="pb-4 text-sm font-medium uppercase tracking-widest transition-colors">
            Product Management
          </button>
          <button @click="activeTab = 'orders'" :class="activeTab === 'orders' ? 'text-[#2C2A26] border-b-2 border-[#2C2A26]' : 'text-[#A8A29E] hover:text-[#2C2A26]'" class="pb-4 text-sm font-medium uppercase tracking-widest transition-colors">
            Order Queries
          </button>
        </div>

        <div v-if="activeTab === 'products'">
          <div class="mb-8">
            <button v-if="!showAddForm" @click="showAddForm = true" class="px-6 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-xs font-medium hover:bg-[#433E38] transition-colors">
              Add New Product
            </button>
          </div>

          <div v-if="showAddForm" class="bg-white/50 p-6 border border-[#D6D1C7] mb-12">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-xl font-serif text-[#2C2A26]">{{ editingProductId ? 'Edit Product' : 'New Product Information' }}</h3>
              <button @click="cancelEdit" class="text-[#A8A29E] hover:text-[#2C2A26] text-sm uppercase tracking-widest transition-colors">Cancel</button>
            </div>
            <form @submit="handleAddOrEditProduct" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input v-model="form.name" type="text" placeholder="Product Name" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26]" />
              <input v-model="form.tagline" type="text" placeholder="Tagline" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26]" />
              <input v-model="form.price" type="number" placeholder="Price" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26]" />
              <select v-model="form.category" class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] text-[#5D5A53]">
                <option>Seating</option>
                <option>Storage</option>
                <option>Lighting</option>
                <option>Table</option>
              </select>
              <input v-model="form.features" type="text" placeholder="Features (comma separated)" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] md:col-span-2" />
              <input v-model="form.imageUrl" type="text" placeholder="Image URL (optional)" class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] md:col-span-2" />
              <textarea v-model="form.description" placeholder="Product Description" required class="bg-transparent border-b border-[#D6D1C7] py-2 outline-none focus:border-[#2C2A26] md:col-span-2 resize-none h-24"></textarea>
              <button type="submit" class="md:col-span-2 py-3 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors mt-4">
                {{ editingProductId ? 'Save Changes' : 'Confirm Add' }}
              </button>
            </form>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-[#D6D1C7] text-xs uppercase tracking-widest text-[#A8A29E]">
                  <th class="py-4 font-medium">Name</th>
                  <th class="py-4 font-medium">Category</th>
                  <th class="py-4 font-medium">Price</th>
                  <th class="py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id" class="border-b border-[#D6D1C7]/50 hover:bg-[#EBE7DE]/30 transition-colors">
                  <td class="py-4 flex items-center gap-4">
                    <img :src="product.imageUrl" :alt="product.name" class="w-12 h-12 object-cover rounded-sm grayscale contrast-125" />
                    <span class="font-medium text-[#2C2A26]">{{ product.name }}</span>
                  </td>
                  <td class="py-4 text-[#5D5A53]">{{ product.category }}</td>
                  <td class="py-4 text-[#2C2A26]">\${{ product.price }}</td>
                  <td class="py-4 text-right">
                    <button @click="startEdit(product)" class="text-[#5D5A53] hover:text-[#2C2A26] text-sm font-medium mr-4 transition-colors">Edit</button>
                    <button @click="handleDelete(product.id)" class="text-red-500 hover:text-red-700 text-sm font-medium transition-colors">Delete</button>
                  </td>
                </tr>
                <tr v-if="products.length === 0">
                  <td colspan="4" class="py-8 text-center text-[#A8A29E]">No products available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-[#D6D1C7] text-xs uppercase tracking-widest text-[#A8A29E]">
                <th class="py-4 font-medium">Order ID</th>
                <th class="py-4 font-medium">Date</th>
                <th class="py-4 font-medium">User (Phone)</th>
                <th class="py-4 font-medium">Total</th>
                <th class="py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id" class="border-b border-[#D6D1C7]/50 hover:bg-[#EBE7DE]/30 transition-colors">
                <td class="py-4 text-[#2C2A26] font-medium">{{ order.id }}</td>
                <td class="py-4 text-[#5D5A53]">{{ new Date(order.date).toLocaleDateString() }}</td>
                <td class="py-4 text-[#5D5A53]">{{ order.userId }}</td>
                <td class="py-4 text-[#2C2A26]">\${{ order.total }}</td>
                <td class="py-4 text-green-600 uppercase tracking-widest text-xs font-semibold">Paid</td>
              </tr>
              <tr v-if="orders.length === 0">
                <td colspan="5" class="py-8 text-center text-[#A8A29E]">No order records</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}),Ae=m({emits:["navigate"],template:`
    <div class="bg-[#F5F2EB] min-h-screen">
      <div class="relative h-screen min-h-[600px] w-full">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" alt="Tranquil Furniture" class="w-full h-full object-cover grayscale contrast-[0.8]" />
          <div class="absolute inset-0 bg-black/20"></div>
        </div>
        <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <span class="text-white/80 font-sans uppercase tracking-[0.3em] text-xs mb-8">Est. 1999</span>
          <h1 class="text-6xl md:text-8xl font-serif text-white tracking-wide mix-blend-overlay">The Precipitation of Time</h1>
        </div>
      </div>

      <div class="max-w-[1200px] mx-auto px-6 lg:px-12 py-24 md:py-32">
        <div class="max-w-3xl mx-auto text-center mb-32 animate-fade-in-up">
          <h2 class="text-2xl md:text-3xl font-serif text-[#2C2A26] leading-relaxed mb-8">
            "True design shouldn't be the exploitation of space, but humility towards time. From 1999 to today, we search for the answers to life in the texture of wood."
          </h2>
          <p class="text-[#5D5A53] font-light tracking-widest text-sm uppercase">2026 路 The 27th Year</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center mb-32">
          <div class="md:col-span-7 h-[500px] md:h-[700px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200" alt="Workshop by the Cedar Forest" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] sepia-[0.2]" />
          </div>
          <div class="md:col-span-5 space-y-8">
            <span class="text-xs tracking-[0.2em] text-[#A8A29E] uppercase">1999 路 Origins</span>
            <h3 class="text-3xl font-serif text-[#2C2A26]">Beginning With An Oak Seed</h3>
            <p class="text-base font-light text-[#5D5A53] leading-relaxed">
              In 1999, Aura's first workshop was born beside a quiet cedar forest. Abandoning the noisy industrial assembly lines, we chose to return to the most primitive hand-carving. In that era, speed was everything, and we decided to slow down.
            </p>
            <p class="text-base font-light text-[#5D5A53] leading-relaxed">
              We believe that only wood that has undergone a long growth, in the calloused hands of artisans, can transform into furniture with a soul.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center mb-32">
          <div class="md:col-span-4 order-2 md:order-1 space-y-8 md:pl-8">
            <span class="text-xs tracking-[0.2em] text-[#A8A29E] uppercase">2026 路 Present Day</span>
            <h3 class="text-3xl font-serif text-[#2C2A26]">The Aesthetics of Defaulting to Silence</h3>
            <p class="text-base font-light text-[#5D5A53] leading-relaxed">
              Time flows to 2026, the digital torrent has submerged life, and the desire for "true touch" has reached its peak. Our furniture is not just space filler, but an emotional medium that helps people calm down.
            </p>
            <p class="text-base font-light text-[#5D5A53] leading-relaxed">
              Every solid wood long table, every linen chair, retains the original character of its materials, receding into the background of life, yet giving a warm and firm response with every touch.
            </p>
          </div>
          <div class="md:col-span-8 order-1 md:order-2 h-[450px] md:h-[600px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200" alt="Minimalist Furniture Design" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s] sepia-[0.1]" />
          </div>
        </div>

        <div class="text-center pt-24 border-t border-[#D6D1C7]">
          <h4 class="font-serif text-2xl text-[#2C2A26] mb-8">Feel the True Face of Life</h4>
          <button @click="$emit('navigate', { type: 'home' })" class="text-xs font-medium uppercase tracking-[0.2em] text-[#2C2A26] border-b border-[#2C2A26] pb-2 hover:text-[#5D5A53] hover:border-[#5D5A53] transition-colors">
            Return to Home to Explore Collections
          </button>
        </div>
      </div>
    </div>
  `}),Ce=m({emits:["navigate"],template:`
    <div class="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up pb-24">
      <div class="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div class="mb-16 md:mb-24 text-center">
          <h1 class="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-6 drop-shadow-sm">Sustainability</h1>
          <p class="text-[#5D5A53] tracking-widest uppercase text-sm font-medium">Respecting Nature, Committing to Tomorrow's Home</p>
        </div>

        <div class="grid grid-cols-1 mb-24">
          <div class="h-[400px] md:h-[500px] overflow-hidden rounded-sm mb-16 shadow-md relative">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600" alt="Vast Forest" class="absolute inset-0 w-full h-full object-cover grayscale contrast-[0.9] brightness-[0.85] hover:scale-105 transition-transform duration-[2s]" />
            <div class="absolute inset-0 flex items-center justify-center">
              <h2 class="text-3xl md:text-5xl font-serif text-white tracking-wide">2026 Green Book Plan</h2>
            </div>
          </div>

          <div class="max-w-3xl mx-auto space-y-12">
            <div>
              <h3 class="text-2xl font-serif text-[#2C2A26] mb-4 border-b border-[#D6D1C7] pb-2 text-center md:text-left">Long-lasting Design, Rejecting Disposable Consumption</h3>
              <p class="text-lg font-light text-[#5D5A53] leading-relaxed">
                In furniture manufacturing, actual sustainability is not changing packaging, but making objects that can accompany you throughout your life. From 2026, all core Aura furniture pledges to offer a 30-year lifespan. Through stronger mortise and tenon structures and removable fabric kits, we ensure your sofa and dining table can not only withstand the erosion of time but also serve as a vessel for inheritance.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-serif text-[#2C2A26] mb-4 border-b border-[#D6D1C7] pb-2 text-center md:text-left">100% Responsibly Sourced Wood</h3>
              <p class="text-lg font-light text-[#5D5A53] leading-relaxed">
                Wood is the soul of our products. We only source raw materials from FSC-certified forests. Moreover, for every usable tree we take, we will plant three saplings in the same woodland. We use traceable records to guarantee a virtuous cycle for the natural resources we consume.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-serif text-[#2C2A26] mb-4 border-b border-[#D6D1C7] pb-2 text-center md:text-left">A Non-toxic Habitat</h3>
              <p class="text-lg font-light text-[#5D5A53] leading-relaxed">
                Furniture is the item in most direct contact with your skin. We completely abandoned formaldehyde-based adhesives and synthetic fibers. In their place are water-based varnishes, pure beeswax, natural linen, and organic cotton. You can breathe pure air freely in our workshop or your living room.
              </p>
            </div>
          </div>
        </div>

        <div class="text-center pt-12 border-t border-[#D6D1C7]">
          <button @click="$emit('navigate', { type: 'home' })" class="text-sm font-medium uppercase tracking-widest text-[#2C2A26] border border-[#2C2A26] px-8 py-3 hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-colors">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  `}),ke=m({setup(){const e=l(!1),t=l([{role:"model",text:"Welcome to Aura. I am here to help you find items that resonate with your life. How can I help you?",timestamp:Date.now()}]),o=l(""),i=l(!1),s=l(null);W([t,e],async()=>{await V(),s.value&&(s.value.scrollTop=s.value.scrollHeight)},{deep:!0});const r=async()=>{if(!o.value.trim())return;const u={role:"user",text:o.value,timestamp:Date.now()};t.value=[...t.value,u],o.value="",i.value=!0;try{const p=t.value.map(c=>({role:c.role,text:c.text})),n=await re(p,u.text);t.value=[...t.value,{role:"model",text:n,timestamp:Date.now()}]}finally{i.value=!1}};return{handleKeyPress:u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),r())},handleSend:r,inputValue:o,isOpen:e,isThinking:i,messages:t,scrollRef:s}},template:`
    <div class="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      <div v-if="isOpen" class="bg-[#F5F2EB] rounded-none shadow-2xl shadow-[#2C2A26]/10 w-[90vw] sm:w-[380px] h-[550px] mb-6 flex flex-col overflow-hidden border border-[#D6D1C7] animate-slide-up-fade">
        <div class="bg-[#EBE7DE] p-5 border-b border-[#D6D1C7] flex justify-between items-center">
          <div class="flex items-center gap-3">
            <div class="w-2 h-2 bg-[#2C2A26] rounded-full animate-pulse"></div>
            <span class="font-serif italic text-[#2C2A26] text-lg">AI Advisor</span>
          </div>
          <button @click="isOpen = false" class="text-[#A8A29E] hover:text-[#2C2A26] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div ref="scrollRef" class="flex-1 overflow-y-auto p-6 space-y-8 bg-[#F5F2EB]">
          <div v-for="(message, index) in messages" :key="index" :class="message.role === 'user' ? 'justify-end' : 'justify-start'" class="flex">
            <div :class="message.role === 'user' ? 'bg-[#2C2A26] text-[#F5F2EB]' : 'bg-white border border-[#EBE7DE] text-[#5D5A53] shadow-sm'" class="max-w-[85%] p-5 text-sm leading-relaxed">
              {{ message.text }}
            </div>
          </div>

          <div v-if="isThinking" class="flex justify-start">
            <div class="bg-white border border-[#EBE7DE] p-5 flex gap-1 items-center shadow-sm">
              <div class="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce"></div>
              <div class="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-75"></div>
              <div class="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        </div>

        <div class="p-5 bg-[#F5F2EB] border-t border-[#D6D1C7]">
          <div class="flex gap-2 relative">
            <input
              v-model="inputValue"
              type="text"
              placeholder="Ask me anything..."
              class="flex-1 bg-white border border-[#D6D1C7] focus:border-[#2C2A26] px-4 py-3 text-sm outline-none transition-colors placeholder-[#A8A29E] text-[#2C2A26]"
              @keydown="handleKeyPress"
            />
            <button @click="handleSend" :disabled="!inputValue.trim() || isThinking" class="bg-[#2C2A26] text-[#F5F2EB] px-4 hover:bg-[#444] transition-colors disabled:opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button @click="isOpen = !isOpen" class="bg-[#2C2A26] text-[#F5F2EB] w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-105 transition-all duration-500 z-50">
        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        <span v-else class="font-serif italic text-lg">Ai</span>
      </button>
    </div>
  `}),De=m({components:{AboutSection:ce,AccountSettingsView:we,AdminDashboardView:ye,AssistantWidget:ke,BrandStoryView:Ae,CartDrawer:me,CheckoutView:xe,ForgotPasswordView:ve,HeroSection:ie,JournalDetail:he,JournalSection:de,LoginView:ge,Navbar:pe,ProductDetail:fe,ProductGrid:le,RegisterView:be,SiteFooter:ue,SustainabilityView:Ce},setup(){const e=l({type:"home"}),t=l([]),o=l(!1),i=l(null);I(()=>{Y(),i.value=w()});const s=n=>{if(!n){window.scrollTo({top:0,behavior:"smooth"});return}const c=document.getElementById(n);if(c){const E=c.getBoundingClientRect().top+window.scrollY-85;window.scrollTo({top:E,behavior:"smooth"});try{window.history.pushState(null,"",`#${n}`)}catch{}}};return{addToCart:n=>{const c=w();if(i.value=c,!c){window.alert("Please log in before adding items to the cart!"),e.value={type:"login"};return}t.value=[...t.value,n],o.value=!0},cartItems:t,currentUser:i,handleNavigate:n=>{window.scrollTo({top:0,behavior:"smooth"}),e.value=n,i.value=w()},handleScrollNavigation:async n=>{e.value.type!=="home"&&(e.value={type:"home"},await V()),s(n)},isCartOpen:o,removeFromCart:n=>{const c=[...t.value];c.splice(n,1),t.value=c},syncCurrentUser:n=>{i.value=n??w()},view:e}},template:`
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
        <template v-if="view.type === 'home'">
          <HeroSection @scroll-to="handleScrollNavigation" />
          <ProductGrid @select="handleNavigate({ type: 'product', product: $event })" />
          <AboutSection />
          <JournalSection @select="handleNavigate({ type: 'journal', article: $event })" />
        </template>

        <ProductDetail
          v-else-if="view.type === 'product'"
          :product="view.product"
          @add-to-cart="addToCart"
          @back="handleNavigate({ type: 'home' }); setTimeout(() => handleScrollNavigation('products'), 50)"
        />

        <JournalDetail
          v-else-if="view.type === 'journal'"
          :article="view.article"
          @back="handleNavigate({ type: 'home' })"
        />

        <CheckoutView
          v-else-if="view.type === 'checkout'"
          :current-user="currentUser"
          :items="cartItems"
          @back="handleNavigate({ type: 'home' })"
          @clear-cart="cartItems = []"
        />

        <LoginView v-else-if="view.type === 'login'" @navigate="handleNavigate" @user-changed="syncCurrentUser" />
        <RegisterView v-else-if="view.type === 'register'" @navigate="handleNavigate" @user-changed="syncCurrentUser" />
        <ForgotPasswordView v-else-if="view.type === 'forgot-password'" @navigate="handleNavigate" />
        <AccountSettingsView v-else-if="view.type === 'account-security'" :current-user="currentUser" @navigate="handleNavigate" @user-changed="syncCurrentUser" />
        <AdminDashboardView v-else-if="view.type === 'admin-dashboard'" :current-user="currentUser" @navigate="handleNavigate" />
        <BrandStoryView v-else-if="view.type === 'brand-story'" @navigate="handleNavigate" />
        <SustainabilityView v-else-if="view.type === 'sustainability'" @navigate="handleNavigate" />
      </main>

      <SiteFooter
        v-if="view.type !== 'checkout'"
        @navigate="handleNavigate"
        @scroll-to="handleScrollNavigation"
      />

      <AssistantWidget />

      <CartDrawer
        :is-open="isCartOpen"
        :items="cartItems"
        @checkout="isCartOpen = false; handleNavigate({ type: 'checkout' })"
        @close="isCartOpen = false"
        @remove-item="removeFromCart"
      />
    </div>
  `});function Ee(){return ae(De)}Ee().mount("#app");
