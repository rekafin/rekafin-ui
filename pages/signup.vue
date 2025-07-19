<template>
  <div class=" flex flex-col md:flex-row justify-evenly">
    <!-- section 1 -->
    <section class=" w-full md:w-1/2 p-5 flex items-center justify-center ">
      <div class="flex flex-col gap-5 w-3/4">
        <div>
          <h1 class=" font-bold text-2xl">Register</h1>
          <h2 class=" font-normal text-sm">Silakan buat akun untuk menikmati fitur-fiturnya.</h2>
        </div>

        <form @submit.prevent="submitForm" class=" flex gap-4 flex-col">
          <InputForm v-model="formData.fullname" icon-src="/icons/person.svg" type="text" placeholder="Nama Lengkap" />
          <InputForm v-model="formData.nomorHP" icon-src="/icons/phone.svg" type="text" placeholder="Nomor HP" />
          <InputForm v-model="formData.email" icon-src="/icons/email.svg" type="text" placeholder="Email" />
          <InputForm v-model="formData.password" icon-src="/icons/lock.svg" type="password" placeholder="Password" />
          <InputForm v-model="formData.confirmPassword" icon-src="/icons/lock.svg" type="password"
            placeholder="Konfirmasi Password" />
        </form>

        <button @click="submitForm" class=" p-2 rounded-md font-bold bg-btn-primary text-white">Register</button>
        <p class=" text-sm text-center">Belum punya akun? <NuxtLink to="/signin"
            class=" underline text-underline-color font-medium">Login</NuxtLink>
        </p>
      </div>
    </section>
    <section class=" w-full md:w-1/2 bg-gradient-primary md:min-h-screen p-8">
      <img src="/public/logo.svg" />
      <div class=" h-full flex items-center">
        <img class=" scale-90 " src="../assets/images/graphics/graphic-register.png" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const formData = reactive({
  fullname: '',
  nomorHP: '',
  email: "",
  password: "",
  confirmPassword: ""
})

const submitForm = () => {
  console.log("Submitting:", formData)
}

</script>

<style></style>