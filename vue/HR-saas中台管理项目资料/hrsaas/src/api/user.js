import request from '@/utils/request'

/**
 * 登录接口
 */
export function login (data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getUserInfo () {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export function getUserDetailById (id) {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout () {

}
