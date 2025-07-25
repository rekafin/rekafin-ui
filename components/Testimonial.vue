<template>
  <div class="max-lg:bg-[linear-gradient(to_bottom,_#ffffff,_#ffffff,_#c0eafa,_#c0eafa)]">
    <div class=" py-[36px] lg:pt-[50px] lg:pb-10 lg:container">
        <div class="text-center mb-[32px] mt-[4px] max-lg:container">
            <h1 class="text-[20px] lg:text-[22px] font-bold">
                Testimonial
            </h1>
            <p class="text-[12px] lg:text-[14px]">Berikut ini kata mereka yang sudah menggunakan Rekafin.</p>
        </div>
      <div class="max-lg:overflow-x-auto lg:flex lg:justify-center">
        <div class="flex lg:grid lg:grid-cols-3 gap-4 w-max px-4 lg:px-0 lg:gap-[40px]">
          <div v-for="phone in 6" :key="phone">
            <img class="w-[180px] lg:hidden" src="/payment/iphone-mobile.webp" alt="Testimonial Phone" />
            <img class="lg:w-[270px] xl:w-[340px] hidden lg:block" src="/payment/iphone-desktop.webp" alt="Testimonial Phone" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
