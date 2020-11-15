document.getElementsByClassName("main-nav__toggle")[0].addEventListener("click", function(toggleDropdown) {
  var toggleSwitch = document.getElementsByClassName("main-nav__toggle");
  /*var dropdownTarget = toggleSwitch.closest(".main-nav__dropdown");*/
  var selectContainer = toggleSwitch[0].closest(".main-nav__dropdown");
  var checkAria = selectContainer.getAttribute("aria-expanded");

  if (checkAria === "false") {
    selectContainer.setAttribute("aria-expanded", true)
  } else (
    selectContainer.setAttribute("aria-expanded", false)
  )
});
