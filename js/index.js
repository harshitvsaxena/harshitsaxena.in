var isClosed;
var navbarLeftSize = $("#left-menu-navbar").width();
$(document).ready(function() {

  //Fix for all the screen sizes
  if(screen.width < screen.height) {
    navbarLeftSize = screen.width * 0.75;
    $("#left-menu-navbar").css("width", navbarLeftSize);
    $("#left-menu-navbar").css("margin-left", -navbarLeftSize);
    $("#navbar-toggle-button").css("display", "block");
    $(".content").css("padding-left","0px");
    isClosed = true;
  } else {
    //Default
    navbarLeftSize = 250;
    $("#left-menu-navbar").css("width", navbarLeftSize);
    $("#left-menu-navbar").css("margin-left", "0");
    $("#navbar-toggle-button").css("display", "none");
    $(".content").css("padding-left",navbarLeftSize);
    isClosed = false;
  }

  $("#nav-toggle").click(function() {
    this.classList.toggle( "active" );
    if(isClosed) {
      $("#left-menu-navbar").animate({
        marginLeft: 0
      }, 300);
      isClosed = false;
    } else {
      $("#left-menu-navbar").animate({
        marginLeft: -navbarLeftSize
      }, 300);
      isClosed = true;
    }
  });

});
$(window).resize(function() {
  if(screen.width < screen.height) {
    navbarLeftSize = screen.width * 0.75;
    $("#left-menu-navbar").css("width", navbarLeftSize);
    $("#left-menu-navbar").css("margin-left", -navbarLeftSize);
    $("#navbar-toggle-button").css("display", "block");
    $(".content").css("padding-left","0px");
    if(!isClosed) {
      var that = document.getElementById("nav-toggle");
      that.classList.toggle( "active" );
      isClosed = true;
    }
  } else {
    //Default
    navbarLeftSize = 250;
    $("#left-menu-navbar").css("width", navbarLeftSize);
    $("#left-menu-navbar").css("margin-left", "0");
    $("#navbar-toggle-button").css("display", "none");
    $(".content").css("padding-left", navbarLeftSize);
    if(!isClosed) {
      var that = document.getElementById("nav-toggle");
      that.classList.toggle( "active" );
    }
  }
});
