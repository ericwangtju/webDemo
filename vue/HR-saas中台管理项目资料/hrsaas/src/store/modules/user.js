import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { getToken, setToken, removeToken, setTimestamp } from '@/utils/auth'
import { resetRouter } from "@/router"
// 状态
// 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
// Vuex的持久化 如何实现 ？ Vuex和前端缓存相结合
const state = {
  // 设置token初始状态   token持久化 => 放到缓存中
  token: getToken(),
  userInfo: {} // 定义一个空的对象 不是null 因为后边我要开发userInfo的属性给别人用  userInfo.name
  // 因为我们要做映射，如果初始值为null，一旦引用了getters，就会报错
}
// 修改状态
const mutations = {
  // 设置token
  setToken (state, token) {
    state.token = token // 设置token  只是修改state的数据  123 =》 1234
    // vuex变化 => 缓存数据
    setToken(token) // vuex和 缓存数据的同步
  },
  // 删除缓存
  removeToken (state) {
    state.token = null // 删除vuex的token
    removeToken() // 先清除 vuex  再清除缓存 vuex和 缓存数据的同步
  },
  // 设置用户信息
  setUserInfo (state, userInfo) {
    // state.userInfo = userInfo // 这样是响应式
    // state.userInfo['username'] = userInfo  这样不是响应式
    state.userInfo = { ...userInfo } // 用 浅拷贝的方式去赋值对象 因为这样数据更新之后，才会触发组件的更新
  },
  // 删除用户信息
  removeUserInfo (state) {
    // 不能赋值为空
    state.userInfo = {}
  }
}
// 执行异步
const actions = {
  // 定义login action  也需要参数 调用action时 传递过来的参数
  async login (context, data) {
    // const result = await login(data) // 实际上就是一个promise  result就是执行的结果
    // // axios默认给数据加了一层data
    // if (result.data.success) {
    //   // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
    //   // 现在有用户token
    //   // actions 修改state 必须通过mutations
    //   context.commit('setToken', result.data.data)
    // }
    // 经过响应拦截器的处理之后 这里的result实际上就是 token
    const result = await login(data) // 实际上就是一个promise  result就是执行的结果
    // axios默认给数据加了一层data
    // 表示登录接口调用成功 也就是意味着你的用户名和密码是正确的
    // 现在有用户token
    // actions 修改state 必须通过mutations
    context.commit('setToken', result)
    setTimestamp()
  },
  // 为什么async/await 不用返回new Promise,因为 async函数本身就是 Promise,promise的值返回的值
  // login(context, data) {
  //   return new Promise(function(resolve) {
  //     login(data).then(result => {
  //       if (result.data.success) {
  //         context.commit('setToken',  result.data.data) // 提交mutations设置token
  //         resolve()  // 表示执行成功了
  //       }
  //     })
  //   })
  // }
  // 获取用户资料action
  async getUserInfo (context) {
    const result = await getUserInfo() // 获取返回值
    // 获取用户详情
    const baseInfo = await getUserDetailById(result.userId)
    const baseResult = { ...result, ...baseInfo }
    context.commit('setUserInfo', baseResult) // 将整个的个人信息设置到用户的vuex数据中
    return result // 这里为什么要返回 为后面埋下伏笔
  },
  // 登出的action
  logout (context) {
    // 删除token
    context.commit('removeToken') // 不仅仅删除了vuex中的 还删除了缓存中的
    // 删除用户资料
    context.commit('removeUserInfo') // 删除用户信息
    // 重置路由
    resetRouter()
    // 还有一步  vuex中的数据是不是还在
    // 要清空permission模块下的state数据
    // vuex中 user子模块  permission子模块
    // 子模块调用子模块的action  默认情况下 子模块的context是子模块的
    // 父模块 调用 子模块的action
    context.commit('permission/setRoutes', [], { root: true })
    // 子模块调用子模块的action 可以 将 commit的第三个参数 设置成  { root: true } 就表示当前的context不是子模块了 而是父模块
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
