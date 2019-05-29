function shake() {
  var el = document.getElementById("main-img");
  var box = document.getElementById("box");
  var submit = document.getElementById("submit");

  el.classList.add("animated");
  el.classList.add("bounceIn");

  setTimeout(function () {
    el.classList.remove("animated");
    el.classList.remove("bounceIn");
    el.style.display = "none";
  }, 1000);

  box.style.backgroundColor = "#06A10B";
  submit.style.display = "block";
}

function finalSubmit() {
  var box = document.getElementById("box");

  box.classList.remove("animated");
  box.classList.remove("fadeInLeft");
  box.classList.remove("delay-1s");

  setTimeout(function () {
    box.classList.add("animated");
    box.classList.add("bounceIn");
  }, 200);


}

function delays() {
  var rows = document.getElementsByTagName("li");
  var place = 1;
  var i;
  for(i = 0; i < rows.length; i++) {
    var time = "delay-"+place+"s";
    rows[i].classList.add("animated");
    rows[i].classList.add("fadeInUp");
    rows[i].classList.add(time);
    place+=1;
  }
}

function selectPhoto() {
     var elem = document.getElementById("photoSelect");
     if(elem && document.createEvent) {
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        elem.dispatchEvent(evt);
     }

}

function checkFiles() {
  //Placeholder, replace with actual item count when complete
  items = 3;

  if(items != 0) {
    document.getElementById("blank").style.display = "none";
  }
}
