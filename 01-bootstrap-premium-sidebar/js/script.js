const toggleButton = document.getElementById("menu-toggle");
const wrapper = document.getElementById("wrapper");
const sidebar = document.getElementById("sidebar-wrapper");

// Load saved state
if (localStorage.getItem("sidebar") === "collapsed") {
  wrapper.classList.add("toggled");
}

toggleButton.addEventListener("click", function () {

  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("mobile-active");
  } else {
    wrapper.classList.toggle("toggled");

    if (wrapper.classList.contains("toggled")) {
      localStorage.setItem("sidebar", "collapsed");
    } else {
      localStorage.setItem("sidebar", "expanded");
    }
  }
});
