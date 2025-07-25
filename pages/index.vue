<template>
  <div>
    <Navbar />
    <IntroSection />
    <Portofolio />
    <HowToUse />
    <Pricing />
    <Testimonial/>
    <FaqSection />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import IntroSection from "~/components/IntroSection.vue";
import Portofolio from "~/components/Portofolio.vue";
import HowToUse from "~/components/HowToUse.vue";
import Pricing from "~/components/Pricing.vue";
import Testimonial from "~/components/Testimonial.vue";
import FaqSection from "~/components/FaqSection.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    IntroSection,
    Portofolio,
    HowToUse,
    Pricing,
    Testimonial,
    FaqSection,
    Footer,
  },
};
</script>

<style></style>
