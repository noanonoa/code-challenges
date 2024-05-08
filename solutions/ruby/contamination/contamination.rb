class Kata
  def self.contamination(text, character)
    return "" if text.empty? || character.empty?

    result = ""
    1.upto(text.length) { result += character }

    result
  end
end

