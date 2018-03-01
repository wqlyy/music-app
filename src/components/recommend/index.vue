<template>
  <div class="recommend">
      <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
          <div v-if="recommendSlider.length" class="slider-wrapper">
            <slider>
              <div v-for="item in recommendSlider" :key="item.id">
                <a :href="item.linkUrl">
                  <img :src="item.picUrl" @load="laodIamge" />
                </a>
              </div>
            </slider>
          </div>
          <div class="recommend-list">
            <h1 class="list-title">热门歌单推荐</h1>
            <ul>
              <li v-for="item in discList" :key="item.dissid" class="item">
                <div class="icon">
                  <img width="60" height="60" :src="item.imgurl" :alt="item.dissname">
                </div>
                <div class="text">
                  <h2 class="name" v-html="item.creator.name"></h2>
                  <p class="desc" v-html="item.dissname"></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
  </div>
</template>
<script>
import './index.scss';
import {getRecommend, getDiscList} from '@/api/recommend';
import {ERR_OK} from '@/api/config'
import Slider from '@/base/slider'
import Scroll from '@/base/scroll'
export default {
  components: {
    Slider,
    Scroll
  },
  data() {
    return {
      recommendSlider: [],
      discList: []
    }
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if (res.code === ERR_OK){
          // console.log(res.data.slider);
          this.recommendSlider = res.data.slider;
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.data.list);
          this.discList = res.data.list;
        }
      })
    },
    laodIamge() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh();
        this.checkLoaded = true;
      }
    }
  }
}
</script>
