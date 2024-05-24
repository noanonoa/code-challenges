class Kata
  def sum_of_minimums(nested_list)
    sum = 0
    nested_list.each do |row|
      sum += row.min
    end

    sum
  end

  def refactor_sum_of_minimums(nested_list)
    nested_list.sum(&:min)
  end
end

