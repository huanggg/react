import React, { Component } from "react";
import axios from "@/axios/index";
import Mana from "@/view/manager/index.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./center.scss";

const Hot = () => (
  <div>
    <h2>热门</h2>
    <h2>
      <Link to="/zhuanlan">跳转到专栏</Link>
    </h2>
  </div>
);
const Content = () => <h2>文章</h2>;
const Zhuanlan = () => (
  <div>
    <h2>专栏</h2>
  </div>
);
class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 1111
    };
  }
  componentWillMount() {}
  componentDidMount() {
    console.log("路由传递过来的参数", this.props.location.query.name);
    // console.log("路由传递过来的参数", this.props.location.pathname);
  }
  gotoLogin() {
    this.props.history.push("/");
  }
  async List() {
    const params = {};
    await axios("/page/product/queryRoleList", params, "POST").then(res => {
      if (res.data.resultCode === "0000") {
        console.log(res);
      }
    });
  }
  render() {
    return (
      <div className="center">
        <div className="header">
          {/* <Link to={{ pathname: "/home", query: { name: "sunny44" } }}> 返回home</Link> */}
          <Link to={{ pathname: "/home", query: { day: "Friday" } }}>
            返回home
          </Link>
          <div onClick={this.gotoLogin.bind(this)}>返回登陆页</div>
        </div>
        <Router>
          <div className="main">
            <ul className="leftmuenu">
              <li>
                <Link to="/hot">热门</Link>
              </li>
              <li>
                <Link to="/zhuanlan">专栏</Link>
              </li>
              <li>
                <Link to="/content">文章</Link>
              </li>
              <li>
                <Link to={{ pathname: "/mana", query: { name: "sunny44" } }}>
                  管理
                </Link>
              </li>
            </ul>
            <div className="rightview">
              <Switch>
                <Route path="/hot" exact component={Hot} />
                <Route path="/zhuanlan" component={Zhuanlan} />
                <Route path="/mana" component={Mana} />
                <Route path="/content" component={Content} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Center;
