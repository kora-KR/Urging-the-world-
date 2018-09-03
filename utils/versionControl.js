module.exports = {
  url: url
}

function url(x) {
  if (x == 'test') {
    return "http://service.so315.cn/open/api/gateway.do";
  } else {
    return "http://service.x315.cn/open/api/gateway.do";
  }
}