# fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# calculates the sum of elements of fibs

# could we do it this way?
# sum_fibs = fibs.reduce(0, :+)

# From documentation:
# reduce(initial) { |memo, obj| block } => obj

fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

sum_fibs = fibs.reduce(0) { |sum, fib| sum + fib }

puts "The sum of the first ten fibonacci numbers is #{sum_fibs}"

# calculates the product of elements of fibs (excluding zero)

fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# product_fibs = fibs[1..-1].reduce(1) { |product, fib| product * fib }
product_fibs = fibs.reject(&:zero?).reduce(:*)

puts "The product of the first ten fibonacci numbers is #{product_fibs}"

# calculates the sum of the odd elements of fibs

fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

fibs_odds = fibs.reject { |num| num.even? }

sum_odds = fibs_odds.reduce(0) { |sum, fib| sum + fib }

puts "The sum of the odd values from the first ten fibonacci numbers is #{sum_odds}"

# => 44
