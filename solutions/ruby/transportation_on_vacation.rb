# After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
# You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
# Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
# Write a code that gives out the total amount for different days(d).

def rental_car_cost(days)
  daily_rate = 40
  discount = 0
  discount = 20 if days >= 3
  discount = 50 if days >= 7
  days * daily_rate - discount
end

puts rental_car_cost(1)
puts rental_car_cost(2)
puts rental_car_cost(3)
puts rental_car_cost(7)
puts rental_car_cost(10)