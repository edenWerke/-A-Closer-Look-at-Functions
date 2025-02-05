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
const flight ='LH234' 
const eden={
    name:'eden werke',
    passport:'1234567890'
}

const checkIn=function(flightNum,passenger){
flightNum='LH999'
passenger.name='Mr '+ passenger.name;
if(passenger.passport===1234567890){
    alert('Checked in')
}
else{
    alert("Wrong passport")
}
}
// checkIn(flight,eden)
console.log(flight)
console.log(eden)

//By Ref
// const flightNum=flight;
// const passenger=eden;


const newPassport=function(person){
    person.passport=Math.trunc(Math.random()*1000000000)
}
newPassport(eden);
checkIn(flight,eden)