from task2.modules import Animal, Dog

from task2.modules import Cat

if __name__ == "__main__":
    l = [Cat("Luna", 5, "Female"), Dog("Aktos", 6, "Male"), Animal("Animal", 10, "Male")]
    for x in l:
       print( x.voice())