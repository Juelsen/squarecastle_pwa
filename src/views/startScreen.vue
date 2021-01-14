<template>
    <v-container fluid class="background-img-startScreen">
        <v-layout row wrap class="topRow">
            <v-flex xs12 class="header">
                <v-img src="@/assets/images/title.png" max-width="1000"></v-img>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="bottomRow">
            <v-flex lg4></v-flex>
            <v-flex xs12 lg5>
                <v-layout row wrap class="bottom">
                    <v-flex lg6 justify-center>
                        <a class="playerSettings-btn" href="/playerSettings"></a>
                    </v-flex>
                    <v-flex lg6 justify-center>
                        <a class="rules-btn" href="/rules"></a>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex lg3></v-flex>
        </v-layout>
    </v-container>
</template>

<style lang="less" scoped>
@import "~@/less/main.less";
</style>