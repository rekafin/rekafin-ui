<template>
  <div
    class="flex flex-col lg:grid lg:grid-cols-2 bg-[linear-gradient(to_bottom_right,_#ffffff,_#BCEDFF,_#D9E0FE,_#ffffff)] h-full"
  >
    <div class="container my-[40px]">
      <div class="flex lg:mt-[160px] flex-col gap-5 ml-[50px] mr-[20px] xl:mr-0 xl:ml-0">
        <div>
          <h1 class="font-bold text-2xl">Register</h1>
          <h2 class="font-normal text-sm">
            Silahkan buat akun untuk menikmati fitur-fiturnya.
          </h2>
        </div>

        <div>
          <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border bg-white">
            <img src="/graphics/profile.svg" alt="" />
            <input
              class="w-full py-2 pl-2 rounded-lg"
              v-model="formData.name"
              type="text"
              placeholder="Nama Lengkap"
            /></div>
          <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border bg-white">
            <img src="/graphics/phone.svg" alt="" />
            <input
              class="w-full py-2 pl-2 rounded-lg"
              v-model="formData.phone"
              type="number"
              placeholder="Nomor HP"
            /></div>
          <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border bg-white">
            <img src="/graphics/email.svg" alt="" />
            <input
              class="w-full py-2 pl-2 rounded-lg"
              v-model="formData.email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg bg-white">
            <img class="" src="/graphics/password.svg" alt="password" />
            <input
              class="w-full py-2 pl-2 rounded-lg"
              v-model="formData.password"
              type="password"
              placeholder="Password"
            />
            <img class="pr-2" src="/public/graphics/iconoir-eye.svg" alt="">
          </div>
          <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg bg-white">
            <img class="" src="/graphics/password.svg" alt="password" />
            <input
              class="w-full py-2 pl-2 rounded-lg"
              v-model="formData.passwordConfirm"
              type="password"
              placeholder="Konfirmasi Password"
            />
            <img class="pr-2" src="/public/graphics/hidden-eye.svg" alt="">
          </div>
        </div>

        <button
          @click="submitForm"
          class="py-2.5 rounded-md font-bold bg-btn-primary text-white"
        >
          Register</button>

          <NuxtLink
            to="/signin"
            class="">
          <p class="text-sm text-center">
            Sudah punya akun?
              <span class="underline text-underline-color font-medium">
                Login
              </span>
            </p>
          </NuxtLink>
        
      </div>
    </div>

    <div>
      <div class="hidden lg:block mt-[46px]">
        <nuxt-link to="/">
          <img class="w-[100px]" src="/public/graphics/navbar.webp" alt="">
        </nuxt-link>
      </div>
      <div class="flex justify-end">
        <img class="w-[500px] md:hidden" src="/graphics/background-mobile-signin.webp" alt="" />
        <img class="w-[666px] lg:mt-[50px] xl:mt-[60px] hidden md:block" src="/graphics/background-desktop-signin.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Submitting:", this.formData);
    },
  },
};
</script>

<style>
</style>
