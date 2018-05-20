;(function (){
    'use strict';

    angular
        .module('app')
        .controller('MapCtrl', MapCtrl);

    MapCtrl.$inject = ['$scope','$rootScope', '$state'];

    function MapCtrl ($scope, $rootScope, $state){
        var vm                  = this;

        vm.titleHeader = 'Map';
        var dataMap = [];
        var mapUsers = [];
        var markers = [];
        var map;
        $scope.inRT = true;
        $scope.inDZ = false;
        console.log("map init");
        vm.initMap = function () {

            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 14.1648, lng: 121.2413},
              zoom: 14,
              styles: [

              {
                featureType: 'transit.station',
                stylers: [{ visibility: 'off' }]  // Turn off bus, train stations etc.
              }],
              disableDoubleClickZoom: true,
              streetViewControl: false,
            });

            dataMap.push({
              'latitude': 14.164423,
              'longitude' : 121.221257,
              'icon' : '../images/landslide_icon_red.png'
            });
            dataMap.push(
            {
              'latitude': 14.193381,
              'longitude' : 121.236800,
              'icon' : '../images/landslide_icon_yellow.png'
            });
             dataMap.push(
            {
              'latitude': 14.183089,
              'longitude' : 121.2477202,
              'icon' : '../images/landslide_icon_yellow.png'
            });

            // map.addListener('click', function() {
            //   for(var i=0;i<markers.length;i++){
            //       if(markers[i].getIcon() == '../images/landslide_icon_clicked_red.png' && markers[i]!=marker){
            //         console.log("traverse: clicked red therefore base");
            //         markers[i].setIcon('../images/landslide_icon_red.png');
            //       }

            //       else if(markers[i].getIcon() == '../images/landslide_icon_clicked_yellow.png'  && markers[i]!=marker) {
            //         console.log("traverse: clicked yellow therefore base");
            //         markers[i].setIcon('../images/landslide_icon_yellow.png');
            //       }
            //     }
            // });

            addInitMap();
        }

       
        // {
        //   latitude: 14.000,
        //   longitude: 22.000

        // }
        function addMarker(props){
          console.log(props);

            // var infowindow = new google.maps.InfoWindow({
            //   content: contentString
            // });
            
            // console.log(props.longitude);
            if(props.longitude){
              var marker = new google.maps.Marker({
                position:{
                  lat:props.latitude,
                  lng:props.longitude
                },
                map:map,
                icon: props.icon
                  
              });
              marker.addListener('click', function() {
                for(var i=0;i<markers.length;i++){
                  if(markers[i].getIcon() == '../images/landslide_icon_clicked_red.png' && markers[i]!=marker){
                    console.log("traverse: clicked red therefore base");
                    markers[i].setIcon('../images/landslide_icon_red.png');
                    $('.dropdown-button').dropdown('close');
                  }

                  else if(markers[i].getIcon() == '../images/landslide_icon_clicked_yellow.png'  && markers[i]!=marker) {
                    console.log("traverse: clicked yellow therefore base");
                    markers[i].setIcon('../images/landslide_icon_yellow.png');
                    $('.dropdown-button').dropdown('close');
                  }

                }
                console.log(markers.indexOf(marker));

                 $rootScope.$emit("CallShowMethod", markers.indexOf(marker));
                 $rootScope.showCurr(markers.indexOf(marker));
                if(marker.getIcon() == '../images/landslide_icon_clicked_red.png'){
                  console.log("red and clicked therefore closing");
                  marker.setIcon('../images/landslide_icon_red.png');
                  $('.dropdown-button').dropdown('close');
                }
                else if (marker.getIcon() == '../images/landslide_icon_red.png'){
                  console.log("red therefore open and clicked");
                  marker.setIcon('../images/landslide_icon_clicked_red.png');
                  $('.dropdown-button').dropdown('open');
                }
                else if(marker.getIcon() == '../images/landslide_icon_clicked_yellow.png'){
                  console.log("yellow and clicked therefore closing");
                  marker.setIcon('../images/landslide_icon_yellow.png');
                  $('.dropdown-button').dropdown('close');
                }
                else if (marker.getIcon() == '../images/landslide_icon_yellow.png'){
                  console.log("yellow therefore open and clicked");
                  marker.setIcon('../images/landslide_icon_clicked_yellow.png');
                  $('.dropdown-button').dropdown('open');
                }
              });
              markers.push(marker);
              console.log("added");
             
            }
          }

          function addInitMap() {
            console.log(dataMap)
            for(var i=0;i<dataMap.length;i++){
              console.log(dataMap[i]);
              addMarker(dataMap[i]);
            }
          }
       

        vm.initMap();

    }

})();
