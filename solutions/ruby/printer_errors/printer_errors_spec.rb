require "./printer_errors"

RSpec.describe Kata do
  subject { Kata.new() }

  describe "#printer_error" do
    it "returns a string" do
      s = "aaabbbbhaijjjm"
      expect(subject.printer_error(s).class).to eq(String) 
    end

    it "aaabbbhaijjjm => 0/14" do
      s = "aaabbbbhaijjjm"
      expect(subject.printer_error(s)).to eq("0/14") 
    end

    it "aaaxbbbbyyhwawiwjjjwwm => 8/22" do
      s = "aaaxbbbbyyhwawiwjjjwwm"
      expect(subject.printer_error(s)).to eq("8/22") 
    end

    it "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz => 3/56" do
      s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
      expect(subject.printer_error(s)).to eq("3/56") 
    end

    it "bingbong => 3/8" do
      s = "bingbong"
      expect(subject.printer_error(s)).to eq("3/8")
    end
  end
end

