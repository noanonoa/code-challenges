require "./find_odd_int"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#find_odd_int" do
    context "given an array of integers" do
      context "returns the integer that appears an odd number of times" do
        it "[7] => 7" do
          expect(subject.find_odd_int([7])).to eq(7)
        end

        it "[0] => 0" do
          expect(subject.find_odd_int([0])).to eq(0)
        end

        it "[1,1,2] => 2" do
          expect(subject.find_odd_int([1,1,2])).to eq(2)
        end

        it "[0,1,0,1,0] => 0" do
          expect(subject.find_odd_int([0,1,0,1,0])).to eq(0)
        end

        it "[1,2,2,3,3,3,4,3,3,3,2,2,1] => 4" do
          expect(subject.find_odd_int([1,2,2,3,3,3,4,3,3,3,2,2,1])).to eq(4)
        end
      end
    end
  end
end

