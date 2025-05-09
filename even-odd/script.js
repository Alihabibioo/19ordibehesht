let number=0;
function baresy(){
    number=document.getElementById("number").value;
    if(number %2===0){
        document.getElementById("answer").textContent= number + "یک عدد زوج است";
    }else{document.getElementById("answer").textContent= number +"یک عدد فرد است";}
}