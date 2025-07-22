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
          <h1 v-if="promoActive" class="text-[12px] flex justify-between mb-[8px]">
            {{ promoActive }} <span class="text-[#FF6E79]">-Rp{{ discount }}</span>
          </h1>
          <h1 class="text-[12px] flex justify-between">
            Total transfer<span class="font-semibold">Rp{{ price }}</span>
          </h1>
        </div>
        <div class="">
          <h1 class="mb-[8px] font-semibold text-[14px]">Data Pengguna</h1>
          <div>
            <div class="flex mb-[10px] xl:mb-[16px] pl-2 rounded-lg border">
              <input
                class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                v-model="formData.name"
                type="text"
                placeholder="Nama Lengkap"
              />
            </div>
            <div class="flex mb-[10px] xl:mb-[16px] pl-2 rounded-lg border">
              <input
                class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                v-model="formData.email"
                type="email"
                placeholder="email"
              />
            </div>
            <div class="flex mb-[10px] xl:mb-[16px] pl-2 rounded-lg border">
              <input
                class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                v-model="formData.phone"
                type="text"
                placeholder="No Whatsapp"
              />
            </div>
            <div class="rounded-lg border p-2">
              <div class="flex gap-2 mb-[12px]">
                <img class="w-[20px]" src="/payment/promo.svg" alt="" />
                <h1 class="text-[#00B2DA] text-[14px]">
                  Kode Promo (Opsional)
                </h1>
              </div>
              <div class="flex gap-2">
                <div
                  class="flex mb-[8px] xl:mb-[16px] pl-2 w-full rounded-lg border"
                >
                  <input
                    class="outline-none text-[14px] w-full py-2 pl-2 rounded-lg"
                    v-model="formData.codePromo"
                    type="text"
                    placeholder="Masukkan kode promo"
                  />
                </div>
                <div class="">
                  <button
                    @click="applyPromo"
                    class="px-5 rounded-lg border py-2 text-[14px] text-[#00B2DA] border-[#00B2DA]"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <p v-if="promoError" class="text-[#FF6E79] text-[12px] pl-2">
                {{ promoError }}
              </p>
            </div>
            <button
              class="text-center rounded-lg w-full py-2 text-white font-medium bg-[#3A519D] mt-[30px]"
            >
              Bayar Sekarang
            </button>
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
      discount: 0,
      promoError: "",
      promoActive: "",
      formData: {
        name: "",
        email: "",
        phone: "",
        codePromo: "",
      },
    };
  },
  methods: {
    applyPromo() {
      const promo = this.formData.codePromo.trim().toLocaleUpperCase();

      if (promo === "DISKON") {
        this.discount = 50000;
        this.promoActive = "Potongan harga"
      } else {
        this.discount = 0;
        this.promoError = "kode promo tidak valid";
      }
    },
  },
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
