const express = require('express')
const axios = require('axios')

//解决api请求限制 
const app = express()
const apiRoutes = express.Router()
apiRoutes.get('/getDiscList', (req,res)=>{
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/portal/playlist.html'
    },
    params: req.query
  }).then((response) => {
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
  })
})
app.use('/api', apiRoutes)
app.listen(8081,() => {
  console.log('api')
})
//end