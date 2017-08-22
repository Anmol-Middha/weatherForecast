            $(document).ready(function(){
                // $('html').fadeIn();
                // $('html').css('display','none');
                // $('html').fadeIn();
                $('body').css('display','none');
                $('body').fadeIn(2000);
            });
            displayclock();
            var date;
            function displayclock(){
                date = new Date();
                if(date.getHours()>=5 && date.getHours()<=11){
                    $('body').css('background-image','url(../images/morning.jpg)');
                }
                else if(date.getHours()>=12 && date.getHours()<=16){
                    $('body').css('background-image','url(../images/afternoon.jpg)');
                }
                else if(date.getHours()>=17 && date.getHours()<=20){
                    $('body').css('background-image','url(../images/evening.jpg)');
                }
                else{
                    $('body').css('background-image','url(../images/night.jpg)');
                }
                setTimeout(displayclock,1000);
            }