
(function(){
  const btn = document.querySelector('.nav-toggle');
  const list = document.getElementById('nav-menu');
  if(btn && list){
    btn.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }
  // open external links in a new tab (accessibly)
  for(const a of document.querySelectorAll('a[href^="http"]')){
    a.setAttribute('target','_blank');
    a.setAttribute('rel','noopener noreferrer');
  }
})();
