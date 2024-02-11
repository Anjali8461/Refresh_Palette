var refreshbtn=document.querySelector(".refresh-btn");
function generatepallete(){
    var x=Number(Math.random()*255).toFixed(0);
    var y=Number(Math.random()*255).toFixed(0);
    var z=Number(Math.random()*255).toFixed(0);
    var xa= `rgb(${x},${y},${z})`;
    console.log(xa)
    return(xa);
}
refreshbtn.addEventListener("click",changeColor);
function changeColor(){
    var rectbox=document.querySelectorAll(".rect-box")
    var hextext=document.querySelectorAll(".hex-value");
    rectbox.forEach(function(e,i){
        let color=generatepallete();
        e.style.backgroundColor=color;
        hextext[i].textContent=color;
    })
}






// var code=document.

// function changeColor(){
//     var x= Math.random()*255;
//     var y=Math.random()*255;
//     var z=Math.random()*255;

//     var xa= `rgb(${x},${y},${z})`;
//     console.log(xa);
// }