var test = require('tape')
var curry = require('./')

test('basic test', function (t) {

  function foo (args) {
    return args.name + ' says ' + args.message
  }

  var keys = ['name', 'message']

  var actual = curry(foo, keys)({ name: 'bar' })({ message: 'baz' })
  var expected = 'bar says baz'

  t.equal(actual, expected, 'bar says baz')
  t.end()
})
