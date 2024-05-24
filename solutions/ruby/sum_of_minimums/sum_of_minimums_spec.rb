require "./sum_of_minimums"

RSpec.describe Kata do
  subject { Kata.new }

  let(:nested_list) { [[1, 2, 3],
                       [4, 5, 6],
                       [7, 8, 9]] }

  describe "#sum_of_minimums" do
    it "returns the sum of the minimums in each nested list" do
      expect(subject.sum_of_minimums(nested_list)).to eq(12)
    end
  end
end

