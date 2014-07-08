require_relative "../../assert.rb"
# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
# create a way to add the last two numbers of an array together
# create a loop that stores a variable containing the next fibonacci number and add that number to the end of the array
# exit the loop when the last number in the array is greater than the argument
# check if the argument is included in the array


# 3. Initial Solution

# def is_fibonacci?(num)
# 	fib = [0,1]
# 	while fib.last < num
# 		next_fib = fib[-1] + fib[-2]
# 		fib << next_fib
# 	end
# 	fib.include? num
# end





# 4. Refactored Solution


def is_fibonacci?(num)
   fib = [0,1]
   while num > fib.last
      next_fib = fib[-1] + fib[-2]
      fib << next_fib
   end
   fib.include? num
end





# 1. DRIVER TESTS GO BELOW THIS LINE
def random_fibonacci
   [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946].sample
end
assert(1){is_fibonacci?(random_fibonacci) == true}
assert(2){is_fibonacci?(8670007398507948658051921) == true}
assert(3){is_fibonacci?(random_fibonacci+100) == false}
assert(4){is_fibonacci?(927372692193078999171) == false}



# 5. Reflection 
# This challenge caused a lot of trouble because the rspec tests were not passing. I was stuck on this problem
# for a good deal of time because the rspec needed to be changed. I felt like it was a waste of time since 
# my translated driver tests worked, but the only thing that caused me to lag on this problem was the rspec tests.
