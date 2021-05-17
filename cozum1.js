

// görev1
$(document).ready(function () {
  $("#gorev1 > button").click(function () {
    var basliklar = Array.from($("h2:lt(3)"));
    basliklar.forEach(baslik => {
      $("#gorev1 > ul").append("<li>" + baslik.textContent + "</li>");
    });
  });
});

// --------------------------------------------

// görev 2


$('#gorev2 > input').prop( "value", "15" );

// --------------------------------------------

// görev 3

$('#gorev3 > input').prop( "value", "15 amazing science facts that will blow your mind" );

// --------------------------------------------

// görev 4
for (let i = 0; i < $('article h2').length; i++) {
    $('article h2')[i].innerHTML += ' (' + $('article p')[i].innerHTML.length + ' karakter)';
}

// --------------------------------------------


// görev 5
$('article h2:odd').css('color', 'blue')
$('article h2:even').css('color', 'orange')
$('article h1').css('color', 'red')







// --------------------------------------------

// görev 6
$("p:eq(0)").mouseover(function(){
$(this).fadeOut(300);
});
    



// --------------------------------------------

// görev 7

var adet = [];
for (i = 0; i<1; i++) adet.push('<ul>2. The Eiffel Tower can be 15 cm taller during the summer (689 karakter)</ul><ul>15. A flea can accelerate faster than the Space Shuttle (566 karakter)</ul>');
$("#gorev7").append(adet.join(''));
// --------------------------------------------

// görev 8

$("h1").load("lorem.html");

// --------------------------------------------

// görev 9
$("h2, h1").mouseover(function(){
    var metin = $(this).hover().text();
    $("#gorev9 > input").val(metin);
});


// --------------------------------------------

// görev 10


$(".sutun:eq(1)").append('<img id="test" src="check.png" />')
$("#test").prop("align","right");
$("#test").css({"height":"100","width":"100px"});