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

