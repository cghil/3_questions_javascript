# 3 Questions From John Lin

1. Write a function that accepts an array and returns a new array containing only the elements with a numerical id and a path that ends in .txt, sorted in by their id (numerically descending).

```
/* <example> */
var input_arr = [
	{id: 15, path: 'foo.txt'},
	{id: -1, path: 'bar.1.txt'},
	{id: 'undefined', path: null},
	{path: 'foo.bar.txt'},
	{id: 3, path: 'mine.txt'},
	{id: 12.2, path: 'yours.txt.diff'}
];
```

2. Write code that traverses through an array and finds the average of all of the numbers contained within. The supplied array can contain recursively nested arrays to an unknown depth.

```
// var exampleArr = [ 1, 3, 5, [2, 8, -14, 'abc', [1, 1, 5, []]]]
// the average of all numbers in exampleArr is 1.3333
```

3. Create an Automobile object that has the methods `accelerate` and `brake`, and the properties `topSpeed` (default value: 100) and `turnRadius` (default value: 20). Next, create a Car object that inherits from Automobile but overrides the `topSpeed` property (setting it to 120) and override the `brake` method in such a way that it invokes Automobile’s `brake` method followed by it’s own `skid` method. Create an instance of both Automobile and Car.
