// side Nav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  // slider
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
});
// scroll effect
function scrollChange(){
  var topNav=document.querySelector('#topNav');
  if(window.scrollY>=5)
  {
    topNav.className='white';
  }
  else{
    topNav.className='transparent z-depth-0';

  }
}