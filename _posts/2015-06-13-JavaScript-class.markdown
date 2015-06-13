---
layout: post
title:  "JavaScript Class or Prototype based Inheritance?"
date:   2015-06-13
tags: ['JavaScript','Prototype Based Inheritance']
---
在JS中，两种不同的实现对象系统的方式，如果能看懂以下两个例子，那么对于JavaScript面向对象部分，应该有比较好的了解了。

* 在JavaScript可用使用call与this，类似于“类抄写”的方式来构建*对象系统*，一个经典的例子，摘录自《JavaScript语言精髓与编程实践》

```javascript

extend = function(subClass, baseClass){
	//以 extend(Cat,Animal) 为例
	//在Cat中，将Animal的构造器保存在baseConstructor中
	subClass.baseConstructor = baseClass;
	subClass.base = {};
	//call的作用：
	//将baseClass中的属性方法，放入subClass.base中使用
	//也就是复制Animal的属性与方法到Cat的base中
	baseClass.call(subClass.base);
}

function Mouse(){ /* 测试 */ }

function Animal(name){
	this.name= name;
	this.say = function(msg){
		alert(this.name + ': ' + msg);
	}
	this.eat = function(){
		//一个关于“吃”的function
		this.say('吃！');
	}
}

function Cat(){
	//将baseConstructor中所有的属性的方法复制到this中
	Cat.baseConstructor.call(this, 'cat');
	//重写从baseConstructor中复制来的eat方法
	this.eat = function(food){
		if(food instanceof Mouse){
			Cat.base.eat.call(this);
		}else{
			this.say('只吃老鼠，不吃'+food.name);
		}
	}
}
extend(Cat, Animal);

function Lion(){
	//因为复制了Animal中所有的东西, 所以new Lion()出来的实例能用Animal中的方法eat.
	Lion.baseConstructor.call(this, 'lion');
}
extend(Lion, Animal);

//测试上述内容
var cat = new Cat();
var mouse = new Mouse();
var lion = new Lion();
var unknowFood = {};

cat.eat(mouse);//cat: 吃！
cat.eat(unknowFood);//cat: 不吃！
lion.eat(mouse);//lion: 吃！

/*
 * 这里是如何构建一个与类继承相似的对象系统的？
 * 我们用一个extend来维护了baseConstructor
 * 这个东西会一直指向父类，也就是Animal
 * 之后所有的子类实例，都会使用call来继承Animal中的方法的属性
 * 再就是通过修改this, 来定制或覆盖一些继承来的方法（如eat）
 */
```

* 原型继承，也就是用prototype来实现继承，具体请看[JavaScript 原型链][link]

[link]:{{site.baseurl}}/2015/06/09/JavaScript-原型链.html

```javascript
function Animal(){}
function Cat(){}

Animal.prototype.eat = function(){alert('吃！')}

Cat.prototype = new Animal();

var cat = new Cat();
cat.eat();
```
##两者的优缺点
1. 类抄袭成员访问更加方便，但内存占用大。原型继承则相反
2. 类抄袭不依赖原型链，无法用instanceof来检测。原型继承则相反
3. 原型继承的“写时复制”的机制，会使“引用类型”（function等）和值类型（string，number等）的数据表现不一致。也就是所有的实例都会指向一个引用.












