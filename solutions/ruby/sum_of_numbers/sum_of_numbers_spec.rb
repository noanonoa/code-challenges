require "./sum_of_numbers"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#sum_of_numbers" do
    context "when arguments are equal to each other" do
      it "returns the number equal to the arguments" do
        expect(subject.sum_of_numbers(4, 4)).to eq(4)
      end
    end

    context "when arguments are not equal to each other" do
      it "returns the sum of all the integers between and including them" do
        expect(subject.sum_of_numbers(1, 4)).to eq(10)
      end

      it "(1, 0) --> 1 (1 + 0 = 1)" do
        expect(subject.sum_of_numbers(1, 0)).to eq(1)
      end

      it "(1, 2) --> 3 (1 + 2 = 3)" do
        expect(subject.sum_of_numbers(1, 2)).to eq(3)
      end

      it "(0, 1) --> 1 (0 + 1 = 1)" do
        expect(subject.sum_of_numbers(0, 1)).to eq(1)
      end

      it "(-1, 0) --> -1 (-1 + 0 = -1)" do
        expect(subject.sum_of_numbers(-1, 0)).to eq(-1)
      end

      it "(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)" do
        expect(subject.sum_of_numbers(-1, 2)).to eq(2)
      end
    end
  end
end

