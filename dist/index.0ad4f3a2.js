let e;const t=new Lenis({lerp:.05,wheelMultiplier:1});function n(){let e=window.scrollY||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-window.innerHeight;document.getElementById("progressBar").style.width=e/t*100+"%"}requestAnimationFrame(function e(n){t.raf(n),requestAnimationFrame(e)}),window.addEventListener("scroll",n),window.addEventListener("resize",n),n();const o={x:0,y:0},l=document.querySelectorAll(".circle"),c=["#14b32f","#12a12e","#11902d","#0f7e2c","#0e6d2b","#0c5b2a","#0b4a29","#093828","#082727","#061526","#050d25","#071424","#081b23","#092222","#0a2921","#0b3020","#0c371f","#0d3e1e","#0f451d","#104c1c","#11531b","#050d18"];l.forEach(function(e,t){e.x=0,e.y=0,e.style.backgroundColor=c[t%c.length]}),window.addEventListener("mousemove",function(t){o.x=t.clientX,o.y=t.clientY,clearTimeout(e),l.forEach(e=>{e.style.opacity=1}),e=setTimeout(()=>{l.forEach(e=>{e.style.opacity=0})},100)}),function e(){let t=o.x,n=o.y;l.forEach(function(e,o){e.style.left=t-12+"px",e.style.top=n-12+"px",e.style.scale=(l.length-o)/l.length,e.x=t,e.y=n;let c=l[o+1]||l[0];t+=(c.x-t)*.3,n+=(c.y-n)*.3}),requestAnimationFrame(e)}();