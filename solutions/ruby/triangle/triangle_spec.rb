require "./triangle"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#is_triangle" do
    context "when triangle surface is greater than 0" do
      it "1,2,2 returns true" do
        expect(subject.is_triangle(1, 2, 2)).to be_truthy
      end

      it "4,2,3 returns true" do
        expect(subject.is_triangle(4, 2, 3)).to be_truthy
      end

      it "2,2,2 returns true" do
        expect(subject.is_triangle(2, 2, 2)).to be_truthy
      end
    end

    context "when triangle surface is less than 0" do
      it "1,2,3 returns false" do
        expect(subject.is_triangle(1, 2, 3)).to be_falsey
      end

      it "-5,1,3 returns false" do
        expect(subject.is_triangle(-5, 1, 3)).to be_falsey
      end

      it "0,2,3 returns false" do
        expect(subject.is_triangle(0, 2, 3)).to be_falsey
      end

      it "1,2,9 returns false" do
        expect(subject.is_triangle(1, 2, 9)).to be_falsey
      end
    end
  end
end

