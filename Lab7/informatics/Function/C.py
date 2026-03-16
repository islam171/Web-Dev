def XOR(a, b):
    if (a and not b) or (not a and b):
        return 1
    else:
        return 0

a, b= map(int, input().split(" "))
print(XOR(a, b))