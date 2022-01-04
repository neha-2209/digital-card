//    nav bar designnnn

console.clear();
const uls = document.querySelectorAll(".tab_bar ul");
const links = [...document.querySelectorAll(".tab_bar a")];
const light = document.querySelector(".tab_bar .tubelight");
let activeIndex = 0;
let currentIndex = 0;
let increment = 1;
links.forEach((link, index) => 
{
	if (links[index].classList.contains("active"))
    {
		light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4 }px`;
	}


	link.addEventListener("click", (e) => 
    {
		activeIndex = index;
		let t = setInterval(() => 
        {
			if (activeIndex > currentIndex) increment = 1;
			else if (activeIndex < currentIndex) increment = -1;
			currentIndex += increment;

			links[currentIndex].classList.add("active");
			if (currentIndex != -1)
				links[currentIndex - increment].classList.remove("active");

			if (currentIndex == activeIndex) 
            {
				e.target.classList.add("active");
				increment = 0;
				clearInterval(t);
			}
		}, 50);
		light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
	});
});





// tabbar

function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




  var gallery = {
  
	currentImage: 0,
	images: document.querySelectorAll('.gallery--image'),
	scrollContainer: document.querySelector('.gallery--images'),
	buttonPrev: document.querySelector('.gallery--button.-previous'),
	buttonNext: document.querySelector('.gallery--button.-next'),
	
	updateDisabledButtons: function() {
	  this.buttonPrev.disabled = !!(this.currentImage === 0);
	  this.buttonNext.disabled = !!(this.currentImage === this.images.length -1);
	},
	
	scrollToCurrentImage: function() {
	  let currentImage = this.images[this.currentImage];
	  let container = this.scrollContainer;
	  let imagePositionCenter = Math.floor(currentImage.offsetLeft - ((container.offsetWidth  - currentImage.offsetWidth) / 2));
	  
	  // we need to toggle the CSS scroll-snap
	  // otherwise the gallery occassionally doesn't slide to the correct new position
	  // this doesn't seem to be an issue if we scroll-snap to the left
	  container.classList.remove('-scroll-snap');
	  container.scrollLeft = imagePositionCenter;
	  setTimeout(function() { container.classList.add('-scroll-snap') }, 500);
	},
	
	navigate: function(_direction) {
	  if ((_direction === -1 && this.currentImage > 0) ||
		  (_direction === 1 && this.currentImage < (this.images.length - 1))) {
		this.images[this.currentImage].classList.remove('-current');
		this.currentImage += _direction;
		this.images[this.currentImage].classList.add('-current');
		this.scrollToCurrentImage();
		this.updateDisabledButtons();
	  }
	},
  
	init: function() {
	  this.scrollContainer.scrollLeft = 0;
	  
	  document.querySelector('.gallery--button.-previous').addEventListener('click', function(){
		gallery.navigate(-1);
	  });
  
	  document.querySelector('.gallery--button.-next').addEventListener('click', function(){
		gallery.navigate(1);
	  });
	}
  };
  
  // just waiting for the placeholder images to load ...
  setTimeout(function() { gallery.init(); }, 1000);
  






  $(function() {
  
	// contact form animations
	$('#contact').click(function() {
	  $('#contactForm').fadeToggle();
	})
	$(document).mouseup(function (e) {
	  var container = $("#contactForm");
  
	  if (!container.is(e.target) // if the target of the click isn't the container...
		  && container.has(e.target).length === 0) // ... nor a descendant of the container
	  {
		  container.fadeOut();
	  }
	});
	
  });








// gallery


  function openModal() {
	document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
	document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
	showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
	showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
  }



 $(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  });