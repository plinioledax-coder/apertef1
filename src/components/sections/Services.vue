<script setup>
import { Monitor, Database, Smartphone, Code2, Wrench, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-vue-next'

const services = [
    {
        id: 'support',
        icon: Wrench,
        title: 'Suporte Técnico',
        subtitle: 'Maintenance_Module',
        desc: 'O essencial bem feito. Limpeza física, formatação, otimização de sistema e configuração de redes. Mantemos sua máquina rodando lisa.',
        features: ['Limpeza Completa', 'Formatação', 'Redes', 'Upgrade de Hardware']
    },
    {
        id: 'dev',
        icon: Code2,
        title: 'Dev & SaaS',
        subtitle: 'Software_Solutions',
        desc: 'Sites de alto impacto e sistemas web sob medida. Desenvolvemos ferramentas que automatizam seu negócio (MEI e ME) e impressionam clientes.',
        features: ['Landing Pages', 'Sistemas SaaS', 'Automação', 'Dashboards'],
        highlight: true // Destaque visual
    },
    {
        id: 'backup',
        icon: Database,
        title: 'Backup & Restore',
        subtitle: 'Data_Security',
        desc: 'Seus dados são seu maior ativo. Implementamos rotinas de backup automático e recuperação de arquivos perdidos. Segurança inegociável.',
        features: ['Backup Nuvem/Local', 'Recuperação de Dados', 'Criptografia', 'Prevenção']
        // Removi a propriedade iconSecondary que causava o bug visual
    },
    {
        id: 'iphone',
        icon: Smartphone,
        title: 'Apple Repair',
        subtitle: 'Hardware_Fix',
        desc: 'Especialistas em iPhone. Troca de tela e bateria com peças premium e agilidade. Devolvemos a vida ao seu dispositivo Apple.',
        features: ['Troca de Tela', 'Troca de Bateria', 'Limpeza Interna', 'Diagnóstico'],
        highlight: false
    }
]
</script>

<template>
    <section id="servicos" class="py-24 bg-slate-950 relative overflow-hidden">

        <div
            class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-primary/10 to-transparent pointer-events-none">
        </div>
        <div
            class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent">
        </div>

        <div class="container mx-auto px-6 relative z-10">

            <div class="mb-16 md:mb-24">
                <div class="flex items-center gap-2 mb-4">
                    <Cpu class="w-4 h-4 text-brand-gold animate-pulse" />
                    <span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">
                        System_Modules
                    </span>
                </div>
                <h2 class="font-display text-4xl md:text-5xl font-bold text-white mb-6">
                    Ecossistema de <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Soluções
                        Integradas</span>
                </h2>
                <p class="font-sans text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                    Não somos apenas uma assistência técnica. Somos um hub completo para resolver problemas de hardware
                    e escalar seu negócio com software.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div v-for="service in services" :key="service.id"
                    class="group relative p-8 rounded-xl border border-white/5 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900 hover:border-brand-gold/50 overflow-hidden"
                    :class="{ 'ring-1 ring-brand-gold/20 shadow-[0_0_30px_rgba(197,160,89,0.1)]': service.highlight }">

                    <div
                        class="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    </div>

                    <div
                        class="relative w-12 h-12 mb-6 flex items-center justify-center rounded bg-slate-800/50 group-hover:bg-brand-gold group-hover:text-slate-950 transition-all duration-300 text-slate-300">
                        <component :is="service.icon" class="w-6 h-6" />
                    </div>

                    <div class="space-y-4 relative z-10">

                        <div>
                            <span
                                class="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-1 group-hover:text-brand-gold/80 transition-colors">
                                {{ service.subtitle }}
                            </span>
                            <h3
                                class="font-display text-2xl font-bold text-white group-hover:text-brand-gold transition-colors">
                                {{ service.title }}
                            </h3>
                        </div>

                        <p
                            class="font-sans text-sm text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
                            {{ service.desc }}
                        </p>

                        <ul
                            class="space-y-2 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
                            <li v-for="feature in service.features" :key="feature"
                                class="flex items-center gap-2 text-xs font-mono text-slate-500 group-hover:text-brand-gold transition-colors">
                                <span class="w-1 h-1 bg-brand-gold rounded-full"></span>
                                {{ feature }}
                            </li>
                        </ul>

                    </div>

                    <div
                        class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <ArrowUpRight class="w-5 h-5 text-brand-gold" />
                    </div>

                </div>

            </div>

            <div class="mt-16 text-center">
                <a href="https://wa.me/5571993290895?text=Ol%C3%A1!%20Vi%20seus%20servi%C3%A7os%20no%20site%20e%20gostaria%20de%20consultar%20disponibilidade."
                    target="_blank"
                    class="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/10 hover:border-brand-gold text-slate-300 hover:text-white rounded transition-all duration-300 group">
                    <span class="font-mono text-sm uppercase tracking-widest">Consultar Disponibilidade</span>
                    <ArrowUpRight
                        class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
            </div>

        </div>
    </section>
</template>