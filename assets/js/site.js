function menuFunction() {
  var x = document.getElementById("recipeTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
