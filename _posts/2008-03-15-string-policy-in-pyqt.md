--- 
categories: WordPressBackup
date: 2008-03-15 13:02:53 -04:00
layout: post
title: "String Policy in PyQt"
---
The policy we use with PyQt is as follows:

1. Use type str only when working with strictly 7-bit ASCII strings or with raw 8-bit data, that is, with raw bytes.

2. For strings that will be used only by PyQt functions, for example, strings that are returned by one PyQt function only to be passed at some point to another PyQt function--do not convert such strings. Simply keep them as QStrings.

3. In all other cases, use unicode strings, converting QStrings to unicode as soon as possible. In other words, as soon as a QString has been returned from a Qt function, always immediately convert it to type unicode.
