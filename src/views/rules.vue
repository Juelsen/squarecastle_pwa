<template>
    <v-container fluid class=" background-img-rules">
        <v-layout row wrap>
            <v-flex xs3 sm4 lg5>
                <a class="home-btn" href="/"></a>
            </v-flex>
            <v-flex xs9 sm8 lg7>
                <div class="title">
                    <v-img src="@/assets/images/rules.png" width="300"></v-img>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 lg6>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="centeredExamples">
                            <v-img src="@/assets/images/rules/correct.png" class="examples"></v-img>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="centeredExamples">
                            <v-img src="@/assets/images/rules/false.png" class="examples"></v-img>
                        </div>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12>
                        <div class="centeredExamples">
                            <v-img src="@/assets/images/rules/collectPoints.png" class="examples"></v-img>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 lg6>
                <div class="rulesStyling">
                    <v-layout row wrap>
                        <v-flex xs12 class="firstSection">
                            <h4>Game principle:</h4>
                            <p>
                            Each player is assigned a random card. He can then place it
                            anywhere on the playing field. The goal is to collect as many
                            points as possible. You get points by placing your card on a
                            card that is already on the field.
                            </p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="secondSection">
                            <h4>There are different types of cards:</h4>
                            <p>
                            meadow, castle and road pieces. For example, a card can also
                            show a meadow and castle. You can for example only place castle
                            pieces on other castle pieces.
                            </p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 class="thirdSection">
                            <h4>How to collect points:</h4>
                            <p>
                            For castle pieces you get 2 points credited to your account. For
                            roads you get 1 point and for meadows 0 points. The longer the
                            chain of cards, the more points you get. So if you add another
                            card to two already adjoining parts of a castle, you will get 6
                            points in total.
                            </p>
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style lang="less" scoped>
@import "~@/less/prototypes.less";
@import "~@/less/game.less";
@import "~@/less/playerSettings.less";
@import "~@/less/rules.less";
@import "~@/less/startScreen.less";
</style>