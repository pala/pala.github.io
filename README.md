Source code of [http://ztpala.com](http://ztpala.com), powered by [Jekyll](http://jekyllrb.com/).

## How to use 如何使用
```sh
# Replace USERNAME with your GitHub id
# 请将 USERNAME 替换为你的 GitHub id
$ git clone git@github.com:pala/pala.github.com.git USERNAME.github.io
$ cd USERNAME.github.io
$ ./cleanup #will delete all my posts and pages
$ git remote set-url origin git@github.com:USERNAME/USERNAME.github.io.git
```

### Configuration 根据需要配置

1. _config.yml

2. CNAME (Delete it if you don't have a custom domain to set)

3. _layouts/default.html (edit site name and navigation menu)

Push to GitHub

```
$ git push origin master
```

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/deed.en_US).

`_posts` `images` 下所有文件版权所有 未经授权请勿使用。
