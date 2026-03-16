a = int(input())
b = input()
c = b.split(" ")
print(len([c[i] for i in range(len(c)) if int(c[i]) > 0]))