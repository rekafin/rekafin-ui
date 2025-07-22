<template>
  <div class="shadow-md rounded-lg mt-2 mb-10 sm:mb-5">
    <div class="p-5 rounded-t-lg bg-[linear-gradient(to_bottom_right,_#ffffff,_#BCEDFF,_#D9E0FE,_#ffffff)]">
        <h1 class="py-1.5 text-[18px] font-medium">{{ dataCard.name }} {{ dataCard.mount }} Bulan</h1>
        <h1 class="pb-2 font-medium text-[32px]">Rp{{ dataCard.price }}</h1>
    </div>
    <div class="px-5 py-3 flex flex-col justify-between">
        <div class="" v-for="card in dataCard.benefit" :key="card">
            <div class="flex mb-2">
                <img src="/pricing/vector.svg" alt="">
                <h1 class="text-[14px] px-2 ">{{ card }}</h1>
            </div>
        </div>
        <div class="my-5">
            <button @click="$emit('goToPayment', dataCard)" class="text-center py-2 text-white font-medium rounded-lg bg-[#3A519D] w-full">Mulai Berlangganan</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   props: ['dataCard'],
}
</script>

<style>

</style>