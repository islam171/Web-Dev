n, m = map(int, input().split())
array = []
for _ in range(m):
    a = list(map(float,input().split()))
    array.append(a)

b = list(zip(*array))

for i in b:
    print(sum(i) / len(i))
