
document.addEventListener("DOMContentLoaded", function(event) { 
    let menu = document.getElementById('menu_bar');
let nav = document.getElementsByClassName('navbar');

menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    nav[0].classList.toggle('nav_active');
});






  });
  function topFunction(){
    document.body.scrollTop = 50;
    document.documentElement.scrollTop = 50;
}
