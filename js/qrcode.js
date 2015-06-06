var isShowQrcode = false;

var hideQrc = function(ev){
  if(isShowQrcode){
    $('#qrcode-container').slideUp('fast', function() {
      $('body').unbind('click',hideQrc);
    });
  }
}

$("#link-weixin").click(function(ev){
  var left = $("#link-weixin").offset().left;
  $('#qrcode-container').offset().left = left - 100;
  $('#qrcode-container').slideDown('fast', function() {
    $('body').click(hideQrc);
  });
  isShowQrcode = true;
})
