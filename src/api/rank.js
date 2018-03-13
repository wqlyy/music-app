import { commonParams, options } from './config';
// import jsonp from '../common/js/jsonp';
import axios from 'axios'
export function getTopList() {
  const url = '/api/getRankList';
  const data = Object.assign(options, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
