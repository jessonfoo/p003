# U3.W8-9: Implement a Rectangle Class


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution
# class Rectangle
#   attr_accessor :width, :height, :area

#   def initialize(width, height)
#     @width  = width
#     @height = height
#   end

#   def area
#   	@area = @width*@height
#   	@area
#   end
#   def perimeter
#   	@perimeter = 2*(@width+@height)
#   end
#   def diagonal
#   	Math.hypot(@width,@height)
#   end
#   def square?
#   	return true if @width == @height
#   end

#   def ==(other)
#     (other.width  == self.width && other.height == self.height ) ||
#     (other.height == self.width && other.width  == self.height )
#   end
# end




# 4. Refactored Solution
class Rectangle
  attr_accessor :width, :height

  def initialize(width, height)
    @width  = width
    @height = height
  end

  def area
    @area = @width*@height
  end
  def perimeter
    @perimeter = 2*(@width+@height)
  end
  def diagonal
    Math.hypot(@width,@height)
  end
  def square?
    @width == @height
  end
end


# 1. DRIVER TESTS GO BELOW THIS LINE
rec = Rectangle.new(10,20)
square = Rectangle.new(20,20)
p rec.area == 200
p rec.perimeter == 60
p rec.diagonal == 22.360679774997898

p rec.area == 200
p square.area == 400
p rec.perimeter == 60
p square.perimeter == 80
p rec.diagonal == 22.360679774997898
p square.diagonal == 28.284271247461902
p rec.square? == false
p square.square? == true

# 5. Reflection 
# this challenge was very straight forward. defining each method was very simple. The only thing that was new was 
# incorporating the Math module. I thought it was a fairly easy challenge compared to some of the other ones.