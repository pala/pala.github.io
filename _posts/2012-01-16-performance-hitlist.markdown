--- 
layout: post
title: Performance Hitlist
date: 2012-01-16
categories:
    - 电脑 
tags:
    - iOS
---
在整个iOS 5 Tech Talk里基本没有记笔记，最后一节Performance Hitlist里记了一些关于性能方面的Tips & Tricks，在这里大概总结下。

##Measuring Performance

###What to measure

1. Processing Time

2. Memory

3. Graphics Performance and Correctness

4. Disk I/O

5. Battery Life

###Techniques

1. Don't Guess

2. Focus on Simple, Repeatable, Real world actions

    a. Measure

    b. Change

    c. Re-test

3. It has to feel right

##Avoid blocking work

<h4>Launching Quickly <small>Your user's first impression</small></h4>

1. Immediately communicates speed and quality

2. Common scenarios

    Non-multitasking "launch"

    Multitasking "launch"

3. iOS will kill your app <span class="label important">Important</span>

<table class="table-striped table-bordered">
<thead>
    <tr>
    <th></th>
    <th>Maximum Time</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>Launch</td>
    <td>20 sec</td>
    </tr>
    <tr>
    <td>Resume</td>
    <td>10 sec</td>
    </tr>
    <tr>
    <td>Suspend</td>
    <td>10 sec</td>
    </tr>
    <tr>
    <td>Quit</td>
    <td>6 sec</td>
    </tr>
    <tr>
    <td>Task completion</td>
    <td>10 min</td>
    </tr>
</tbody>
</table>

##Rules to live by

1. Is it essential for loading the most basic main UI? if not, defer it

2. Does it involve parsing, loading data, or network activity?
    
    don't do it on the main thread, defer it

3. Progress indicators are your friends
