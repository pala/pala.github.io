---
layout: post
title: Mac OS X Hot Corners
tags: Mac
---
You can use the following values to set Mac OS X's hot corners in your [dotfiles](https://github.com/pala/dotfiles/blob/master/osx/set-defaults.sh):

{% highlight sh %}
# Hot corners
# Possible values:
#  0: no-op
#  2: Mission Control
#  3: Show application windows
#  4: Desktop
#  5: Start screen saver
#  6: Disable screen saver
#  7: Dashboard
# 10: Put display to sleep
# 11: Launchpad
# 12: Notification Center
# via http://git.io/1pS-2g

# The following are my settings:

# Top Right Corner → Mission Control
defaults write com.apple.dock wvous-tr-corner -int 2
defaults write com.apple.dock wvous-tr-modifier -int 0

# Top left Corner → Application windows
defaults write com.apple.dock wvous-tl-corner -int 3
defaults write com.apple.dock wvous-tl-modifier -int 0

# Bottom Right Corner → Desktop
defaults write com.apple.dock wvous-br-corner -int 4
defaults write com.apple.dock wvous-br-modifier -int 0

# Bottom left Corner → Put display to sleep
defaults write com.apple.dock wvous-bl-corner -int 10
defaults write com.apple.dock wvous-bl-modifier -int 0
{% endhighlight %}
