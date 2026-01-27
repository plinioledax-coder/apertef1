<script setup>
import { X, Shield, FileText } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
  <Transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="$emit('close')"></div>

      <div class="relative w-full max-w-2xl bg-[#0f172a] border border-brand-gold/20 rounded-lg shadow-2xl shadow-brand-gold/10 flex flex-col max-h-[80vh] overflow-hidden animate-scale-in">
        
        <div class="flex items-center justify-between p-4 border-b border-white/5 bg-slate-900/50">
            <div class="flex items-center gap-3">
                <FileText class="w-4 h-4 text-brand-gold" />
                <span class="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest">
                    SYSTEM_PRIVACY_POLICY.md
                </span>
            </div>
            <button @click="$emit('close')" class="text-slate-500 hover:text-white transition-colors">
                <X class="w-5 h-5" />
            </button>
        </div>

        <div class="p-6 overflow-y-auto custom-scrollbar space-y-6 font-sans text-slate-300 text-sm leading-relaxed font-light">
            
            <div class="space-y-2">
                <h3 class="text-white font-bold text-lg">Política de Privacidade e Proteção de Dados</h3>
                <p class="text-xs text-slate-500 font-mono">Última atualização: Janeiro de 2026</p>
            </div>

            <p>
                A <strong>Aperte F1</strong> ("nós", "nosso") leva a sua privacidade a sério. Esta política descreve como coletamos, usamos e protegemos suas informações ao visitar nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>

            <div class="space-y-2">
                <h4 class="text-brand-gold font-bold uppercase text-xs tracking-wider">1. Dados que Coletamos</h4>
                <p>Atualmente, nosso site é majoritariamente informativo. Coletamos apenas:</p>
                <ul class="list-disc pl-5 space-y-1 text-slate-400">
                    <li><strong>Dados de Navegação (Cookies):</strong> Informações técnicas como tipo de navegador e tempo de acesso, para otimização do site.</li>
                    <li><strong>Dados de Contato:</strong> Caso você clique nos botões de WhatsApp ou E-mail, teremos acesso ao seu número/endereço apenas para responder sua solicitação.</li>
                </ul>
            </div>

            <div class="space-y-2">
                <h4 class="text-brand-gold font-bold uppercase text-xs tracking-wider">2. Como Usamos seus Dados</h4>
                <p>Utilizamos as informações estritamente para:</p>
                <ul class="list-disc pl-5 space-y-1 text-slate-400">
                    <li>Responder a pedidos de orçamento ou suporte técnico.</li>
                    <li>Melhorar a performance e segurança do nosso site.</li>
                    <li>Cumprir obrigações legais.</li>
                </ul>
            </div>

            <div class="space-y-2">
                <h4 class="text-brand-gold font-bold uppercase text-xs tracking-wider">3. Cookies e Tecnologias</h4>
                <p>Usamos cookies essenciais para o funcionamento do site. Você pode gerenciar suas preferências de cookies diretamente nas configurações do seu navegador.</p>
            </div>

            <div class="space-y-2">
                <h4 class="text-brand-gold font-bold uppercase text-xs tracking-wider">4. Compartilhamento</h4>
                <p>Não vendemos nem alugamos seus dados. Compartilhamos informações apenas com prestadores de serviço essenciais para nossa operação (ex: hospedagem do site, WhatsApp/Meta), que também estão sujeitos a obrigações de sigilo.</p>
            </div>

            <div class="space-y-2">
                <h4 class="text-brand-gold font-bold uppercase text-xs tracking-wider">5. Seus Direitos (LGPD)</h4>
                <p>Você tem o direito de solicitar: a confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou a eliminação de dados desnecessários.</p>
            </div>

            <div class="border-t border-white/10 pt-4 mt-4">
                <p class="font-mono text-xs text-slate-500">
                    Para exercer seus direitos ou tirar dúvidas, entre em contato:<br>
                    <span class="text-brand-gold">apertef1agora@gmail.com</span>
                </p>
            </div>

        </div>

        <div class="p-4 border-t border-white/5 bg-slate-900/50 flex justify-end">
            <button 
                @click="$emit('close')"
                class="px-6 py-2 bg-brand-gold text-slate-950 font-bold font-mono text-xs uppercase tracking-widest rounded hover:bg-white transition-colors"
            >
                Entendido
            </button>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Animação de Entrada */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.animate-scale-in {
    animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

/* Scrollbar Personalizada */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #0f172a; 
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155; 
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #C5A059; 
}
</style>