n = int(input())
print(sum(1 for _ in range(n) if int(input()) == 0))