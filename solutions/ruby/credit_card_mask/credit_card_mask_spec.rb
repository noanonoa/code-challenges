require "./credit_card_mask"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#maskify" do
    context "when 16-digits" do
      it "masks the first 12-digits" do
        expect(subject.maskify("4556364607935616")).to eq("############5616")
      end
    end

    context "when less than 16-digits" do
      context "and less than 4-digits" do
        it "does not mask any digit" do
          expect(subject.maskify("1")).to eq("1")
        end
      end

      context "and greater than 4-digits" do
        it "masks every digit except the last 4" do
          expect(subject.maskify("64607935616")).to eq("#######5616")
        end
      end

      context "and empty input" do
        it "returns empty string" do
          expect(subject.maskify("")).to eq("")
        end
      end
    end
  end
end

