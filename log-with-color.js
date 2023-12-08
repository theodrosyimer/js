const util = require('util')

util.inspect.styles.string = 'red'
// util.inspect.styles // ?

console.log(
  util.formatWithOptions(
    { colors: true },
    '%o',
    'INFO: Run the command below to install all PeerDependencies'
  )
)

util.inspect.styles.string = 'cyan'
// util.inspect.styles // ?

console.log(util.formatWithOptions({ colors: true }, '%o', 'npm run peerdeps'))
