import React, { Component } from "react";
import "./login.css";
import LOGOimg from "../../static/images/LOGO.png";
import logobig from "../../static/images/logobig.png";
import { connect } from "react-redux";
import { Input, Button } from "element-react";
// 登陆页面
let logoimg = {
  width: 139,
  height: 22
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
      inpValu: "",
      password: ""
    };
    // 点击事件并传参
    this.handleClick = this.handleClick.bind(this, 2);
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
      inpValu: e
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
  login() {
    console.log(5555);
  }
  render() {
    const { value, conut, onIncreaseClick } = this.props;
    return (
      <div className="login">
        <header className="login-header">
          <img src={LOGOimg} alt="" style={logoimg} />
        </header>
        <div
          className="main"
          style={{
            backgroundImage:
              "url(" + require("../../static/images/logobg.png") + ")"
          }}
        >
          {/* <div onClick={onIncreaseClick}>
            登陆 {value}, {conut}
          </div> */}
          {/* <div onClick={this.home}>
            进入home页面
          </div> */}
          {/* <div onClick={this.handleClick}>{this.state.isToggleOn}</div> */}
          <div className="loginlayer">
            <div
              className="left"
              style={{
                backgroundImage:
                  "url(" + require("../../static/images/denglubg.png") + ")"
              }}
            >
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
                <span style={{ color: "#2f2f2f" }}>登录</span>
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
                  defaultValue={this.state.inpValu}
                />
              </div>
              <div style={{ color: "#b0bac4", marginTop: 26 }}>
                密码 Password
              </div>
              <div style={{ marginTop: 12 }}>
                <Input
                  placeholder="请输入密码"
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
