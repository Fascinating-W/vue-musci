// jsonp 封装
import originJsonp from 'jsonp'
/**
 * 
 * @param {*} url 
 * @param {data} query 
 * @param {options} promise 
 */
export default function jsonp(url, data, option) {
  // 将data 拼到 url 上，先判断是否有？
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    // 调用 jsonp
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 如果 url 不为空 删掉第一个 &
  return url ? url.substring(1) : ''
}
