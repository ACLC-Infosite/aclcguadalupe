$(function(){
    $("#header2").load('/src/templates/header2.html');
    $("#header3").load('/src/templates/header3.html');
})

/////observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.animate');
hiddenElements.forEach((el) => observer.observe(el));
