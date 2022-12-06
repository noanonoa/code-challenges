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

puzzle_inputs = File.readlines('02-puzzle-input.csv').map { |input| input[0] + input[2] }

WINNING_COMBO = ["AY", "BZ", "CX"]
DRAW_COMBO = ["AX", "BY", "CZ"]
LOSE_COMBO = ["AZ", "BX", "CY"]

win_rounds = 0
draw_rounds = 0
points = 0

puzzle_inputs.each do |input|
  player_choice = input[1]

  if WINNING_COMBO.include?(input)
    win_rounds += 1
  elsif DRAW_COMBO.include?(input)
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
puts total_score

