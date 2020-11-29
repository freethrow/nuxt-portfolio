<template>
    <div class="bg-white my-3 p-3 rounded-lg shadow">
        <img class="mt-5 w-full object-cover object-center max-h-80 lg:h-48 lg:max-w-md focus:outline-none" 
    :src=url alt="">
    <h4 class="my-2 text-center">{{ title }}</h4>
    <p class="font-thin text-center">{{ dimensions }}</p>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        dimensions: String,
        url: String
    }
}
</script>

<style lang="css" scoped>

    ul li{
        color:red;
    }
</style>