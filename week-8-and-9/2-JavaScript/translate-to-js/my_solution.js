// U3.W8-9: fizzbuzz


// I worked on this challenge [by myself, with: ].

// 2. Pseudocode



// 3. Initial Solution

// def super_fizzbuzz(array)
// 	array.map{|i|
// 		case 
// 		when i % 15 == 0
// 			"FizzBuzz"
// 		when i % 5 == 0
// 			"Buzz"
// 		when i % 3 == 0
// 			"Fizz"
// 		else
// 			i
// 		end
// 	}
// end




// 4. Refactored Solution

fizzTest = function(list) {
	for (var i=0; i < list.length; i++){
		if (list[i]%15 == 0) {
			console.log("FizzBuzz")
		}
		else if (list[i] % 5 == 0){
			console.log("Buzz")
		}
		else if (list[i]%3 == 0){
			console.log("Fizz")
		}
		else {
			console.log(list[i])
		}
	}
}



// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
fjzzTest([1,2,3])
fizzTest([1,2,5])
fizzTest([1,2,3,4,5,15,30,1])




// 5. Reflection 