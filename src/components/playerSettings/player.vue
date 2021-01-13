<template>
  <v-flex xs6 lg2>
    <div class="player" :class="getClass()">
      <div class="playerCover">
        <v-img class="coverIMG" :src="getPath()"></v-img>
      </div>
      <button :id="getBTN()" class="playerButtons">
        <div class="buttonDIV"></div>
      </button>
    </div>
  </v-flex>
</template>

<script>
import Vue from "vue";
export default Vue.component("player", {
  props: {
    playerName: { type: String, require: true }
  },
  methods: {
    getClass: function() {
      if (this.playerName === "player1") {
        return "bluePlayer";
      } else if (this.playerName === "player2") {
        return "redPlayer";
      } else if (this.playerName === "player3") {
        return "greenPlayer";
      } else if (this.playerName === "player4") {
        return "purplePlayer";
      }
    },
    getBTN: function() {
      if (this.playerName === "player1") {
        return "btn1";
      } else if (this.playerName === "player2") {
        return "btn2";
      } else if (this.playerName === "player3") {
        return "btn3";
      } else if (this.playerName === "player4") {
        return "btn4";
      }
    },
    getPath: function() {
      if (this.playerName === "player1") {
        return "img/bluePlayer.9461d718.png";
      } else if (this.playerName === "player2") {
        return "img/redPlayer.7447da63.png";
      } else if (this.playerName === "player3") {
        return "img/greenPlayer.2753e006.png";
      } else if (this.playerName === "player4") {
        return "img/purplePlayer.dc9a0618.png";
      }
    }
  }
});
</script>

<style lang="less" scoped>
@import "~@/less/playerSettings.less";
</style>
