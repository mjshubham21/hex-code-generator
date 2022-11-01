function getColor() {
  var color = document.getElementById("colorPanel").value;
  document.body.style.backgroundColor = color;
  document.getElementById("box").value = color;
  console.log(color);
}

// document.getElementById("colorPanel").addEventListener("input", getColor);
