---
layout: post
title:  "JavaScript Closure Function"
date:   2015-06-16
tags: ['JavaScript']
---

闭包在JavaScript中实现了“在内部保存数据和对外部无副作用”这两大特性。

闭包有两个特点，
1. 闭包在函数执行过程中处于激活状态（作用域可见性）
2. 闭包在函数运行结束之后，保持运行过程中最终数据状态（数据引用的识别）

***闭包对应的是运行期的函数实例，所以分析闭包，需要知道什么情况下会**
##什么是函数实例？

下面3中不同构造对象的方法说明了什么情况下会产生函数实例，or 会产生闭包。

```javascript
/*
 * 示例1
 * 没有函数实例产生，只是函数的引用
 */
function myFunc(){}

var f1 = myFunc;
var f2 = myFunc;

alert(f1 == f2);//true
```

```javascript
/*
 * 示例2
 * 没有函数实例产生。
 * 因为只是原型中的方法, 只产生对于原型方法的引用。
 */
function MyObject(){
	MyObject.prototype.method = function(){}
}

var obj1 = new MyObject();
var obj2 = new MyObject();

alert(obj1 === obj2); //true
```

```javascript
/*
 * 示例3
 * 有函数实例产生。
 */
function MyObject(){
	this.method = function(){}
}

var obj1 = new MyObject();
var obj2 = new MyObject();

alert(obj1 === obj2); //false
```

```javascript
/*
 * 示例4
 * 有函数实例产生。需要执行该函数，与第一个例子不同
 */
function func_1(){
	function MyFunc(){
		//...
	}
	return MyFunc;
}

var f1 = func_1();
var f2 = func_1();

alert(f1 === f2); //true
```

```javascript
/*
 * 示例5
 * 有函数实例产生。jQuery闭包
 */
(function( window, undefined ) { 
	var jQuery = (function(){
		 var jQuery = function( selector, context ){
		 	//....
		 }
		return jQuery;
	})();
	window.jQuery = window.$ = jQuery; 
})(window); 
```


