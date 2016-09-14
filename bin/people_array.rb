require_relative '../lib/people.rb'

people = People.new.people

puts "Total people: #{people.count}\n"

females = people.select { |person| person.gender == 'f' }

puts "Total females: #{females.count}"

males = people.select { |person| person.gender == 'm' }

puts "Total males: #{males.count}"

over30 = people.select { |person| person.age > 30 }

puts "Total people over 30: #{over30.count}"

under10 = people.select { |person| person.age < 10 }

puts "Total people under 10: #{under10.count}"

between10and30 = people.select { |person| person.age < 10 }

puts "Total people under 10: #{under10.count}"
