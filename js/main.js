let userInfo = {};
var map;
var markers;
var markerCluster;
var infoWindow;
let locations;


function initMap() {
  let uoft = { lat: 43.66219, lng: -79.3942}
  map = new google.maps.Map(document.getElementById('map'), {
    center: uoft, 
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

  const infoWindow = new google.maps.InfoWindow;

  markers = locations.map(function(location,i){
    
    let lat = location.latLong.latitude;
    let lng = location.latLong.longitude;
    
    const infoWindowContent = document.createElement('div');
    infoWindowContent.classList.add('card');

    infoWindowContent.innerHTML = 
    `
    <div class="card-image">
      <img src="${location.imgSrc}">
    </div>
    <div class="card-content">
      <span class="card-title">${location.hdpData.homeInfo.streetAddress}, ${location.hdpData.homeInfo.zipcode}</span>
      <p>Price: $${location.price}</p>
    </div>
    `
    const marker = new google.maps.Marker({
      map: map,
      position: { lat , lng },
      
    });
    marker.addListener('click', function () {
      infoWindow.setContent(infoWindowContent);
      infoWindow.open(map, marker);
    });
    return marker; 
  });

  // markerCluster = new MarkerClusterer(map, markers,
  //   {imagePath: 'https://github.com/googlemaps/v3-utility-library/blob/master/markerclusterer/images/m1.png?raw=true'}
  //   );

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
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="transportation">Easy Transportation</a>
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

  if (userInfo.mostImportant === 'price') {
    
    locations = narrowByPrice(listings).sort((a, b) => {
      return b.price - a.price;
    })
  } 
  
  if (userInfo.mostImportant === 'transportation') {

    locations = narrowByWalkingDistance(listings).sort((a, b) => {
      return a.distance - b.distance;
    });
  }

  if (userInfo.mostImportant === 'both') {
    // const newListing = [];

    locations = narrowByWalkingDistance(listings).filter(listing => {

      if (listing.price <= parseInt(userInfo.price)) {
        return listing;
      }
    }) 
  }

  displayresults();
}


const displayresults = function () {
  // convertLatLong()
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
    
    // let price = listing.price.slice(2, 3) + listing.price.slice(4, 7);
    // price = parseInt(price);
    
    if (listing.price <= parseInt(userInfo.price)) {
      // listing.price = price;
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
        
        let price = listing.price.slice(2, 3) + listing.price.slice(4, 7);
        price = parseInt(price);
        listing.price = price;

        newListings.push(listing);
      }
    }
  });
  return newListings;
}


const narrowByWalkingDistance = (listings) => {

  // return new Promise((resolve, reject) => {
  //   const newListings = [];

  //   listings.forEach(listing => {

  //     const waypoint0 = listing.latLong.latitude + ',' + listing.latLong.longitude;

  //     subwayData.forEach(subwayLocation => {

  //       const waypoint1 = subwayLocation.latLong.latitude + ',' + subwayLocation.latLong.longitude;

  //       $.ajax({
  //         url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
  //         type: 'GET',
  //         dataType: 'jsonp',
  //         jsonp: 'jsoncallback',
  //         data: {
  //           waypoint0: waypoint0,
  //           waypoint1: waypoint1,
  //           mode: 'fastest;pedestrian',
  //           app_id: 'JAsUvJIQP95l3YaTmtT9',
  //           app_code: 'm7Ujzi9liyMLwQ27-0IE1Q'
  //         },
  //       }).then(data => {
  //         const distance = data.response.route[0].summary.distance;
  //           console.log('call');
  //           if (distance <= 750) {
  //             newListings.push({
  //               listing: listing,
  //               subway: subwayLocation,
  //               distance: distance
  //             });
  //           }
  //       })
  //     })
  //   });
  //   // return newListings;
  //   if(newListings.length === newListings.length) {
  //     resolve(newListings);
  //   }else {
  //     reject('Cannot complete');
  //   }
  // })
  const newListings = [];
  const r = 6371e3; // gives d in metres
  for (unit in listings) {
    var φ1 = (listings[unit].latLong.latitude) * Math.PI / 180;
    for (station in subwayData) {
      var φ2 = (subwayData[station].latLong.latitude) * Math.PI / 180;
      var Δλ = ((subwayData[station].latLong.longitude - listings[unit].latLong.longitude)) * Math.PI / 180;
      var d = Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)) * r;

      if (d <= 750) {
        // console.log('distance from unit at', listings[unit].latLong, 'to', subwayData[station].name, 'station is', Math.floor(d), 'meters')
        listings[unit].subway = subwayData[station];
        listings[unit].distance = Math.floor(d);
        newListings.push({
          ...listings[unit]
        });
      }
    }
  }
  return newListings;
}


const getListing = async function(){
  localStorage.setItem('houseListing', JSON.stringify(listingsInfo.searchResults.mapResults));
}


const main = function () {
  localStorage.clear(); //clears the local storgage

  getListing()

  document.querySelector('#getStarted').addEventListener('click', (e) => {
    e.preventDefault();
    displayFirstQuestion();
  });

};


main();