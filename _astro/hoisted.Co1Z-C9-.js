import"./hoisted.BNQ-gKOm.js";const r=document.querySelector("#contenedor"),i=document.querySelector("#hora"),u=document.querySelector("#minuto"),d=document.querySelector("#segundo"),s=document.querySelector("#ampm"),l=document.querySelector("#fecha"),m=document.querySelector("#botones");addEventListener("DOMContentLoaded",()=>{f(),a(),setTimeout(()=>{c(1)},1e4)});function f(){const e=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Sectiembre","Octubre","Noviembre","Diciembre"];let o=new Date().getFullYear(),t=new Date().getMonth(),n=new Date().getDate();l.innerHTML=`${n} de ${e[t]} del ${o}`}function a(){let e=new Date().getHours().toString().padStart(2,"0"),o=new Date().getMinutes().toString().padStart(2,"0"),t=new Date().getSeconds().toString().padStart(2,"0"),n=new Date().getHours()>=12?"PM":"AM";i.innerHTML=e,u.innerHTML=o,d.innerHTML=t,s.innerHTML=n,setTimeout(()=>{a()},1e3)}m.addEventListener("click",e=>{e.preventDefault();const o=e.target;o.id&&(r.style.backgroundImage=`url('/fondos/${o.id}')`)});function c(e){console.log("modo automatico");const o=["fondo1.avif","fondo2.avif","fondo3.avif","fondo4.avif","fondo5.avif","fondo6.avif","fondo7.avif","fondo8.avif"];r.style.backgroundImage=`url(fondos/${o[e]})`,e++,e>7&&(e=1),setTimeout(()=>{c(e)},1e4)}
