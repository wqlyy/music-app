<template>
  <div class="tab">
      <router-link tag="div" class="tab-item" to="/recommend">
        <span class="tab-link">推荐</span>
      </router-link>
       <router-link :click="getData" tag="div" class="tab-item" to="/singer">
        <span class="tab-link">歌手</span>
      </router-link>
       <router-link tag="div" class="tab-item" to="/rank">
        <span class="tab-link">排行</span>
      </router-link>
       <router-link tag="div" class="tab-item" to="/search">
        <span class="tab-link">搜索</span>
      </router-link>
  </div>
</template>
<script>
import './index.scss'
export default {
  data(){
    return {}
  },
  methods: {
    getData(){
      this.$route.get('/');
      console.log(1111)
    }
  }
}
</script>
