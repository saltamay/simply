// document.onload = main.init();
// import pageTemplates from "./htmlTemplates.js";

const main = function(){

    
    

//     // this is the mode   ++ it only takes care of data related stuff ++ if it needs any visual, it will as x
//     var model = {
//         data:{
//             inputData:{
//                 bedRooms: '',
//                 rentFee: '',
//                 movingToLocation: '',
//                 caresMostAbt: '',
//             },
//         },
//         init:async function(){
//             await this.forInit.initTheData(); //first get the needed data
//         },
//         forInit:{
//             initTheData: async function(){
//                 if (localStorage.houseListing){ //if already have data, then move on
//                     return
//                 } else { // else, get the data and prepare it
//                     await model.fetchData('init')
//                 }
//             }
//         },
//         fetchData: async function(x){
//             let d = new Date(); // this will be the time stamp of how fresh the data is:
//             let day;
//             let url; 
//             let data;
//             if (x === 'init'){
//                 url = `https://cors-anywhere.herokuapp.com/https://www.zillow.com/search/GetSearchPageState.htm?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22usersSearchTerm%22%3A%22toronto%22%2C%22mapBounds%22%3A%7B%22west%22%3A-79.77669883105466%2C%22east%22%3A-78.97607016894528%2C%22south%22%3A43.69071018618643%2C%22north%22%3A43.725455049837734%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A792680%2C%22regionType%22%3A6%7D%5D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22isForSaleByAgent%22%3A%7B%22value%22%3Afalse%7D%2C%22isForSaleByOwner%22%3A%7B%22value%22%3Afalse%7D%2C%22isNewConstruction%22%3A%7B%22value%22%3Afalse%7D%2C%22isForSaleForeclosure%22%3A%7B%22value%22%3Afalse%7D%2C%22isComingSoon%22%3A%7B%22value%22%3Afalse%7D%2C%22isAuction%22%3A%7B%22value%22%3Afalse%7D%2C%22isPreMarketForeclosure%22%3A%7B%22value%22%3Afalse%7D%2C%22isPreMarketPreForeclosure%22%3A%7B%22value%22%3Afalse%7D%2C%22isMakeMeMove%22%3A%7B%22value%22%3Afalse%7D%2C%22isForRent%22%3A%7B%22value%22%3Atrue%7D%7D%2C%22isListVisible%22%3Atrue%7D&includeMap=true&includeList=false`
//                 data = await fetch(url)
//                 data = await data.json();
//                 day = d.getDate()+'/'+d.getMonth()+'/'+d.getFullYear()
//                 localStorage.houseListing = JSON.stringify({ date: day, data: data})
//             }
//         },
//     }



//     // this is the control   ++  its called x
//     var x = {
//         init: async function(){
//             model.init();
//             view.init();
//         }
//     }


//     // this is the view ++ it only takes care of the visual stuff ++ if it needs data, it will ask x
//     var view = {
//         init:async function(){
//             this.body = document.getElementById('mainContainer');
//             await this.loadPage(0)
//         },
//         loadPage:async function(x){
//             // delete previous page's scripts:
//             let childList = document.getElementsByTagName('head')[0].children
//             for (let i in childList) {  
//                 if ( 
//                     (childList[i].tagName !== undefined ) 
//                     && 
//                     (childList[i].tagName.toLowerCase() === 'script' )
//                     ) {
//                         childList[i].remove()
//                     }
//                 }


//             }
//     }





//  // this is the init 
//     var init = function(){
//         x.init();
//     }

//     //!!!!!!!!!!!!!!!!!!!!! this section creates global variables
//     return {
//         init:init,
//     }

// })()
    const userInfo = {};

    const saveToLocalStorage = () => {

        if (localStoreage.length === 0) {
            
            const users = {};
            
            users.userInfo.id = userInfo;

            localStorage.setItem('users', JSON.stringify('users'));
        } else {

            const users = JSON.parse(localStorage.getItem('users'));

            users.userInfo.id = userInfo;

            localStorage.setItem('users', JSON.stringify('users'));
        }

    }


  

    const displayFirstQuestion = () => {

        document.getElementById("mainContainer").innerHTML = pageTemplates.q1;

    };

    const handleFirstQuestion = (e) => {

        userInfo.numOfBeds = e.target.dataset.value;

        document.getElementById("mainContainer").innerHTML = pageTemplates.q2;
        
    };

    const handleSecondQuestion = () => {

        userInfo.price = document.getElementById("sliderInput").value;

        document.getElementById("mainContainer").innerHTML = pageTemplates.q3;
    };

    const handleThirdQuestion = () => {

        userInfo.location = document.getElementById("location").value;

        document.getElementById("mainContainer").innerHTML = pageTemplates.q4;
    };

    const handleFourthQuestion = (e) => {

        userInfo.mostImportant = e.target.dataset.value;

        console.log(userInfo);

        saveToLocalStorage();
    }

};

main();
