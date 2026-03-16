a = int(input())
b = int(input())
i = 0
while a > 0:
    if(b == a % 10):
        i += 1
    a = a // 10

print(i)