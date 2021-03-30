// Scroll Top
quoteservice()
setInterval(function() {
  quoteservice();
}, 20000);

function quoteservice () {
  fetch("https://api.quotable.io/random?maxLength=65")
  .then(res => res.json())
  .then(res => { 
    $("#quotes").fadeTo(5000, 1);
    $("#quotes").text("\"" + res['content'] + "\" - " + res['author']); 
    setTimeout(function() {
      $("#quotes").fadeTo(5000, 0);
    }, 10000);
  })
  .catch(err => console.log(err))
}

$('.top').click(function() {
  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > $(window).height()) {
    $('.top').addClass("up");
  } else {
    $('.top').removeClass("up");
  }
});
