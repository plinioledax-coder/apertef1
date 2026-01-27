<script setup>
import { ref } from 'vue'
import { Send, Instagram, MessageCircle, MapPin, Terminal, CheckCircle2, AlertCircle } from 'lucide-vue-next'

const form = ref({ name: '', phone: '', service: '', message: '' })
const status = ref({ submitting: false, success: false, error: false })

// Dados Reais
const contactInfo = {
    phone: '(71) 99329-0895',
    whatsappLink: 'https://wa.me/5571993290895?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Aperte%20F1%20e%20preciso%20de%20ajuda.',
    instagram: '@aperte.f1',
    instagramLink: 'https://www.instagram.com/aperte.f1/',
    location: 'Salvador - BA'
}

const handleSubmit = async () => {
    status.value.submitting = true
    
    // Simulação de envio (conecte seu Formspree ou Backend aqui)
    setTimeout(() => {
        status.value.submitting = false
        status.value.success = true
        form.value = { name: '', phone: '', service: '', message: '' }
        
        // Reset status após 5s
        setTimeout(() => { status.value.success = false }, 5000)
    }, 2000)
}
</script>

<template>
    <section id="contato" class="py-24 bg-slate-950 relative border-t border-white/5">
        
        <div class="container mx-auto px-6">
            <div class="flex flex-col lg:flex-row gap-16 items-start">
                
                <div class="lg:w-1/3 space-y-8">
                    <div>
                        <div class="flex items-center gap-2 mb-4">
                            <span class="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
                            <span class="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold">
                                System_Status: Online
                            </span>
                        </div>
                        <h2 class="font-display text-4xl text-white font-bold leading-tight">
                            Inicie o <br>
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">Protocolo</span>
                        </h2>
                        <p class="mt-4 text-slate-400 font-sans font-light leading-relaxed">
                            Pronto para resolver? Preencha o terminal ao lado ou acione nosso suporte direto pelos canais prioritários.
                        </p>
                    </div>

                    <div class="space-y-4 pt-4 border-t border-white/5">
                        
                        <a :href="contactInfo.whatsappLink" target="_blank" class="group flex items-center gap-4 p-4 rounded bg-slate-900/50 border border-white/5 hover:border-brand-gold/50 transition-all cursor-pointer">
                            <div class="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950 transition-colors">
                                <MessageCircle class="w-5 h-5" />
                            </div>
                            <div>
                                <span class="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-1">WhatsApp Direct</span>
                                <span class="text-white font-display text-lg">{{ contactInfo.phone }}</span>
                            </div>
                        </a>

                        <a :href="contactInfo.instagramLink" target="_blank" class="group flex items-center gap-4 p-4 rounded bg-slate-900/50 border border-white/5 hover:border-brand-gold/50 transition-all cursor-pointer">
                            <div class="w-10 h-10 rounded bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-slate-950 transition-colors">
                                <Instagram class="w-5 h-5" />
                            </div>
                            <div>
                                <span class="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-1">Portfolio & Daily</span>
                                <span class="text-white font-display text-lg">{{ contactInfo.instagram }}</span>
                            </div>
                        </a>

                        <div class="flex items-center gap-4 p-4 opacity-60">
                            <MapPin class="w-5 h-5 text-slate-500" />
                            <span class="text-slate-400 font-mono text-sm uppercase tracking-wide">{{ contactInfo.location }}</span>
                        </div>

                    </div>
                </div>

                <div class="lg:w-2/3 w-full bg-[#020617] p-8 md:p-12 rounded-xl border border-white/10 relative overflow-hidden">
                    
                    <div class="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                        <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <span class="ml-4 font-mono text-[10px] text-slate-500">root@apertef1:~/contact-form</span>
                    </div>

                    <form @submit.prevent="handleSubmit" class="mt-8 space-y-8 relative z-10">
                        
                        <div v-if="status.success" class="p-4 bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-xs flex items-center gap-3 rounded">
                            <CheckCircle2 class="w-4 h-4" />
                            <span>[SUCCESS]: Message transmitted successfully. Stand by for response.</span>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="group">
                                <label class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                    > Input Name
                                </label>
                                <input v-model="form.name" required type="text" class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans focus:border-brand-gold focus:outline-none transition-colors placeholder-slate-700" placeholder="Seu nome ou empresa">
                            </div>
                            <div class="group">
                                <label class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                    > Input Contact
                                </label>
                                <input v-model="form.phone" required type="tel" class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans focus:border-brand-gold focus:outline-none transition-colors placeholder-slate-700" placeholder="(71) 99999-9999">
                            </div>
                        </div>

                        <div class="group">
                            <label class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                > Select Operation
                            </label>
                            <select v-model="form.service" class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans focus:border-brand-gold focus:outline-none transition-colors appearance-none cursor-pointer">
                                <option value="" class="bg-slate-900 text-slate-500">Selecione o serviço...</option>
                                <option value="suporte" class="bg-slate-900">Suporte Técnico</option>
                                <option value="dev" class="bg-slate-900">Desenvolvimento Web / SaaS</option>
                                <option value="apple" class="bg-slate-900">Apple Repair (Tela/Bateria)</option>
                                <option value="outros" class="bg-slate-900">Outros</option>
                            </select>
                        </div>

                        <div class="group">
                            <label class="block font-mono text-[10px] uppercase tracking-widest text-brand-gold mb-2 group-focus-within:text-white transition-colors">
                                > Input Message Data
                            </label>
                            <textarea v-model="form.message" required rows="3" class="w-full bg-transparent border-b border-white/20 py-3 text-white font-sans focus:border-brand-gold focus:outline-none transition-colors placeholder-slate-700 resize-none" placeholder="Descreva brevemente sua necessidade..."></textarea>
                        </div>

                        <button 
                            type="submit" 
                            :disabled="status.submitting"
                            class="group relative w-full md:w-auto px-8 py-4 bg-brand-gold text-slate-950 font-bold font-mono text-xs uppercase tracking-widest rounded hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden"
                        >
                            <span class="relative z-10 flex items-center gap-2">
                                <span v-if="status.submitting">Processing...</span>
                                <span v-else>Execute Transmission</span>
                                <Terminal v-if="!status.submitting" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            
                            <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 z-0"></div>
                        </button>
                        
                        <p class="text-center md:text-left font-mono text-[10px] text-slate-600">
                            * Response time estimated: &lt; 2 hours during business cycle.
                        </p>

                    </form>
                </div>

            </div>
        </div>
    </section>
</template>