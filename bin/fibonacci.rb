fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# sum of all the elements of the fibs array
sum_fibs = fibs.reduce(0, :+)

puts "The sum of the first ten fibonacci numbers is #{sum_fibs}"

