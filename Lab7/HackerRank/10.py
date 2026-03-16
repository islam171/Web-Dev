def func(n):
    l = list(str(n))
    l.reverse()
    if(str(n) == "".join(l)):
        return True
    return False
def func1(n):
    return int(n) >= 0

n = int(input())
k = input().split()
l = list(map(func, k))
m = list(map(func1, k))
print(any(l) and all(m))