---
layout: post
title: Receptionist Pattern
tags:
    - iOS
    - Cocoa
---
Let's say we want to collect some data from the M7 processor, like the date of the last activity:

{% highlight objc %}
[self.activityManager startActivityUpdatesToQueue:self.queue
                                      withHandler:^(CMMotionActivity *activity) {
                                          self.lastActivityDate = activity.startDate;
                                      }];
{% endhighlight %}

If we use KVO to observe the value of lastActivityDate from a view controller and update a label based on the changes of that value. Since the view controller won't know whether the notifications will be delivered to the main queue or not, we have to make sure all UI updates after receiving notifications will run on the main queue.

One way to do this is to specifically call the main queue in the view controller:

{% highlight objc %}
- (void) observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object
                         change:(NSDictionary *)change context:(void *)context
{
    if (object == self.model && [keyPath isEqualToString:@"lastActivityDate"]) {
        dispatch_async(dispatch_get_main_queue(), ^{
            self.lastActivityDateLabel = @"xxx";
        });
    }
}
{% endhighlight %}

The other way is adopting the [receptionist pattern].

{% gist 8922410 %}

The benefit of the second way is that we don't need to write tons of duplicate codes to deal with queues in every view controller that observes changes of the model.

[receptionist pattern]: https://developer.apple.com/library/ios/documentation/general/conceptual/CocoaEncyclopedia/ReceptionistPattern/ReceptionistPattern.html
