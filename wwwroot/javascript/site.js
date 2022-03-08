/* fetch('navbar.html')
.then(res => res.text())
.then(text => {
    // replace navbar div with navbar on page
    let oldelem = document.querySelector("script#replace_with_navbar");
    if (oldelem != null)
    {
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    }
})

// make current page link active in navbar
  window.onload = function(e){ 
    console.log("window.onload"); 
    console.log(window.location.href);

    var nav = document.getElementsByClassName('topnav');
    if (nav != null)
    {
        nav.
    }
} */


// allow collapsible to expand and retreact
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}