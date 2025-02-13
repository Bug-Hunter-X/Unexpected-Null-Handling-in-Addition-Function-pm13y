# Unexpected Null Handling in JavaScript Addition Function

This repository demonstrates a subtle bug in a JavaScript function designed to add two numbers. The function incorrectly handles null values, returning 0 instead of potentially throwing an error or using a more appropriate default value.

## Bug Description

The `foo` function adds two numbers.  If either input is `null`, it returns 0. This might not be the desired behavior in all situations.  A more robust solution would either explicitly handle null values differently (e.g., by throwing an error or using a default value), or it should ensure null values are not passed as input to the function.

## Solution

The solution provides alternative ways to handle null inputs, improving the function's reliability and clarity.