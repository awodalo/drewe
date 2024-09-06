


document.getElementById(`mysubmit`).onclick = function(){
    username =  document.getElementById('mytext').value;
        console.log(username);
}
  
document.getElementById("mysubmit").onclick = function(){
    mytext=document.getElementById("mytext").value;
    console.log("mytext");
}

let count = 0
const mydecr = document.getElementById("mydecr").onclick = function(){
   count --;
   mycount.textContent= count;
}
const myincr = document.getElementById("myincr").onclick = function(){
    count ++;
    mycount.textContent= count;
 }

 const myreset = document.getElementById("myreset").onclick = function(){
    count = 0;
    mycount.textContent= count;
 }