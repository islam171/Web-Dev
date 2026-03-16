a = int(input())
b = input()
c = b.split(" ")
print(*[c[i] for i in range(len(c)) if i % 2 == 0])