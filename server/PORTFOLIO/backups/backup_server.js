'use strict';
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
const ROOT_DIR = require("path").resolve();
var GINI_HOME = require(ROOT_DIR+'/server/GINI/giniHomeProcessing.js');

var CUSTOM_PORTFOLIO_SERVICE = null;
var CUSTOM_GINI_HOME_SERVICE = null;
let LOCAL_STORAGE = {};

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

createTestFileAsync().then(function(data){
    console.log("======= return from create file promise =======");
    console.log("77777777777777777777777777777777777777");
    CUSTOM_PORTFOLIO_SERVICE = require('./server/PORTFOLIO/portfolio.js');
    let file = {path: './server/PORTFOLIO/LOCAL_DB/test.json', type: "utf8"};
    console.log("+======================= ACCESS LOCAL DB PORTFOLIO FILE  +=========================");

    // CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.read_portfolio_file_data(file).then(function(data){
    //     console.log("8888888888888888888888888888888888888888888");
    // });

});


app.use(bodyParser.json());

app.use('/static', express.static(__dirname+'/assets'));

app.use('/edit', function(req, res) {
    res.sendfile('./client/portfolio_edit.html');
});

app.use('/gini', function(req, res) {
    res.sendfile('./client/GINI/gini_home_page.html');
});

app.use('/me', function(req, res) {
    res.sendfile('./client/final_portfolio.html');
});

app.use('/', function(req, res) {
    res.sendfile('./client/portfolio_create.html');
});



function readFile(file){
    fs.readFile(file.path, file.type, (err, data) => {
        if(err){
            console.log("@@@ err occured when reading the file : ", err);
        }else{
            console.log("@@@ type of file data : ", typeof(data));
            // console.log("@@@ data : ", data);
        }
    });
}

io.on('connection', function(socket){

    console.log('A user connected..........');
    let initAllSectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('all_sections').values;
    let settingsSectionData = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('settings_section').block.sections[0].parts;
    let defaultStyle = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('default_style');

    socket.on("request-initial-sections-data", (data) =>{
        let filteredInitialSections = [];
        let header = null;
        let settings = null;

        settingsSectionData.forEach((item, index) => {
            if(item.mapToSection !== undefined && item.mapToSection !== null && item.mapToSection !== ''){
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


        // console.log("!!!! filteredSections :: ", filteredInitialSections);
        let sections = {values: filteredInitialSections, sectionStyle: 'background: #F1F3F6;'}
        LOCAL_STORAGE.initialSections = sections;
        socket.emit("response-initial-sections-data", {allSectionsData : sections, defaultStyle: defaultStyle});
    })

    socket.emit("client-initial-setup", {allSectionsData : initAllSectionData});

    socket.on("request-final-portfolio-sections", () => {
          socket.emit("response-final-portfolio-sections", {initSections: LOCAL_STORAGE.initialSections, defaultStyle: defaultStyle});
    });

    socket.on("test-request", () => {
        socket.emit("test-response", {template : 'rajib karmakar'});
    })

    socket.on("request-generic-portfolio", (request) => {
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
        request.apiRef === 'products_section'
      ){
          let template = '';
          if(request.edit){
            let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit);
            template = res.template;
            socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
          }else{
            template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit);
            socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
          }
      }else if(request.apiRef === 'headerNav_section'){
        let nav = GINI_HOME.gini_home_processing.get_section_data("headerNav_section");
        let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_header_navigation_template(nav);
        // console.log("@@@ header nav template \n", template);
        socket.emit("response-generic-portfolio", {template : template, blockId: null, templateId: 'header', loaderId: null, apiRef: request.apiRef});

      }else if(request.apiRef === 'latest_work_section'){
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.latest_work_section(request.apiRef);
          // console.log("@@@ template :: ", template);
          socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId });

      }
      // else if(request.apiRef === 'get_section_template'){
      //
      //     let template = '';
      //     if(request.edit){
      //         let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit);
      //         template = res.template;
      //         socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
      //     }else{
      //         template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit);
      //         socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
      //     }
      // }
      else if(request.apiRef === 'work_section'){
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.work_section("work_section", request.logoCategory);
          // console.log("@@@ template :: ", template);
          socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

      }else if(request.apiRef === 'workcat_section'){
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.workcat_list_section(request.apiRef);
          // console.log("@@@ template :: ", template);
          socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

      }else if(request.apiRef === 'header_section'){
          // let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.header_section(request.apiRef, request.dynamic_header_menus, request.edit);
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.header_section(request);

          // console.log("@@@ template :: ", template);
          socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

      }else if(request.apiRef === 'typed_section'){
          let data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
          // console.log("@@@ template :: ", template);
          socket.emit("response-generic-portfolio", {data : data, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

      }else if(request.apiRef === "update_section_data"){
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_section_data(request.sectionData);
      }else if(request.apiRef === "update_block_data"){
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_block_data(request);
          if(request.actionType === "add_item_on_top" ||
          request.actionType === "add_item_on_below" ||
          request.actionType === "delete_section" ||
          request.actionType === "add_section_left" ||
          request.actionType === "add_section_right" ||
          request.actionType === "add_similar_item_on_below" ||

          request.actionType === "add_similar_item_on_top" ){
              let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, true);
              let template = res.template;
              console.log("@@@ section name :: ", request.elementId);
              let secName = request.sectionName.split("_")[0];
              // console.log("@@@ secName :: ", secName);
              socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, templateData: res.templateData, elementId: request.elementId});
          }else if(request.actionType === "edit_item_style" || request.actionType === "edit_part_style"){
              let style = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_block_data(request);
              socket.emit("response-action-edit-style", {style : style});
          }else if(request.actionType === "settings_drag_and_drop"){
              // console.log("55555555555555555555555555555555555555555555555555555555555");
              let secName = request.sectionName.split("_")[0];
              console.log("@@@ secName :: ", secName);
              if(secName === 'settings'){
                  let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, false);;
                  socket.emit("response-generic-portfolio", {template : template, blockId: null, templateId: null, loaderId: null, apiRef: 'settings_section'});
              }else{
                  let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, true);
                  let template = res.template;
                  socket.emit("response-generic-portfolio", {template : template, blockId: 'custom_'+secName+'_block', templateId: 'custom_'+secName+'_template', loaderId: 'custom_'+secName+'_loader', edit: true, });
              }
          }

      }else if(request.apiRef === "update_initial_sections"){
          // console.log("11111111111111111111 request \n", request);
          LOCAL_STORAGE.initialSections = request.updatedInitialSections;
          let response = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_initial_sections(request);
          socket.emit("response-generic-portfolio", {apiRef : request.apiRef});

      }else if(request.apiRef === "update_theme"){
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_theme(request);
      }else if(request.apiRef === "theme_section"){
          console.log("======= calling theme section template =========");
          let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit);
          // let data = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.typed_section(request.apiRef);
          // console.log("@@@ template :: ", template);
          socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef: request.apiRef});

      }else if(request.apiRef === "get_section_template"){
          if(request.actionType === 'section_template'){
              // CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, request.edit);
              let template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.sectionName, request.edit);
              socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
          }
      }else if(request.apiRef === 'create_new_section'){
          let updatedAllSections = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.create_new_section(request);
          let defaultStyle = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('default_style');
          // /LOCAL_STORAGE.initialSections = sections;
          let sections = {values: updatedAllSections.allSectionsData, sectionStyle: 'background: #F1F3F6;'}
          socket.emit("response-initial-sections-data", {allSectionsData : sections, defaultStyle: defaultStyle});
      }else if(request.apiRef === 'sync_portfolio_file'){
          let filePath = './server/PORTFOLIO/LOCAL_DB/test.json';
          CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.update_portfolio_file(filePath).then((data) => {
              console.log("successfully written to the file ");
              console.log("999999999999999999999999999999999999999999999999999999999");
          });

      }else{
          let template = '';
          if(request.edit){
            let res = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit);
            template = res.template;
            socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, edit: request.edit, templateData: res.templateData});
          }else{
            template = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_template(request.apiRef, request.edit);
            socket.emit("response-generic-portfolio", {template : template, blockId: request.blockId, templateId: request.templateId, loaderId: request.loaderId, apiRef : request.apiRef});
          }

      }

  })


    // *************************************  CODE FOR GINI HOME PAGE START HERE  **************************************


    socket.on("request-gini-home-initial-sections", (request) => {
        console.log("=========== calling request-gini-home-initial-sections ===========");
        // CUSTOM_GINI_HOME_SERVICE = require(ROOT_DIR+'/server/GINI/store/gini_home_data.js');
        let giniHomeAllSectionsData = GINI_HOME.gini_home_processing.get_section_data("all_sections").values;
        // let defaultStyle = GINI_HOME.gini_home_processing.get_section_data('default_style');
        let defaultStyle = CUSTOM_PORTFOLIO_SERVICE.generic_portfolio_functionality_mapping.get_section_data('default_style');


        // console.log("@@@@ giniHomeAllSectionsData : ", giniHomeAllSectionsData);
        let sections = {values: giniHomeAllSectionsData, sectionStyle: 'background: #F1F3F6;'}
        // console.log("@@@@ sections : ", JSON.stringify(sections));
        socket.emit("response-gini-home-initial-sections", {initSections : sections, defaultStyle: defaultStyle});
    })



    // *************************************  CODE FOR GINI HOME PAGE START HERE  **************************************


});







var port = process.env.PORT || 4000;
http.listen(port, function(){
  console.log("nodejs running on port :  "+port);

});

// let x = { key: { name: ' Birthday :',  style: 'font-weight: 700; '}, value: {name: '02-04-1987', style: 'margin-left: 20px;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, style: 'display: inline-block; width: 100%; padding: 0px 10px;'},
