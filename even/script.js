let text="<ul>";

for (let index = 0; index <=100; index++){
    if(index %2!=0){
        text+="<li>" + index + "</li>"
    }
} 
 
   text+="</ul>"
   document.getElementById("even").innerHTML=text