// Toggler Icon JavaScript
$('.navbar-toggler').click(function() {
  if($(".navbar-toggler").attr("aria-expanded")){
    $(".fa").toggleClass(".icon-color");
  };
});

document.querySelector('.navbar-toggler').addEventListener('click', function(){ 
  const iconEl = document.getElementsByTagName('I')[0];
  if(this.getAttribute('aria-expanded')) { 
    iconEl.classList.toggle('icon-color');
  };
});