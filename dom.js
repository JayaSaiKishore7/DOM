// var element = document.getElementById("demo1").innerHTML;
// document.getElementById("demo2").innerHTML=element;

// function func1(){
//     var data1=document.getElementById("demo3").innerHTML;
//     var dat2=document.getElementById("demo4").innerHTML;
//     // console.log(data1,dat2);
//     document.getElementById("demo3").innerHTML=dat2;
//     document.getElementById("demo4").innerHTML=data1;
// }

// var x = prompt("enter the name");
// document.getElementById("name").innerHTML=x;

// function textcolor(){
//     document.getElementById("text").className="text_style";
// }

// function func(){
//     var colorselected = document.getElementById("selectcolor").value;
//     if(colorselected=="blue"){
//         document.getElementById("selectcolor").style.background="blue";
//         document.getElementById("div1").style.background="blue";
//         document.getElementById("div1").style.border="red";

//     }else if(colorselected=="red"){
//         document.getElementById("selectcolor").style.background="red";
//         document.getElementById("div1").style.background="red";
//         document.getElementById("div1").style.border="yellow";

//     }else if(colorselected=="green"){
//         document.getElementById("selectcolor").style.background="green";
//         document.getElementById("div1").style.background="green";
//         document.getElementById("div1").style.border="yellow";
//     }else if(colorselected=="orange"){
//         document.getElementById("selectcolor").style.background="orange";
//         document.getElementById("div1").style.background="orange";
//         document.getElementById("div1").style.border="yellow";
//     }
// }


// function input(){
//     var selected=document.getElementById("userinput").value;
//     document.getElementById("hello").innerHTML=selected;
// }

// function input(){
//     var a = document.getElementById("userinput").value;
//     var b = document.getElementById("userinput1").value;
//     document.getElementById("demo").innerHTML += a/b;

// }

// function func(){
//    var a = document.getElementsByTagName("h1");
//    //for(var i=0;i<a.length;i++){
//     // a[i].style.color="red";
//     // a[i].className = "selection";
//     //console.log(a);
//    //}
//    console.log(a);

// }

//   func = () => {
//     var a = document.querySelectorAll("#list > a");
//     // console.log(a);
//     for(var i=0;i<a.length;i++){
//         a[i].style.color="yellow";
//     }
// }

// function func1(){
//   var a = document.querySelectorAll(".demo ~ p");
//   //console.log(a);
//   for(var i=0;i<a.length;i++){
//     a[i].style.color="yellow";
//      }

// }

// function func1(){
//   document.getElementById("id1").style.backgroundColor="red";
// }

// function func2(){
//   document.getElementById("id1").style.backgroundColor="blue";
// }

// var func1 =() =>{
//   var x = document.getElementById("name");
//   // console.log(x);
//    x.value = x.value.toUpperCase();
// }


// function myFunction() {
//   var x = document.getElementById("myInput").value;
//   document.getElementById("demo").innerHTML = "You wrote: " + x;
//    console.log(x);
// }

// func1 = () =>{
//   document.getElementById("demo1").style.color="red";
// }
// func2 = () =>{
//   document.getElementById("demo1").style.color="blue";
// }

// function func1(){
//   document.getElementById("demo1").style.color="red";
// }

// function func2(){
//   document.getElementById("demo1").style.color="blue";
// }

// function func3(){
//   var x = document.getElementById("demo");
//   console.log(x);
//   x.value = x.value.toUpperCase();
// }
// function func1(){
//   var x = document.getElementById("name").value;
//   // console.log(x);
//   document.getElementById("demo").innerHTML=x;

// }

// function func(){
//   var a = document.createElement("li");
//   var b = document.createTextNode("123");
//   a.appendChild(b);
//   document.getElementById("list").appendChild(a);
// }
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

 //document.addEventListener("click",func);
 //function func(){
   //var a = document.createElement("p");
   //a.innerText="hello evryone";
   //document.getElementById("demo").appendChild(a);
  // document.getElementById("demo").innerHTML="helloeyerone";
   //document.body.appendChild(a);

//}
// function myFunction() {
//   const element = document.getElementById("li");
//   console.log(element);
//   // element.remove(element);
// }

// document.addEventListener("click",func);
// function func(){
//   setTimeout(func1,3000)
// }

// function func1(){
//   alert("hello everyone");
// }


// function func(){
//   var a = setInterval(func1,2000)

// }
// function func1(){
//   alert("hii")
// }

// var z = document.getElementById("btn");
// z.addEventListener("click",func1)

// function func1(){
//   var a = setTimeout(func2,3000)
// }
// function func2(){
//   alert("changing pic")
//   document.getElementById("one").src="background.jpg"
// }


// function add(word){
//   var count = 0;
//   for(var i = 0; i<word.length; i++){
//     if(word[i]=="a" ||word[i]=="e" ||word[i]=="i" ||word[i]=="o" ||word[i]=="u"){
//       count = count + 1;
//     }
//   }
//   return count;
// }


// function func(){
//   var userinput = document.getElementById("demo").value;
//   var x = add(userinput);
//   document.getElementById("demo1").innerHTML=x;
// }

// function Validate(){
//   var input = document.getElementById("hi");
//   var flag=true;

//   if(input.value.trim()==""){
//     alert("kindly check error");
//     flag = false;
//   }
//   return flag
// }


// var a = {
//   'data1' : [{'name' : "jaya",'mail' : "jaya@123",'no' : "123"},{'name' : "jaya",'mail' : "jaya@123",'no' : "123"},{'name' : "jaya",'mail' : "jaya@123",'no' : "123"}],

//   'data2' : [{'name' : "jaya",'mail' : "jaya@123",'no' : "123"},{'name' : "jaya",'mail' : "jaya@123",'no' : "123"},{'name' : "jaya",'mail' : "jaya@123",'no' : "123"}]
// }

// for( i in a){
//   //console.log(a[i]);
//   for(j=0; j<a[i].length;j++){
//     //console.log(a[i][j]);
//     var div_tag = document.createElement("div");
//     // console.log(div_tag);
//     for(var x in a[i][j]){
//       //console.log(a[i][j][x]);
//       div_tag.innerHTML += a[i][j][x] + "<br>";
//       div_tag.className="div_style"

//     }
//     document.getElementById("demo1").appendChild(div_tag);
//     //console.log(div_tag);
//   }
// }

function func(){
  var a = document.getElementById("demo2").childNodes;
  console.log(a);
}