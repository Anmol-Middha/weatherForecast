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
  else{
    console.log("not possible");
  }
    // console.log(pos);
   
}
