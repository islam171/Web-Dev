a = int(input())
b =0
c = input().split(" ")
for i in range(1, a-1):
    if(int(c[i-1]) < int(c[i]) and int(c[i]) > int(c[i+1])):
        b += 1
print(b)
