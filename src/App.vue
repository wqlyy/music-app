<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <router-view></router-view>
    </div>
</template>

<script>
import MHeader from '@/components/header'
import Tab from '@/components/tab'
export default {
  components: {
    MHeader,
    Tab
  },
  data(){
    return {
      msg: '123123123'
    }
  }
}
</script>
