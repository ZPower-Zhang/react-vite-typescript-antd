// import react from 'react'
const getQueryString = (name: string): string => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const search = window.location.search.split('?')[1] || ''
  const r = search.match(reg) || []
  return r[2]
}

const GetUrlString = () => {
  const result: { [key: string]: any } = {}
  // 获取url上的参数（使用decodeURIComponent对url参数进行解码）
  const search = decodeURIComponent(window.location.search)
  const tempArr = search !== '' ? search.substr(1).split('&') : []
  console.log('tempArr', tempArr)

  tempArr.forEach((item) => {
    if (item) {
      // 将参数名和参数值拆分
      const itemArr = item.split('=')
      // 参数名作为key, 参数值为value
      result[itemArr[0]] = itemArr[1]
    }
  })

  return result
}

const getRedirectUrl = () => {
  const search = decodeURIComponent(window.location.search)
  return search.substr(1)
}

export { getQueryString, GetUrlString, getRedirectUrl }
