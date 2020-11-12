import request from '@/utils/fly'
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64

export function login(username, password, tenantId) {
  let base64Str = Base64.encode(md5(password))
  let data = {
    params : {
      phone : username,
      password : base64Str,
      tenantId : tenantId,
        isAdmin : true
    }
  }
  let lHeaderObj = {
   "Content-Type" : "application/json"
  }
  
//   return request({
//     url: 'quality/login',
//     method: 'post',
//     data : data
//   })

  return request.post('quality/login', data)

}

export function getInfo(token) {
  return request({
    url: 'quality/admin/user/get',
    method: 'post',
    data : token
  })
}

export function logout() {
  return request({
    url: 'quality/loginOut',
    method: 'post'
  })
}
