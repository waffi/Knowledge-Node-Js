
var math = require('./MathModule.js');
var extended = require('./ExtendedModule.js');

// Simple Module

var result = math.AddNumber(1,2);
console.log(result);

// Extended Module

var sample = new extended.Sample();
sample.ExtendedSample()
