const path = require('path')

const fpath = '/a/b/c/index.html'
var fullName = path.basename(fpath)
console.log(fullName);

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt);