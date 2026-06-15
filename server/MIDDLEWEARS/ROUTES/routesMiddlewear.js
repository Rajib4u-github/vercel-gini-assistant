// // const promise = require("promise");
// // const request = require("request");
// // const ROOT_DIR = require("path").resolve();
// // const fs = require('fs');
// // var MUSIC_APP_DATA = require(ROOT_DIR+'/server/NEARBY/store/nearby_app_data.js').sections_data;
// // var GENERIC_TEMPLATE_GENERATOR = require(ROOT_DIR+'/server/GENERIC_TEMPLATE/genericTemplate.js');

// const path = require('path');


// const execute_application_routes = function(app){
//   try {
//     console.log("======== executing application routes successfully =====================")
//     app.use('/restaurant', function(req, res) {
//             console.log("======== executing application routes successfully =====================")
// console.log("++++++++++++++++++++++++++++++++++++++")
// console.log("__dirname + '/../../../client/RESTAURANT/restaurantApp.html : ", (path.join(__dirname + '/../../../client/RESTAURANT/restaurantApp.html')))
//     // res.sendFile('./client/RESTAURANT/restaurantApp.html');
//     res.sendFile(path.join(__dirname + '/../../../client/RESTAURANT/restaurantApp.html'));
// });


// // app.use('/edit', function(req, res) {
// //     res.sendFile('/../../../client/portfolio_edit.html');
// // });

// // app.use('/shopping', function(req, res) {
// //     res.sendFile('/../../../client/SHOPPING/shoppingApp.html');
// // });

// // app.use('/music', function(req, res) {
// //     res.sendFile('/../../../client/MUSIC/musicApp.html');
// // });

// // app.use('/nearby', function(req, res) {
// //     res.sendFile('/../../../client/NEARBY/giniNearByPlacesApp.html');
// // });

// // app.use('/qrcode-scan', function(req, res) {
// //     res.sendFile('/../../../client/QRCODE_SCANNER/instascanQrcodeApp.html');
// // });

// // app.use('/qrcode-create', function(req, res) {
// //     res.sendFile('/../../../client/QRCODE_SCANNER/QRCodeGeneratorApp.html');
// // });

// // app.use('/barcode', function(req, res) {
// //     res.sendFile('/../../../client/QRCODE_SCANNER/MDMBarCodeDetector.html');
// // });

// // app.use('/gini-music', function(req, res) {
// //     res.sendFile('/../../../client/MUSIC/giniMusicApp.html');
// // });

// // app.use('/public-apis', function(req, res) {
// //     // res.sendFile('./client/publicApis/publicApisApp.html');
// //     res.sendFile(path.join(__dirname + '/../../../client/publicApis/publicApisApp.html'));

// // });

// // app.use('/musicv2', function(req, res) {
// //     res.sendFile('/../../../client/giniMusicV2/giniMusicV2App.html');
// // });

// // app.use('/sportsv2', function(req, res) {
// //     res.sendFile('/../../../client/giniSportsV2/giniSportsV2App.html');
// // });

// // app.use('/kontestsv2', function(req, res) {
// //     res.sendFile('/../../../client/giniKontestsV2/giniKontestsV2App.html');
// // });

// // app.use('/gini-fm', function(req, res) {
// //     // res.sendFile('./client/giniFmV2/giniFmV2App.html');
// //     res.sendFile(path.join(__dirname + '/../../../client/giniFmV2/giniFmV2App.html'));

// // });

// // app.use('/restaurant', function(req, res) {
// //     // res.sendFile('./client/RESTAURANT/restaurantApp.html');
// //     res.sendFile(path.join(__dirname + '/../../../client/RESTAURANT/restaurantApp.html'));
// // });

// // // app.use('/new', function(req, res) {
// // //     res.sendFile('./client/NEW_PROJECT/newProjectApp.html');
// // // });

// // app.use('/ind-stocks', function(req, res) {
// //     // res.sendFile('./client/IND_STOCKS/indStocksApp.html');
// //     res.sendFile(path.join(__dirname + '/../../../client/IND_STOCKS/indStocksApp.html'));

// // });



// // app.use('/yahoofin', function(req, res) {
    
// //     // console.log("======= yahoofinance live stocks ========");
// //     // function onchange(data) {
// //     //   console.log("********************************")
// //     //   console.log(data)
// //     // }
// //     // let yfinanceObj1 = new YFinanceLive(['GOOGL', 'AAPL', 'TSLA'], onchange)

// //     // function onchange(data) {
// //     //   console.log(data)
// //     // }
// //     // let yfinanceObj = YFinance(['GOOGL', 'AAPL', 'TSLA'], onchange)

// //     yahooFinance.historical({
// //       symbol: 'AAPL',
// //       modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
// //     }, function (err, quotes) {
// //       console.log("======= quotes: ", quotes)
// //     });
// //     res.send("hello world......")
// // });

// // app.get('/favicon.ico', (req, res) => {
// //   console.log("00000000000000000000000000000000000000000000")
// //   res.status(204).end();
// // });

// // app.use('/me', function(req, res) {
// //     res.sendFile('/../../../client/final_portfolio.html');
// // });
// app.use('/', function(req, res) {
//     // res.sendFile('./client/GINI/gini_home_page.html');
//     // res.sendFile(path.join(__dirname + '/../../../client/GINI/gini_home_page.html'));
//       // res.sendFile(path.join(__dirname + '/client/GINI/gini_home_page_v2.html'));

//     res.sendFile(path.join(__dirname + '/../../../client/RESTAURANT/restaurantApp.html'));


// });
//   } catch (e) {
//       console.log(" execute_application_routes error : ", e);
//   } finally {

//   }
// };


// const execute_application_routes_services = {

//     execute_application_routes : execute_application_routes,

// }


// module.exports.execute_application_routes_services = execute_application_routes_services;
