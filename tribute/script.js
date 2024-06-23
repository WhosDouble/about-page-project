const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }
        else{
            entry.target.classList.remove('show')
        }
     })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))

//the elements from the html to animate
let image = document.getElementById("image")



//scroll animations
window.addEventListener("scroll", () => {
    let value = window.scrollY

    image.style.left = value * -1.5 + "px"

    
})