const mbutt=document.querySelector('#mbutt');
const pbutt=document.querySelector('#pbutt');
const reset=document.querySelector('#reset');
const digit=document.querySelector('#digit');

digit.innerHTML=0;

mbutt.addEventListener('click',()=>{
    digit.innerHTML--;
});


pbutt.addEventListener('click',()=>{
    digit.innerHTML++;
});

reset.addEventListener('click',()=>{
    digit.innerHTML=0;
});