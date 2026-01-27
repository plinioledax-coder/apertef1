<script setup>
import { Battery, Smartphone, Timer, ShieldCheck, CheckCircle2 } from 'lucide-vue-next'

const features = [
    {
        icon: Timer,
        label: 'Serviço Express',
        value: '60-120 min',
        desc: 'Reparos realizados na hora, com agendamento prévio.'
    },
    {
        icon: ShieldCheck,
        label: 'Garantia',
        value: '90 Dias',
        desc: 'Cobertura total sobre a peça e o serviço executado.'
    }
]
</script>

<template>
    <section id="iphone" class="py-24 bg-[#050A14] relative overflow-hidden border-t border-white/5">

        <div
            class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none">
        </div>

        <div class="container mx-auto px-6 relative z-10">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div class="space-y-8">
                    <div
                        class="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-gold/10 border border-brand-gold/20">
                        <span class="relative flex h-2 w-2">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                        </span>
                        <span class="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                            Authorized_Level_Service
                        </span>
                    </div>

                    <h2 class="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                        Seu iPhone, <br>
                        <span class="text-slate-500">Novo de Novo.</span>
                    </h2>

                    <p
                        class="font-sans text-slate-400 text-lg font-light leading-relaxed border-l-2 border-brand-gold/50 pl-6">
                        Especialistas em reviver a performance do seu Apple. Trabalhamos exclusivamente com
                        <strong>Telas</strong> e <strong>Baterias</strong> de qualidade premium, garantindo cores
                        vibrantes e autonomia máxima.
                    </p>

                    <div class="grid grid-cols-2 gap-4 pt-4">
                        <div v-for="(feat, i) in features" :key="i"
                            class="p-6 rounded bg-slate-900/50 border border-white/5 hover:border-brand-gold/30 transition-colors group">
                            <component :is="feat.icon"
                                class="w-6 h-6 text-brand-gold mb-3 group-hover:scale-110 transition-transform" />
                            <h3 class="font-display text-white font-bold mb-1">{{ feat.label }}</h3>
                            <p class="font-mono text-xs text-brand-gold mb-2">{{ feat.value }}</p>
                            <p class="font-sans text-xs text-slate-500 leading-snug">{{ feat.desc }}</p>
                        </div>
                    </div>

                    <div class="pt-6">
                        <a href="https://wa.me/5571993290895?text=Ol%C3%A1!%20Preciso%20de%20manuten%C3%A7%C3%A3o%20no%20meu%20iPhone%20(Tela%20ou%20Bateria)."
                            class="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-white text-slate-950 font-bold font-mono text-sm uppercase tracking-widest rounded shadow-[0_0_20px_rgba(197,160,89,0.2)] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] transition-all duration-300">
                            <Smartphone class="w-4 h-4" />
                            Agendar Reparo
                        </a>
                    </div>
                </div>

                <div class="relative">

                    <div class="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full"></div>

                    <div class="relative space-y-6">

                        <div class="group relative p-1 bg-gradient-to-r from-white/10 to-transparent rounded-xl">
                            <div class="bg-[#020617] p-6 rounded-xl border border-white/10 relative overflow-hidden">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="flex items-center gap-3">
                                        <div class="p-3 rounded bg-green-500/10 text-green-500">
                                            <Battery class="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 class="font-display text-lg text-white font-bold">Power_Module</h3>
                                            <p class="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                                                Substituição de Bateria</p>
                                        </div>
                                    </div>
                                    <div
                                        class="px-2 py-1 rounded bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-mono font-bold animate-pulse">
                                        HEALTH: 100%
                                    </div>
                                </div>
                                <ul class="space-y-2">
                                    <li class="flex items-center gap-2 text-sm text-slate-400 font-light">
                                        <CheckCircle2 class="w-4 h-4 text-brand-gold" /> Ciclos Zerados
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-slate-400 font-light">
                                        <CheckCircle2 class="w-4 h-4 text-brand-gold" /> Autonomia Original
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            class="group relative p-1 bg-gradient-to-r from-brand-gold/20 to-transparent rounded-xl transform md:translate-x-8">
                            <div
                                class="bg-[#020617] p-6 rounded-xl border border-brand-gold/20 relative overflow-hidden">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="flex items-center gap-3">
                                        <div class="p-3 rounded bg-blue-500/10 text-blue-500">
                                            <Smartphone class="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 class="font-display text-lg text-white font-bold">Display_Unit</h3>
                                            <p class="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                                                Troca de Tela / Touch</p>
                                        </div>
                                    </div>
                                    <div
                                        class="px-2 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold">
                                        4K CLARITY
                                    </div>
                                </div>
                                <ul class="space-y-2">
                                    <li class="flex items-center gap-2 text-sm text-slate-400 font-light">
                                        <CheckCircle2 class="w-4 h-4 text-brand-gold" /> True Tone Ativo
                                    </li>
                                    <li class="flex items-center gap-2 text-sm text-slate-400 font-light">
                                        <CheckCircle2 class="w-4 h-4 text-brand-gold" /> Sensibilidade Perfeita
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            class="md:ml-8 mt-4 flex items-start gap-2 text-[10px] text-slate-500 font-mono bg-white/5 p-3 rounded border border-white/5">
                            <span class="text-brand-gold font-bold">NOTE:</span>
                            Não realizamos reparos em placa lógica (microsoldagem). Foco exclusivo em componentes
                            modulares para garantir agilidade.
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>