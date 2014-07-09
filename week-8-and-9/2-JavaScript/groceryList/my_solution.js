
// U3.W8-9: 


// I worked on this challenge with Yohan Yi.

// 2. Pseudocode

// As a user, I want to create an electronic grocery list application
// As a user, I want to be able add an item to my list
// As a user, I want to be able to remove an item on the list
// As a user, I want to be able to view my groceries list 
// As a user, I want to be able to see if item is in your groceries list
 

// create class groceries
// create an instance of the arguments passed to the initialize method
// create an add method that takes a string
// push item into the array
// create view list method that takes no arguments 
// create an method to see if an item is on the list
list= ['banana', 'chips', 'milk', 'egg', 'strawberries']
// 3. Initial Solution



// gl = {
// add:function(item){list.push(item)},
// view:function(){console.log('Here is your grocery list: ' + list);return list},
// find:function(item){for(i=0; i<list.length; i++){if(item === list[i]){return i}}console.log(item +' is not in your grocery list.')},
// remove:function(item){list.splice(gl.find(item),1);gl.view},
// total:function(){console.log(list.length)}
// }



// 4. Refactored Solution

gl = {
add:function(item){list.push(item)},
view:function(){console.log('Here is your grocery list: ' + list);return list},
find:function(item){for(i=0; i<list.length; i++){if(item === list[i]){return i}}console.log(item +' is not in your grocery list.')},
remove:function(item){list.splice(gl.find(item),1);gl.view},
total:function(){console.log(list.length)}
}





// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
	list.length === 5,
	"view function error\n", 
	'1. ')
gl.add('bagels')
assert(
	list.length === 6,
	"incorrect list length\n",
	'2. ')
assert(gl.find('bagels') === 5,
	"find error\n",
	'3. ')







// 5. Reflection 
I enjoyed this challenge a lot because it made me realize that creating a class is not really creating a class at all.
I found that JS doesnt really have classes, so creating a class is more like defining an object. I thought the hardest part 
of this challenge was creating assert statements for the driver code. Also, I did not really know how I could refactor my code.