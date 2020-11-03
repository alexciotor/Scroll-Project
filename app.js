//   background-color: rgba(26, 63, 65, 0.733);



const nav =document.querySelector('.navbar')
const burger = document.querySelector('.burger');
const navElements =document.querySelector('.nav-content')
const fistStecion =document.querySelector('.section1')
 const header =document.querySelector('.head')
 const Elements =document.querySelector('.elements')

// window.addEventListener('scroll', ()=>{
//     header.classList.add('header')
// })



burger.addEventListener('click',function(){
const height = navElements.getBoundingClientRect().height
const elementHeight = Elements.getBoundingClientRect().height
 if(height===0){
navElements.style.height = `${elementHeight}px`
 }
 else{
     navElements.style.height=0;
 }

    //  if(navElements.style.maxHeight){
    //  navElements.style.maxHeight = null; 
    //  }
    //  else{
    //    navElements.style.maxHeight= navElements.scrollHeight +'px'
    //  } 
    //  console.log(navElements.style.maxHeight)
 })


 window.addEventListener('scroll', function(){
    const scrollHeight =window.pageYOffset;
    const navheight = nav.getBoundingClientRect().height
    if(scrollHeight>navheight){
        header.classList.add('header')
    }
    else{
        header.classList.remove('header')
    }



 })