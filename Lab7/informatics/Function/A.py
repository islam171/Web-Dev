def min(a,b,c,d):
    list = [a,b,c,d]
    list.sort()
    return list[0]

c = list(map(int, input().split(" ")))
print(min(*c))