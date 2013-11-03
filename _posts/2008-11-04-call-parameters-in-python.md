---
date: 2008-11-04
title: 值传递还是引用传递
layout: post
categories: 电脑
---
今天花了半晚上来研究Python函数里的参数到底是值传递还是引用传递,把最终的想法写在这里.

先来说说名字与赋值:

名字并不是object的一种属性.一个object可以有很多个名字,或者没有名字,它本身不关心这个.名字存在于namespace中.namespace可以看作是字典,其元素是(名字:object 引用).而赋值改变的只是namespace,而非对象.如:

`name = 「firstname」`

这条语句表示你将」name」这个名字引入local namespace,然后将它指向一个值为」firstname」的string对象.

`name = 「firstname」`

`name = 「secondname」`

这两条语句表示什么呢?第一句和上面一样,而第二句则重新向local namespace引入名字替换第一句的」name」,再将它指向「secondname」. 改变的是namespace,而作为object的「firstname」丝毫不受其影响.再看第三个例子:

`name = ['first']`

`name.append(‘second’)`

第一句和上面一样,改变了namespace,第二句和上个例子又有所不同.它调用了第一句中的object(list)的一个方法,然后修改了这个object,而namespace是不受影响的.同时不受影响的还有’first’及’second’.

可这和函数里的参数传递有什么关系?我们来继续深入一下,看下面这个例子:

```bash
>>> myList=[1,2,3]
>>> def change1(n):
…         n=[]
>>> def change2(n):
>>> change1(myList):
>>> myList
[1, 2, 3]
>>> change2(myList)
>>> myList
['new', 2, 3]
```

myList的类型是list,属于mutable.但不是很多地方说mutable是引用传递,从而可以在函数里修改值的.但为什么change1没有改变myList?

当调用函数时,参数是存储在这个函数的符号表(symbol table)里.而所有的赋值也都会存在这个符号表里.这也就是说,当在change1里执行 myList = []时.传递的只是myList的值,也就是对[1,2,3]这个list的引用,而非这个list本身!而所赋的值仅仅是保存在函数的范围内,这意味着此函数的symbol table里的myList的值被更改为指向[]的引用(回想前面的namespace的改变而非object的改变),并未影响函数以外的所有name或者object.

当调用change2时,函数里出现的myList仍旧是它symbol table的myList.但与change1不同,这个函数没有改变myList的值,无论是函数内的还是函数外的,它所改变的是symbol table里的myList的值所指向的对象.这个对象同时也是函数外的myList所指向的.所以两个函数结果不同便是显而易见的了.

这两个函数的相同点是都没有改变函数外的namespace中的myList.而函数二改变了myList所指向的object.

```bash
>> def change3(n):
…     n=['a','b','c']
…     n[0]=’new’
>>> myList
[1, 2, 3]
>>> change3(myList)
>>> myList
[1, 2, 3]
```

从change3就可以看出,当myList传递到函数里的值被改为指向一个新的list,然后再修改这个新list本身,那么函数外面的name 和 object都不会发生改变.

再多看一个例子:

```bash
>>> myList
[1, 2, 3]
>>> def change4(n):
…        n = n + [4]
…
>>> change4(myList)
>>> myList
[1, 2, 3]
>>> def change5(n):
…        n+=[4]
…
>>> change5(myList)
>>> myList
[1, 2, 3, 4]
```

和change1类似,change4里的语句n=n+[4]改变的只是这个函数内部的值(即已经指向一个含有[4]的新list),并未影响到函数外部的myList.而change5里的语句: n+=[4], 则相当于n.append(4).此时回想一下最初的介绍.这样一个语句调用的是object的一个方法,改变的也是object,也就是函数内外的变量所指向的同一个list.所以在Python里 i = i + 1和 i +=1并不能完全等同.而n += [4]不是一个很好的编程习惯,应该避免,选择更易读的append函数.

总的来说,Python函数里的参数传递还是值传递,不过在传递list等可变的object的会「表现为」引用传递.下面是Python文档的原话:

>The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called; thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). When a function calls another function, a new local symbol table is created for that call.
