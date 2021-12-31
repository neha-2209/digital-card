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


// tab bar

// function openMenu(evt, menuName){
// 	var i, tabcontent, tablinks;
// 	tabcontent = document.getElementsByClassName("tabcontent");
// 	for (i=0; i<tabcontent.length; i++){
// 		tabcontent[i].style.display = "none";
// 	}
// 	tablinks = document.getElementsByClassName("tablinks");
// 	for(i = 0; i<tablinks.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace("active", "");
// 	}
// 	document.getElementById(menuName).style.display = "block";
// 	evt.currentTarget.className += "active";
// }




// const tabs = document.querySelectorAll('[data-tab-target')

// tabs.forEach (tab => {
// 	tab.addEventListener('click',() => {
// 		const target = document.querySelector(tab.dataset.tabTarget)
// 		target.classList.add('active')
// 	})
// })




// let tabHeader = document.getElementsByClassName("tab-header")[0];
// let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];

// lettabsPane = tabHeader.getElementsByTagName("div");

// for(let i=0; i<tabsPane.length; i++){
// 	tabsPane[i].addEventListener("click", function(){
// 		tabHeader.getElementsByClassName("active")[0].classList.remove("active");
// 		tabsPane[i].classList.add("active")	

// 		tabBody.getElementsByClassName("active")[0].classList.remove("active");
// 		tabBody.getElementsByTagName("div")[i].classList.add("active");
// 	});
// }






function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
  
	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";

	document.getElementById("defaultOpen").click();
  }





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
  






//   var slideIndex = 0;
//   showSlides();
  
//   function showSlides() {
// 	var i;
// 	var slides = document.getElementsByClassName("mySlides");
// 	var dots = document.getElementsByClassName("dot");
// 	for (i = 0; i < slides.length; i++) {
// 	  slides[i].style.display = "none";  
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {slideIndex = 1}    
// 	for (i = 0; i < dots.length; i++) {
// 	  dots[i].className = dots[i].className.replace(" active", "");
// 	}
// 	slides[slideIndex-1].style.display = "block";  
// 	dots[slideIndex-1].className += " active";
// 	setTimeout(showSlides, 2000); // Change image every 2 seconds
//   }


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


