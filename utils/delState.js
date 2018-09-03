function delState(c) {
  if (c == "未受理" || c == "已受理" || c == "融资中" || c == "未审核" || c== "进行中") {
    return "#f55e43"
  }
  else if (c == "已完成" || c == "已关闭") {
    return "#666"
  }
}

module.exports = {
  delState
}
