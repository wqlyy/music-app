// import {getPlayKey} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import {getLyric} from '@/api/song'
import {Base64} from 'js-base64'

// let key = ''
// getPlayKey().then((res) => {
//   if (res.code === ERR_OK) {
//     key = res.key
//   }
// })

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}){
    this.id = id;
    this.mid = mid;
    this.singer = singer;
    this.name = name;
    this.album = album;
    this.duration = duration;
    this.image = image;
    this.url = url;
  }
  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          // console.log(this.lyric)
          resolve(this.lyric)
        } else {
          // reject('no lyric !!!')
        }
      })
    })
  }
}

export function createSong(musicData) {
  // C100004cNNNW0QG6RR.m4a?fromtag=32
  const playUrl = 'http://isure.stream.qqmusic.qq.com/';
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `http://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: playUrl + 'C100' + musicData.songmid + '.m4a?fromtag=32'
  })
}


function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
