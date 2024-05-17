class Kata
  def consecutive_ducks(n)
    # AND Bitwise operation
    # Using the AND Bitwise operation to figure out if n is either 0 or an
    # exact power of two.
    # https://ablogaboutcode.com/2012/01/04/the-ampersand-operator-in-ruby
    (n & (n - 1)).positive?
  end
end

