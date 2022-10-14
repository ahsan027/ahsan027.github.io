var stars = document.getElementById('stars')
var moon = document.getElementById('moon')
var hillb = document.getElementById('hills-back')
var hillf = document.getElementById('hills-front')
var text = document.getElementById('text')
var btn = document.getElementById('btn')

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    stars.style.left = value * 1 + 'px';
    moon.style.left = value * 1 + 'px';
    text.style.left = value * 1 + 'px';
    hillb.style.top = value * 1 + 'px';

})