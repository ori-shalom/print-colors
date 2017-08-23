# print-colors
**_print-colors_** is a very lightweight library for printing colors to the console using a nice and easy to use syntax.

Import the module to your project:
```javascript
const c = require('print-color');
```

To print to your console some "How to use" examples you can use the `example()`, `docs()` or `help()` functions available with the library to print some example to the console.
```javascript
const c = require('print-color');

c.example();
```

In order to affect the color of the text printed to the console with the built in `console.log()` function, you need to follow the following template:

>console.log(c.(background or foreground).(light or dark).(color) + 'Some Text' + c.end);

## Examples:
```javascript
const c = require('print-color');

console.log(c.foreground.light.red + 'This text will be printed in light red color' + c.end);

console.log(c.foreground.dark.green + 'This text will be printed in dark green color' + c.end);

console.log(c.background.dark.blue + 'This text will be printed with dark blue background color' + c.end);
```

You can also have combinations of background and foreground colors like so:
```javascript
console.log(c.background.light.yellow + c.foreground.dark.blue + 'This text will be blue with yellow background color' + c.end);
```

### You can use this set of shortcuts for having a better syntax:
- b = background
- f = foreground
- l = light
- d = dark
- e = end

So in practice, the above examples can be shortted as follow:
```javascript
console.log(c.f.l.red + 'This text will be printed in light red color' + c.e);

console.log(c.f.d.green + 'This text will be printed in dark green color' + c.e);

console.log(c.b.d.blue + 'This text will be printed with dark blue background color' + c.e);

console.log(c.b.l.yellow + c.f.d.blue + 'This text will be blue with yellow background color' + c.e);
```

### Supported colors:
- gray
- red
- green
- yellow
- blue
- pink
- cyan
- white

### Note
The following library was tested with Windows CMD.exe.
Colors might look different from one console to another since the console colors are many time can be configured by the user...
