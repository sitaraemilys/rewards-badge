$(document).ready(function() {

$('.draggable-intrinsic').draggable({
});

$('.draggable-extrinsic').draggable({
});


$("#intrinsic").droppable({
  drop: function( event, ui ) {
    $( ui.draggable).children().children().css( "class", "card orange" )
      .removeClass("orange");
      console.log($(ui.draggable).attr('class'));
      if (($(ui.draggable).attr('class')) === 'draggable-intrinsic ui-draggable ui-draggable-dragging') {
        $(ui.draggable).children().children().css( "class", "card").addClass( "green" );
      } else {
        $(ui.draggable).children().children().css( "class", "card").addClass( "red" );
      }
  },

  out: function( event, ui ) {
    $( ui.draggable).children().children().css( "class", "card")
    .removeClass("red", "green")
    .addClass("orange");
  }
});

$("#extrinsic").droppable({
  drop: function( event, ui ) {
    $(ui.draggable).children().children().css( "class", "card orange" )
      .removeClass("orange");
      console.log($(ui.draggable).attr('class'));
      if (($(ui.draggable).attr('class')) === 'draggable-extrinsic ui-draggable ui-draggable-dragging') {
        $(ui.draggable).children().children().css( "class", "card").addClass( "green" );
      } else {
        $(ui.draggable).children().children().css( "class", "card").addClass( "red" );
      }
  },

  out: function( event, ui ) {
    $( ui.draggable).children().children().css( "class", "card")
    .removeClass("red")
    .removeClass("green")
    .addClass("orange");
  }
});

$('.maslow').click(function(){
  $(this).children().children().css("class", "card orange")
    .removeClass("orange");
  if ($(this).attr("id") === "correct"){
    $(this).children().children().css( "class", "card").addClass("green");
  } else {
    $(this).children().children().css( "class", "card").addClass("red");
  }
});


});
