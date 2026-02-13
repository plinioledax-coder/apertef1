<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { ArrowRight, Code2, Play } from 'lucide-vue-next'

const projects = ref([
{
        id: 1,
        category: 'Site Institucional + SaaS', 
        title: 'Ecossistema Magna Studio', 
        desc: 'Solução ponta a ponta: Landing Page de alta conversão para captação de leads, integrada a um Portal do Cliente exclusivo. O usuário contrata pelo site e acompanha cronograma, financeiro e diário de obra pela plataforma.',
        techs: ['Vue.js', 'Node.js', 'SEO'], // Adicionei SEO pois tem Landing Page
        image: './images/portal-magna.png', 
        video: './videos/portal-magna.mp4' 
    },
    {
        id: 2,
        category: 'Landing Page / Saúde',
        title: 'Psicologia Clínica',
        desc: 'Site minimalista focado na conversão de pacientes particulares. Integração com Google Agenda, blog para SEO e design acolhedor.',
        techs: ['Nuxt', 'Motion', 'SEO'],
        image: './images/juliapaim.png', 
    },
    {
        id: 3,
        category: 'Web App / Agendamento',
        title: 'Studio Modesto',
        desc: 'Sistema de gestão para salões. Agenda multi-profissional, lembretes automáticos via WhatsApp e controle financeiro de comissões.',
        techs: ['Vue 3', 'PWA', 'Supabase'],
        image: './images/studiomodesto.png',
        video: './videos/studiomodesto.mp4'
    }
])

const activeProject = ref(0)
const videoRef = ref(null)
const autoPlayTimer = ref(null)
const isVideoPlaying = ref(false)

// --- ROTAÇÃO AUTOMÁTICA ---
const startAutoRotation = () => {
    stopAutoRotation()
    autoPlayTimer.value = setInterval(() => {
        nextProject()
    }, 6000)
}

const stopAutoRotation = () => {
    if (autoPlayTimer.value) clearInterval(autoPlayTimer.value)
}

const nextProject = () => {
    activeProject.value = (activeProject.value + 1) % projects.value.length
    isVideoPlaying.value = false // Reseta estado do vídeo ao trocar
}

const selectProject = (index) => {
    activeProject.value = index
    isVideoPlaying.value = false
    stopAutoRotation()
    startAutoRotation()
}

// --- CONTROLE DE VÍDEO INTELIGENTE ---
const handleMouseEnter = async () => {
    stopAutoRotation() // Para o carrossel
    if (videoRef.value) {
        try {
            // O nextTick garante que o DOM atualizou se houver transição
            await nextTick() 
            const playPromise = videoRef.value.play()
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        isVideoPlaying.value = true
                    })
                    .catch((error) => {
                        console.warn("Autoplay bloqueado pelo navegador ou arquivo não encontrado:", error)
                    })
            }
        } catch (e) {
            console.error(e)
        }
    }
}

const handleMouseLeave = () => {
    startAutoRotation() // Retoma o carrossel
    if (videoRef.value) {
        videoRef.value.pause()
        videoRef.value.currentTime = 0 // Volta para o início (opcional, parece mais limpo)
        isVideoPlaying.value = false
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
            <div class="font-mono text-xs text-brand-gold p-10 leading-loose select-none">
                &lt;template&gt;<br>
                &nbsp;&nbsp;&lt;Video_Preview :source="activeSource" /&gt;<br>
                &nbsp;&nbsp;&lt;Interaction_Handler /&gt;<br>
                &lt;/template&gt;
            </div>
        </div>

        <div class="container mx-auto px-6 relative z-10">

            <div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
                <div class="space-y-4 text-center md:text-left w-full md:w-auto">
                    <div class="flex items-center gap-2 justify-center md:justify-start">
                        <Code2 class="w-5 h-5 text-brand-gold" />
                        <span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">
                            Software House
                        </span>
                    </div>
                    <h2 class="font-display text-4xl md:text-5xl font-bold text-white">
                        Projetos <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-100">
                            Realizados
                        </span>
                    </h2>
                </div>
                <p class="font-sans text-slate-400 max-w-md text-sm leading-relaxed text-center md:text-right">
                    Do design à implementação. Veja abaixo demonstrações reais das soluções que desenvolvemos para nossos parceiros.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div class="lg:col-span-4 space-y-4">
                    <div v-for="(project, index) in projects" :key="project.id" @click="selectProject(index)"
                        class="group cursor-pointer p-6 rounded border transition-all duration-500 relative overflow-hidden"
                        :class="activeProject === index
                            ? 'bg-brand-primary/10 border-brand-gold/50 shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)]'
                            : 'bg-slate-900/50 border-white/5 hover:border-white/20'">

                        <div v-if="activeProject === index" class="absolute left-0 top-0 bottom-0 w-1 bg-slate-800">
                            <div class="w-full h-full bg-brand-gold animate-progress origin-top"></div>
                        </div>

                        <div class="flex justify-between items-start mb-2 pl-3">
                            <span class="font-mono text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-brand-gold transition-colors">
                                {{ project.category }}
                            </span>
                        </div>

                        <h3 class="font-display text-xl font-bold text-white mb-2 pl-3 group-hover:text-brand-gold transition-colors">
                            {{ project.title }}
                        </h3>

                        <div class="transition-all duration-500 ease-in-out pl-3 overflow-hidden" :class="{
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

                    <div class="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full opacity-50 transition-opacity duration-1000"></div>

                    <Transition name="fade" mode="out-in">
                        <div :key="activeProject" class="relative w-full max-w-4xl transform transition-all duration-500">

                            <div class="bg-[#0f172a] rounded-t-lg border border-white/10 p-3 flex items-center gap-2 relative z-20 shadow-2xl">
                                <div class="flex gap-2">
                                    <div class="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div class="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <div class="flex-1 bg-black/40 rounded h-6 mx-4 flex items-center px-3 overflow-hidden border border-white/5">
                                    <span class="font-mono text-[10px] text-slate-500 truncate opacity-70">
                                        https://{{ projects[activeProject].title.toLowerCase().replace(/[^a-z0-9]/g, '') }}.app
                                    </span>
                                </div>
                            </div>

                            <div class="aspect-video bg-slate-900 border-x border-b border-white/10 rounded-b-lg overflow-hidden relative group cursor-pointer"
                                 @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                                
                                <video 
                                    ref="videoRef" 
                                    :src="projects[activeProject].video"
                                    :poster="projects[activeProject].image"
                                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    muted 
                                    loop 
                                    playsinline
                                ></video>

                                <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-10"></div>

                                <div class="absolute bottom-6 left-6 flex gap-2 z-20">
                                    <span v-for="tech in projects[activeProject].techs" :key="tech"
                                        class="px-3 py-1.5 rounded bg-slate-950/80 border border-white/10 text-slate-300 text-[10px] font-mono font-bold uppercase backdrop-blur-md shadow-lg">
                                        {{ tech }}
                                    </span>
                                </div>

                                <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 pointer-events-none z-30"
                                     :class="isVideoPlaying ? 'opacity-0 scale-150' : 'opacity-100 scale-100'">
                                    <div class="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-slate-900 group-hover:border-brand-gold transition-colors">
                                        <Play class="w-6 h-6 fill-current" />
                                    </div>
                                </div>
                            </div>

                            <a href="#contato"
                                class="absolute -bottom-5 -right-5 md:-right-8 px-6 py-3 md:px-8 bg-white text-slate-950 font-bold font-mono uppercase tracking-widest rounded shadow-xl hover:scale-105 hover:bg-brand-gold transition-all flex items-center gap-2 z-40 text-xs md:text-sm border-2 border-slate-950">
                                Quero um projeto assim
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
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

@keyframes progress {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
}

.animate-progress {
    animation: progress 6s linear infinite;
}
</style>