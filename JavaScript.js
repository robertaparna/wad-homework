function myFunction() {
    document.getElementById("dropdown").classList.toggle(".dropdown.open-menu");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  /*window.onclick = function(event) {
    if (!event.target.matches(' .material-symbols-outlinedpbtn')) {
      var dropdowns = document.getElementsByClassName(" .dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/