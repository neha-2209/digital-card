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