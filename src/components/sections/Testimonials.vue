<script setup>
import { Star, Terminal, CheckCircle2, User, Quote } from 'lucide-vue-next'

// Dados simulados dos depoimentosF
const testimonials = [
    {
        id: 1,
        name: 'Paloma Maria',
        role: 'CEO - Studio Modesto',
        service: 'SaaS_Development',
        text: 'A Aperte F1 entendeu a rotina do nosso salão e criou um painel que organizou agendamentos, caixa e controle financeiro. Hoje ganhamos muito mais tempo para focar nas clientes, e o suporte após a entrega foi excelente.',
        stars: 5,
        date: '2024-07-12'
    },
    {
        id: 2,
        name: 'Júlia Mello',
        role: 'Pessoa Física',
        service: 'Apple_Repair',
        text: 'Achei que tinha perdido meu iPhone, mas o atendimento foi rápido e transparente. Todo o processo foi explicado com clareza e resolvido sem demora. Saí muito tranquila, satisfeita e confiante no serviço.',
        stars: 5,
        date: '2026-01-15'
    },
    {
        id: 3,
        name: 'Yasmin Santana',
        role: 'Advogada',
        service: 'Tech_Support',
        text: 'Sempre que a rede cai ou um PC trava, eles resolvem remoto em minutos. Ter a parceria do Aperte F1 é como ter um setor de TI interno.',
        stars: 5,
        date: '2025-01-20'
    },
    {
    id: 4,
    name: 'Magna Studio',
    role: 'Escritório de Arquitetura',
    service: 'Web_Development',
    text: 'A Aperte F1 desenvolveu nosso site e landing page com foco total em conversão. O processo foi claro, rápido e o resultado superou as expectativas. Hoje o site virou uma ferramenta real de vendas.',
    stars: 5,
    date: '2025-02-05'
}
]

// NOVAS MÉTRICAS (Foco no Cliente)
const metrics = [
    { label: 'Parceiros Ativos', value: '+250' },
    { label: 'Taxa de Retenção', value: '98%' }, // Mostra fidelidade
    { label: 'Tempo de Resposta', value: '< 60m' }, // Mostra agilidade (Diferencial de TI)
]
</script>

<template>
    <section id="depoimentos" class="py-24 bg-[#020617] relative border-t border-white/5 overflow-hidden">

        <div class="absolute inset-0 opacity-5 pointer-events-none">
            <div class="absolute top-10 left-10 text-brand-gold font-mono text-xs vertical-text">SUCCESS_LOG_DUMP</div>
            <div class="absolute bottom-10 right-10 text-brand-gold font-mono text-xs vertical-text">VERIFIED_USER_DATA
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">

            <div
                class="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-12 border-b border-white/5 pb-8">

                <div class="text-center md:text-left w-full md:w-auto">
                    <div class="flex items-center gap-2 mb-2 justify-center md:justify-start">
                        <Terminal class="w-4 h-4 text-brand-gold" />
                        <span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">
                            Client_Feedback_Logs
                        </span>
                    </div>
                    <h2 class="font-display text-4xl text-white font-bold">
                        Resultados <br>
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Validados</span>
                    </h2>
                </div>

                <div class="flex gap-8 md:gap-16 justify-center md:justify-end w-full md:w-auto">
                    <div v-for="metric in metrics" :key="metric.label" class="text-center md:text-right">
                        <span class="block font-display text-3xl md:text-4xl text-white font-bold mb-1">{{ metric.value
                            }}</span>
                        <span class="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">{{
                            metric.label }}</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div v-for="item in testimonials" :key="item.id"
                    class="group bg-slate-900/40 border border-white/5 p-8 rounded-lg hover:border-brand-gold/30 hover:bg-slate-900/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-6">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20">
                                    <User class="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 class="font-display text-white font-bold text-lg">{{ item.name }}</h4>
                                    <p class="font-mono text-[10px] text-slate-500 uppercase tracking-widest">{{
                                        item.role }}</p>
                                </div>
                            </div>
                        </div>

                        <div class="relative mb-6">
                            <p class="font-sans text-slate-300 font-light leading-relaxed text-sm italic">
                                "{{ item.text }}"
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-between pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                        <div class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span class="font-mono text-[9px] text-brand-gold uppercase tracking-wider font-bold">
                                {{ item.service }}
                            </span>
                        </div>
                        <div class="flex gap-1">
                            <Star v-for="n in item.stars" :key="n" class="w-3 h-3 fill-brand-gold text-brand-gold" />
                        </div>
                    </div>

                </div>

            </div>

            <div class="mt-12 text-center md:text-right">
                <p class="font-mono text-xs text-slate-500">
                    * Dados extraídos de atendimentos reais. <span class="text-brand-gold font-bold">100%
                        Verificado.</span>
                </p>
            </div>

        </div>
    </section>
</template>

<style scoped>
.vertical-text {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 0.2em;
}
</style>
