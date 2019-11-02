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
    zoom: 15
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

  document.getElementById("mainContainer").innerHTML = `  <div class="container" id='q2'>
<div class="row" >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
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
          <a href="#" class='btn' onclick="handleSecondQuestion()">Submit 
            <i class='material-icons right'>send</i>
          </a>
        </div>
        
      </div>
    </div>
  </div>
</div>`;
  document.onload = document.getElementById('sliderInput').addEventListener('input',function(e){
    document.getElementById('rentValue').innerText =e.target.value
  })
};

const handleSecondQuestion = () => {

  userInfo.price = document.getElementById("sliderInput").value;

  const q3 = `  <div class="container " id='q3'>
<div class="row" >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
        <div id='sliderCard' class="card-content white-text  ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >my_location</i>
            Question 3 :
          </span>
          <p>WHERE ARE YOU LOOKING TO MOVE?</p>
        </div>
        <div class="container">
            <div class="row">
                <form class="col s12 center-align">
                  <div class="row">
                    <div class="input-field col s12 center-align ">
                      <i class="material-icons prefix green-text">location_on</i>
                      <input id="location" type="text" class="validate white-text">
                      <label  class='green-text' for="location">Example: Toronto</label>
                    </div>
                  </div>
                  <a href="#" class='btn' onclick="handleThirdQuestion()">Submit 
                      <i class='material-icons right'>send</i>
                  </a>
                </form>
              </div>
        </div>
    </div>
  </div>
</div>
</div>`
  document.getElementById("mainContainer").innerHTML = q3;


};

const handleThirdQuestion = () => {
  userInfo.location = document.getElementById("location").value;

  const q4 = `<div class="container " id='q4'>
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
        <div class="card-content white-text ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >show_chart</i>
            Question 4 :
          </span>
          <p>I CARE THE MOST ABOUT:</p>
        </div>
        <div class="card-action center-align">
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="transportaion">1. convenience of transportation</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="price">2. The cheapest price</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFourthQuestion(this)" data-value="location">3. Location</a>
        </div>
      </div>
    </div>
  </div>
</div>`

  document.getElementById("mainContainer").innerHTML = q4;
};

const handleFourthQuestion = (e) => {

  userInfo.mostImportant = e.dataset.value;

  saveToLocalStorage();
  
  const q4 = `<div id="map"></div>`
  document.getElementById("mainContainer").innerHTML = q4;

  displayresults()

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

  // userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // if (!userInfo) {

  //   // const users = {};

  //   // users.userInfo.id = userInfo;

  //   localStorage.setItem('users', JSON.stringify('userInfo'));
  // } else {

  //   const users = JSON.parse(localStorage.getItem('users'));

  //   users.userInfo.id = userInfo;

  //   localStorage.setItem('users', JSON.stringify('users'));
  // }

  localStorage.setItem('userInfo', JSON.stringify(userInfo));

}

const displayFirstQuestion = () => {

  var q1 = `<div class="container" id='q1'>
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card red darken-4 z-depth-4">
        <div class="card-content white-text ">
          <span class="card-title ">
            <i class='material-icons left green-text ' >info_outline</i>
            Question 1 :
          </span>
          <p>HOW MANY BEDROOMS DO YOU WANT?</p>
        </div>
        <div class="card-action center-align">
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="studio">Studio</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="oneBed">1 Bed</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="twoBed">2 Beds</a>
          <a href="#" class='btn waves-effect waves-light z-depth-2' onclick="handleFirstQuestion(this)" data-value="threePlus"">3+ Beds</a>
        </div>
      </div>
    </div>
  </div>
</div>`

  document.getElementById("mainContainer").innerHTML = q1;


};



const getListing = async function(){
  // url = `https://cors-anywhere.herokuapp.com/https://www.zillow.com/search/GetSearchPageState.htm?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22usersSearchTerm%22%3A%22toronto%22%2C%22mapBounds%22%3A%7B%22west%22%3A-79.77669883105466%2C%22east%22%3A-78.97607016894528%2C%22south%22%3A43.69071018618643%2C%22north%22%3A43.725455049837734%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A792680%2C%22regionType%22%3A6%7D%5D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22isForSaleByAgent%22%3A%7B%22value%22%3Afalse%7D%2C%22isForSaleByOwner%22%3A%7B%22value%22%3Afalse%7D%2C%22isNewConstruction%22%3A%7B%22value%22%3Afalse%7D%2C%22isForSaleForeclosure%22%3A%7B%22value%22%3Afalse%7D%2C%22isComingSoon%22%3A%7B%22value%22%3Afalse%7D%2C%22isAuction%22%3A%7B%22value%22%3Afalse%7D%2C%22isPreMarketForeclosure%22%3A%7B%22value%22%3Afalse%7D%2C%22isPreMarketPreForeclosure%22%3A%7B%22value%22%3Afalse%7D%2C%22isMakeMeMove%22%3A%7B%22value%22%3Afalse%7D%2C%22isForRent%22%3A%7B%22value%22%3Atrue%7D%7D%2C%22isListVisible%22%3Atrue%7D&includeMap=true&includeList=false`
  
  let url; 
  let data;
  url = './js/data.json'
  data = await fetch(url)
  data = await data.json();
  localStorage.houseListing = JSON.stringify(data.searchResults.mapResults)
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