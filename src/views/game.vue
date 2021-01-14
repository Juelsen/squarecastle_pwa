<script type="text/javascript" src="../js/playerSettings.js"></script>
<script type="text/javascript" src="../js/square.js"></script>

<template>
  <v-container fluid flex class="background-img-game">
    <v-layout row wrap>
      <v-flex xs2 xl3></v-flex>
      <v-flex xs10 xl9>
        <v-layout row wrap>
          <v-flex xs10 xl8>
            <v-layout row wrap>
              <v-flex xl2></v-flex>
              <v-flex xs12 xl8>
                <div class="title">
                  <v-img
                    src="@/assets/images/gameTitle.png"
                    width="600"
                  ></v-img>
                </div>
              </v-flex>
              <v-flex xl2></v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs2 xl4>
            <a href="/">
              <button class="home-button"></button>
            </a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 xl3>
        <v-layout row wrap>
          <v-flex xs12 md6 xl12>
            <div id="selectedPlayer1" class="@player1color-player">
              <div class="playerName">
                <p>@player1name</p>
              </div>
              <div class="playerPoints">
                <p id="p1Points">0 Pts</p>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 md6 xl12>
            <div id="selectedPlayer2" class="@player2color-player">
              <div class="playerName">
                <p>@player2name</p>
              </div>
              <div class="playerPoints">
                <p id="p2Points">0 Pts</p>
              </div>
            </div>
          </v-flex>
        </v-layout>
        <!-- <p>Its player</p>
                <p class="green-text">@supervisor.playersturn 's</p>
                <p>turn!!</p> -->
      </v-flex>
      <v-flex xs12 xl9>
        <v-layout row wrap>
          <v-flex xs12 xl8>
            <!-- <section class="mapWrapper">
                            @for(y <- 0 until 6) {
                                <div class="row">
                                @for(x <- 0 until 12) {
                                    <div id="@x @y" class="col-1 grid-hover" instruction="0" x="@x" y="@y" onclick="calc(this);">
                                        <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) >
                                    </div>
                                }
                                </div>
                            }
                        </section> -->
          </v-flex>
          <v-flex xs6 xl4>
            <div class="cardPreview-background" id="newcard">
              <!-- <img id="preview" src="@routes.Assets.versioned(s)" class="card-preview"> -->
              <!-- <v-img id="preview" class="card-preview" src="@routes.Assets.versioned(s)"></v-img> -->
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex sm1 md2 lg3 xl4></v-flex>
          <v-flex xs12 sm10 md8 lg6 xl4>
            <section class="centerToolbar">
              <div id="l" class="left-background">
                <button
                  class="toolbar-button"
                  instruction="l"
                  onclick="import * as square from '../js/square.js'
                           square.calc(this);"
                ></button>
              </div>
              <div id="wait" class="pause-background">
                <button
                  class="toolbar-button"
                  instruction="wait"
                  onclick="calc(this);"
                ></button>
              </div>
              <div id="r" class="right-background">
                <button
                  class="toolbar-button"
                  instruction="r"
                  onclick="square.calc(this);"
                ></button>
              </div>
            </section>
          </v-flex>
          <v-flex sm1 md2 lg3 xl4></v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <div id="animateImg" class="animationgame transform" style="color: white; font-width: 20px; height: 120px; width: 200px;border-bottom-right-radius: 30px; border-top-right-radius: 30px;  right:100%; top:7%; padding: 5px 0 0 30px">
        @*<img src="@routes.Assets.versioned("images/spieler1.png")" width="1000">*@
        <div class="row" id="punkteAnzeige" style ="font-size: 40px">0</div>
        <div class="row" style ="font-size: 30px">PUNKTE</div>
    </div> -->
</template>
<script>
import {startgame} from "@/js/square";
import {indices} from "@/js/playerSettings";

window.onload = function() {
  startgame(indices);
  //initializevalues(@player1name,@player2name, @player1color, @player2color)
};
</script>

<style lang="less" scoped>
@import "~@/less/prototypes.less";
@import "~@/less/game.less";
@import "~@/less/playerSettings.less";
@import "~@/less/rules.less";
@import "~@/less/startScreen.less";
</style>
