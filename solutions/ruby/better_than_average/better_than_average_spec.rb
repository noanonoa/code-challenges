require "./better_than_average"

RSpec.describe "Kata" do
  describe ".better_than_average" do
    context "when points is higher than average" do
      it "[2, 3], 5 returns True" do
        expect(Kata.better_than_average([2,3], 5)).to be_truthy
      end

      it "[100, 40, 34, 57, 29, 72, 57, 88], 75 returns True" do
        expect(Kata.better_than_average([100, 40, 34, 57, 29, 72, 57, 88], 75)).to be_truthy
      end
    end

    context "when points is lower than average" do
      it "[41, 75, 72, 56, 80, 82, 81, 33], 50 returns False" do
        expect(Kata.better_than_average([41, 75, 72, 56, 80, 82, 81, 33], 50)).to be_falsy
      end

      it "[29, 55, 74, 60, 11, 90, 67, 28], 21 returns False" do
        expect(Kata.better_than_average([29, 55, 74, 60, 11, 90, 67, 28], 21)).to be_falsy
      end
    end
  end
end

