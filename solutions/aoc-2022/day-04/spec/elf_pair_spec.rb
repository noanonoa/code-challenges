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
end
