const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open)});
links?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
