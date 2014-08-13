window.onload = function(e){

        // var canvasElement = document.getElementById("stage");
        // var controller = new Leap.Controller();
        
        // controller.on("frame", function(frame){
                



            // if(frame.pointables.length > 0)
            // {
            //     //var canvasElementWidth = document.body.clientWidth;
            //     //console.log(canvasElementWidth, "here");
            //     //Get a pointable and normalize the tip position
            //     var pointable = frame.pointables[0];
            //     var interactionBox = frame.interactionBox;
            //     var normalizedPosition = interactionBox.normalizePoint(pointable.tipPosition, true);
                
            //     // Convert the normalized coordinates to span the canvas
            //     var canvasX = document.body.clientWidth * normalizedPosition[0];
            //     var canvasY = document.body.clientHeight * (1 - normalizedPosition[1]);
            //     //we can ignore z for a 2D context
                
            //     // displayArea.strokeText("(" + canvasX.toFixed(1) + ", " + canvasY.toFixed(1) + ")", canvasX, canvasY);

            //     //$("change").html(canvasX+canvasY);
            //     //console.log(canvasX.toFixed(1), canvasY.toFixed(1));
            //     $("#change").css({"top": canvasY});
            //     $("#change").css({"left": canvasX});
            //     //$("#change").style.left = canvasY.toFixed(1));
            //     var tipPointer = 0;
            //     var leapFrame = controller.frame();
            //     if (leapFrame.valid) {
            //         var iBox = leapFrame.interactionBox;
            //         //for (var p = 0; p < leapFrame.pointables.length; p++) {
            //             var pointable = leapFrame.pointables[0];
            //             var pos = iBox.normalizePoint(pointable.tipPosition, true);
            //             if (pointable.touchZone == "hovering") {
            //               $("#change").html("a");
            //             } else if (pointable.touchZone == "touching") {
            //                 $("#change").html("A");
            //                 //console.log("touched");
            //                 // $("button").click();

            //                 $(document.elementFromPoint(canvasX, canvasY)).click();

            //             } else {
                            
            //             }
            //     }
            // }
     //    });
     //    controller.connect();

     //    // console.log($("#button").position());
     //    // console.log($("#button").height());
     //    // console.log($("#button").width());
        var previousframe;
        var controllerOptions = {enableGestures: true};

        Leap.loop(controllerOptions, function(frame) {

          if (frame.gestures.length > 0) {
            for (var i = 0; i < frame.gestures.length; i++) {
              var gesture = frame.gestures[i];

              if (gesture.type == "swipe") {
                  //Classify swipe as either horizontal or vertical
                  var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
                  //Classify as right-left or up-down
                  if(isHorizontal){
                      if(gesture.direction[0] > 0){
                          swipeDirection = "right";
                          if(previousframe!==swipeDirection){
                            console.log("right");
                            $("#image").removeClass();
                            $("#image").addClass("right dim");
                            previousframe=swipeDirection;
                          }
                          //console.log("right");
                      } else {
                          swipeDirection = "left";
                          if(previousframe!==swipeDirection){
                            console.log("left");
                            $("#image").removeClass();
                            $("#image").addClass("left dim");
                            previousframe=swipeDirection;
                          }
                      }
                  } else { //vertical
                      if(gesture.direction[1] > 0){
                          swipeDirection = "up";
                          if(previousframe!==swipeDirection){
                            console.log("up");
                            $("#image").removeClass();
                            $("#image").addClass("top dim");
                            previousframe=swipeDirection;
                          }
                      } else {
                          swipeDirection = "down";
                          if(previousframe!==swipeDirection){
                            console.log("down");
                            $("#image").removeClass();
                            $("#image").addClass("down dim");
                            previousframe=swipeDirection;
                          }
                      }                  
                  }
               }
             }
          }
          
        });
      }
     

     function alertmsg(){
      console.log("Button Clicked !!");
     }
     function alertmsg1(){
      console.log("Body Clicked !!");
     }    
