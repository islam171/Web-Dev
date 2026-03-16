import re

pattern = r'^[+-]?\d*\.\d+$'

for _ in range(int(input())):
    s = input().strip()
    print(bool(re.match(pattern, s)))