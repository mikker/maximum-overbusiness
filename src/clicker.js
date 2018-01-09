function Clicker(window) {
  this.listeners = {
    next: [],
    prev: []
  }

  window.addEventListener('keydown', this._keyDown)
  window.removeEventListener('keydown', this._keyDown)
}

Clicker.prototype.on = function(event, cb) {
  this.listeners[event].push(cb)

  return function off () {
    this.listeners[event].remove(cb)
  }
}

Clicker.prototype._keyDown = function(event) {
  switch (event.keyCode) {
    case 8: // bckspc
    case 33: // pg up
    case 37: // left arr
      this.listeners['next'].forEach(cb => cb(event))
      break;
    case 32: // space
    case 34: // pg dwn
    case 39: // right arr
      this.listeners['prev'].forEach(cb => cb(event))
      break;
    default:
      break;
  }
}

module.exports = new Clicker(window)
