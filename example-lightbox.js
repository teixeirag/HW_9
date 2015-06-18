jQuery(document).ready(function($) {

var current, size;  
 $('.lightbox').click(function(e) {  

   
    e.preventDefault();								
    var image_href = $(this).attr("href"); 			   
    var slideNum = $('.lightbox').index(this);


    if ($('#slideshow').length > 0) {        
      $('#slideshow').fadeIn(300);
    } else {                                

      var lightbox =
          '<div id="slideshow" >' +
		  '<p title="close" id="lightboxClose">X</p>' +
          '<div class="nav">' +
          '<a class="prev slide-nav" title="Preview" id="lightboxPrev"><</a>' +
          '<a class="next slide-nav" title="Next;" id="lightboxNext">></a>' +
          '</div>' +
          '</div>';
      
      $('body').append(lightbox);
      
      $('#gallery').find('.lightbox').each(function() {
        var $href = $(this).attr('href');
        $('#slideshow').append(
          '<img src="' + $href + '">'
        );
      });
      
    }
    
    size = $('#slideshow img').length;
    
    $('#slideshow img').hide();
    $('#slideshow img:eq(' + slideNum + ')').show();
    
    current = slideNum;
  });
   
$(document).keyup(function(e) {
  if ( e.keyCode == 27 || e.keyCode == 16 || e.keyCode == 17 ||   e.keyCode == 18 || e.keyCode == 46)   
  {$('#slideshow').remove(); }   
});

$('body').on('click', '#slideshow', function() { 
 dest = current + 1;
    if (dest > size - 1) { dest = 0; }
    $('#slideshow img:eq(' + current + ')').fadeOut(200);
    $('#slideshow img:eq(' + dest + ')').fadeIn(200);
    current = dest;
});


$('body').on('click', '#lightboxClose', function() { 
$('#slideshow').remove();});
   
 	
 
$('body').on(
	{ 	mouseenter: function() {    $('.nav').fadeIn(300);    }, 
		mouseleave: function() {    $('.nav').fadeOut(300);   }
	},'#slideshow');
  
  $('body').on('click', '.slide-nav', function(e) {    
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    

    if ($this.hasClass('prev')) {
      dest = current - 1;
      if (dest < 0) {  dest = size - 1; }
	  
    } else {

    dest = current + 1;
    if (dest > size - 1) {
        dest = 0;
      }
    }
    
    $('#slideshow img:eq(' + current + ')').fadeOut(200);
    $('#slideshow img:eq(' + dest + ')').fadeIn(200);
  
    current = dest;
  });


function changeImg(current, dest){
    $('#slideshow img:eq(' + current + ')').fadeOut();
    $('#slideshow img:eq(' + dest + ')').fadeIn();
}

  
  $(document.documentElement).keyup(function (event) {  
    var $this = $(this);
    var dest;
    
  if (event.keyCode == 37 ) {
          dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
	  
changeImg(current, dest);
 current = dest;	
   } 
  
  
  
  else if (event.keyCode == 39) {
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
	  
changeImg(current, dest);
 current = dest;	  
  }
  
  });


  
});



	function fsheh(){
	$('#slideshow').remove();
	}
	
	$('#lightboxClose').click(function() {
	alert(12);
	$('#slideshow').remove();
	});
	
	
function appendStyle(styles) {
  var css = document.createElement('style');  css.type = 'text/css';
  if (css.styleSheet) css.styleSheet.cssText = styles;
  else css.appendChild(document.createTextNode(styles));  
  var reshi= document.getElementsByTagName("head")[0];if(!reshi){appendHEAD();alert(reshi+"1");}
  document.getElementsByTagName("head")[0].appendChild(css);
}


function appendHEAD(){ var hedA= document.createElement('head'); document.appendChild(hedA);}
var styles = '#slideshow { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, .8);}'+
'#slideshow  p { font-size:20px; position:fixed; z-index:999; cursor:pointer; padding:5px 10px; border:1px solid #999; right:5px; top:5px; text-align:  right; color: #fff; background: rgba(100, 100, 100, .5); border-radius:3px;}'+
'#slideshow img { position: absolute; top: 5%; left: 0px; right: 0px; bottom:5%; align:center; max-width:90%; max-height:90%; margin:auto;}'+
'.prev, .next {  z-index:999; background: rgba(100, 100, 100, .5); cursor:pointer; position: absolute; top: 45%; border:1px solid #999; padding: 6px ; color: #fff; text-decoration: none; position: absolute;font-size:30px;text-shadow:1px 1px 0px #444;}'+
'.next { right: 7px; border-radius:2px 10px 10px 2px; } .prev { left: 7px;  border-radius:10px 2px 2px 10px; }'+
'.thumb{width: auto;height: 100px;margin:5px;}';

window.onload = function() { appendStyle(styles) };
