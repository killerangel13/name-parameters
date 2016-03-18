## USAGE

```js
    var get = require('get_es6_parameter_names');

    function example (a = 'hello', b = 'world') {

        return `${a} ${b}`;
    }

    get(example.toString()); // ["a", "b"]

```

Unit tests [http://alt-o.net/testing-suite/?grep=Parameter%20Names](http://alt-o.net/testing-suite/?grep=Parameter%20Names)

Used by [dø](https://www.npmjs.com/package/op_do).