class Kata
  def find_odd_int(integers)
    occurrences = {}

    integers.each do |integer|
      occurrences[integer] = occurrences[integer].nil? ? 1 : occurrences[integer] + 1
    end

    occurrences.filter do |key|
      return key if occurrences[key].odd?
    end
  end
end

