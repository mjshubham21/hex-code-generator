function getColor() {
  var color = document.getElementById("colorPanel").value;
  document.getElementById("box").value = color;
  document.body.style.backgroundColor = color;
  console.log(color);
}
// onclick="getColor()
