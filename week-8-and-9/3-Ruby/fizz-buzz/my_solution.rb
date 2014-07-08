require_relative "../../assert.rb"
# U3.W8-9: 


# I worked on this challenge [by myself, with: ].


# 2. Pseudocode
# take input as array
# multiples of 3 prints 'Fizz'
# multiples of 5 prints 'Buzz'
# multiples of 15 prints 'FizzBuzz'


# 3. Initial Solution

# def super_fizzbuzz(array)
# 	array.map{|i|
# 		case 
# 		when i % 15 == 0
# 		i = 'FizzBuzz'
# 		when i % 5 == 0
# 		i ='Buzz'
# 		when i % 3 == 0
# 		i = "Fizz"
# 		else
# 			i
# 		end
# 	}
# end




# 4. Refactored Solution

def super_fizzbuzz(array)
	array.map{|i|
		case 
		when i % 15 == 0
			"FizzBuzz"
		when i % 5 == 0
			"Buzz"
		when i % 3 == 0
			"Fizz"
		else
			i
		end
	}
end




# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

assert(1){super_fizzbuzz([1,2,3]) == [1, 2, "Fizz"]}
assert(2){super_fizzbuzz([1,2,5])  == [1, 2, "Buzz"]}
assert(3){super_fizzbuzz([1,2,15])  == [1, 2, "FizzBuzz"]}




# 5. Reflection 
# this challenge was challenging in  a different way from other challenges in the sense 
# that I tried making my code more readable this time instead of just trying to
# make it as short as possible. Iinitally I started out with if else statements 
# but they became to confusing so I used map and case when statemtents.