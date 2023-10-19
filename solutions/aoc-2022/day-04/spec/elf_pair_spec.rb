require_relative '../elf_pair'

describe ElfPair do
  describe "#overlap?" do
    context "when a section pair overlaps" do
      let(:elf_pair) { ElfPair.new(sections: "1-5,1-3") }

      it "should return true" do
        expect(elf_pair.overlap?).to be_truthy
      end
    end

    context "when a section pair does not overlap" do
      let(:elf_pair) { ElfPair.new(sections: "5-6,1-3") }

      it "should return false" do
        expect(elf_pair.overlap?).to be_falsy
      end
    end
  end

  describe "#partial_overlap?" do
    context "when a section partially overlap" do
      let(:elf_pair) { ElfPair.new(sections: "5-7,7-9") }

      it "returns true" do
        expect(elf_pair.partial_overlap?).to be true
      end
    end
    context "when a section does not overlap" do
      let(:elf_pair) { ElfPair.new(sections: "2-4,6-8") }

      it "returns false" do
        expect(elf_pair.partial_overlap?).to be false
      end
    end
  end
end
