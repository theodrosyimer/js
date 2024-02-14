// Regex Named Group in ES2018 (aka ES9)
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const result = re.exec('2015-02-24')

const { year, month, day } = result.groups

console.log(year, month, day)

export {}
