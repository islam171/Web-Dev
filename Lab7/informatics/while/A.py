import math
b = int(input())
print(*[i for i in range(1,b+1) if math.sqrt(i) == int(math.sqrt(i))])