get_es6_parameter_names
=======================

Get the names of a function's parameters.

## USAGE

```js
function example(parameter1, parameter2 = 'world') {
	return "hello" + parameter2;
}

var nameParameters = require('get_es6_parameter_names');

nameParameters(example.toString()) // ["parameter1", "parameter2"]
```

Unit tests [http://alt-o.net/testing-suite/?grep=Parameter%20Names](http://alt-o.net/testing-suite/?grep=Parameter%20Names)

Used by [dø](https://www.npmjs.com/package/op_do).