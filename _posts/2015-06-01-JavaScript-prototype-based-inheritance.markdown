---
layout: post
title:  "JavaScript Prototype Based Inheritance"
date:   2015-06-01
tags: ['JavaScript','Prototype Based Inheritance']
---

在JavaScript中，对象 (Object Instance)并没有原型，而构造器（contruct）有原型。对象只有“构造自某个原型”的问题，并不存在“持有某个原型”的问题。

原型是一个对象的实例。如果构造器有一个原型对象A，则该构造器所创建的实例（instance），都必然复制自A。而在类继承中，类不必是对象，不需要具有对象的性质。

##从函数到构造器
* 函数虽然有一个prototype, 但并不是构造器，因为不具有构造器的特性。
* 函数只有在引用原型的时候才会具有构造器的特性。
* 函数的原型是系统内置Object()构造器的实例。

```javascript

//证明函数的原型是Object()构造器的实例，该实例创建之后constructor属性被赋值为该函数
//以abc为例
function abc(){}

//函数实例创建后 constructor 被赋值为当前函数，所以下面显示 True
console.log(abc.prototype.constructor == abc);

//删除成员
delete abc.prototype.constructor;


//abc.prototype 本质上与new Object() 创建的实例没有区别，只有当赋值了之后才变身构造器
//之后如果用户在New一个 abc 的实例，则引擎再构建一个对象，并使该对象原型链指向这个prototype属性就可以了
console.log(abc.prototype.constructor == Object); //True
console.log(abc.prototype.constructor == new Object().constructor);//True

```

**构造器的prototype 属性总是来自于 new Object() 产生的实例**

由此可知，JavaScript中的对象实例 （Object Instance） 本质上是 **“一个指向原型的，并具有一个属性列表（properties）的结构”。** 它所有的对象(Object)性质，都来源于系统对原型的，以及Properties的理解

*最顶层的原型：object.prototype*，因此“空的对象”就是满足一下两个条件：

1. 指向 object.prototype
2. 指向空properties列表

所以因为 object.prototype (对象原型) 具有某些性质，所有的实例也具如下性质，

|     Name  			 |  		Type 	|
| ---------------------- | ------------- 	|
| tostring  			 | function 		|
| toLocaleString		 | function 		|
| toLocaleString		 | function 		|
| valueof				 | function 		|
| constructor			 | function 		|
| propertyIsEnumerable	 | function 		|
| hasOwnProperty		 | function 		|
| isPrototypeOf			 | function 		|


 某些构造器共有成员（property）:

|     Name  			 |  Type		|
| ---------------------- | ------------ |
| call		  			 | function 	|
| apply					 | function 	|
| caller				 | function 	|
| arguments				 | object 		|
| length				 | number 		|
| prototype				 | object 		|

###总结一下函数与构造器的在原型继承中的区别

其实木有十分明显的区别，可以这么说，函数中原型不起实际的作用，constructor中原型是有意义的值，并且总是来自于new Object()产生的实例。







