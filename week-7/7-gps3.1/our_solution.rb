# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1. Jesson Foo
# 2. Yohan Yi
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to create an electronic grocery list application
# As a user, I want to be able add an item to my list
# As a user, I want to be able to remove an item on the list
# As a user, I want to be able to view my groceries list 
# As a user, I want to be able to see if item is in your groceries list
 
# Pseudocode

 
 
# Your fabulous code goes here....
# create class groceries
class GroceryList
  #initialize the instance of the class
  def initialize(array=[])
    #create an instance of the arguments passed to the initialize method
    @array = array
  end
  #create an add method that takes a string
  def add(item)
    #push item into the array
    @array << item
    view
  end
  #create view list method that takes no arguments 
  def view
  	p "Here is your grocery list: " + @array.join(', ')
    @array
  end
  #create an method to see if an item is on the list
  def checklist(item)
    @array.include?(item)
  end
  
  def remove(item)
    return p "#{item} not on list" if checklist(item) ?!
    @array.delete(item)
    view
  end
  def num_of_items
    @array.count
  end
end






# DRIVER CODE GOES HERE. 
def assert(num)
  raise "Assertion test number #{num} failed" unless yield
  puts "Assertion test #{num} passed"
end

groceries_list = %w(apple banana chips milk egg)
gl = GroceryList.new(groceries_list)

assert(1){gl.class == GroceryList}
assert(2){gl.num_of_items == 5}
gl.add('strawberries')
assert(3){gl.num_of_items == 6}
assert(4){gl.checklist('strawberries') == true}
gl.remove('apple')
assert(5){gl.checklist('apple') == false}
assert(6){gl.view == ['banana', 'chips', 'milk', 'egg', 'strawberries']}
gl.remove('candy')
