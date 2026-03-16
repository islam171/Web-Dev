a = int(input())
b =0
has = False
c = input().split(" ")
for i in range(1, a):
    if((int(c[i]) > 0 and int(c[i-1]) > 0) or (int(c[i]) < 0 and int(c[i-1]) < 0)):
        print("YES")
        has = True
        break
if(not has):
    print("NO")
