// // var age = parseInt(prompt("your age"))
// // function foo(a){
// //   return new Promise((resolve,reject)=>{
// //     if(a>=18){
// //       resolve("your are eligible")
// //     }else{
// //       reject("your are not eligible")
// //     }


// //   });
// // }
// // foo(age).then((data)=>setTimeout(()=>{
// //   console.log(data)
// //   return foo(19);
// // },5000)).then((data)=>{
// //   console.log(data)
// //   return foo(14);
// // }).catch((error)=>console.log(error));


// let formEl = document.forms[0]
// // console.log(formEl)
// let handleSubmit = (event) =>{
// event.preventDefault();
// var formd = new FormData(formEl)
// var fd = formd.get(num)
// // console.log([...formd.values()])
// console.log(fd)
// }
// let handleformData = (e)=>{
//   console.log("hello")
// } 
// formEl.addEventListener("submit",handleSubmit)
// formEl.addEventListener("FormData",handleformData)
var scr = document.querySelector("h1");
var imgs = document.querySelector("div");

function res() {
  setTimeout(() => {
  scr.innerHTML = "1"
  return res1();
}, 1000)

function res1 () {
  setTimeout(() => {
  scr.innerHTML = "2"
  return res3()
}, 1000)
}
function res3 () {
  setTimeout(() => {
  scr.innerHTML = "3"
  return res4() 
}, 1000)
}
function res4 () {
  setTimeout(() => {
  scr.innerHTML = "4"
  return res5()
}, 1000)
}
function res5 () {
  setTimeout(() => {
  scr.innerHTML = "5"
  return res6() 
}, 1000)
}
function res6 () {
  setTimeout(() => {
  scr.innerHTML = "6"
  return res7() 
}, 1000)
}
function res7 () {
  setTimeout(() => {
  scr.innerHTML = "7"
  return res8()
}, 1000)
}
function res8 () {
  setTimeout(() => {
  scr.innerHTML = "8"
  return res9() 
}, 1000)
}
function res9 () {
  setTimeout(() => {
  scr.innerHTML = "9"
  return res10() 
}, 1000)
}
function res10 () {
  setTimeout(() => {
  scr.innerHTML = "10"
  return res11() 
}, 1000)
}
function res11 () {
  setTimeout(() => {
  scr.innerHTML = "HAPPY INDEPENDENCE DAY"
  var sum = document.createElement("img")
  sum.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/002/019/131/original/flag-of-india-flying-during-independence-day-free-video.jpg")
 
scr.append(sum)
}, 1000)
}
}
res(1)
// setTimeout(() => {
//   scr.innerHTML = "4"
// }, 1000)
// setTimeout(() => {
//   scr.innerHTML = "5"
// }, 1000)
// setTimeout(() => {
//   scr.innerHTML = "6"
// }, 1000)
// setTimeout(() => {
//   scr.innerHTML = "7"
// }, 1000)
// setTimeout(() => {
//   scr.innerHTML = "8"
// }, 1000)
// setTimeout(() => {
//   scr.innerHTML = "9"
// }, 1000)
// setTimeout(() => {
//   scr.innerHTML = "10"
// }, 1000)
// setTimeout (()=>{
//   scr.innerHTML="HAPPY INDEPENDENCE DAY"
//   },2000)