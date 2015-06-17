---
layout: post
title:  "JavaScript闭包的一个例子"
date:   2015-06-17
tags: ['JavaScript','闭包']
---

之前有碰到过在使用for in语句给一个object添加属性的值，结果是该object中所有属性的值都是同一个。原因就是因为闭包中的一个特性。

**在一个函数中所有子函数，或者说，同一个闭包中所有的子闭包都访问一份相同值的upValue**

```javascript
function a(){
	var obj = new Object();
	var test = {m1:'hello',m2:'world'};
	for(var i in test){
		obj[i] = function(){
			console.log(test[i]);
		};
	}	
	console.log(obj.m1 === obj.m2); //false, 表明两者是不同的函数实例
	//两次调用都访问到了同一个上层闭包中的upValue，也就是同一个i
	obj.m1(); // world
	obj.m2(); // world
}

a();
```

解决方法1，加一层闭包

```javascript
function a(){
	var obj = new Object();
	var test = {m1:'hello',m2:'world'};
	for(var i in test){
		obj[i] = function(temp){ //闭包1
			return function(){ //闭包2
				console.log(test[temp]);
			}
		}(i);
	}	
	obj.m1(); 
	obj.m2(); 
}
a();
```

解决方法2，将列举中的值保存在每个实例中，可以避免上个方法中的因为增加闭包而产生的系统耗损

```javascript
function a(){
	var obj = new Object();
	var test = {m1:'hello',m2:'world'};
	for(var i in test){
		(obj[i] = function(temp){ 
			console.log(test[arguments.callee.temp]);
		}).temp=i;
	}	
	obj.m1(); 
	obj.m2(); 
}
a();
```
