// allow collapsible to expand and retract
var coll = document.getElementsByClassName("collapsible");
var i;
//console.log("testing" + coll.length);
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;

      if (content.classList.contains("open") == true)
      {
        content.classList.remove("open");
        content.style.maxHeight = content.scrollHeight + "px";
      }
      this.classList.toggle("active");
            
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
  });
}

// Allow swiping to change pages
// var col2 = document.getElementsByClassName("swipeable");
// for (i = 0; i < col2.length; i++) {
//   col2[i].addEventListener("ontouchstart", function(e) {
//     e.preventDefault();
//     console.log("touchstart");

//   }, false);
//   col2[i].addEventListener("ontouchend", function(e) {
//     e.preventDefault();
//     console.log("touchend");

//   }, false);
// }

// Allow swiping to change pages
var c_intTouchStartX;
var c_intTouchStartY;
var c_strPage;

function touchStart(e, strPage){
  c_intTouchStartX = e.touches[0].clientX;
  c_intTouchStartY = e.touches[0].clientY;
  c_strPage = strPage;
  //console.log("touchStart " + strPage);
}
function touchMove(e){
  
  if (e.touches[0].clientY < c_intTouchStartY + 50 && e.touches[0].clientY > c_intTouchStartY - 50) // when scrolling up down don't accidently swap pages
  {
    if (e.touches[0].clientX < c_intTouchStartX - 100)
    {
      //console.log("swipe right");
      switch (c_strPage)
      {
        case 'index':
          window.location.href = "projects.html"
          break;
        case "projects":
          window.location.href = "info.html"
          break;
        case "info":
          window.location.href = "about.html"
          break;
      }
    }
    else if (e.touches[0].clientX > c_intTouchStartX + 100)
    {
        //console.log("swipe left");
        switch (c_strPage)
        {
        case 'about':
          window.location.href = "info.html"
          break;
        case "info":
          window.location.href = "projects.html"
          break;
        case "projects":
          window.location.href = "./"
          break;
      }
    }
  }
}
function touchEnd(e){
  //console.log("touchend");
  c_strPage = "";
}