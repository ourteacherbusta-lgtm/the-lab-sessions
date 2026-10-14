const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));const b=document.querySelector('.menu'),n=document.querySelector('nav');if(b&&n){b.addEventListener('click',()=>n.classList.toggle('open'));n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));}
const CONSENT_KEY='tls_privacy_choice_v1';
const banner=document.getElementById('consentBanner');
function loadSoundCloud(){
  document.documentElement.classList.add('media-consent-granted');
  document.querySelectorAll('iframe[data-src]').forEach(f=>{if(!f.src)f.src=f.dataset.src;});
}
function applyConsent(choice){
  if(choice==='soundcloud') loadSoundCloud();
  if(banner) banner.classList.remove('is-visible');
}
const saved=localStorage.getItem(CONSENT_KEY);
if(saved){applyConsent(saved)}else if(banner){banner.classList.add('is-visible')}
document.querySelectorAll('[data-consent]').forEach(btn=>btn.addEventListener('click',()=>{
  const choice=btn.dataset.consent;
  localStorage.setItem(CONSENT_KEY,choice);
  applyConsent(choice);
}));
document.querySelectorAll('.sc-enable').forEach(btn=>btn.addEventListener('click',()=>{
  localStorage.setItem(CONSENT_KEY,'soundcloud');
  loadSoundCloud();
  if(banner) banner.classList.remove('is-visible');
}));
document.querySelectorAll('.privacy-settings').forEach(btn=>btn.addEventListener('click',()=>{
  localStorage.removeItem(CONSENT_KEY);
  if(banner) banner.classList.add('is-visible');
}));
