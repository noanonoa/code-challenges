class ElfPair
  def initialize(sections:)
    @sections = sections

    sanitize_sections
  end

  # check two pairs to see if there are complete overlaps
  def overlap?
    a1, a2 = @sections.first
    b1, b2 = @sections.last
    section_a = (a1..a2).to_a
    section_b = (b1..b2).to_a

    return true if (section_a - section_b).empty? ||
                   (section_b - section_a).empty?

    false
  end

private

  # clean up the inputs so that it is in a workable format
  # "19-49,15-68" => [[19, 49], [15, 68]]
  def sanitize_sections
    @sections = @sections.split(",").map do |section|
      section.split("-").map(&:to_i)
    end
  end
end

