function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();







$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});




$('h1 .letters').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter' data-letter='$&'>$&</span>"));
});

anime.timeline(
     {loop: true}
   )
    .add({
        targets: 'h1 .letter',
        scale: {
         value: [0, 1],
         duration: 950
       },
        translateY : [function() { return anime.random(-360, 360); }, 0],
        translateX : [function() { return anime.random(-360, 0); }, 0],
        opacity: [0, 1],
        filter: {
        value: ["blur(15px)", "blur(0px)"],
        duration: 800
        },
        duration: 750,
        elasticity: 300,
        delay: function(el, i) {
          return 35 * (i+1)
        },
        update: function(anim) {
          // console.log(anim.currentTime + 'ms'); // Get current animation time with `myAnimation.currentTime`, return value in ms.
          // console.log(anim.progress + '%'); // Get current animation progress with `myAnimation.progress`, return value in %
        },
        begin: function(anim, target) {
          console.log(anim.began); // true after 1000ms

        }

    }).add({
        targets: 'h1',
        opacity: 0,
        duration: 250,
        easing: "easeOutExpo",
        delay: 250
    });
