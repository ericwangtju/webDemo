$(function () {
  var layer = layui.layer
  var form = layui.form
  var laypage = layui.laypage

  template.defaults.import.dateFormat = function (date) {

  }
  let q = {
    pagenum: 1,
    pagesize: 2,
    cate_id: '',
    state: ''
  }

  function initTable () {
    $.ajax({
      method: 'GET',
      url: '',
      data: q,
      success: function (res) {
        console.log(res);
        if (res.status !== 0) {
          return layer.msg('shibai')
        }

        var html = template('tpl-table', res)
        $('tbody').html(html)
      }
    })
  }
  function renderPage (total) {
    laypage.renderPage({
      elem: 'pageBox',
      count: total,
      limit: q.pagesize,
      curr: q.pagenum,
      layout: ['count', 'limit', 'prev', 'page', 'next', 'skip'],
      limits: [2, 3, 5, 10]
    })
  }
})