--- 
layout: post
title: UITableViewCell 和 nib 文件
date: 2010-08-02
categories:
    - 电脑
tags:
    - iOS
---
如果你用IB创建了一个UITableViewCell，按照一般从nib文件里load view的思路，需要以下代码：

<pre class="prettyprint">
UITableViewCell *cell = (UITableViewCell *)[tableView dequeueReusableCellWithIdentifier:CellIdentifier];

if (cell == nil) {
    NSArray *nibArray = [[NSBundle mainBundle] loadNibNamed:@"YourNibFileName" owner:self options:nil];
    cell = (UITableViewCell *)[nibArray objectAtIndex:0];
}

return cell;
</pre>

[苹果文档](http://developer.apple.com/iphone/library/documentation/UserExperience/Conceptual/TableView_iPhone/TableViewCells/TableViewCells.html#//apple_ref/doc/uid/TP40007451-CH7-SW20)里则给了如下的巧妙方法：

<pre class="prettyprint">
static NSString *MyIdentifier = @"MyIdentifier";

UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:MyIdentifier];

if (cell == nil) {
    [[NSBundle mainBundle] loadNibNamed:@"TVCell" owner:self options:nil];
    cell = tvCell;
    self.tvCell = nil;
}
</pre>

tvCell即自己创建的UITableViewCell，而上述代码中出线tvCell的语句仅仅是：

`cell = tvCell;`

`self.tvCell = nil;`

和第一个方法不同，加载nib文件，

`[[NSBundle mainBundle] loadNibNamed:@"TVCell" owner:self options:nil];` 的返回值甚至都未被保留，其中的巧妙之处在哪呢？

注：tvCell为IBOutlet

在iOS4里则加入更为高效率的UINib，具体请参阅此文档。WWDC的讲座里也详细讲解了怎样根据系统版本(iOS4与否)来分别使用第二种方法或者是UINib。
