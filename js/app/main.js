// $('body').css('background-image','url(back2.jpg)');
            
            displayclock();
            var i=1;
            var greet,date,ampm,min,time;
            function displayclock(){
                date = new Date();
                // console.log(date.getHours()+":"+date.getMinutes());
                ampm = (date.getHours()>=12)?"PM":"AM";
                min="";
                if(date.getMinutes()<=9)
                min = "0";
                // console.log(ampm);
                time =date.getHours()+":"+min+date.getMinutes()+" "+ampm;
                //console.log(date.getMinutes());
                document.getElementById("time").innerHTML = time;
                
            // $('#time').fadeIn(4000);
                if(i==1){
                    $('#time').hide();
                    $('#time').fadeIn(4000);
                }
                else{
                    $('#time').show();
                }
                
            
            // var d = date.getDate();
            // var m = date.getMonth()+1;
            // var y = date.getFullYear();
            // var date1 = d+"/"+m+"/"+y;
            // document.getElementById("date").innerHTML = date1;
            // $('#date').hide();
            // $('#date').fadeIn(4000);
                if(date.getHours()>=5 && date.getHours()<=11){
                    greet="Good Morning!";
                    $('body').css('background-image','url(images/morning.jpg)');
                }
                else if(date.getHours()>=12 && date.getHours()<=16){
                    greet="Good AfterNoon!";
                    $('body').css('background-image','url(images/afternoon.jpg)');
                }
                else if(date.getHours()>=17 && date.getHours()<=20){
                    greet="Good Evening!";
                    $('body').css('background-image','url(images/evening.jpg)');
                }
                else{
                    greet="Good Night!";
                    $('body').css('background-image','url(images/night.jpg)');
                }
                if(i==1){
                    document.getElementById('greet').innerHTML = greet;
                    $('#greet').hide();
                    setTimeout(function(){
                        $('#greet').show('slide');},2000);
                    // $('#right-icon').effect('bounce',{},500);
                    $('#right-icon').hide();
                    setTimeout(function(){
                        $('#right-icon').show('slide');},2000);
                        i++;
                }
                else if(i>=3){
                    document.getElementById('greet').innerHTML = greet;
                    $('#greet').show();
                    // console.log("lets check");
                    // $('#greet').hide()
                    // $('#greet').show();
                    // $('#right-icon').show();
                }
                setTimeout(displayclock,1000);
            }
            // $("#right-icon").effect( "bounce", {times:3}, 300 );
            // $("i").click(function(){
            //     console.log("getting clicked");
            //     $("body").fadeOut();
            // });
            // $("#navigate").click(function(){
            //     console.log('click');
            // })
            // function fade(){
            //     $('body').fadeOut();
            // }
            document.getElementById('right-icon').addEventListener('click',function(){
                $('html').fadeOut(function(){
                    window.location = 'pages/login.html';
                });
                return false;
            });
            // function fade(){
            //     $('html').fadeOut(6000);
            // }