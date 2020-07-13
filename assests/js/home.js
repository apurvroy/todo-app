// delete button
$(document).ready(function(){
    $('.delete').on('click', function(){
    var item = new Array();
      if($('input:checkbox:checked').length>0){
        $('input:checkbox:checked').each(function(){
          item.push($(this).attr('id'));
        });
        sendResponse(item);
      }
   });
    function sendResponse(item) {
      $.ajax({
        type:'post',
        url:"/delete",
        data:{item:item},
        success:function(data){
          location.reload();
        }
      });
    }


    //task type
    if($('.type').innerHTML=='hello')
      $('.type').css("color","green");
    
  });

  