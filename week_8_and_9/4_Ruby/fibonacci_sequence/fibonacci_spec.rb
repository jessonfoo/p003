require_relative "my_solution.rb"

def random_fibonacci
   [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946].sample
end

describe "is_fibonacci?" do
   it "returns true when a integer is one number of the Fibonacci sequence" do
      is_fibonacci?(random_fibonacci).should be_true
   end
   it "returns true with a large Fibonacci number" do
      is_fibonacci?(8670007398507948658051921).should be_true
   end
   it "returns false when it's not in the Fibonacci seqence" do
      is_fibonacci?(random_fibonacci+100).should be_false
   end
   it "returns false on large non-Fibonacci numbers" do
      is_fibonacci?(927372692193078999171).should be_false
   end
end