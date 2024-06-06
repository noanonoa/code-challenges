class Kata
  def sum_of_multiples(number)
    return 0 unless number.positive?

    multiples = (1...number).filter do |number|
      multiple_of_three?(number) || multiple_of_five?(number)
    end

    multiples.sum
  end

  def multiple_of_three?(number)
    number % 3 == 0
  end

  def multiple_of_five?(number)
    number % 5 == 0
  end
end
