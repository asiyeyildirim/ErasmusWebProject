function aciklamaGoster() {
  var engeldurum = document.getElementById("engel").value;
  var aciklamaDiv = document.getElementById("aciklamaDiv");
  if (engeldurum == "var") {
      aciklamaDiv.style.display = "block";
  } else {
      aciklamaDiv.style.display = "none";
  }
}