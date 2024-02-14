let o1 = {
  greet(name) {
    console.log('o1 called!');
    return `Greet ${name}`
  }
}

let o2 = {
  hello(name) {
    console.log('o2 called!');
    return `Hello ${name}`
  }
}

// let v = (o1.greet || o2.greet)('theo')
// or
let createWelcomeMessage = (o1.greet || o2.hello)
createWelcomeMessage('theo')
/////////////////////////////////////////////////

o1 = {
  processEvent(event) {
    console.log('o1 called!');
    return _processEventData(event)
  }
}

o2 = {
  processEventData(event) {
    console.log('o2 called!');
    return _processEventData(event)
  }
}

function _processEventData(event) {
  return {
    id: event.id,
    type: event.type,
    data: event.data.toUpperCase()
  }
}

function wrapFnWithData(cb) {
  let eventData = {
    id: 'lklksdf-sfdsfsd-fdsfhgfh',
    type: 'message',
    data: 'This is a message'
  }

  return () =>  cb(eventData)
}

let fn = wrapFnWithData(o1.processEventData || o2.processEventData)

fn()
export {}
