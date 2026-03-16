a, b = map(int, input().split())
list = list(map(int, input().split()))
A = set(map(int, input().split(" ")))
B = set(map(int, input().split(" ")))
num = 0
for i in list:
    if i in A:
       num += 1
    elif i in B:
        num -= 1
print(num)