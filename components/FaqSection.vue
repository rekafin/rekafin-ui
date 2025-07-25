<template>
  <div class="lg:bg-[linear-gradient(to_bottom_right,_#ffffff,_#ffffff,_#ffffff,_#c0eafa)] max-lg:bg-[linear-gradient(to_top_right,_#ffffff,_#ffffff,_#c0eafa,_#c0eafa)]">
    <div 
    class="container pt-[100px] lg:mt-[80px] pb-20 scroll-mt-[100px]" id="faq"
    >
      <div class="text-center">
        <h1 class="text-[20px] font-bold">Frequently Asked Question</h1>
        <p class="text-[12px] md:text-[14px] lg:text-[16px] mt-2">
          Berikut ini beberapa pertanyaan yang sering ditanyakan.
        </p>
      </div>
      <div class="my-5 lg:mx-[200px]">
        <div 
          v-for="(item, index) in faqs"
          :key="index"
          class="bg-white rounded-lg shadow-lg px-4 py-3 my-5"
        >
          <button
            class="w-full text-left flex justify-between items-center font-semibold text-gray-800"
            @click="toggle(index)"
          >
            <span class="pr-5">{{ item.question }}</span>
            <span class="text-[14px] md:text-[16px] lg:text-[20px]">{{ isOpen === index ? "−" : "+" }}</span>
          </button>
          <div
            v-show="isOpen === index"
            class="mt-2 pr-5 text-[12px] md:text-[14px]"
          >
            {{ item.answer }}
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
      isOpen: null,
      faqs: [
        {
          question: "Apa itu Rekafin?",
          answer:
            "Rekafin adalah sebuah tool pencatatan keuangan berbasis AI yang memanfaatkan aplikasi Whatsapp sebagai wadah input pencatatannya.",
        },
        {
          question:
            "Bagaimana mencatat keuangan saya dengan menggunakan Rekafin?",
          answer:
            "Kamu dapat mencatat dengan mengetik transaksi keuanganmu di WhatsApp, lalu sistem kami akan otomatis menyimpannya.",
        },
        {
          question:
            "Apakah ada format baku yang harus saya input agar proses pencatatan berjalan baik tanpa error?",
          answer:
            "Kamu dapat mencatat dengan mengetik transaksi keuanganmu di WhatsApp, lalu sistem kami akan otomatis menyimpannya.",
        },
        {
          question:
            "Apakah bisa menginput pencatatan dari banyak nomor Whatsapp?",
          answer:
            "Kamu dapat mencatat dengan mengetik transaksi keuanganmu di WhatsApp, lalu sistem kami akan otomatis menyimpannya.",
        },
        {
          question:
            "Apakah saya bisa mengubah data di spreadsheet?",
          answer:
            "Kamu dapat mencatat dengan mengetik transaksi keuanganmu di WhatsApp, lalu sistem kami akan otomatis menyimpannya.",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.isOpen = this.isOpen === index ? null : index;
    },
  },
};
</script>

<style></style>
