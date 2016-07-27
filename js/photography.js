$(document).ready(function() {
  var numberOfImages = 21;
  for(var i=1; i<=numberOfImages; i++) {
    $("#imagesContainer").append(' \
      <div class="col-md-3 col-sm-4 col-xs-6"> \
        <img src="../img/photography/' + i + '.jpg" style="width: 100%; height: 250px;" /> \
      </div> \
    ');
  }
});
