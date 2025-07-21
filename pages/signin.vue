<template>
  <div
    class="flex flex-col lg:grid lg:grid-cols-2 max-lg:bg-[linear-gradient(to_bottom_right,_#ffffff,_#BCEDFF,_#D9E0FE,_#ffffff)] min-h-screen"
  >
    <div class="container my-[40px]">
      <div
        class="flex mt-[160px] flex-col gap-5 ml-[50px] mr-[20px] xl:mr-0 xl:ml-0"
      >
        <div>
          <h1 class="font-bold text-2xl">Login</h1>
          <h2 class="font-normal text-sm">
            Silahkan login ke akun kamu untuk melanjutkan
          </h2>
        </div>

        <div>
          <div
            class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border bg-white"
          >
            <img src="/graphics/email.svg" alt="" />
            <input
              class="outline-none text-[14px] w-full py-2 rounded-lg pl-2"
              v-model="formData.email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div
            class="flex border mb-[8px] xl:mb-[16px] pl-2 rounded-lg bg-white"
          >
            <img class="" src="/graphics/password.svg" alt="password" />
            <input
              class="outline-none text-[14px] w-full py-2 rounded-lg pl-2"
              v-model="formData.password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="flex justify-end mt-[8px]">
            <button class="text-[#00B2DA] text-[14px]">Lupa Password?</button>
          </div>
        </div>

        <button
          @click="submitForm"
          class="py-2.5 rounded-md font-bold bg-btn-primary text-white"
        >
          Login
        </button>
        <NuxtLink to="/signup" class="">
          <p class="text-sm text-center">
            Belum punya akun?
            <span class="underline text-underline-color font-medium">
              Register
            </span>
          </p>
        </NuxtLink>
      </div>
    </div>

    <div
      class="lg:bg-[linear-gradient(to_bottom_right,_#ffffff,_#BCEDFF,_#D9E0FE,_#ffffff)] pl-[40px] xl:pl-[48px]"
    >
      <div class="hidden lg:block mt-[46px]">
        <nuxt-link to="/">
          <img class="w-[100px]" src="/public/graphics/navbar.webp" alt="" />
        </nuxt-link>
      </div>
      <div class="flex justify-end">
        <img
          class="w-[500px] md:hidden"
          src="/graphics/background-mobile-signup.webp"
          alt=""
        />
        <img
          class="w-[666px] lg:mt-[50px] xl:mt-[60px] hidden md:block"
          src="/graphics/background-desktop-signup.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        number: null,
        email: "",
        password: "",
        passwordConfirm: "",
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

<style></style>
