const promise = require("promise");
const request = require("request");
const ROOT_DIR = require("path").resolve();
const fs = require('fs');
// var GINI_HOME_DATA = require(ROOT_DIR+'/server/GINI/store/gini_home_data.js');
var APP_SERVICES = require(ROOT_DIR+'/server/IND_STOCKS/controllers/indStocksApp.controller.js');
var APP_DATA = require(ROOT_DIR+'/server/IND_STOCKS/store/indStocksData.js').sections_data;

// console.log("=== APP_DATA : ", APP_DATA);
function get_section_data(sectionName){
  console.log("&&&&&&& ===== get_section_data ==== section name : ", sectionName)
  console.log("APP_DATA[sectionName]:", APP_DATA[sectionName]);
  // const ALL_SECTIONS_DATA = APP_DATA[sectionName];
  return APP_DATA[sectionName];
}




let app_services = {

    get_section_data : get_section_data,

}


module.exports.app_services = app_services;
