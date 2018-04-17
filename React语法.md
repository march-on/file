# 使用ES6语法书写React组件 #

在Airbnb React/JSX Style Guide中，推荐使用ES6语法来编写react组件。

# 创建组件 #

ES6 class创建的组件语法更加简明，也更符合javascript。内部的方法不需要使用function关键字。


## React.Component ##

	import React from 'react';
	
	class MyComponent extends React.Component {
	  render() {
	    return (
	      <div>ES6方式创建的组件</div>
	    );
	  }
	}
	
	export default MyComponent;


## props and getDefaultProps ##

1. 使用React.Component创建组件，需要通过在constructor中调用super()将props传递给React.Component。

		import React,{ Component } from 'react';
		
		class MyComponent extends Component {
		
		  //static定义方式
		  static defaultProps = {
		    nameProp: ''
		  };
		
		  constructor(props) {
		    super(props);
		  }
		  
		  render() {
		    return (
		      <div>ES6方式创建的组件</div>
		    );
		  }
		}
		
		export default MyComponent;


## State ##

使用ES6 class语法创建组件，初始化state的工作要在constructor中完成。这种语法更加的符合JavaScript语言习惯。

	import React,{ Component } from 'react';
	
	class MyComponent extends Component {
	  constructor(props) {
	    super(props);
	    this.state = { data: [] };
	  }
	  
	  render() {
	    return (
	      <div>ES6方式创建的组件</div>
	    );
	  }
	}
	
	export default MyComponent;


## this ##

使用ES6 class语法创建组件， class中的方法不会自动将this绑定到实例中。必须使用 .bind(this)或者 箭头函数 ＝>来进行手动绑定。

	//推荐使用bind
	import React,{ Component } from 'react';
	
	class MyComponent extends Component {
	  handleClick() {
	    console.log(this);
	  }
	  
	  render() {
	    return (
	      <div onClick={this.handleClick.bind(this)}>ES6方式创建的组件</div>
	    );
	  }
	}
	
	export default MyComponent;


	//或者使用箭头函数 => ：
	mport React,{ Component } from 'react';
	
	class MyComponent extends Component {
	  handleClick = () => {
	    console.log(this);
	  }
	  
	  render() {
	    return (
	      <div onClick={this.handleClick}>ES6方式创建的组件</div>
	    );
	  }
	}
	
	export default MyComponent;


## 小结 ##

总的来说使用ES6来创建组件的语法更加简洁，这种语法避免了过多的React样板代码，

而更多的使用纯javascript语法，更符合javascript语法习惯。

React官方并没有强制性要求使用哪种语法，根据需要合理的选择即可。