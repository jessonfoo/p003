[Week 8 and 9 Home](../../)

#U3.W8-9: Implement FizzBuzz (Super Edition)

## Learning Competencies
- Use strings, integers, arrays, and hashes
- Use if/else statements, string methods, while/until loops, Enumerable#each methods
- Translate driver test code into assert statements

## Summary:

FizzBuzz is a classic programming exercise (and fairly common interview question).

The usual example asks the developer to write a program which prints out each number from 1 to 100.  But for multiples of 3 print 'Fizz' instead of the number and for multiples of 5 print 'Buzz'.  For numbers which are multiples of both 3 and 5 print 'FizzBuzz'.

This exercise has a little twist.  Write a method called `super_fizzbuzz` which takes as its input an `Array` of integers.

It should return a "fizzbuzzed" `Array`, i.e., the array is identical to the input with the following substitutions:

1. Multiples of `3` should be replaced with the string `"Fizz"`
2. Multiples of `5` should be replaced with the string `"Buzz"`
3. Multiples of `15` should be replaced with the string `"FizzBuzz"`
```

For example:

```ruby
super_fizzbuzz([1,2,3])  # => [1, 2, "Fizz"]
super_fizzbuzz([1,2,5])  # => [1, 2, "Buzz"]
super_fizzbuzz([1,2,15]) # => [1, 2, "FizzBuzz"]

super_fizzbuzz([30, 9, 20, 1]) # => ["FizzBuzz", "Fizz", "Buzz", 1]
```

## Release 0: Run the [Tests](fizz_buzz_spec.rb)

## Release 1: Translate Rspec
Translate Rspec into Assert Statements or [Driver Test Code](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/driver-code.md)

## Release 2: Write [Pseudocode](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/pseudocode.md)

## Release 3: Write your [initial solution](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/initial-solution.md)

## Release 4: [Refactor](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/refactoring.md)

## Release 5: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)

## Release 6: [Review](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/review.md)



