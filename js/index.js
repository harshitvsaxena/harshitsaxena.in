var isClosed = true; // Navbar status
$(document).ready(function() {
  $("#nav-toggle").click(function() {
    this.classList.toggle( "active" );
    if(isClosed) {
      $(".header").animate({
        marginLeft: 0
      }, 300);
      isClosed = false;
    } else {
      $(".header").animate({
        marginLeft: -250
      }, 300);
      isClosed = true;
    }
  });
});
$(window).resize(function() {
  if(isClosed) {
    $(".header").animate({
      marginLeft: 0
    }, 300);
    var that = document.getElementById("nav-toggle");
    that.classList.toggle('active');
    isClosed = false;
  }
});
