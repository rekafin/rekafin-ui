<template>
    <div class="container scroll-mt-[80px] my-[48px] lg:my-[80px]" id="benefit">
  <div class="flex flex-col justify-center text-center md:mt-10">
      <h1 class="font-semibold text-[20px] md:text-[22px] lg:text-[24px]">
            Kenapa harus Rekafin?
        </h1>
        <p class="text-[12px] md:text-[14px] xl:text-[16px] mt-2">Cukup kirim pesan pemasukan/pengeluaran lewat WhatsApp, Rekafin otomatis catat keuanganmu di spreadsheet.</p>
    </div>
    <div class="lg:flex lg:mt-10 xl:mt-16 xl:gap-10">
        <div class="my-[30px] lg:my-0">
            <img class="w-full lg:w-[650px] xl:w-[750px] h-auto" src="/portofolio/background-mobile.webp" alt="bg">
        </div>
        <div class=" lg:flex lg:flex-col">
            <div class="relative" v-for="item,index in data" :key="index">
                <img class="absolute w-[30px] md:w-[40px] -top-2 left-0" :class="item.title === 'Input via Chat Whatsapp' ? 'lg:left-6' : ''  || item.title === 'Update Realtime' ? 'lg:left-6' : ''" src="/portofolio/card-icon.webp" alt="icon">
                <div class="bg-[#D0D8F8] border rounded-lg ml-2 p-5 mb-5" :class="item.title === 'Input via Chat Whatsapp' ? 'lg:ml-10' : ''  || item.title === 'Update Realtime' ? 'lg:ml-10' : '' || item.title === 'Berbasis AI' ? 'lg:mr-10' : ''  || item.title === 'Fitur Analisa Lengkap' ? 'lg:mr-10' : ''">
                    <h1 class="text-[14px] md:text-[16px] font-semibold">{{ item.title }}</h1>
                    <p class="text-[12px] md:text-[14px]">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
    <div>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
        data : [
            {
            title: "Input via Chat Whatsapp",
            description:"Catat pengeluaran & pemasukan langsung dari chat. Gak perlu buka aplikasi.",
        },
            {
            title: "Berbasis AI",
            description:"Proses pencatatan keuangan lebih mudah tanpa perintah baku karena berbasis AI",
        },
            {
            title: "Update Realtime",
            description:"Pencatatan keuangan terekap secara realtime",
        },
            {
            title: "Fitur Analisa Lengkap",
            description:"Dilengkapi dengan dashboard dan spreadsheet dengan banyak fitur untuk analisa",
        },
    ]
    }
},
}
</script>

<style>

</style>a