<script setup>
import { ref, onMounted } from 'vue'
import { ShieldCheck, X } from 'lucide-vue-next'

const isVisible = ref(false)

onMounted(() => {
    // Verifica se já existe o consentimento salvo no navegador
    const consent = localStorage.getItem('apertef1_cookie_consent')

    // Se não tiver (é a primeira visita), mostra o banner após 2 segundos
    if (!consent) {
        setTimeout(() => {
            isVisible.value = true
        }, 2000)
    }
})

const acceptCookies = () => {
    // Salva a decisão e esconde o banner
    localStorage.setItem('apertef1_cookie_consent', 'true')
    isVisible.value = false
}

const emit = defineEmits(['openPolicy'])


</script>

<template>
    <Transition name="slide-up">
        <div v-if="isVisible" class="fixed bottom-4 left-4 right-4 md:right-auto md:w-[400px] z-[9999]">
            <div
                class="bg-[#020617]/90 backdrop-blur-md border border-brand-gold/20 rounded-lg p-6 shadow-2xl shadow-black/50 relative overflow-hidden group">

                <div
                    class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-50">
                </div>

                <div class="flex items-start gap-4">

                    <div
                        class="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
                        <ShieldCheck class="w-5 h-5 text-brand-gold" />
                    </div>

                    <div class="space-y-3">
                        <div>
                            <h4 class="font-mono text-xs font-bold text-brand-gold uppercase tracking-widest mb-1">
                                Privacy_Protocol_Init
                            </h4>
                            <p class="font-sans text-xs text-slate-300 leading-relaxed font-light">
                                Utilizamos cookies para processar dados de navegação e otimizar a performance do
                                sistema. Ao continuar, você autoriza esse processamento.
                            </p>
                        </div>

                        <div class="flex items-center gap-3 pt-1">
                            <button @click="acceptCookies"
                                class="bg-brand-gold hover:bg-white text-slate-950 px-4 py-2 rounded text-xs font-bold font-mono uppercase tracking-wider transition-colors">
                                Confirmar
                            </button>
                            <a href="#" @click.prevent="$emit('openPolicy')"
                                class="text-[10px] text-slate-500 hover:text-white underline decoration-slate-700 font-mono uppercase">
                                Ler Policy.txt
                            </a>
                        </div>
                    </div>

                    <button @click="isVisible = false"
                        class="absolute top-4 right-4 text-slate-600 hover:text-white transition-colors">
                        <X class="w-4 h-4" />
                    </button>

                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}
</style>