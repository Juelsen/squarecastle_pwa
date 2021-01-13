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
@import "~@/less/prototypes.less";
@import "~@/less/game.less";
@import "~@/less/playerSettings.less";
@import "~@/less/rules.less";
@import "~@/less/startScreen.less";
</style>