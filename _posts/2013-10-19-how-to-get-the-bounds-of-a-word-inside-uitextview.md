---
layout: post
title: How to get the bounds of a word inside UITextView
tags:
  - iOS
  - Cocoa
---
In [Missing Word](https://itunes.apple.com/app/the-missing-word/id716259978?mt=8), I need to get the exact bounds of the missing word and put a same-sized UITextField onto it.

![](https://dl.dropbox.com/s/fl8kntyzu4mhvjd/Screenshot%202013-10-19%2001.20.37.png)

Thanks to the power of **TextKit** which was introduced in iOS 7, this task can be accomplished pretty easily.

{% highlight objc %}
NSTextStorage *aStorage = textView.textStorage;
NSTextContainer *aContainer = textView.textContainer;
CGRect wordRect = [aManager boundingRectForGlyphRange:wordRange inTextContainer:aContainer];

// Don'f forget the inset
UIEdgeInsets inset = textView.textContainerInset;

wordRect.origin.y += inset.top;
wordRect.origin.x += inset.left;

CGRect textFieldRect = [self.view convertRect:wordRect fromView:textView];
{% endhighlight %}

Why do I need the missing word's exact bounds instead of the position?

If you use hint, you'll notice the hint letters are not popping out from nowhere, they are appearing like part of the textField's text.

![](https://dl.dropbox.com/s/3h6tcwu551nphk7/Screenshot%202013-10-19%2001.55.00.png)

Check out the letters **inv** in the above image. Actually, **in** is in the textView and **v** is in the textField.

## One flaw, Misaligned Images

Turn on the `Color Misaligned Images` of the simulator, you'll notice this:

![](https://dl.dropbox.com/s/z7ppllzup8j1bhx/Screenshot%202013-10-19%2002.02.14.png)

The reason is that the "exact bounds" of the missing word look like this:

{% highlight objc %}
origin=(x=5, y=333.108) size=(width=58.378002, height=46.444)
{% endhighlight %}

These fractional parts will create a bit of blurriness of your text:

![](https://dl.dropbox.com/s/82npmxo66gb5kyz/Screenshot%202013-10-19%2002.09.55.png)

If you want the text to look sharp, you'll need to use set the textFiled's position pixel-aligned. But under that situation, the letter **v** looks one pixel lower:

![](https://dl.dropbox.com/s/emijm5wjsssr8h9/Screenshot%202013-10-19%2002.17.26.png)

Any ideas?

Missing Word is available on the app store. [iTunes link](https://itunes.apple.com/app/the-missing-word/id716259978?mt=8)
