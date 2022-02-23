fetch('navbar.html')
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
/* $(function() {
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  });
 */
  window.onload = function(e){ 
    console.log("window.onload"); 
}