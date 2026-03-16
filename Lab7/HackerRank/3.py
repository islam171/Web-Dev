x = int(input())
y = int(input())
z = int(input())
n = int(input())
list = [ [k, j, i] for k in range(x+1) for j in range(y+1) for i in range(z+1) if (i + j + k != n) ]
print(list)