import math
a = int(input())
result = 0
i = 0
while a > 0:
    c = a % 10
    a //= 10
    result += math.pow(2, i) * c
    i+=1
print(int(result))