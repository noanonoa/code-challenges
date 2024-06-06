require "./sum_of_multiples"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#sum_of_multiples" do
    context "when given positive number" do
      it "10 => 3 + 5 + 6 + 9 = 23" do
        expect(subject.sum_of_multiples(10)).to eq(23)
      end

      it "20 => 3 + 5 + 6 + 9 + 12 + 15 + 18 = 78" do
        expect(subject.sum_of_multiples(20)).to eq(78)
      end

      it "200 => 9168" do
        expect(subject.sum_of_multiples(200)).to eq(9168)
      end
    end

    context "when given negative number" do
      it "returns zero" do
        expect(subject.sum_of_multiples(-10)).to eq(0)
      end
    end

    context "when given zero" do
      it "returns zero" do
        expect(subject.sum_of_multiples(0)).to eq(0)
      end
    end
  end
end

