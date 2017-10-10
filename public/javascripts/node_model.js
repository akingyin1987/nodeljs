
//以上实例中，代码 require('./hello') 引入了当前目录下的 hello.js 文件（./ 为当前目录，node.js 默认后缀为 js）。
//Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
var hello = require('./hello');
//hello.world();


var Hello = require('./hello');
hello = new Hello();
hello.setName('BYVoid'+__filename+":"+__dirname);
hello.sayHello();