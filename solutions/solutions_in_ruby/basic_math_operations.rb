# Your task is to create a function that does four basic mathematical operations.
# The function should take three arguments - operation(string/char), value1(number), value2(number).
# The function should return result of numbers after applying the chosen operation.

def basic_op(operator, value1, value2)
  case operator
  when '+'
    return value1 + value2
  when '-'
    return value1 - value2
  when '*'
    return value1 * value2
  when '/'
    return value1 / value2
  end
end

# other solutions
def basic_op_one(operator, value1, value2)
  value1.send(operator, value2)
end

def basic_op_two(operator, value1, value2)
  eval("#{value1}#{operator}#{value2}")
end
