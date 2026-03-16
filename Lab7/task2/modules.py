class Animal:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def voice(self):
        return ""

    def eat(self):
        print(f"{self.name} is eating")


class Dog(Animal):
    def __init__(self, name, age, gender, ):
        Animal.__init__(self, name, age, gender)

    def voice(self):
        return "Woof!"

    def guard(self):
        print(f"{self.name} is guarding")

class Cat(Animal):
    def __init__(self, name, age, gender, ):
        Animal.__init__(self, name, age, gender)

    def voice(self):
        return "Meow!"

    def catch_mice(self):
        print(f"{self.name} is catching")