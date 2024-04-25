import { inspect, formatWithOptions } from 'util'

inspect.styles.string = 'red'
// util.inspect.styles // ?

console.log(
  formatWithOptions(
    { colors: true },
    '%o',
    'INFO: Run the command below to install all PeerDependencies',
  ),
)

inspect.styles.string = 'cyan'
console.log(inspect) // ?

console.log(formatWithOptions({ colors: true }, '%o', 'npm run peerdeps'))

console.log('%c This is a test', 'background: #222; color: #bada55')
