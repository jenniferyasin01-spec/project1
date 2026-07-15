// Nav toggle
const hamb = document.querySelector('.hamb');
const navLinks = document.querySelector('.nav-links');
if(hamb){
  hamb.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
  });
}

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Testimonial carousel
const slides = document.querySelectorAll('.test-slide');
const dots = document.querySelectorAll('.test-dot');
let cur = 0;
function show(i){
  slides.forEach((s,idx)=>s.classList.toggle('active', idx===i));
  dots.forEach((d,idx)=>d.classList.toggle('active', idx===i));
  cur = i;
}
dots.forEach((d,idx)=>d.addEventListener('click',()=>show(idx)));
if(slides.length>0){
  setInterval(()=>{show((cur+1)%slides.length)}, 6500);
}

// Film tiles → open YouTube
document.querySelectorAll('.film').forEach(f=>{
  f.addEventListener('click',()=>{
    const id = f.getAttribute('data-yt');
    if(id) window.open('https://www.youtube.com/watch?v='+id, '_blank');
  });
});
