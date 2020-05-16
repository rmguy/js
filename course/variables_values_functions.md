4/30/20: Variables/Values/Functions
===

* Use var or let to declare it
    - let is scoped to logic block (if statement), var to function
* lowerCamelCase syntax, can start with `_` but not numbers or `!`
* // comments
* ES2015 has const


Data Types
===

* number, string, boolean, undefined, objects; first 3 are "primitive". 
* Null is an object. Arrays are objects; typeof([1,2,3]) = object
* Objects have k/v defs that turn into attributes

```
var o = {"foo": "bar"}
o.foo
```

* Numbers can be int, signed, unsigned and scientific notation
    - `3.46e+4 = 3.45 * 10^4` e just stands for 10 exp
    - octal and hex (but not binary, because 0 and 0x signify each of those)
    - NaN, +- Infinity (technically > 1.79e+308)
    - typeof NaN = number

* Floats: all numbers represented as floats, 1 = 1.0, so approximation errors
  happen (even python has the same problem)
```
> 0.1+0.2
< 0.3000000000004
> 0.8.toString(2)
< 0.11001100110011...
```
    - this has nothing to do with computers but more because numbers represented
      in a base 10 system sometimes become repeating decimals in base 2. Base 10
      has an extra prime factor (5) that isn't in base 2. 0.2 is the base 10
      form of the fraction 2/10.


Operators & Expressions
===

* Applying *some* operators to a string converts it to a number
    - typeof s++: number
    - s2 = s2 * 10: number
    - s2 = s2 + 1: string
* Escape special characters with '\'


Objects
===

* Predefined: window, navigator, document etc
* `.length` gives length of array
* Can't use `+` to add arrays, use `a=a.concat`; use .push to append 1 element
    - `push` will push the entire array as an element, concat will add the
      elements.

Functions
===

* Always returns something
* `arguments` magic variable to get the iterator
```
function f() {}
f(1,2,4)
```
* Function f still gets an iterator of all arguments passed in, this is stored
  in magic array `arguments`.

