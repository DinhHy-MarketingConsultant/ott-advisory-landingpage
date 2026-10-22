/* Pre-paint hiding is activated in the head; each element enters exactly once. */
(() => {
  const root=document.documentElement;
  if(!root.classList.contains('reveal-ready'))return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const running=new Set();
  let observer;
  const selector='.section-intro h2,.faq-intro h2,.final-cta h2,.section-intro>p,.faq-intro>p,.final-cta>p,.pain-pill,.value-card,.module-card,.journey-row,.thought,.mentor-card,.proof-grid figure,.practice-grid article,.check-list li,.book-note,.form-card,.faq-item,.final-cta>.btn';
  const nodes=[...document.querySelectorAll(selector)];
  function showAll(){root.classList.remove('reveal-ready');observer?.disconnect();running.forEach(animation=>animation.cancel());running.clear();}
  function play(node,frames,options={}){
    const animation=node.animate(frames,{duration:850,fill:'backwards',easing:'cubic-bezier(.16,1,.3,1)',...options});
    running.add(animation);
    animation.finished.then(()=>running.delete(animation)).catch(()=>running.delete(animation));
  }
  function enter(node,instant=false){
    if(node.classList.contains('reveal-entered'))return;
    observer?.unobserve(node);
    const base=getComputedStyle(node).transform;
    node.classList.add('reveal-entered');
    if(instant||reduced.matches)return;
    if(node.dataset.reveal==='words'){
      node.querySelectorAll('.reveal-word').forEach((word,index)=>play(word,
        [{opacity:0,transform:'translateY(.35em)'},{opacity:1,transform:'translateY(0)'}],
        {delay:Math.min(index*32,300),duration:800}));
    }else{
      const original=base==='none'?'':base;
      const siblings=[...node.parentElement.children].filter(child=>child.dataset.reveal===node.dataset.reveal);
      const index=Math.max(0,siblings.indexOf(node));
      const delay=node.dataset.reveal==='copy'?100:Math.min(index%4*70,180);
      play(node,[{opacity:0,transform:`translateY(${node.dataset.reveal==='copy'?12:20}px) ${original}`},{opacity:1,transform:original||'none'}],{delay});
    }
  }
  try{
    if(reduced.matches){showAll();return;}
    document.querySelectorAll('.section-intro h2,.faq-intro h2,.final-cta h2').forEach(heading=>{
      heading.setAttribute('aria-label',heading.innerText.replace(/\s+/g,' ').trim());
      const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT),texts=[];
      while(walker.nextNode())texts.push(walker.currentNode);
      texts.forEach(text=>{
        const fragment=document.createDocumentFragment();
        (text.textContent.match(/\S+|\s+/gu)||[]).forEach(token=>{
          if(/^\s+$/u.test(token))fragment.append(document.createTextNode(token));
          else{const word=document.createElement('span');word.className='reveal-word';word.textContent=token;fragment.append(word);}
        });text.replaceWith(fragment);
      });heading.dataset.reveal='words';
    });
    document.querySelectorAll('.section-intro>p,.faq-intro>p,.final-cta>p').forEach(node=>node.dataset.reveal='copy');
    nodes.forEach(node=>{if(!node.dataset.reveal)node.dataset.reveal='block';});
    observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting)enter(entry.target,entry.target.contains(document.activeElement));
    }),{threshold:0,rootMargin:'0px 0px -10% 0px'});
    nodes.forEach(node=>observer.observe(node));
    root.setAttribute('data-reveal-initialized','');
    reduced.addEventListener('change',()=>{if(reduced.matches)showAll();});
    document.addEventListener('focusin',()=>{
      nodes.filter(node=>node.contains(document.activeElement)).forEach(node=>enter(node,true));
      running.forEach(animation=>{const node=animation.effect?.target;if(node?.contains(document.activeElement))animation.cancel();});
    });
  }catch{showAll();}
})();
