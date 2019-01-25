import React, { Component } from "react";
class App extends Component {
  // home页面
  constructor() {
    super();
    this.state = {
      navData: [
        {
          label: "首页",
          href: "/"
        },
        {
          label: "博客",
          href: "/"
        },
        {
          label: "资源",
          href: "/"
        },
        {
          label: "问答",
          href: "/",
          children: [
            {
              label: "技术问答",
              href: "/"
            },
            {
              label: "技术分享",
              href: "/"
            }
          ]
        }
      ],
      userOp: [
        {
          label: "我的私信",
          href: "/"
        },
        {
          label: "个人资料修改",
          href: "/user"
        }
      ]
    };
  }
  login = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="home">
        <header className="home-header" />
        <div className="main" onClick={this.login}>
          home页面,
        </div>
      </div>
    );
  }
}

export default App;
