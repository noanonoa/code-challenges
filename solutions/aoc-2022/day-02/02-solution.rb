# A: rock = 1 point
# B: paper = 2 points
# C: scissors = 3 points
#
# X: rock = 1 point
# Y: paper = 2 points
# Z: scissors = 3 points

# plus the score for the outcome of the round.
#
# 0 for loss
# 3 for draw
# 6 for win
#
# For example:
#
# A Y => rock vs paper
# B X => paper vs rock
# C Z => scissors vs scissors
#
# 1st round: win  = (6) win  + (2) paper    =  8 points
# 2nd round: loss = (0) loss + (1) rock     =  1 point
# 3rd round: draw = (3) draw + (3) scissors =  6 points
#
#                               Total Score = 15 points
#
puzzle_inputs = File.readlines('02-puzzle-input.csv').map { |input| input[0] + input[2] }
winning_combo = ["AY", "BZ", "CX"]
draw_combo = ["AX", "BY", "CZ"]
lose_combo = ["AZ", "BX", "CY"]

win_rounds = 0
draw_rounds = 0
points = 0

puzzle_inputs.each do |input|
  player_choice = input[1]

  if winning_combo.include?(input)
    win_rounds += 1
  elsif draw_combo.include?(input)
    draw_rounds += 1
  end

  if player_choice == "X"
    points += 1
  elsif player_choice == "Y"
    points += 2
  else
    points += 3
  end
end

total_score = (win_rounds * 6) + (draw_rounds * 3) + points
puts "part 1: #{total_score}"

# part two
# Now [X,Y,Z] = [lose, draw, win]
#
# example from part 1:
# A Y => Rock     vs ? = draw => Rock (X) points: 1(X) + 3(D) = 4
# B X => Paper    vs ? = lose => Rock (X) points: 1(X) + 0(L) = 1
# C Z => Scissors vs ? = win  => Rock (X) points: 1(X) + 3(6) = 7
#
#                                                  Total Score= 12
#
winning_combo = ["AZ", "BZ", "CZ"]
draw_combo = ["AY", "BY", "CY"]
lose_combo = ["AX", "BX", "CX"]

win_rounds = 0
draw_rounds = 0
points = 0

puzzle_inputs.each do |input|
  elf_choice, round_outcome = input.split('')

  # win against elf
  if winning_combo.include?(input)
    win_rounds += 1
    case elf_choice
    when "A"
      points += 2
    when "B"
      points += 3
    else
      points += 1
    end
  # draw against elf
  elsif draw_combo.include?(input)
    draw_rounds += 1
    case elf_choice
    when "A"
      points += 1
    when "B"
      points += 2
    else
      points += 3
    end
  # lose against elf
  else
    case elf_choice
    when "A"
      points += 3
    when "B"
      points += 1
    else
      points += 2
    end
  end
end

total_score = (win_rounds * 6) + (draw_rounds * 3) + points
puts "part 2: #{total_score}"
