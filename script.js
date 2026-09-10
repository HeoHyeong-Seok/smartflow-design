const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

const targetEmail = 'hsheo@smartflowtech.co.kr';
document.querySelectorAll('.quote-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const type = form.dataset.type || '홈페이지 문의';
    const lines = [];
    for (const [key, value] of data.entries()) {
      if (!value) continue;
      const labels = {
        company:'업체명', name:'담당자명', phone:'연락처', email:'이메일', tool:'TOOL',
        layer:'Layer', size:'B/D Size', deadline:'희망납기일', category:'제품 분야', message:'문의사항'
      };
      lines.push(`${labels[key] || key}: ${value}`);
    }
    const subject = `[SmartFlow 홈페이지] ${type}`;
    const body = `${type}\n\n${lines.join('\n')}\n\n※ 회로도/사양서/도면 등 첨부파일이 있으면 이 메일에 직접 첨부해 주세요.`;
    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
