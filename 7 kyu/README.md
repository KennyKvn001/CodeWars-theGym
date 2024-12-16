## Question1: regex validatePin

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234" --> true
"12345" --> false
"a234" --> false

## Question2: Get the Middle Character

You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

If the string's length is odd, return the middle character.
If the string's length is even, return the middle 2 characters.
Examples:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"

## Question3 : String ends with

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

## Question4 : Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

## Question5: Balanced Number (Special Numbers Series #1 )

A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.
27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced.

## Question6: Strong Number (Special Numbers Series #2)

Strong number is a number with the sum of the factorial of its digits is equal to the number itself.

For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".

Examples
1 is a strong number, because 1! = 1, so return "STRONG!!!!".
123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".

## Question7 : Cat and Mouse - Easy Version

You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

"C.....m" returns "Escaped!" <-- more than three characters between

"C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.

## Question8 : Nice Array

A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

2 = 3 - 1
10 = 9 + 1
3 = 2 + 1
9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

## Question9 : Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
