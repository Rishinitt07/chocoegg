
const egg=document.getElementById('egg');
const reveal=document.getElementById('reveal');

egg.onclick=()=>{
egg.classList.add('shake');
setTimeout(()=>{
egg.innerHTML='💥';
},1000);
setTimeout(()=>{
egg.style.display='none';
reveal.classList.remove('hidden');
},1800);
};

document.getElementById('hug').onclick=()=>{
document.getElementById('hugmsg').innerText='Sending a warm virtual hug to Rithu 🤗💛';
};
