let btn = document.querySelector(`.btn`);
var randomcolor = [`red`,`green`,`blue`, `orange`];

btn.addEventListener(`click` , function(){
    let color = randomcolor [Math.floor(Math.random()*randomcolor.length)]
    let body = document.querySelector(`body`);
    body.style.background= color
    return;
})