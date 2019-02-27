<template>
  <div class="PrintingCode">
    <div class="header">
      <div class="headerText">打印二维码</div>
      <div class="headerClose" @click="close">X</div>
    </div>
    <div class="main">
      <div class="left">
        <div class="header">已选构件列表</div>
        <div class="listTab">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column type="index" width="50" align="center" label="序号"></el-table-column>
            <el-table-column label="操作" width="70" show-overflow-tooltip>
              <template slot-scope="scope">
                <div class="operation_row">
                  <el-button type="text" @click="delet(scope.$index)">删除</el-button>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="构件名称" show-overflow-tooltip>
              <template slot-scope="scope">
                <span @click="pingdata(scope.$index)">{{scope.row.memberName}}</span>
              </template>
            </el-table-column>
            <el-table-column label="构件编码" show-overflow-tooltip>
              <template slot-scope="scope">
                <span @click="pingdata(scope.$index)">{{scope.row.memberId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="构件类型" show-overflow-tooltip>
              <template slot-scope="scope">
                <span @click="pingdata(scope.$index)">{{scope.row.member}}</span>
              </template>
            </el-table-column>
            <el-table-column label="楼栋/楼层" show-overflow-tooltip width="120">
              <template slot-scope="scope">
                <span @click="pingdata(scope.$index)">{{scope.row.building}} / {{scope.row.bFloor}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="right">
        <div class="header">二维码示例</div>
        <div class="qrcode">
          <div class="template">
            <div style="margin-right:15px;width:80px;">打印模板</div>
            <div>
              <el-select v-model="dayingtemplate" placeholder="请选择">
                <el-option
                  v-for="item in temoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div
            class="codecontent"
            v-if="this.tableData.length !=0"
            id="codecontent"
            style=" background: white; width: calc(100% - 20px);margin-left: 10px;margin-top: 20px; height: 280px; margin-bottom: 10px;padding-top: 10px;"
          >
            <table
              style="color: #000;font-weight: bold;width:100%;font-size:22px;margin-bottom:5px;"
            >
              <tr style="width:100%">
                <td style="text-align:center;width:100%">{{tableData[index].project}}</td>
              </tr>
            </table>
            <div style="display:flex;border-bottom: 1px solid black;border-top: 1px solid black;">
              <div class="projectTEXT" style=" color: #000;font-size: 16px;width:300px;">
                <table cellspacing="10" style="color: #000;font-weight: bold">
                  <tr>
                    <td>构件名称</td>
                    <td>{{tableData[index].memberName}}</td>
                  </tr>
                  <tr>
                    <td>楼栋/楼层</td>
                    <td>{{tableData[index].building}} / {{tableData[index].bFloor}}</td>
                  </tr>
                  <tr>
                    <td>构件类型</td>
                    <td>{{tableData[index].member}}</td>
                  </tr>
                  <tr>
                    <td style="width:120px;">构件编码</td>
                    <td>{{tableData[index].memberId}}</td>
                  </tr>
                  <tr>
                    <td>尺寸</td>
                    <td>{{tableData[index].size}}</td>
                  </tr>
                  <tr>
                    <td style="width: 80px;">重量（t）</td>
                    <td>{{tableData[index].weight}}</td>
                  </tr>
                </table>
              </div>
              <div style="background:red; width: 150px;height: 150px;margin-top: 10px;">
                <div class="codeimage" style=" width:100%;height: 100%;">
                  <img :src="baseUrl" alt style="width:100%;height:100%">
                </div>
              </div>
            </div>

            <table style="color: #000;font-weight: bold;width:100%;font-size:24px;">
              <tr style="width:100%">
                <td style="text-align:right;width:100%">vanke</td>
              </tr>
            </table>
          </div>
          <div v-else style="text-align:center;color:gray;margin-top:150px;">暂无数据</div>
        </div>
      </div>
    </div>
    <div class="flooter">
      <div class="flooterText">
        <div class="code" @click="pingcode()">打印二维码</div>
        <div @click="exportPictures" class="code exitImg">导出图片</div>
        <div class="code cancel" @click="close">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import html2canvas from "html2canvas";
export default {
  name: "PrintingCode",
  props: ["codeList"],
  components: {},
  data () {
    return {
      index: 0,
      temoptions: [
        {
          value: 1,
          label: "90 x 50"
        }
      ],
      dayingtemplate: "",
      tableData: [],
      baseUrl: ""
    };
  },
  created: function () {
    this.list();
  },
  mounted: function () { },
  methods: {
    // 导出图片
    exportPictures () {
      html2canvas(document.querySelector("#codecontent"), { useCORS: true, scale: 15, }).then(canvas => {
        let picturesUel = canvas.toDataURL("image/png")
        this.saveFile(picturesUel, 'qcImg')
      })
    },
    saveFile (data, filename) {
      /**
       * 在本地进行文件保存
       * @param  {String} data     要保存到本地的图片数据
       * @param  {String} filename 文件名
       */
      const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = data;
      save_link.download = filename;

      const event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);
    },
    list () {
      this.tableData = [...this.codeList];
      this.codeUrl(0)
    },
    close: function () {
      //关闭页面
      this.$emit("closex");
    },
    delet (index) {
      //删除记录

      if (index == this.tableData.length - 1) {
        console.log(888888888888);
        this.index = index - 1;
        this.tableData.splice(index, 1);
      } else {
        this.tableData.splice(index, 1);
        this.index = index;
      }
    },
    pingdata (index) {
      //数据切换
      this.index = index;
      this.codeUrl(this.index)
    },
    codeUrl (index) {
      this.$http.post('/uploadserver/custom/getFileBase64String', {
        fileUrl: this.tableData[index].qrCodeAddr, // 二维码URL
      }).then(response => {
        if (response.status == "200") {
          this.baseUrl = "data:image/png;base64," + response.data
        }
      })
    },

    pingcode () {
      //打印二维码
      var printHtml = document.getElementById("codecontent").innerHTML;
      var wind = window.open(
        "",
        "newwindow",
        "height=800, width=800, top=100, left=300, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no"
      );
      wind.document.body.style.fontFamily = '微软雅黑'
      wind.document.body.style.padding = '0px'

      wind.document.body.style.margin = '0px'
      wind.document.body.style.width = '400px'
      wind.document.body.style.height = '200px'
      wind.document.body.style.border = '0px solid red'
      wind.document.body.style.margin = '0px auto'

      wind.document.body.innerHTML = printHtml;
      wind.document.body.style.zoom = 0.75;

      wind.print();
      return false;
    }

  }
};
/* eslint-disable */
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.PrintingCode {
  width: 100%;
  height: 100%;
  background: white;
}
.header {
  width: 100%;
  height: 51px;
  font-size: 16px;
  line-height: 51px;
  border-bottom: 1px solid #e6e8ec;
}
.headerText {
  color: #1a1c20;
  float: left;
  width: 100px;
  margin-left: 20px;
}
.headerClose {
  float: right;
  margin-right: 17px;
  color: #c9ced6;
  cursor: pointer;
}
.main {
  width: 100%;
  height: calc(100% - 111px);
  display: flex;
  background: #faf9fb;
}

.main .left {
  width: calc(100% - 500px);
  height: 100%;
  border-right: 1px solid #e6e8ec;
}

.main .left .header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-indent: 20px;
  font-size: 14px;
  color: #757981;
  background: white;
}

.main .left .listTab {
  width: 100%;
  height: calc(100% - 40px);
  overflow-y: auto;
}
.main .right {
  width: 500px;
  /*width: 700px;*/
  height: 100%;
}
.main .right .header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-indent: 20px;
  font-size: 14px;
  color: #757981;
  background: white;
}
.main .right .qrcode {
  width: 100%;
  height: calc(100% - 40px);
  overflow: auto;
  background: #f9fafb;
}
.main .right .qrcode .template {
  width: 60%;
  height: 34px;
  margin-top: 10px;
  margin-left: 20%;
  display: flex;
  font-size: 14px;
  color: #757981;
  line-height: 34px;
}

.flooter {
  width: 100%;
  height: 60px;
  padding-top: 15px;
  font-size: 12px;
}
.flooterText {
  width: 350px;
  height: 32px;
  float: right;
  display: flex;
  margin-right: 20px;
}
.flooterText .code {
  width: 110px;
  height: 32px;
  color: #ffffff;
  background-color: #0057ff;
  border-radius: 2px;
  line-height: 32px;
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
}
.flooterText .exitImg {
  border-radius: 2px;
  border: solid 1px #0057ff;
  color: #0057ff;
  background-color: white;
}

.flooterText .cancel {
  border-radius: 2px;
  border: solid 1px #e6e8ec;
  background-color: white;
  color: #757981;
  margin-right: 0px;
}
</style>

