<template>
  <div
    class="bg-[linear-gradient(to_bottom_right,_#ffffff,_#BCEDFF,_#D9E0FE,_#ffffff)] min-h-screen"
  >
    <Navbar />
    <div class="container">
      <div class="flex gap-[8px] pt-[70px]">
        <nuxt-link to="/">
          <img
            class="w-[16px] h-auto"
            src="/public/payment/home.svg"
            alt="image"
          />
        </nuxt-link>
        <span class="text-[12px]">></span>
        <h1 class="text-[12px] mb-2">Payment</h1>
      </div>
      <div class="mb-[16px] mt-[32px]">
        <h1 class="text-[14px] font-bold">Plan Yang Dipilih</h1>
      </div>
      <div class="bg-white p-3 shadow-md rounded-lg flex gap-[16px] mb-[8px]">
        <div>
          <img
            class="w-[100px] h-auto"
            src="/payment/payment-image.webp"
            alt="image"
          />
        </div>
        <div>
          <h4 class="text-[14px] text-[#3A519D]">
            {{ name }} {{ mount }} Bulan
          </h4>
          <p class="text-[14px] font-semibold">Rp{{ price }}</p>
          <button class="text-[12px] mt-[16px] text-[#00B2DA]">
            Change plan
          </button>
        </div>
      </div>
      <div
        class="bg-white p-3 shadow-md flex-col rounded-lg flex gap-[8px] mb-[8px]"
      >
        <div class="flex justify-between w-full">
          <button @click="isOpen = !isOpen" class="text-[14px] font-medium">
            Benefit
          </button>
          <div>
            <button
              @click="isOpen = !isOpen"
              class="pl-1 transform transition-transform duration-300"
              :class="isOpen ? 'rotate-0' : 'rotate-180'"
            >
              <img src="/payment/chevron-up.svg" alt="vector" />
            </button>
          </div>
        </div>
        <div class="mb-1" v-if="isOpen">
          <div v-for="item in benefit" :key="item" class="flex text-[14px]">
            <img class="w-[16px] mr-2" src="/payment/vector.svg" alt="" />
            <h1>{{ item }}</h1>
          </div>
        </div>
      </div>
      <div
        class="bg-white p-3 shadow-md flex-col rounded-lg flex gap-[8px] mb-[8px]"
      >
        <h1 class="mb-[8px] font-semibold text-[14px]">Payment Details</h1>
        <div class="mb-[24px]">
          <h1 class="text-[12px] flex justify-between mb-[8px]">
            Harga <span class="">Rp{{ price }}</span>
          </h1>
          <h1 class="text-[12px] flex justify-between">
            Total transfer<span class="font-semibold">Rp{{ price }}</span>
          </h1>
        </div>
        <div class="">
          <h1 class="mb-[8px] font-semibold text-[14px]">Data Pengguna</h1>
          <div>
            <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border">
              <input
                class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                v-model="formData.name"
                type="text"
                placeholder="Nama Lengkap"
              />
            </div>
            <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border">
              <input
                class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                v-model="formData.email"
                type="email"
                placeholder="email"
              />
            </div>
            <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border">
              <input
                class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                v-model="formData.phone"
                type="text"
                placeholder="No Whatsapp"
              />
            </div>
            <div class="rounded-lg border p-2">
              <div class="flex mb-[12px]">
                <img src="/payment/promo.svg" alt="" />
                <h1 class="text-[#00B2DA]">Kode Promo (Opsional)</h1>
              </div>
              <div class="flex">

                  <div class="flex mb-[8px] xl:mb-[16px] pl-2 rounded-lg border">
                      <input
                      class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                  v-model="formData.codePromo"
                  type="text"
                  placeholder="Masukkan kode promo"
                />
            </div>
            <button class="w-full">
                Apply
            </button>
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
      name: "",
      mount: "",
      price: "",
      benefit: [],
      formData: {
        name: "",
        email: "",
        phone: "",
        codePromo: "",
      },
    };
  },
  methods: {},
  mounted() {
    const { name, mount, price, benefit } = this.$route.query;
    this.name = name;
    this.mount = mount;
    this.price = price;
    this.benefit = benefit;
    console.log("Parsed benefit:", this.benefit);
  },
};
</script>

<style></style>
