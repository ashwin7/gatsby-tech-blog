---
templateKey: blog-post
title: Javascript Array Methods - Part1 - filter
date: 2020-02-08T20:36:12.292Z
description: Array.prototype.filter() - "I chose you"
featuredpost: true
featuredimage: /img/jslogo.jpg
tags:
  - Javascript
  - Tutorial
---
In this article series we are going to look at few of the Array and Object methods of Javascript which are not only bit obscure for novice developers but even advance developers sometimes are not aware of these. To be honest you probably know some of these, but knowing them WILL make you a more efficient, better , well rounded developer.

Most of these methods are chainable, meaning if you want to first do one operation and do another operation on returned result, you can directly do that. It is sort of like connected machines. Each machine is useful in itself but you can connect multiple ones and get a transformed output. How? We'll see in a moment. 

The first one we have is :

_.filter()_
===========
In your entire path as a programmer you must’ve had to pick out some items out of an existing array, as it is one of the most common exercises. This used to be quite annoying to do yourself, but now _filter()_ makes it easy!

For example:
Find even numbers in an array:

```javascript
/*** ES5 ***/
var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var evenArray = numberArray.filter(function(num){
    return num%2 === 0;
});

console.log(evenArray);
// [2, 4, 6, 8, 10, 12, 14]

/*** ES6 ***/
const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const evenArray = numberArray.filter(num =>{
    return num%2 === 0;
});

console.log(evenArray);
// [2, 4, 6, 8, 10, 12, 14]
```

Here's another example with Objects:

We have an object of students in Hogwarts:
```javascript
var students = [
  {
    id: 2,
    name: "Harry Potter",
    house: "Gryffindor",
  },
  {
    id: 8,
    name: "Draco Malfoy",
    house: "Slytherin",
  },
  {
    id: 40,
    name: "Seamus Finnigan",
    house: "Gryffindor",
  },
  {
    id: 66,
    name: "Tom Riddle",
    house: "Slytherin",
  }
];
```
Say we want two arrays now: one for Gryffindor students, the other one for Slytherin students. With .filter() it couldn’t be easier!

```javascript
/*** ES5 ***/
var gryffindor = students.filter(function (student) {
  return student.house === "Gryffindor";
});
var slytherin = students.filter(function (student) {
  return student.house === "Slytherin";
});

/*** ES6 ***/
const gryffindor = students.filter(student => student.house === "Gryffindor");
const slytherin = students.filter(pistudentlot => student.house === "Slytherin");

```

Basically, if the callback function given to _.filter()_ returns true, the current element will be in the output array. If it returns false, it won’t be.

Filter Compatibility:
<img src="https://www.dropbox.com/s/2inaj1t5aty5xov/filter-compatibility.png?raw=1" alt="filter_browser_compatibility" width="600"/>

I hope by now you must've thought up some good =uses of filter.

Up Next: <a href="/javascript-array-methods-map-p2/" >_.map()_</a>

Happy Coding!
