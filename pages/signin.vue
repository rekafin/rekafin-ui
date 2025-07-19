<template>
  <div class=" flex flex-col md:flex-row justify-evenly">
    <!-- section 1 -->
    <section class=" w-full md:w-1/2 min-h-screen p-5 flex items-center justify-center ">
      <div class="flex flex-col gap-5 w-3/4">
        <div>
          <h1 class=" font-bold text-2xl">Login</h1>
          <h2 class=" font-normal text-sm">Silahkan login ke akun kamu untuk melanjutkan</h2>
        </div>

        <form @submit.prevent="submitForm" class=" flex gap-4 flex-col">
          <InputForm v-model="formData.email" icon-src="/icons/email.svg" type="text" placeholder="Email" />
          <InputForm v-model="formData.password" icon-src="/icons/lock.svg" type="password" placeholder="Password" />
        </form>

        <button @click="submitForm" class=" p-2 rounded-md font-bold bg-btn-primary text-white">Login</button>
        <p class=" text-sm text-center">Belum punya akun? <NuxtLink to="/signup"
            class=" underline text-underline-color font-medium">Register</NuxtLink>
        </p>
      </div>
    </section>
    <section class=" w-full md:w-1/2 bg-gradient-primary md:min-h-screen p-8 pr-0">
      <NuxtImg class=" w-36" src="/logo.svg" />
      <div class=" h-full flex items-center justify-end">
        <NuxtImg src="/graphics/graphic-login.png" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: "default"
})

const formData = reactive({
  email: "",
  password: "",
})

const submitForm = () => {
  console.log("Submitting:", formData)
}

</script>

<style></style>