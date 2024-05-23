class Kata
  def simple_string_reversal(str)
    result = str.delete(" ").reverse
    spaces = str.chars.filter_map.with_index do |char, index|
      index if char == " "
    end

    spaces.each do |space|
      result.insert(space, " ")
    end

    result
  end
end

