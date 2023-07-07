# Exercise 1: Destructing

def destructure_example(obj, arr):
    name, age = obj['name'], obj['age']
    val1, _, val2, _ = arr
    return {'name': name, 'age': age}


obj = {'name': 'John', 'age': 30, 'city': 'New York'}
arr = [10, 20, 30, 40]

result = destructure_example(obj, arr)
print(result)

# Exercise 2: Rest Operator Sum


def sum_numbers(*numbers):
    return sum(numbers)


result2 = sum_numbers(1, 2, 3, 4, 5)
print(result)


# Exercise 3: Template Literals

def create_greeting(name):
    return f"Hello, {name}! Welcome to our website."


greeting = create_greeting('Alice')
print(greeting)

# Exercise 4: is Even or Odd?


def is_even(number):
    return "Even" if number % 2 == 0 else "Odd"


result4 = is_even(7)
print(result4)

# Exercise 6: Largest number between two numbers


def get_largest_number(a, b):
    return a if a > b else b


print(get_largest_number(10, 5))

# Exercise 7: Is there a city?


def get_address_city(address):
    return address.get('city', 'Unknown')


address = {'street': '123 Main St', 'country': 'USA'}
print(get_address_city(address))

# Exercise 8: list comprehension


def double_numbers(numbers):
    return[number * 2 for number in numbers]


numbers = [1, 2, 3, 4, 5]
doubled_numbers = double_numbers(numbers)
print(doubled_numbers)

# Exercise 8: list comprehension 2.0


def filter_even_numbers(e_numbers):
    return [number for number in e_numbers if number % 2 == 0]


e_numbers = [1, 2, 3, 4, 5]

even_numbers = filter_even_numbers(e_numbers)
print(even_numbers)
