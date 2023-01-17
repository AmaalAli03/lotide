# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amaalali03/lotide`

**Require it:**

`const _ = require('@amaalali03/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
`assertArraysEqual()`: it should be an alternating test for when you are asserting if the arrays are equal or if the arrays are not equal. 
`assertEqual()`: it should compare the two values it takes in and prints out a message telling us if they match or not.
`eqArrays()`: this will take in two arrays and returns true or false, based on a perfect match. 
`head()`: it should return  the first item of an array.
`middle()`: it should return the middle element of an array.
`tail()`: it should return the "tail" of an array which is everything except for the first item (head) of the provided array.
