<template>
  <div class=" flex items-center flex-col justify-center w-full px-5 py-10">
    <footer class=" flex flex-col md:flex-row justify-between gap-6 border-form-border py-8 border-y-2 md:w-3/4">

      <div class=" flex flex-col gap-2">
        <NuxtImg class=" w-36" src="/logo.svg" />
        <p class=" text-left text-sm w-64">Rekafin adalah sebuah tool pencatatan keuangan berbasis AI yang memanfaatkan
          aplikasi Whatsapp sebagai wadah input pencatatannya.</p>
      </div>
      <div class=" flex flex-col gap-2">
        <p class=" font-bold text-base">Rekafin</p>
        <p class=" text-sm">Benefit</p>
        <p class=" text-sm">How to use</p>
      </div>
      <div class=" flex flex-col gap-2">
        <p class=" font-bold text-base">Pricing</p>
        <p class=" text-sm">Personal Plan</p>
        <p class=" text-sm">Business Plan</p>
      </div>
      <div class=" flex flex-col gap-2">
        <p class=" font-bold text-base">Kontak</p>
        <div class=" flex gap-2">
          <NuxtImg class=" w-4" src="/icons/wa.svg" />
          <p class=" text-sm">Personal Plan</p>
        </div>

        <div class=" flex gap-2">
          <NuxtImg class=" w-4" src="/icons/phone.svg" />
          <p class=" text-sm">cs@rekafin.com</p>
        </div>

        <div class=" flex items-start gap-2">
          <NuxtImg class=" w-4" src="/icons/clock.svg" />
          <div class=" flex flex-col gap-2 p-0">
            <p class=" text-sm">Jam Operasional</p>
            <p class=" text-sm font-semibold">Setiap Hari</p>
            <p class=" text-sm">09:00 - 21:00 WIB</p>
          </div>
        </div>

      </div>


    </footer>

    <div class=" w-3/4 mt-8 gap-6 flex flex-col md:flex-row items-center justify-between">
      <p class=" text-neutral text-center text-sm">Copyright © 2023 Rekafin. All rights reserved.</p>

      <div class=" flex gap-4">
        <button class="border-form-border border-2 p-3 rounded-full">
          <NuxtImg class=" w-6 " src="/icons/facebook.svg" />
        </button>
        <button class="border-form-border border-2 p-3 rounded-full">
          <NuxtImg class=" w-6 " src="/icons/linkedin.svg" />
        </button>
        <button class="border-form-border border-2 p-3 rounded-full">
          <NuxtImg class=" w-6 " src="/icons/twitter.svg" />
        </button>
        <button class="border-form-border border-2 p-3 rounded-full">
          <NuxtImg class=" w-6 " src="/icons/instagram.svg" />
        </button>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>