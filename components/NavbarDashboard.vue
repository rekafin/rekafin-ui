<template>
  <div
    class="sticky top-0 z-20 duration-300"
    :class="[isScrolled ? 'bg-white h-16 shadow-md top-0 ' : ' bg-none']"
  >
    <div class="relative">
      <div class="container">
        <div class="flex justify-between">
          <button
            class="lg:hidden cursor-pointer z-30"
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

          <div class="">
            <nuxt-link to="/"
              ><img
                class="w-[90px] lg:w-[100px] xl:w-[120px] lg:static pb-5 h-auto mt-5 z-30"
                src="/navbar/navbar.webp"
                alt="navbar"
            /></nuxt-link>
          </div>

          <div>
            <button
              @click="toLoginPage"
              class="lg:hidden mt-5"
            >
              <img
                class="w-[30px]"
                src="/dashboard/left.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div class="lg:flex lg:justify-end">
          <div class="lg:absolute">
            <div
              class="pb-10 font-medium max-lg:bg-white w-full duration-700 z-20 transition-all absolute left-0 lg:static lg:flex lg:items-center lg:gap-[42px] xl:gap-[52px] lg:pb-0 lg:px-0 lg:py-[12px] px-5 md:px-8"
              :class="
                isOpen
                  ? 'max-lg:top-[0px] pt-[64px] max-lg:opacity-100'
                  : 'max-lg:top-[-100%] max-lg:opacity-0'
              "
            >
              <div v-for="(item, index) in data" :key="index" class="pb-[16px]">
                <a class="hover:opacity-60" :href="item.link">{{
                  item.name
                }}</a>
              </div>
            </div>
          </div>
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
      isScrolled: false,
      data: [
        { name: "Benefit", link: "#benefit" },
        { name: "How to use", link: "#howtouse" },
        { name: "Pricing", link: "#price" },
        { name: "FAQ", link: "#faq" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toLoginPage() {
      this.$router.push("/signin");
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
};
</script>

<style></style>
