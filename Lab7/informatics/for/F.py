a = int(input())
b = 0
while a > 0:
    digit = a % 10
    b += digit
    b *= 10
    a //= 10
print(int(b / 10))