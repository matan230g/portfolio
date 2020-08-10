const navbarSlide =  () =>{
    const nav = document.querySelector(".nav-links");
    const burger= document.querySelector(".burger");
    
    burger.addEventListener('click', () =>
    {
        nav.classList.toggle('nav-active');
    });
    
}
const skillBar = () => {
    const htmlskill = document.querySelector('.html');
  
    htmlskill.addEventListener('click',()=>{
        console.log("trigger work");
        htmlskill.classList.add('zero');
    });

}

    

navbarSlide();
skillBar();
   
