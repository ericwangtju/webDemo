const htmlEscape = require('./src/htmlEscape')
const dateFormat = require('./src/dataFormat')
module.exports = {
  ...dateFormat,
  ...htmlEscape
}
