<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { Menu, X, Terminal } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

// Bloqueia o scroll da página quando o menu mobile está aberto
watch(isMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

// Monitora o scroll para mudar a cor da barra
const checkScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Função para rolar até o topo (Logo)
const scrollToTop = () => {
  isMenuOpen.value = false
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Função de navegação suave para as seções
const scrollTo = async (id) => {
  isMenuOpen.value = false // Fecha o menu primeiro
  await nextTick() // Espera o DOM atualizar
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav
    class="fixed w-full z-50 transition-all duration-300 border-b"
    :class="(isScrolled || isMenuOpen)
      ? 'bg-slate-950 border-white/5 py-4 shadow-lg shadow-black/50'
      : 'bg-transparent border-transparent py-6'"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">

      <a href="#" @click.prevent="scrollToTop" class="group flex flex-col justify-center relative z-50 cursor-pointer">
          <span class="font-display font-bold text-2xl leading-none tracking-wide">
              <span class="text-white group-hover:text-brand-gold transition-colors duration-300">APERTE</span>
              
              <span class="mx-1"></span>
              
              <span class="text-brand-gold group-hover:text-white transition-colors duration-300">F1</span>
          </span>
          <span class="font-mono text-[9px] text-slate-500 uppercase tracking-[0.3em] group-hover:text-slate-300 transition-colors hidden md:block mt-1">
              Tecnologia Descomplicada
          </span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <button @click="scrollTo('servicos')" class="nav-item">O Hub</button>
        <button @click="scrollTo('dev')" class="nav-item">Dev & SaaS</button>
        <button @click="scrollTo('iphone')" class="nav-item">Apple Repair</button>
        <button @click="scrollTo('depoimentos')" class="nav-item">Feedbacks</button>
        
        <a
          href="https://wa.me/5571993290895?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20um%20atendimento%20r%C3%A1pido."
          target="_blank"
          class="relative px-5 py-2 group overflow-hidden rounded bg-transparent border border-brand-gold/50 text-brand-gold font-mono text-xs font-bold uppercase tracking-wider hover:text-slate-950 transition-colors"
        >
          <span class="absolute inset-0 w-full h-full bg-brand-gold/0 group-hover:bg-brand-gold transition-colors duration-300"></span>
          <span class="relative flex items-center gap-2">
            Chamado Rápido
            <Terminal class="w-3 h-3" />
          </span>
        </a>
      </div>

      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden p-2 text-white hover:text-brand-gold transition-colors relative z-50"
      >
        <X v-if="isMenuOpen" class="w-6 h-6" />
        <Menu v-else class="w-6 h-6" />
      </button>

    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
        <div v-if="isMenuOpen" class="fixed inset-0 top-[60px] bg-slate-950 z-40 flex flex-col items-center pt-10 gap-8 md:hidden border-t border-white/10 h-[calc(100vh-60px)] overflow-y-auto">
            
            <button @click="scrollTo('servicos')" class="mobile-link">O Hub</button>
            <button @click="scrollTo('dev')" class="mobile-link">Dev & SaaS</button>
            <button @click="scrollTo('iphone')" class="mobile-link">Apple Repair</button>
            <button @click="scrollTo('depoimentos')" class="mobile-link">Feedbacks</button>
            
            <a href="https://wa.me/5571993290895?text=Ol%C3%A1!%20Vim%20pelo%20menu%20do%20site%20e%20preciso%20de%20ajuda." class="mt-8 px-8 py-4 bg-brand-gold text-slate-950 font-bold font-mono uppercase tracking-widest rounded shadow-[0_0_20px_rgba(197,160,89,0.4)]">
                Iniciar Atendimento
            </a>

        </div>
    </Transition>
  </nav> 
</template>

<style scoped>
/* Estilo dos Links Desktop (Sublinhado Animado) */
.nav-item {
  @apply text-sm font-sans text-slate-400 hover:text-white transition-colors relative py-1 tracking-wide;
}
.nav-item::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300;
}
.nav-item:hover::after {
  @apply w-full;
}

/* Estilo dos Links Mobile (Maiores) */
.mobile-link {
    @apply font-display text-2xl text-white hover:text-brand-gold transition-colors;
}
</style>