//    nav bar designnnn

console.clear();
const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");
let activeIndex = 0;
let currentIndex = 0;
let increment = 1;
links.forEach((link, index) => 
{
	// if (links[index].classList.contains("active"))
    // {
	// 	light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
	// }
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

function openMenu(evt, menuName){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i<tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}
	document.getElementById(menuName).style.display = "block";
	evt.currentTarget.className += "active";
}