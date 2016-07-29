var correctCards = 0;

$(document).ready(function() {

  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );


$('.draggable-intrinsic').draggable({
  containment: 'document',
  cursor: 'move',
  zIndex: 100,
  revert: true
});

$('.draggable-extrinsic').draggable({
  containment: 'document',
  cursor: 'move',
  zIndex: 100,
  revert: true
});

$("#intrinsic").droppable({
  drop: handleIntrinsicDropEvent,
});

$("#extrinsic").droppable({
  drop: handleExtrinsicDropEvent,
});

function handleIntrinsicDropEvent(event, ui){
    if (($(ui.draggable).attr('class')) === 'draggable-intrinsic ui-draggable ui-draggable-dragging') {
        $( ui.draggable).children().children().css( "class", "card orange" ).removeClass("orange");
        $(ui.draggable).children().children().css( "class", "card").addClass( "green" );
        ui.draggable.draggable( 'disable' );
        ui.draggable.draggable( 'option', 'revert', false );
        $.playSound('sounds/ping');
        correctCards++;
      if ((ui.draggable).attr('id') === 'solving'){
        ui.draggable.position( { my: 'center', at: 'center', of: '#solving-problems' } );
      } else {
        ui.draggable.position( { my: 'center', at: 'center', of: '#completing-studies' } );
      }
    }
}


function handleExtrinsicDropEvent(event, ui){
  if (($(ui.draggable).attr('class')) === 'draggable-extrinsic ui-draggable ui-draggable-dragging') {
    $(ui.draggable).children().children().css( "class", "card orange" ).removeClass("orange");
    $(ui.draggable).children().children().css( "class", "card").addClass( "green" );
    ui.draggable.draggable( 'disable' );
    ui.draggable.draggable( 'option', 'revert', false );
    $.playSound('sounds/ping');
    correctCards++;
    if ((ui.draggable).attr('id') === 'paid'){
      ui.draggable.position( { my: 'center', at: 'center', of: '#getting-paid' } );
    } else {
      ui.draggable.position( { my: 'center', at: 'center', of: '#digital-world' } );
    }
  }
}

$('.maslow').click(function(){
  $(this).children().children().css("class", "card orange")
    .removeClass("orange");
  if ($(this).attr("id") === "correct"){
    $(this).children().children().css( "class", "card").addClass("green");
    correctCards++;
    if (correctCards == 5){
      $.playSound('sounds/applause');
      swal({
        title: "Completed",
        text: "Well done you clever clogs!",
        type: "success",
        confirmButtonText: "Cool" });
    }
    $('.maslow').unbind('click');
  } else {
    $(this).children().children().css( "class", "card").addClass("red");
    $.playSound('sounds/wrong');
  }
});





});
