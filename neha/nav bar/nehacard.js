console.clear();
const uls = document.querySelectorAll("nav ul");
const  links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");
let activeIndex = 0;
let cursorIndex = 0;
let increment = 1;
links.forEach(links,index) =>
{
    if (links[index].classList.contains("active"));
    {
        light.getElementsByClassName.left = `${links[index].offsetLeft + SVGFESpotLightElement.offset.Width /4}px`;

    }
    links.addEventListner("click", (e) =>
    {
        activeIndex = index;
        let t = setInterval(() =>
        {
            if (activeIndex > cursorIndex) increment = 1;
            else if (activeIndex < cursorIndex) increment = -1;
            cursorIndex += increment;
            links[cursorIndex].classList.add("active");
            if(cursorIndex != -1)
            links[cursorIndex -increment].classList.remove("active");
        });
    });
}