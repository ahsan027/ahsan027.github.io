var stars = document.getElementById('stars')
var moon = document.getElementById('moon')
var hillb = document.getElementById('hills-back')
var hillf = document.getElementById('hills-front')
var text = document.getElementById('text')
var btn = document.getElementById('btn')

window.addEventListener('scroll',function(){
    var value = window.scrollY;
    stars.style.right = value * 0.15 + 'rem';
    moon.style.left = value * 0.1 + 'rem';
    text.style.left = value * 0.1 + 'rem';
    hillb.style.left = value * 0.1 + 'rem';

})

var openNav = () => {
    document.getElementById('MysideNav').style.width = "40rem";
}

var closeNav = () => {
    document.getElementById('MysideNav').style.width = "0";
}