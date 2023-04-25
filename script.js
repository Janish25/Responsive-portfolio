function on(n) {
    let num = n;
    document.getElementById("abtme").style.display = "block";
    document.getElementById("main").style.display = "none";
    if(num == 1){
        document.getElementById("about").style.display = "block";
        document.getElementById("skills").style.display = "none";
        document.getElementById("edu").style.display = "none";
        document.getElementById("project").style.display = "none";
    }
    if(num == 2){
        document.getElementById("skills").style.display = "block";
        document.getElementById("about").style.display = "none";
        document.getElementById("edu").style.display = "none";
        document.getElementById("project").style.display = "none";
    } 
    if(num == 3){
        document.getElementById("edu").style.display = "block";
        document.getElementById("skills").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("project").style.display = "none";
    } 
    if(num == 4){
        document.getElementById("project").style.display = "block";
        document.getElementById("skills").style.display = "none";
        document.getElementById("edu").style.display = "none";
        document.getElementById("about").style.display = "none";
    }    
  }
  
  function off() {
      document.getElementById("abtme").style.display = "none";
    document.getElementById("main").style.display = "block";
  };


let menubox=document.querySelector(".menubar img");
let menudisplay=document.querySelector(".nav");
console.log(menubox);
console.log(menudisplay);
menubox.addEventListener("click",()=>{
    menudisplay.classList.toggle("add");
    
})