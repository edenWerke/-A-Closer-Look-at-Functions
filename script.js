'use strict';

// const bookings=[]
// const createBooking=function(flightNum,numPassengers=1,price=199*numPassengers){
//     //ES5
//     // numPassengers=numPassengers || 1 
//     // price =price || 199
//     const booking={
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking)
//     booking.push(booking)
// }
// createBooking('LH123') 
// createBooking('LH123',2,800)
// createBooking('LH123',5)
// createBooking('LH123',10)
// createBooking('LH123',undefined,10)
// const flight ='LH234' 
// const eden={
//     name:'eden werke',
//     passport:'1234567890'
// }

// const checkIn=function(flightNum,passenger){
// flightNum='LH999'
// passenger.name='Mr '+ passenger.name;
// if(passenger.passport===1234567890){
//     alert('Checked in')
// }
// else{
//     alert("Wrong passport")
// }
// }
// // checkIn(flight,eden)
// console.log(flight)
// console.log(eden)

//By Ref
// const flightNum=flight;
// const passenger=eden;


// const newPassport=function(person){
//     person.passport=Math.trunc(Math.random()*1000000000)
// }
// newPassport(eden);
// checkIn(flight,eden) 

// Lower-order-level-function
// const oneWord=function(str){
//     return str.replace(/ /g,'').toLowerCase();

// }
// const upperFirstWord=function(str){

//     const[first,...others]=str.split('');
//     return[first.toUpperCase(),...others].join(' ');
// }

// //  Higher-order-function
// const transformer= function (str,fn){

//     console.log(`Transformed string :${fn(str)}`);
//     console.log(`Original string: ${fn(str)}`);
    
//     console.log(`Transformed by: ${fn.name}`)

// }
// transformer('JavaScript is the best!',upperFirstWord)
// transformer('JavaScript is the best!',oneWord)
// //JS uses callbacks all the time
// const high5=function()
//  {
//     console.log('hi five bro')
//  }
//  // telling the add eventlistener what to do because he has not idea of by it self
//  document.body.addEventListener('click',high5)
//  ['jonas', 'martha', 'adam'].forEach(high5);

 //uses of callback
 //abstaction does not care the detail of the function 

// OPPOSITE OF CALL-BACK FUNCTION
// const  greet=function(greeting){
//     return function(name){
//         console.log(`${greeting}  ${name}`)
//     };
// };
// const greetingHey=greet('hey')
// greetingHey("edu")
// greetingHey("delu")
// const  greetArr=greeting=> name=>
//        console.log(`${greeting}  ${name}`)
    
// ;
// greetArr('hello')('shkorina')

const ethAirline = {
    airline: "Ethiopia",
    flightCode: 'MQX',
    booking: [],
    
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.flightCode} ${flightNum}`);
        this.booking.push({ flight: `${this.flightCode}${flightNum}`, name });
    },
};


ethAirline.book(230,'eden werke');
ethAirline.book(250,'delina')

const eurowings={

    airline:'Eurowings',
    flightCode:'Ew',
    booking:[]
}

const book=ethAirline.book
//DOES NNOT WORK 
// book(23,'hannaj');
book.call(eurowings,23,'Hanna william');
console.log(eurowings)

book.call(ethAirline,45,'hyab')
console.log(ethAirline)
const  swiss={
    name:'swiss air lines',
    flightCode:'LX',
    booking:[]
}
book.call(swiss,55,'tsion')
console.log(swiss)
  
// Apply method
const flightData=[583,"george Copper"];
book.apply(swiss,flightData)
console.log(swiss)
// more recommended
book.call(swiss,...flightData)
console.log(swiss)

const bookEw=book.bind(eurowings)
const bookEt=book.bind(ethAirline)  
 
 bookEw(23,'edenWerke')
bookEt(90,'sara mehari ')

const bookEW23=book.bind(eurowings,23,)
bookEW23('jonas haile')
bookEW23('martha')


ethAirline.planes=500;
ethAirline.buyPlanes=function(){
    console.log(this );
    this.planes++;
    console.log(this.planes);
}
ethAirline.buyPlanes();
document.querySelector('.buy').addEventListener
('click',ethAirline.buyPlanes.bind(ethAirline ))

//Partial application
// using bind gives us brand new function
// const addTax=(rate,value)=>value+value *rate;
// console.log(addTax(0.1,200)) 

// const addVat=addTax.bind(null,0.23)
// console.log(addVat(900));
// console.log(addVat(300))


// const hello=function(sayHey){
//     return function(name){
//         console.log(`${sayHey} ${name}`)
//     }
// }
// const hey=HELLO('HEY PEOPLE')
// hey(" specfic to edu  ")


const myTax=function(valuee){
    return function(taxx){
        console.log(valuee + valuee *taxx)
    }
}
myTax(500)(0.23)