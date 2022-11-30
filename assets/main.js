//inserindo o seletor css em uma variavel
var menu = document.querySelector('nav ul');
//inserindo o seletor css em uma variavel
var menuBar = document.querySelector('nav .menu-icon');
//inserindo o seletor css em uma variavel
var iconMenu =document.querySelector('nav .menu-icon img');


//adicionando um evento na varivavel menuBar
menuBar.addEventListener('click',function(){
    

    //condição if para imagem 'close' no menu
    if (iconMenu.getAttribute("src") == "./imagens/menu.png") {
        iconMenu.setAttribute("src", "./imagens/close.png")
    } else {
        iconMenu.setAttribute("src", "./imagens/menu.png")
    }

    //menu lateral
    menu.classList.toggle('active');

})

