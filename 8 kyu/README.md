## Question1: EvenOrOdd#

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

## Question2: Sum of array#

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

## Question3: You only need one#

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

## Question4: Convert boolean values to strings 'Yes' or 'No'.

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

## Question5: Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

## Question6: Fuel Calculator: Total Cost

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents

## Question7: Convert number to reversed array of digits

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

## Question8: Plural

We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.

## Question9: Square(n)sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because
1
2

- 2
  2
- 2
  2
  =
  9
  1
  2
  +2
  2
  +2
  2
  =9.

## Question10: Double Char

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):

- "String" -> "SSttrriinngg"
- "Hello World" -> "HHeelllloo WWoorrlldd"
- "1234!\_ " -> "11223344!!\_\_ "
  Good Luck!

## Question11: Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] =>
1

- 7
- # 12
  20
  1+7+12=20
  Note
  If there is nothing to sum, the sum is default to 0.

## Question12: Calculate average

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

## Question13 : Fun with ES6 Classes #1 - People, people, people

Time for some OOP fun!

Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.
