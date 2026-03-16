from collections import Counter

n = int(input())
list = Counter(list(map(int,input().split())))
amount = 0

a = int(input())
for i in range(a):
    x, y = map(int,input().split())
    if(list[x] > 0):
        list[x] -= 1
        amount += y

print(amount)