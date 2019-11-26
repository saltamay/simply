const StorageCtrl = (() => {

  const addeStateToStorage = (state) => {
    let newState;
    // check if any items in local storage
    if (localStorage.getItem('state') === null) {
      newState = {
        ...state
      }
      localStorage.setItem('state', JSON.stringify(newState));
    } else {
      // newState = JSON.parse(localStorage.getItem('state'));
      newState = state;
      localStorage.setItem('state', JSON.stringify(newState));
    }
  };

  const getStateFromStorage = () => {
    let state;

    if (localStorage.getItem('state') === null) {
      state = {}
    } else {
      state = JSON.parse(localStorage.getItem('state'));
    }

    return state;
  }

  return {
    addeStateToStorage,
    getStateFromStorage
  }

})();

const StateCtrl = (() => {

  let state = {
    userInfo: {
      numOfBeds: '',
      price: 0,
      mostImportant: '',
      bestMatch: [],
      like: [],
    },
    listings: listings.searchResults.mapResults,
    // map: null,
    // marker: null,
    // markerCluster: null,
    // infoWindow: null,
    searchResults: [],
    match: {},
    index: 0
  }

  // Public functions
  return {
    logState: () => console.log(state),
    getState: () => state,
    setState: (newState) => state = { ...newState },
    getUserInfo: () => state.userInfo,
    getListings: () => state.listings,
    addUserInfo: (userInfo) => state.userInfo = userInfo,
    setSearchResults: (searchResults) => {
      state.searchResults = searchResults;
      return searchResults;
    },
    getSearchResults: () => state.searchResults,
    setMatch: (match) => state.match = match,
    getMatch: () => state.match,
    getIndex: () => state.index,
    setIndex: (index) => state.index = index,
    getMap: () => state.map,
    getUserData: () => {
      let userData = {
        userInfo,
        searchResults,
        match
      }
      return userData;
    }
  }
})();

const UICtrl = (() => {

  const displayFirstQuestion = () => {

    var q1 = `

  <header >
  <div class="nav" >
      
          <a id="logo-container" href="#">
              <img class='hide-on-small-only' src="./img/download.png" alt="" srcset="" style="width: 135px;">
          </a>
     
  </div>
</header>
  
  <div class="container" id='q1' style="margin-top:100px" >
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card card-box z-depth-4">
        <div class="card-box-imitation">
          <div class="card-box-imitation-bar bar-1"><span></span></div>
          <div>
            <svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m61 41h-1v-3a6.967 6.967 0 0 0 -1-3.59v-23.41a4 4 0 0 0 -8 0v4h-38v-4a4 4 0 0 0 -8 0v23.41a6.967 6.967 0 0 0 -1 3.59v3h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1v5a1 1 0 0 0 1 1h3a1.014 1.014 0 0 0 .95-.68l1.77-5.32h42.56l1.77 5.32a1.014 1.014 0 0 0 .95.68h3a1 1 0 0 0 1-1v-5h1a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1zm-8-30a2 2 0 0 1 4 0v4h-4zm-46 0a2 2 0 0 1 4 0v4h-4zm0 6h50v15.26a6.987 6.987 0 0 0 -4-1.26v-5a3.009 3.009 0 0 0 -3-3h-14a3.009 3.009 0 0 0 -3 3v5h-2v-5a3.009 3.009 0 0 0 -3-3h-14a3.009 3.009 0 0 0 -3 3v5a6.987 6.987 0 0 0 -4 1.26zm44 9v5h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-22 0v5h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-23 12a5 5 0 0 1 5-5h42a5 5 0 0 1 5 5v3h-52zm1.28 17h-1.28v-4h2.61zm50.72 0h-1.28l-1.33-4h2.61zm2-6h-56v-6h56z"/></svg>
          </div>
          <div>
            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 481"><path d="M256.7,301.9h-27.5c-10,0-18.1-8.1-18.1-18.1s8.1-18.1,18.1-18.1h48.4c6.6,0,12-5.4,12-12c0-6.6-5.4-12-12-12h-22.7V225c0-6.6-5.4-12-12-12s-12,5.4-12,12v16.7h-1.7c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.1,42.1,42.1h27.5c10,0,18.1,8.1,18.1,18.1s-8.1,18.1-18.1,18.1h-49.3c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12H231v17.1c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12v-17.1h2c0.1,0,0.2,0,0.3,0c23-0.3,41.5-19.1,41.5-42.1C298.8,320.8,279.9,301.9,256.7,301.9z" fill="#ebebeb"/><path d="M423.3,274.7c-12.6-29-30-57.1-52-83.4c-26.6-32-53.1-53.4-66.6-63.3l51-94.6c2.5-4.7,1.7-10.5-2.2-14.2C340.3,6.3,326.3,0,310.7,0c-14.3,0-27.4,5.4-38.8,10.2c-9,3.7-17.5,7.3-24.4,7.3c-2.1,0-3.9-0.3-5.7-1C218,7.8,199.7,2.4,182,2.4c-22.4,0-41.5,9-60.2,28.2c-3.9,4-4.5,10.3-1.4,15l55,83.1c-13.6,10.1-39.6,31.3-65.7,62.6c-21.9,26.3-39.4,54.4-52,83.4c-15.8,36.5-23.8,74.6-23.8,113.2c0,51.3,41.8,93.1,93.1,93.1h227c51.3,0,93.1-41.8,93.1-93.1C447.1,349.3,439.1,311.2,423.3,274.7z M146,40.6c11.6-10,22.7-14.4,36-14.4c14.2,0,30.2,4.8,51.5,12.7c4.4,1.6,9.1,2.4,13.9,2.4c11.7,0,22.9-4.6,33.6-9.1c10.3-4.3,20.1-8.4,29.6-8.4c4.6,0,11.1,0.8,19.3,6.6l-48,89.2h-83.6L146,40.6z M354,457H127c-38.1,0-69.1-31-69.1-69.1c0-64.1,23.5-124.9,69.7-180.7c29.2-35.3,58.9-57.2,67.9-63.6h89.8c9.1,6.3,38.7,28.3,67.9,63.6c46.3,55.8,69.7,116.5,69.7,180.7C423.1,426,392.1,457,354,457z" fill="#ebebeb"/></svg>
          </div>
          <div>
            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.94 49.94"><path d="M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z" fill="#ebebeb"/></svg>
          </div>
        </div>
        <div class="card-content">
          <span class="card-title ">
            HOW MANY BEDROOMS DO YOU WANT?
          </span>
        </div>
        <div class="card-action center-align">
          <a class='btn waves-effect waves-light z-depth-2' data-value="1">1 Bed</a>
          <a class='btn waves-effect waves-light z-depth-2' data-value="2">2 Beds</a>
          <a class='btn waves-effect waves-light z-depth-2' data-value="3">3+ Beds</a>
        </div>
      </div>
    </div>
  </div>
</div>

<footer>
      <div class="container center-align">
      &copy; 2019 Simply 
      </div>
</footer>
`
    document.getElementById("mainContainer").innerHTML = q1;

  };

  const displaySecondQuestion = (e) => {

    document.getElementById("mainContainer").innerHTML = `  

    <header >
  <div class="nav" >
      
          <a id="logo-container" href="#">
              <img class='hide-on-small-only' src="./img/download.png" alt="" srcset="" style="width: 135px;">
          </a>
     
  </div>
</header>
  
    <div class="container" id='q2' style="margin-top:100px" >
      <div class="row" >
        <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
          <div class="card card-box z-depth-4">
            <div class="card-box-imitation">
              <div class="card-box-imitation-bar bar-2"><span></span></div>
                <div>
                  <svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m61 41h-1v-3a6.967 6.967 0 0 0 -1-3.59v-23.41a4 4 0 0 0 -8 0v4h-38v-4a4 4 0 0 0 -8 0v23.41a6.967 6.967 0 0 0 -1 3.59v3h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1v5a1 1 0 0 0 1 1h3a1.014 1.014 0 0 0 .95-.68l1.77-5.32h42.56l1.77 5.32a1.014 1.014 0 0 0 .95.68h3a1 1 0 0 0 1-1v-5h1a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1zm-8-30a2 2 0 0 1 4 0v4h-4zm-46 0a2 2 0 0 1 4 0v4h-4zm0 6h50v15.26a6.987 6.987 0 0 0 -4-1.26v-5a3.009 3.009 0 0 0 -3-3h-14a3.009 3.009 0 0 0 -3 3v5h-2v-5a3.009 3.009 0 0 0 -3-3h-14a3.009 3.009 0 0 0 -3 3v5a6.987 6.987 0 0 0 -4 1.26zm44 9v5h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-22 0v5h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-23 12a5 5 0 0 1 5-5h42a5 5 0 0 1 5 5v3h-52zm1.28 17h-1.28v-4h2.61zm50.72 0h-1.28l-1.33-4h2.61zm2-6h-56v-6h56z" fill="#26a69a"/></svg><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7C514.5,101.703,514.499,85.494,504.502,75.496z" fill="#26a69a"/></svg>
                </div>
                <div>
                  <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 481"><path d="M256.7,301.9h-27.5c-10,0-18.1-8.1-18.1-18.1s8.1-18.1,18.1-18.1h48.4c6.6,0,12-5.4,12-12c0-6.6-5.4-12-12-12h-22.7V225c0-6.6-5.4-12-12-12s-12,5.4-12,12v16.7h-1.7c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.1,42.1,42.1h27.5c10,0,18.1,8.1,18.1,18.1s-8.1,18.1-18.1,18.1h-49.3c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12H231v17.1c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12v-17.1h2c0.1,0,0.2,0,0.3,0c23-0.3,41.5-19.1,41.5-42.1C298.8,320.8,279.9,301.9,256.7,301.9z" fill="#000000"/><path d="M423.3,274.7c-12.6-29-30-57.1-52-83.4c-26.6-32-53.1-53.4-66.6-63.3l51-94.6c2.5-4.7,1.7-10.5-2.2-14.2C340.3,6.3,326.3,0,310.7,0c-14.3,0-27.4,5.4-38.8,10.2c-9,3.7-17.5,7.3-24.4,7.3c-2.1,0-3.9-0.3-5.7-1C218,7.8,199.7,2.4,182,2.4c-22.4,0-41.5,9-60.2,28.2c-3.9,4-4.5,10.3-1.4,15l55,83.1c-13.6,10.1-39.6,31.3-65.7,62.6c-21.9,26.3-39.4,54.4-52,83.4c-15.8,36.5-23.8,74.6-23.8,113.2c0,51.3,41.8,93.1,93.1,93.1h227c51.3,0,93.1-41.8,93.1-93.1C447.1,349.3,439.1,311.2,423.3,274.7z M146,40.6c11.6-10,22.7-14.4,36-14.4c14.2,0,30.2,4.8,51.5,12.7c4.4,1.6,9.1,2.4,13.9,2.4c11.7,0,22.9-4.6,33.6-9.1c10.3-4.3,20.1-8.4,29.6-8.4c4.6,0,11.1,0.8,19.3,6.6l-48,89.2h-83.6L146,40.6z M354,457H127c-38.1,0-69.1-31-69.1-69.1c0-64.1,23.5-124.9,69.7-180.7c29.2-35.3,58.9-57.2,67.9-63.6h89.8c9.1,6.3,38.7,28.3,67.9,63.6c46.3,55.8,69.7,116.5,69.7,180.7C423.1,426,392.1,457,354,457z" fill="#000000"/></svg>
                </div>
                <div>
                  <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.94 49.94"><path d="M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z" fill="#ebebeb"/></svg>
                </div>
              </div>
              <div id='sliderCard' class="card-content">
                <span class="card-title">
                 WHAT ARE YOU LOOKING TO PAY?
                </span>
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
              <a style="margin-bottom:30px" class='btn price-submit'>Submit</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div class="container center-align">
      &copy; 2019 Simply 
      </div>
    </footer>
    `;


  };

  const displayThirdQuestion = () => {

    const q4 = `
  
  <header >
  <div class="nav" >
      
          <a id="logo-container" href="#">
              <img class='hide-on-small-only' src="./img/download.png" alt="" srcset="" style="width: 135px;">
          </a>
     
  </div>
</header>
  
  
  
  <div class="container " id='q4' style="margin-top:100px" >
<div class="row " >
    <div class="col s12 m10 offset-m1 l10 offset-l1 xl12 ">
      <div class="card card-box z-depth-4">
        <div class="card-box-imitation">
          <div class="card-box-imitation-bar bar-3"><span></span></div>
          <div>
            <svg width="36" height="36" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m61 41h-1v-3a6.967 6.967 0 0 0 -1-3.59v-23.41a4 4 0 0 0 -8 0v4h-38v-4a4 4 0 0 0 -8 0v23.41a6.967 6.967 0 0 0 -1 3.59v3h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1v5a1 1 0 0 0 1 1h3a1.014 1.014 0 0 0 .95-.68l1.77-5.32h42.56l1.77 5.32a1.014 1.014 0 0 0 .95.68h3a1 1 0 0 0 1-1v-5h1a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1zm-8-30a2 2 0 0 1 4 0v4h-4zm-46 0a2 2 0 0 1 4 0v4h-4zm0 6h50v15.26a6.987 6.987 0 0 0 -4-1.26v-5a3.009 3.009 0 0 0 -3-3h-14a3.009 3.009 0 0 0 -3 3v5h-2v-5a3.009 3.009 0 0 0 -3-3h-14a3.009 3.009 0 0 0 -3 3v5a6.987 6.987 0 0 0 -4 1.26zm44 9v5h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-22 0v5h-16v-5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-23 12a5 5 0 0 1 5-5h42a5 5 0 0 1 5 5v3h-52zm1.28 17h-1.28v-4h2.61zm50.72 0h-1.28l-1.33-4h2.61zm2-6h-56v-6h56z" fill="#26a69a"/></svg><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7C514.5,101.703,514.499,85.494,504.502,75.496z" fill="#26a69a"/></svg>
          </div>
          <div>
            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481 481"><path d="M256.7,301.9h-27.5c-10,0-18.1-8.1-18.1-18.1s8.1-18.1,18.1-18.1h48.4c6.6,0,12-5.4,12-12c0-6.6-5.4-12-12-12h-22.7V225c0-6.6-5.4-12-12-12s-12,5.4-12,12v16.7h-1.7c-23.2,0-42.1,18.9-42.1,42.1s18.9,42.1,42.1,42.1h27.5c10,0,18.1,8.1,18.1,18.1s-8.1,18.1-18.1,18.1h-49.3c-6.6,0-12,5.4-12,12c0,6.6,5.4,12,12,12H231v17.1c0,6.6,5.4,12,12,12c6.6,0,12-5.4,12-12v-17.1h2c0.1,0,0.2,0,0.3,0c23-0.3,41.5-19.1,41.5-42.1C298.8,320.8,279.9,301.9,256.7,301.9z" fill="#26a69a"/><path d="M423.3,274.7c-12.6-29-30-57.1-52-83.4c-26.6-32-53.1-53.4-66.6-63.3l51-94.6c2.5-4.7,1.7-10.5-2.2-14.2C340.3,6.3,326.3,0,310.7,0c-14.3,0-27.4,5.4-38.8,10.2c-9,3.7-17.5,7.3-24.4,7.3c-2.1,0-3.9-0.3-5.7-1C218,7.8,199.7,2.4,182,2.4c-22.4,0-41.5,9-60.2,28.2c-3.9,4-4.5,10.3-1.4,15l55,83.1c-13.6,10.1-39.6,31.3-65.7,62.6c-21.9,26.3-39.4,54.4-52,83.4c-15.8,36.5-23.8,74.6-23.8,113.2c0,51.3,41.8,93.1,93.1,93.1h227c51.3,0,93.1-41.8,93.1-93.1C447.1,349.3,439.1,311.2,423.3,274.7z M146,40.6c11.6-10,22.7-14.4,36-14.4c14.2,0,30.2,4.8,51.5,12.7c4.4,1.6,9.1,2.4,13.9,2.4c11.7,0,22.9-4.6,33.6-9.1c10.3-4.3,20.1-8.4,29.6-8.4c4.6,0,11.1,0.8,19.3,6.6l-48,89.2h-83.6L146,40.6z M354,457H127c-38.1,0-69.1-31-69.1-69.1c0-64.1,23.5-124.9,69.7-180.7c29.2-35.3,58.9-57.2,67.9-63.6h89.8c9.1,6.3,38.7,28.3,67.9,63.6c46.3,55.8,69.7,116.5,69.7,180.7C423.1,426,392.1,457,354,457z" fill="#26a69a"/></svg><svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7C514.5,101.703,514.499,85.494,504.502,75.496z" fill="#26a69a"/></svg>
          </div>
          <div>
            <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.94 49.94"><path d="M48.856,22.731c0.983-0.958,1.33-2.364,0.906-3.671c-0.425-1.307-1.532-2.24-2.892-2.438l-12.092-1.757c-0.515-0.075-0.96-0.398-1.19-0.865L28.182,3.043c-0.607-1.231-1.839-1.996-3.212-1.996c-1.372,0-2.604,0.765-3.211,1.996L16.352,14c-0.23,0.467-0.676,0.79-1.191,0.865L3.069,16.623C1.71,16.82,0.603,17.753,0.178,19.06c-0.424,1.307-0.077,2.713,0.906,3.671l8.749,8.528c0.373,0.364,0.544,0.888,0.456,1.4L8.224,44.702c-0.232,1.353,0.313,2.694,1.424,3.502c1.11,0.809,2.555,0.914,3.772,0.273l10.814-5.686c0.461-0.242,1.011-0.242,1.472,0l10.815,5.686c0.528,0.278,1.1,0.415,1.669,0.415c0.739,0,1.475-0.231,2.103-0.688c1.111-0.808,1.656-2.149,1.424-3.502L39.651,32.66c-0.088-0.513,0.083-1.036,0.456-1.4L48.856,22.731z M37.681,32.998l2.065,12.042c0.104,0.606-0.131,1.185-0.629,1.547c-0.499,0.361-1.12,0.405-1.665,0.121l-10.815-5.687c-0.521-0.273-1.095-0.411-1.667-0.411s-1.145,0.138-1.667,0.412l-10.813,5.686c-0.547,0.284-1.168,0.24-1.666-0.121c-0.498-0.362-0.732-0.94-0.629-1.547l2.065-12.042c0.199-1.162-0.186-2.348-1.03-3.17L2.48,21.299c-0.441-0.43-0.591-1.036-0.4-1.621c0.19-0.586,0.667-0.988,1.276-1.077l12.091-1.757c1.167-0.169,2.176-0.901,2.697-1.959l5.407-10.957c0.272-0.552,0.803-0.881,1.418-0.881c0.616,0,1.146,0.329,1.419,0.881l5.407,10.957c0.521,1.058,1.529,1.79,2.696,1.959l12.092,1.757c0.609,0.089,1.086,0.491,1.276,1.077c0.19,0.585,0.041,1.191-0.4,1.621l-8.749,8.528C37.866,30.65,37.481,31.835,37.681,32.998z" fill="#000000"/></svg>
          </div>
        </div>
        <div class="card-content">
          <span class="card-title ">
            I CARE THE MOST ABOUT:
          </span>
        </div>
        <div class="card-action center-align">
          <a class='btn waves-effect waves-light z-depth-2' data-value="transportation">Easy Transportation</a>
          <a class='btn waves-effect waves-light z-depth-2' data-value="price">Cheapest Price</a>
          <a class='btn waves-effect waves-light z-depth-2 pulse' data-value="location">Location</a>
        </div>
      </div>
    </div>
  </div>
</div>

<footer>
      <div class="container center-align">
      &copy; 2019 Simply 
      </div>
</footer>
`

    document.getElementById("mainContainer").innerHTML = q4;

  };

  const displayResults = () => {

    const searchResults = StateCtrl.getSearchResults();
    let index = StateCtrl.getIndex();
    const userInfo = StateCtrl.getUserInfo();

    let match = searchResults[index];
    index++;

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
        app_id: 'GQWgle2no4uT3a218ykS',
        app_code: 'P_GfANgDX0U_yEWB-pbClQ'
      },
    }).then(data => {
      travelTime = data.response.route[0].summary.travelTime;
      match.travelTime = travelTime;
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
      </div>
      <div class="card-buttons center-align">
        <a class="btn-floating btn-large waves-effect waves-light pink lighten-2"><i id="dislike" class="material-icons">thumb_down</i></a>
        <a class="btn-floating btn-large waves-effect waves-light red lighten-1 favorite"><i id="bestMatch" class="material-icons">favorite</i></a>
        <a class="btn-floating btn-large waves-effect waves-light blue lighten-2"><i id="like" class="material-icons">thumb_up</i></a>
      </div>
      <div id="bestMatchedListings"></div>
      <div id="likedListings"></div>
      </div>
      <div id="map" class="col s12 m9"></div>
    </div> 
    `

      document.getElementById("mainContainer").innerHTML = results;
      initMap();
      displayBestMatchedListings();
      displayLikedListings();
      // Add event listeners
      document.getElementById('dislike').addEventListener('click', (e) => { AppCtrl.handleButtonClick(e); });
      document.getElementById('bestMatch').addEventListener('click', (e) => { AppCtrl.handleButtonClick(e); });
      document.getElementById('like').addEventListener('click', (e) => { AppCtrl.handleButtonClick(e); });

    })

    // Get important places around
    const apiKey = 'AIzaSyDPK3GESVBe72AhcFb263OJt7X8S7QPQl4';
    const queryURL = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';
    const endPoint = queryURL + waypoint1 + '&radius=1500&type=library&key=' + apiKey;
    console.log(endPoint);
    $.ajax({
      url: endPoint,
      type: 'GET',
    }).then(res => console.log(res));

    StateCtrl.setMatch(match);
    StateCtrl.setIndex(index);

    StorageCtrl.addeStateToStorage(StateCtrl.getState());
    StateCtrl.logState();
  }

  const initMap = () => {

    const match = StateCtrl.getMatch();
    let map = StateCtrl.getMap();

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
      position: { lat, lng },
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

  const displayBestMatchedListings = () => {

    // Check if there is any loved listings
    if (StateCtrl.getUserInfo().bestMatch.length !== 0) {

      const ul = document.createElement('ul');
      ul.classList.add('collection', 'with-header');
      // Header for the best match collection
      const headerItem = document.createElement('li');
      headerItem.classList.add('collection-header');
      headerItem.innerText = 'Love it';
      // Append header
      ul.appendChild(headerItem);

      StateCtrl.getUserInfo().bestMatch.forEach(bestMatch => {
        // HTML code for best match
        const listItem = document.createElement('li');
        listItem.classList.add('collection-item', 'avatar');

        listItem.innerHTML =
          `
          <img src="${bestMatch.imgSrc}" alt="Listing Picture" class="circle">
          <p>${bestMatch.hdpData.homeInfo.streetAddress}<br>
          $${bestMatch.price.toString().charAt(0) + ',' + bestMatch.price.toString().slice(1)}<br>
          <i class="material-icons">hotel</i>
          <span class="listing-bedrooms">${bestMatch.beds}</span>
          <i class="material-icons">hot_tub</i>
          <span class="listing-bathrooms">${bestMatch.baths}</span>
          <i class="material-icons">directions_walk</i>
          <span class="listing-convenience">WalkScore: ${neighbourhoods['M5R'].walkScore}</span>
          </p>
          `
        ul.appendChild(listItem);
      })
      console.log(ul);
      document.getElementById('bestMatchedListings').appendChild(ul);
    }
  }

  const displayLikedListings = () => {
    // Check if there is any loved listings
    if (StateCtrl.getUserInfo().like.length !== 0) {

      const ul = document.createElement('ul');
      ul.classList.add('collection', 'with-header');
      // Header for the best match collection
      const headerItem = document.createElement('li');
      headerItem.classList.add('collection-header');
      headerItem.innerText = 'Maybe';
      // Append header
      ul.appendChild(headerItem);

      StateCtrl.getUserInfo().like.forEach(like => {
        // HTML code for best match
        const listItem = document.createElement('li');
        listItem.classList.add('collection-item', 'avatar');

        listItem.innerHTML =
          `
          <img src="${like.imgSrc}" alt="Listing Picture" class="circle">
          <p>${like.hdpData.homeInfo.streetAddress}<br>
          $${like.price.toString().charAt(0) + ',' + like.price.toString().slice(1)}<br>
          <i class="material-icons">hotel</i>
          <span class="listing-bedrooms">${like.beds}</span>
          <i class="material-icons">hot_tub</i>
          <span class="listing-bathrooms">${like.baths}</span>
          <i class="material-icons">directions_walk</i>
          <span class="listing-convenience">WalkScore: ${neighbourhoods['M5R'].walkScore}</span>
          </p>
          `
        ul.appendChild(listItem);
      })
      console.log(ul);
      document.getElementById('likedListings').appendChild(ul);
    }
  }

  return {
    displayFirstQuestion,
    displaySecondQuestion,
    displayThirdQuestion,
    displayResults,
    initMap,
    displayBestMatchedListings
  }
})();

const AppCtrl = ((UICtrl, StateCtrl, StorageCtrl) => {

  function init() {

    // localStorage.clear(); //clears the local storgage

    // getListing();
    const newState = StorageCtrl.getStateFromStorage();
    console.log(newState);
    if (newState.hasOwnProperty('userInfo')) {

      StateCtrl.setState(newState);
      UICtrl.displayResults();

    } else {

      document.querySelector('#getStarted').addEventListener('click', (e) => {

        e.preventDefault();

        UICtrl.displayFirstQuestion();

        // Add event listeners to UI elements
        document.querySelector('[data-value ~= "1"]').addEventListener('click', (e) => {
          handleFirstQuestion(e);
        });
        document.querySelector('[data-value ~= "2"]').addEventListener('click', (e) => {
          handleFirstQuestion(e);
        });
        document.querySelector('[data-value ~= "3"]').addEventListener('click', (e) => {
          handleFirstQuestion(e);
        });

      });
    }
  }

  const handleFirstQuestion = (e) => {

    StateCtrl.getUserInfo().numOfBeds = e.target.dataset.value;

    UICtrl.displaySecondQuestion();

    document.getElementById('sliderInput').addEventListener('input', function (e) {
      document.getElementById('rentValue').innerText = e.target.value
    });

    document.querySelector('.price-submit').addEventListener('click', handleSecondQuestion);

  };

  const handleSecondQuestion = () => {

    StateCtrl.getUserInfo().price = document.getElementById("sliderInput").value;

    UICtrl.displayThirdQuestion();

    // Add event listeners to ui elements
    document.querySelector('[data-value ~= "transportation"]').addEventListener('click', (e) => {
      handleThirdQuestion(e);
    });
    document.querySelector('[data-value ~= "price"]').addEventListener('click', (e) => {
      handleThirdQuestion(e);
    });
    document.querySelector('[data-value ~= "location"]').addEventListener('click', (e) => {
      handleThirdQuestion(e);
    });
  };

  const handleThirdQuestion = (e) => {

    StateCtrl.getUserInfo().mostImportant = e.target.dataset.value;

    // saveToLocalStorage();

    const listings = StateCtrl.getListings();

    let searchResults = StateCtrl.setSearchResults(narrowByUnitNum(listings));

    switch (StateCtrl.getUserInfo().mostImportant) {
      case 'price':
        searchResults = narrowByPrice(searchResults).sort((a, b) => {
          return a.price - b.price;
        })
        StateCtrl.setSearchResults(searchResults);
        UICtrl.displayResults();
        break;
      case 'transportation':
        searchResults = narrowByWalkingDistance(searchResults).filter(listing => {

          if (listing.price <= parseInt(StateCtrl.getUserInfo().price)) {
            return listing;
          }
        })
        StateCtrl.setSearchResults(searchResults);
        UICtrl.displayResults();
        break;
      case 'location':
        searchResults = narrowByDistanceToUofT(searchResults);
        StateCtrl.setSearchResults(searchResults);
        setTimeout(() => {
          UICtrl.displayResults();
        }, 1000);
        break;
    }

  }

  const narrowByUnitNum = (listings) => {
    // let listings = JSON.parse(localStorage.getItem('houseListing'));

    const newListings = [];

    listings.forEach(listing => {

      if (listing.hdpData) {
        if (listing.beds.toString() === StateCtrl.getUserInfo().numOfBeds) {

          let price = listing.price.slice(2, 3) + listing.price.slice(4, 7);
          price = parseInt(price);
          listing.price = price;

          newListings.push(listing);
        }
      }
    });

    return newListings;
  }

  const narrowByPrice = (searchResults) => {

    const newSearchResults = [];

    searchResults.forEach(searchResult => {

      // let price = listing.price.slice(2, 3) + listing.price.slice(4, 7);
      // price = parseInt(price);

      if (searchResult.price <= parseInt(StateCtrl.getUserInfo().price)) {
        // listing.price = price;
        newSearchResults.push(searchResult);
      }
    });

    return newSearchResults;
  }

  const narrowByWalkingDistance = (searchResults) => {

    const newSearchResults = [];
    const r = 6371e3; // gives d in metres
    for (unit in searchResults) {
      var φ1 = (searchResults[unit].latLong.latitude) * Math.PI / 180;
      for (station in subwayData) {
        var φ2 = (subwayData[station].latLong.latitude) * Math.PI / 180;
        var Δλ = ((subwayData[station].latLong.longitude - searchResults[unit].latLong.longitude)) * Math.PI / 180;
        var d = Math.acos(Math.sin(φ1) * Math.sin(φ2) + Math.cos(φ1) * Math.cos(φ2) * Math.cos(Δλ)) * r;

        if (d <= 750) {
          // console.log('distance from unit at', listings[unit].latLong, 'to', subwayData[station].name, 'station is', Math.floor(d), 'meters')
          searchResults[unit].subway = subwayData[station];
          searchResults[unit].distance = Math.floor(d);
          newSearchResults.push({
            ...searchResults[unit]
          });
        }
      }
    }
    return newSearchResults;
  }

  const narrowByDistanceToUofT = (searchResults) => {

    const newSearchResults = [];

    const waypoint0 = '43.66219,-79.3942';

    for (let i = 0; i < searchResults.length; i++) {

      const waypoint1 = searchResults[i].latLong.latitude + ',' + searchResults[i].latLong.longitude;

      $.ajax({
        url: 'https://route.api.here.com/routing/7.2/calculateroute.json',
        type: 'GET',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        data: {
          waypoint0: waypoint0,
          waypoint1: waypoint1,
          mode: 'fastest;publicTransport',
          app_id: 'GQWgle2no4uT3a218ykS ',
          app_code: 'P_GfANgDX0U_yEWB-pbClQ'
        },
      }).then(data => {
        const travelTime = data.response.route[0].summary.travelTime;
        if (Math.floor(travelTime / 60) <= 30) {
          searchResults[i].travelTime = travelTime
          newSearchResults.push({
            ...searchResults[i]
          });
          StateCtrl.setSearchResults(newSearchResults);
        }
      })
    }

  }

  const handleButtonClick = (e) => {

    switch (e.target.id) {
      case 'dislike':
        UICtrl.displayResults();
        break;
      case 'bestMatch':
        StateCtrl.getUserInfo().bestMatch.push(StateCtrl.getMatch());
        UICtrl.displayResults();
        break;
      case 'like':
        StateCtrl.getUserInfo().like.push(StateCtrl.getMatch());
        UICtrl.displayResults();
        break;
    }
  }

  return {
    init,
    handleFirstQuestion,
    handleSecondQuestion,
    handleThirdQuestion,
    narrowByUnitNum,
    narrowByPrice,
    narrowByWalkingDistance,
    narrowByDistanceToUofT,
    handleButtonClick
  }
})(UICtrl, StateCtrl, StorageCtrl);


AppCtrl.init();