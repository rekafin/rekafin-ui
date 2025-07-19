<template>
  <div class=" flex flex-row justify-evenly">
    <section class=" w-1/2 p-5 flex items-center justify-center ">
      <div class="flex flex-col gap-5 w-3/4">
        <div>
          <h1 class=" font-bold text-2xl">Register</h1>
          <h2 class=" font-normal text-sm">Silakan buat akun untuk menikmati fitur-fiturnya.</h2>
        </div>

        <!-- form section -->
        <div class=" flex gap-4 flex-col">
          <div class=" flex items-center px-4 justify-start border-border-color min-w-96 min-h-12 rounded-lg border-2">
            <img class=" " src="../assets/images/icons/person.svg" />
            <input class=" text-sm w-full outline-none  py-2 px-4 text-form-text" placeholder="Nama Lengkap" type="text"
              value="" />
          </div>
          <div class=" flex items-center px-4 justify-start border-border-color min-w-96 min-h-12 rounded-lg border-2">
            <img class=" " src="../assets/images/icons/person.svg" />
            <input class=" text-sm w-full outline-none  py-2 px-4 text-form-text" placeholder="Nama Lengkap" type="text"
              value="" />
          </div>
          <div class=" flex items-center px-4 justify-start border-border-color min-w-96 min-h-12 rounded-lg border-2">
            <img class=" " src="../assets/images/icons/person.svg" />
            <input class=" text-sm w-full outline-none  py-2 px-4 text-form-text" placeholder="Nama Lengkap" type="text"
              value="" />
          </div>
          <div class=" flex items-center px-4 justify-start border-border-color min-w-96 min-h-12 rounded-lg border-2">
            <img class=" " src="../assets/images/icons/person.svg" />
            <input class=" text-sm w-full outline-none  py-2 px-4 text-form-text" placeholder="Nama Lengkap" type="text"
              value="" />
          </div>
        </div>

        <button class=" p-2 rounded-md font-bold bg-btn-primary text-white">Register</button>
        <p class=" text-sm text-center">Belum punya akun? <NuxtLink to="/signin" class=" underline text-underline-color font-medium">Login</NuxtLink>
        </p>
      </div>
    </section>
    <section class=" bg-gradient-primary min-h-screen w-1/2 p-8">
      <img src="../assets/images/logo.svg" />
      <div class=" h-full flex items-center"> <!-- align with this image -->
        <img class=" scale-90 " src="../assets/images/graphics/graphic-register.png" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>