# U3.W8-9: Implement a Rectangle Class


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution
class Rectangle
  attr_accessor :width, :height, :area

  def initialize(width, height)
    @width  = width
    @height = height
  end

  def area
  	@area = @width*@height
  	@area
  end
  def perimeter
  	@perimeter = 2*(@width+@height)
  end
  def diagonal
  	Math.hypot(@width,@height)
  end
  def square?
  	return true if @width == @height
  end

  def ==(other)
    (other.width  == self.width && other.height == self.height ) ||
    (other.height == self.width && other.width  == self.height )
  end
end




# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE






# 5. Reflection 