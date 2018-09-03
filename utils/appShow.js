
module.exports = {
  appModule: appModule
}

// app显示部分
function appModule(base_static) {
  var appmodule = {
    list: [
      {
        text: "企业背景",
        img: [
          { src: base_static + "icon_companydetails_1_12@2x.png", tip: "疑似实控人" },
          { src: base_static + "icon_companydetails_1_8@2x.png", tip: "高管关联公司" },
          { src: base_static + "icon_companydetails_1_9@2x.png", tip: "企业图谱" },
          { src: base_static + "icon_companydetails_1_10@2x.png", tip: "企业关系" },
          { src: base_static + "icon_companydetails_1_11@2x.png", tip: "关系人" },
        ]
      },
      {
        text: "信用记录",
        img: [
          { src: base_static + "icon_companydetails_2_1@2x.png", tip: "涉诉信息" },
          { src: base_static + "icon_companydetails_2_2@2x.png", tip: "行政处罚" },
          { src: base_static + "icon_companydetails_2_3@2x.png", tip: "行政监督" },
          { src: base_static + "icon_companydetails_2_4@2x.png", tip: "认定" },
          { src: base_static + "icon_companydetails_2_5@2x.png", tip: "排行榜" },
          { src: base_static + "icon_companydetails_1_6@2x.png", tip: "企业年报" },
          { src: base_static + "icon_companydetails_2_6@2x.png", tip: "融资记录" },
        ]
      },
      {
        text: "资产负债",
        img: [
          { src: base_static + "icon_companydetails_3_1@2x.png", tip: "无形资产" },
          { src: base_static + "icon_companydetails_3_2@2x.png", tip: "财务状况" },
          { src: base_static + "icon_companydetails_3_3@2x.png", tip: "司法拍卖" },
          { src: base_static + "icon_companydetails_3_4@2x.png", tip: "股权出质" },
          { src: base_static + "icon_companydetails_3_5@2x.png", tip: "动产抵押" },
          { src: base_static + "icon_companydetails_3_6@2x.png", tip: "担保保证" },
          { src: base_static + "icon_companydetails_3_7@2x.png", tip: "清算信息" },
        ]
      },
      {
        text: "经营动态",
        img: [
          { src: base_static + "icon_companydetails_4_1@2x.png", tip: "舆情" },
          { src: base_static + "icon_companydetails_4_2@2x.png", tip: "人员招聘" },
          { src: base_static + "icon_companydetails_4_3@2x.png", tip: "进出口" },
          { src: base_static + "icon_companydetails_4_4@2x.png", tip: "招投标" },
          { src: base_static + "icon_companydetails_4_5@2x.png", tip: "企业简介" },
          { src: base_static + "icon_companydetails_4_6@2x.png", tip: "网站信息" },
          { src: base_static + "icon_companydetails_4_7@2x.png", tip: "行政许可" },
          { src: base_static + "icon_companydetails_4_8@2x.png", tip: "人员信息" },
        ]
      },
      {
        text: "更多分析",
        img: [
          { src: base_static + "icon_companydetails_5_1@2x.png", tip: "行业介绍" },
          { src: base_static + "icon_companydetails_5_2@2x.png", tip: "行业指标" },
          { src: base_static + "icon_companydetails_5_3@2x.png", tip: "行业分布" },
          { src: base_static + "icon_companydetails_5_4@2x.png", tip: "竞争对手" },
        ]
      }
    ]
  }
  return appmodule
}  