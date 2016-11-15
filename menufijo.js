var app = {
    init: function(){
        $(document).ready(function(){
            $(window).scroll(function(){
                  var top = window.pageYOffset || document.documentElement.scrollTop;
                  if (top >= 1){
                      $("#header-top").css({
                          position: "fixed",
                          top: "0px",
                          width: "100%",
                      });
                  }
                  else{
                      $("#header-top").css({
                          position: "relative",
                          top: "0px",
                      });
                  }
            });
        });

        $(window).scroll(function(){
              var top = window.pageYOffset || document.documentElement.scrollTop;
              if (top >= 1){
                  $("#header-top").css({
                      position: "fixed",
                      top: "0px",
                      width: "100%",
                      "z-index": 100000
                  });
              }
              else{
                  $("#header-top").css({
                      position: "relative",
                      top: "0px"
                  });
              }
        });
    }
}
