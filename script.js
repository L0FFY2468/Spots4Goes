const orb = document.querySelector('.cursor-orb');
window.addEventListener('mousemove', (e) => { orb.style.left = e.clientX + 'px'; orb.style.top = e.clientY + 'px'; });
document.querySelectorAll('a, button, .spot-card').forEach(el => {
  el.addEventListener('mouseenter', () => orb.classList.add('active'));
  el.addEventListener('mouseleave', () => orb.classList.remove('active'));
});
const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelector('.play').addEventListener('click', () => document.querySelector('#spots').scrollIntoView({behavior:'smooth'}));
