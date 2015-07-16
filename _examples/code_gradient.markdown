---
layout: example
title: Gradient Background
type: Code
categories: ['HTML5+CSS3']
---

###Gradient Background Less code

[Live Demo](/examples/gradient_background.html)

* Less function to create gradient for different browser engines.

```css
.example2-gradient{
	.rainbow-gradient(45deg, red, orange, yellow, green, blue, darkblue, purple, pink, red);
	height: 300px;
	width: 100%;
}
```

```css
.rainbow-gradient(
		@deg: 0deg,
		@c1: red,
		@c2: orange,
		@c3: yellow,
		@c4: green,
		@c5: blue,
		@c6: deepblue,
		@c7: purple,
		@c8: pink,
		@c9: red
){
	background-image: 
		-webkit-gradient(linear, left top, left bottom, color-stop(0%, @c1), 		
			color-stop(11%, @c1), color-stop(11%, @c2), 		
			color-stop(22%, @c2), color-stop(22%, @c3), 	
			color-stop(33%, @c3),	color-stop(33%, @c4), 		
			color-stop(44%, @c4), color-stop(44%, @c5), 		
			color-stop(55%, @c5), color-stop(55%, @c6), 		
			color-stop(66%, @c6), color-stop(66%, @c7), 	
			color-stop(77%, @c7), color-stop(77%, @c8), 		
			color-stop(88%, @c8), color-stop(88%, @c9), 		
			color-stop(100%, @c1)
		);

  background-image: 
  	-webkit-linear-gradient(@deg, 
			@c1 0%, 
			@c1 11%, 	@c2 11%, 	
			@c2 22%, 	@c3 22%, 		
			@c3 33%, 	@c4 33%, 	
			@c4 44%, 	@c5 44%, 
			@c5 55%,	@c6 55%, 
			@c6 66%, 	@c7 66%, 
			@c7 77%, 	@c8 77%, 
			@c8 88%, 	@c9 88%, 	
			@c1 100%
		);

  background-image: 
  	-moz-linear-gradient(@deg, 
			@c1 0%, 
			@c1 11%, 	@c2 11%, 	
			@c2 22%, 	@c3 22%, 		
			@c3 33%, 	@c4 33%, 	
			@c4 44%, 	@c5 44%, 
			@c5 55%,	@c6 55%, 
			@c6 66%, 	@c7 66%, 
			@c7 77%, 	@c8 77%, 
			@c8 88%, 	@c9 88%, 	
			@c1 100%
		);

  background-image: 
  	-o-linear-gradient(@deg, 
			@c1 0%, 
			@c1 11%, 	@c2 11%, 	
			@c2 22%, 	@c3 22%, 		
			@c3 33%, 	@c4 33%, 	
			@c4 44%, 	@c5 44%, 
			@c5 55%,	@c6 55%, 
			@c6 66%, 	@c7 66%, 
			@c7 77%, 	@c8 77%, 
			@c8 88%, 	@c9 88%, 	
			@c1 100%
		);

   background-image: 
  	-ms-linear-gradient(@deg, 
			@c1 0%, 
			@c1 11%, 	@c2 11%, 	
			@c2 22%, 	@c3 22%, 		
			@c3 33%, 	@c4 33%, 	
			@c4 44%, 	@c5 44%, 
			@c5 55%,	@c6 55%, 
			@c6 66%, 	@c7 66%, 
			@c7 77%, 	@c8 77%, 
			@c8 88%, 	@c9 88%, 	
			@c1 100%
		); 

	//CSS3 linear-gradient
  background-image: 
  	linear-gradient(@deg, 
			@c1 0%, 
			@c1 11%, 	@c2 11%, 	
			@c2 22%, 	@c3 22%, 		
			@c3 33%, 	@c4 33%, 	
			@c4 44%, 	@c5 44%, 
			@c5 55%,	@c6 55%, 
			@c6 66%, 	@c7 66%, 
			@c7 77%, 	@c8 77%, 
			@c8 88%, 	@c9 88%, 	
			@c1 100%
		); 
}
```
