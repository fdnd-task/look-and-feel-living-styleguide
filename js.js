document.getElementById("openMenu").addEventListener("click", openMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);

function openMenu() {
    document.getElementById("sideMenu").style.width = "15vw";
  }
  
  function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
  }