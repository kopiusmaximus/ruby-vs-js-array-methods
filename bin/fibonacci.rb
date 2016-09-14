fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# sum of all the elements of the fibs array
sum_fibs = fibs.reduce(0, :+)

puts "The sum of the first ten fibonacci numbers is #{sum_fibs}"

# product of all fibs excluding zero

prod_fibs = fibs.reject(&:zero?).reduce(:*)

puts "The product of the first ten fibonacci numbers, excluding zero, is #{prod_fibs}"

# sum of the odd elements of the fibs array

sum_odd = fibs.select(&:odd?).reduce(:+)

puts "The sum of the first five odd fibonacci numbers, is #{sum_odd}"

# product of even fibs excluding zero

prod_even = fibs.reject(&:zero?).select(&:even?).reduce(:*)

puts "The product of the first five even fibonacci numbers, excluding zero, is #{prod_even}"
