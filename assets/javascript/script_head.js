const cover = document.getElementById("cover");

function openNav() {
  document.getElementById("mySidenav").style.width = "255px";
  cover.style.display = "inline";
}

function closeNav() {
  cover.style.display = "none";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("openNav").style.marginLeft = "0";
}
