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
const arrow = document.querySelector(".dropdown i")    
const dropdown = document.querySelector(".dropdown")


//dropdown menu
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
  
  //Image Slider
  const slideImg = document.querySelector("#slide2 img");
  const sliderDivs = document.querySelectorAll("#slider div");
  sliderDivs[0].classList.add("active")
  const sliderBtns = document.querySelectorAll("#imageslider button")
  let index = 0;
  
  sliderBtns[0].addEventListener("click", () => {
    index--;
    for (let i = 0; i < sliderDivs.length; i++) {
     sliderDivs[i].classList.remove("active")
    }
    if (index === -1) {
      index = sliderDivs.length - 1;
    }
    console.log(index)
    sliderDivs[index].classList.add("active")
    slideImg.classList.remove("zoom")
  })
  
  sliderBtns[1].addEventListener("click", () => {
    index++;
      for (let i = 0; i < sliderDivs.length; i++) {
     sliderDivs[i].classList.remove("active")
    }
    
    if(index === sliderDivs.length){
      index = 0;
    } 
    console.log(index)
    
    sliderDivs[index].classList.add("active")
    sliderDivs[index].classList.add("slideIn")
    slideImg.classList.remove("zoom")
    
  })
  
const brand =  document.querySelector(".brand");
const heading = document.querySelector("#placeholder h3");
const second = document.querySelector(".second")
const sliderbtn = document.querySelector("#slider a")
placeholder.addEventListener("animationend", () => {
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
 
 //Slide 2 Zomming animation
  
 const slide2 = document.querySelector("#slide2");


const observer1 = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         console.log("it works");
         entry.target.classList.add("zoom");
      } else {
         console.log("it doesn't work");
      }
   });
});

observer1.observe(slideImg);
 
 
 
 
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
  
