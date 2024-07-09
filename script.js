var start = document.getElementById('start');
var stop = document.getElementById('stop');
var log = document.getElementsByClassName('log')[0];
var state = document.getElementsByClassName('state')[0];


start.addEventListener('click', ()=>{
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    start.disabled = true;
    stop.disabled = false;
    
})

stop.addEventListener('click', ()=>{
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyUp);
    log.textContent = " ";
    state.textContent = " ";
    start.disabled = false;
    stop.disabled = true;
})

function onKeyDown(e){
    log.innerHTML = `Key "<b> ${e.key} </b>" is pressed down`;
    state.textContent = 'Key is down';
}
function onKeyUp(e){
    log.innerHTML = `Key "<b> ${e.key} </b>" is pressed Up`;
    state.textContent = 'Key is up';
}