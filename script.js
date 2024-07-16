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


  const portofolio = document.querySelector('.portofolio');
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close");

  portofolio.addEventListener('click', function(e) {
    if (e.target.classList.contains('gambar-portofolio')) {
      // Open the modal and set the image
      modal.style.display = "flex"; // Use flex to center the modal
      modalImage.src = e.target.src;
      modalImage.classList.add('fade');
      setTimeout(function(){
        modalImage.classList.remove('fade');
      },300)
    }
  });

  // Close the modal when the close button is clicked
  closeModal.onclick = function() {
    modal.style.display = "none";
  };

  // Close the modal when clicking anywhere outside of the image
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };