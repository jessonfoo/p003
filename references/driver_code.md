## Driver Test Code with Ruby

As a student at DBC, you've probably encountered a few different ways of writing test code.

1) Test code that includes no expectations 
```ruby
separate_comma(1000)
```

2) Test code that includes expectations that are commented out:
```ruby
separate_comma(1000)    # => "1,000"
```

3) Test code that tests the expectation and outputs the results
```ruby 
puts separate_comma(1000) == "1,000"
```

###What format of test code is best?
At this point, we should all be clear that option 1 is not optimal becuase you have to remember exactly what the expected output is. That's a lot of work, and it's also what computers are good for! Always try to keep others and your future self in mind when programming. Other programmers won't know what the output of a method should be. Including some form of an expectation is best practice.

Option 2 can be helpful when you are initially creating and debugging your code. Seeing the actual output of the tests is much more helpful than seeing a `true` or `false`.  However, after your code is working correctly and passing your tests, you shouldn't leave the expectation in a comment. Imagine if you were another programmer and you ran this test code. You'd see (in this case) a long list of numbers, and it would be unclear whether the code was actually working correctly.

```shell
> ruby separate_commas.rb
7
883
1,233
89,434
100,334,555
1,893,320,493,894,578
```

Option 3 helps dramatically.  When running this format of test code, all the tests throw `true` or `false` flags.  Another programmer immediately knows if the program is correctly working.  And a quick look at the test code makes the input and output clear.

```ruby
> ruby separate_commas.rb
true
true
true
true
true
true
```

###An optimal test code format

There are, of course, further options of formatting test code that can give even more clarity.  Test code can be written more robustly to answer questions like:
* "What is the actual test that is passing or failing?"  
* "What is the context of the test?"
* "What did the code return if it failed?"
* "If there was an error when the code ran, what was it?"

In a future challenge, try writing some test code that answers some of these questions!  While it's not mandatory for your solutions, (only Option 3 is at this point), investigating how to create a good testing suite is a very worthwhile endeavor.

Later, when we dealve into [Rspec](http://en.wikipedia.org/wiki/RSpec), you'll understand just how much work went into making the industry standard testing suite for ruby and rails.