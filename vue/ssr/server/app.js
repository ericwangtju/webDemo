const express = require('express')
const app = express(

)

const port = 9527
app.get('/', (req, res) => res.send('<h1>ssr</h1>'))
app.listen(port, () => {
  console.log('app listeningon port ')
})