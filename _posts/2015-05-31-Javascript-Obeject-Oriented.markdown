---
layout: post
title:  "Javascript Obeject Oriented Key Syntax"
date:   2015-05-31
tags: ['JavaScript','Prototype Based Inheritance']
---
JavaScript中并没有类（class），而是采用了构造器（contructor）来实现类的某些功能。

对象的继承（Inheritance）一般有三种，class-based, prototype-based（原型继承），和metaclass-based（基于元类）。

##New的使用
* Using Constructor to Create an Object （用构造器创建对象）  

```javascript
//Constructor
function MyObject(){
	this.name = 'Object A';
	this.valie = '123';
	this.getName = function(){
		return this.name;
	}
}

//Use 'new' to initilize object.
//Syntax: obj = new contructor[(args)]
var obj = new MyObject;
var obj = new MyObject(); //注意：这里并不是函数调用
```

* new + 函数 来创建对象实例

```javascript
//破坏了对象的继承链
function foo(){
	var data = this;
	return {}; //只能返回引用类型
}
obj = new foo();

//用“返回函数的运算”方式来得到构造器
function getClass(name){
	switch(name){
		case 'string':return String;
		case 'array': return Array;
		default: return Object;
	}	
}
obj = new (getClass());
```
##直接声明对象
JSON文件就是使用这种方式

```javascript
obj = { propertyName: expression[,...]} //Basic Syntax
obj = {}; //空对象
obj = null; //空对象 
```
##Delete

1. 不能删除继承自原型的成员
2. 用Var声明的变量

delete 运算只是删除了对象实例的属性表中的值。如果需要删除该属性，需修改原型实例。

##方法调用
JavaScript是通过运算来实现面向对象特性。“.”与“[]”是两个运算符，使用他们来进行对象方法调用

```javascript
obj.metod();
obj['method']();
```
##对象成员操作
```javascript
for(var n in obj){ } //遍历

//成员检查，常用于浏览器兼容性检查
//Syntax: propertyName in object 
if('XMLHttpRequest' in window){
	//IE7+
}else if('ActiveXObject' in window) {
	//IE4.0-6.0
}

obj instanceof MyObject //检查实例类型，支持类的继承
```