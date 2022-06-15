let a=10;
let b=0;

setTimeout(() => {
    b=20;
}, 2000);

console.log(a+b);
//output >> 10

//to handle above problem we use promises

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(20)
    }, 2000);
})

waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})