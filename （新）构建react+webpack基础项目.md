# 构建 react + webpack 基础项目

#####  1、初始化项目

```
新建一个文件夹，进入此文件夹，执行下面命令
npm init
```

##### 2、安装 React 依赖

```
npm install react react-dom react-router-dom --save-dev
```

##### 3、安装 babel

```
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 babel-plugin-transform-decorators-legacy babel-plugin-transform-runtime babel-preset-env --save-dev 
```

##### 4、安装 loader

```
npm install css-loader style-loader url-loader html-loader --save-dev
```

##### 5、(先 npm install webpack -g 全局安装)安装 webpack 

```
npm install webpack --save-dev
npm install html-webpack-plugin --save-dev
```

##### 6、根目录新增配置 webpack.config.js

```

var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	name: "production",
	entry: {
		index: "./src/index.js",
		//添加要打包在vendors里面的库
		// vendor: ['react', 'react-dom', 'react-router', "antd"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: './index.html',
			cache: true
		})
	],
	//配置;打包之后的文件信息
	output: {
		path: __dirname + "/dist/",
		filename: "[name].js",
		publicPath: '',
		chunkFilename: "[name].js",
	},
	//配置source-map
	devtool: "source-map",

	//配置loader
	module: {
		loaders: [
			//配置哪些文件需要通过babel来进行转换
			{
				test: /\.html$/,
				loader: 'html-loader'
			}, {
				test: /\.js$/,
				exclude: /node_modules|server|dao|routes/,
				loader: "babel-loader"
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}, {
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			}, {　　　　
				test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
				　　　　loader: 'url-loader?limit=8192'　　　
			}
		]
	}
};

```


##### 7、新建/配置 .babelrc

```

{
  "presets": [
    ["env", { "modules": false }],
    "stage-0",
    "react"
  ],
  "plugins": ["transform-runtime", "transform-decorators-legacy"],
  "comments": false,
  "env": {
    "test": {
      "presets": ["env", "stage-0"],
      "plugins": [ "istanbul" ]
    }
  }
}

```

##### 8、安装 

```
//全局安装
npm install webpack-dev-server -g
//项目内安装
npm install webpack-dev-server --save-dev


```


##### 9、开启项目

```
//新增默认启动网页index.html

//新建src文件夹，在下面新增index.js


//启动服务
webpack-dev-server --inline --hot --open




//可配置简洁启动方式
package.jsonscripts下增加scripts配置
"scripts": {
	"dev": "webpack-dev-server --inline --hot --open"
  }

//然后可以使用npm run dev来启动
npm run dev

```




