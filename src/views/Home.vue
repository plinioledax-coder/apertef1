<script setup>
// Layout
import { ref } from 'vue'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'

// Seções (Certifique-se que os arquivos estão nesta pasta ou ajuste o caminho)
import Hero from '../components/sections/Hero.vue'
import Services from '../components/sections/Services.vue'
import DevSaas from '../components/sections/DevSaas.vue'      // Novo: Substitui o ProjectsGrid
import AppleRepair from '../components/sections/AppleRepair.vue' // Novo: Seção exclusiva
import Testimonials from '../components/sections/Testimonials.vue'
import Contact from '../components/sections/Contact.vue'
// UI (Se você ainda não tiver esse arquivo, pode comentar por enquanto)
import FloatingWhatsapp from '../components/ui/FloatingWhatsapp.vue'
import CookieBanner from '../components/ui/CookieBanner.vue'
import PrivacyModal from '../components/ui/PrivacyModal.vue'

const showPrivacyPolicy = ref(false)
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-gold selection:text-brand-dark">

    <Navbar />

    <main>
      <Hero />

      <Services />

      <DevSaas />

      <AppleRepair />

      <Testimonials />

      <Contact />
    </main>

    <Footer />

    <FloatingWhatsapp />

    <CookieBanner @openPolicy="showPrivacyPolicy = true" />

    <PrivacyModal :isOpen="showPrivacyPolicy" @close="showPrivacyPolicy = false" />

  </div>
</template>