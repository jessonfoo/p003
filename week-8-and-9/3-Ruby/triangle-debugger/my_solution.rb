# U3.W8-9: Triangle Debugger


# I worked on this challenge [by myself, with: ].


# 1. Original Solution

# def valid_triangle?(a, b, c)
# 	sum = 0
# 	if a != 0 || b != 0 || c != 0
# 		if a >= b
# 			largest = a
# 			sum += b
# 		else largest = b
# 			sum += a
# 		end
# 		if c > largest
# 			sum += largest
# 			largest = c
# 		else sum += c
# 		end
# 		if sum > largest
# 			return "true"
# 		else return "false"
# 		end
# 		return "false"
# 	end
# end


# 2. Answer the question for each bug

# --- Bug 1 ---
# * what is the exact description of the error?
#
# wrong number of arguments: 3 for 4
#
# * what is the exact line number the error is appearing?
#
#line 9
#
# * before you fix the bug, what do you think is causing the error?
#
#the code expects 4 arguments but is recieving only 3


# --- Bug 2 ---
# * what is the exact description of the error?
#
# nomethoderror
#
# * what is the exact line number the error is appearing?
#
# line 15
#
# * before you fix the bug, what do you think is causing the error?
#
# sum is undefined
#

# --- Bug 3 ---
# * what is the exact description of the error?
#
# none
#
# * what is the exact line number the error is appearing?
#
# none
#
# * before you fix the bug, what do you think is causing the error?
#
# none
#

# 3. Refactored Solution (Comment the other code to run this)
def valid_triangle?(a,b,c)
  triangle = [a,b,c,]
  return false if triangle.sort!.length != 3
  return false if (triangle[0] + triangle[1]) <= triangle[2]
  true
end




# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
p valid_triangle?(0, 2, 3) == false 
p valid_triangle?(2, 2, 2)== true 
p valid_triangle?(3, 3, 56) == false
p valid_triangle?(0, 0, 0) == false 
p valid_triangle?(1, 1, 0.01) == true 





# 5. Reflection 