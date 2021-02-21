const humberger= document.querySelector('.humberger');
const menu = document.querySelector('.ul');
const nav = document.querySelector('.s1 .nav');
const text = document.querySelector('.s1 .text');
const screen = document.querySelectorAll('.section');
const page2 = document.querySelector('.s2');

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
let toggle= false;

humberger.addEventListener('click',()=>{
    const timeline= anime.timeline({
        duration: 150,
        easing : "easeOutExpo"
    });
    timeline.add({
        targets: ".ul",
        clipPath:  toggle ? "circle(0px at 90% 5%)" :"circle(120vh at 90% 0%)"

    });
    if (!toggle){
        toggle = true;
    } else {
        toggle= false;
    }
});



tl.fromTo(nav, 0.75, {opacity: 0, y:50}, {opacity: 1, y:0});
tl.fromTo(text, 1, {opacity: 0, }, {opacity: 1}, '-=0.25');







    
