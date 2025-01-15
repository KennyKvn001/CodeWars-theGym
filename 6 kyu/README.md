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
