require "./list_filtering"

RSpec.describe Kata do
  subject { Kata.new }

  describe "#filter_list" do
    context "returns new list with strings filtered out" do
      it "filter_list([1,2,'a','b']) = [1,2]" do
        expect(subject.filter_list([1,2,'a','b'])).to eq([1,2])
      end

      it "filter_list([1,'a','b',0,15]) = [1,0,15]" do
        expect(subject.filter_list([1,'a','b',0,15])).to eq([1,0,15])
      end

      it "filter_list([1,2,'aasf','1','123',123]) = [1,2,123]" do
        expect(subject.filter_list([1,2,'aasf','1','123',123])).to eq([1,2,123])
      end
    end
  end
end

