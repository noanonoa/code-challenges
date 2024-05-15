class Kata
  BAD_COLOR_CODE = "nopqrstuvwxyz".freeze

  def printer_error(s)
    result = s.each_char.filter { |s| BAD_COLOR_CODE.include? s }

    "#{result.size}/#{s.size}"
  end
end

