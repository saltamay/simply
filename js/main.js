let userInfo = {
  bestMatch: [],
  like: []
};
let map;
let marker; 
// var markerCluster;
let infoWindow;
let locations;
let match;
let index = 0;


function initMap() {

  let lat = match.latLong.latitude;
  let lng = match.latLong.longitude;

  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: lat,
      lng: lng
    }, 
    zoom: 16,
  });

  const infoWindow = new google.maps.InfoWindow;

  marker = new google.maps.Marker({
    map: map,
    position: { lat , lng },
  });

  const infoWindowContent = document.createElement('div');
  infoWindowContent.classList.add('card');

  infoWindowContent.innerHTML =
    `
    <div class="card-image">
      <img src="${match.imgSrc}">
    </div>
    <div class="card-content">
      <span class="card-title">${match.hdpData.homeInfo.streetAddress}</span>
      <p>Price: $${match.price}</p>
    </div>
    `

  marker.addListener('click', function () {
    infoWindow.setContent(infoWindowContent);
    infoWindow.open(map, marker);
  });

  // markerCluster = new MarkerClusterer(map, markers,
  //   {imagePath: 'https://github.com/googlemaps/v3-utility-library/blob/master/markerclusterer/images/m1.png?raw=true'}
  //   );
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
          <a href="#" class='btn waves-effect waves-light z-depth-2 pulse' onclick="handleFourthQuestion(this)" data-value="location">BOTH</a>
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

  let listings = [];

  listings = narrowByUnit();

  switch (userInfo.mostImportant) {
    case 'price':
      locations = narrowByPrice(listings).sort((a, b) => {
        return a.price - b.price;
      })

      displayresults();
      break;
    case 'transportation':
      locations = narrowByWalkingDistance(listings).filter(listing => {

        if (listing.price <= parseInt(userInfo.price)) {
          return listing;
        }
      })

      displayresults();
      break;
    case 'location':
      locations = narrowByDistanceToUofT(listings);

      setTimeout(() => {
        displayresults();
      }, 1000);
      break;
  }

}

const displayresults = function () {

  match = locations[index];
  
  let price = match.price.toString();
  price = '$' + price.charAt(0) + ',' + price.slice(1);
  const zipcode = "M5R";

  const waypoint0 = '43.66219,-79.3942';
  const waypoint1 = match.latLong.latitude + ',' + match.latLong.longitude;

  let travelTime;

  $.ajax({
    url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
    type: 'GET',
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    data: {
      waypoint0: waypoint0,
      waypoint1: waypoint1,
      mode: 'fastest;publicTransport',
      app_id: 'JAsUvJIQP95l3YaTmtT9',
      app_code: 'm7Ujzi9liyMLwQ27-0IE1Q'
    },
  }).then(data => {
    travelTime = data.response.route[0].summary.travelTime;
    console.log(travelTime);
    
  }).then(data => {
    // Display best match
    let results =
      `<div id="results" class="row">
        <div id="listingInfo" class="col s12 m3">
          <div class="card">
            <div class="listing-address">
              <h6 class="">${match.hdpData.homeInfo.streetAddress} <span class="listing-price right">${price}</span></h6>
            </div>
            <div class="card-image">
              <img src="${match.imgSrc}">      
            </div>
            <div class="card-content">
              <div>
                <div class="left card-visuals">
                  <i class="material-icons">hotel</i>
                  <span class="listing-bedrooms">${match.beds}</span>
                </div>
                <div class="left card-visuals">
                  <i class="material-icons">hot_tub</i>
                  <span class="listing-bathrooms">${match.baths}</span>
                </div>
                <div class="left card-visuals">
                  <i class="material-icons">directions_walk</i>
                  <span class="listing-convenience">WalkScore: ${neighbourhoods[zipcode].walkScore}</span>
                </div>
            </div>
      `;
      switch (userInfo.mostImportant) {    
        case 'price':
          results += `
          <div class="listing-details">
            <p class="clearfix"><i class="material-icons">home</i>Best for ${userInfo.mostImportant}</p>
            <p><i class="material-icons">location_on</i>${neighbourhoods[zipcode].name}, Toronto</p>
            <p><i class="material-icons">location_city</i>${neighbourhoods[zipcode].facts}</p>
          </div>
          `
          break;
        case 'transportation':
          results += `
          <div class="listing-details">
            <p class="clearfix"><i class="material-icons">home</i>Best for public ${userInfo.mostImportant}</p>
            <p><i class="material-icons">location_on</i>${neighbourhoods[zipcode].name}, Toronto</p>
            <p><i class="material-icons">directions_subway</i>${match.distance} meters to closest subway location</p>
            <p><i class="material-icons">school</i>${Math.floor(travelTime / 60)} mins by public transit</p>
            <p><i class="material-icons">location_city</i>${neighbourhoods[zipcode].facts}</p>
          </div>
          `
          break;
        case 'location':
          results += `
          <div class="listing-details">
            <p class="clearfix"><i class="material-icons">home</i>Best for ${userInfo.mostImportant}</p>
            <p><i class="material-icons">location_on</i>${neighbourhoods[zipcode].name}, Toronto</p>
            <p><i class="material-icons">school</i>${Math.floor(travelTime / 60)} mins by public transit</p>
            <p><i class="material-icons">location_city</i>${neighbourhoods[zipcode].facts}</p>
          </div>
          `
          break;
      }
    
    results += `
      </div>
      <div class="card-action card-buttons center-align">
        <a class="btn-floating btn-large waves-effect waves-light pink lighten-2"><i id="dislike" class="material-icons">thumb_down</i></a>
        <a class="btn-floating btn-large waves-effect waves-light red lighten-1 favorite"><i id="bestMatch" class="material-icons">favorite</i></a>
        <a class="btn-floating btn-large waves-effect waves-light blue lighten-2"><i id="like" class="material-icons">thumb_up</i></a>
      </div>
      </div>
      </div>
      <div id="map" class="col s12 m9"></div>
    </div> 
    `

    document.getElementById("mainContainer").innerHTML = results;
    // Add event listeners
    document.getElementById('dislike').addEventListener('click', (e) => { handleButtonClick(e); });
    document.getElementById('bestMatch').addEventListener('click', (e) => { handleButtonClick(e); });
    document.getElementById('like').addEventListener('click', (e) => { handleButtonClick(e); });
    initMap();
  })

  index++;
  
}

const handleButtonClick = (e) => {

  switch (e.target.id) {
    case 'dislike':
      displayresults();
      break;
    case 'bestMatch':
      userInfo.bestMatch.push(match)
      saveToLocalStorage();
      displayresults();
      break;
    case 'like':
      userInfo.like.push(match);
      saveToLocalStorage();
      displayresults();
      break;
  }
  return false;
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

const narrowByDistanceToUofT = (listings) => {

  const newListings = [];

  const waypoint0 = '43.66219,-79.3942';

  for(let i = 0; i < listings.length; i++) {

    const waypoint1 = listings[i].latLong.latitude + ',' + listings[i].latLong.longitude;

    $.ajax({
      url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
      type: 'GET',
      dataType: 'jsonp',
      jsonp: 'jsoncallback',
      data: {
        waypoint0: waypoint0,
        waypoint1: waypoint1,
        mode: 'fastest;publicTransport',
        app_id: 'JAsUvJIQP95l3YaTmtT9',
        app_code: 'm7Ujzi9liyMLwQ27-0IE1Q'
      },
    }).then(data => {
      const travelTime = data.response.route[0].summary.travelTime;
        if (Math.floor(travelTime / 60) <= 30) {
          listings[i].travelTime = travelTime
          newListings.push({
            ...listings[i]
          });
          locations = newListings;
        }
    })
  } 
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