<template>
  <scroll class="list-view" :data="data" ref='listview'>
    <ul>
      <li v-for="(group,index) in data" :key="index" class="list-group" ref="listGroup">
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
    <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item, index) in shortcutList" :data-index="index" :key="index" class="item">{{item}}</li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/base/scroll'
import {getData} from '@/common/js/dom'
import './index.scss'

const ANCHOR_HEIGHT = 18

export default {
  created() {
    this.touch = {}
  },
  components: {
    Scroll
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  computed: {
    shortcutList() {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    }
  },
  methods: {
    onShortcutTouchStart(e) {
      let anchorIndex = getData(e.target, 'index');
      let firstTouch = e.touches[0];
      this.touch.y1 = firstTouch.pageY;
      this.touch.anchorIndex = anchorIndex;
      this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove(e){
      let firstTouch = e.touches[0];
      this.touch.y2 = firstTouch.pageY;
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0;
      let anchorIndex = (parseInt(this.touch.anchorIndex)) + delta;
      this._scrollTo(anchorIndex)
    },
    _scrollTo(index) {
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    }
  }
}
</script>
