$(document).ready(function(){
    var header = $('body');
    
    var backgrounds = new Array(
        'url(http://placekitten.com/100)'
      , 'url(http://placekitten.com/200)'
      , 'url(http://placekitten.com/300)'
      , 'url(http://placekitten.com/400)'
    );
    
    var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 1000);
    
    header.css('background-image', backgrounds[0]);
    });