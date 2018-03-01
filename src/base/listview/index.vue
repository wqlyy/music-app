<template>
  <scroll class="list-view" :data="data">
    <ul>
      <li v-for="(group,index) in data" :key="index" class="list-group">
        <h2 class="list-group-title">
          {{group.title}}
        </h2>
        <ul>
          <li class="list-group-item" v-for="(item,index) in group.items" :key="index">
            <img class="avatar" v-lazy="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from '@/base/scroll'
import './index.scss'
export default {
  components: {
    Scroll
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  }
}
</script>
