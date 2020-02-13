---
templateKey: blog-post
title: Displaying a million records efficiently - Virtual Scroll
date: 2020-02-13T17:52:11.456Z
description: |
  How'd you display a million records on screen without affecting performance?
featuredpost: true
featuredimage: /img/list.png
tags:
  - Tutorial
  - Javascript
  - Coding
---
This is a very common interview question and surprisingly many frontend developers (including the ones I have interviewed in past ), don't know the proper answer.

One way to do it is- pagination. Pagination allows us to display a fixed number of records at a time and to view next (or previous) set of records we must click either something like a `Next` button or one of the numbered links denoting pages of data. This solution is perfectly ok depending on situation.

One alternate way is to implement virtual scroll.

### Why Virtual Scroll?

The main problem is that altering anything in the rendered HTML is extremely slow compared to other operations you can do in the browser.

Why? Because whenever we add/remove/update something in the DOM the browser will have to recalculate the layout, re render etc. So all in all it’s just slow. The more HTML elements are there, the more browser has to work.

When we’re trying to show long lists to the web application's user, it not only means many elements in the HTML but as it possibly requires scrolling it will cause layout calculation and rendering quite often.

The Angular documentation describes Virtual Scroll as:

*Virtual scroll displays large lists of elements performantly by only rendering the items that fit on-screen. Loading hundreds of elements can be slow in any browser; virtual scrolling enables a performant way to simulate all items being rendered by making the height of the container element the same as the height of total number of elements to be rendered, and then only rendering the items in view.* [[SOURCE](https://material.angular.io/cdk/scrolling/overview)]

Virtual scroll helps us avoid adding too many HTML elements. How?

* As a user can only see a limited amount of rows in a list why not just add those elements visible to the user. We usually call an area where visible content can be found a *ViewPort*.

* We should add the remainder rows of the list to the HTML elements only when they’ll become visible by subscribing to the “scroll” event of the element containing the list often called as *ViewContainer*.

* The list gets quite big after scrolling. So to solve this we should also remove rows when they scroll away from the *ViewPort*.

* We can add additional rows before and after the viewport so when the user scrolls the browser has time to render the new rows to show.

Still confused?

Let's try to simply understand what Virtual Scroll is and then implement our own.

Suppose we want to display 10,000 records or list items. Each list-item is fixed 24px height (for simplicity) and the list container is fixed 300px x 300px.

Now rendering 10,000 HTML elements (DIVs) for each item will degrade the performance of our application considerably. 

So what do we do?  We can create an inner-container with height that equals to height of total number of elements. So for this example, we will create an inner-container with eight -> 24*10000 = 240,000px. This is just one element so it doesn't have any negative  performance implications. Now create only as many elements which we are able to display in the container and a few more. 
We can easily display 12 elements at a time (300px container height divided by 24px item height).

Let's assume we create 40 elements at a time. Now as we scroll the list down, we will see item #1 to #12. On scrolling 12 rows we will see item #13 to #24. As we scroll further down and 40th item comes into view (making item #29 - #40 visible) we delete all the elements for item #1 - #28 and create new elements for item #41 - #68. 

When we scroll up, we do the same except in reverse where we remove elements from below the list and add elements above.

This way at a time, only 40 elements are present at any given time in our HTML for these items.

Still confused? Let's see this diagram:

![Imgur](https://i.imgur.com/JyFr2ud.png)

The Items in Viewport area, are what a person can see. The items above and below are the overflowed items that are not visible(You can say:-> CSS: overflow: hidden). When we scroll towards last item of list, any item above is removed and new items are created below. Result: limited number of HTML elements = better performance.

I believe we have a basic understanding of virtual scroll by now. Let's dive into a practical example:

Look at below list:

<iframe src='//fiddle.jshell.net/quizmasterash/xLfbtcnv/show/' height=400 width=400></iframe>

\--

If you inspect element, you will see that only 39 items are present in HTML at a time even though 999,999 items can be displayed.

![Imgur](https://i.imgur.com/tfJeftX.png)

\--

The entire code is available at below JSFiddle and is written in pure javascript:

[Virtual Scroll List Example](https://jsfiddle.net/quizmasterash/xLfbtcnv/)

I hope you enjoyed this article.

Please share your feedback at - talkingdevblog+vlist@gmail.com

Happy Coding.
