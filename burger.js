const burger = document.getElementById('burger');
const burgericon = document.getElementById('burgericon');
const burgerlinks = document.querySelector('.burger-header-link');

burgericon.addEventListener('click', function(){
    if(burger.style.display == 'none'){
        burger.style.display = 'flex';
    } else {
        burger.style.display = 'none';
    }
});

burgerlinks.addEventListener('click', function(){
    burger.style.display = 'none';
});