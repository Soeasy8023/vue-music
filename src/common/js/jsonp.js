import orginJSONP from 'jsonp'

let jsonp=(url,data,option)=>{
  url +=(url.indexOf('?')<0 ? '?':'&') + param(data)
  return new Promise((resolve, reject)=>{
    orginJSONP(url,option,(err,data)=>{
      if(!err){
        resolve(data)
      }else {
        reject(err)
      }
    })
  })
}

export  default jsonp

let param=(data)=>{
  let url=''
  for(let k in data){
    let value=data[k] !==undefined ? data[k]:''
    url+=`&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1):''
}
