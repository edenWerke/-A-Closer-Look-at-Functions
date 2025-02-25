'use strict';


// const  runOnce=function(){
//     console.log('this will never run again')
// };
// runOnce();
// (function(){
//     console.log('this will never run again'); 
//     const isPrivate=9;
//     var notPrivate=8;

// }())  ;
// (()=>console.log('this will also never run again'))();
// //    console.log(isPrivate)
//    console.log(notPrivate)
// this is no longer active
//    
//closure remebers a function at its birth place(securebook)
// closure tay ygebr meslikum var   
// closure makes connection with function even tho it loses its existance
// like a person who does not loose its connectivity with its hometown
// person=function
//home=parent scope
// function is like person and closure is like backpack
// closure are not tangable
//we do not have to create closure manually
// const booker=secureBooking();
// booker();
// booker();
// booker(); 
// console.dir(booker)
// // Example on closure
// let f;
// const g=function(){
//     const a=23;
//     f=function(){
//         console.log(a*2)
//     }
// }
// const h=function(){
//     const b=3123;
//     f=function(){
//         console.log(b*2)
//     }
// }
// g();
// f();
// h();
// f();
//Timer~
// const boardPassengers= function(n,wait){
//     const perGroup=n/3;
  
// setTimeout(function(){

//     console.log(`we are now boarding all ${n} passengers`)
//     console.log(`There are   3 Groups ,each with ${perGroup}   ` )
// },1000)
//     console.log(`will start boarding in ${wait} seconds`)
// }
// Challange 2
(function(){
    const header=document.querySelector('h1');
    header.style.color='red'

    
    document.querySelector('body').addEventListener('click',function(){
        header.style.color='blue'
    })
})();