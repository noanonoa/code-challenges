class Kata
  def filter_list(list)
    list.reject { |element| element.is_a? String }
  end
end

