require "./contamination"

RSpec.describe "Kata" do
  describe ".contamination" do
    context "when text or character are empty" do
      it "'abc', '' => ''" do
        expect(Kata.contamination("abc", "")).to eq("")
      end

      it "'', 'z' => ''" do
        expect(Kata.contamination("", "z")).to eq("")
      end

      it "'', '' => ''" do
        expect(Kata.contamination("", "")).to eq("")
      end
    end

    context "when text and character are present" do
      it "'abc', 'z' => 'zzz'" do
        expect(Kata.contamination("abc", "z")).to eq("zzz")
      end

      it "'_3ebzgh4', '&' => '&&&&&&&&'" do
        expect(Kata.contamination("_3ebzgh4", "&")).to eq("&&&&&&&&")
      end

      it "'//case', ' ' => '      '" do
        expect(Kata.contamination("//case", " ")).to eq("      ")
      end
    end
  end
end

