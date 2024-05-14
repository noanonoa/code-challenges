module Kata
  class << self
    def better_than_average(arr, points)
      points > average(arr)
    end

  private

    def average(arr)
      arr.sum / arr.size
    end
  end
end

