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