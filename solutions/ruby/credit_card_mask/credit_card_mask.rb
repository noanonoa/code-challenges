class Kata
  def maskify(card_number="")
    return "" if card_number.empty?
    return card_number if card_number.size <= 4

    last_four_digits = card_number.chars.last(4).join
    masked_digits = "#" * (card_number.size - 4)

    masked_digits + last_four_digits
  end
end

