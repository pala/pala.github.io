--- 
categories: WordPressBackup
date: 2008-03-03 12:51:09 -05:00
layout: post
title: "Remove last n letters from a string"
---
Remove last n letters from a string:
#string_name[:n]
#For example:
&gt;&gt;&gt;s='abcd'
&gt;&gt;&gt;s[:-1]
'abc'

#p.s. If you want to remove a specific letter from the beginning or end of a string, you can use rstrip(), lstrip() or strip()

#strip() removes both the leading and trailing letters if specified by parameter:
&gt;&gt;&gt;s='abcdaa'
&gt;&gt;&gt;s.strip('a')
'bcd'

#strip() removes leading and trailing whitespaces if not given a parameter:
&gt;&gt;&gt;s='abcdaa\n'
&gt;&gt;&gt;s.strip()
'abcdaa'

#Similarly, rstrip() removes the trailing letters or whitespaces:
&gt;&gt;&gt;s='abcdaa'
&gt;&gt;&gt;s.strip('a')
'abcd'

#lstrip() removes the leading letters or whitespaces:
&gt;&gt;&gt;s='abcdaa'
&gt;&gt;&gt;s.strip('a')
'bcdaa'
