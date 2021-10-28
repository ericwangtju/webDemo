<template>
  <div>
    <!-- <h3>当前count值:{{count}}</h3> -->
    <h3>当前count值:{{$store.getters.showNum}}</h3>
    <button @click="addition()">+1</button>
    <button @click="addition2()">+n</button>
    <button @click="addition3()">async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  // 使用的两种方式
  // 1. this.$store.count
  // 2. 使用mapState

  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['add', 'addN']),
    ...mapActions(['addAsync']),
    addition () {
      // 这样无法直接修改
      // this.count++
      // 这样是非法
      // this.$store.state.count++

      // 出发mutations的方式1
      this.$store.commit('add')
    },
    addition2 () {
      // this.$store.commit('addN', 3)
      this.addN(3)
    },
    addition3 () {
      // this.$store.dispatch('addAsync')
      this.addAsync()
    }
  }
}
</script>

<style>
</style>
