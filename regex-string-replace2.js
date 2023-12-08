const message = 'one.two.three'

// Replace alll dots with spaces
// one two three

// BAD
message.replace('.', ' ') /*?*/

// 1
message.replace(/\./g, ' ') /*?*/

// 2
message.replace(/\./g, ' ') /*?*/

// Escape any characters that needs to be
export const escapeRegExp = string =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

message.replace(new RegExp(escapeRegExp('.'), 'g'), ' ') /*?*/

// 3, not efficient because of the intermediate array created
message.split('.').join(' ') /*?*/

// 4 Best
message.replaceAll('.', ' ') /*?*/
