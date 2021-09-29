const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
// 可以多次调用static
app.use('/files', express.static('./clock'))
// app.use(express.static('./clock'))

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})
