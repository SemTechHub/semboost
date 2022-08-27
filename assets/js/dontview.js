
//a code to protect from text selection, block text etc
function disableSelection(e){
  if(typeof e.onselectstart!="undefined")e.onselectstart=function(){
    return false}; else if(typeof e.style.MozUserSelect!="undefined")e.style.MozUserSelect="none";
    else e.onmousedown=function(){
      UIkit.notification(
        {
          message: '<span uk-icon="icon: warning"></span> This is not allowed here!',
          pos: 'top-right',
          status: 'danger'
        }
      )

      return false
    };
      e.style.cursor="default"}
      window.onload=function(){disableSelection(document.body)}



      // /a code to protect content from right click
      function mousedwn(e){
        try{if(event.button==2||event.button==3)return false}catch(e){
          if(e.which==3)return false}}document.oncontextmenu=function(){
            // alert('Hey Warning you cant view page source');
            UIkit.notification(
              {
                message: '<span uk-icon="icon: warning"></span> This is not allowed here!',
                pos: 'top-right',
                status: 'danger'
              }
            )
            return false
          };
          document.ondragstart=function(){
            UIkit.notification(
              {
                message: '<span uk-icon="icon: warning"></span> This is not allowed here!',
                pos: 'top-right',
                status: 'danger'
              }
            )

            return false

          };
          document.onmousedown=mousedwn




          //a code to protect shorcut keyboard, view source etc
          window.addEventListener("keydown",function(e){
            if(e.ctrlKey&&(e.which==65||e.which==66||e.which==67||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){
              e.preventDefault()}});
              document.keypress=function(e){
                if(e.ctrlKey&&(e.which==65||e.which==66||e.which==67||e.which==73||e.which==80||e.which==83||e.which==85||e.which==86)){}return false}






                //a code to protect your articles

                document.onkeydown=function(e){
                  e=e||window.event;if(e.keyCode==123||e.keyCode==18){
                    UIkit.notification(
                      {
                        message: '<span uk-icon="icon: warning"></span> This is not allowed here!',
                        pos: 'top-right',
                        status: 'danger'
                      }
                    )

                    return false

                  }}