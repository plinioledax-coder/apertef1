<script setup>
import { ArrowUp, Instagram, Mail, MapPin, MessageCircle } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <footer class="bg-slate-950 border-t border-white/5 text-slate-400 relative overflow-hidden">

        <div
            class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent">
        </div>

        <div class="container mx-auto px-6 py-16">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12">

                <div class="md:col-span-2 space-y-6">

                    <a href="#" @click.prevent="scrollToTop" class="inline-block group">
                        <span class="font-display font-bold text-3xl leading-none tracking-wide">
                            <span
                                class="text-white group-hover:text-brand-gold transition-colors duration-300">APERTE</span>
                            <span class="mx-1"></span>
                            <span
                                class="text-brand-gold group-hover:text-white transition-colors duration-300">F1</span>
                        </span>
                    </a>

                    <p class="font-sans text-sm font-light leading-relaxed max-w-sm text-slate-500">
                        O seu Hub de Tecnologia Descomplicada.
                        Do suporte técnico ao desenvolvimento de software,
                        entregamos soluções precisas para problemas complexos.
                    </p>

                    <div class="flex items-center gap-4 pt-2">
                        <a href="https://www.instagram.com/aperte.f1/" target="_blank"
                            class="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-slate-950 transition-all duration-300">
                            <Instagram class="w-5 h-5" />
                        </a>
                        <a href="https://wa.me/5571993290895?text=Ol%C3%A1!%20Encontrei%20voc%C3%AAs%20pelo%20site."
                            target="_blank"
                            class="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-slate-950 transition-all duration-300">
                            <MessageCircle class="w-5 h-5" />
                        </a>
                    </div>

                </div>

                <div class="space-y-6">
                    <h3 class="font-mono text-xs uppercase tracking-widest text-white font-bold">Navegação</h3>
                    <ul class="space-y-4 font-mono text-sm">
                        <li><a href="#servicos"
                                class="hover:text-brand-gold transition-colors block w-fit">Services_Hub</a></li>
                        <li><a href="#dev" class="hover:text-brand-gold transition-colors block w-fit">Dev_SaaS</a></li>
                        <li><a href="#iphone"
                                class="hover:text-brand-gold transition-colors block w-fit">Apple_Repair</a></li>
                        <li><a href="#depoimentos"
                                class="hover:text-brand-gold transition-colors block w-fit">Feedbacks</a></li>
                        <li><a href="#contato" class="hover:text-brand-gold transition-colors block w-fit">Contato</a>
                        </li>
                    </ul>
                </div>

                <div class="space-y-6">
                    <h3 class="font-mono text-xs uppercase tracking-widest text-white font-bold">Status / Local</h3>
                    <ul class="space-y-4 text-sm font-sans font-light">
                        <li class="flex items-start gap-3">
                            <MapPin class="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                            <span>Salvador - Bahia<br><span class="text-xs text-slate-600">Atendimento Remoto &
                                    Presencial</span></span>
                        </li>
                        <li class="flex items-center gap-3">
                            <Mail class="w-4 h-4 text-brand-gold shrink-0" />
                            <a href="mailto:contato@apertef1.com.br"
                                class="hover:text-white transition-colors">apertef1agora@gmail.com</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="border-t border-white/5 bg-[#01030d]">
            <div class="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                <div class="font-mono text-[10px] text-slate-600 uppercase tracking-wider">
                    © {{ currentYear }} Aperte F1. All Systems Operational.
                </div>

                <div class="flex items-center gap-6">
                    <button @click="scrollToTop"
                        class="group flex items-center gap-2 font-mono text-[10px] uppercase text-slate-500 hover:text-brand-gold transition-colors">
                        Back to Top
                        <ArrowUp class="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    </footer>
</template>