const promise = require("promise");
const request = require("request");
const ROOT_DIR = require("path").resolve();
const fs = require('fs');
// var GINI_HOME_DATA = require(ROOT_DIR+'/server/GINI/store/gini_home_data.js');
var RESTAURANT_SERVICES = require(ROOT_DIR+'/server/RESTAURANT/controllers/restaurantApp.controller.js');
var RESTAURANT_APP_DATA = require(ROOT_DIR+'/server/RESTAURANT/store/restaurant_home_data.js').sections_data;


function get_section_data(sectionName){
  return RESTAURANT_APP_DATA[sectionName];
}




let restaurant_app_services = {

    get_section_data : get_section_data,

}


module.exports.restaurant_app_services = restaurant_app_services;
