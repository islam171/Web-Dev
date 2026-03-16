a = int(input())
i = 1
k = False
while(i <= a):
    if(i == a):
        k = True
    i *= 2
if(k):
    print("YES")
else:
    print("NO")