puzzle_inputs = File.readlines('01-puzzle-input.csv').map { |element| element.to_i }
results = []
arr = []

puzzle_inputs.each do |input|
  if input == 0
    results << arr.sum
    arr = []
  end
  arr << input
end

puts results.max

# part 2
puts results.sort.pop(3).sum
