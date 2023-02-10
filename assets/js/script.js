// Coletando elementos
const hometxt = document.querySelector(".home-text h1");
const btnhome = document.getElementById("btn-home");
const dataShowElements = document.querySelectorAll("[data-show]");
const body = document.querySelector('body');

// Funções
const typeWriter = (element) => {
    let texto = element.innerHTML.split("");
    element.innerHTML = "";

    texto.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra
        }, 75 * i)
    })
}

const animateScroll = () => {
    const windowTop = window.pageYOffset;

    if(windowTop >= 300){
        btnhome.classList.remove('none');
    }else{
        btnhome.classList.add('none');
    }

}

const sectionAnimateOpacity = () => {
    const windowTop = window.pageYOffset + (window.innerHeight * .75);

    dataShowElements.forEach((e) => {
        if (windowTop > e.offsetTop) {
            e.classList.add('show');
        } else {
            e.classList.remove('show');
        }
    })
}

// Chamada de Funções
typeWriter(hometxt)

if(dataShowElements.length) {
    window.addEventListener('scroll', animateScroll)
}

window.addEventListener('scroll', sectionAnimateOpacity)

animateScroll(); sectionAnimateOpacity();