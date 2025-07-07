// This code is to highlight the nav links using 'active' class name
var pathname = window.location.pathname;
var pages = ["/", "/articles", "/compose"];

// To Highligh nav link using active class
document.querySelectorAll(".nav-link").forEach((element, index) => {
  if (
    (pages[index] === "/" &&
      (pathname === "/" || pathname === "/index.html")) ||
    (pages[index] !== "/" && pathname.startsWith(pages[index]))
  ) {
    element.classList.add("active");
  } else if (element.classList.contains("active")) {
    element.classList.remove("active");
  }
});
