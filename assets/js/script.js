// Coletando elementos
const hometxt = document.querySelector(".home-text h1");
const btnhome = document.getElementById("btn-home");

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
    console.log(windowTop)

    if(windowTop >= 300){
        btnhome.classList.remove('none');
    }else{
        btnhome.classList.add('none');
    }

}

// Chamada de Funções
typeWriter(hometxt)

window.addEventListener('scroll', animateScroll)