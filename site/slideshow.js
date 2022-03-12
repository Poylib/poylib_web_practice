var slides = document.querySelectorAll("#slides > img");  /* 항목이 두 개 이상이므로 SelectorAll */
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n) {
  for(var i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

function prevSlide() {
  if(current > 0) current -= 1;       // current 값이 0보다 크면 이전 위치로
  else current = slides.length - 1;   // 첫번째 이미지라면 마지막으로
    showSlides(current);
}

function nextSlide() {
  if(current < slides.length - 1) current+=1;
  else current = 0; //첫번째 이미지로 이동
    showSlides(current);
}