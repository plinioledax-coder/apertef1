<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phone = '5571993290895' // Seu número atualizado
const message = encodeURIComponent('Olá! Vim pelo site da Aperte F1 e preciso de suporte.')
const link = `https://wa.me/${phone}?text=${message}`

const visible = ref(false)
const isDarkSection = ref(true) // Padrão: O site é Dark, então o botão começa "Aceso"

// CONFIGURAÇÃO DE CONTRASTE
// Como seu site atual é todo Dark Mode, este array pode ficar vazio por enquanto.
// Mas se você criar uma seção branca no futuro, adicione o ID dela aqui.
const lightSections = ['alguma-secao-branca-futura'] 

const handleScroll = () => {
  const scrollY = window.scrollY
  
  // 1. Visibilidade (aparece depois de 100px)
  visible.value = scrollY > 100

  // 2. Lógica de Cor Dinâmica
  const sections = document.querySelectorAll('section, header, footer')
  
  // Ponto de gatilho (onde o botão está na tela)
  const buttonPosition = window.innerHeight - 80

  sections.forEach(section => {
    const rect = section.getBoundingClientRect()
    
    // Verifica se a seção está atrás do botão
    if (rect.top <= buttonPosition && rect.bottom >= buttonPosition) {
      const sectionId = section.id
      
      // Se a seção for clara (lightSections), o botão fica ESCURO.
      // Se não, o botão fica DOURADO (Aceso).
      if (lightSections.includes(sectionId)) {
        isDarkSection.value = false 
      } else {
        isDarkSection.value = true
      }
    }
  })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <transition name="tech-pop">
    <a
      v-if="visible"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Iniciar Protocolo via WhatsApp"
      class="
        group
        fixed
        bottom-6
        right-6
        sm:bottom-8
        sm:right-8
        z-50
        w-14
        h-14
        rounded
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-1
        border
      "
      :class="isDarkSection ? 'variant-gold' : 'variant-stealth'"
    >
      
      <span
        class="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition duration-500 animate-ping"
        :class="isDarkSection ? 'bg-brand-gold/30' : 'bg-slate-900/30'"
      />

      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        class="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110"
      >
        <path d="M16 3C9.4 3 4 8 4 14.5c0 2.7 1 5.2 2.7 7.2L6 29l7.6-2.5c.7.2 1.6.3 2.4.3 6.6 0 12-5 12-11.5S22.6 3 16 3z" fill-opacity="0.1" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.7 10.7c-.3-.7-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .4-.4.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.5 4 6.2 5.4 3 1.2 3.6 1 4.3.9.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.5l-2.1-1c-.3-.1-.6-.2-.8.2-.2.4-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.1-1.5-.6-2.8-1.8-1-1-1.7-2.3-1.9-2.6-.2-.3 0-.5.1-.6.2-.2.3-.4.5-.6.2-.2.3-.4.4-.6.1-.2 0-.4 0-.6l-.9-2.2z" />
      </svg>

      <span
        class="
          absolute
          right-16
          whitespace-nowrap
          text-[10px]
          font-mono
          uppercase
          tracking-widest
          px-3
          py-1.5
          rounded-sm
          opacity-0
          translate-x-4
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-300
          font-bold
          border
        "
        :class="isDarkSection 
          ? 'bg-brand-gold text-slate-950 border-brand-gold shadow-[0_0_15px_rgba(197,160,89,0.4)]' 
          : 'bg-slate-950 text-white border-slate-800'"
      >
        Start_Chat
      </span>
    </a>
  </transition>
</template>

<style scoped>
/* VARIANTE 1: GOLD (Para usar em fundo ESCURO) */
/* Botão Dourado Brilhante, Texto Escuro */
.variant-gold {
  @apply bg-brand-gold text-slate-950 border-brand-gold shadow-[0_0_20px_rgba(197,160,89,0.3)];
}
.variant-gold:hover {
  @apply bg-white border-white shadow-[0_0_30px_rgba(255,255,255,0.5)];
}

/* VARIANTE 2: STEALTH (Para usar em fundo CLARO) */
/* Botão Preto Tech, Texto Branco/Dourado */
.variant-stealth {
  @apply bg-slate-950 text-brand-gold border-slate-800 shadow-xl;
}
.variant-stealth:hover {
  @apply border-brand-gold text-white;
}

/* ANIMAÇÃO "TECH POP" (Mais rápida e elástica) */
.tech-pop-enter-active,
.tech-pop-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.tech-pop-enter-from,
.tech-pop-leave-to {
  opacity: 0;
  transform: scale(0) rotate(-45deg);
}
</style>