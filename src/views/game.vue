<template>
    <v-container fluid flex class="background-img-game">
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
        <v-layout row wrap>
            <v-flex xs12>
                <v-layout row wrap>
                    <v-flex sm1 md2 lg3 xl4></v-flex>
                    <v-flex xs12 sm10 md8 lg6 xl4>
                        <section class="centerToolbar">
                            <div id="l" class="left-background">
                                <button class="toolbar-button" instruction="l" onclick="calc(this);"></button>
                            </div>
                            <div id="wait" class="pause-background">
                                <button class="toolbar-button" instruction="wait" onclick="calc(this);"></button>
                            </div>
                            <div id="r" class="right-background">
                                <button class="toolbar-button" instruction="r" onclick="calc(this);"></button>
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

<style lang="less" scoped>
@import "~@/less/main.less";
</style>

<script>
// import '../js/playerSettings.js';
</script>