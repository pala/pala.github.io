---
layout: note
title: Swift Interoperability In Depth
---

> WWDC 2014 407

## Checking the Presence of a Method

A method of AnyObject is "optional"

{% highlight swift %}
object.removeFromSuperview?()
{% endhighlight %}

Chaining ? folds the `respondsToSelector` check into the call.

## Downcasting AnyObject

AnyObject does not implicitly downcast 

{% highlight swift %}
let view: UIView = object  
// error: `AnyObject` cannot be implicitly downcast
{% endhighlight %}

`as` operator forces the downcast 

{% highlight swift %}
let view  = object as UIView
{% endhighlight %}

`as?` operator performs a conditional downcast 

{% highlight swift %}
if let view = object as? UIView { 
    // view is a UIView 
}
{% endhighlight %}
