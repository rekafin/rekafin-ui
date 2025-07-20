<template>
  <div class="sticky top-0 z-20">
    <div class="relative">
      <div
        class="container lg:absolute md:flex lg:pt-0 justify-between items-center"
      >
        <nuxt-link to="/"
          ><img
            class="w-[90px] lg:w-[100px] xl:w-[120px] absolute lg:static pb-5 h-auto mt-5"
            src="/navbar/navbar.webp"
            alt="navbar"
        /></nuxt-link>

        <button
          class="absolute lg:hidden right-2 sm:right-10 top-2 cursor-pointer"
          @click="isOpen = !isOpen"
        >
          <div
            class="relative flex overflow-hidden items-center justify-center w-[40px] h-[40px] transform hover: duration-300"
          >
            <div
              class="flex flex-col justify-between w-[20px] h-[20px] transform duration-300 overflow-hidden"
            >
              <div
                class="bg-black/50 h-[3px] w-7 transform duration-300"
                :class="[isOpen ? 'translate-x-5' : '']"
              ></div>
              <div
                class="bg-black/50 h-[2px] w-7 rounded transform duration-300 delay-60"
                :class="[isOpen ? 'translate-x-5' : '']"
              ></div>
              <div
                class="bg-black/50 h-[2px] w-7 transform duration-300 delay-150"
                :class="[isOpen ? 'translate-x-5' : '']"
              ></div>
              <div
                class="absolute items-center justify-between transform duration-500 top-2.5 flex w-0"
                :class="[isOpen ? 'translate-x-0' : '-translate-x-10']"
              >
                <div
                  class="absolute bg-black/50 h-[2px] w-5 transform duration-500 delay-300"
                  :class="[isOpen ? 'rotate-45' : 'rotate-0']"
                ></div>
                <div
                  class="absolute bg-black/50 h-[2px] w-5 transform duration-500 delay-300"
                  :class="[isOpen ? '-rotate-45' : '-rotate-0']"
                ></div>
              </div>
            </div>
          </div>
        </button>

        <div
          class=" lg:flex xl:gap-[52px] font-medium lg:items-center lg:px-0 px-5 md:px-8 lg:py-[12px] lg:gap-[42px] lg:pb-0 pb-10 lg:static absolute lg:w-auto w-full top-[70px] duration-700 ease-in z-20"
          :class="[isOpen ? 'right-0' : 'right-[100%]']"
        >
          <div v-for="(item, index) in data" :key="index" class="pb-[16px]">
            <a href="/">{{ item.name }}</a>
          </div>
          <button
            @click="toLoginPage"
            class="text-[14px] border-[#3A519D] border-2 lg:mb-2 text-[#3A519D] w-full py-2.5 lg:py-0 pt-[8px] lg:mt-0 lg:w-[100px] mb-2 xl:mb-3 lg:h-[38px] xl:w-[100px] xl:h-[40px] duration-300 font-semibold rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      data: [
        {
          name: "Benefit",
        },
        {
          name: "How to use",
        },
        {
          name: "Pricing",
        },
        {
          name: "FAQ",
        },
      ],
    };
  },
  methods:{
    toLoginPage(){
        this.$router.push('/signin')
    }
  }
};
</script>

<style></style>
