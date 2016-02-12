'use strict'

var objectAssign = require('object-assign')

module.exports = function namedCurry (fn, ks) {
  return (function ncHelper (o) {
    return function (o2) {
      var obj = objectAssign({}, o, o2)
      return check(ks, Object.keys(obj)) ? fn(obj) : ncHelper(obj)
    }
  })({})
}

var check = function (a1, a2) {
  return a1.every(function (a) {
    return a2.indexOf(a) > -1
  })
}