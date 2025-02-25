## Question1: uniqueInOrder

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]) == [1,2,3]

## Question2: Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

## Question3: Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2

## Question4: How many eggs

Ronald's uncle left him 3 fertile chickens in his will. When life gives you chickens, you start a business selling chicken eggs which is exactly what Ronald decided to do.

A chicken lays 300 eggs in its first year. However, each chicken's egg production decreases by 20% every following year (rounded down) until when it dies (after laying its quota of eggs).

After his first successful year of business, Ronald decides to buy 3 more chickens at the start of each year.

Your Task:

For a given year, and life span of chicken span, calculate how many eggs Ronald's chickens will lay him that year, whereby year=1 is when Ronald first got his inheritance and span>0.

If year=0, make sure to return "No chickens yet!".

Note:

1. All chickens have the same life span regardless of when they are bought.
2. Let's assume all calculations are made at the end of the year so don't bother taking eggs laid per month into consideration.

3. Each chicken's egg production goes down by 20% each year, NOT the total number of eggs produced by each 'batch' of chickens. While this might appear to be the same thing, it doesn't once non-integers come into play so take care that this is reflected in your kata!

## Question5: Progressive Spiral Number Branch

Similar setting of the previous, this time you are called to identify in which "branch" of the spiral a given number will end up.

Considering a square of numbers disposed as the 25 items in the previous kata, the branch are numbered as it follows:

17 16 15 14 13 1 1 1 1 0
18 05 04 03 12 2 1 1 0 0
19 06 01 02 11 => 2 2 0 0 0
20 07 08 09 10 2 2 3 3 0
21 22 23 24 25 2 3 3 3 3
Meaning that, for example, numbers in the 10-13 range will be in branch 0, numbers in the range 14-17 are inside branch 1, all those nice numbers in the 18-21 can call branch 2 their house and finally the 21-25 team all falls under the 3 branch.

Your function must return the number of the index of each number [1 being a special case you might consider equivalent to being in the first branch, 0], as per examples:

branch(1) === 0 //kind of special case here
branch(5) === 1
branch(25) === 3
branch(30) === 0
branch(50) === 0

## Question6 : The latest clock

Write a function which receives 4 digits and returns the latest time of day that can be built with those digits.

The time should be in HH:MM format.

Examples:

digits: 1, 9, 8, 3 => result: "19:38"
digits: 9, 1, 2, 5 => result: "21:59" (19:25 is also a valid time, but 21:59 is later)
Notes
Result should be a valid 24-hour time, between 00:00 and 23:59.
Only inputs which have valid answers are tested.

## Question7 : Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

## Question8 : Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

12 --> "10 + 2"
45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

## Question9 : Write Number in Expanded Form - Part 2

This is version 2 of my 'Write Number in Exanded Form' Kata.

You will be given a number and you will need to return it as a string in expanded form :
<img width="548" alt="Screenshot 2025-02-02 at 11 22 13" src="https://github.com/user-attachments/assets/38e39dd8-87d1-4bf4-a313-d0989d9b3fbb" />

expanded form illustration

For example:

807.304 --> "800 + 7 + 3/10 + 4/1000"
1.24 --> "1 + 2/10 + 4/100"
7.304 --> "7 + 3/10 + 4/1000"
0.04 --> "4/100"

## Question10 : Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

## Question11 : Bouncing Balls

A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1

(Condition 2) not fulfilled).
