const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide,index) =>{
        slide.style.left = `${index * 100}%`
    }
)
 
const goPrev=()=>{
    counter--
    slideImage()
}

const goNext = () =>{
    counter++
    slideImage()
}
const slideImage = () =>{
    slides.forEach((slide)=> {
      slide.style.transform = `translateX(-${(counter%3)* 100}%)`
    }
    )
}
let logo=document.querySelector("#logo>img");
logo.addEventListener("click",function(){
    window.location.href="home.html"
})





document.querySelector("#btn").addEventListener("click",()=>{
    window.location.href="loginpage.html"
})

document.querySelector("#btns").addEventListener("click",()=>{
    window.location.href="Signup.html"
})