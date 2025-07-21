<template>
    <div class="bg-[#F1F4FF]">
        <div class=" py-[50px] container relative">
          <div class="text-center pb-[30px]">
            <h1 class="text-[20px] font-bold">How to use</h1>
            <p class="text-[12px] md:text-[14px] lg:text-[16px] mt-2">
              Berikut ini cara penggunaan Rekafin dalam pengelolaan keuanganmu.
            </p>
          </div>
          <div >
            <img
              class="absolute w-[5.4px] lg:w-[6.2px] xl:w-[5.9px] md:left-[140px] md:w-[5px] top-[170px] left-[130px] lg:left-[340px] xl:left-[480px] h-auto"
              src="/how-to-use/icon-line.svg"
              alt=""
            />
            <div class="lg:mx-36" v-for="(item, index) in data" :key="index">
              <div
                class="flex mb-16 lg:mb-20 relative"
                :class="
                  item.title === 'Input Lewat Whatsapp'
                    ? 'mb-7 md:mb-14'
                    : '' || item.title === 'Aktivasi Tool Rekafin'
                    ? 'mb-9 md:mb-14'
                    : ''
                "
              >
                <div>
                  <img
                    class="lg:hidden w-[80px] absolute left-0"
                    :src="item.imageMobile"
                    :alt="item.title"
                  />
                  <img
                    class="hidden lg:block lg:w-[120px] xl:w-[140px] absolute left-0"
                    :src="item.imageDesktop"
                    :alt="item.title"
                  />
                </div>
                <div
                  class="flex flex-col px-12 md:px-20 lg:px-16 ml-[50px] md:ml-[16px] lg:ml-[85px] xl:ml-[100px] justify-end"
                  :class="
                    item.title === 'Daftar Rekafin'
                      ? 'pt-2'
                      : '' || item.title === 'Aktivasi Tool Rekafin'
                      ? 'pt-3'
                      : ''
                  "
                >
                  <div class="flex gap-2 md:gap-5 lg:gap-10">
                    <div>
                      <p
                        class="font-semibold bg-[#3A519D] rounded-full mt-3 py-0.5 px-2.5 text-white"
                      >
                        {{ index + 1 }}
                      </p>
                    </div>
                    <div>
                      <h1 class="text-[14px] lg:text-[18px] font-semibold">{{ item.title }}</h1>
                      <p class="text-[12px] lg:text-[14px]">{{ item.description }}</p>
                    </div>
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
      data: [
        {
          imageMobile: "/how-to-use/image-1.webp",
          imageDesktop: "/how-to-use/image-1-desktop.webp",
          title: "Daftar Rekafin",
          description: "Daftar dan lakukan pembayaran",
        },
        {
          imageMobile: "/how-to-use/image-2.webp",
          imageDesktop: "/how-to-use/image-2-desktop.webp",
          title: "Aktivasi Tool Rekafin",
          description:
            "Admin kami akan mengaktifasi tool buat kamu dan detail penggunaan",
        },
        {
          imageMobile: "/how-to-use/image-3.webp",
          imageDesktop: "/how-to-use/image-3-desktop.webp",
          title: "Input Lewat Whatsapp",
          description:
            "Kirim catatan pengeluaran/pemasukan via Whatsapp ke nomor yang ditentukan. Contoh: Makan ayam penyet 20 K.",
        },
        {
          imageMobile: "/how-to-use/image-4.webp",
          imageDesktop: "/how-to-use/image-4-desktop.webp",
          title: "Lihat Rekapan",
          description:
            "Rekapan pencatatan keuangan kamu tersedia di spreadsheet dan dashboard yang kami sediakan",
        },
      ],
    };
  },
};
</script>

<style></style>
