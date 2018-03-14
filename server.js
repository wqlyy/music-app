const express = require('express')
const axios = require('axios')
const path = require('path')
//解决api请求限制 
const app = express()
const apiRoutes = express.Router()
apiRoutes.get('/getDiscList', (req,res)=>{
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/portal/playlist.html',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})
apiRoutes.get('/lyric', (req,res)=>{
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data;
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/;
      var matches = ret.match(reg);
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})
apiRoutes.get('/getSongList', (req,res)=>{
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios.get(url, {
    headers: {
      referer: `https://y.qq.com/n/yqq/playsquare/${req.query.disstid}.html`
    },
    params: req.query
  }).then((response) => {
    var ret = response.data;
    if (typeof ret === 'string') {
      var reg = /^\w+\(({.+})\)$/;
      var matches = ret.match(reg);
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})
apiRoutes.get('/getRankList', (req,res)=>{
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  axios.get(url, {
    headers: {
      referer: `https://c.y.qq.com/`
    },
    params: req.query
  }).then((response) => {
    var ret = response.data;
    console.log(ret.code)
    if(ret.code === 0){
      res.json({
        code: 0,
        msg: '',
        list: ret.data.topList
      })
    }else{
      res.json({
        code: 1,
        msg: '数据请求失败',
        list: []
      })
    }
  }).catch((e) => {
    console.log(e)
  })
})
app.use('/api', apiRoutes)
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(9000,() => {
  console.log('api loadded')
})
//end