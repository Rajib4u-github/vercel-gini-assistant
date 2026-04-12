const promise = require("promise");
const request = require("request");
const ROOT_DIR = require("path").resolve();
const fs = require('fs');
// var GINI_HOME_DATA = require(ROOT_DIR+'/server/GINI/store/gini_home_data.js');
var APP_SERVICES = require(ROOT_DIR+'/server/NEW_PROJECT/controllers/newProjectApp.controller.js');
var APP_DATA = require(ROOT_DIR+'/server/NEW_PROJECT/store/new_project_app_data.js').sections_data;


function get_section_data(sectionName){
  return APP_DATA[sectionName];
}




let app_services = {

    get_section_data : get_section_data,

}


module.exports.app_services = app_services;
