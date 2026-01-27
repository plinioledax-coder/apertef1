<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { ArrowRight, Code2 } from 'lucide-vue-next'

const projects = ref([
    {
        id: 1,
        category: 'SaaS / Portal do Cliente',
        title: 'Portal Magna Studio',
        // Descrição baseada na sua imagem: Feed, Financeiro, Cronograma
        desc: 'Plataforma exclusiva para gestão de obras de arquitetura. O cliente acompanha o cronograma, aprova orçamentos, visualiza o feed de obra e acessa documentos financeiros em tempo real.',
        techs: ['Vue.js', 'Node.js', 'AWS'],
        // Tente usar o print real que você mandou, fica show:
        image: './images/portal-magna.png',
        // Se não tiver salvo ainda, use este placeholder temporário:
        // image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop',
        video: '/videos/dashboard.mp4'
    },
    {
        id: 2,
        category: 'Landing Page Jurídica',
        title: 'Advocacia Especializada',
        desc: 'Site institucional de alta conversão focado na captação de clientes qualificados. Estrutura de autoridade, carregamento instantâneo e integração direta com CRM e WhatsApp.',
        techs: ['Nuxt', 'Tailwind', 'SEO'],
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop',
        video: '/videos/site.mp4'
    },
    {
        id: 3,
        category: 'App Web / Agendamento',
        title: 'Salão Modesto',
        // Dedução das funcionalidades essenciais de salão
        desc: 'Sistema completo de gestão para salões de beleza. Agenda multi-profissional, lembretes automáticos via WhatsApp para reduzir faltas e controle de comissões.',
        techs: ['Vue 3', 'PWA', 'Firebase'],
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop',
        video: '/videos/app.mp4'
    }
])

const activeProject = ref(0)
const videoRef = ref(null)
const autoPlayTimer = ref(null)

// --- ROTAÇÃO AUTOMÁTICA (CARROSSEL) ---
const startAutoRotation = () => {
    stopAutoRotation()
    autoPlayTimer.value = setInterval(() => {
        nextProject()
    }, 5000) // Troca a cada 5 segundos
}

const stopAutoRotation = () => {
    if (autoPlayTimer.value) clearInterval(autoPlayTimer.value)
}

const nextProject = () => {
    activeProject.value = (activeProject.value + 1) % projects.value.length
}

const selectProject = (index) => {
    activeProject.value = index
    stopAutoRotation()
    startAutoRotation()
}

// --- CONTROLE DE VÍDEO NO MOUSE ---
const handleMouseEnter = async () => {
    stopAutoRotation() // Para de trocar os projetos para o usuário assistir
    if (videoRef.value) {
        try {
            await nextTick()
            videoRef.value.play() // Dá play no vídeo
        } catch (e) {
            console.warn("Erro ao reproduzir vídeo (verifique o caminho do arquivo):", e)
        }
    }
}

const handleMouseLeave = () => {
    startAutoRotation() // Volta a rodar o carrossel
    if (videoRef.value) {
        videoRef.value.pause() // Pausa o vídeo
        videoRef.value.currentTime = 0 // (Opcional) Reseta o vídeo para o início
    }
}

// Lifecycle
onMounted(() => {
    startAutoRotation()
})

onUnmounted(() => {
    stopAutoRotation()
})
</script>

<template>
    <section id="dev" class="py-24 bg-[#020617] relative overflow-hidden border-t border-white/5">

        <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
            <div class="font-mono text-xs text-brand-gold p-10 leading-loose">
                &lt;template&gt;<br>
                &nbsp;&nbsp;&lt;System_Core :status="active" /&gt;<br>
                &nbsp;&nbsp;&lt;Security_Layer level="high" /&gt;<br>
                &lt;/template&gt;<br><br>
                const deploy = async () => {<br>
                &nbsp;&nbsp;await build_infrastructure();<br>
                &nbsp;&nbsp;return "Success";<br>
                }
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">

            <div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                <div class="space-y-4 text-center md:text-left w-full md:w-auto">
                    <div class="flex items-center gap-2 justify-center md:justify-start">
                        <Code2 class="w-5 h-5 text-brand-gold" />
                        <span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">Software
                            House</span>
                    </div>
                    <h2 class="font-display text-4xl md:text-5xl font-bold text-white">
                        Desenvolvimento <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-100">Sob
                            Medida</span>
                    </h2>
                </div>

                <p class="font-sans text-slate-400 max-w-md text-sm leading-relaxed text-center md:text-right">
                    Do site institucional ao SaaS que você precisa. Criamos ferramentas digitais que automatizam
                    processos e geram receita para o seu negócio.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div class="lg:col-span-4 space-y-4">
                    <div v-for="(project, index) in projects" :key="project.id" @click="selectProject(index)"
                        class="group cursor-pointer p-6 rounded border transition-all duration-500 relative overflow-hidden"
                        :class="activeProject === index
                            ? 'bg-brand-primary/20 border-brand-gold/50'
                            : 'bg-slate-900/50 border-white/5 hover:border-white/20'">

                        <div v-if="activeProject === index" class="absolute left-0 top-0 bottom-0 w-1 bg-slate-800">
                            <div class="w-full h-full bg-brand-gold animate-progress origin-top"></div>
                        </div>

                        <div class="flex justify-between items-start mb-2 pl-2">
                            <span
                                class="font-mono text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-brand-gold transition-colors">
                                {{ project.category }}
                            </span>
                            <ArrowRight v-if="activeProject === index" class="w-4 h-4 text-brand-gold animate-pulse" />
                        </div>

                        <h3
                            class="font-display text-xl font-bold text-white mb-2 pl-2 group-hover:text-brand-gold transition-colors">
                            {{ project.title }}
                        </h3>

                        <div class="transition-all duration-500 ease-in-out pl-2 overflow-hidden" :class="{
                            'max-h-40 opacity-100 mt-2': activeProject === index,
                            'max-h-0 opacity-0': activeProject !== index
                        }">
                            <p class="font-sans text-xs text-slate-400 leading-relaxed">
                                {{ project.desc }}
                            </p>
                        </div>

                    </div>
                </div>

                <div class="lg:col-span-8 relative h-[300px] md:h-[500px] flex items-center justify-center">

                    <div class="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full opacity-50"></div>

                    <Transition name="fade" mode="out-in">
                        <div :key="activeProject"
                            class="relative w-full max-w-3xl transform transition-all duration-500">

                            <div
                                class="bg-[#0f172a] rounded-t-lg border border-white/10 p-3 flex items-center gap-2 relative z-20">
                                <div class="flex gap-2">
                                    <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div class="flex-1 bg-black/20 rounded h-6 mx-4 flex items-center px-3 overflow-hidden">
                                    <span class="font-mono text-[10px] text-slate-600 truncate">
                                        https://{{ projects[activeProject].title.toLowerCase().replace(/\s/g, '')
                                        }}.com.br
                                    </span>
                                </div>
                            </div>

                            <div class="aspect-video bg-slate-900 border-x border-b border-white/10 rounded-b-lg overflow-hidden relative group cursor-none"
                                @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                                <video ref="videoRef" :src="projects[activeProject].video"
                                    :poster="projects[activeProject].image"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    muted loop playsinline></video>

                                <div
                                    class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#020617] to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none z-10">
                                    <div class="flex gap-3">
                                        <span v-for="tech in projects[activeProject].techs" :key="tech"
                                            class="px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-mono font-bold uppercase backdrop-blur-md">
                                            {{ tech }}
                                        </span>
                                    </div>
                                </div>

                                <div
                                    class="absolute top-4 right-4 bg-red-500/80 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 pointer-events-none z-20">
                                    <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                    <span
                                        class="font-mono text-[9px] text-white uppercase tracking-widest font-bold">Live
                                        Preview</span>
                                </div>

                                <div
                                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 mix-blend-difference">
                                    <div
                                        class="w-16 h-16 rounded-full border border-white flex items-center justify-center">
                                        <span
                                            class="font-mono text-[10px] text-white uppercase tracking-widest">View</span>
                                    </div>
                                </div>
                            </div>

                            <a href="#contato"
                                class="absolute -bottom-6 -right-6 px-6 py-4 md:px-8 bg-brand-gold text-slate-950 font-bold font-mono uppercase tracking-widest rounded shadow-lg hover:scale-105 transition-transform flex items-center gap-2 z-40 text-xs md:text-sm">
                                Quero um igual
                                <ArrowRight class="w-4 h-4" />
                            </a>

                        </div>
                    </Transition>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(20px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

@keyframes progress {
    from {
        transform: scaleY(0);
    }

    to {
        transform: scaleY(1);
    }
}

.animate-progress {
    animation: progress 5s linear infinite;
}
</style>