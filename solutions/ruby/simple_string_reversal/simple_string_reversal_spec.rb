require "./simple_string_reversal"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#simple_string_reversal" do
    it "reverses the string" do
      expect(subject.simple_string_reversal("codewars")).to eq("srawedoc")
    end

    it "reverses the string while keeping original place of any spaces" do
      expect(subject.simple_string_reversal("Hello World")).to eq("dlroW olleH")
    end

    it "'your code rocks' => 'skco redo cruoy'" do
      puts subject.simple_string_reversal("your code rocks")
      expect(subject.simple_string_reversal("your code rocks")).to eq("skco redo cruoy")
    end
  end
end

