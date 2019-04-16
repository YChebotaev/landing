const counter = () => window['yaCounter46165149']

const invokeAll = config => {
  return config.map(([fn, ...args]) => invoke(fn, args))
}

const invoke = (fn, args) => {
  try {
    if (Array.isArray(fn)) {
      return Promise.all(invokeAll(fn))
    } else if (typeof fn === 'function') {
      return Promise.resolve(fn.apply(null, args))
    } else {
      return Promise.resolve()
    }
  } catch (error) {
    return Promise.reject(error)
  }
}

const delayEvent = (promise, event, callback) => {
  event.preventDefault()
  const eventTarget = event.target
  return promise.then(result => {
    callback(eventTarget)
    unlockEvent(eventTarget)
    return result
  })
}

const lockedSet = new WeakSet()

const lockEvent = element => {
  if (lockedSet.has(element)) {
    return false
  } else {
    lockedSet.add(element)
    return true
  }
}

const unlockEvent = element => {
  lockedSet.delete(element)
  return element
}

export function createEventListener (fn, ...args) {
  return function eventListener (event) {
    if (lockEvent(event.target)) {
      let promise = invoke(fn, args)
      switch (event.type) {
        case 'click':
          delayEvent(promise, event, target => target.click())
          break
        case 'submit':
          delayEvent(promise, event, target => target.click())
          break
        default:
          unlockEvent(event.target)
      }
    }
  }
}

export function reachGoal (target, params) {
  return new Promise(resolve => {
    counter().reachGoal(target, resolve)
  })
}

export function notBounce () {
  return new Promise(resolve => {
    counter().notBounce({ callback: resolve })
  })
}
