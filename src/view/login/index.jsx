import React, { Component } from "react";
import "./login.css";
import LOGOimg from "@/static/images/LOGO.png";
import logobig from "@/static/images/logobig.png";
import { connect } from "react-redux";
import { Input, Button, Message } from "element-react";
import axios from "@/axios/index";
import aes from "@/util/aes";
// 登陆页面
let logoimg = {
  width: 139,
  height: 22
};
let mainImage = {
  backgroundImage: "url(" + require("../../static/images/logobg.png") + ")"
};
let dengluImage = {
  backgroundImage: "url(" + require("../../static/images/denglubg.png") + ")"
};
//状态管理 的state
function mapState(state) {
  return {
    value: state.userInfo.name,
    conut: state.conut
  };
}
// 状态管理的 action
function mapDispatch(dispatch) {
  return {
    onIncreaseClick: function() {
      dispatch({ type: "SET_USER_INFO", userInfo: "lishi" });
    }
  };
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: 1,
      username: "",
      password: ""
    };
    // 点击事件并传参
    this.handleClick = this.handleClick.bind(this, 555);
    this.home = this.home.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.handelChangepassword = this.handelChangepassword.bind(this);
    this.login = this.login.bind(this);
  }
  //生命周期
  componentDidMount() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    const mygradient = ctx.createLinearGradient(0, 0, 300, 0);
    mygradient.addColorStop(0.15, "#0088ff");
    mygradient.addColorStop(0.5, "#00bff9");
    mygradient.addColorStop(1, "#00f6f2");
    ctx.font = "16px Arial";
    ctx.fillStyle = mygradient;
    ctx.fillText("打造专业模型数据服务", 0, 22);
    const c2 = document.getElementById("myCanvas2");
    const ctx2 = c2.getContext("2d");
    const mygradient2 = ctx2.createLinearGradient(0, 0, 300, 0);
    mygradient2.addColorStop(0.15, "#0088ff");
    mygradient2.addColorStop(0.5, "#00bff9");
    mygradient2.addColorStop(1, "#00f6f2");
    ctx2.font = "16px Arial";
    ctx2.fillStyle = mygradient2;
    ctx2.fillText("用BIM给与您更准确数据支持", 0, 22);
  }
  //用户输入处理函数
  handelChange(e) {
    console.log("username", e);
    this.setState({
      username: e
    });
  }
  //用户输入密码处理函数
  handelChangepassword(e) {
    console.log("password", e);
    this.setState({
      password: e
    });
  }
  // 路由跳转
  home() {
    this.props.history.push("/home");
  }
  //处理函数，并传参
  handleClick(num, e) {
    this.setState(prevState => ({
      isToggleOn: num
    }));
  }
  // 登陆
  async login() {
    const params = {
      userAccount: aes.Encrypt(this.state.username.trim()),
      password: aes.Encrypt(this.state.password.trim())
    };
    await axios
      .post("/release/page/login", params)
      .then(res => { 
        if (res.data.resultCode === "0000") {
          console.log("99999", res);
          sessionStorage.setItem(
            "tokenKey",
            JSON.stringify(res.data.data.tokenValue)
          );
          sessionStorage.setItem(
            "userName",
            JSON.stringify(res.data.data.userName)
          );
          sessionStorage.setItem(
            "userAccount",
            JSON.stringify(res.data.data.userAccount)
          );
          if (sessionStorage.getItem("tokenKey")) {
            console.log(122222);
             this.props.history.push("/home");         
          }
        } else {
          Message({
            message: "用户名,密码错误",
            type: "error",
            duration: 1000
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { value, conut, onIncreaseClick } = this.props;
    return (
      <div className="login">
        <header className="login-header">
          <img src={LOGOimg} alt="" style={logoimg} />
        </header>

        <div className="main" style={mainImage}>
          <div className="loginlayer">
            <div className="left" style={dengluImage}>
              <img src={logobig} alt="" style={{ width: 298, height: 47 }} />

              <div className="linear-gradient" style={{ marginTop: 344 }}>
                <canvas id="myCanvas" width="300" height="59">
                  您的浏览器不支持 HTML5 canvas 标签。
                </canvas>
              </div>
              <div className="linear-gradient">
                <canvas id="myCanvas2" width="300" height="59">
                  您的浏览器不支持 HTML5 canvas 标签。
                </canvas>
              </div>
            </div>
            <div className="right">
              <div className="rightHeader">
                <span style={{ color: "#b3b3b3" }}>用户</span>
                <span style={{ color: "#2f2f2f" }} onClick={onIncreaseClick}>
                  登录 {value}, {conut}
                </span>
              </div>
              <div className="rightTittle">
                Welcome Back,Please login to your account.
              </div>
              <div style={{ color: "#b0bac4", marginTop: 58 }}>
                账号 Account
              </div>
              <div style={{ marginTop: 12 }}>
                <Input
                  placeholder="请输入账号"
                  onChange={this.handelChange}
                  defaultValue={this.state.username}
                />
              </div>
              <div style={{ color: "#b0bac4", marginTop: 26 }}>
                密码 Password
              </div>
              <div style={{ marginTop: 12 }}>
                <Input
                  placeholder="请输入密码"
                  type="password"
                  onKeyDown={e => (e.keyCode === 13 ? this.login() : "")}
                  onChange={this.handelChangepassword}
                  defaultValue={this.state.password}
                />
              </div>
              <div style={{ marginTop: 119 }}>
                <Button
                  type="primary"
                  className="loginbottom"
                  onClick={this.login}
                >
                  登录
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  mapState,
  mapDispatch
)(App);
