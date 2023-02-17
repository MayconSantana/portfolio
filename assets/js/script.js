const hometxt = document.querySelector(".home-text h1"),
  btnhome = document.getElementById("btn-home"),
  dataShowElements = document.querySelectorAll("[data-show]"),
  body = document.querySelector("body"),
  hamburguerMenu = document.querySelector("#hamburguer"),
  listMobile = document.querySelector("nav.list-mobile"),
  listNav = document.querySelector("nav.list-nav"),
  btnForm = document.getElementById("btnForm"),
  typeWriter = (o) => {
    let e = o.innerHTML.split("");
    (o.innerHTML = ""),
      e.forEach((e, t) => {
        setTimeout(() => {
          o.innerHTML += e;
        }, 75 * t);
      });
  },
  animateScroll = () => {
    300 <= window.pageYOffset
      ? btnhome.classList.remove("none")
      : btnhome.classList.add("none");
  },
  sectionAnimateOpacity = () => {
    var t = window.pageYOffset + 0.75 * window.innerHeight;
    dataShowElements.forEach((e) => {
      t > e.offsetTop ? e.classList.add("show") : e.classList.remove("show");
    });
  },
  toggleMenus = () => {
    listMobile.classList.toggle("hide"), listNav.classList.toggle("hide");

    if (hamburguerMenu.classList.contains("x")) {
      hamburguerMenu.classList.remove("x");
    } else {
      hamburguerMenu.classList.add("x");
    }
  };
typeWriter(hometxt),
  dataShowElements.length && window.addEventListener("scroll", animateScroll),
  window.addEventListener("scroll", sectionAnimateOpacity),
  animateScroll(),
  sectionAnimateOpacity(),
  hamburguerMenu.addEventListener("click", toggleMenus);

btnForm.addEventListener("click", () => {
  alert("Mensagem Enviada com Sucesso!");
});
