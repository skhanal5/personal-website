const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("navbar floatingNav nav ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 30) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current + "link")) {
      li.classList.add("active");
    }
  });
};