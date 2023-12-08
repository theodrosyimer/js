// add locales option
function getTimeAsString() {
  const now = new Date()
  return {
    hours: now.getHours().toString(),
    minutes: `0${now.getMinutes()}`.slice(-2),
    seconds: `0${now.getSeconds()}`.slice(-2),
  }
}

getTimeAsString() /*?. $*/
