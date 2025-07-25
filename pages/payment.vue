<template>
  <div
    class="bg-[linear-gradient(to_bottom_right,_#ffffff,_#BCEDFF,_#D9E0FE,_#ffffff)] min-h-screen"
  >
    <Navbar />
    <div class="container">
      <div class="flex gap-[8px] pt-[70px]">
        <nuxt-link to="/">
          <img
            class="w-[16px] lg:w-[20px] xl:w-[22px] h-auto"
            src="/public/payment/home.svg"
            alt="image"
          />
        </nuxt-link>
        <span class="text-[12px] lg:text-[14px] xl:text-[16px]">></span>
        <h1 class="text-[12px] lg:text-[14px] xl:text-[16px] mb-2">Payment</h1>
      </div>

      <div class="lg:grid lg:grid-cols-2 lg:gap-[40px] pb-14">
        <div>
          <div class="mb-[16px] mt-[32px]">
            <h1 class="text-[14px] font-bold lg:text-[16px] xl:text-[18px]">
              Plan Yang Dipilih
            </h1>
          </div>
          <div
            class="bg-white p-3 lg:p-4 shadow-md rounded-lg flex gap-[16px] mb-[8px]"
          >
            <div>
              <img
                class="w-[100px] lg:w-[120px] xl:w-[130px] h-auto"
                src="/payment/payment-image.webp"
                alt="image"
              />
            </div>
            <div>
              <h4
                class="text-[14px] lg:text-[16px] xl:text-[18px] text-[#3A519D]"
              >
                {{ name }} {{ mount }} Bulan
              </h4>
              <p
                class="text-[14px] lg:text-[16px] xl:text-[18px] font-semibold"
              >
                Rp{{ price.toFixed(3) }}
              </p>
              <button
                @click="showPlans = !showPlans"
                class="text-[12px] lg:text-[14px] mt-[16px] text-[#00B2DA] hover:text-blue-300"
              >
                Change plan
              </button>
              <div
                v-if="showPlans"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
              >
                <div
                  class="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-5 relative"
                >
                  <button
                    @click="showPlans = false"
                    class="absolute top-3 right-4 text-xl"
                  >
                    &times;
                  </button>

                  <h2 class="text-lg font-semibold mb-4">Pilih Plan</h2>

                  <div
                    v-for="plan in changePlan"
                    :key="plan.mount"
                    class="mb-3"
                  >
                    <div
                      @click="setSelectedPlan(plan)"
                      class="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer transition duration-200"
                      :class="{
                        'border-[#00B2DA] text-[#00B2DA] bg-[#00B2DA0D]':
                          selectedPlan?.mount === plan.mount,

                        'border-[#D9D9D966] text-black bg-[#D9D9D91A]':
                          selectedPlan?.mount !== plan.mount,
                      }"
                    >
                      <div>
                        <div class="text-sm font-medium">
                          {{ name }} {{ plan.mount }} bulan
                        </div>
                        <div class="text-sm text-gray-500">
                          Rp{{ plan.price.toFixed(3) }}
                        </div>
                      </div>
                      <div class="flex gap-4">
                        <img
                          :src="
                            selectedPlan?.mount === plan.mount
                              ? plan.checklist
                              : plan.circle
                          "
                          :alt="`${plan.mount}bulan`"
                          class="w-5 h-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="bg-white p-3 lg:p-4 shadow-md flex-col rounded-lg flex gap-[8px] mb-[8px]"
          >
            <div
              @click="isOpen = !isOpen"
              class="flex justify-between w-full cursor-pointer"
            >
              <button
                class="text-[14px] lg:text-[16px] xl:text-[18px] font-medium"
              >
                Benefit
              </button>
              <div>
                <div
                  class="pl-1 transform transition-transform duration-300"
                  :class="isOpen ? 'rotate-0' : 'rotate-180'"
                >
                  <img src="/payment/chevron-up.svg" alt="vector" />
                </div>
              </div>
            </div>
            <div class="mb-3" v-if="isOpen">
              <div
                v-for="item in benefit"
                :key="item"
                class="flex mb-1 text-[12px] lg:text-[14px] xl:text-[16px]"
              >
                <img class="w-[16px] mr-2" src="/payment/vector.svg" alt="" />
                <h1>{{ item }}</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            v-if="!isOpenChekout"
            class="bg-white p-3 lg:p-4 shadow-md flex-col rounded-lg flex gap-[8px] lg:mt-[70px] xl:mt-[75px] mb-[8px]"
          >
            <h1
              class="mb-[8px] font-semibold text-[14px] lg:text-[16px] xl:text-[18px]"
            >
              Payment Details
            </h1>
            <div class="mb-[24px]">
              <h1
                class="text-[12px] lg:text-[14px] xl:text-[16px] flex justify-between mb-[8px]"
              >
                Harga <span class="">Rp{{ price.toFixed(3) }}</span>
              </h1>
              <h1
                v-if="promoActive"
                class="text-[12px] lg:text-[14px] xl:text-[16px] flex justify-between mb-[8px]"
              >
                {{ promoActive }}
                <span class="text-[#FF6E79]">-Rp{{ discount.toFixed(3) }}</span>
              </h1>
              <h1
                class="text-[12px] lg:text-[14px] xl:text-[16px] flex justify-between"
              >
                Total transfer<span class="font-semibold"
                  >Rp{{ finalPrice.toFixed(3) }}</span
                >
              </h1>
            </div>
            <div class="">
              <h1
                class="mb-[8px] font-semibold text-[14px] lg:text-[16px] xl:text-[18px]"
              >
                Data Pengguna
              </h1>
              <div>
                <div class="flex mb-[10px] xl:mb-[16px] pl-2 rounded-lg border">
                  <input
                    class="outline-none text-[14px] lg:text-[16px] xl:text-[18px] w-full py-2 pl-2 rounded-lg"
                    v-model="formData.name"
                    type="text"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <p
                  v-if="formErrors.name"
                  class="text-[#FF6E79] text-[12px] lg:text-[14px] xl:text-[16px] mb-2 pl-2"
                >
                  {{ formErrors.name }}
                </p>
                <div class="flex mb-[10px] xl:mb-[16px] pl-2 rounded-lg border">
                  <input
                    class="outline-none text-[14px] lg:text-[16px] xl:text-[18px] w-full py-2 pl-2 rounded-lg"
                    v-model="formData.email"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <p
                  v-if="formErrors.email"
                  class="text-[#FF6E79] text-[12px] lg:text-[14px] xl:text-[16px] mb-2 pl-2"
                >
                  {{ formErrors.email }}
                </p>
                <div class="flex mb-[10px] xl:mb-[16px] pl-2 rounded-lg border">
                  <input
                    class="outline-none text-[14px] lg:text-[16px] xl:text-[18px] w-full py-2 pl-2 rounded-lg"
                    v-model="formData.phone"
                    type="text"
                    placeholder="No Whatsapp"
                  />
                </div>
                <p
                  v-if="formErrors.phone"
                  class="text-[#FF6E79] text-[12px] lg:text-[14px] xl:text-[16px] mb-2 pl-2"
                >
                  {{ formErrors.phone }}
                </p>
                <div class="rounded-lg border p-2">
                  <div class="flex gap-2 mb-[12px]">
                    <img class="w-[20px]" src="/payment/promo.svg" alt="" />
                    <h1
                      class="text-[#00B2DA] text-[14px] lg:text-[16px] xl:text-[18px]"
                    >
                      Kode Promo (Opsional)
                    </h1>
                  </div>
                  <div class="flex gap-2">
                    <div
                      class="flex mb-[8px] xl:mb-[16px] pl-2 w-full rounded-lg border"
                    >
                      <input
                        class="outline-none text-[14px] lg:text-[16px] xl:text-[18px] w-full py-2 pl-2 rounded-lg"
                        v-model="formData.codePromo"
                        type="text"
                        placeholder="Masukkan kode promo"
                      />
                    </div>
                    <div class="">
                      <button
                        @click="applyPromo"
                        class="bg-gradient-to-br from-[#DCFBFD] to-[#DFFCFE00] hover:opacity-60 px-5 rounded-lg border py-2 text-[14px] lg:text-[16px] xl:text-[18px] text-[#00B2DA] border-[#00B2DA]"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  <p
                    v-if="promoError"
                    class="text-[#FF6E79] text-[12px] lg:text-[14px] xl:text-[16px] pl-2"
                  >
                    {{ promoError }}
                  </p>
                </div>
                <button
                  @click="handleSubmit"
                  class="text-center hover:opacity-60 text-[14px] lg:text-[16px] xl:text-[18px] lg:py-3 rounded-lg w-full py-2 text-white font-medium bg-[#3A519D] mt-[30px]"
                >
                  Bayar Sekarang
                </button>
              </div>
            </div>
          </div>

          <div
            v-if="isOpenChekout"
            class="bg-white p-3 lg:p-4 shadow-md flex-col rounded-lg flex gap-[8px] lg:mt-[70px] xl:mt-[75px] mb-[8px]"
          >
            <div class="mb-[12]">
              <div
                class="bg-[#3A519D1A] mb-[12px] flex flex-col gap-[4px] text-center py-3 rounded-lg"
              >
                <h1 class="text-[12px]">Total transfer</h1>
                <p class="text-[#3A519D] text-[16px] font-bold">
                  Rp{{ finalPrice.toFixed(3) }}
                </p>
              </div>
              <div class="mb-[8px]">
                <h1 class="text-[12px] lg:text-[14px] xl:text-[16px]">
                  Customer details
                </h1>
              </div>
              <div class="mb-[24px]">
                <h1
                  class="flex justify-between text-[12px] lg:text-[14px] xl:text-[16px] font-medium"
                >
                  {{ checkout.name }}
                  <span class="mt-2">+62{{ checkout.phone.slice(1) }}</span>
                </h1>
                <p
                  class="text-[#66738F] text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                  Order ID #12345
                </p>
              </div>
              <div>
                <h1
                  class="flex justify-between text-[12px] lg:text-[14px] xl:text-[16px]"
                >
                  Product detail <span>Rekafin Basic {{ mount }} bulan</span>
                </h1>
              </div>
              <div>
                <h1
                  class="my-[12px] font-medium text-[14px] lg:text-[16px] xl:text-[18px]"
                >
                  Transfer ke
                </h1>
                <div class="grid grid-cols-2 gap-[12px] relative">
                  <div
                    class="border flex flex-col justify-between rounded-lg p-3 shadow-md border-[#ABBED140]"
                    v-for="bank in banks"
                    :key="bank"
                  >
                    <img
                      class="w-[60px] mb-[6px]"
                      :src="bank.image"
                      :alt="bank.name"
                    />
                    <div>
                      <div class="flex gap-2">
                        <h1
                          class="text-[14px] lg:text-[16px] xl:text-[18px] font-medium"
                        >
                          {{ bank.rekening }}
                        </h1>
                        <button @click="isCopy(bank.rekening)">
                          <img src="/payment/copy.svg" alt="" />
                        </button>
                      </div>
                      <p
                        v-if="copySuccess"
                        class="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[#00B2DA] text-white px-4 py-2 rounded-lg text-[12px] lg:text-[14px] shadow-lg transition-opacity duration-300"
                      >
                        {{ copySuccess }}
                      </p>

                      <p class="text-[12px] lg:text-[14px] xl:text-[16px]">
                        {{ bank.name }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-[20px] mb-[28px] flex-col rounded-lg flex gap-[8px]">
              <div
                @click="isOpenHowToPay = !isOpenHowToPay"
                class="flex justify-between w-full cursor-pointer"
              >
                <button
                  class="text-[14px] lg:text-[16px] xl:text-[18px] text-[#00B2DA] font-medium"
                >
                  <span
                    class="rounded-full text-[14px] lg:text-[16px] xl:text-[18px] px-1.5 lg:px-[7px] xl:px-2 bg-[#00B2DA] text-white"
                    >?</span
                  >
                  How to Pay
                </button>
                <div>
                  <div
                    class="pl-1 transform transition-transform duration-300"
                    :class="isOpenHowToPay ? 'rotate-0' : 'rotate-180'"
                  >
                    <img src="/payment/chevron-up.svg" alt="vector" />
                  </div>
                </div>
              </div>
              <div class="mb-3" v-if="isOpenHowToPay">
                <div
                  class="flex mb-1 text-[12px] lg:text-[14px] xl:text-[16px]"
                ></div>
              </div>
            </div>
            <div class="">
              <nuxt-link to="https://wa.me/628581234567" target="_blank">
                <button
                  @click="sendPayment"
                  class="text-center hover:opacity-60 text-[14px] lg:text-[16px] xl:text-[18px] lg:py-3 rounded-lg w-full py-2 text-white font-medium bg-[#3A519D]"
                >
                  Kirim Bukti Pembayaran
                </button>
              </nuxt-link>
            </div>
            <div class="">
              <button
                @click="isOpenChekout = false"
                class="text-center hover:opacity-60 text-[14px] lg:text-[16px] xl:text-[18px] lg:py-3 rounded-lg border-2 border-[#3A519D] w-full py-2 text-[#3A519D] font-medium bg-white mt-[12px]"
              >
                Kembali
              </button>
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
      isOpen: true,
      isOpenHowToPay: false,
      selectedPlan: null,
      showPlans: false,
      showLogin: true,
      isOpenChekout: false,
      copySuccess: "",
      name: "",
      mount: "",
      price: 0,
      change: false,
      checkout: {
        name: "farhan",
        phone: "08228093",
        email: "",
        codePromo: "",
      },
      benefit: [],
      discount: 0,
      promoError: "",
      promoActive: "",
      formErrors: {
        name: "",
        email: "",
        phone: "",
      },
      formData: {
        name: "",
        email: "",
        phone: "",
        codePromo: "",
      },
      changePlan: [
        {
          mount: 1,
          price: 100.0,
          change: false,
          circle: "/payment/circle.svg",
          checklist: "/payment/checklist.svg",
        },
        {
          mount: 6,
          price: 200.0,
          change: false,
          circle: "/payment/circle.svg",
          checklist: "/payment/checklist.svg",
        },
        {
          mount: 12,
          price: 300.0,
          change: false,
          circle: "/payment/circle.svg",
          checklist: "/payment/checklist.svg",
        },
      ],
      banks: [
        {
          name: "BCA - Faishal Arif",
          rekening: 1280427531,
          image: "/payment/bca.webp",
        },
        {
          name: "BNI - Faishal Arif",
          rekening: 1933772673,
          image: "/payment/bni.webp",
        },
      ],
    };
  },
  methods: {
    applyPromo() {
      const promo = this.formData.codePromo.trim().toLocaleUpperCase();

      if (promo === "DISKON") {
        this.discount = 50.0;
        this.promoActive = "Potongan harga";
        this.promoError = "";
      } else {
        this.discount = 0;
        this.promoActive = "";
        this.promoError = "kode promo tidak valid";
      }
    },
    handleSubmit() {
      this.formErrors.name = "";
      this.formErrors.email = "";
      this.formErrors.phone = "";

      let valid = true;

      if (!this.formData.email.trim()) {
        this.formErrors.name = "Nama Lengkap tidak boleh kosong";
        valid = false;
      }
      if (!this.formData.email.trim()) {
        this.formErrors.email = "Email tidak boleh kosong";
        valid = false;
      }

      if (!this.formData.phone.trim()) {
        this.formErrors.phone = "Nomor WhatsApp tidak boleh kosong";
        valid = false;
      }

      if (valid) {
        this.checkout = { ...this.formData };
        this.isOpenChekout = true;
        console.log(this.checkout);
      }
    },
    setSelectedPlan(plan) {
      this.selectedPlan = plan;
      this.change = plan.change;
      this.mount = plan.mount;
      this.price = plan.price;
      this.showPlans = false;
    },
    isCopy(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.copySuccess = "Nomor rekening berhasil disalin!";
          setTimeout(() => {
            this.copySuccess = "";
          }, 3000);
        })
        .catch((err) => {
          console.error("Gagal menyalin teks: ", err);
        });
    },
  },
  mounted() {
    const { name, mount, price, change, benefit } = this.$route.query;
    this.name = name;
    this.mount = mount;
    this.price = Number(price);
    this.change = Boolean(change);
    this.benefit = benefit;
    this.selectedPlan = this.changePlan.find(
      (find) => find.mount == this.mount
    );
  },
  computed: {
    finalPrice() {
      return this.price - this.discount;
    },
  },
};
</script>

<style></style>
