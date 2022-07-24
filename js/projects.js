function set100vwVar() {
  // If less than most tablets, set CSS var to window height.
  let value = "100vw";

  //sets width based on navbar width
  var navbarWidth = document.getElementById("text").clientWidth;

  value = navbarWidth.toString() + `px`;
  document.documentElement.style.setProperty("--real100vw", value);
}
window.onresize = set100vwVar;
window.onload = set100vwVar;
