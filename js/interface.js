$(document).ready(function() {

$('.card orange').draggable({
    cursor: 'move',
    helper: "clone"
});

$("#container1").droppable({
  drop: function(event, ui) {
    var itemid = $(event.originalEvent.toElement).attr("itemid");
    $('.box-item').each(function() {
      if ($(this).attr("itemid") === itemid) {
        $(this).appendTo("#container1");
      }
    });
  }
});

$("#intrinsic").droppable({
  drop: function(event, ui) {
    var itemid = $(event.originalEvent.toElement).attr("itemid");
    $('.box-item').each(function() {
      if ($(this).hasClass("btn btn-default box-item intrinsic")) {
        $(this).appendTo("#intrinsic");
      }
    });
  }
});

$("#extrinsic").droppable({
  drop: function(event, ui) {
    var itemid = $(event.originalEvent.toElement).attr("itemid");
    $('.box-item').each(function() {
      if ($(this).attr("itemid") === itemid) {
        $(this).appendTo("#extrinsic");
      }
    });
  }
});

});
