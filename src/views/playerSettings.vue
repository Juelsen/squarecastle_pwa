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
                    <a id="startGame" class="start-btn" href="/game"></a>
                    <a class="home-btn" href="/"></a>
                </div>
            </v-flex>
            <v-flex xs2></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import $ from "jquery";
    import * as playerJS from '../js/playerSettings.js'
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


$(document).ready(function () {
    $('#btnP1').click(function() {
        playerJS.btnpressed[0] = !playerJS.btnpressed[0];
        playerJS.selectPlayer(0);
    });
    $('#btnP2').click(function() {
        playerJS.btnpressed[1] = !playerJS.btnpressed[1];
        playerJS.selectPlayer(1);
    });
    $('#btnP3').click(function() {
        playerJS.btnpressed[2] = !playerJS.btnpressed[2];
        playerJS.selectPlayer(2);
    });
    $('#btnP4').click(function() {
        playerJS.btnpressed[3] = !playerJS.btnpressed[3];
        playerJS.selectPlayer(3);
    });
    $('#startGame').click(function() {
        if(playerJS.btnpressed.filter(Boolean).length === 2){
            var temp = 0;
            var indices = [];
            for(var i = 0; i < playerJS.btnpressed.length; i++){
                if(playerJS.btnpressed[i]){
                    indices[temp] = i;
                    temp++;
                }
            }
            console.log("indices: "+indices);
            // var payload = {
            //     "instruction": "setPlayers",
            //     "x": indices[0],
            //     "y": indices[1]
            // };
            // sendRequest("POST","/squarecastle/api/command", payload)
            document.body.style.cursor="progress";
            setTimeout(function () {
                location = "/squarecastle";

            },1000);
        } else if(playerJS.btnpressed.filter(Boolean).length === 1){
            alert("Du hast nur einen Spieler ausgewählt!");
        } else {
            alert("Du hast noch keinen Spieler ausgewählt!");
        }
    });
    //($('#selectedPlayer1').removeAllClasses("");
    //$('#selectedPlayer2').removeAllClasses("");
});

</script>

<style lang="less" scoped>

@import "~@/less/prototypes.less";
@import "~@/less/game.less";
@import "~@/less/playerSettings.less";
@import "~@/less/rules.less";
@import "~@/less/startScreen.less";

</style>