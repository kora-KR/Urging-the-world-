module.exports = {
  baseApi_prod: "",//生产环境
  baseApi_dev: "",//开发环境
  baseApi_test: "",//测试环境,
  baseApi_debug: "",//调试环境
  app_id: "",//我们程序的appid
  wechat_app_id: "",//微信的appid
  no_login: ['x315.miniprogram.login'],
  static_url: { //静态文件地址
    static_base_v1: img_url(), //微信小程序地址版本为v1
  },
  //所有的接口
  api_method: {
    v1: {
      //登录
      login: {
        "method": "x315.miniprogram.login",
        "version": '1.0',
        "data": {}
      },
      getUserInfo:{
        "method": "x315.miniprogram.userinfo",
        "version": '1.0',
        "data": {}
      },
      //首页
      homeInfo:{
        "method": "x315.miniprogram.home",
        "version": '1.0',
        "data": {}
      },
      //催欠款首页
      arrears_index:{
        "method": "x315.arrears.index",
        "version": '1.0',
        "data": {}
      },
      //催欠款提交需求
      arrears_demand:{
        "method": "x315.arrears.arrearsDemand",
        "version": '1.0',
        "data": {}
      },
      // 催欠款列表
      arrears_list: {
        "method": "x315.arrears.arrearsDemandList",
        "version": '1.0',
        "data": {}
      },
      // 催欠款详细
      arrears_detail: {
        "method": "x315.arrears.arrearsDemandDetail",
        "version": '1.0',
        "data": {}
      },
      // 企业详细
      enterprise_detail:{
        "method": "x315.enterpriseInformation.detail",
        "version": '1.0',
        "data": {}
      },
      // 企业因素加载
      enterprise_factor: {
        "method": "x315.enterpriseInformation.scanfavourable",
        "version": '1.0',
        "data": {}
      },
      //企业搜索
      enterprise_search:{
        "method": "x315.enterpriseInformation.search",
        "version": '1.0',
        "data": {}
      },
      //股东-股东,董监局
      enterprise_stockholder:{
         "method": "x315.enterpriseInformation.stockholder",
         "version": '1.0',
         "data": {}
       },
       //企业背景
      enterprise_cb: {
         "method": "x315.enterpriseInformation.cb",
         "version": '1.0',
         "data": {}
       },
       //企业模块icon 详细
       enterprise_moduledetail:{
         "method": "x315.enterpriseInformation.moduledetail",
         "version": '1.0',
         "data": {}
       },
       //融资申请
       financing_demand:{
         "method": "x315.financing.demand",
         "version": '1.0',
         "data": {}
       },
       //融资信贷首页
       financing_index: {
         "method": "x315.financing.index",
         "version": '1.0',
         "data": {}
       },
      //  融资需求详细
       financing_detail: {
         "method": "x315.financing.demandDetail",
         "version": '1.0',
         "data": {}
       },
      //  批量获取评分评级
       enterprise_collectionofinformation_batchratingrating:{
         "method": "x315.collectionofinformation.batchratingrating",
         "version": '1.0',
         "data": {}
       },
      //  数据定制view
       credit_view: {
         "method": "x315.customized.view",
         "version": '1.0',
         "data": {}
       },
      //  数据定制提交
       credit_raiders: {
         "method": "x315.customized.enterprise",
         "version": '1.0',
         "data": {}
       },
      //  资讯头条
       credit_headline: {
         "method": "x315.arrears.infoList",
         "version": "1.0",
         "data": {}
       }
    }
  }
}

function img_url() {
  var env = wx.getStorageSync("env");
  if (env) {
    if (env == 'test' || env == 'dev' || env == 'debug') {
      //测试环境
      return "https://resource.so315.cn/smarprogram/miniwc/v1/";
    } else {
      return "https://resource.x315.com/smarprogram/miniwc/v1/";
    }
  } else {
    return "https://resource.x315.com/smarprogram/miniwc/v1/";
  }
}
