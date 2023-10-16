require_relative 'elf_pair'

module PartOne
  INPUTS = File.open("input.csv").to_a.map(&:chomp)

  def self.results
    count = 0
    INPUTS.each do |input|
      elf_pair = ElfPair.new(sections: input)
      
      if elf_pair.overlap?
        count += 1
      end
    end

    count
  end
end

if __FILE__ == $0
  puts "**** Advent of Code 2022 - Day 4: Part 1 ****"
  puts "The total amount of full overlaps is:"
  puts PartOne::results
end
