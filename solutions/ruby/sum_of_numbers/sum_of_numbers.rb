class Kata
  def sum_of_numbers(a, b)
    return a if a.equal?(b)

    result = 0
    min = a < b ? a : b
    max = a > b ? a : b
    min.upto(max) do |n|
      result += n
    end

    result
  end

  def refactored_sum_of_numbers(a, b)
    a < b ? (a..b).reduce(:+) : (b..a).reduce(:+)
  end
end

