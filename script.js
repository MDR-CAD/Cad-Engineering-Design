document.addEventListener('DOMContentLoaded', function() {
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // slider bawah
  const sliderBawah = document.querySelectorAll('.slider');
  M.Slider.init(sliderBawah,{
    indicators:false,
    transition:600,
    interval:3000,
    height:300
  });

  // scrol
  const scrol=document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(scrol,{
        transition:6000,
        scrollOffset:50
      });
  });
