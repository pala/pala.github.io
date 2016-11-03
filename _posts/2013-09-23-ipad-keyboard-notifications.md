---
layout: post
title: iPad Split Keyboard Notifications
categories: 电脑
tags: iOS
---
最近發現iPad下一個關於**Split Keyboard Notifications**的詭異問題，在這裏記錄一下。

一般情況下，只要鍵盤處於**split**狀態，不應該收到任何相關通知，但以下是個例外。

當鍵盤處於**docked**狀態，此時如果**手動split**鍵盤，鍵盤會仍處在docked的位置。此時切換輸入法（高度變化）不會收到任何通知。但如果將鍵盤隱藏，再重新顯示，或者一種更普遍情況，顯示鍵盤的時候，狀態是 **split + docked**，那麼切換輸入法時會收到 `UIKeyboardWillShowNotification` `UIKeyboardDidShowNotification`，但再隱藏時不會收到 `UIKeyboardWillHideNotification`。最神奇的是，如果按住隱藏鍵盤按鈕將鍵盤向上推離dock區域，仍然會收到 `UIKeyboardWillHideNotification`。

在蘋果官方文檔 [Text Programming Guide for iOS](https://developer.apple.com/library/ios/documentation/StringsTextFonts/Conceptual/TextAndWebiPhoneOS/KeyboardManagement/KeyboardManagement.html) 中，給出了如下處理鍵盤通知的代碼：

{% highlight objc %}
// Call this method somewhere in your view controller setup code.
- (void)registerForKeyboardNotifications
{
    [[NSNotificationCenter defaultCenter] addObserver:self
            selector:@selector(keyboardWasShown:)
            name:UIKeyboardDidShowNotification object:nil];
 
   [[NSNotificationCenter defaultCenter] addObserver:self
             selector:@selector(keyboardWillBeHidden:)
             name:UIKeyboardWillHideNotification object:nil];
 
}
 
// Called when the UIKeyboardDidShowNotification is sent.
- (void)keyboardWasShown:(NSNotification*)aNotification
{
    NSDictionary* info = [aNotification userInfo];
    CGSize kbSize = [[info objectForKey:UIKeyboardFrameBeginUserInfoKey] CGRectValue].size;
 
    UIEdgeInsets contentInsets = UIEdgeInsetsMake(0.0, 0.0, kbSize.height, 0.0);
    scrollView.contentInset = contentInsets;
    scrollView.scrollIndicatorInsets = contentInsets;
 
    // If active text field is hidden by keyboard, scroll it so it's visible
    // Your app might not need or want this behavior.
    CGRect aRect = self.view.frame;
    aRect.size.height -= kbSize.height;
    if (!CGRectContainsPoint(aRect, activeField.frame.origin) ) {
        [self.scrollView scrollRectToVisible:activeField.frame animated:YES];
    }
}
 
// Called when the UIKeyboardWillHideNotification is sent
- (void)keyboardWillBeHidden:(NSNotification*)aNotification
{
    UIEdgeInsets contentInsets = UIEdgeInsetsZero;
    scrollView.contentInset = contentInsets;
    scrollView.scrollIndicatorInsets = contentInsets;
}
{% endhighlight %}

上面的代碼在上述特殊情況下，`scrollView.contentInset` 怎麼也不會被重新reset，下面的代碼怎麼也不會執行

{% highlight objc %}
UIEdgeInsets contentInsets = UIEdgeInsetsZero;
scrollView.contentInset = contentInsets;
scrollView.scrollIndicatorInsets = contentInsets;
{% endhighlight %}

如果有人能幫忙測試一下，不勝感激。
