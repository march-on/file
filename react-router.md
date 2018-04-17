# router #

路由库React-Router。它是官方维护的，事实上也是唯一可选的路由库。

*它通过管理 URL，实现组件的切换和状态的变化，开发复杂的应用几乎肯定会用到。*


## 使用 ##

> 路由器Router就是React的一个组件
 
	import {
	    HashRouter as Router,
	    Route
	} from 'react-router-dom';
	render(<Router/>, document.getElementById('app'));

> Router组件本身只是一个容器，真正的路由要通过Route组件定义

	<Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/info" component={Stu} />
      </div>
    </Router>
	
上面代码中，用户访问/ 时，加载Login组件；访问/reg（http://localhost:8080/#/reg）时，加载Reg组件。

*exact 精准匹配*
*如果为 true，path 为 '/one' 的路由将不能匹配 '/one/two'，反之，亦然。*

**路由的切换由URL的hash变化决定，即URL的#部分发生变化。举例来说，用户访问http://www.example.com/，实际会看到的是http://www.example.com/#/。**

## Route内进行跳转 ##
	
	//Route内都有一个history
	const {
		history
	} = this.props

*history：管理历史堆栈、导航*

	history.push("/reg");	//跳转到/reg



## Link ##

Link组件用于取代<a>元素，生成一个链接，允许用户点击后跳转到另一个路由。它基本上就是<a>元素的React 版本，可以接收Router的状态。

	<Link to="/stu/class">班级管理</Link>
	//类似于
	<a href="/stu/class">班级管理</a>


## 路由嵌套使用 ##

	import {
	    HashRouter as Router,
	    Route,
		Link
	} from 'react-router-dom';

	render() {
		return (
			<div>
				<div>
					<ul>
						<li><Link to="/stu/emp">员工管理</Link></li>
						<li><Link to="/stu/info">信息管理</Link></li>
					</ul>
				</div>
		        <Router>
		            <div>
		                <Route path='/stu/emp' component={Emp} />
		                <Route path='/stu/info' component={Info} />
		            </div>
		        </Router>
			</div>
		)
	}