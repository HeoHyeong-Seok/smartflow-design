const toggle=document.querySelector('.menu'), links=document.querySelector('.links');
toggle?.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  if(!document.getElementById('privacyAgree').checked){alert('개인정보 수집·이용 안내에 동의해 주세요.');return;}
  const f=new FormData(e.currentTarget);
  const subject=encodeURIComponent('[SmartFlowTech 홈페이지 문의] '+(f.get('name')||''));
  const body=encodeURIComponent(`이름: ${f.get('name')||''}\n연락처: ${f.get('phone')||''}\n이메일: ${f.get('email')||''}\n\n문의내용:\n${f.get('message')||''}`);
  location.href=`mailto:smartflow@smartflow-design.kr?subject=${subject}&body=${body}`;
});
