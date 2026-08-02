/* ======================================
   COMPUTAÇÃO DESCOMPLICADA
   SCRIPT.JS
====================================== */



// ======================================
// ANO AUTOMÁTICO NO FOOTER
// ======================================


const anoAtual = new Date().getFullYear();


const anoFooter = document.getElementById("ano");


if (anoFooter) {

    anoFooter.textContent = anoAtual;

}





// ======================================
// ANIMAÇÃO AO APARECER NA TELA
// ======================================


const elementosAnimacao = document.querySelectorAll(
    ".fade-in"
);



const observador = new IntersectionObserver(

    (elementos) => {


        elementos.forEach((elemento)=>{


            if(elemento.isIntersecting){


                elemento.target.classList.add("show");


            }


        });


    },

    {

        threshold:0.2

    }

);




elementosAnimacao.forEach((elemento)=>{


    observador.observe(elemento);


});






// ======================================
// HEADER ALTERA AO ROLAR A PÁGINA
// ======================================


const header = document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.background =
        "rgba(15,23,42,0.95)";


    }

    else{


        header.style.background =
        "rgba(15,23,42,0.85)";


    }


});







// ======================================
// MENU MOBILE
// ======================================


const menuButton = document.querySelector(
    ".menu-button"
);



const menu = document.querySelector(
    ".nav-links"
);



if(menuButton){


    menuButton.addEventListener(
        "click",
        ()=>{


            menu.classList.toggle(
                "active"
            );


        }

    );


}






// ======================================
// FECHAR MENU AO CLICAR EM UM LINK
// ======================================


const links = document.querySelectorAll(
    ".nav-links a"
);



links.forEach((link)=>{


    link.addEventListener(
        "click",
        ()=>{


            menu.classList.remove(
                "active"
            );


        }

    );


});







// ======================================
// SCROLL SUAVE
// ======================================


document.querySelectorAll(
    'a[href^="#"]'
)

.forEach(link=>{


    link.addEventListener(
        "click",
        function(event){


            const destino =
            document.querySelector(
                this.getAttribute("href")
            );


            if(destino){


                event.preventDefault();


                destino.scrollIntoView({

                    behavior:"smooth"

                });


            }


        }

    );


});