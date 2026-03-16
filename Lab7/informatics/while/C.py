a = int(input())
i = 0
while(i<=a):
    j = 1
    while(j<i):
        j *= 2
    if(i==j):
        print(i, end=" ")
    i=i+1