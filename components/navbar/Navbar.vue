<template>
    <nav class="w-full h-navbar bg-background/70 backdrop-blur flex justify-center items-center relative z-10">
        <div class="w-full max-w-screen-lg flex justify-between items-center ml-4 md:ml-0">
            <h1 class="text-2xl font-bold">{{ $t('title_short') }}</h1>
            <div class="flex justify-between items-center">
                <NavbarSetting />
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>