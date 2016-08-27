Used in [dø](https://www.npmjs.com/package/op_do).

Unit test: [http://alt-o.net/testing-suite/?grep=Parameter Names](http://alt-o.net/testing-suite/?grep=Parameter%20Names)
## USAGE

```js
   
   var get = require("get_es6_parameter_names");

   function example (a = "hello", b = "world") {

      return true;
   }
   get(example.toString()); // ["a", "b"]

```

```js
   
   var get = require("get_es6_parameter_names");

   function example ({a}, {b}) {

      return true;
   }
   get(example.toString()); // ["a", "b"]

```

```js
   
   var get = require("get_es6_parameter_names");

   function example ({A: a}, {B: b}) {

      return true;
   }
   get(example.toString()); // ["a", "b"]

```

```js
   
   var get = require("get_es6_parameter_names");

   function example (a, ...b) {

      return true;
   }
   get(example.toString()); // ["a", "...b"]
   
```
