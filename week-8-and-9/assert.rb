def assert(num)
  raise "Assertion test number #{num} failed" unless yield
  puts "Assertion test #{num} passed"
end