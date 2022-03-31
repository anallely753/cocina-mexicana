window.onload = function() {
  var s2 = document.getElementById("s2");
  $('#s1-ir-abajo').click(function() {
        s2.scrollIntoView()
        $('.corona-fondo').css('filter','opacity(25%)');
        $('.corona-boton').css('animation', 'corona-entra 2s ease 1 forwards,corona-boton 1s ease-in-out infinite alternate-reverse')
  });

  $('#boton-chile').click(function() {
        $('.p-maiz').css('opacity','1');
  });

};