

// görev1
var adet = [];
for (i = 0; i<1; i++) adet.push('<ul>1. Babies have around 100 more bones than adults</ul> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;2.The Eiffel Tower can be 15 cm taller during the summer</h2><ul>3. 20% of Earth’s oxygen is produced by the Amazon rainforest</h2></ul><ul></ul>');
$("#gorev1").append(adet.join(''));


// --------------------------------------------

// görev 2


$('#gorev2 > input').prop( "value", "15" );

// --------------------------------------------

// görev 3

$('#gorev3 > input').prop( "value", "15 amazing science facts that will blow your mind" );

// --------------------------------------------

// görev 4
$("h2:eq(1)").text("2. The Eiffel Tower can be 15 cm taller during the summer (689 karakter)");
$("h2:eq(2)").text("3. 20% of Earth’s oxygen is produced by the Amazon rainforest (804 karakter)");
$("h2:eq(3)").text("4. Some metals are so reactive that they explode on contact with water (780 karakter)");
$("h2:eq(4)").text("5. A teaspoonful of neutron star would weigh 6 billion tons (748 karakter)");
$("h2:eq(5)").text("6. Hawaii moves 7.5cm closer to Alaska every year (696 karakter)");
$("h2:eq(6)").text("7. Chalk is made from trillions of microscopic plankton fossils (470 karakter)");
$("h2:eq(7)").text("8. In 2.3 billion years it will be too hot for life to exist on Earth (1326 karakter)");
$("h2:eq(8)").text("9. Polar bears are nearly undetectable by infrared cameras(1241 karakter)");
$("h2:eq(9)").text("10.It takes 8 minutes, 19 seconds for light to travel from the Sun to the Earth (702 karakter)");
$("h2:eq(10)").text("11.If you took out all the empty space in our atoms, the human race could fit in the volume of a sugar (1241 karakter)");
$("h2:eq(11)").text("12.Stomach acid is strong enough to dissolve stainless steel (1241 karakter)");
$("h2:eq(12)").text("13.The Earth is a giant magnet (1241 karakter)");
$("h2:eq(13)").text("14.Venus is the only planet to spin clockwise (1241 karakter)");
$("h2:eq(14)").text("15.A flea can accelerate faster than the Space Shuttle (566 karakter)");



// --------------------------------------------


// görev 5
$("h1").css("color","red");
$("h2:eq(1)").css("color","orange");
$("h2:eq(2)").css("color","blue");
$("h2:eq(3)").css("color","orange");
$("h2:eq(4)").css("color","blue");
$("h2:eq(5)").css("color","orange");
$("h2:eq(6)").css("color","blue");
$("h2:eq(7)").css("color","orange");
$("h2:eq(8)").css("color","blue");
$("h2:eq(8)").css("color","orange");
$("h2:eq(9)").css("color","blue");
$("h2:eq(10)").css("color","orange");
$("h2:eq(11)").css("color","blue");
$("h2:eq(12)").css("color","blue");
$("h2:eq(13)").css("color","orange");
$("h2:eq(14)").css("color","blue");








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