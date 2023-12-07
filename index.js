
// alert("HI WELCOME");
//prompt();

// Dom methods
// getElementById()
// getElementsByClassname()
// getElementsByTagname()
// let a=document.getElementById('text');

// console.log(a);
// let b = document.getElementsByClassName('center');
// console.log(b);
// function changeText(){
//     console.log('comes');
//     a.innerHTML = 'please enter your name';
// }
// function getValue(data){
//     console.log('comes here',data);
// }
// function formValidation(){
//     console.log('test')
//     var name = document.getElementById('name').value;
//     if(name === ''){
//         document.getElementById('error').innerHTML = 'Please enter your name';
//     }
// }
// call back functions
// var p = document.getElementById('error');


// setTimeout(()=>{
//     p.innerHTML = 3;
//     setTimeout(()=>{
//         p.innerHTML = 2;
//         setTimeout(()=>{
//             p.innerHTML = 1;
//             setTimeout(()=>{
//                 p.innerHTML = "Happy birthday";
//             },1000)
//         },1000)
//     },1000)
// },1000)

// setInterval(()=>{
//     console.log('interval functions')
// },2000)

// cell back hell- promises

// new Promise;

// var promise = new Promise((resolve, reject)=>{
//     reject('error');
//     resolve('success');
   
// });

// promise.then((data)=>{console.log(data)}).catch((data)=>{console.log(data)});

// var age = parseInt(prompt("Enter your age"));
// var eligiblityChecker = new Promise((resolve,reject)=>{
//     if(age>=18){
//         resolve("you are eligible to vote");
//     }else{
//         reject("you are not eligible to vote");
//     }
// });

// eligiblityChecker.then((data)=>{});

// var p1 = new Promise((resolve,reject)=>{resolve('first promise')});
// var p2 = new Promise((resolve,reject)=>{reject('second promise')});
// var p3 = new Promise((resolve,reject)=>{resolve('third promise')});
// Promise.allSettled([p1,p2,p3]).then((data)=>{console.log(data)}).catch((data)=>{console.log(data)});

var getData = fetch('https://jsonplaceholder.typicode.com/posts');
var jsonData = getData.then((data)=>data.json());
jsonData.then((userData)=>{console.log(userData)});
console.log(jsonData);