---
layout: post
title:  "Tips for JavaScript Variable Scope"
date:   2015-06-01
tags: ['JavaScript']
---

一些JavaScript变量使用中的注意点。

##全局变量的使用
* 减少在全局范围内任意声明变量，特别是for语句同时声明变量。
* 在函数内部不使用var声明来对变量赋值，这将会隐式地在全局声明，或读写到一个全局的变量。
* 显式声明的变量在函数和全局作用域中是没有次序限制的。

```javascript
TMyClass = Class(TObject, foo);

function foo(){//some codes...} 
//在foo声明之前就可以使用，所以JavaScript不用使用专门的语法来处理前置声明。
```


