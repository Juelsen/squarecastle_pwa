<template>
<v-app>
    <div id = "app">
        <transition name="fade">
            <router-view class="v-router"/>
        </transition>
    </div>
</v-app>
</template>

<style lang="less" scoped>
@import "~@/less/main.less";
</style>