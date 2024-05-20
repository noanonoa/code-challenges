class Kata
  def is_triangle(a,b,c)
    # The rule of the sides of a triangle is that the sum of the lengths of any
    # two sides of a triangle is always greater than the length of the third
    # side.
    #
    # Example:
    #
    # a = 1
    # b = 2
    # c = 3
    #
    # 1 + 2 > 3 ? false
    # 1 + 3 > 2 ? true
    # 2 + 3 > 1 ? true
    #
    # 1 + 2 is not greater than 3, therefore, this is not a triangle.
    #
    return true if (a + b > c) &&
                   (a + c > b) &&
                   (b + c > a)

    false
  end
end

