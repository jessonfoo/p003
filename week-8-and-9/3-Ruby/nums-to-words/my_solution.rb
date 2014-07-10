require_relative '../../assert.rb'
# U3.W8-9 Numbers to English Words


# I worked on this challenge [by myself, with ].

# 2. Pseudocode



# 3. Initial Solution

# 	set1 = ["","one","two","three","four","five","six","seven",
#          "eight","nine","ten","eleven","twelve","thirteen",
#          "fourteen","fifteen","sixteen","seventeen","eighteen",
#          "nineteen"]
#     set2 = ["","","twenty","thirty","forty","fifty","sixty",
#          "seventy","eighty","ninety"]
#     set3 = ["","hundred", "thousand","million"]

#     thousands = (int/1000)
#     hundreds = ((int%1000) / 100)
#     tens = ((int % 100) / 10)
#     ones = int % 10
#     string = ""



#     return 'zero' if int == 0


#     if thousands > 0
#     	  string += set1[thousands] + " thousand " if thousands != 0
#         string += set1[hundreds] + " hundred" if hundreds != 0
#         string +=" and " if tens != 0 || ones != 0 
#     end

#     string = string + set1[tens*10+ones] if tens < 2
#     string += set2[tens]
#     string = string + " " + set1[ones] if ones != 0         
#  	p string
# end
# 4. Refactored Solution

def n_to_s(int)

	set1 = ["","one","two","three","four","five","six","seven",
			"eight","nine","ten","eleven","twelve","thirteen",
			"fourteen","fifteen","sixteen","seventeen","eighteen",
			"nineteen"]

	set2 = ["","","twenty","thirty","forty","fifty","sixty",
			"seventy","eighty","ninety"]


	thousands = (int/1000)
	hundreds = ((int%1000) / 100)
	tens = ((int % 100) / 10)
	ones = int % 10
	string = ""
	string += set1[thousands] + " thousand " if thousands != 0 if thousands > 0
	string += set1[hundreds] + " hundred " if hundreds != 0
	# string +=" and " if tens != 0 || ones != 0 
	string = string + set1[tens*10+ones] if tens < 2
	string += set2[tens]
	string = string + " " + set1[ones] if ones != 0     
	string << 'zero' if int == 0    
	p string
end

# def s_to_n(str)
# 	n = []
# 	s = str.split(' ')

# 	for i in s.length
# 		for x in set1.length
# 			x.to_s >> n if i == set1[x]
# 		end
# 		for y in set2.buf.length
# 			y.to_s >> n if i == set2[y]
# 		end
# 	end
# 	p n
# end




# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
a = n_to_s(rand(9999))

# b = rand(9999)
# c = rand(9999)
# d = rand(9999)
# assert(1,'expected "zero"'){n_to_s(0) == "zero"}
# assert(2,'number not converted to string'){n_to_s(a).class == String}
# n_to_s(b).to
# s_to_n(a)
numstring(a)



# 5. Reflection 