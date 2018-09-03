function collection(c) {
  if (c == "未审核") {
    return "#9aa3eb"
  }
  else if (c == "已完成" || c == "已关闭") {
    return "#b1b1b1"
  }
  else if (c == "进行中") {
    return "#5458ec"
  }
}

module.exports = {
  collection
}