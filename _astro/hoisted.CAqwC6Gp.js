import"./hoisted.BNQ-gKOm.js";const t=document.querySelector("#selecconaTabla"),r=document.querySelector("#mostrarTablas");document.addEventListener("DOMContentLoaded",()=>{o(),l(1)});function o(){let e="";for(let a=1;a<=20;a++)e+=`<a href="#" class="btn btn-danger mb-3 mx-2" id="${a}">Tabla del ${a}</a>`;t.innerHTML=e}t.addEventListener("click",e=>{l(e.target.id)});function l(e){let a="";for(let n=1;n<=10;n++)a+=`<h3>${e} * ${n} = ${n*e} <br></h3>`;r.innerHTML=a}
