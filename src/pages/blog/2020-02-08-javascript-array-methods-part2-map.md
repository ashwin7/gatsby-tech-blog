---
templateKey: blog-post
title: Javascript Array Methods - Part2 - map
date: 2020-02-08T20:38:29.599Z
description: Array.prototype.map() - "Change one by one"
featuredpost: true
featuredimage: /img/jslogo.png
tags:
  - Programming
---
We are in part 2 of he article series which also means that I've not procrastinated enough yet to ultimately scrap this article series (like I do with most projects).
In part one, we saw usage of <a href="/javascript-array-methods-filter-p1/" >_.filter()_</a>

The second most useful Array method is :

_.map()_
========
Simply put _.map()_ is a method we can use when we want to apply an operation to each individual member of an array. This member can be an object too. For example we may have an array of objects in which we want to modify properties of each object or we might have an array of strings that we want in all lowercase or uppercase. In countless such situations, we would use _.map()_ and it’s really simple.

For example, assume we have an array of objects, Books:
```javascript
var books = [
    {
        id: '1',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
    },
    {
        id: '2',
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury.'
    },
    {
        id: '3',
        title: 'Pride and Prejudice',
        author: 'Jane Austen'
    },
    {
        id: '4',
        title: 'The Book Thief',
        author: 'Markus Zusak'
    },
    {
        id: '5',
        title: 'The Underground Railroad',
        author: 'Colson Whitehead'
    },
]
```
Say we want an array of only book titles. With _.map()_, it is very easy to do so:

```javascript
/*** ES5 ***/

var allTitles = books.map(function (book) {
  return book.title;  
});

/*** ES6 ***/
const allTitles = books.map(book => {
  return book.title;
});


console.log(allTitles); // ["To Kill a Mockingbird,"Fahrenheit 451","Pride and Prejudice","The Book Thief","The Underground Railroad"];

```

We can even add and remove properties. For example, in the same collection of books, we want to remove the `id` property and add a `book_url` property, we can do that:



```javascript
/*** ES5 ***/
var extendedBooks = books.map(function (book){
  // _.omit is a library function of underscoreJs
  // using _.omit we remove the id property
  // don't use delete because it mutates the books object
  // while _.omit creates a new one
  var newbook = _.omit(books,"id");
  return Object.assign(newbook, {
    bookUrl: "http://someurl.com/"+encodeURI(book.title)
  });
});

/*** ES6 ***/
const extendedBooks = books.map(book => {
  // let's remove the id property, no need of 3rd party library
  const { id, ...rest } = book;
  
  return {
     ...rest,
    bookUrl: "http://someurl.com/"+encodeURI(book.title)
  };
});

```
This will result in a modified array:

<img src="https://www.dropbox.com/s/srofe6ncn09b11v/map-result.JPG?raw=1" alt="map_console_output" width="800"/>

The official syntax of _Array.prototype.map()_ is :
```javascript
var new_array = original_array.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```
So map receives a callback as an argument. That callback is then given the current value of the iteration, the index of the iteration and the original array from which map was called. There is also an optional second argument for map (after the callback) that is the value to use as `this` inside the callback.

I hope you will be using _.map()_ instead of those pesky `for` loops.

_.map()_ Compatibility:
<img src="https://www.dropbox.com/s/k0i86sg0y3q8ls3/map-compatibility.png?raw=1" alt="map_browser_compatibility" width="600"/>



Up Next: _.reduce()_

Happy Coding!
