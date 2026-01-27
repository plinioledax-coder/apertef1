<script setup>
import { ArrowRight, Cpu, MousePointer2 } from 'lucide-vue-next'
</script>

<template>
  <header
    class="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark selection:bg-brand-gold selection:text-brand-dark">

    <div class="absolute inset-0 z-0 pointer-events-none">

      <div
        class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20">
      </div>

      <div
        class="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[150px] opacity-30 animate-pulse-slow">
      </div>

    </div>

    <div class="relative z-10 container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center space-y-8">

        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span class="font-mono text-xs text-brand-gold tracking-widest uppercase">
            System Online • v2.0
          </span>
        </div>

        <h1
          class="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight animate-slide-up">
          O Seu Hub de<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#F2C94C] to-amber-200">
            Tecnologia
          </span>
        </h1>

        <p
          class="font-sans text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed animate-slide-up delay-100">
          Mais que assistência, somos engenharia. Do suporte avançado ao desenvolvimento de software SaaS. <strong
            class="text-slate-200">Aperte F1</strong> e resolva.
        </p>

        <div class="flex flex-col md:flex-row gap-4 justify-center items-center pt-4 animate-slide-up delay-200">

          <a href="#servicos"
            class="group relative px-8 py-4 bg-brand-gold text-brand-dark font-bold font-mono text-sm uppercase tracking-wider rounded overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]">
            <span class="relative z-10 flex items-center gap-2">
              Explorar Soluções
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a href="https://wa.me/5571993290895?text=Ol%C3%A1!%20Estou%20na%20home%20do%20site%20e%20gostaria%20de%20falar%20com%20um%20t%C3%A9cnico."
            target="_blank"
            class="px-8 py-4 bg-transparent border border-white/10 text-white font-bold font-mono text-sm uppercase tracking-wider rounded hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-2">
            Falar com Técnico
          </a>

        </div>

      </div>
    </div>

    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
      <span class="font-mono text-[10px] uppercase tracking-widest text-slate-500">Scroll</span>
      <MousePointer2 class="w-5 h-5 text-brand-gold" />
    </div>

  </header>
</template>

<style scoped>
/* Animações CSS simples para performance */
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>