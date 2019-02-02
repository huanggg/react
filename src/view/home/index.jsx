import React, { Component } from "react";
import { connect } from "react-redux";
import "./home.scss";
import LOGOimg from "@/static/images/LOGO.png";
import logo3 from "@/static/images/logo3.png";
import ScrollArea from "react-scrollbar";
import { Popover, Button } from "element-react";
import axios from "@/axios/index";
import { userProductList } from "@/util/fromat.js";
let popover_content = {
  width: 270,
  height: 415,
  backgroundImage: "linear-gradient(0deg, #f0f0f0 0%, #ffffff 100%)",
  opacity: 0.96,
  boxSizing: "border-box"
};
//状态管理 的state
function mapState(state) {
  return {
    value: state.userInfo.name,
    conut: state.conut
  };
}
function mapDispatch(dispatch) {
  return {
    changval: function() {
      dispatch({ type: "SET_USER_INFO", userInfo: "lishi111" });
    }
  };
}
class Home extends Component {
  // home页面
  constructor() {
    super();
    this.state = {
      nav: ["首页", "创新工坊", "我们的服务", "知识中心"],
      num: 1,
      popover_content_list_Atrr1: [
        "首页",
        "创新工坊",
        "我们的服务",
        "知识中心"
      ],
      popover_content_list_Atrr2: []
    };
  }
  GotoCenter() {
    this.props.history.push({ pathname: "/center", query: { name: "sunny" } });
    // this.props.history.push({ pathname: "/center/" + "hello111" });
  }
  componentDidMount() {
  
    console.log("父传的参数", this.props.name);
  }
  onDismiss() {
    
  }
  List() {
    const params = {};
    axios("/page/identity/queryByUser", params, "POST").then(res => {
      if (res.data.resultCode === "0000") {
        console.log(res);
        const upData = userProductList(res.data.data);
        // this.setState({
        //   popover_content_list_Atrr1: upData["1"],
        //   popover_content_list_Atrr2: upData["2"]
        // });
      }
    });
  }
  render() {
    const { value, conut, changval } = this.props;
    return (
      <div className="home">
        <ScrollArea
          speed={1}
          className="scrollbar"
          contentClassName="content"
          horizontal={false}
        >
          <div className="header">
            <div className="header_content">
              <img src={LOGOimg} alt="" style={{ width: 139, height: 22 }} />
              {/* 条件渲染 */}
              {this.state.num === 1 && (
                <div className="header_vav">
                  {/* 列表渲染 */}
                  {this.state.nav.map((item, index) => {
                    return (
                      <div className="header_navlight" key={item}>
                        <div className="mar_bottom">{item}</div>
                        <div className="line" />
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="header_right">
                {/* 控制台 */}
                <div className="kongzhitai">
                  <Popover
                    placement="bottom-start"
                    width="270"
                    trigger="click"
                    style={{ display: "block" }}
                    visible={this.state.visible}
                    content={
                      <div
                        style={popover_content}
                        onMouseLeave={this.onDismiss.bind(this)}
                      >
                        <p>这是一段内容这是一段内容确定删除吗？</p>
                        {this.state.popover_content_list_Atrr1.length > 0 && (
                          <div className="popover_content_header">
                            <div>
                              <span className="popover_platform">平台侧</span>
                              <span className="popover_name">
                                平台运维人员可进入
                              </span>
                            </div>
                            {this.state.popover_content_list_Atrr1.map(item => {
                              return (
                                <div
                                  key={item}
                                  style={{ color: "#666666" }}
                                  className="list"
                                  onClick={this.GotoCenter.bind(this)}
                                >
                                  <img
                                    src={logo3}
                                    alt=""
                                    style={{
                                      verticalAlign: "middle",
                                      marginRight: 9
                                    }}
                                  />
                                  <span>{item}</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    }
                  >
                    <Button className="header_rctr">控制中心</Button>
                  </Popover>
                </div>
                {/* 控制台  */}
              </div>
            </div>
          </div>
          <div className="main_content" onClick={changval}>
            {value},{conut}
          </div>
        </ScrollArea>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(Home);
