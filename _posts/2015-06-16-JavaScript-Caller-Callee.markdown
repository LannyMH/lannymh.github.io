---
layout: post
title:  "JavaScript Callee & Caller"
date:   2015-06-16
tags: ['JavaScript']
---

JavaScript 调用栈 中的callee and caller.

##callee
1. 在JScript5.5 JavaScript1.2以下版本是不支持的。
2. 是 arguments对象中的一个成员，arguments.callee
3. 能够解决匿名函数和递归重写函数中调用自身的问题

```javascript
function myFunction(){
	console.log(arguments.callee === myFunction.arguments.callee);
	console.log(arguments.callee === myFunction);
}

myFunction(); 

//True
//True

//在匿名函数中调用自身
void function(){
	//...
	arguments.callee();
}
```

##caller
1. 如果要遍历栈，需要找到指定的函数，包括匿名函数在内，然后使用caller来访问他。
2. caller是Fucntion的一个成员
3. 旧版本Safari中的WebKit引擎不支持Function中的caller