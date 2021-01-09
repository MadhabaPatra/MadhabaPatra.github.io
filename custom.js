autotheme()

function autotheme(){
  var element = document.body;
  var e=document.getElementById("sbutton")
  var donate=document.getElementById("donate-image")
 
  var d = new Date();
  if(d.getHours()>=4&&d.getHours()<18){
    element.classList.toggle("light-mode");
    donate.src="bmc-1.png"
    e.textContent="switch to dark"
      e.style.color="#edf3f8";
      e.style.background="#212121";
  }
}


function switchMode(e) {
    var element = document.body;
   
    element.classList.toggle("light-mode");
    var donate=document.getElementById("donate-image")

if(e.textContent=="switch to light"){
     donate.src="bmc-1.png"
    e.textContent="switch to dark"
    e.style.color="#edf3f8";
    e.style.background="#212121";
}
else{
     donate.src="bmc.png"
    e.textContent="switch to light"
    e.style.background="#edf3f8";
    e.style.color="#212121";
}

}



function showForm(e){
   
    if(e.style.display=="block"){
    $("#cform").fadeOut();
  }
  else{
    $("#cform").show();
   
    $("#projects").fadeOut();
  }
}

function showDiv(e){
   
    if(e.style.display=="block"){
    $("#projects").fadeOut();
  }
  else{
    $("#projects").show();
    $("#cform").fadeOut();

  }
  }