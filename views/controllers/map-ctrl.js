;(function (){
    'use strict';

    angular
        .module('app')
        .controller('MapCtrl', MapCtrl);

    MapCtrl.$inject = ['$scope', '$state'];

    function MapCtrl ($scope, $state){
        var vm                  = this;

        vm.titleHeader = 'Map';
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

        }

        // {
        //   latitude: 14.000,
        //   longitude: 22.000

        // }
        function addMarker(props){
          console.log(props);

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            
            console.log(props.longitude);
            if(props.longitude){
              var marker = new google.maps.Marker({
                position:{
                  lat:props.latitude,
                  lng:props.longitude
                },
                map:map,
                icon: '../../assets/images/baseline_person_pin_circle_black_18dp.png'
                  
              });
              marker.addListener('click', function() {
                infowindow.open(map, marker);
              });


              if(mapUsers.includes(props.uid)){
                // console.log("UPDATE");
                var index = mapUsers.indexOf(props.uid);
                markers[index].setPosition(marker.position);
              }
              else{
                // console.log("NEW");
                markers.push(marker);
                mapUsers.push(props.uid);
              } 
            }
            else{

              if(mapUsers.includes(props.uid)){
                try{

                  // $state.reload();
                }
                catch(err){}
                
              }
            }
          }


        function singleAddMarker(props){

          if(props.longitude){
              var marker = new google.maps.Marker({
                position:{
                  lat:props.latitude,
                  lng:props.longitude
                },
                map:map,
                icon: '../../assets/images/baseline_person_pin_circle_black_18dp.png'
                  
              });
              
                markers.push(marker);
               
            }
        }

        vm.initMap();

    }

})();
