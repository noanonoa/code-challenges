# Write a function find_needle() that takes an array full of junk but containing one "needle"
# After your function finds the needle it should return a message (as a string) that says:
# "found the needle at position " plus the index it found the needle, so:
#
# find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
# should return "found the needle at position 5"

haystack = [
  'hay',
  'junk',
  'hay',
  'hay',
  'moreJunk',
  'needle',
  'randomJunk'
]

def find_needle(haystack)
  index_of_needle = haystack.index('needle')
  return index_of_needle ? "found the needle at position #{index_of_needle}" : "no needles were found in this haystack"
end