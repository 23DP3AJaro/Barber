const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');

const close1 = document.getElementById('close1');

card1.addEventListener('click', function(){
    modal1.style.display = 'block';    
});

close1.addEventListener('click', function(){
    modal1.style.display = 'none';
});

card2.addEventListener('click', function(){
    modal2.style.display = 'block';    
});

close2.addEventListener('click', function(){
    modal2.style.display = 'none';
});

card3.addEventListener('click', function(){
    modal3.style.display = 'block';    
});

close3.addEventListener('click', function(){
    modal3.style.display = 'none';
});