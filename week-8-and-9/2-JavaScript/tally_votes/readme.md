[Week 8 and 9 Home](../../)

#U3.W8-9: Tally Votes in JavaScript

## Learning Competencies
- Define local variables in JavaScript
- Define functions in JavaScript 
- Create, add properties to, delete properties from, and access values in object literals

## Summary:

In this challenge you will determine the winners of a class election.  You will be provided with three JavaScript objects: `votes`, `voteCount`, and `officers`.

```javascript
var votes = {
  "Alex": {
    president: "Bob",
    vicePresident: "Devin",
    secretary: "Gail",
    treasurer: "Kerry"
  },
  // continuing on for each voter ...
}

var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}
```

Your task is to go through `votes` and record each student's votes in `voteCount`.  Once the votes have been tallied, assign the winners in `officers`.

For this challenge, you will want to be familiar with `for ... in ...` [looping over an object's properties](http://stackoverflow.com/questions/921789/how-to-loop-through-javascript-object-literal-with-objects-as-members) as well as [bracket notation and accessing nested properties](http://www.sitepoint.com/back-to-basics-javascript-object-syntax/).

## Release 0: Run the Tests

## Release 1: Write [pseudocode](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/pseudocode.md) for each failing test

## Release 2: Write an [initial solution](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/initial-solution.md) to pass each test

## Release 3: [Refactor](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/refactoring.md)

## Release 4: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)

