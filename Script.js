//Navigation menu
const menu = document.querySelector(".dropdownMenu")
const icon = document.querySelector(".fa-bars")
icon.addEventListener("click",() => {
menu.classList.toggle("open");
if (icon.classList.contains("fa-bars")) {
  icon.classList.add("fa-spin")
  icon.classList.remove("fa-bars")
  icon.classList.add("fa-times")
  icon.classList.remove("fa-spin")
  
} else {
  icon.classList.add("fa-spin")
  icon.classList.remove("fa-times")
  icon.classList.remove("fa-spin")
  icon.classList.add("fa-bars")
}
} );


//dropdown menu
const arrow = document.querySelector(".dropdown i")    
const dropdown = document.querySelector(".dropdown")
    const list = document.querySelector(".List")
    dropdown.addEventListener("click", () => {
      dropdown.classList.toggle("dropdownPadding")
      if(arrow.classList.contains("rotate")){
        arrow.classList.remove("rotate")
      }else{
        arrow.classList.add("rotate")
      }
      list.classList.toggle("active")
    })







//THTREE BOXES
const boxes = document.querySelectorAll("#Boxes article");
const chickenDiv = document.querySelector("#chicken div");
const porkDiv = document.querySelector("#pork div");
const beefDiv = document.querySelector("#beef div");
const readyDiv = document.querySelector("#ready div");
boxes[0].addEventListener("click", () => {
  if(chickenDiv.style.transform === "scale(1)")
  {chickenDiv.style.transform = "scale(0)" }
  else{
  chickenDiv.style.transform = "scale(1)";
}
    
  } )
  boxes[1].addEventListener("click", () => {
  if(porkDiv.style.transform === "scale(1)")
  {porkDiv.style.transform = "scale(0)" }
  else{
  porkDiv.style.transform = "scale(1)";
}
    
  } )
  boxes[2].addEventListener("click", () => {
  if(beefDiv.style.transform === "scale(1)")
  {beefDiv.style.transform = "scale(0)" }
  else{
  beefDiv.style.transform = "scale(1)";
}
    
  } )
  boxes[3].addEventListener("click", () => {
  if(readyDiv.style.transform === "scale(1)")
  {readyDiv.style.transform = "scale(0)" }
  else{
  readyDiv.style.transform = "scale(1)";
}
    
  } )
 
const brand =  document.querySelector(".brand");
const heading = document.querySelector("#placeholder h3");
const second = document.querySelector(".second")
const sliderbtn = document.querySelector("#placeholder a")
heading.addEventListener("animationend", () => {
        second.style.opacity = "1";
        second.classList.add("slideIn")
} )
 second.addEventListener("animationend", () => {
        brand.style.opacity = "1";
        brand.classList.add("fadeInDown")
} )
brand.addEventListener("animationend", () => {
        sliderbtn.style.opacity = "1";
        sliderbtn.classList.add("slideUp")
} )
 
  

 
 
 
 
  //INTERSECTION OBSERVER
  const observer = new IntersectionObserver((entries) =>
    {(entries).forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add("fadeIn")
      }
    }
  )})
  
  const aboutDivs = document.querySelectorAll("#aboutInfo div")
  aboutDivs.forEach((el) => observer.observe(el))
  
