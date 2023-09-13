## `bonacci(n)`

#### Description:
This code snippet calculates the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones. This function is typically used to calculate Fibonacci numbers and can be used in various applications involving sequence generation or mathematical calculations.

#### Important info:
This function assumes that the input `n` is a non-negative integer. It returns the nth Fibonacci number.

#### Usage :

- This code snippet is used to calculate the nth Fibonacci number.
- It can be used in mathematical calculations or sequence generation.
- It is often used in programming exercises or challenges involving Fibonacci numbers.

#### How it Works:
The function `bonacci(n)` follows these steps to calculate the nth Fibonacci number:

1. It creates an array `fib` of size `n+1` to store the Fibonacci values.
2. It sets the base cases: `fib[0] = 0` and `fib[1] = 1`.
3. It calculates the Fibonacci values from the 2nd position (`fib[2]`) to the nth position (`fib[n]`) using a for loop.
4. For each position `i`, it adds the previous two Fibonacci values (`fib[i-1]` and `fib[i-2]`) to get the current Fibonacci value (`fib[i]`).
5. Finally, it returns the nth Fibonacci number `fib[n]`.

#### Dependencies:
This code snippet does not have any dependencies.