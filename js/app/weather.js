(function() {
  'use strict';

  var app = {
    isLoading: true,
    selectedCities: [],
     spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addButton: document.querySelector('.null_card'),
    card_box1: document.querySelector('.card_box1'),
    card_box2: document.querySelector('.card_box2'),
    card_box3: document.querySelector('.card_box3'),
    addDialog: document.querySelector('.dialog-container'),
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };

// var x = "<div>{{xyz}}</div>";
var i=0;
// localStorage.clear();
//step.1
//plus icon click to open city selection dialog box
  document.getElementById('butAdd').addEventListener('click', function() {
    // Open/show the add new city dialog
    // var i=0;
    // do{
    //console.log(i);
    //app.localCheck();
   //app.selectedCities = localStorage.selectedCities;
    if(i<3)
    app.toggleAddDialog(true);
    // if(i>3)
    // {
    //     var div = document.getElementById('card_content');
    //     div.style.display = 'none';
    // }
    i++;
    //   i++;
    // }
    // while(app.selectedCities.length!==i);
  });
// app.localCheck = function(){
//    if (app.selectedCities) {
//      app.selectedCities = JSON.parse(app.selectedCities);
//      app.selectedCities.forEach(function(city) {
//        console.log('Yes!');
// });
//    }
// }
// localStorage.clear();
//    }
// }
if(i<=2){
  // var button = document.getElementById('butAdd');

  // button.onclick = function(){
    var div = document.getElementById('card_content');
    // if(div.style.display!=='none'){
    //   div.style.display = 'none';
    div.style.display = 'block';
    }
else{
  div.style.display = 'none';
}
// debugger;
// app.selectedCities = localStorage.selectedCities;

//Step2.
//display of dialog box
  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };




//Step.3
//Hiding the dialog box if cancel button is pressed
  document.getElementById('butAddCancel').addEventListener('click', function() {
    // Close the add new city dialog
    app.toggleAddDialog(false);
  });




//Step.4
//Getting the city from the user
//passing city for weather api call
  document.getElementById('butAddCity').addEventListener('click', function() {
    // Add the newly selected city
    var select = document.getElementById('selectCityToAdd').value;
    console.log(select);
    app.getForecast(select);
    //Adding city 
    app.selectedCities.push({key:select});
    // console.log(app.selectedCities);
    app.saveCities();
    app.toggleAddDialog(false);
    //if(i===3){
    // var div = document.getElementById('card_content');
    // div.style.display = 'block';
    //}
    //if(app.selectedCities.length===i)
    //break;
    //}
    // app.AddButton(true);
  });




//Step.5
//Calling the weather api
//collecting the response and passing the response for adding required details to html
 app.getForecast = function(select){
    var request = $.ajax( {
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + select + '&APPID=47fe56503a030e45f842aaa1148e92f3',
			method: "POST",
			dataType: "json"
		});
		request.done(function( response ) {
          if(i==1)
          app.updateForecastCard1(response);
          if(i==2)
          app.updateForecastCard2(response);
          if(i==3)
          app.updateForecastCard3(response);
        });
  }




//Step.6
//adding required details to html
app.updateForecastCard1 = function(data) {
      app.card_box1.removeAttribute('hidden');
      app.container.appendChild(app.card_box1);

  $("#city_name1").html(data.name);
  $("#data_country1").html(data.sys.country);
  $("#data_temp1").html((data.main.temp-273.15).toPrecision(2));
  $("#data_max_temp1").html((data.main.temp_max-273.15).toPrecision(2));
  $("#data_min_temp1").html((data.main.temp_min-273.15).toPrecision(2));
  $('#data_weather1').html(data.weather[0].main);
  $('#data_wind1').html(data.wind.speed);
  $('#data_humid1').html(data.main.humidity);
  $('#data_cloud1').html(data.clouds.all);
}

app.updateForecastCard2 = function(data) {
      app.card_box2.removeAttribute('hidden');
      app.container.appendChild(app.card_box2);

  $("#city_name2").html(data.name);
  $("#data_country2").html(data.sys.country);
  $("#data_temp2").html((data.main.temp-273.15).toPrecision(2));
  $("#data_max_temp2").html((data.main.temp_max-273.15).toPrecision(2));
  $("#data_min_temp2").html((data.main.temp_min-273.15).toPrecision(2));
  $('#data_weather2').html(data.weather[0].main);
  $('#data_wind2').html(data.wind.speed);
  $('#data_humid2').html(data.main.humidity);
  $('#data_cloud2').html(data.clouds.all);
}

app.updateForecastCard3 = function(data) {
      app.card_box3.removeAttribute('hidden');
      app.container.appendChild(app.card_box3);

  $("#city_name3").html(data.name);
  $("#data_country3").html(data.sys.country);
  $("#data_temp3").html((data.main.temp-273.15).toPrecision(2));
  $("#data_max_temp3").html((data.main.temp_max-273.15).toPrecision(2));
  $("#data_min_temp3").html((data.main.temp_min-273.15).toPrecision(2));
  $('#data_weather3').html(data.weather[0].main);
  $('#data_wind3').html(data.wind.speed);
  $('#data_humid3').html(data.main.humidity);
  $('#data_cloud3').html(data.clouds.all);
}


//Step.7
//Saving the cities in local Storage
  app.saveCities = function() {
    var selectedCities = JSON.stringify(app.selectedCities);
    //console.log(selectedCities);
    // debugger;
    localStorage.selectedCities = selectedCities;
    console.log(localStorage.selectedCities);
  };
  // if (app.selectedCities) {
  //   app.selectedCities.forEach(function(city) {
  //   app.getForecast(city.key);
  // });
  // }
//  app.selectedCities = localStorage.selectedCities;
//   if (app.selectedCities) {
//     app.selectedCities = JSON.parse(app.selectedCities);
//     app.selectedCities.forEach(function(city) {
//       app.getForecast(city.key);
//     });
//   }
//   else{
//     app.saveCities();
//   }
})();
var map,pos;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map_box'), {
          center: {lat: 20.5937, lng: 78.9629},
          zoom: 8
        });
        // infoWindow = new google.maps.InfoWindow;
        if (navigator.geolocation) {
          console.log("yes asked");
        //debugger;
        navigator.geolocation.getCurrentPosition(function(position){
          // var pos = {
          //   lat:position.coords.latitude,
          //   lang:position.coords.longitude
          // };
          pos = {lat:position.coords.latitude,lng:position.coords.longitude};
          //console.log(pos);
          map.setCenter(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
           var marker = new google.maps.Marker({
          position: pos,
          zoom: 8,
          draggable: true,
          animation: google.maps.Animation.DROP,
          map: map
        });
        marker.addListener('click', togglebounce);
        function togglebounce(){
          if(marker.getAnimation()!==null)
          marker.setAnimation(null);
          else
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
        google.maps.event.addListener(map, 'click', function(event) {
         placeMarker(event.latLng);
      });

        function placeMarker(location) {
          var marker = new google.maps.Marker({
            position: location, 
            draggable: true,
            map: map
        });
    }
  });
        // console.log(x);
        //console.log(showPosition);
  }
    // console.log(pos);
   
}

