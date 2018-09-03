function colorJud(c) {
  if(c == "A") {
    return  "#00aa50"
  }
  else if(c == "B") {
    return "#6dc900"
  }
  else if (c == "C") {
    return "#BCD200" 
  }
  else if (c == "D") {
    return "#ff8e09" 
  }
  else if (c == "F") {
     "#e22016" 
  }
  else if (c == "N") {
    return "#c3c3c3"
  } 
}

module.exports = {
  colorJud: colorJud
}
