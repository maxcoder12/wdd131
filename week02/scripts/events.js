const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e){
    console.log(e.code);
};

document.addEventListener("DOMContentLoaded", function(){
    alert("Hello World!");

})