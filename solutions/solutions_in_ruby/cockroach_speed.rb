# The cockroach is one of the fastest insects.  Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (=floored).
#
# For example:
# 1.08 --> 30
#
# Note: The input is a Real number and is >= 0.  The result should be an integer.

def cockroach_speed(km_per_hour)
  CM_PER_KM = 100000
  SECONDS_PER_HOUR = 3600
  cm_per_second = km_per_hour * CM_PER_KM / SECONDS_PER_HOUR
  cm_per_second.floor
end