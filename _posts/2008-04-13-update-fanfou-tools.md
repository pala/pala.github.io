--- 
categories: WordPressBackup
date: 2008-04-13 19:19:00 -04:00
layout: post
title: 饭否更新工具
---
很简单的一个客户端,只有一个窗口

<code>
<pre>
#!/usr/bin/python
# Filename : fanfou.py
# -*- coding: utf-8 -*-
from __future__ import division
import sys
import os
from math import *
from PyQt4.QtCore import *
from PyQt4.QtGui import *

class Form(QDialog):
	def __init__(self, parent=None):
		super(Form, self).__init__(parent)
		self.msg = QLineEdit("type your message")
		self.msg.selectAll()
		self.submit = QPushButton("Submit")
		layout = QVBoxLayout()
		layout.addWidget(self.msg)
		layout.addWidget(self.submit)
		self.setLayout(layout)
		self.msg.setFocus()
		self.connect(self.submit, SIGNAL("clicked()"), self.send)
		self.setWindowTitle("Fanfou")
	def send(self):
		text = unicode(self.msg.text())
		command = "curl -u 用户名:密码 -d status='"+text.encode('utf-8')+
		"' http://api.fanfou.com/statuses/update.xml &amp;"
		os.system(command)
		self.msg.selectAll()
		quit()

app = QApplication(sys.argv)
form = Form()
form.show()
app.exec_()
</pre>
</code>
