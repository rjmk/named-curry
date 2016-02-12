# named curry

Named arguments [decomplect][hickey] order and arguments  
This is a pure ES5 implementation

## usage

```js
var curry = require('named-curry')

function foo (args) {
  return args.name + ' says ' + args.message
}

var keys = ['name', 'message']

curry(foo, keys)({ name: 'bar' })({ message: 'baz' }) // -> 'bar says baz'
```

Unfortunately it is a bit boilerplate-y with providing the keys

