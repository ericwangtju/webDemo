$(function () {
  var layer = layui.layer
  var form = layui.form

  var art_state = ''
  initCate()
  initEditor()
  function initCate () {
    $.ajax({
      method: 'GET',
      url: '',
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg('初始化文章分类失败')
        }
        template('tpl-art-pub', res)
        $('[name=cate_id]').html(htmlStr)
        form.render()
      }
    })
  }
})