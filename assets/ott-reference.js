(() => {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('#siteNav');
  const menuToggle = document.querySelector('.menu-toggle');
  const showcase = document.querySelector('[data-showcase]');
  const stage = document.querySelector('.showcase-space');
  const video = document.querySelector('#teaserVideo');
  const play = document.querySelector('#playVideo');
  let lastY = scrollY, pending = false, stageTop = 0, stageHeight = 0;
  function closeMenu() {
    menu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded','false');
    menuToggle.setAttribute('aria-label','Mở menu');
  }
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menu.classList.toggle('is-open',isOpen);
    menuToggle.setAttribute('aria-expanded',String(isOpen));
    menuToggle.setAttribute('aria-label',isOpen?'Đóng menu':'Mở menu');
    header.classList.remove('is-hidden');
  });
  menu.addEventListener('click', event => { if(event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => { if(!header.contains(event.target)) closeMenu(); });
  document.addEventListener('keydown', event => { if(event.key==='Escape') { const wasOpen=menu.classList.contains('is-open');closeMenu(); if(wasOpen)menuToggle.focus(); } });
  header.addEventListener('focusin',()=>header.classList.remove('is-hidden'));
  function measure() {
    stageTop = stage.getBoundingClientRect().top + scrollY;
    stageHeight = stage.offsetHeight;
    document.querySelectorAll('.corner-frame').forEach(frame=>frame.style.setProperty('--frame-height',`${frame.offsetHeight-1}px`));
    updateScroll();
  }
  function updateScroll() {
    const y = scrollY;
    const menuOpen = menuToggle.getAttribute('aria-expanded')==='true';
    header.classList.toggle('is-floating', y>120);
    if(y<200 || y<lastY-2 || menuOpen) header.classList.remove('is-hidden');
    else if(y>lastY+2 && !header.contains(document.activeElement))header.classList.add('is-hidden');
    lastY=y;
    const start=Math.max(0,stageTop+stageHeight*.2-innerHeight*.95);
    const end=stageTop-innerHeight*(innerWidth>=1280?.3:.4);
    const progress=reduce.matches?1:Math.max(0,Math.min(1,(y-start)/Math.max(1,end-start)));
    showcase.style.setProperty('--video-scale',(.8+progress*.2).toFixed(4));
    showcase.style.setProperty('--video-angle',`${(1-progress)*(innerWidth>=1280?10:15)}deg`);
    showcase.style.setProperty('--video-offset',`${innerWidth>=1280&&!reduce.matches?(1-progress)*-80:0}px`);
    pending=false;
  }
  addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateScroll);}},{passive:true});
  addEventListener('resize',()=>{if(innerWidth>1024)closeMenu();measure();},{passive:true});
  document.fonts?.ready.then(measure);
  addEventListener('load',measure,{once:true});
  // Prevent an anchored field from being covered when the fixed navigation appears.
  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>closeMenu()));
  let userStarted=false;
  function previewVideo(){
    if(!userStarted&&!reduce.matches){video.muted=true;video.play().catch(()=>{});}
  }
  play.addEventListener('click',async()=>{
    video.muted=false;
    video.controls=true;
    try{await video.play();userStarted=true;showcase.classList.add('is-playing');video.focus();}
    catch{video.controls=true;showcase.classList.add('is-playing');}
  });
  // Pause offscreen previews, but preserve a user-started video's own controls.
  const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(userStarted)return;
    if(entry.isIntersecting)previewVideo();else video.pause();
  }),{threshold:.05});
  videoObserver.observe(stage);
  // Atmospheric spores: 140 small points, low speed, no large floating decorations.
  const canvases=[...document.querySelectorAll('.spore-canvas')].map((canvas,index)=>{
    const ctx=canvas.getContext('2d');
    return {canvas,ctx,visible:false,width:0,height:0,particles:Array.from({length:index===0?140:70},()=>({x:Math.random(),y:Math.random(),r:.2+Math.random()*1.4,v:.000008+Math.random()*.00003,a:.15+Math.random()*.5}))};
  });
  function resizeCanvas(item){
    const rect=item.canvas.getBoundingClientRect();const dpr=Math.min(devicePixelRatio||1,1.5);
    item.width=rect.width;item.height=rect.height;
    item.canvas.width=Math.round(rect.width*dpr);item.canvas.height=Math.round(rect.height*dpr);
    item.ctx?.setTransform(dpr,0,0,dpr,0,0);
  }
  let frameId=null,lastFrame=0;
  function draw(time){
    frameId=null;
    if(reduce.matches||document.hidden||!canvases.some(item=>item.visible))return;
    if(time-lastFrame>32){
      const delta=Math.min(2,(time-lastFrame)/33||1);lastFrame=time;
      canvases.filter(item=>item.visible&&item.ctx).forEach(item=>{
        const {ctx,width,height}=item;ctx.clearRect(0,0,width,height);
        item.particles.forEach(p=>{p.y-=p.v*delta;if(p.y<0)p.y=1;ctx.beginPath();ctx.fillStyle=`rgba(255,229,207,${p.a})`;ctx.arc(p.x*width,p.y*height,p.r,0,Math.PI*2);ctx.fill();});
      });
    }
    frameId=requestAnimationFrame(draw);
  }
  function startCanvas(){if(frameId===null&&!reduce.matches&&!document.hidden)frameId=requestAnimationFrame(draw);}
  const canvasObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    const item=canvases.find(item=>item.canvas===entry.target);item.visible=entry.isIntersecting;startCanvas();
  }));
  canvases.forEach(item=>{resizeCanvas(item);canvasObserver.observe(item.canvas);});
  addEventListener('resize',()=>canvases.forEach(resizeCanvas),{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(!userStarted)video.pause();}else{startCanvas();if(stage.getBoundingClientRect().bottom>0&&stage.getBoundingClientRect().top<innerHeight)previewVideo();}});
  reduce.addEventListener('change',()=>{measure();if(reduce.matches&&!userStarted)video.pause();startCanvas();});
  // Accurate local-only form feedback; no network transmission is simulated.
  const form=document.querySelector('#regForm');
  const modal=document.querySelector('#successModal');
  form.addEventListener('submit',event=>{
    event.preventDefault();
    if(!form.reportValidity())return;
    const data=Object.fromEntries(new FormData(form));
    let stored=false;
    try{const rows=JSON.parse(localStorage.getItem('ott_leads')||'[]');const leads=Array.isArray(rows)?rows:[];leads.push({...data,date:new Date().toISOString()});localStorage.setItem('ott_leads',JSON.stringify(leads));stored=true;}catch{}
    document.querySelector('#modalTitle').textContent=stored?'Đã lưu trên thiết bị.':'Thiết bị chưa lưu được thông tin.';
    document.querySelector('#modalGreeting').textContent=stored?`Chào ${data.fullname}, thông tin của bạn chỉ được lưu trong trình duyệt này, chưa gửi đến ban tổ chức.`:'Trình duyệt có thể đang chặn lưu dữ liệu. Vui lòng liên hệ ban tổ chức để được hướng dẫn đăng ký.';
    modal.showModal();if(stored)form.reset();
  });
  document.querySelectorAll('.modal-close,.modal-done').forEach(button=>button.addEventListener('click',()=>modal.close()));
  modal.addEventListener('click',event=>{if(event.target===modal){const r=modal.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)modal.close();}});
  if('ResizeObserver' in window){const frames=new ResizeObserver(()=>document.querySelectorAll('.corner-frame').forEach(frame=>frame.style.setProperty('--frame-height',`${frame.offsetHeight-1}px`)));document.querySelectorAll('.corner-frame').forEach(frame=>frames.observe(frame));}
  measure();
})();
