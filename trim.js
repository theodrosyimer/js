let str = '    this is a   string to trim      '

str.split(' ').filter(Boolean).join(' ') /*?. $*/

str.replace(/^(\s+)|(\s+)$/g, '') /*?. $*/
