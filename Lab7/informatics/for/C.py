import math
a = int(input())
b = int(input())
print(*[i for i in range(a,b+1) if math.sqrt(i) == int(math.sqrt(i))])