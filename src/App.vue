<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <player></player>
    </div>
</template>

<script>
import MHeader from '@/components/header'
import Tab from '@/components/tab'
import Player from '@/components/player'
export default {
  components: {
    MHeader,
    Tab,
    Player
  },
  data(){
    return {
      msg: '123123123'
    }
  }
}
</script>
