// $(function(){
//     $('.btn').on('click',function(){
//         $('.menuItems').slideToggle('slow');

//     })
// })


 
 const button = document.querySelector('.btn')
 const menuItems =document.querySelector('.menuItems');
 const navbar = document.querySelector('.navbar')

 button.addEventListener('click',()=>{
menuItems.classList.toggle('menuItems-toggle')


 })