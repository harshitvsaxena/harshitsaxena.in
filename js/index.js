$(document).ready(function() {
  $("#nav-toggle").click(function() {
    this.classList.toggle( "active" );
    var testLeft = $(".header").css("margin-left");
    if(testLeft !== 0) {
      $(".header").animate({
        marginLeft: 0
      }, 300);
    } else {
      $(".header").animate({
        marginLeft: -250
      }, 300);
    }
  });
});
