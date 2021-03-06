// Init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  }
});

var scene1 = new ScrollMagic.Scene({ triggerElement: '#introduction' })
								.setClassToggle('#intro-anchor', 'active')
								.addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: '#clients' })
								.setClassToggle('#anchor1', 'active')
								.addTo(controller);
var scene3 = new ScrollMagic.Scene({ triggerElement: '#contact' })
								.setClassToggle('#anchor2', 'active')
								.addTo(controller);


// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });

});


//  Bind scroll to anchor links
$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});