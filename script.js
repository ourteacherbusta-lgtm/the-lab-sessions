const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));const b=document.querySelector('.menu'),n=document.querySelector('nav');b.addEventListener('click',()=>n.classList.toggle('open'));n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));
document.querySelectorAll('.radio-session-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.radio-art-card');
    const panel=card.querySelector('.radio-player-panel');
    const frame=panel.querySelector('iframe');
    const open=card.classList.contains('is-open');

    document.querySelectorAll('.radio-art-card.is-open').forEach(other=>{
      if(other!==card){
        other.classList.remove('is-open');
        const ob=other.querySelector('.radio-session-toggle');
        const op=other.querySelector('.radio-player-panel');
        ob.setAttribute('aria-expanded','false');
        op.setAttribute('aria-hidden','true');
      }
    });

    if(!open && !frame.src){
      frame.src=frame.dataset.src;
    }
    card.classList.toggle('is-open',!open);
    btn.setAttribute('aria-expanded',String(!open));
    panel.setAttribute('aria-hidden',String(open));
    btn.querySelector('.radio-toggle-label').textContent=open?'PREVIEW SESSIONS':'CLOSE PLAYER';
  });
});
