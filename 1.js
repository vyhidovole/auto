const outo = {'country':'Italy','model':'Lamborghiny','issue':'2020','pic':'img/pic.jpg'}

console.log(outo);

let but=document.getElementById('but')
let pic=document.getElementById('pic')
let out=document.getElementById('out')

let stroka= ' '

but.onclick = f

function f(){
    
    stroka+='country: ' + outo.country +' <br>' + 'model: ' +
    outo.model + '<br>' + 'issue: ' + outo.issue  + '<br>'+
    '<img src='+ outo.pic+' alt="auto" width="400px">'
   
    out.innerHTML = stroka
}

