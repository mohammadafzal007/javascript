// console.log("Hello World");
// console.log("hi");
// const arr=[2,5,1,6];
// console.log(arr);
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// const a=8;
// let str="Hello Itz Afzal";

// console.log(str.length);
// newstr=str.replace("Afzal","Jamesbond");
// // console.log(str.indexOf("Afzal"))
// console.log(newstr,str);
// console.log(str.slice(1,5));

// let mydate=new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());
let eid=document.getElementById("id1");
eid.style.border="5px solid black";
let eclass=document.getElementsByClassName("div1");
console.log(eclass);
eclass[0].style.border="10px solid red";
eid.style.background="green";
eid.style.color="white";


eclass[0].style.background="red";
// eclass[1].style.background="brown";
console.log(document.getElementById("id1"));
// eclass[1].classList.add("c2");
// eclass[1].classList.remove("c2");
// console.log(eclass[1].innerText);
// console.log(eclass[1].innerHTML);


let tn=document.getElementsByClassName("div1");
tn[0].style.border="10px solid black";
// let tn=document.getElementsByTagName("div");
// tn[0].style.border="10px solid black";
console.log(tn);
createelement=document.createElement('p');
createelement.innerText="This Is hEADING 2";
tn[0].appendChild(createelement);
createelement2=document.createElement('p');
createelement2.innerHTML="<b>for(int i=0;i<=n;i++)</b>";
tn[0].replaceChild(createelement2,createelement);
console.log(createelement);
// console.log(eclass[1].innerText)
// console.log(eclass[1].innerHTML)

// let inhtml=document.getElementById("id2");
// inhtml.innerHTML="<a href='#'>Click Here</a>";
let inhtml=document.getElementsByClassName("div2");
inhtml.textContent="<a href='#'>Click Here</a>"; //here href="#" MEANS IT NAVIGATE YOU TO TOP OF THE WEBPAGE




// eclass[0].style.border="10px solid green";
// eclass[1].style.border="10px solid green";
// eclass[2].style.border="10px solid green";
// eid.style.background="red";


// eclass[1].classList.add("c2");

// eclass[2].classList.add("c3");
// console.log(id1.innerHTML);
// console.log(id1.innerText);


