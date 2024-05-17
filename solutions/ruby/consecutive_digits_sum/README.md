# Consecutive Digits To Form Sum

source: [Codewars](https://www.codewars.com/kata/5dae2599a8f7d90025d2f15f/train/ruby)

## Prompt

Positive integers have so many gorgeous features. Some of them could be
expressed as a sum of two or more consecutive positive numbers.

Consider an example:

`10` could be expressed as the sum of `1 + 2 + 3 + 4`.

Given _Positive integer_, N, return `true` if it could be expressed as a sum of
two or more consecutive positive numbers, otherwise return false.

## Constraints

`2 ≤ N ≤ (2^32) -1`

## Examples

```ruby
consecutive_ducks(9) => true # 9, could be expressed as a sum of (2 + 3 + 4) or
(4 + 5).

consecutive_ducks(64) => false

consecutive_ducks(42) => true # 42, could be expressed as a sum of
(9 + 10 + 11 + 12).
```

