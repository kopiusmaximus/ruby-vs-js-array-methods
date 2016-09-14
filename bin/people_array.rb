require_relative '../lib/people.rb'

people = People.new.people

# p "Total people: #{people.count}" # different!
puts "Total people: #{people.count}"

females = people.select { |person| person.gender == 'f' }

puts "Total females: #{females.count}"

males = people.select { |person| person.gender == 'm' }

puts "Total males: #{males.count}"

# all the people older than me

older = people.select { |person| person.age > 30 }

puts "Number of people older than me: #{older.count}"

# all the people younger than me

younger = people.select { |person| person.age < 30 }

puts "Number of people younger than me: #{younger.count}"

# all the people whose first and last names begin with the same letter

alliteratives = people.select do |person|
  person.given_name[0] == person.surname[0]
end

puts "Number of alliteratives: #{alliteratives.count}"

# average age of all people

average_age = people.reduce(0) do |sum, person|
  sum + person.age
end / people.count.to_f

puts "Average age of all people: #{average_age}"
