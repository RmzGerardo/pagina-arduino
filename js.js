document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });



  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  M.toast({html: '¿Hola como estas?'})
  M.toast({html: 'Espero te guste la pagina!!'})

// Or with jQuery

$(document).ready(function(){
  $('.collapsible').collapsible();
});

$(document).ready(function(){
  $('.modal').modal();
});
        







$(window).on('load', function() {
  setInterval(function() {
      $("head title").fadeOut(300, function() {
          $(this).text($(this).text().substring(1) + $(this).text().substring(0, 1))
              .fadeIn(300);
      });
  }, 300);

  let progressBar = $('.progress-bar');
  let progressValue = 0;
  let interval = setInterval(increaseProgress,
      50);

  function increaseProgress() {
      progressValue += 1;
      progressBar.css('width', progressValue + '%').attr('aria-valuenow', progressValue);
      $('.persentase').text(progressValue + '%');
      if (progressValue >= 100) {
          clearInterval(interval);
          $(".preloader").fadeOut("slow");
      }
  }
})