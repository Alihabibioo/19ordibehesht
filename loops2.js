let drinks=["Coca", "Pepsi", "Delestr", "Dr. Pepper"];
// console.log(drinks[drinks.length-1]);


for (let index = 0; index < drinks.length; index++) {
  console.log(drinks[index]) ;
    
}


let text="<ul>"
for (let index = 0; index <= 5; index++) {
 text+="<li>" +"number "+ index + "</li>"
}
text+="</ul>"

document.getElementById("demo").innerHTML=text;

// let firstname= "omid";
// let lastname="lak";
//  firstname += lastname;
// //  firstname = firstname + lastname
//  console.log(firstname)