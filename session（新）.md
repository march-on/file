# Session #

## Session简单介绍 ##

> 在WEB开发中，服务器可以为每个用户浏览器创建一个会话对象（session对象），
> 注意：一个浏览器独占一个session对象(默认情况下)。因此，在需要保存用户数据时，
> 服务器程序可以把用户数据写到用户浏览器独占的session中，当用户使用浏览器访问其它程序时，
> 其它程序可以从用户的session中取出该用户的数据，为用户服务。


## Session和Cookie的主要区别 ##

- Cookie是把用户的数据写给用户的浏览器。
- Session技术把用户的数据写到用户独占的session中。
- Session对象由服务器创建，开发人员可以调用request对象得到session对象。


## session实现原理 ##

服务器是如何实现一个session为一个用户浏览器服务的？

> 服务器创建session出来后，会把session的id号，以cookie的形式回写给客户机，
> 这样，只要客户机不清除缓存数据，再去访问服务器时，都会带着session的id号去，服务器发现客户机浏览器带session id过来了，就会使用内存中与之对应的session为之服务。


## express框架实现session ##

	1.
	npm install express-session --save  
	使用express-session模块
	
	
	2.
	var session = require('express-session');

	app.js增加配置
	app.use(session({
		secret: 'fff', //一个String类型的字符串，作为服务器端生成session的签名
	    resave: true,   //是否允许session重新设置，要保证session有操作的时候必须设置这个属性为true
	    cookie: {maxAge: 60 * 1000}, //设置maxAge是Nms，即Nms后session和相应的cookie失效过期
	    saveUninitialized:true //初始化session时是否保存到存储。默认为true， 但是(后续版本)有可能默认失效，所以最好手动添加。
	}));
	
	
	3.使用req.session来获取和设置数据

# express文件上传模块 #

	1. npm install multiparty (安装multiparty模块)

	var multiparty = require('multiparty');
	var util = require("util");

	/* 上传*/
	router.post('/upFile', function(req, res){
	    //生成multiparty对象，并配置上传目标路径
	    var form = new multiparty.Form({uploadDir: './public/userupload/'});  //文件路径可以修改，如果修改记得和下面的路径保持一致
	
	    //上传完成后处理
	    form.parse(req, function(err, fields, files) {
	
	    var filesTmp = JSON.stringify(files,null,2);
	
	    if(err){
	        console.log('parse error: ' + err);
	    }else{
	        console.log('parse files: ' + filesTmp);
	        var files = files.inputFile;
	    }

		//发送第一张图片的信息
		let str = files[0].path;
	    let newPath = str.replace(/public/, '');
	        
	    res.send(newPath);    //发送消息回去
	    });
	});





	//页面部分写法
    <input type="file" id="xxx" name="inputFile" multiple='mutiple' />	//这里的name不要修改，固定为InputFile！！！！ mutiple是可以批量上传文件
    <input type="submit" value="上传"/>




## ajaxfileupload ##

	$.ajaxFileUpload({
	    url: "/upFile",
	    fileElementId: "input元素的id",
	    dataType: "string",
	    success: function(data) {
	        //ok
	    }
	});