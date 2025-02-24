'use strict';


const  runOnce=function(){
    console.log('this will never run again')
};
runOnce();
(function(){
    console.log('this will never run again')
}())  ;