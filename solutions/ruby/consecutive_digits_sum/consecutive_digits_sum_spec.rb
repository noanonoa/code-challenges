require "./consecutive_digits_sum"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#consecutive_ducks" do
    context "when integer can be expressed as a sum of two or more consecutive positive numbers" do
      it "consecutive_ducks(9) returns true" do
        expect(subject.consecutive_ducks(9)).to be_truthy
      end

      it "consecutive_ducks(42) returns true" do
        expect(subject.consecutive_ducks(42)).to be_truthy
      end
    end

    context "when integer cannot be expressed as a sum of two or more consecutive positive numbers" do
      it "consecutive_ducks(64) returns false" do
        expect(subject.consecutive_ducks(64)).to be_falsey
      end

      it "consecutive_ducks(16) returns false" do
        expect(subject.consecutive_ducks(16)).to be_falsey
      end
    end
  end
end

