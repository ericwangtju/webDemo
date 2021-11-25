<template>
  <div></div>
</template>

<script>
import E from 'wangeditor'
export default {
  methods: {
    initEditor () {
      const editor = new E(this.$refs.editorRef)
      editor.create()
    }
  },
  mounted () {
    this.initEditor()
  }
}
</script>

<style>
</style>