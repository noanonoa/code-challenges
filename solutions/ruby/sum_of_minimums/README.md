# Sum of Minimums!

source: [Codewars](https://www.codewars.com/kata/5d5ee4c35162d9001af7d699)

## Prompt

Given a 2D (nested) list of size `m * n`, find the sum of the minimum values in
each row.

Note: You will always be given a non-empty list containing positive values.

## Example

```ruby
[
  [1, 2, 3, 4, 5],      # minimum value of row is 1
  [5, 6, 7, 8, 9],      # minimum value of row is 5
  [20, 21, 34, 56, 100] # minimum value of row is 20
]
```

The function should return `26` because the sum of the minimums is
`1 + 5 + 20 = 26`.

