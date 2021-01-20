<script src="../js/playerSettings.js"></script>
<template>
  <v-container fluid flex class="background-img-game">
    <v-layout row wrap>
      <v-flex xs2 xl3></v-flex>
      <v-flex xs10 xl9>
        <v-layout row wrap>
            <v-flex xs2 lg3></v-flex>
            <v-flex xs10 lg9>
                <v-layout row wrap>
                    <v-flex xs10 lg8>
                        <v-layout row wrap>
                            <v-flex lg3></v-flex>
                            <v-flex xs12 lg8>
                                <div class="title">
                                    <v-img src="@/assets/images/gameTitle.png" width="600"></v-img>
                                </div>
                            </v-flex>
                            <v-flex lg2></v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs2 lg4>
                        <a href="/">
                            <button class="home-button"></button>
                        </a>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 xl3>
        <v-layout row wrap>
            <v-flex xs12 lg2>
                <v-layout row wrap>
                    <v-flex xs12 md6 lg12>
                        <div id="selectedPlayer1" class="">
                            <div class="playerName">
                                <p></p>
                            </div>
                            <div class="playerPoints">
                                <p id="p1Points">0 Pts</p>
                            </div>
                        </div>
                    </v-flex>
                    <v-flex xs12 md6 lg12>
                        <div id="selectedPlayer2" class="">
                            <div class="playerName">
                                <p></p>
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
            <v-flex xs12 lg8>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-layout row wrap  class="gridWidth">
                            <v-flex xs1 class="grid-hover" id="0 0" instruction="0" x="0" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="1 0" instruction="0" x="1" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="2 0" instruction="0" x="2" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="3 0" instruction="0" x="3" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="4 0" instruction="0" x="4" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="5 0" instruction="0" x="5" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="6 0" instruction="0" x="6" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="7 0" instruction="0" x="7" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="8 0" instruction="0" x="8" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="9 0" instruction="0" x="9" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="10 0" instruction="0" x="10" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="11 0" instruction="0" x="11" y="0" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap  class="gridWidth">
                            <v-flex xs1 class="grid-hover" id="0 1" instruction="0" x="0" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="1 1" instruction="0" x="1" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="2 1" instruction="0" x="2" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="3 1" instruction="0" x="3" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="4 1" instruction="0" x="4" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="5 1" instruction="0" x="5" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="6 1" instruction="0" x="6" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="7 1" instruction="0" x="7" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="8 1" instruction="0" x="8" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="9 1" instruction="0" x="9" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="10 1" instruction="0" x="10" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="11 1" instruction="0" x="11" y="1" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap  class="gridWidth">
                            <v-flex xs1 class="grid-hover" id="0 2" instruction="0" x="0" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="1 2" instruction="0" x="1" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="2 2" instruction="0" x="2" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="3 2" instruction="0" x="3" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="4 2" instruction="0" x="4" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="5 2" instruction="0" x="5" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="6 2" instruction="0" x="6" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="7 2" instruction="0" x="7" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="8 2" instruction="0" x="8" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="9 2" instruction="0" x="9" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="10 2" instruction="0" x="10" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="11 2" instruction="0" x="11" y="2" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap  class="gridWidth">
                            <v-flex xs1 class="grid-hover" id="0 3" instruction="0" x="0" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="1 3" instruction="0" x="1" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="2 3" instruction="0" x="2" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="3 3" instruction="0" x="3" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="4 3" instruction="0" x="4" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="5 3" instruction="0" x="5" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="6 3" instruction="0" x="6" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="7 3" instruction="0" x="7" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="8 3" instruction="0" x="8" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="9 3" instruction="0" x="9" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="10 3" instruction="0" x="10" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="11 3" instruction="0" x="11" y="3" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap  class="gridWidth">
                            <v-flex xs1 class="grid-hover" id="0 4" instruction="0" x="0" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="1 4" instruction="0" x="1" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="2 4" instruction="0" x="2" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="3 4" instruction="0" x="3" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="4 4" instruction="0" x="4" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="5 4" instruction="0" x="5" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="6 4" instruction="0" x="6" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="7 4" instruction="0" x="7" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="8 4" instruction="0" x="8" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="9 4" instruction="0" x="9" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="10 4" instruction="0" x="10" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="11 4" instruction="0" x="11" y="4" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap  class="gridWidth">
                            <v-flex xs1 class="grid-hover" id="0 5" instruction="0" x="0" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="1 5" instruction="0" x="1" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="2 5" instruction="0" x="2" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="3 5" instruction="0" x="3" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="4 5" instruction="0" x="4" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="5 5" instruction="0" x="5" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="6 5" instruction="0" x="6" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="7 5" instruction="0" x="7" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="8 5" instruction="0" x="8" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="9 5" instruction="0" x="9" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="10 5" instruction="0" x="10" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                            <v-flex xs1 class="grid-hover" id="11 5" instruction="0" x="11" y="5" onclick="calc(this);">
                                <v-img src="@/assets/images//cards/Empty.png"></v-img>
                                <!-- <img src=@routes.Assets.versioned(supervisor.controller.ImagePath(supervisor.map.field(x)(y), supervisor.card)) > -->
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs6 lg2>
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
import { indices } from "@/js/playerSettings";
import $ from "jquery";

export default {
  name: "Game",
  data: () => ({
    Data: {},
    clickedX: -1,
    clickedY: -1,
    instruction: "",
    websocket: null,
    turned: 0,
    lock: false
  }),
  mounted() {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    this.startgame(indices);
    //initializevalues(@player1name,@player2name, @player1color, @player2color)
  },
  methods: {
    sendPlayerSettings: function(indices) {
      var payload = {
        instruction: "setPlayers",
        x: indices[0],
        y: indices[1]
      };
      console.log("indices " + indices);
      this.websocket.send(JSON.stringify(payload));
    },
    calc: function(source) {
      if (this.lock) return;
      var payload = {
        instruction: source.getAttribute("instruction"),
        x: source.getAttribute("x"),
        y: source.getAttribute("y")
      };
      if (source.getAttribute("instruction") === "r") this.turnright();
      if (source.getAttribute("instruction") === "l") this.turnleft();
      this.clickedX = source.getAttribute("x");
      this.clickedY = source.getAttribute("y");
      this.instruction = source.getAttribute("instruction");
      this.websocket.send(JSON.stringify(payload));
      //sendRequest("POST","/squarecastle/api/command", payload)
    },
    turnright: function() {
      if (this.turned === undefined) this.turned = 0;
      this.turned += 90;
      document.getElementById("preview").style.transform =
        "rotate(" + this.turned + "deg)";
      console.log("turn picture " + this.turned);
    },
    turnleft: function() {
      if (this.turned === undefined) this.turned = 0;
      this.turned -= 90;
      document.getElementById("preview").style.transform =
        "rotate(" + this.turned + "deg)";
      console.log("turn picture " + this.turned);
    },
    updateHTML: function() {
      console.log("State : " + this.Data[0]);
      if (this.Data[0] === "2") {
        if (this.turned === undefined) this.turned = 0;
        switch (this.instruction) {
          case "r":
            this.turnright();
            break;
          case "l":
            this.turnleft();
            break;
          default:
            console.log("Instruction not readable " + this.instruction);
        }
      } else if (this.Data[0] === "1") {
        this.turned = 0;
        //punktediv vorbereiten

        document.getElementById("punkteAnzeige").innerText = this.Data[6];
        document.getElementById("p1Points").innerText = this.Data[5] + " Pts";
        document.getElementById("p2Points").innerText = this.Data[4] + " Pts";
        document.getElementById("animateImg").classList.remove("red");
        document.getElementById("animateImg").classList.remove("green");
        document.getElementById("animateImg").classList.remove("blue");
        document.getElementById("animateImg").classList.remove("purple");

        document.getElementById("animateImg").classList.add(this.Data[7]);

        this.animateImg(0);
        document.getElementById("newcard").innerHTML =
          '<img id="preview" class="card-preview" src="/assets/' +
          this.Data[1] +
          '">';
        document.getElementById(this.clickedX + " " + this.clickedY).innerHTML =
          '<img src="/assets/' + this.Data[2] + '">';
      } else if (this.Data[0] === "3") {
        document.getElementById("newcard").innerHTML =
          '<img id="preview" class="card-preview" src="/assets/' +
          this.Data[1] +
          '">';
      }
    },
    startgame: function(indices) {
      this.turned = 0;
      console.log("starting game . . . connecting websocket")
      this.connectWebSocket();
      this.sendPlayerSettings(indices);
      //animateImg(0);
    },
    animateImg: function() {
      this.lock = true;
      document.getElementById("animateImg").style.transition = "right 0.5s";
      document.getElementById("animateImg").style.transitionTimingFunction =
        "ease-out";
      document.getElementById("animateImg").style.right = "calc(100% - 200px)";
      setTimeout(this.endanimation, 1000);
    },
    endanimation: function() {
      this.lock = false;
      setTimeout(this.easeout, 1500);
    },
    easeout: function() {
      document.getElementById("animateImg").style.transition = "right 0.75s";
      document.getElementById("animateImg").style.right = "100%";
    },
    connectWebSocket: function() {
      this.websocket = new WebSocket("ws://localhost:9000/websocket");
      this.websocket.setTimeout;
      let vm = this;

      console.log("Connecting to Websocket");

      this.websocket.onopen = function() {
        console.log("Connected");
      };

      this.websocket.onclose = function() {
        console.log("Connection Closed!");
        //$(".game").addClass("blurred");
      };

      this.websocket.onerror = function(error) {
        console.log("Error Occured: " + error);
      };

      this.websocket.onmessage = function(e) {
        console.log("reveived message: " + e);
        vm.readWierdMessagefromWebsocket(e.data);
      };
    },
    readWierdMessagefromWebsocket: function(data) {
      var json = JSON.parse(data);
      this.Data[0] = json[0]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //state
      this.Data[1] = json[1]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //link neue karte
      this.Data[2] = json[2]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //link gesetzte karte
      this.Data[3] = json[3]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //spieler der dran ist
      this.Data[4] = json[4]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //punkte p1
      this.Data[5] = json[5]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //punkte p2
      this.Data[6] = json[6]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //neue punkte
      this.Data[7] = json[7]
        .replaceAll('"', "")
        .replaceAll(String.fromCharCode(92), ""); //neue punkte

      console.log(this.Data);
      console.log(this.instruction);
      this.updateHTML();
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/less/main.less";
</style>

<script>
// import '../js/playerSettings.js';
</script>
