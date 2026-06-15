'use strict';
// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const express = require("express");
var cors = require('cors');
var app = express();
app.use(cors());
const http = require("http").Server(app);
const io = require('socket.io')(http);
const promise = require("promise");
const request = require('request');
var bodyParser = require('body-parser');
const fs = require('fs');
const { log } = require("console");
var { YFinanceLive } = require('yfinance-live')
var YFinance = require('yfinance-live')
// var yahooFinance = require('yahoo-finance');
// import path from 'path';
const path = require('path');
// const __dirname = path.resolve();

// import OpenAI from "openai";
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: "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",
});

console.log("========= __dirname : ", __dirname)

const ROOT_DIR = require("path").resolve();
// var EXECUTE_ROUTES_MIDDLEWEAR = require(ROOT_DIR+'/server/MIDDLEWEARS/ROUTES/routesMiddlewear.js');
var GINI_HOME = require(ROOT_DIR+'/server/GINI/giniHomeProcessing.js');
var RESTAURANT_APP_SERVICES = require(ROOT_DIR+'/server/RESTAURANT/controllers/restaurantApp.controller.js');
var MUSIC_APP_SERVICES = require(ROOT_DIR+'/server/MUSIC/controllers/musicApp.controller.js');
const NEARBY_APP_SERVICES = require(ROOT_DIR+'/server/NEARBY/controllers/nearbyApp.controller.js');

var SHOPPING_APP_SERVICES = require(ROOT_DIR+'/server/SHOPPING/controllers/shoppingApp.controller.js');
var NEW_PROJECT_APP_SERVICES = require(ROOT_DIR+'/server/NEW_PROJECT/controllers/newProjectApp.controller.js');

var IND_STOCKS_APP_SERVICES = require(ROOT_DIR+'/server/IND_STOCKS/controllers/indStocksApp.controller.js');

const CREATE_NEW_PROJECT_STRUCTURE = require('./createNewProjectStructure.js');
const DYNAMIC_ROUTER = require('./dynamicRouter.js');


// console.log("=== CREATE_NEW_PROJECT_STRUCTURE : ", CREATE_NEW_PROJECT_STRUCTURE)
// CREATE_NEW_PROJECT_STRUCTURE.createTestFileAsync()

var CUSTOM_PORTFOLIO_SERVICE = null;
var CUSTOM_GINI_HOME_SERVICE = null;
let LOCAL_STORAGE = {};


// app.js

function createTestFileAsync(){
    try {
        let p = new Promise(function(resolve, reject){
          if (fs.existsSync('./server/PORTFOLIO/LOCAL_DB/test.json')) {
            //file exists
            console.log("+========================= FILE EXISTS +=======================");
            // CUSTOM_PORTFOLIO_SERVICE = require('./server/PORTFOLIO/portfolio.js');
            resolve();
          }else{
            let obj = require('./server/PORTFOLIO/store/generic_portfolio_data.js').portfolio_data;
            var writeStream = fs.createWriteStream("./server/PORTFOLIO/LOCAL_DB/test.json");
            writeStream.write(JSON.stringify(obj));
            writeStream.end();
            console.log("+======================= create file successfully +=========================");
            // CUSTOM_PORTFOLIO_SERVICE = require('./server/PORTFOLIO/portfolio.js');
            resolve();
          }
        });
        return p;
    } catch (e) {
        console.log("@@@@ catch :: ", e);
    } finally {

    }
}

// createTestFileAsync().then(function(data){
//     console.log("======= return from create file promise =======");
//     console.log("77777777777777777777777777777777777777");
//     CUSTOM_PORTFOLIO_SERVICE = require('./server/PORTFOLIO/portfolio.js');
//     let file = {path: './server/PORTFOLIO/LOCAL_DB/test.json', type: "utf8"};
//     console.log("+======================= ACCESS LOCAL DB PORTFOLIO FILE  +=========================");

//     // CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.read_portfolio_file_data(file).then(function(data){
//     //     console.log("8888888888888888888888888888888888888888888");
//     // });
// });

app.use(bodyParser.json());

app.use('/static', express.static(__dirname+'/assets'));

// EXECUTE_ROUTES_MIDDLEWEAR.execute_application_routes_services.execute_application_routes(app);

app.use('/edit', function(req, res) {
    // res.sendFile('./client/portfolio_edit.html');
    res.sendFile(path.join(__dirname + '/client/portfolio_edit.html'));
});

app.use('/shopping', function(req, res) {
    res.sendFile('./client/SHOPPING/shoppingApp.html');
    res.sendFile(path.join(__dirname + '/client/SHOPPING/shoppingApp.html'));
});

app.use('/music', function(req, res) {
    // res.sendFile('./client/MUSIC/musicApp.html');
    res.sendFile(path.join(__dirname + '/client/MUSIC/musicApp.html'));

});

app.use('/nearby', function(req, res) {
    // res.sendFile('./client/NEARBY/giniNearByPlacesApp.html');
    res.sendFile(path.join(__dirname + '/client/NEARBY/giniNearByPlacesApp.html'));

});

app.use('/qrcode-scan', function(req, res) {
    // res.sendFile('./client/QRCODE_SCANNER/instascanQrcodeApp.html');
    res.sendFile(path.join(__dirname + './client/QRCODE_SCANNER/instascanQrcodeApp.html'));

});

app.use('/qrcode-create', function(req, res) {
    // res.sendFile('./client/QRCODE_SCANNER/QRCodeGeneratorApp.html');
    res.sendFile(path.join(__dirname + '/client/QRCODE_SCANNER/QRCodeGeneratorApp.html'));

});

app.use('/barcode', function(req, res) {
    // res.sendFile('./client/QRCODE_SCANNER/MDMBarCodeDetector.html');
    res.sendFile(path.join(__dirname + '/client/QRCODE_SCANNER/MDMBarCodeDetector.html'));

});

app.use('/gini-music', function(req, res) {
    // res.sendFile('./client/MUSIC/giniMusicApp.html');
    res.sendFile(path.join(__dirname + '/client/MUSIC/giniMusicApp.html'));

});

app.use('/public-apis', function(req, res) {
    // res.sendFile('./client/publicApis/publicApisApp.html');
    res.sendFile(path.join(__dirname + '/client/publicApis/publicApisApp.html'));

});


app.use('/npm-info', function(req, res) {
    // res.sendFile('./client/publicApis/publicApisApp.html');
    res.sendFile(path.join(__dirname + '/client/NPM_INFO/npmInfoApp.html'));

});

app.use('/musicv2', function(req, res) {
    // res.sendFile('./client/giniMusicV2/giniMusicV2App.html');
    res.sendFile(path.join(__dirname + '/client/giniMusicV2/giniMusicV2App.html'));

});

app.use('/sportsv2', function(req, res) {
    // res.sendFile('./client/giniSportsV2/giniSportsV2App.html');
    res.sendFile(path.join(__dirname + '/client/giniSportsV2/giniSportsV2App.html'));
});

app.use('/kontestsv2', function(req, res) {
  console.log("================ kontest v222222222222222  ====================")
    // res.sendFile('./client/giniKontestsV2/giniKontestsV2App.html');
    res.sendFile(path.join(__dirname + '/client/giniKontestsV2/giniKontestsV2App.html'));
});

app.use('/gini-fm', function(req, res) {
    // res.sendFile('./client/giniFmV2/giniFmV2App.html');
    res.sendFile(path.join(__dirname + '/client/giniFmV2/giniFmV2App.html'));

});

app.use('/portfolio', function(req, res) {
    console.log("999999999999999999999999999")
    // res.sendFile('./client/portfolio_create.html');
    res.sendFile(path.join(__dirname + '/client/portfolio_create.html'));

});

app.use('/restaurant', function(req, res) {
    // res.sendFile('./client/RESTAURANT/restaurantApp.html');
    res.sendFile(path.join(__dirname + '/client/RESTAURANT/restaurantApp.html'));
});

app.use('/new', function(req, res) {
    res.sendFile('./client/NEW_PROJECT/newProjectApp.html');
});

app.use('/ind-stocks', function(req, res) {
    // res.sendFile('./client/IND_STOCKS/indStocksApp.html');
    res.sendFile(path.join(__dirname + '/client/IND_STOCKS/indStocksApp.html'));

});

app.use('/newApp', DYNAMIC_ROUTER);


app.use('/new-app', function(req, res) {
    // res.sendFile('./client/IND_STOCKS/indStocksApp.html');
    //res.sendFile(path.join(__dirname + '/client/IND_STOCKS/indStocksApp.html'));
    console.log("=== req.query : ", req.query)
    const applicationName = req.query.appName;
    const fileName = req.query.fileName;
    const new_app_folder_structure_config = [
        {
            newFolderName: req.query.appName,
            newFolderPath: './server/'+applicationName+'/store',
            newFileName: fileName+'Data.js',
            sourceFile: './server/publicApis/store/publicApisData.js',
            destinationFile: ''
        },
        {
            newFolderName: req.query.appName,
            newFolderPath: './client/'+applicationName,
            newFileName: fileName+'App.html',
            sourceFile: './client/publicApis/publicApisApp.html',
            destinationFile: ''
        },
        {
            newFolderName: req.query.appName,
            newFolderPath: './assets/css/'+applicationName,
            newFileName: fileName+'App.css',
            sourceFile: './assets/css/publicApis/publicApisApp.css',
            destinationFile: ''
        },
        {
            newFolderName: req.query.appName,
            newFolderPath: './assets/js/'+applicationName+'/controllers',
            newFileName: fileName+'App.client.controller.js',
            sourceFile: './assets/js/publicApis/controllers/publicApis.client.controller.js',
            destinationFile: ''
        },
    ]
    // const appName = req.query.appName;
    const appName = req.query.fileName;
    CREATE_NEW_PROJECT_STRUCTURE.createNewAppFolderStructure(new_app_folder_structure_config).then((status) => {
      console.log("==== goind to redirect to new app====")
      if(status === 200){
        res.redirect(`/newApp/${applicationName}`);
      }
    })

    //res.redirect(`/newApp/${appName}`);
    //res.send('hello world')

});



// app.use('/yahoofin', function(req, res) {
    
//     // console.log("======= yahoofinance live stocks ========");
//     // function onchange(data) {
//     //   console.log("********************************")
//     //   console.log(data)
//     // }
//     // let yfinanceObj1 = new YFinanceLive(['GOOGL', 'AAPL', 'TSLA'], onchange)

//     // function onchange(data) {
//     //   console.log(data)
//     // }
//     // let yfinanceObj = YFinance(['GOOGL', 'AAPL', 'TSLA'], onchange)

//     yahooFinance.historical({
//       symbol: 'AAPL',
//       modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
//     }, function (err, quotes) {
//       console.log("======= quotes: ", quotes)
//     });
//     res.send("hello world......")
// });

// app.get('/favicon.ico', (req, res) => {
//   console.log("00000000000000000000000000000000000000000000")
//   res.status(204).end();
// });


// app.use('/dell', function(req, res) {
//     res.sendfile('./client/dell_test.html');
// });



  // socket.on("request-gini-home-initial-sections", (request) => {
  //       console.log("=========== calling request-gini-home-initial-sections ===========");
  //       console.log("2222222222222222222222222222222222222222222222222222")
  //       let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("init_sections").values;
  //       let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
  //       let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
  //       socket.emit("response-gini-home-initial-sections", {initSections : sections, defaultStyle: defaultStyle});
    
  //     })

app.use('/fetchHomeInitialSections', function(req, res) {
      console.log("=========== calling request-gini-home-initial-sections ===========");
        console.log("2222222222222222222222222222222222222222222222222222")
        let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("init_sections").values;
        let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
        let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
        //socket.emit("response-gini-home-initial-sections", {initSections : sections, defaultStyle: defaultStyle});
        response.status(200).json({ status: "Success", initSections : sections, defaultStyle: defaultStyle});

});

app.use('/fetchGenericSections', function(req, res) {
      console.log("=========== calling fetchGenericSections ===========");
      // console.log("2222222222222222222222222222222222222222222222222222")
      console.log("@@@@@@@@@@@@@@@ **************** generic req.body || request :: ", req.body);
      const request = req.body;
      let sectionData = null;
      let dependentSectionsData = null;
      // res.status(201).json({ status: "Success", payload: "I am from /fetchGenericSections..." });

      if(request.actionType === 'update_section_apis_url'){
          let sectionData = getSectionDatabyApplication(request.application, request.sectionName);
          if(sectionData.dataSource.type === 'API'){
              sectionData.dataSource.url = request.siteUrl;
              console.log("=== after update url : ", sectionData.dataSource.url);
            }
      }

      if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
        sectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.new_get_section_data(request);
        request.sectionData = sectionData;
      }
      if(request.sectionData.dependentSectionsName !== undefined && request.sectionData.dependentSectionsName !== null && request.sectionData.dependentSectionsName !== ''){
        dependentSectionsData = {}
        let dummySectionName = request.sectionName; 
        request.sectionData.dependentSectionsName.forEach((sectionName, sectionindex) => {
              request.sectionName = sectionName;
              let dependentSectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.new_get_section_data(request);
              dependentSectionsData[sectionName] = dependentSectionData;
        })
        request.sectionName = dummySectionName;
      }
      console.log("======== dependentSectionsData : ", dependentSectionsData)
      // request.sectionData = sectionData;
      request.dependentSectionsData = dependentSectionsData;
      console.log("======= sectionData :: ", sectionData)

      // if(request.apiRef === "whydYoutubePopMusic_section"){
      //     console.log("^^^^^^^^^^^^^^^^^^^^^^^   sectionData :: ", sectionData);
      // }

      if(request.apiRef === "about_section" ||
          request.apiRef === 'facts_section' ||
          request.apiRef === 'skills_section' ||
          request.apiRef === 'education_section' ||
          request.apiRef === 'workexp_section' ||
          request.apiRef === 'services_section' ||
          request.apiRef === 'languages_section' ||
          request.apiRef === 'contacts_section' ||
          request.apiRef === 'projects_section' ||
          request.apiRef === 'activities_section' ||
          request.apiRef === 'settings_section' ||
          request.apiRef === 'products_section' ||
          request.apiRef === 'brand_section' ||
          request.apiRef === 'aboutRestaurant_section' ||
          request.apiRef === 'mobileSideNavBar_section' ||
          request.apiRef === 'npmFilterByCategory_section'

        // request.apiRef === 'specialMenu_section'
      ){
          let template = '';
          if(request.edit){
            let editedTemplateResponse = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
            template = editedTemplateResponse.template;
            // console.log("============= edit template : ", template)
            //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
            res.status(200).json({ status: "Success", text: "I am from EDIT  sections", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: editedTemplateResponse.templateData, apiRef : request.apiRef} });

          }else{
            if(request.apiRef === 'mobileSideNavBar_section'){
              template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
              //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });
              return;
            }
            template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
            if(request.apiref === 'settings_section'){
                console.log("------ 77777 ------ settings section template :: ", template)

            }
            //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
            res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });

          }
      }else if(request.apiRef === 'headerNav_section'){
        let nav = null;
        const dependentSectionName = 'all_sections';
        let dependentSectionsData = {}
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy request ::  ", request)
        request.dependentSectionName = dependentSectionName;

        if(request.application === 'gini_home'){
            nav = GINI_HOME.gini_home_processing.get_section_data("headerNav_section");
        }else if(request.application === 'restaurant_home'){
            nav = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("headerNav_section");
        }else if(request.application === 'music_home'){
            nav = MUSIC_APP_SERVICES.music_app_services.get_section_data("headerNav_section");
            console.log("@@@@@@@@@@@@@ music  nav val : ", nav);
        }else if(request.application === 'shopping_home'){
            nav = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("headerNav_section");
            console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
        }else if(request.application === 'new_project'){
            nav = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("headerNav_section");
            console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
        }else if(request.application === 'indStocks'){
            console.log("======= calling ind stocks data to generate dynamic html =======");
            nav = IND_STOCKS_APP_SERVICES.app_services.get_section_data("headerNav_section");
            console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
            let dependentSectionData = IND_STOCKS_APP_SERVICES.app_services.get_section_data(dependentSectionName);
            dependentSectionsData[dependentSectionName] = dependentSectionData;
            request.dependentSectionsData = dependentSectionsData;
          }else if(request.application === 'GINIMUSIC'){
            let filePath = './server/GINIMUSIC/store/giniMusicApp.js';
            let GINI_MUSIC_DATA = require(filePath).portfolio_data;
            console.log("===== GINI_MUSIC_DATA : ", GINI_MUSIC_DATA);
            nav = GINI_MUSIC_DATA[request.sectionName];

            // nav = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("headerNav_section");
            // console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
        }else{
          let dataFileName = request.application;
          let dataFilePath = './server/'+request.application+'/store/'+request.fileName+'Data.js';
          // let x = './server/publicApis/store/publicApisApp.js';
          // console.log("dataFilePath : ", dataFilePath);
          let DATA = require(dataFilePath).sections_data;
          nav = DATA[request.sectionName];
          let dependentSectionData = DATA[request.dependentSectionName];
          console.log("33333333333333333333333333333333333333333333333333333333333333333333");
          console.log("333333333333333  nav : ", nav);
          dependentSectionsData[dependentSectionName] = dependentSectionData;
          request.dependentSectionsData = dependentSectionsData;
          // let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, nav, request.application, request);
          // console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy template : ", template)
          // //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
          // res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });

          // return
        }
        let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_header_navigation_template(nav, request.application, request);
        //ocket.emit("response-generic-portfolio", {template : template, blockId: null, templateId: 'header', loaderId: null, apiRef: request.apiRef});
        res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: null, templateId: 'header', loaderId: null, apiRef: request.apiRef}});

      }else if(request.apiRef === 'latest_work_section'){
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.latest_work_section(request.apiRef);
          // console.log("@@@ template :: ", template);
          //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId });
          res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId }});

      }else if(request.apiRef === 'work_section'){
          console.log("===== request : ", request)
          request.sectionName = request.apiRef;
          request.category = request.logoCategory;
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.work_section(request, request.apiRef, request.logoCategory);
          // console.log("@@@ template :: ", template);
         // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});
            res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef} });

      }else if(
        request.apiRef === 'menu_section'
        || request.apiRef === 'specialMenuContainer_section'
        || request.apiRef === 'newsByCategory_section'
        || request.apiRef === "entertainmentNewsByCategoryContainer_section"
        || request.apiRef === 'educationalNewsByCategoryContainer_section'
        || request.apiRef === "medicalNewsByCategoryContainer_section"
        || request.apiRef === "newsApiTopArticlesNewsByCategoryContainer_section"
        || request.apiRef === "newsApiTopJournalNewsByCategoryContainer_section"
        || request.apiRef === "hereMapPlacesByCategoryContainer_section"
        || request.apiRef === "hereMapPlacesByTransportPlacesCategoryContainer_section"
        || request.apiRef === "hereMapPlacesByTransportPlacesCategoryContainer_section"
        || request.apiRef === "hereMapPlacesByAccomodationPlacesCategoryContainer_section"
        || request.apiRef === "hereMapPlacesByEmmergencyServicePlacesCategoryContainer_section"
        || request.apiRef === "hereMapPlacesByShoppingCategoryContainer_section"
        || request.apiRef === "indStocksMutualFundsCategory_section"
        || request.apiref === 'genericActionButton_section'
        // || request.apiRef === 'customFixedMenuSidebar_section'
      ){
            let categoryData = null;
            if(sectionData !== undefined && sectionData !== null){
              console.log("11111111111111  :: ", request);
              categoryData = sectionData[request.category];
            }
            let url = '';
            if(
              categoryData !== undefined && categoryData !== null && categoryData !== '' &&
              categoryData.dataSource !== undefined &&
              categoryData.dataSource !== null &&
              categoryData.dataSource.type !== undefined &&
              categoryData.dataSource.type !== null &&
              categoryData.dataSource.type === "API"
            ){
              console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
              let requestOption;
              if(sectionData.defaults !== undefined){
                  let defaultsApiParams = '';
                  for(let key in sectionData.defaults){
                      defaultsApiParams += '&'+key+'='+sectionData.defaults[key];
                  }
                  url = categoryData.dataSource.url+defaultsApiParams;
              }else{
                url = categoryData.dataSource.url;
              }
              CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_api_data(url).then((data) => {
                  categoryData.dataSource.data = data;
                  consdole.log("======  ****** ======= data : ", data)
                  let template = '';
                  if(request.edit){
                    let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                    template = res.template;
                    //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData}});

                  }else{
                    template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                    //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });

                  }
              })
            }else if(
              categoryData !== undefined && categoryData !== null && categoryData !== '' &&
              categoryData.dataSource !== undefined &&
              categoryData.dataSource !== null &&
              categoryData.dataSource.type !== undefined &&
              categoryData.dataSource.type !== null &&
              categoryData.dataSource.type === "SECTION-LOCAL-STORAGE"
            ){
                  console.log("===== ************************ 88888888888888888888888 ********************========");
                  if(categoryData.sectionData){
                      data = categoryData.sectionData;
                  }
                  
                  categoryData.dataSource.data = data;
                  request.sectionData.dataSource.data = data;
                  request.payloadData.dataSource.data = data;
                  consdole.log("======  ****** ======= data : ", data)
                  let template = '';
                  if(request.edit){
                    let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                    template = res.template;
                    //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData}});


                  }else{
                    template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                    //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });

                  }
            }else if(
              categoryData !== undefined && categoryData !== null && categoryData !== '' &&
              categoryData.dataSource !== undefined &&
              categoryData.dataSource !== null &&
              categoryData.dataSource.type !== undefined &&
              categoryData.dataSource.type !== null &&
              categoryData.dataSource.type === "DATA-SERVER"
            ){
                // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                // console.log("@@@@ categoryData : ", categoryData);
                let filePath = './server'+categoryData.dataSource.dataFilePath;
                let rawData = require(filePath).rawData;
                console.log("++++++++++++++++++ file path : ", filePath);
                // console.log("======= rawData : ", rawData);

                categoryData.dataSource.data = rawData;
                request.sectionData.dataSource.data = data;
                let template = '';
                if(request.edit){
                  let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, rawData, request.application, request);
                  template = res.template;
                  //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData} });

                }else{
                  template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                  //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });

                }
            }else{
              // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
              let categoryData = sectionData[request.category];
              if(categoryData !== undefined){
                let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });

              }
            }
      }else if(request.apiRef === 'workcat_section' || request.apiRef === 'openSourceCategory_section'){
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.workcat_list_section(request);
          // console.log("@@@ template :: ", template);
          //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});
            res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef} });

      }else if(request.apiRef === 'header_section'){
          
          // let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.header_section(request.apiRef, request.dynamic_header_menus, request.edit);
          const template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.header_section(request);
          console.log("@@@ @@@@@@@@@@@@@@@@@@ template :: ", template);
          //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});
            res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef} });

      }else if(request.apiRef === 'customFixedMenuSidebar_section' || request.apiRef === 'customRightFixedSidebar_section'){
            console.log("===== ************************ 88888888888888888888888 ********************========");
            console.log("===== ************************ 88888888888888888888888 ********************========");
            console.log("========== sectionData : ", sectionData)
        if(sectionData !== undefined && sectionData !== null && sectionData !== '' &&
              sectionData.dataSource !== undefined &&
              sectionData.dataSource !== null &&
              sectionData.dataSource.type !== undefined &&
              sectionData.dataSource.type !== null &&
              sectionData.dataSource.type === "SECTION-LOCAL-STORAGE"
            ){
                  let data = '';
                  console.log("===== ************************ 88888888888888888888888 ********************========");
                  if(sectionData.sectionData){
                      data = sectionData.sectionData;
                  }
                  
                  sectionData.dataSource.data = data;
                  sectionData.dataSource.data = data;
                  // request.payloadData = data;
                  // console.log("======  ****** ======= data : ", data)
                  let template = '';
                  if(request.edit){
                    let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                    template = res.template;
                    //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData} });

                  }else{
                    template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping._getCustomFixedMenuSidebar_section_template(request);

                    // template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                    //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });

                  }
            }
         
      }else if(request.apiRef && request.apiRef === 'customFixedDynamicMixedMenuSidebar_section' || request.apiRef ==='customFixedDynamicMixedMenuSidebarChatGPTAI_section'){
            console.log("===== ************************ 88888888888888888888888 ********************========");
            console.log("===== ************************ 88888888888888888888888 ********************========");
            console.log("========== sectionData : ", sectionData)
        if(sectionData !== undefined && sectionData !== null && sectionData !== '' &&
              sectionData.dataSource !== undefined &&
              sectionData.dataSource !== null &&
              sectionData.dataSource.type !== undefined &&
              sectionData.dataSource.type !== null &&
              sectionData.dataSource.type === "SECTION-LOCAL-STORAGE"
            ){
                  let data = '';
                  console.log("===== ************************ 88888888888888888888888 ********************========");
                  if(sectionData.sectionData){
                      data = sectionData.sectionData;
                      request.sectionData = sectionData;
                  }

                  sectionData.dataSource.data = data;
                  sectionData.dataSource.data = data;
                  // request.payloadData = data;
                  // console.log("======  ****** ======= data : ", data)
                  let template = '';
                  if(request.edit){
                    // let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                    // template = res.template;
                    // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData} });

                  }else{
                    template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping._getCustomMixedDynamicFixedMenuSidebar_section_template(request);

                    // template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                    //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef} });
                  }
            }
         
      }else if(request.apiRef === 'typed_section'){
          let data = null;
          if(request.application === 'gini_home'){
            // data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
            data = GINI_HOME.gini_home_processing.get_section_data('typed_section');
          }else if(request.application === 'restaurant_home'){
            data = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data('typed_section');
            // data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
          }else{
            data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
          }
          // console.log("@@@ template :: ", template);
          //socket.emit("response-generic-portfolio", {data : data, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});
          res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {data : data, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef}});

      }else if(request.apiRef === "update_section_data"){
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_section_data(request.sectionData);
      }else if(request.apiRef === "update_block_data"){
          console.log("!!!!!!!!!!!!!!! sectionData :: ", sectionData);
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_block_data(request, sectionData);
          if(request.actionType === "add_item_on_top" ||
          request.actionType === "add_item_on_below" ||
          request.actionType === "delete_section" ||
          request.actionType === "add_section_left" ||
          request.actionType === "add_section_right" ||
          request.actionType === "add_similar_item_on_below" ||
          request.actionType === "add_similar_item_on_top" ){
              let dynamicSectionsTemplateResponse = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, true, sectionData, request.application, request);
              let template = dynamicSectionsTemplateResponse.template;
              console.log("@@@ section name :: ", request.elementId);
              let secName = request.sectionName.split("_")[0];
              // console.log("@@@ secName :: ", secName);
              // socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, templateData: res.templateData, elementId: request.elementId});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, templateData: dynamicSectionsTemplateResponse.templateData, elementId: request.elementId}});

            }else if(request.actionType === "edit_item_style" || request.actionType === "edit_part_style"){
              let style = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_block_data(request, sectionData);
              //socket.emit("response-action-edit-style", {style : style});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {style : style}});

          }else if(request.actionType === "settings_drag_and_drop"){
              let secName = request.sectionName.split("_")[0];
              console.log("@@@ secName :: ", secName);
              console.log("@@@ sectionData :: ", sectionData);
              if(secName === 'settings'){
                  let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, false, sectionData, request.application, request);;
                  //socket.emit("response-generic-portfolio", {template : template, blockId: null, templateId: null, loaderId: null, apiRef: 'settings_section'});
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: null, templateId: null, loaderId: null, apiRef: 'settings_section'}});

                }else{
                  let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, true, sectionData, request.application, request);
                  let template = res.template;
                  //socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, });
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, }});

                }
          }
      }else if(request.apiRef === "update_initial_sections"){
          console.log("===== 00000 ==== request : ", request)
          LOCAL_STORAGE.initialSections = request.updatedInitialSections;
          let response = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_initial_sections(request);
          console.log("==========00000000000000====== response update_initial_sections : ", response)
          //socket.emit("response-generic-portfolio", {apiRef : request.apiRef});
          res.status(200).json({ status: "Success", text: "I am from update_initial_sections.....", payload: {apiRef : request.apiRef}});

      }else if(request.apiRef === "update_defaults_settings"){
        console.log("@@@ sectionData :: ", sectionData);
        let val = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_defaults_settings(request);
            if(request.sectionName === 'newsByCategory_section'){
                console.log("@@@ 6666  category : ", request.category);
                let categoryData = sectionData[request.category.toString()];
                let secName = request.sectionName.split("_")[0];
                  console.log("@@@ 77777 categoryData : ", categoryData);
                if(
                  categoryData !== undefined && categoryData !== null && categoryData !== '' &&
                  categoryData.dataSource !== undefined &&
                  categoryData.dataSource !== null &&
                  categoryData.dataSource.type !== undefined &&
                  categoryData.dataSource.type !== null &&
                  categoryData.dataSource.type === "API"
                ){
                  CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_api_data(categoryData.dataSource.url).then((data) => {
                      categoryData.dataSource.data = data;
                      let template = '';
                      if(request.edit){
                        let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                        template = res.template;
                        //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                        res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData}});

                      }else{
                        // console.log("@@@ secname : ", secName);
                        // console.log("@@@@ template : ", 'custom_'+secName+'_template');
                        // console.log("@@@@ block : ", 'custom_'+secName+'_block');

                        template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
                        // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                        //socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: false, apiRef : request.apiRef });
                        res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: false, apiRef : request.apiRef }});

                      }
                })
              }
            }

      }else if(request.apiRef === "update_theme"){
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_theme(request);
      }else if(request.apiRef === "theme_section"){
          console.log("======= calling theme section template =========");
          console.log("33333333333333 request : ", request)
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
          console.log("3333333333333333 ########## request response template :: ", template)

          // let data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
          // console.log("@@@ template :: ", template);
          //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});
          res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef}});

      }else if(request.apiRef === "get_section_template"){
          if(request.actionType === 'section_template'){
              // CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, request.edit);
              let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, request.edit, sectionData, request.application, request);
              //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef}});

            }
      }else if(request.apiRef === 'create_new_section'){
          let updatedAllSections = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.create_new_section(request);
          let defaultStyle = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_application_default_style(request);
          // /LOCAL_STORAGE.initialSections = sections;
          let sections = {values: updatedAllSections.allSectionsData, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-initial-sections-data", {allSectionsData : sections, defaultStyle: defaultStyle, application: request.application, fileName: request.fileName});
          res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {allSectionsData : sections, defaultStyle: defaultStyle, application: request.application, fileName: request.fileName}});

      }else if(request.apiRef === 'create_new_profile'){
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.copy_file(request.fileName).then((data) => {
              console.log("======================== successfully create new file =============================");
              // console.log("^^^^^^^^ profiles template : ", data);
              //socket.emit("response-generic-portfolio", {template : data, blockId: 'profilesBlock', apiRef: request.apiRef , templateId: '', loaderId: '' });
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : data, blockId: 'profilesBlock', apiRef: request.apiRef , templateId: '', loaderId: '' }});

            });
      }else if(request.apiRef === 'change_my_profile'){
          console.log("^^^^^^^^^^^^^^^^^^^  action : change_my_profile : ^^^^^^^^^^^^^^^^^^^^^^");
          let profileName = request.profileName+'.js';
          let file = {path: './server/PORTFOLIO/store/'+profileName, type: "utf8"};
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.read_portfolio_file_data(file).then(function(data){
              console.log("8888888888888888888888888888888888888888888");
              console.log("88888888 profiles data : ", data);
          });

      }else if(request.apiRef === 'sync_portfolio_file'){
          let filePath = './server/PORTFOLIO/LOCAL_DB/test.json';
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_portfolio_file(filePath).then((data) => {
              console.log("successfully written to the file ");
          });

      }else if(request.apiRef === "custom_search"){
          // console.log("=========== section data : ", sectionData);
          console.log("=========== search query : ", request.searchQuery);
          console.log("=========== search property : ", request.searchProperty);
          // console.log("=========== search sectionData  : ", JSON.stringify(sectionData));


          let filteredSearchItem = [];
          let data = null;
          let dummyData = sectionData.dataSource.data;
          let localSectionData = JSON.parse(JSON.stringify(sectionData));
          if(request.application === 'publicApis'){
              data = localSectionData.dataSource.data.entries;
          }else if(request.application === 'giniKontestsV2'){
              data = localSectionData.dataSource.data;
          }
            if(request.searchQuery.length >= 3){
              // console.log("======= custom search data : ", data);
                  data.forEach((item, i) => {
                      // if((item[request.searchProperty].toLowerCase().indexOf(request.searchQuery.toLowerCase()) !== -1) || (item.Description.toLowerCase().indexOf(request.searchQuery.toLowerCase()) !== -1)){

                      if((item[request.searchProperty].toLowerCase().indexOf(request.searchQuery.toLowerCase()) !== -1)){
                          filteredSearchItem.push(item);
                      }
                  });
                  console.log("======= custom search data filteredSearchItem : ", filteredSearchItem);
                  // localSectionData.dataSource.data.entries = filteredSearchItem;
                  if(request.application === 'publicApis'){
                      localSectionData.dataSource.data.entries = filteredSearchItem;
                  }else if(request.application === 'giniKontestsV2'){
                      localSectionData.dataSource.data = filteredSearchItem;
                  }
            }

            let template = '';
            if(request.edit){
              let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, localSectionData, request.application, request);
              template = res.template;
              //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData}});

            }else{
              template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, localSectionData, request.application, request);
              sectionData.dataSource.data = dummyData;
              //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef}});

            }
      }else if(request.apiRef === "allPublicApis"){
            if(request.action === 'public_apis_by_category'){
                  let data = sectionData.dataSource.data;
            }
      }else if(request.apiRef === "request_initial_sections"){
          if(request.application !== undefined && request.application !== null && request.application !== ''){
                if(request.application === 'gini_home'){
                    console.log("+++++++++++++++++++++++++++++++++++++")

                    let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("all_sections").values;
                    let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
                    let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
                    //socket.emit("response-generic-portfolio", {initSections : sections, defaultStyle: defaultStyle, apiRef: request.apiRef});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                  }else if(request.application === 'restaurant_home'){
                    let allSections = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("all_sections").values;
                    let initSections = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("init_sections").values;
                    let defaultStyle = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data('default_style');
                    let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
                    //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
                    // {allSectionsData : sections, defaultStyle: defaultStyle});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                  }else if(request.application === 'music_home'){
                    console.log("========== calling music home application =============");
                    let allSections = MUSIC_APP_SERVICES.music_app_services.get_section_data("all_sections").values;
                    let initSections = MUSIC_APP_SERVICES.music_app_services.get_section_data("init_sections").values;
                    let defaultStyle = MUSIC_APP_SERVICES.music_app_services.get_section_data('default_style');
                    let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
                    //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
                    // {allSectionsData : sections, defaultStyle: defaultStyle});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                  }else if(request.application === 'gini_nearby_app'){
                    console.log("========== calling music home application =============");
                    let allSections = NEARBY_APP_SERVICES.nearby_app_services.get_section_data("all_sections").values;
                    let initSections = NEARBY_APP_SERVICES.nearby_app_services.get_section_data("init_sections").values;
                    let defaultStyle = NEARBY_APP_SERVICES.nearby_app_services.get_section_data('default_style');
                    let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
                   // socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
                    // {allSectionsData : sections, defaultStyle: defaultStyle});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                  }else if(request.application === 'shopping_home'){
                    console.log("========== calling music home application =============");
                    let allSections = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("all_sections").values;
                    let initSections = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("init_sections").values;
                    let defaultStyle = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data('default_style');
                    let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
                   // socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
                    // {allSectionsData : sections, defaultStyle: defaultStyle});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                  }else if(request.application === 'new_project'){
                   // console.log("========== calling new_project home application =============");
                    let allSections = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("all_sections").values;
                    let initSections = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("init_sections").values;
                    let defaultStyle = NEW_PROJECT_APP_SERVICES.app_services.get_section_data('default_style');
                    let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
                    // socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
                    // {allSectionsData : sections, defaultStyle: defaultStyle});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                  }else if(request.application === 'indStocks'){
                    console.log("========== calling ind_stocks home application =============");
                    let allSections = IND_STOCKS_APP_SERVICES.app_services.get_section_data("all_sections").values;
                    let initSections = IND_STOCKS_APP_SERVICES.app_services.get_section_data("init_sections").values;
                    let defaultStyle = IND_STOCKS_APP_SERVICES.app_services.get_section_data('default_style');
                    let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
                   // socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
                    // {allSectionsData : sections, defaultStyle: defaultStyle});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                  }else if(request.application === 'PORTFOLIO'){
                    let fileControllerPath = './server/'+request.application+'/portfolio.js';
                    let filePath = null;
                    let file = null;
                    if(request.fileName === 'default'){
                      filePath = './server/'+request.application+'/store/generic_portfolio_data.js';
                      file = {path: filePath, type: "utf8"};
                    }else{
                      filePath = './server/'+request.application+'/store/'+request.fileName+'.js';
                      file = {path: filePath, type: "utf8"};
                    }
                    console.log("===== filePath : ", filePath);
                    //let CURRENT_PORTFOLIO_DATA = require(filePath).portfolio_data;
                    // const CURRENT_PORTFOLIO_DATA = './server/'+request.application+'/controllers/portfolio.server.controller.js';
                    const CURRENT_PORTFOLIO_DATA = require('./server/'+request.application+'/controllers/portfolio.server.controller.js').sections_data;
                    console.log("====  CURRENT_PORTFOLIO_DATA : ", CURRENT_PORTFOLIO_DATA)
                    let allSections = CURRENT_PORTFOLIO_DATA.app_services.get_section_data("all_sections").values;
                    let initSections = CURRENT_PORTFOLIO_DATA.app_services.get_section_data("init_sections").values;
                    let defaultStyle = CURRENT_PORTFOLIO_DATA.app_services.get_section_data('default_style');
                    let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
                    const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}
                    console.log("======== before send responsePayload : 22222222 : ", responsePayload)
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: responsePayload });

                    // let initAllSectionData = CURRENT_PORTFOLIO_DATA['all_sections'].values;
                    // let settingsSectionData = CURRENT_PORTFOLIO_DATA['settings_section'].block.sections[0].parts;
                    // let defaultStyle = CURRENT_PORTFOLIO_DATA['default_style'];
                    //loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName, res);
                }else if(request.application === 'GINIMUSIC'){
                    // let filePath = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
                    let filePath = './server/GINIMUSIC/store/giniMusicApp.js';

                    console.log("===== filePath : ", filePath);
                    let GINI_MUSIC_DATA = require(filePath).portfolio_data;
                    console.log("===== GINI_MUSIC_DATA : ", GINI_MUSIC_DATA);
                    let initAllSectionData = GINI_MUSIC_DATA['all_sections'].values;
                    let settingsSectionData = GINI_MUSIC_DATA['settings_section'].block.sections[0].parts;
                    let defaultStyle = GINI_MUSIC_DATA['default_style'];
                    loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName, res);
                }else{
                    let dataFileName = request.application;
                    let dataFilePath = './server/'+request.application+'/store/'+request.fileName+'Data.js';

                    // let dataFilePath = './server/'+request.application+'/store/'+request.application+'Data.js';
                    // let x = './server/publicApis/store/publicApisApp.js';
                    console.log("dataFilePath :::::: ", dataFilePath);
                    let DATA = require(dataFilePath).portfolio_data;
                    let initAllSectionData = DATA['all_sections'].values;
                    let initSectionsData = DATA['init_sections'].values;

                    let settingsSectionData = DATA['settings_section'].block.sections[0].parts;
                    let defaultStyle = DATA['default_style'];
                    // loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);
                    loadPrimaryInitialComponents(initSectionsData, initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName, res);

                }
          }
      }else{
          let template = '';

          if(
            sectionData !== undefined &&
            sectionData !== null &&
            sectionData.dataSource !== undefined &&
            sectionData.dataSource !== null &&
            sectionData.dataSource.type !== undefined &&
            sectionData.dataSource.type !== null &&
            sectionData.dataSource.type === "API"
          ){
            console.log("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
            if(sectionData.dataSource && sectionData.dataSource.data && sectionData.dataSource.data !== null && sectionData.dataSource.data !== ''){
              if(request.edit){
                  let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                  template = res.template;
                  //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                }else{
                  template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                  if(request.apiRef === 'hereMapNearByRestaurant_section'){
                    console.log("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
                    // console.log("@@@@ 999999 \n: ", template);
                  }
                  //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                }
            }else{
                 CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_api_data(sectionData.dataSource.url, sectionData.dataSource.authorizationKey, sectionData.dataSource).then((data) => {
                console.log("@@@ Response from APIS : ", data);
                if(request.apiRef === "allPublicApis_section"){
                    console.log("**********************************");
                                        console.log("**********************************");
                    console.log("**********************************");
                    console.log("**********************************");

                   let futureKontests = [];
                   let runningKontests = [];
                   let playedKontests = [];
                   if(request.byCategory === 'future_contests' || request.byCategory === 'live_contests' || request.byCategory === 'played_contests'){
                       data.forEach((item, i) => {
                         let today = new Date();
                         let itemStartDate = new Date(item.start_time);
                         let itemEndDate = new Date(item.end_time);
                         let compareVal = today < itemStartDate;
                         if( (today < itemStartDate) && request.byCategory === 'future_contests'){
                              futureKontests.push(item)
                         }else if((today > itemStartDate && today < itemEndDate) && request.byCategory === 'live_contests'){
                              runningKontests.push(item);
                         }else if(request.byCategory === 'played_contests'){
                              playedKontests.push(item);
                         }
                       });
                       if(request.byCategory === 'future_contests'){
                          sectionData.dataSource.data = futureKontests;
                       }else if(request.byCategory === 'played_contests'){
                          sectionData.dataSource.data = playedKontests;
                       }else if(request.byCategory === 'live_contests'){
                          sectionData.dataSource.data = runningKontests;
                       }
                       console.log("@@@@@@@@@@@ futureKontests : ", futureKontests);
                       console.log("@@@@@@@@@@@ playedKontests : ", playedKontests);
                       console.log("@@@@@@@@@@@ runningKontests : ", runningKontests);
                       console.log("@@@@@@@@@@@ length : ", sectionData.dataSource.data.length);
                   }else{
                        sectionData.dataSource.data = data;
                   }

                }else if(request.apiRef === "kontestsApisLeftSideBarSearch_section"){
                   let filteredArr = [];
                   data.forEach((item, i) => {
                     let obj = {siteName: item[0], siteCode: item[1], siteSource: item[2]};
                     filteredArr.push(obj);
                   });
                   // data = filteredArr;
                   // console.log("@@@ filteredArr : ", filteredArr);
                   sectionData.dataSource.data = filteredArr;
                }else{
                  sectionData.dataSource.data = data;

                }

                if(request.edit){
                  let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                  template = res.template;
                  //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}});

                }else{
                  template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                  if(request.apiRef === 'hereMapNearByRestaurant_section'){
                    console.log("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
                    // console.log("@@@@ 999999 \n: ", template);
                  }
                  //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                   res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef}});

                }
                 })
            }
           

          }else if(
              sectionData !== undefined && sectionData !== null && sectionData !== '' &&
              sectionData.dataSource !== undefined &&
              sectionData.dataSource !== null &&
              sectionData.dataSource.type !== undefined &&
              sectionData.dataSource.type !== null &&
              sectionData.dataSource.type === "SECTION-LOCAL-STORAGE"
            ){
                                console.log("===== ************************ 88888888888888888888888 ********************========");

                  console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
                  // console.log("======  ****** ======= data : ", sectionData.sectionData)

                  if(sectionData.sectionData){
                      sectionData.dataSource.data = sectionData.sectionData;
                      request.payloadData.dataSource.data = data;
                      // data = sectionData.sectionData;
                  }
                  
                  
                  let template = '';
                  if(request.edit){
                    let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                    template = res.template;
                   // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData}});

                  }else{
                    template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                   // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                    res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef}});

                  }
            }else if(
            sectionData !== undefined && sectionData !== null && sectionData !== '' &&
            sectionData.dataSource !== undefined &&
            sectionData.dataSource !== null &&
            sectionData.dataSource.type !== undefined &&
            sectionData.dataSource.type !== null &&
            sectionData.dataSource.type === "DATA-SERVER"
          ){
              // console.log("=========== calling all public apis rad data ============");
              console.log("1111111111111111111111111@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
              let filePath = './server'+sectionData.dataSource.dataFilePath;
              console.log("++++++++++++++++++ file path ::: ", filePath);
              console.log("=== request.sectionname : ", request.sectionName)
              let rawData = require(filePath).rawData;
              // rawData = JSON.parse(JSON.stringify(rawData));
              // console.log("======= rawData : ", rawData);

              if(request.logoCategory && request.logoCategory !== 'All' && request.targetProperty !== ''){
                let filteredArr = [];
                  rawData.entries.forEach((item, index) => {
                    // console.log("==== item[request.targetProperty] : ", item[request.targetProperty.toLowerCase()])
                    // console.log("==== item['Author']: ", item['Author'.toLowerCase()])

                      // if(((item[request.targetProperty.toLowerCase()])?.toLowerCase()) === request.logoCategory.toLowerCase){
                      //                   console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")  

                      //   filteredArr.push(item)
                      // }
                      if(((item[request.targetProperty.toLowerCase()]) && ((item[request.targetProperty.toLowerCase()]).toLowerCase()) &&
                        ((item[request.targetProperty.toLowerCase()]).toLowerCase() === request.logoCategory.toLowerCase())
                      )){
                          filteredArr.push(item);
                      }
                  })
                  console.log("@@@@@@@@@@@@ filteredArr : ", filteredArr)
                  rawData = {count: 25, entries: filteredArr}
              }else{
                rawData = rawData;
              }

              if(request.sectionName === 'allMutualFundCategoryB5PlusMinusCollapseSidebar_section'){
                  console.log("========= allMutualFundCategoryCollapseSidebar ==========");
                  let modifiedCollapseData = JSON.parse(JSON.stringify([]));
                  // let collapseItemObj = {collapseItemTitle : '', collapseItemType: ''}
                  let keys = Object.keys(rawData)
                  console.log("===== mf data keys : ", keys)
                   if(keys){
                      // let dummyCollapseItemList []
                      keys.forEach((key, keyIndex) => {
                          let keyValue = JSON.parse(JSON.stringify(rawData[key]));
                          // console.log("=====33333334==== keyValue: ", keyValue)
                          let dummyCollapseItemList = JSON.parse(JSON.stringify([])); 
                          let collapseObj = JSON.parse(JSON.stringify({ collapseHeaderTitle: '', collapseBody: {collapseItemList: []}}));
                          let keyValueKeys = Object.keys(keyValue)
                          if(keyValueKeys){
                              keyValueKeys.forEach((keyValueKey, keyValueKeyIndex) => {
                                  let collapseItemObj = JSON.parse(JSON.stringify({collapseItemTitle : '', collapseItemType: '', toDataPath: ''}))
                                  let keyValueKeyValue = JSON.parse(JSON.stringify(keyValue[keyValueKey]))
                                  collapseItemObj.collapseItemTitle = keyValueKey.toString();
                                  collapseItemObj.collapseItemType = 'button';
                                  collapseItemObj.toDataPath = 'root:'+key.toString()+':'+keyValueKey.toString();
                                  dummyCollapseItemList.push(collapseItemObj)
                              })
                          }
                          collapseObj.collapseHeaderTitle = key;
                          collapseObj.collapseBody.collapseItemList = dummyCollapseItemList;
                          // console.log("===== collapseObj : ", JSON.stringify(collapseObj))
                          modifiedCollapseData.push(collapseObj)
                      })
                    }
     
                  sectionData.sectionData.collapseData = modifiedCollapseData;
                  // console.log("======== final modifiedCollapseData: ", JSON.stringify(modifiedCollapseData))
              }
              if(request.apiRef === "allPublicApis_section" && request.actionType === 'public_apis_by_category' && request.byCategory !== 'All'){
                    let filteredArr = [];
                    let data = rawData.entries;
                    data.forEach((item, i) => {
                        if(item.Category === request.byCategory){
                              filteredArr.push(item);
                        }
                    });
                    sectionData.dataSource.data = {count: filteredArr.length, entries: filteredArr};
                    // // console.log("@@@@@ 22222 sectionData.dataSource.data : ", sectionData.dataSource.data)
                    // let sName = 'allPublicApisGlobalSearch_section';
                    // sName = sName.split('_')[0];
               
                }else{
                    sectionData.dataSource.data = rawData;
              }

              if(request.actionType === 'global_filter_by_text'){
                  console.log("++++++++++++++++++++++++++++++++++++++++++++")
                  let filterByTextDataArr = []
                  let arrData = rawData?.entries;
                  arrData.forEach((item, index) => {
                      const itemKeys = Object.keys(item)
                      itemKeys.forEach((element, index) => {
                        if((typeof(item[element]) === "number" || typeof(item[element]) === "string")){
                            if(typeof(item[element]) === 'number'){
                                if((item[element].toString().indexOf(request.searchQuery) != -1)){
                                  filterByTextDataArr.push(item)
                                }
                            }else{
                                if((item[element].indexOf(request.searchQuery) !== -1)){
                                  filterByTextDataArr.push(item)
                                }
                            }
                            
                        }
                      })
                  })
                  sectionData.dataSource.data = {count: filterByTextDataArr.length, entries: filterByTextDataArr};;
              }

              let template = ''; 
              if(request.edit){
                let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                template = res.template;
                //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
                res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData}});

              }else{
                console.log("4444444444444444444444444@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

                template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
                //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
                res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef}});

              }
          }else{
            console.log("============= 8888888888888 ================")
            if(request.edit){
              let genericTemplateResponse = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
              template = genericTemplateResponse.template;
              // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: genericTemplateResponse.templateData}});

            }else{
              template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
              //socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
              res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef}});

            }
          }
      }

});

app.post('/fetchInitSections', (req, res) => {
  console.log("=========== *************** calling fetchSectionsData routes =============");
  console.log("=========== calling request-gini-home-initial-sections ===========");
  console.log("111111111111111111111111111111111111111111111111111111")
  const request = req.body;
  const response = res;
  console.log("***********  request : ", request);
  let responsePayload = {
    initSections: '',
    allSectionsData: '',
    defaultStyle: '',
    apiRef: ''
  }
  if(request && request.application !== undefined && request.application !== null && request.application !== ''){
      if(request.application === 'gini_home'){
          let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("all_sections").values;
          let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
          let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-generic-portfolio", {initSections : sections, defaultStyle: defaultStyle, apiRef: request.apiRef});
          responsePayload.initSections = sections;
          responsePayload.allSectionsData = giniHomeAllSectionsData;
          responsePayload.defaultStyle = defaultStyle;
          // responsePayload.apiRef = request.apiRef;
          console.log(" ============== responsePayload : ", responsePayload)
          response.status(201).json({ status: "Success", payload: responsePayload });
          // res.send(responsePayload)
          // response.status(201).json({ status: "Success", received: responsePayload }).end();
          // response.send(JSON.stringify(responsePayload))
        }else if(request.application === 'restaurant_home'){
          let allSections = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("all_sections").values;
          let initSections = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("init_sections").values;
          let defaultStyle = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data('default_style');
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
          const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef};
          response.status(200).json({ status: "Success", payload: responsePayload });

          // {allSectionsData : sections, defaultStyle: defaultStyle});
      }else if(request.application === 'music_home'){
          console.log("========== calling music home application =============");
          let allSections = MUSIC_APP_SERVICES.music_app_services.get_section_data("all_sections").values;
          let initSections = MUSIC_APP_SERVICES.music_app_services.get_section_data("init_sections").values;
          let defaultStyle = MUSIC_APP_SERVICES.music_app_services.get_section_data('default_style');
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
          const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef};
          response.status(200).json({ status: "Success", payload: responsePayload });

          // {allSectionsData : sections, defaultStyle: defaultStyle});
      }else if(request.application === 'gini_nearby_app'){
          console.log("========== calling music home application =============");
          let allSections = NEARBY_APP_SERVICES.nearby_app_services.get_section_data("all_sections").values;
          let initSections = NEARBY_APP_SERVICES.nearby_app_services.get_section_data("init_sections").values;
          let defaultStyle = NEARBY_APP_SERVICES.nearby_app_services.get_section_data('default_style');
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
          const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef};
          response.status(200).json({ status: "Success", payload: responsePayload });
          // {allSectionsData : sections, defaultStyle: defaultStyle});
      }else if(request.application === 'shopping_home'){
          console.log("========== calling music home application =============");
          let allSections = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("all_sections").values;
          let initSections = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("init_sections").values;
          let defaultStyle = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data('default_style');
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
          const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef};
          response.status(200).json({ status: "Success", payload: responsePayload });
          // {allSectionsData : sections, defaultStyle: defaultStyle});
      }else if(request.application === 'new_project'){
          console.log("========== calling new_project home application =============");
          let allSections = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("all_sections").values;
          let initSections = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("init_sections").values;
          let defaultStyle = NEW_PROJECT_APP_SERVICES.app_services.get_section_data('default_style');
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
          const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef};
          response.status(200).json({ status: "Success", payload: responsePayload });
          // {allSectionsData : sections, defaultStyle: defaultStyle});
      }else if(request.application === 'indStocks'){
          console.log("========== calling ind_stocks home application =============");
          let allSections = IND_STOCKS_APP_SERVICES.app_services.get_section_data("all_sections").values;
          let initSections = IND_STOCKS_APP_SERVICES.app_services.get_section_data("init_sections").values;
          let defaultStyle = IND_STOCKS_APP_SERVICES.app_services.get_section_data('default_style');
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          //socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
          const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef};
          response.status(200).json({ status: "Success", payload: responsePayload });
          // {allSectionsData : sections, defaultStyle: defaultStyle});
      }else if(request.application === 'PORTFOLIO'){
          let fileControllerPath = './server/'+request.application+'/portfolio.js';
          let filePath = null;
          let file = null;
          if(request.fileName === 'default'){
            filePath = './server/'+request.application+'/store/generic_portfolio_data.js';
            file = {path: filePath, type: "utf8"};
          }else{
            filePath = './server/'+request.application+'/store/'+request.fileName+'.js';
            file = {path: filePath, type: "utf8"};
          }
          console.log("===== filePath : ", filePath);
          const CURRENT_PORTFOLIO_DATA = require('./server/'+request.application+'/controllers/portfolio.server.controller.js');
          console.log("====  CURRENT_PORTFOLIO_DATA : ", CURRENT_PORTFOLIO_DATA)
          let allSections = CURRENT_PORTFOLIO_DATA.app_services.get_section_data({...request, sectionName: 'all_sections'}).values;
          let initSections = CURRENT_PORTFOLIO_DATA.app_services.get_section_data({...request, sectionName: 'init_sections'}).values;
          let defaultStyle = CURRENT_PORTFOLIO_DATA.app_services.get_section_data({...request, sectionName: 'default_style'});
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          const responsePayload = {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}
          console.log("======== before send responsePayload : 333333333333 : ", responsePayload)
          res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: responsePayload });

      }else if(request.application === 'GINIMUSIC'){
          // let filePath = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
          let filePath = './server/GINIMUSIC/store/giniMusicApp.js';

          console.log("===== filePath : ", filePath);
          let GINI_MUSIC_DATA = require(filePath).portfolio_data;
          console.log("===== GINI_MUSIC_DATA : ", GINI_MUSIC_DATA);
          let initAllSectionData = GINI_MUSIC_DATA['all_sections'].values;
          let settingsSectionData = GINI_MUSIC_DATA['settings_section'].block.sections[0].parts;
          let defaultStyle = GINI_MUSIC_DATA['default_style'];
          loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);
      }else{
          console.log("+++++++++++++++++ testing public apis application +++++++++++")
          console.log("request :: ", request)
          let dataFileName = request.application;
          let dataFilePath = './server/'+request.application+'/store/'+request.fileName+'Data.js';

          // let dataFilePath = './server/'+request.application+'/store/'+request.application+'Data.js';
          // let x = './server/publicApis/store/publicApisApp.js';
          console.log("dataFilePath :111 ", dataFilePath);
          let DATA = require(dataFilePath).sections_data;
          let initAllSectionData = DATA['all_sections'].values;
          let initSectionsData = DATA['init_sections'].values;
          let settingsSectionData = DATA['settings_section'].block.sections[0].parts;
          // let defaultStyle = DATA['default_style'];
          console.log("+++++++++++++++++ testing public apis application +++++++++++")

          let allSections = DATA['all_sections'];
          let initSections =  DATA['init_sections'];
          let defaultStyle = DATA['default_style'];
          let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
          const responsePayload = {initSections : initSections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef}
          console.log("======== before send responsePayload ********** 111111111: ", responsePayload)
          res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: responsePayload });

          //loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);
          //loadPrimaryInitialComponents(initSectionsData, initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);

      }
  }
  
  // const responsePayload =  {initSections : sections, defaultStyle: defaultStyle}
  // console.log(" ============== responsePayload : ", JSON.parse(responsePayload))
  // res.send(responsePayload)
  // res.status(201).json({ status: "Success", received: responsePayload });

});

app.post('/askChatGpt', (request, response) => {
  console.log("=============== calling ask gpt ai response ================")
  const data = request.body;
  console.log("===== data : ", data)
  console.log("===== input gpt text : ", data.askChatGptAiInputText)
  let finalGptTemplate = '';
  if(data.askChatGptAiInputText !== ''){
      const response = openai.responses.create({
        model: "gpt-4o-mini",
        input: data.askChatGptAiInputText,
        store: true,
    });
      response.then((result) => {
      console.log("===== openai input text : ", data.askChatGptAiInputText)
      console.log("====== openai response : ");
      console.log(result.output_text)
      let chatObject = {
          gptQuery: data.askChatGptAiInputText,
          gptResponse: result.output_text
      }
      updateChatGptHistoryLocally(chatObject)
      finalGptTemplate = getUpdatedChatGptTemplate()
      
      //socket.emit("`response-generic-askchatgptai`", {requestData: data, responseTemplate: finalGptTemplate});
      response.status(200).json({ status: "Success", payload: {requestData: data, responseTemplate: finalGptTemplate}});

    });
  }
});

// app.post('/postdata', (req, res) => {
//   console.log("in server : Data received from client:", req.body);
//   console.log("=========== calling request-gini-home-initial-sections ===========");
//   let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("init_sections").values;
//   let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
//   let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
  
//   //ocket.emit("response-gini-home-initial-sections", {initSections : sections, defaultStyle: defaultStyle});
//   const responsePayload =  {initSections : sections, defaultStyle: defaultStyle}
//   res.status(201).json({ status: "Success", received: responsePayload });

// });

app.use('/me', function(req, res) {
    res.sendFile('./client/final_portfolio.html');
});
app.use('/', function(req, res) {
    // res.sendFile('./client/GINI/gini_home_page.html');
    res.sendFile(path.join(__dirname + '/client/GINI/gini_home_page.html'));
      // res.sendFile(path.join(__dirname + '/client/GINI/gini_home_page_v2.html'));

});

app.use((req, res, next) => {
  const err = new Error(`Route ${req.originalUrl} not found`);
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500 || 400;
  res.status(204).end();
  // res.status(statusCode).json({
  //   status: 'error',
  //   message: err.message || 'Internal Server Error',
  // });
});



//==========================================================================

  // var axios = require('axios');

  // var config = {
  //   method: 'get',
  //   url: 'https://v3.football.api-sports.io/leagues',
  //   headers: {
  //     'x-rapidapi-key': 'd6a1ff98fb3998f676aac31c96c68217',
  //     'x-rapidapi-host': 'v3.football.api-sports.io'
  //   }
  // };

  // axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

   
  // const response = openai.responses.create({
  //     model: "gpt-4o-mini",
  //     input: "Husband of Mamata Banerjee",
  //     store: true,
  // });

  // response.then((result) => {
  //   console.log("====== openai response : ");
  //   console.log(result.output_text)
  // });

  //==========================================================================


function readFile(file){
    fs.readFile(file.path, file.type, (err, data) => {
        if(err){
            console.log("@@@ err occured when reading the file : ", err);
        }else{
            console.log("@@@ type of file data : ", typeof(data));
            console.log("@@@ data : ", data);
        }
    });
}

function loadPrimaryInitialComponents(initSectionsData, initAllSectionData, settingsSectionData, defaultStyle, socket, application, fileName, res){
  console.log("-------------------- load  primary initial  Components ----------------------");
  // console.log("----------------- filteredSections :: ", filteredInitialSections);
  let sections = {values: initSectionsData, sectionStyle: 'background: #F1F3F6;'}
  LOCAL_STORAGE.initialSections = sections;
  //socket.emit("response-initial-sections-data", {allSectionsData : sections, defaultStyle: defaultStyle, application: application, fileName: fileName});
  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {allSectionsData : sections, defaultStyle: defaultStyle, application: application, fileName: fileName}});

}

function _self_sections_data_by_app_filepath(argument){
    console.log("======= calling self sections data by file path =======");
    let filepath = argument.filepath;
    let sectionName = argument.sectionName;
    console.log("==== filepath: ", filepath)
    console.log("==== sectionName : ", sectionName)
    if(argument && argument.appName && argument.appFilePath && sectionName){
    let filePath = './server/'+argument.appName+argument.appFilePath;
    let rawData = require(filePath).rawData;
    console.log("==== rawData : ", rawData);
    // console.log("==== all_sections : ", all_sections);
      console.log("++++++++++++++++++ file path : ", filePath);
      let ALL_SECTIONS_collection = rawData['all_sections'].values;
          console.log("==== ALL_SECTIONS_collection : ", ALL_SECTIONS_collection);

      ALL_SECTIONS_collection.forEach((item, itemIndex) => {
        if(item.section.name === sectionName) return item;
      });

    }
    
}

function loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, application, fileName, res){
  console.log("-------------------- loadInitialComponents ----------------------");
  let filteredInitialSections = [];
  let header = null;
  let settings = null;

  settingsSectionData.forEach((item, index) => {
      if(item.mapToSection !== undefined && item.mapToSection !== null && item.mapToSection !== '' && (item.isSectionToggle && item.isSectionToggle.state && item.isSectionToggle.state === true)){
          initAllSectionData.forEach((element, index) => {
              if(element.section.name === 'header' && header === null){
                  header = element;
              }
              if(element.section.name === 'settings' && settings === null){
                  settings = element;
              }
              if(item.mapToSection === element.section.name){
                  filteredInitialSections.push(element);
              }
          });
      }
  });

  filteredInitialSections.push(header);
  filteredInitialSections.push(settings);

  // console.log("----------------- filteredSections :: ", filteredInitialSections);
  let sections = {values: filteredInitialSections, sectionStyle: 'background: #F1F3F6;'}
  LOCAL_STORAGE.initialSections = sections;
  //socket.emit("response-initial-sections-data", {allSectionsData : sections, defaultStyle: defaultStyle, application: application, fileName: fileName});
  res.status(200).json({ status: "Success", text: "I am from /fetchGenericSections...", payload: {allSectionsData : sections, defaultStyle: defaultStyle, application: application, fileName: fileName}});

}


io.on('connection', function(socket){

    console.log('A user connected..........');
    // let initAllSectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('all_sections').values;
    // let settingsSectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('settings_section').block.sections[0].parts;
    // let defaultStyle = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('default_style');

    // socket.on("request-initial-sections-data", (data) =>{
    //     let filteredInitialSections = [];
    //     let header = null;
    //     let settings = null;
    //
    //     settingsSectionData.forEach((item, index) => {
    //         if(item.mapToSection !== undefined && item.mapToSection !== null && item.mapToSection !== ''){
    //             initAllSectionData.forEach((element, index) => {
    //                 if(element.section.name === 'header' && header === null){
    //                     header = element;
    //                 }
    //                 if(element.section.name === 'settings' && settings === null){
    //                     settings = element;
    //                 }
    //                 if(item.mapToSection === element.section.name){
    //                     filteredInitialSections.push(element);
    //                 }
    //             });
    //         }
    //     });
    //     filteredInitialSections.push(header);
    //     filteredInitialSections.push(settings);
    //
    //
    //     // console.log("!!!! filteredSections :: ", filteredInitialSections);
    //     let sections = {values: filteredInitialSections, sectionStyle: 'background: #F1F3F6;'}
    //     LOCAL_STORAGE.initialSections = sections;
    //     socket.emit("response-initial-sections-data", {allSectionsData : sections, defaultStyle: defaultStyle});
    // })

    // socket.emit("client-initial-setup", {allSectionsData : initAllSectionData});

    function onLoadServer(){
        console.log("=========================  initial application load ==========================");
        let filePath = './server/PORTFOLIO/store/generic_portfolio_data.js';
        console.log("====== filePath : ", filePath);
        let CURRENT_PORTFOLIO_DATA = require(filePath).portfolio_data;
        let initAllSectionData = CURRENT_PORTFOLIO_DATA['all_sections'].values;
        // let settingsSectionData = CURRENT_PORTFOLIO_DATA['settings_section'].block.sections[0].parts;
        // let defaultStyle = CURRENT_PORTFOLIO_DATA['default_style'];
        socket.emit("client-initial-setup", {allSectionsData : initAllSectionData});
        // loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);
    };
    //onLoadServer();

    function getSectionDatabyApplication(application, sectionName){
        console.log("!!! sectionName : ", sectionName);
        let dataFilePath = './server/'+application+'/store/'+application+'Data.js';
        let DATA = require(dataFilePath).portfolio_data;
        return DATA[sectionName];
    }

    // ========= UN USED SECTION ===================
    // socket.on("request-final-portfolio-sections", () => {
    //       socket.emit("response-final-portfolio-sections", {initSections: LOCAL_STORAGE.initialSections, defaultStyle: defaultStyle});
    // });

    socket.on("test-request", () => {
        socket.emit("test-response", {template : 'rajib karmakar'});
    })

    // ========= UN USED SECTION ===================
    socket.on("request-generic-action_by_category", (request) => {
      console.log("======= cxalling generic action by category  ========");
      console.log("=== data : ", request)

      let sectionData = '';
      request.sectionName = request.targetSectionName;
      if(request.targetSectionName !== undefined && request.targetSectionName !== null && request.targetSectionName !== ''){
        sectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.new_get_section_data(request);
        sectionData.block.sections[0].dataSource.dataPath = 'root>'+request.modifyInnerDataPath;
        // console.log("=== section data : ", sectionData);
        // console.log("===== sectionData.block.sections[0].dataSource.dataPath : ", sectionData.block.sections[0].dataSource.dataPath);
      }
      let filePath = './server'+sectionData.dataSource.dataFilePath;
      let rawData = require(filePath).rawData;
      // console.log("++++++++++++++++++ file path : ", filePath);
      sectionData.dataSource.data = rawData;
      request.sectionData.dataSource.data = rawData;
      let template = '';
      if(request.edit){
        // let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, rawData, request.application, request);
        // template = res.template;
        // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
      }else{
        template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
        // console.log("========== template : ", template);
        // let self_all_sections_data = _self_sections_data_by_app_filepath({appName: 'IND_STOCKS', appFilePath: '/store/indStocksData.js', sectionName: request.sectionName });
        socket.emit("response-generic-portfolio", {template : template, blockId: 'indianApiMutualFundByCategory', templateId: 'indianApiMutualFundByCategory', loaderId: 'indianApiMutualFundByCategory', apiRef : request.apiRef});
      }
    })

    // socket.on("request-generic-portfolio", (request) => {
    //   console.log("@@@@@@@@@@@@@@@ **************** generic request :: ", request);

    //   let sectionData = null;
    //   if(request.actionType === 'update_section_apis_url'){
    //       let sectionData = getSectionDatabyApplication(request.application, request.sectionName);
    //       if(sectionData.dataSource.type === 'API'){
    //           sectionData.dataSource.url = request.siteUrl;
    //           console.log("=== after update url : ", sectionData.dataSource.url);
    //         }
    //   }

    //   if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
    //     sectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.new_get_section_data(request);
    //   }

    //   // if(request.apiRef === "whydYoutubePopMusic_section"){
    //   //     console.log("^^^^^^^^^^^^^^^^^^^^^^^   sectionData :: ", sectionData);
    //   // }

    //   if(request.apiRef === "about_section" ||
    //       request.apiRef === 'facts_section' ||
    //       request.apiRef === 'skills_section' ||
    //       request.apiRef === 'education_section' ||
    //       request.apiRef === 'workexp_section' ||
    //       request.apiRef === 'services_section' ||
    //       request.apiRef === 'languages_section' ||
    //       request.apiRef === 'contacts_section' ||
    //       request.apiRef === 'projects_section' ||
    //       request.apiRef === 'activities_section' ||
    //       request.apiRef === 'settings_section' ||
    //       request.apiRef === 'products_section' ||
    //       request.apiRef === 'brand_section' ||
    //       request.apiRef === 'aboutRestaurant_section' ||
    //       request.apiRef === 'mobileSideNavBar_section'

    //     // request.apiRef === 'specialMenu_section'
    //   ){
    //       let template = '';
    //       if(request.edit){
    //         let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //         template = res.template;
    //         socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //       }else{
    //         if(request.apiRef === 'mobileSideNavBar_section'){
    //           template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //           socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //           return;
    //         }
    //         template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //         socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //       }
    //   }else if(request.apiRef === 'headerNav_section'){
    //     console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXX request ::  ", request)
    //     let nav = null;
    //     // console.log("@@@@@@@@@@@@@ music  nav val : ", nav);

    //     if(request.application === 'gini_home'){
    //         nav = GINI_HOME.gini_home_processing.get_section_data("headerNav_section");
    //     }else if(request.application === 'restaurant_home'){
    //         nav = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("headerNav_section");
    //     }else if(request.application === 'music_home'){
    //         nav = MUSIC_APP_SERVICES.music_app_services.get_section_data("headerNav_section");
    //         console.log("@@@@@@@@@@@@@ music  nav val : ", nav);
    //     }else if(request.application === 'shopping_home'){
    //         nav = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("headerNav_section");
    //         console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
    //     }else if(request.application === 'new_project'){
    //         nav = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("headerNav_section");
    //         console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
    //     }else if(request.application === 'indStocks'){
    //         console.log("======= calling ind stocks data to generate dynamic html =======");
    //         nav = IND_STOCKS_APP_SERVICES.app_services.get_section_data("headerNav_section");
    //         console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
    //     }else if(request.application === 'GINIMUSIC'){
    //         let filePath = './server/GINIMUSIC/store/giniMusicApp.js';
    //         let GINI_MUSIC_DATA = require(filePath).portfolio_data;
    //         console.log("===== GINI_MUSIC_DATA : ", GINI_MUSIC_DATA);
    //         nav = GINI_MUSIC_DATA[request.sectionName];

    //         // nav = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("headerNav_section");
    //         // console.log("@@@@@@@@@@@@@ shopping  nav val : ", nav);
    //     }else{
    //       let dataFileName = request.application;
    //       let dataFilePath = './server/'+request.application+'/store/'+request.application+'Data.js';
    //       // let x = './server/publicApis/store/publicApisApp.js';
    //       // console.log("dataFilePath : ", dataFilePath);
    //       let DATA = require(dataFilePath).portfolio_data;
    //       nav = DATA[request.sectionName];
    //       console.log("33333333333333333333333333333333333333333333333333333333333333333333");
    //       console.log("333333333333333  nav : ", nav);

    //       let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, nav, request.application, request);
    //       socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //       return
    //     }
    //     let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_header_navigation_template(nav, request.application);
    //     socket.emit("response-generic-portfolio", {template : template, blockId: null, templateId: 'header', loaderId: null, apiRef: request.apiRef});

    //   }else if(request.apiRef === 'latest_work_section'){
    //       let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.latest_work_section(request.apiRef);
    //       // console.log("@@@ template :: ", template);
    //       socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId });

    //   }else if(request.apiRef === 'work_section'){
    //       let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.work_section("work_section", request.logoCategory);
    //       // console.log("@@@ template :: ", template);
    //       socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

    //   }else if(
    //             request.apiRef === 'menu_section'
    //             || request.apiRef === 'specialMenuContainer_section'
    //             || request.apiRef === 'newsByCategory_section'
    //             || request.apiRef === "entertainmentNewsByCategoryContainer_section"
    //             || request.apiRef === 'educationalNewsByCategoryContainer_section'
    //             || request.apiRef === "medicalNewsByCategoryContainer_section"
    //             || request.apiRef === "newsApiTopArticlesNewsByCategoryContainer_section"
    //             || request.apiRef === "newsApiTopJournalNewsByCategoryContainer_section"
    //             || request.apiRef === "hereMapPlacesByCategoryContainer_section"
    //             || request.apiRef === "hereMapPlacesByTransportPlacesCategoryContainer_section"
    //             || request.apiRef === "hereMapPlacesByTransportPlacesCategoryContainer_section"
    //             || request.apiRef === "hereMapPlacesByAccomodationPlacesCategoryContainer_section"
    //             || request.apiRef === "hereMapPlacesByEmmergencyServicePlacesCategoryContainer_section"
    //             || request.apiRef === "hereMapPlacesByShoppingCategoryContainer_section"
    //             || request.apiRef === "indStocksMutualFundsCategory_section"
    //             || request.apiref === 'genericActionButton_section'
    //             // || request.apiRef === 'customFixedMenuSidebar_section'


    //           ){
    //         let categoryData = null;
    //         if(sectionData !== undefined && sectionData !== null){
    //           console.log("11111111111111  :: ", request);
    //           categoryData = sectionData[request.category];
    //         }
    //         let url = '';
    //         if(
    //           categoryData !== undefined && categoryData !== null && categoryData !== '' &&
    //           categoryData.dataSource !== undefined &&
    //           categoryData.dataSource !== null &&
    //           categoryData.dataSource.type !== undefined &&
    //           categoryData.dataSource.type !== null &&
    //           categoryData.dataSource.type === "API"
    //         ){
    //           console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //           let requestOption;
    //           if(sectionData.defaults !== undefined){
    //               let defaultsApiParams = '';
    //               for(let key in sectionData.defaults){
    //                   defaultsApiParams += '&'+key+'='+sectionData.defaults[key];
    //               }
    //               url = categoryData.dataSource.url+defaultsApiParams;
    //           }else{
    //             url = categoryData.dataSource.url;
    //           }
    //           CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_api_data(url).then((data) => {
    //               categoryData.dataSource.data = data;
    //               consdole.log("======  ****** ======= data : ", data)
    //               let template = '';
    //               if(request.edit){
    //                 let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //                 template = res.template;
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //               }else{
    //                 template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //               }
    //           })
    //         }else if(
    //           categoryData !== undefined && categoryData !== null && categoryData !== '' &&
    //           categoryData.dataSource !== undefined &&
    //           categoryData.dataSource !== null &&
    //           categoryData.dataSource.type !== undefined &&
    //           categoryData.dataSource.type !== null &&
    //           categoryData.dataSource.type === "SECTION-LOCAL-STORAGE"
    //         ){
    //               console.log("===== ************************ 88888888888888888888888 ********************========");
    //               if(categoryData.sectionData){
    //                   data = categoryData.sectionData;
    //               }
                  
    //               categoryData.dataSource.data = data;
    //               request.sectionData.dataSource.data = data;
    //               request.payloadData.dataSource.data = data;
    //               consdole.log("======  ****** ======= data : ", data)
    //               let template = '';
    //               if(request.edit){
    //                 let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //                 template = res.template;
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //               }else{
    //                 template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //               }
    //         }else if(
    //           categoryData !== undefined && categoryData !== null && categoryData !== '' &&
    //           categoryData.dataSource !== undefined &&
    //           categoryData.dataSource !== null &&
    //           categoryData.dataSource.type !== undefined &&
    //           categoryData.dataSource.type !== null &&
    //           categoryData.dataSource.type === "DATA-SERVER"
    //         ){
    //             // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    //             // console.log("@@@@ categoryData : ", categoryData);
    //             let filePath = './server'+categoryData.dataSource.dataFilePath;
    //             let rawData = require(filePath).rawData;
    //             console.log("++++++++++++++++++ file path : ", filePath);
    //             // console.log("======= rawData : ", rawData);

    //             categoryData.dataSource.data = rawData;
    //             request.sectionData.dataSource.data = data;
    //             let template = '';
    //             if(request.edit){
    //               let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, rawData, request.application, request);
    //               template = res.template;
    //               socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //             }else{
    //               template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //               socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //             }
    //         }else{
    //           // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    //           let categoryData = sectionData[request.category];
    //           if(categoryData !== undefined){
    //             let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //             socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //           }
    //         }
    //     }else if(request.apiRef === 'workcat_section'){
    //       let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.workcat_list_section(request.apiRef);
    //       // console.log("@@@ template :: ", template);
    //       socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

    //   }else if(request.apiRef === 'header_section'){
          
    //       // let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.header_section(request.apiRef, request.dynamic_header_menus, request.edit);
    //       let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.header_section(request);
    //       // console.log("@@@ template :: ", template);
    //       socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});
    //   }else if(request.apiRef === 'customFixedMenuSidebar_section' || request.apiRef === 'customRightFixedSidebar_section'){
    //         console.log("===== ************************ 88888888888888888888888 ********************========");
    //         console.log("===== ************************ 88888888888888888888888 ********************========");
    //         console.log("========== sectionData : ", sectionData)
    //     if(sectionData !== undefined && sectionData !== null && sectionData !== '' &&
    //           sectionData.dataSource !== undefined &&
    //           sectionData.dataSource !== null &&
    //           sectionData.dataSource.type !== undefined &&
    //           sectionData.dataSource.type !== null &&
    //           sectionData.dataSource.type === "SECTION-LOCAL-STORAGE"
    //         ){
    //               let data = '';
    //               console.log("===== ************************ 88888888888888888888888 ********************========");
    //               if(sectionData.sectionData){
    //                   data = sectionData.sectionData;
    //               }
                  
    //               sectionData.dataSource.data = data;
    //               sectionData.dataSource.data = data;
    //               // request.payloadData = data;
    //               // console.log("======  ****** ======= data : ", data)
    //               let template = '';
    //               if(request.edit){
    //                 let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //                 template = res.template;
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //               }else{
    //                 template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping._getCustomFixedMenuSidebar_section_template(request);

    //                 // template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //               }
    //         }
         
    //   }else if(request.apiRef && request.apiRef === 'customFixedDynamicMixedMenuSidebar_section' || request.apiRef ==='customFixedDynamicMixedMenuSidebarChatGPTAI_section'){
    //         console.log("===== ************************ 88888888888888888888888 ********************========");
    //         console.log("===== ************************ 88888888888888888888888 ********************========");
    //         console.log("========== sectionData : ", sectionData)
    //     if(sectionData !== undefined && sectionData !== null && sectionData !== '' &&
    //           sectionData.dataSource !== undefined &&
    //           sectionData.dataSource !== null &&
    //           sectionData.dataSource.type !== undefined &&
    //           sectionData.dataSource.type !== null &&
    //           sectionData.dataSource.type === "SECTION-LOCAL-STORAGE"
    //         ){
    //               let data = '';
    //               console.log("===== ************************ 88888888888888888888888 ********************========");
    //               if(sectionData.sectionData){
    //                   data = sectionData.sectionData;
    //                   request.sectionData = sectionData;
    //               }

    //               sectionData.dataSource.data = data;
    //               sectionData.dataSource.data = data;
    //               // request.payloadData = data;
    //               // console.log("======  ****** ======= data : ", data)
    //               let template = '';
    //               if(request.edit){
    //                 // let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //                 // template = res.template;
    //                 // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //               }else{
    //                 template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping._getCustomMixedDynamicFixedMenuSidebar_section_template(request);

    //                 // template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //               }
    //         }
         
    //   }else if(request.apiRef === 'typed_section'){
    //       let data = null;
    //       if(request.application === 'gini_home'){
    //         // data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
    //         data = GINI_HOME.gini_home_processing.get_section_data('typed_section');
    //       }else if(request.application === 'restaurant_home'){
    //         data = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data('typed_section');
    //         // data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
    //       }else{
    //         data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
    //       }
    //       // console.log("@@@ template :: ", template);
    //       socket.emit("response-generic-portfolio", {data : data, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

    //   }else if(request.apiRef === "update_section_data"){
    //       CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_section_data(request.sectionData);
    //   }else if(request.apiRef === "update_block_data"){
    //       console.log("!!!!!!!!!!!!!!! sectionData :: ", sectionData);
    //       CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_block_data(request, sectionData);
    //       if(request.actionType === "add_item_on_top" ||
    //       request.actionType === "add_item_on_below" ||
    //       request.actionType === "delete_section" ||
    //       request.actionType === "add_section_left" ||
    //       request.actionType === "add_section_right" ||
    //       request.actionType === "add_similar_item_on_below" ||
    //       request.actionType === "add_similar_item_on_top" ){
    //           let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, true, sectionData, request.application, request);
    //           let template = res.template;
    //           console.log("@@@ section name :: ", request.elementId);
    //           let secName = request.sectionName.split("_")[0];
    //           // console.log("@@@ secName :: ", secName);
    //           socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, templateData: res.templateData, elementId: request.elementId});
    //       }else if(request.actionType === "edit_item_style" || request.actionType === "edit_part_style"){
    //           let style = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_block_data(request, sectionData);
    //           socket.emit("response-action-edit-style", {style : style});
    //       }else if(request.actionType === "settings_drag_and_drop"){
    //           let secName = request.sectionName.split("_")[0];
    //           console.log("@@@ secName :: ", secName);
    //           console.log("@@@ sectionData :: ", sectionData);
    //           if(secName === 'settings'){
    //               let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, false, sectionData, request.application, request);;
    //               socket.emit("response-generic-portfolio", {template : template, blockId: null, templateId: null, loaderId: null, apiRef: 'settings_section'});
    //           }else{
    //               let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, true, sectionData, request.application, request);
    //               let template = res.template;
    //               socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, });
    //           }
    //       }
    //   }else if(request.apiRef === "update_initial_sections"){
    //       LOCAL_STORAGE.initialSections = request.updatedInitialSections;
    //       let response = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_initial_sections(request);
    //       socket.emit("response-generic-portfolio", {apiRef : request.apiRef});
    //   }else if(request.apiRef === "update_defaults_settings"){
    //     console.log("@@@ sectionData :: ", sectionData);
    //     let val = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_defaults_settings(request);
    //         if(request.sectionName === 'newsByCategory_section'){
    //             console.log("@@@ 6666  category : ", request.category);
    //             let categoryData = sectionData[request.category.toString()];
    //             let secName = request.sectionName.split("_")[0];
    //               console.log("@@@ 77777 categoryData : ", categoryData);
    //             if(
    //               categoryData !== undefined && categoryData !== null && categoryData !== '' &&
    //               categoryData.dataSource !== undefined &&
    //               categoryData.dataSource !== null &&
    //               categoryData.dataSource.type !== undefined &&
    //               categoryData.dataSource.type !== null &&
    //               categoryData.dataSource.type === "API"
    //             ){
    //               CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_api_data(categoryData.dataSource.url).then((data) => {
    //                   categoryData.dataSource.data = data;
    //                   let template = '';
    //                   if(request.edit){
    //                     let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //                     template = res.template;
    //                     socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //                   }else{
    //                     // console.log("@@@ secname : ", secName);
    //                     // console.log("@@@@ template : ", 'custom_'+secName+'_template');
    //                     // console.log("@@@@ block : ", 'custom_'+secName+'_block');

    //                     template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, categoryData, request.application, request);
    //                     // socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //                     socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: false, apiRef : request.apiRef });

    //                   }
    //             })
    //           }
    //         }

    //   }else if(request.apiRef === "update_theme"){
    //       CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_theme(request);
    //   }else if(request.apiRef === "theme_section"){
    //       console.log("======= calling theme section template =========");
    //       let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //       // let data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
    //       // console.log("@@@ template :: ", template);
    //       socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

    //   }else if(request.apiRef === "get_section_template"){
    //       if(request.actionType === 'section_template'){
    //           // CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, request.edit);
    //           let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, request.edit, sectionData, request.application, request);
    //           socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //       }
    //   }else if(request.apiRef === 'create_new_section'){
    //       let updatedAllSections = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.create_new_section(request);
    //       let defaultStyle = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_application_default_style(request);
    //       // /LOCAL_STORAGE.initialSections = sections;
    //       let sections = {values: updatedAllSections.allSectionsData, sectionStyle: 'background: #F1F3F6;'}
    //       socket.emit("response-initial-sections-data", {allSectionsData : sections, defaultStyle: defaultStyle, application: request.application, fileName: request.fileName});
    //   }else if(request.apiRef === 'create_new_profile'){
    //       CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.copy_file(request.fileName).then((data) => {
    //           console.log("======================== successfully create new file =============================");
    //           // console.log("^^^^^^^^ profiles template : ", data);
    //           socket.emit("response-generic-portfolio", {template : data, blockId: 'profilesBlock', apiRef: request.apiRef , templateId: '', loaderId: '' });
    //       });
    //   }else if(request.apiRef === 'change_my_profile'){
    //       console.log("^^^^^^^^^^^^^^^^^^^  action : change_my_profile : ^^^^^^^^^^^^^^^^^^^^^^");
    //       let profileName = request.profileName+'.js';
    //       let file = {path: './server/PORTFOLIO/store/'+profileName, type: "utf8"};
    //       CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.read_portfolio_file_data(file).then(function(data){
    //           console.log("8888888888888888888888888888888888888888888");
    //           console.log("88888888 profiles data : ", data);
    //       });

    //   }else if(request.apiRef === 'sync_portfolio_file'){
    //       let filePath = './server/PORTFOLIO/LOCAL_DB/test.json';
    //       CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_portfolio_file(filePath).then((data) => {
    //           console.log("successfully written to the file ");
    //       });

    //   }else if(request.apiRef === "custom_search"){
    //       // console.log("=========== section data : ", sectionData);
    //       console.log("=========== search query : ", request.searchQuery);
    //       console.log("=========== search property : ", request.searchProperty);
    //       // console.log("=========== search sectionData  : ", JSON.stringify(sectionData));


    //       let filteredSearchItem = [];
    //       let data = null;
    //       let dummyData = sectionData.dataSource.data;
    //       let localSectionData = JSON.parse(JSON.stringify(sectionData));
    //       if(request.application === 'publicApis'){
    //           data = localSectionData.dataSource.data.entries;
    //       }else if(request.application === 'giniKontestsV2'){
    //           data = localSectionData.dataSource.data;
    //       }
    //         if(request.searchQuery.length >= 3){
    //           // console.log("======= custom search data : ", data);
    //               data.forEach((item, i) => {
    //                   // if((item[request.searchProperty].toLowerCase().indexOf(request.searchQuery.toLowerCase()) !== -1) || (item.Description.toLowerCase().indexOf(request.searchQuery.toLowerCase()) !== -1)){

    //                   if((item[request.searchProperty].toLowerCase().indexOf(request.searchQuery.toLowerCase()) !== -1)){
    //                       filteredSearchItem.push(item);
    //                   }
    //               });
    //               console.log("======= custom search data filteredSearchItem : ", filteredSearchItem);
    //               // localSectionData.dataSource.data.entries = filteredSearchItem;
    //               if(request.application === 'publicApis'){
    //                   localSectionData.dataSource.data.entries = filteredSearchItem;
    //               }else if(request.application === 'giniKontestsV2'){
    //                   localSectionData.dataSource.data = filteredSearchItem;
    //               }
    //         }

    //         let template = '';
    //         if(request.edit){
    //           let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, localSectionData, request.application, request);
    //           template = res.template;
    //           socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //         }else{
    //           template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, localSectionData, request.application, request);
    //           sectionData.dataSource.data = dummyData;
    //           socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //         }
    //   }else if(request.apiRef === "allPublicApis"){
    //         if(request.action === 'public_apis_by_category'){
    //               let data = sectionData.dataSource.data;
    //         }
    //   }else if(request.apiRef === "request_initial_sections"){
    //       if(request.application !== undefined && request.application !== null && request.application !== ''){
    //             if(request.application === 'gini_home'){
    //                 console.log("+++++++++++++++++++++++++++++++++++++")

    //                 let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("all_sections").values;
    //                 let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
    //                 let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
    //                 socket.emit("response-generic-portfolio", {initSections : sections, defaultStyle: defaultStyle, apiRef: request.apiRef});
    //             }else if(request.application === 'restaurant_home'){
    //                 let allSections = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("all_sections").values;
    //                 let initSections = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("init_sections").values;
    //                 let defaultStyle = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data('default_style');
    //                 let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
    //                 socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
    //                 // {allSectionsData : sections, defaultStyle: defaultStyle});
    //             }else if(request.application === 'music_home'){
    //                 console.log("========== calling music home application =============");
    //                 let allSections = MUSIC_APP_SERVICES.music_app_services.get_section_data("all_sections").values;
    //                 let initSections = MUSIC_APP_SERVICES.music_app_services.get_section_data("init_sections").values;
    //                 let defaultStyle = MUSIC_APP_SERVICES.music_app_services.get_section_data('default_style');
    //                 let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
    //                 socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
    //                 // {allSectionsData : sections, defaultStyle: defaultStyle});
    //             }else if(request.application === 'gini_nearby_app'){
    //                 console.log("========== calling music home application =============");
    //                 let allSections = NEARBY_APP_SERVICES.nearby_app_services.get_section_data("all_sections").values;
    //                 let initSections = NEARBY_APP_SERVICES.nearby_app_services.get_section_data("init_sections").values;
    //                 let defaultStyle = NEARBY_APP_SERVICES.nearby_app_services.get_section_data('default_style');
    //                 let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
    //                 socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
    //                 // {allSectionsData : sections, defaultStyle: defaultStyle});
    //             }else if(request.application === 'shopping_home'){
    //                 console.log("========== calling music home application =============");
    //                 let allSections = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("all_sections").values;
    //                 let initSections = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("init_sections").values;
    //                 let defaultStyle = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data('default_style');
    //                 let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
    //                 socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
    //                 // {allSectionsData : sections, defaultStyle: defaultStyle});
    //             }else if(request.application === 'new_project'){
    //                 console.log("========== calling new_project home application =============");
    //                 let allSections = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("all_sections").values;
    //                 let initSections = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("init_sections").values;
    //                 let defaultStyle = NEW_PROJECT_APP_SERVICES.app_services.get_section_data('default_style');
    //                 let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
    //                 socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
    //                 // {allSectionsData : sections, defaultStyle: defaultStyle});
    //             }else if(request.application === 'indStocks'){
    //                 console.log("========== calling ind_stocks home application =============");
    //                 let allSections = IND_STOCKS_APP_SERVICES.app_services.get_section_data("all_sections").values;
    //                 let initSections = IND_STOCKS_APP_SERVICES.app_services.get_section_data("init_sections").values;
    //                 let defaultStyle = IND_STOCKS_APP_SERVICES.app_services.get_section_data('default_style');
    //                 let sections = {values: initSections, sectionStyle: 'background: #F1F3F6;'}
    //                 socket.emit("response-generic-portfolio", {initSections : sections, allSectionsData : allSections, defaultStyle: defaultStyle, apiRef: request.apiRef});
    //                 // {allSectionsData : sections, defaultStyle: defaultStyle});
    //             }else if(request.application === 'PORTFOLIO'){
    //                 let fileControllerPath = './server/'+request.application+'/portfolio.js';
    //                 let filePath = null;
    //                 let file = null;
    //                 if(request.fileName === 'default'){
    //                   filePath = './server/'+request.application+'/store/generic_portfolio_data.js';
    //                   file = {path: filePath, type: "utf8"};
    //                 }else{
    //                   filePath = './server/'+request.application+'/store/'+request.fileName+'.js';
    //                   file = {path: filePath, type: "utf8"};
    //                 }
    //                 console.log("===== filePath : ", filePath);
    //                 let CURRENT_PORTFOLIO_DATA = require(filePath).portfolio_data;
    //                 let initAllSectionData = CURRENT_PORTFOLIO_DATA['all_sections'].values;
    //                 let settingsSectionData = CURRENT_PORTFOLIO_DATA['settings_section'].block.sections[0].parts;
    //                 let defaultStyle = CURRENT_PORTFOLIO_DATA['default_style'];
    //                 loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);
    //             }else if(request.application === 'GINIMUSIC'){
    //                 // let filePath = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
    //                 let filePath = './server/GINIMUSIC/store/giniMusicApp.js';

    //                 console.log("===== filePath : ", filePath);
    //                 let GINI_MUSIC_DATA = require(filePath).portfolio_data;
    //                 console.log("===== GINI_MUSIC_DATA : ", GINI_MUSIC_DATA);
    //                 let initAllSectionData = GINI_MUSIC_DATA['all_sections'].values;
    //                 let settingsSectionData = GINI_MUSIC_DATA['settings_section'].block.sections[0].parts;
    //                 let defaultStyle = GINI_MUSIC_DATA['default_style'];
    //                 loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);
    //             }else{
    //                 let dataFileName = request.application;
    //                 let dataFilePath = './server/'+request.application+'/store/'+request.application+'Data.js';
    //                 // let x = './server/publicApis/store/publicApisApp.js';
    //                 console.log("dataFilePath : ", dataFilePath);
    //                 let DATA = require(dataFilePath).portfolio_data;
    //                 let initAllSectionData = DATA['all_sections'].values;
    //                 let initSectionsData = DATA['init_sections'].values;

    //                 let settingsSectionData = DATA['settings_section'].block.sections[0].parts;
    //                 let defaultStyle = DATA['default_style'];
    //                 // loadInitialComponents(initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);
    //                 loadPrimaryInitialComponents(initSectionsData, initAllSectionData, settingsSectionData, defaultStyle, socket, request.application, request.fileName);

    //             }
    //       }
    //   }else{
    //       let template = '';

    //       if(
    //         sectionData !== undefined &&
    //         sectionData !== null &&
    //         sectionData.dataSource !== undefined &&
    //         sectionData.dataSource !== null &&
    //         sectionData.dataSource.type !== undefined &&
    //         sectionData.dataSource.type !== null &&
    //         sectionData.dataSource.type === "API"
    //       ){
    //         console.log("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         if(sectionData.dataSource && sectionData.dataSource.data && sectionData.dataSource.data !== null && sectionData.dataSource.data !== ''){
    //           if(request.edit){
    //               let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //               template = res.template;
    //               socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //             }else{
    //               template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //               if(request.apiRef === 'hereMapNearByRestaurant_section'){
    //                 console.log("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //                 // console.log("@@@@ 999999 \n: ", template);
    //               }
    //               socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //             }
    //         }else{
    //              CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_api_data(sectionData.dataSource.url, sectionData.dataSource.authorizationKey, sectionData.dataSource).then((data) => {
    //             console.log("@@@ Response from APIS : ", data);
    //             if(request.apiRef === "allPublicApis_section"){
    //                 console.log("**********************************");
    //                let futureKontests = [];
    //                let runningKontests = [];
    //                let playedKontests = [];
    //                if(request.byCategory === 'future_contests' || request.byCategory === 'live_contests' || request.byCategory === 'played_contests'){
    //                    data.forEach((item, i) => {
    //                      let today = new Date();
    //                      let itemStartDate = new Date(item.start_time);
    //                      let itemEndDate = new Date(item.end_time);
    //                      let compareVal = today < itemStartDate;
    //                      if( (today < itemStartDate) && request.byCategory === 'future_contests'){
    //                           futureKontests.push(item)
    //                      }else if((today > itemStartDate && today < itemEndDate) && request.byCategory === 'live_contests'){
    //                           runningKontests.push(item);
    //                      }else if(request.byCategory === 'played_contests'){
    //                           playedKontests.push(item);
    //                      }
    //                    });
    //                    if(request.byCategory === 'future_contests'){
    //                       sectionData.dataSource.data = futureKontests;
    //                    }else if(request.byCategory === 'played_contests'){
    //                       sectionData.dataSource.data = playedKontests;
    //                    }else if(request.byCategory === 'live_contests'){
    //                       sectionData.dataSource.data = runningKontests;
    //                    }
    //                    console.log("@@@@@@@@@@@ futureKontests : ", futureKontests);
    //                    console.log("@@@@@@@@@@@ playedKontests : ", playedKontests);
    //                    console.log("@@@@@@@@@@@ runningKontests : ", runningKontests);
    //                    console.log("@@@@@@@@@@@ length : ", sectionData.dataSource.data.length);
    //                }else{
    //                     sectionData.dataSource.data = data;
    //                }

    //             }else if(request.apiRef === "kontestsApisLeftSideBarSearch_section"){
    //                let filteredArr = [];
    //                data.forEach((item, i) => {
    //                  let obj = {siteName: item[0], siteCode: item[1], siteSource: item[2]};
    //                  filteredArr.push(obj);
    //                });
    //                // data = filteredArr;
    //                // console.log("@@@ filteredArr : ", filteredArr);
    //                sectionData.dataSource.data = filteredArr;
    //             }else{
    //               sectionData.dataSource.data = data;

    //             }

    //             if(request.edit){
    //               let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //               template = res.template;
    //               socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //             }else{
    //               template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //               if(request.apiRef === 'hereMapNearByRestaurant_section'){
    //                 console.log("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //                 // console.log("@@@@ 999999 \n: ", template);
    //               }
    //               socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //             }
    //              })
    //         }
           

    //       }else if(
    //           sectionData !== undefined && sectionData !== null && sectionData !== '' &&
    //           sectionData.dataSource !== undefined &&
    //           sectionData.dataSource !== null &&
    //           sectionData.dataSource.type !== undefined &&
    //           sectionData.dataSource.type !== null &&
    //           sectionData.dataSource.type === "SECTION-LOCAL-STORAGE"
    //         ){
    //                             console.log("===== ************************ 88888888888888888888888 ********************========");

    //               console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
    //               // console.log("======  ****** ======= data : ", sectionData.sectionData)

    //               if(sectionData.sectionData){
    //                   sectionData.dataSource.data = sectionData.sectionData;
    //                   request.payloadData.dataSource.data = data;
    //                   // data = sectionData.sectionData;
    //               }
                  
                  
    //               let template = '';
    //               if(request.edit){
    //                 let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //                 template = res.template;
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //               }else{
    //                 template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //               }
    //         }else if(
    //         sectionData !== undefined && sectionData !== null && sectionData !== '' &&
    //         sectionData.dataSource !== undefined &&
    //         sectionData.dataSource !== null &&
    //         sectionData.dataSource.type !== undefined &&
    //         sectionData.dataSource.type !== null &&
    //         sectionData.dataSource.type === "DATA-SERVER"
    //       ){
    //           // console.log("=========== calling all public apis rad data ============");
    //           console.log("333333333333333333333333@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    //           let filePath = './server'+sectionData.dataSource.dataFilePath;
    //           console.log("++++++++++++++++++ file path ::: ", filePath);
    //           console.log("=== request.sectionname : ", request.sectionName)
    //           let rawData = require(filePath).rawData;
    //           // rawData = JSON.parse(JSON.stringify(rawData));
    //           // console.log("======= rawData : ", rawData);

    //           if(request.sectionName === 'allMutualFundCategoryB5PlusMinusCollapseSidebar_section'){
    //               console.log("========= allMutualFundCategoryCollapseSidebar ==========");
    //               let modifiedCollapseData = JSON.parse(JSON.stringify([]));
    //               // let collapseItemObj = {collapseItemTitle : '', collapseItemType: ''}
    //               let keys = Object.keys(rawData)
    //               console.log("===== mf data keys : ", keys)
    //                if(keys){
    //                   // let dummyCollapseItemList []
    //                   keys.forEach((key, keyIndex) => {
    //                       let keyValue = JSON.parse(JSON.stringify(rawData[key]));
    //                       // console.log("=====33333334==== keyValue: ", keyValue)
    //                       let dummyCollapseItemList = JSON.parse(JSON.stringify([])); 
    //                       let collapseObj = JSON.parse(JSON.stringify({ collapseHeaderTitle: '', collapseBody: {collapseItemList: []}}));
    //                       let keyValueKeys = Object.keys(keyValue)
    //                       if(keyValueKeys){
    //                           keyValueKeys.forEach((keyValueKey, keyValueKeyIndex) => {
    //                               let collapseItemObj = JSON.parse(JSON.stringify({collapseItemTitle : '', collapseItemType: '', toDataPath: ''}))
    //                               let keyValueKeyValue = JSON.parse(JSON.stringify(keyValue[keyValueKey]))
    //                               collapseItemObj.collapseItemTitle = keyValueKey.toString();
    //                               collapseItemObj.collapseItemType = 'button';
    //                               collapseItemObj.toDataPath = 'root:'+key.toString()+':'+keyValueKey.toString();
    //                               dummyCollapseItemList.push(collapseItemObj)
    //                           })
    //                       }
    //                       collapseObj.collapseHeaderTitle = key;
    //                       collapseObj.collapseBody.collapseItemList = dummyCollapseItemList;
    //                       // console.log("===== collapseObj : ", JSON.stringify(collapseObj))
    //                       modifiedCollapseData.push(collapseObj)
    //                   })
    //                 }
     
    //               sectionData.sectionData.collapseData = modifiedCollapseData;
    //               // console.log("======== final modifiedCollapseData: ", JSON.stringify(modifiedCollapseData))
    //           }
    //           if(request.apiRef === "allPublicApis_section" && request.actionType === 'public_apis_by_category' && request.byCategory !== 'All'){
    //                 let filteredArr = [];
    //                 let data = rawData.entries;
    //                 // console.log("@@@@ 1111 data : ", data)
    //                 // console.log("@@@@ 11111 request.byCategory : ", request.byCategory)
    //                 data.forEach((item, i) => {
    //                     if(item.Category === request.byCategory){
    //                           filteredArr.push(item);
    //                     }
    //                 });
    //                 sectionData.dataSource.data = {count: filteredArr.length, entries: filteredArr};
    //                 console.log("@@@@@ 22222 sectionData.dataSource.data : ", sectionData.dataSource.data)
    //                 let sName = 'allPublicApisGlobalSearch_section';
    //                 sName = sName.split('_')[0];
    //                 let beforeUpdateSectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.new_get_section_data({application: 'publicApis', sectionName: 'allPublicApisGlobalSearch_section'});
    //                 //beforeUpdateSectionData.block.sections[2].parts[0].desc[1].key.name = filteredArr.length;
    //                 console.log("@@@@@ 333333 beforeUpdateSectionData : ", JSON.stringify(beforeUpdateSectionData));
    //                 let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, beforeUpdateSectionData, request.application, request);
    //                 socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+sName+'_block', templateId: 'custom_'+sName+'_template', loaderId: 'custom_'+sName+'_loader', apiRef : request.apiRef});
    //           }else{
    //             sectionData.dataSource.data = rawData;
    //           }

    //           let template = ''; 
    //           if(request.edit){
    //             let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //             template = res.template;
    //             socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //           }else{
    //             template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //             socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});

    //           }
    //       }else{
    //         if(request.edit){
    //           let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //           template = res.template;
    //           socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
    //         }else{
    //           template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit, sectionData, request.application, request);
    //           socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
    //         }
    //       }
    //   }
    // })

    const chatGptHistory = [];
    const updateChatGptHistoryLocally = (chatObject) => {
        if(chatObject){
          chatGptHistory.push(chatObject)
        }
    }

    const getUpdatedChatGptTemplate = () => {
        let finalGptTemplate = '';
        let chatTemplate = ''
        if(chatGptHistory && chatGptHistory.length > 0){
           chatGptHistory.forEach((chatObject) => {
              chatTemplate += `
                <div style="clear: both;">
                  <p style="padding: 0px 10px 0px 10px; border-right: 2px solid  #6264a7; float: right">
                      <span>${chatObject.gptQuery}</span>
                      <span style="position: relative; padding: 9px; border-radius: 50%; background: #6264a7; color: white; font-size: 9px; top: -15px; right: -11%;">You<span>

                  </p>
                  <p style="padding: 0px 10px 0px 10px; border-left: 2px solid red; float: left">
                      <span>${chatObject.gptResponse}</span>
                      <span style="padding: 9px; border-radius: 50%; background: #6264a7; color: white;  font-size: 9px; float: left; maargin-top: 50px; margin-left: -20px;">GPT<span>
                  </p>
                </div>
            `
           })

           finalGptTemplate += `
              <div style="">
                  ${chatTemplate}
              </div>
           `
        }
        return finalGptTemplate;
    }

    // socket.on("request-generic-askchatgptai", (data) => {
    //     console.log("=============== calling ask gpt ai response ================")
    //     console.log("===== data : ", data)
    //     console.log("===== input gpt text : ", data.askChatGptAiInputText)
    //     let finalGptTemplate = '';
    //     if(data.askChatGptAiInputText !== ''){
    //         const response = openai.responses.create({
    //           model: "gpt-4o-mini",
    //           input: data.askChatGptAiInputText,
    //           store: true,
    //       });
    //        response.then((result) => {
    //         console.log("===== openai input text : ", data.askChatGptAiInputText)
    //         console.log("====== openai response : ");
    //         console.log(result.output_text)
    //         let chatObject = {
    //             gptQuery: data.askChatGptAiInputText,
    //             gptResponse: result.output_text
    //         }
    //         updateChatGptHistoryLocally(chatObject)
    //         finalGptTemplate = getUpdatedChatGptTemplate()
            
    //         socket.emit("response-generic-askchatgptai", {requestData: data, responseTemplate: finalGptTemplate});
    //       });
    //     }
    // })

    // *************************************  CODE FOR GINI HOME PAGE START HERE  **************************************

    //========================== UNUSED SECTION ==========================
    // socket.on("request-gini-home-initial-sections", (request) => {
    //     console.log("=========== calling request-gini-home-initial-sections ===========");
    //     console.log("2222222222222222222222222222222222222222222222222222")
    //     let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("init_sections").values;
    //     let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
    //     let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
    //     socket.emit("response-gini-home-initial-sections", {initSections : sections, defaultStyle: defaultStyle});
    // })



    // *************************************  CODE FOR GINI HOME PAGE START HERE  **************************************


});


// pollinations.ai text based prompt and text based answer
// async function test(){
//   const response = await fetch(
//   "https://gen.pollinations.ai/text/what is sachin tendulkars sons age ?model=openai",
//   { headers: { Authorization: "Bearer sk_7u12pDcu6Ge6x4HblrwX4AJejQWg9IoK" } },
// );
// console.log(await response.text());
// }
// test()


// const { NseIndia, getGainersAndLosersByIndex  } = require('stock-nse-india');
// const nseIndia = new NseIndia();

























var port = process.env.PORT || 5000;
http.listen(port, function(){
  console.log("nodejs running on port :  "+port);

});
