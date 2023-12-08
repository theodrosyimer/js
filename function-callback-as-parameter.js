function getCount(count) {
  return count
}

function addEventListener(name, cb) {
  const eventObject = {
    eventName: name,
    target: {
      matches: selector => Math.random() > 0.6,
      textContent: { value: 'Mouss' },
    },
  }

  return cb(eventObject) // ?
}

// both are the same
addEventListener('click', event => getCount(event)) // ?
addEventListener('click', getCount) // ?
