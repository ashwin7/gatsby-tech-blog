---
templateKey: blog-post
title: What’s new in Javascript ( ES2020 )
date: 2020-02-10T04:46:39.359Z
description: >-
  Unlike few years ago, where Javascript spec (EcmaScript) used to get revision
  only once in a while, we have reached a point where EcmaScript spec is updated
  every year and it's upto browsers/Javascript engines to implement new feature.
  The latest features of ES2020 are available for use and I thought I'd discuss
  my favourite ones.
featuredpost: true
featuredimage: /img/a4cfe5641b9b.jpg
tags:
  - Javascript
  - ES2020
  - Tutorial
---
JavaScript 2020 adds some much anticipated features.

* Nullish Coalescing Operator ( Treating values correctly )
* Optional Chaining Operator ( Like Angular’s ?. ‘Elvis Operator’ )
* BigInt (Large integers done right)
* Dynamic Imports ( Only for NodeJs )
* Promise.allSettled (vs. Promise.All)
* Private Class Variables ( # )

### 1. Nullish Coalescing Operator

JavaScript is a dynamically typed language. Some values are considered technically false like an empty string “” or the number 0. If we have a object with some values, sometimes we want to allow for values that are falsy as described previously. Setting default values quickly gets annoying since it’ll override what should be valid values.

![Coalescing Operator example](https://i.imgur.com/g6DaXvD.png)

With newly introduced Nullish Coalescing Operator we can use the double question marks operator `??` to be a bit more type strict, which only allows the default when the value is null or undefined.

![Nullish Coalescing Operator example](https://i.imgur.com/e9Ubn03.png)

### 2. Optional Chaining Operator:
Angular templates has a very cool feature: Safe Navigation of Objects. The Safe Navigation Operator is also known as the "Elvis Operator". This operator is very useful to protect against null and undefined values in property paths. This operator allows us to navigate an object path in situations when we are not aware whether a path exists or not. It returns value of the object path if it exists, else it returns the null value. It is very useful to prevent null-reference exceptions.

With ES2020, this feature comes to JavaScript natively. 

![Optional Chaining Operator example](https://i.imgur.com/Gd1m523.png)

### 3. BigInt
 
The largest number JavaScript can handle is 2^53, which we can see with MAX_SAFE_INTEGER.

![](https://i.imgur.com/gzIwneE.png)

The way JavaScript handles numbers, when you go higher than this things start to get a bit weird.

![](https://i.imgur.com/zqCaU7P.png)


With BigInt data type we can handle exceptionally large numbers without above such side-effect. In JavaScript, a BigInt is not the same as a normal number. It’s distinguished from a normal number by having an n at the end of the number.
To define a BigInt, we can write the following if we want to pass in a whole number:

![](https://i.imgur.com/xROhxwB.png)

--

We can also define a BigInt with a BigInt literal. We can just attach an `n` character to the end of a whole number. For example, we can write:

![](https://i.imgur.com/QICUrXu.png)


The only limitation with using BigInt is that all arithmetic operations can only be done with another BigInt. We can’t mix types.

### 4. Dynamic Imports 
Now we can use async/await to dynamically import our dependencies when we need them. Please note that Dynamic Imports will only work in a Node.js environment.


```add.js```

![](https://i.imgur.com/LRZabpA.png)

--

```index.js```

![](https://i.imgur.com/g3UMfsl.png)

--

### 5. Promise.allSettled
With Promise.allSettled, we can create a new promise that only returns when all of the promises passed to it are complete. This will give us access to an array with some data on each promise. This is different from Promise.all which rejects as soon as any of the passed Promise rejects.

![](https://i.imgur.com/BelTMef.png)


### 6. Private Class Properties 
One of the main purposes of classes is to contain our code into more reusable modules. Because you’ll create a class that’s used in many different places you may not want everything inside it to be available globally.

Now, by adding a simple hash symbol in front of our variable or function we can reserve them entirely for internal use inside the class.

![](https://i.imgur.com/ywjy0ZG.png)


That's it. These are the features I'm very excited about for ES2020. Some of these are already implemented in any evergreen browser of your choice (At least Chrome has these).

Happy Coding!
