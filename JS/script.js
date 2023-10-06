const navMenu = document.querySelector(".nav-list-container");
const menuHambur = document.querySelector(".toggle-menu");
const closeBtn = document.querySelector(".close-icon");
 
function close(){
  // Toggle si tiene la clase la quita si no la pone
  // Permite que cada vez que se ejecute la haga visible o la oculte
  navMenu.classList.toggle("nav-list-container_visible");
};
//Sin parametros porque no estamos llamando a la funcion inmediatamente
menuHambur.addEventListener("click", close);
closeBtn.addEventListener("click", close);