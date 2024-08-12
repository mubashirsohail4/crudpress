// This code is to highlight the nav links using 'active' class name
var pathname = window.location.pathname;
var pages = ['/home', '/articles', '/compose'];

// To Highligh nav link using active class
document.querySelectorAll('.nav-link').forEach((element, index) => {
  if (pathname.includes(pages[index])) {
      element.classList.add('active');
  } else if (element.classList.contains('active')) {
      element.classList.remove('active');
  }
});

// const getStoredTheme = () => localStorage.getItem('theme');
// const setStoredTheme = theme => localStorage.setItem('theme', theme);

// Toggle button for dark and light theme
// document.getElementById("themeBtn").addEventListener("click", () => {
  // if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
  //   localStorage.setItem("theme", "light");
  //   document.documentElement.setAttribute("data-bs-theme", "light");
  // } else {
  //   localStorage.setItem("theme", "dark");
  //   document.documentElement.setAttribute("data-bs-theme", "dark");
  // }

  // const storedTheme = getStoredTheme();
  // const newTheme = storedTheme === 'light' ? 'dark' : 'light';
  // setStoredTheme(newTheme);
  // setTheme(newTheme);
// });