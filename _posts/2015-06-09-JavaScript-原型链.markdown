---
layout: post
title:  "JavaScript 原型链"
date:   2015-06-09
tags: ['JavaScript','Prototype Based Inheritance']
---

先来罗列一下原型继承的几个基础：

1. 空的对象(new Object())是所有对象的基础。
2. 原型(prototype)也是对象的实例（object instance）
3. 构造器的prototype属性总是来自于 new Object() 产生的实例
4. 在属性访问中，如果没有子类对象该属性，则访问其原型的成员列表。

JavaScript原型链问题

```javascript
function MyObject(){}
function MyObjectEx(){}

//示例1：构造器 MyObject 通过prototype 创建一个原型链
MyObjectEx.prototype = new MyObject();

//示例2：一般情况下，实例可以通过 constructor 来找到构造器
var obj = new MyObject();
console.log(obj.constructor.prototype) //MyObject

//示例3：但由于在示例1中重置了prototype，下面将会显示True
console.log(MyObjectEx.prototype.constructor == MyObject);
//进而所有实例的构造器也是一样的, 即使是构造自不同的构造器
var obj1 = new MyObject();
var obj2 = new MyObjectEx();
console.log(obj1.constructor == obj2.constructor); //true

//解决方法一, 这样实例的constructor就能指向正确的构造器
//但切断了原型的constructor属性，也就是构造器MyObjectEx的原型链
MyObjectEx.prototype = new MyObject();
MyObjectEx.prototype.constructor = MyObjectEx;

//解决方法二, 在每次实例化MyObjectEx，给每个实例的constructor赋值
//效率比较低下。。。
function MyObjectEx(){
	this.constructor = MyObject // or = arguments.callee;
	....
}
```

###总结一下原型继承与原型修改

1. 原型继承的关系总是在一开始就设计好了的，例如 动物>>哺乳动物>>犬科>>狗 的关系
2. 成员的修改，即原型的修改是构造对象系统的方法

所以Javascript，在理论上我们可以先创造一个没有任何属性成员的类属关系系统，然后通过不断修改原型，来获得完整的对象系统。



