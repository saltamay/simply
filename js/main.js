let userInfo = {};
var map;
var markers;
var markerCluster;
var infoWindow;
var locations;


function initMap() {
  let toronto = {lat: 43.713116, lng: -79.3832}
  map = new google.maps.Map(document.getElementById('map'), {
    center: toronto, 
    zoom: 15,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });


  markers = locations.map(function(location,i){
    let lat = location.lat;
    let lng = location.lng;
    return new google.maps.Marker({
      position: { lat , lng },
    });
  });

  markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://github.com/googlemaps/v3-utility-library/blob/master/markerclusterer/images/m1.png?raw=true'}
    );

  console.log(markerCluster)



}



const handleFirstQuestion = (e) => {
  userInfo.numOfBeds = e.dataset.value;
  document.getElementById("mainContainer").innerHTML = `  

  <header >
  <nav class="red darken-2 center-align " role="navigation" style='height:5em'>
      <div class="nav-wrapper center-align">
          <a id="logo-container" href="#" class="brand-logo center-align" style="padding-top: 10px; filter:invert(1)">
              <img src="./img/isolated-monochrome-white.svg" alt="" srcset="" style="width: 30px;">
              <img class='hide-on-small-only' src="./img/default-monochrome-white.svg" alt="" srcset="" style="width: 96px; margin-left: 5px;">
          </a>
      </div>
  </nav>
</header>
  
  <div class="container" id='q2' style="margin-top:100px" >
<div class="row" >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-3 z-depth-4">
        <div id='sliderCard' class="card-content white-text  ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >monetization_on</i>
            Question 2 :
          </span>
          <p>WHAT ARE YOU LOOKING TO PAY?</p>
        </div>
        <div class="container ">
          <div id='sliderDisplay' class='center-align '>
              <span id='sliderText' class='z-depth-2 green-text text-darken-2' >
                <span>UP TO: $<span id='rentValue' >2700</span> PER MONTH</span>
              </span>
          </div>
        </div>
        <div class="container">
            <form action="#">
                <p class="range-field ">
                  <input class="z-depth-2" type="range" id="sliderInput" min="400" max="5000" />
                </p>
              </form>
        </div>
        <div class='container center-align'>
          <a style="margin-bottom:30px" href="#" class='btn' onclick="handleSecondQuestion()">Submit 
            <i class='material-icons right'>send</i>
          </a>
        </div>
        
      </div>
    </div>
  </div>
</div>

<footer class="page-footer"  style='margin-top:100px; width:100vw; position:absolute; bottom:0px; '>
<div class="container center-align">
    <div class="col s12">
        <p class="grey-text text-lighten-4">We are a team of college students working on this project like
                it's our full time job.
        </p>
    </div>
</div>

    <div class="footer-copyright">
      <div class="container center-align">
      &copy; 2019 Simply 
      </div>
    </div>
</footer>

`;
  document.onload = document.getElementById('sliderInput').addEventListener('input',function(e){
    document.getElementById('rentValue').innerText =e.target.value
  })
};

// const handleSecondQuestion = () => {

//   userInfo.price = document.getElementById("sliderInput").value;

//   const q3 = `  



//   <header>
//   <nav class="white center-align " role="navigation" style='height:5em'>
//       <div class="nav-wrapper center-align">
//           <a id="logo-container" href="#" class="brand-logo center-align" style="padding-top: 10px;">
//               <img src="./img/isolated-monochrome-white.svg" alt="" srcset="" style="width: 30px;">
//               <img class='hide-on-small-only' src="./img/default-monochrome-white.svg" alt="" srcset="" style="width: 96px; margin-left: 5px;">
//           </a>
//           <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
//       </div>
//   </nav>
// </header>
  
  
  
//   <div class="container " id='q3' style="margin-top:100px" >
// <div class="row" >
//     <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
//       <div class="card red darken-4 z-depth-4">
//         <div id='sliderCard' class="card-content white-text  ">
//           <span class="card-title ">
//             <i class='material-icons left green-text ' >my_location</i>
//             Question 3 :
//           </span>
//           <p>WHERE ARE YOU LOOKING TO MOVE?</p>
//         </div>
//         <div class="container">
//             <div class="row">
//                 <form class="col s12 center-align">
//                   <div class="row">
//                     <div class="input-field col s12 center-align ">
//                       <i class="material-icons prefix green-text">location_on</i>
//                       <input id="location" type="text" class="validate white-text">
//                       <label  class='green-text' for="location">Example: Toronto</label>
//                     </div>
//                   </div>
//                   <a href="#" class='btn' onclick="handleThirdQuestion()">Submit 
//                       <i class='material-icons right'>send</i>
//                   </a>
//                 </form>
//               </div>
//         </div>
//     </div>
//   </div>
// </div>
// </div>


// <footer class="page-footer"  style='margin-top:100px; width:100vw; position:absolute; bottom:0px; '>
// <div class="container center-align">
//     <div class="col s12">
//         <p class="grey-text text-lighten-4">We are a team of college students working on this project like
//                 it's our full time job.
//         </p>
//     </div>
// </div>

//     <div class="footer-copyright">
//       <div class="container center-align">
//       &copy; 2019 Simply 
//       </div>
//     </div>
// </footer>

// `
//   document.getElementById("mainContainer").innerHTML = q3;


// };

const handleSecondQuestion = () => {
  // userInfo.location = document.getElementById("location").value;
    userInfo.price = document.getElementById("sliderInput").value;

  const q4 = `
  
  <header >
  <nav class="red darken-2 center-align " role="navigation" style='height:5em'>
      <div class="nav-wrapper center-align">
          <a id="logo-container" href="#" class="brand-logo center-align" style="padding-top: 10px; filter:invert(1)">
              <img src="./img/isolated-monochrome-white.svg" alt="" srcset="" style="width: 30px;">
              <img class='hide-on-small-only' src="./img/default-monochrome-white.svg" alt="" srcset="" style="width: 96px; margin-left: 5px;">
          </a>
      </div>
  </nav>
</header>
  
  
  
  <div class="container " id='q4' style="margin-top:100px" >
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-3 z-depth-4">
        <div class="card-content white-text ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >show_chart</i>
            Question 3 :
          </span>
          <p>I CARE THE MOST ABOUT:</p>
        </div>
        <div class="card-action center-align">
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="transportaion">Easy Transportation</a>
          <p class='white-text' >OR</p>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="price">Cheapest Price</a>
          <p class='white-text' >OR</p>
          <a href="#" class='btn waves-effect waves-light z-depth-2 pulse' onclick="handleFourthQuestion(this)" data-value="both">BOTH</a>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="page-footer"  style='margin-top:100px; width:100vw; position:absolute; bottom:0px; '>
<div class="container center-align">
    <div class="col s12">
        <p class="grey-text text-lighten-4">We are a team of college students working on this project like
                it's our full time job.
        </p>
    </div>
</div>

    <div class="footer-copyright">
      <div class="container center-align">
      &copy; 2019 Simply 
      </div>
    </div>
</footer>
`

  document.getElementById("mainContainer").innerHTML = q4;
};

const handleFourthQuestion = (e) => {

  userInfo.mostImportant = e.dataset.value;

  saveToLocalStorage();
  
  const q4 = `<div id="map"></div>`
  document.getElementById("mainContainer").innerHTML = q4;

  let listings = [];

  listings = narrowByUnit();

  // if (userInfo.mostImportant === 'price') {
    
  // }

  listings = narrowByPrice(listings);

  narrowByWalkingDistance(listings);
  
  // displayresults()

}

const displayresults = function () {
  convertLatLong()
  var apikey = 'AIzaSyAVRcQaZXipelHJy9FFybcFT9VJDmbyBvA';
  scriptElem = document.createElement('script');
  scriptElem.async = true;
  scriptElem.defer = true;
  scriptElem.src=`https://maps.googleapis.com/maps/api/js?key=${apikey}&callback=initMap`
  scriptElem.type="text/javascript";
  document.getElementsByTagName('head')[0].appendChild(scriptElem) 
}


const convertLatLong = function(){
  var lists = JSON.parse(localStorage.houseListing);
  lists = lists.map((list,i)=>{
    return {lat:list.latLong.latitude,lng:list.latLong.longitude}
  })
  locations = lists

 
}


const saveToLocalStorage = () => {

  localStorage.setItem('userInfo', JSON.stringify(userInfo));

}

const displayFirstQuestion = () => {

  var q1 = `


  <header >
  <nav class="red darken-2 center-align " role="navigation" style='height:5em'>
      <div class="nav-wrapper center-align">
          <a id="logo-container" href="#" class="brand-logo center-align" style="padding-top: 10px; filter:invert(1)">
              <img src="./img/isolated-monochrome-white.svg" alt="" srcset="" style="width: 30px;">
              <img class='hide-on-small-only' src="./img/default-monochrome-white.svg" alt="" srcset="" style="width: 96px; margin-left: 5px;">
          </a>
      </div>
  </nav>
</header>
  
  
  
  <div class="container" id='q1' style="margin-top:100px" >
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-3 z-depth-4">
        <div class="card-content white-text ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >info_outline</i>
            Question 1 :
          </span>
          <p>HOW MANY BEDROOMS DO YOU WANT?</p>
        </div>
        <div class="card-action center-align">
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="1">1 Bed</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="2">2 Beds</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="3">3+ Beds</a>
        </div>
      </div>
    </div>
  </div>
</div>


<footer class="page-footer"  style='margin-top:100px; width:100vw; position:absolute; bottom:0px; '>
<div class="container center-align">
    <div class="col s12">
        <p class="grey-text text-lighten-4">We are a team of college students working on this project like
                it's our full time job.
        </p>
    </div>
</div>

    <div class="footer-copyright">
      <div class="container center-align">
      &copy; 2019 Simply 
      </div>
    </div>
</footer>


`

  document.getElementById("mainContainer").innerHTML = q1;


};

const narrowByPrice = (listings) => {

  const newListings = [];

  listings.forEach(listing => {
    
    let price = listing.price.slice(2, 3) + listing.price.slice(4, 7);
    price = parseInt(price);
    
    if (price <= parseInt(userInfo.price)) {
      newListings.push(listing);
    }
  });
  console.log(newListings);
  return newListings;
}

const narrowByUnit = () => {
  
  let listings = JSON.parse(localStorage.getItem('houseListing'));

  const newListings = [];
  
  listings.forEach(listing => {
    
    if (listing.hdpData) {
      if (listing.beds.toString() === userInfo.numOfBeds) {
        newListings.push(listing);
      }
    }
  });
  return newListings;
}

const narrowByWalkingDistance = (listings) => {

  const newListings = [];

  listings.forEach(listing => {
    
    const waypoint0 = listing.latLong.latitude + ',' + listing.latLong.longitude;

    subwayData.forEach(subwayLocation => {

      const waypoint1 = subwayLocation.latLong.latitude + ',' + subwayLocation.latLong.longitude;
      
      $.ajax({
        url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        data: {
          waypoint0: waypoint0,
          waypoint1: waypoint1,
          mode: 'fastest;pedestrian',
          app_id: 'JAsUvJIQP95l3YaTmtT9',
          app_code: 'm7Ujzi9liyMLwQ27-0IE1Q'
        },
        success: function (data) {
          const distance = data.response.route[0].summary.distance;
          if (distance <= 750) {
            newListings.push({
              listing: listing,
              subway: subwayLocation,
              distance: distance
            });
          }
        }
      });
    })
  });
  console.log(newListings);
  return newListings;
}

const getListing = async function(){
  localStorage.setItem('houseListing', JSON.stringify(listingsInfo.searchResults.mapResults));
}





const main = async function () {
  localStorage.clear(); //clears the local storgage

  await getListing()

  document.querySelector('#getStarted').addEventListener('click', (e) => {
    e.preventDefault();
    displayFirstQuestion();
  });

};


main();