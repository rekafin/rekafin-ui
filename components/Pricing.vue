<template>
  <div class="container">
    <div class="pt-[60px]">
      <h1 class="text-[18px] md:text-[20px] lg:text-[22px] text-center font-semibold">Pricing</h1>
      <p class="text-center">
        Berikut ini daftar paket berlangganan Rekafin yang bisa kamu pilih
        sesuai kebutuhan.
      </p>
    </div>
    <div class="flex justify-center">
      <div
        class="flex justify-between gap-3 p-1.5 my-8 border-2 rounded-lg w-[286px] sm:w-[290px] md:w-[300px] lg:w-[320px]"
      >
        <div class="">
          <button
            @click="isOpenBusiness = true"
            :class="isOpenBusiness ? 'bg-[#3A519D] text-white' : ''"
            class="  rounded-lg px-10  w-full py-3 text-[14px] sm:text-[16px] font-semibold text-center"
          >
            Personal
          </button>
        </div>
        <div class="">
          <button
            @click="isOpenBusiness = false"
            :class="!isOpenBusiness ? 'bg-[#3A519D] text-white' : ''"
            class="hover:bg-[#3A519D] hover:text-white px-10 md:px-12 rounded-lg w-full py-3 text-[14px] sm:text-[16px] font-semibold text-center"
          >
            Bisnis
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="isOpenBusiness"
      class="lg:mb-16 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
    >
      <CardPersonal
        v-for="(card, index) in cardsPersonal"
        :key="index"
        :dataCard="card"
      />
    </div>
    <div v-else>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
        <CardBusiness
          v-for="(card, index) in cardsBusiness"
          :key="index"
          :dataCard="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardPersonal from "./CardPersonal.vue";
import CardBusiness from "./CardBusiness.vue";
export default {
  data() {
    return {
      isOpenBusiness: true,
      cardsPersonal: [
        {
          mount: 1,
          price: "xxxx",
          benefit: [
            "Catat dari 1 nomor whatsapp",
            "Pencatatan menggunakan AI",
            "Input pencatatan berupa teks atau gambar",
            "Pencatatan realtime",
            "Fitur analisa keuangan",
            "Rekapan dalam bentuk dashboard dan spreadsheet",
            "Tersedia 1 dashboard dan 1 spreadsheet",
          ],
        },
        {
          mount: 6,
          price: "xxxx",
          benefit: [
            "Catat dari 1 nomor whatsapp",
            "Pencatatan menggunakan AI",
            "Input pencatatan berupa teks atau gambar",
            "Pencatatan realtime",
            "Fitur analisa keuangan",
            "Rekapan dalam bentuk dashboard dan spreadsheet",
            "Tersedia 1 dashboard dan 1 spreadsheet",
          ],
        },
        {
          mount: 12,
          price: "xxxx",
          benefit: [
            "Catat dari 1 nomor whatsapp",
            "Pencatatan menggunakan AI",
            "Input pencatatan berupa teks atau gambar",
            "Pencatatan realtime",
            "Fitur analisa keuangan",
            "Rekapan dalam bentuk dashboard dan spreadsheet",
            "Tersedia 1 dashboard dan 1 spreadsheet",
          ],
        },
      ],
      cardsBusiness: [
        {
          mount: 1,
          price: "xxxx",
          benefit: [
            "Catat dari 1 nomor whatsapp",
            "Pencatatan menggunakan AI",
            "Input pencatatan berupa teks atau gambar",
            "Pencatatan realtime",
            "Fitur analisa keuangan",
            "Rekapan dalam bentuk dashboard dan spreadsheet",
            "Tersedia 1 dashboard dan 1 spreadsheet",
          ],
        },
        {
          mount: 6,
          price: "xxxx",
          benefit: [
            "Catat dari 1 nomor whatsapp",
            "Pencatatan menggunakan AI",
            "Input pencatatan berupa teks atau gambar",
            "Pencatatan realtime",
            "Fitur analisa keuangan",
            "Rekapan dalam bentuk dashboard dan spreadsheet",
            "Tersedia 1 dashboard dan 1 spreadsheet",
          ],
        },
        {
          mount: 12,
          price: "xxxx",
          benefit: [
            "Catat dari 1 nomor whatsapp",
            "Pencatatan menggunakan AI",
            "Input pencatatan berupa teks atau gambar",
            "Pencatatan realtime",
            "Fitur analisa keuangan",
            "Rekapan dalam bentuk dashboard dan spreadsheet",
            "Tersedia 1 dashboard dan 1 spreadsheet",
          ],
        },
      ],
    };
  },
  components: {
    CardPersonal,
    CardBusiness,
  },
};
</script>

<style></style>
