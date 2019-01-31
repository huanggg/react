import React, { Component } from "react";
import "./manager.scss";
class Manager extends Component {
  componentDidMount() {
    console.log("路由传递过来的参数", this.props.location.query.name);
  }
  render() {
    return (
      <div className="Manager">
        <div>管理页</div>
        <ul>
          <li>1 创建工程项目</li>
          <li>$ cnpm install -g create-react-app</li>
          <li>$ create-react-app my-app</li>
          <li>$ cd my-app/ </li>
          <li>$ npm start</li>
          <li>
            2 暴露config 文件 -> npm run eject (可能要先git commit -m '初始化')
          </li>
          <li>3 安装 react-router-dom </li>
          <li>$ npm install react-router --save react-router-dom</li>
          <li>4 安装状态管理 store </li>
          <li>$ npm install --save redux</li>
          <li>$ npm install --save react-redux</li>
          <li>5安装axios</li>
          <li>cnpm install axios --save</li>
          <li>解决跨域请求</li>
          <li>
            package.json 文件中配置代理 ,"proxy": "http://bptest.vanke.com",
          </li>
          <li>
            配置绝对路径 alias对象下 "react-native": "react-native-web", "@":
            path.resolve(__dirname, "../src")
          </li>
        </ul>
      </div>
    );
  }
}

export default Manager;
