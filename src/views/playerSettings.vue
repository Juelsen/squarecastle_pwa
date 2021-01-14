<template>
    <v-container fluid flex class="background-img-playerSettings">
        <v-layout row wrap>
            <v-flex xs12>
                <v-img class="selectPlayers" src="@/assets/images/selectPlayers.png"></v-img>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex lg2></v-flex>
            <player v-bind:playerName="player1" ></player>
            <player v-bind:playerName="player2" ></player>
            <player v-bind:playerName="player3" ></player>
            <player v-bind:playerName="player4" ></player>
            <v-flex lg2></v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs2>
                <div class="chosenPlayers"></div>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs2></v-flex>
            <v-flex xs2>
                <div id="p1Selected" class="noneSelected"></div>
            </v-flex>
            <v-flex xs2>
                <div id="p2Selected" class="noneSelected"></div>
            </v-flex>
            <v-flex xs4>
                <div class="centered-buttons">
                    <a id="startGame" class="start-btn"></a>
                    <a class="home-btn" href="/"></a>
                </div>
            </v-flex>
            <v-flex xs2></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import '../js/playerSettings.js';
    import player from '@/components/playerSettings/player';
    export default {
        component: {
            player
        },
        data() {
            return {
            player1: "player1", player2: "player2", player3: "player3", player4: "player4"
            }
        }
    }
</script>

<style lang="less" scoped>
@import "~@/less/main.less";
</style>