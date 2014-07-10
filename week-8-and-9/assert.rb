def assert(num, message)
  raise "Assertion test number #{num} failed" unless yield
  puts "#{num}. passed"
end