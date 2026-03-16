def pow(x,n):
    k = 1
    for i in range(n):
        k *= x
    return k
a , b = map(float, input().split(" "))
print(pow(a, int(b)))