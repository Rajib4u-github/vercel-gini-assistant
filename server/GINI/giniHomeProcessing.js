const promise = require("promise");
const request = require("request");
const ROOT_DIR = require("path").resolve();
const fs = require('fs');
var GINI_HOME_DATA = require(ROOT_DIR+'/server/GINI/store/gini_home_data.js');

var gini_home_sections_data =  GINI_HOME_DATA.sections_data;

function get_section_data(sectionName){
  return gini_home_sections_data[sectionName];
}




let gini_home_processing = {

    get_section_data : get_section_data,

}


module.exports.gini_home_processing = gini_home_processing;
