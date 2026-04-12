const promise = require("promise");
const request = require("request");
const fetch = require("node-fetch");

const ROOT_DIR = require("path").resolve();
const fs = require('fs');

var GINI_HOME = require(ROOT_DIR+'/server/GINI/giniHomeProcessing.js');
let gini_home_data = require(ROOT_DIR+'/server/GINI/store/gini_home_data.js').sections_data;

var generic_portfolio_data = require('./store/generic_portfolio_data.js');

var RESTAURANT_APP_SERVICES = require(ROOT_DIR+'/server/RESTAURANT/controllers/restaurantApp.controller.js');
var MUSIC_APP_SERVICES = require(ROOT_DIR+'/server/MUSIC/controllers/musicApp.controller.js');
var SHOPPING_APP_SERVICES = require(ROOT_DIR+'/server/SHOPPING/controllers/shoppingApp.controller.js');
var NEW_PROJECT_APP_SERVICES = require(ROOT_DIR+'/server/NEW_PROJECT/controllers/newProjectApp.controller.js');

var RESTAURANT_APP_DATA = require(ROOT_DIR+'/server/RESTAURANT/store/restaurant_home_data.js').sections_data;
var MUSIC_APP_DATA = require(ROOT_DIR+'/server/MUSIC/store/music_app_data.js').sections_data;

//new
const NEARBY_APP_DATA = require(ROOT_DIR+'/server/NEARBY/store/nearby_app_data.js').sections_data;


var MUSIC_APP_DEFAULTS_SETTINGS_DATA = require(ROOT_DIR+'/server/MUSIC/store/music_app_data.js').default_settings;
var SHOPPING_APP_DATA = require(ROOT_DIR+'/server/SHOPPING/store/shopping_home_data.js').sections_data;
var NEW_PROJECT_APP_DATA = require(ROOT_DIR+'/server/NEW_PROJECT/store/new_project_app_data.js').sections_data;

console.log("@@@@@@ MUSIC_APP_DEFAULTS_SETTINGS_DATA : ", MUSIC_APP_DEFAULTS_SETTINGS_DATA);



//***********************  ACCESSED  DUMMY  PORTFOLIO  FILE  **************************
let portfolio_data = generic_portfolio_data.portfolio_data;
// let default_style = generic_portfolio_data.portfolio_data["default_style"];

//***********************  ACCESSED  LOCAL DB  PORTFOLIO  FILE  **************************
// let portfolio_data = null;
// let jsonTestFile = require('./server/PORTFOLIO/LOCAL_DB/test.json');
// let default_style = generic_portfolio_data.default_style;
// let default_style = generic_portfolio_data.portfolio_data["default_style"];

let data = null;



function readFile(file){
    console.log("@@@@@ READ FILE IS CALLED @@@@@@");
    fs.readFile(file.path, file.type, (err, data) => {
        if(err){
            console.log("@@@ err occured when reading the file : ", err);
        }else{
            console.log("@@@ type of file data : ", typeof(data));
            portfolio_data = JSON.parse(data);
            console.log("@@@ data : ", data);
        }
    });
}

function read_portfolio_file_data(file){
    var p = new Promise(function(resolve, reject){
          try {
            fs.readFile(file.path, file.type, (err, data) => {
                if(err){
                    console.log("@@@ err occured when reading the file : ", err);
                }else{
                    console.log("@@@ type of file data : ", typeof(data));
                    // let parsedData = JSON.parse(data);
                    resolve(data);
                }
            });
          } catch (e) {

          } finally {

          }
    });
    return p;
}

function copy_file(fileName){
    console.log("=================== COPY FILE =====================");
    var p = new Promise(function(resolve, reject){
          try {
            let destFile = ROOT_DIR+'/server/PORTFOLIO/store/'+fileName+'.js';
            let srcFile = ROOT_DIR+'/server/PORTFOLIO/store/default_profile.js';

            fs.copyFile(srcFile, destFile, (err) => {
            if (err) {
              console.log("Error Found:", err);
            }
            else {
              let destFileProfiles = require(destFile).portfolio_data["myProfiles_section"];
              destFileProfiles.profiles.push(fileName);
              let srcFileProfiles = require(destFile).portfolio_data["myProfiles_section"];
              srcFileProfiles.profiles.push(fileName);
              let profilesTemplate = '';
              if(srcFileProfiles.profiles.length > 0){
                  let optionsTemplate = '';
                  srcFileProfiles.profiles.forEach((profile) => {
                      optionsTemplate += '<option>'+profile+'</option>';
                  });
                  profilesTemplate += `
                    <div class="form-group">
                        <label for="sel1">My Profiles:</label>
                        <select class="form-control custom-profiles" id="profiles" onchange="onChangeMyProfiles(this,event)">
                          `+optionsTemplate+`
                        </select>
                     </div>
                  `;
              }
               console.log("****************  @@@@@    SUCCEFULLY  CREATE NEW PORTFOLIO  FILE   @@@@@  ******************");
               resolve(profilesTemplate);
            }
            });
          } catch (e) {

          } finally {

          }
    });
    return p;
}

function get_application_default_style(request){
  if(request.application === 'PORTFOLIO'){
      let srcFile = null;
      if(request.fileName === "default"){
        srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
      }else{
        srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
      }
      let default_style = require(srcFile).portfolio_data["default_style"];
      console.log("@@@@ ======= sectionData :: ", default_style);
      return default_style;
  }
}

function create_new_portfolio_file(fileName){
    let p = new Promise(function(resolve, reject){
        try {
            // let destFileSrc = './store/'+fileName+'.js';
            // let srcFile = './store/'+fileName+'.js';

            let destFile = ROOT_DIR+'/server/PORTFOLIO/store/'+fileName+'.js';
            let default_profile_data = require(ROOT_DIR+'/server/PORTFOLIO/store/default_profile.js');

            let data = JSON.stringify(portfolio_data);
            fs.writeFile(destFile, default_profile_data, (err) => {
                if(err){
                    console.log("@@@@ error occured when writting to portfolio file ....");
                    console.log("@@@ err : ", err);
                }else{
                   portfolio_data["myProfiles_section"].profiles.push(fileName);
                   let myProfiles = getPortfolioData("myProfiles_section").profiles;
                   let profilesTemplate = '';
                   if(myProfiles.length > 0){
                       let optionsTemplate = '';
                       myProfiles.forEach((profile) => {
                           optionsTemplate += '<option>'+profile+'</option>';

                       });
                       profilesTemplate += `
                         <div class="form-group">
                             <label for="sel1">My Profiles:</label>
                             <select class="form-control custom-profiles" id="profiles" onchange="onChangeMyProfiles(this,event)">
                               `+optionsTemplate+`
                             </select>
                          </div>
                       `;
                   }
                    console.log("****************  @@@@@    SUCCEFULLY  CREATE NEW PORTFOLIO  FILE   @@@@@  ******************");
                    resolve(profilesTemplate);
                }
            })
        } catch (e) {

        } finally {

        }
    });
    return p;
}

function update_portfolio_file(filePath){
    let p = new Promise(function(resolve, reject){
        try {
            let data = JSON.stringify(portfolio_data);
            fs.writeFile(filePath, data, (err) => {
                if(err){
                    console.log("@@@@ error occured when writting to portfolio file ....");
                    console.log("@@@ err : ", err);
                }else{
                    console.log("****************  @@@@@    SUCCEFULLY  WRITTEN TO THE PORTFOLIO  FILE   @@@@@  ******************");
                }
            })
        } catch (e) {

        } finally {

        }
    });
    return p;
}

function getPortfolioData(sectionName){
    if(sectionName !== undefined && sectionName !== null && sectionName !== ''){
      return portfolio_data[sectionName];
    }else{
      return portfolio_data;
    }
}

// function getPortfolioData(sectionName){
//     if(request.application === 'PORTFOLIO'){
//         let srcFile = null;
//         if(request.fileName === "default"){
//           srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
//         }else{
//           srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
//         }
//         let sectionData = require(srcFile).portfolio_data[request.sectionName];
//         console.log("@@@@ ======= sectionData :: ", sectionData);
//         return sectionData;
//     }
//
//     if(sectionName !== undefined && sectionName !== null && sectionName !== ''){
//       return portfolio_data[sectionName];
//     }else{
//       return portfolio_data;
//     }
// }



function getRankTemplate(item, editable, sectionName, sectionIndex,  partsIndex, itemIndex){
  let template = '';
  let onKeyUpInputMethodName = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'name'+'\')"';
  let onKeyUpInputMethodValue = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'value'+'\' )"';
  let classTemplate = '';
  if(item.key.class !== undefined || item.key.class !== ''){
      classTemplate += item.key.class;
  }
  if(editable){
    template += `
      <div style="`+item.itemStyle+`">
        <span><input type="text" value="`+item.key.name+`" `+onKeyUpInputMethodName+` class="`+classTemplate+`" style="font-size: 32px; position: relative; left: 7px; font-weight: 600; color: black; padding: 0px; width: 13%; `+item.key.style+`" /></span>
        <span style="font-size: 26px; font-weight: 400; color: grey; ">/</span>
        <span><input type="text" value="`+item.value.name+`" `+onKeyUpInputMethodValue+` style="font-size: 18px;position: relative; left: -7px; font-weight: 400; padding: 0px; width: 13%; `+item.value.style+`" /></span>
      </div>
    `;
  }else{
    template += `
      <div style="float: right;`+item.itemStyle+`">
        <span class="`+classTemplate+`" style="font-size: 32px;position: relative;top: -12px;left: 7px;font-weight: 600;  `+item.key.style+`; left: 0px;">`+item.key.name+`</span>
        <span style="font-size: 26px; font-weight: 400; color: grey; ">/</span>
        <span style="font-size: 18px;position: relative;top: 7px;left: -7px; font-weight: 400; `+item.value.style+`; left: 0px;">`+item.value.name+`</span>
      </div>
    `;
  }
  return template;
}

function getAotAnimation(item){
  let template = '';
  {
      if(item.animationType && item.animationType !== ''){
          template += 'data-aos="'+item.animationType+'" ';
      }
      if(item.animationDelay && item.animationDelay !== ''){
          template += 'data-aos-delay="'+item.animationDelay+'" ';
      }
  }
  return template;
}

function getProgressBarTemplate(item, editable, sectionName, sectionIndex, partsIndex, itemIndex){
    console.log("============ get progress bar template =============");
    let template = '';
    let animation = '';
    let infoTemplate = '';
    let classTemplate = '';
    let onKeyUpInputMethodName = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'name'+'\')"';
    let onKeyUpInputMethodValue = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'value'+'\' )"';

    animation += getAotAnimation(item);
    if(item.class !== undefined || item.class !== ''){
        classTemplate += item.class;
    }
    if(editable){
        infoTemplate = `
            <span>
                <input type="text" value="`+item.key.name+`" `+onKeyUpInputMethodName+` style="`+item.key.style+`" />
            </span>
            <span>
                <input type="text" value="`+item.value.name+`" `+onKeyUpInputMethodValue+` style="`+item.value.style+`" />
            </span>
        `;
    }else{
        infoTemplate += `
            <span>`+item.key.name+`</span>
            <i class="val">`+item.value.name+`%</i>
        `
    }
    if(editable){

        template += `
            <div class="progress custom-progress-block"  `+animation+` style="display: inline-block; `+item.style+`; width: 100%;">
              <span class="skill">
                `+infoTemplate+`
              </span>
              <div class="progress-bar-wrap">
                <div class="progress-bar `+classTemplate+`" role="progressbar" aria-valuenow="`+item.percent+`" aria-valuemin="0" aria-valuemax="100" style="width: `+item.percent+`%; `+item.progressBarStyle+`"></div>
              </div>
            </div>
        `;
    }else{
        template += `
            <div class="progress custom-progress-block"  `+animation+` style="display: inline-block; `+item.style+`">
              <span class="skill">
                `+infoTemplate+`
              </span>
              <div class="progress-bar-wrap">
                <div class="progress-bar `+classTemplate+`" role="progressbar" aria-valuenow="`+item.percent+`" aria-valuemin="0" aria-valuemax="100" style="width: `+item.percent+`%; `+item.progressBarStyle+`"></div>
              </div>
            </div>
        `;
    }


    return template;

}

function getColorPallateTemplate(ele, application){
    console.log("====== calling get color pallate template ======");
    let template = '';
    // let default_style = portfolio_data["default_style"];
    let default_style = new_get_section_data({application: application, sectionName: "default_style"});
    // console.log("\n\n@@@ default_style: ", default_style);
    if(ele.key.type === 'custom'){
        let key = ele.key.name.split(".");
        let propValue = null;
        if(key[0] === 'default_style'){
            propValue = default_style[key[1]];
            template += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+propValue+'" style="'+ele.key.style+'">';
        }
    }else{
      if(ele.key.name !== undefined || ele.key.name !== ''){
          template += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+ele.key.name+'" style="'+ele.key.style+'">';
      }
    }

    return template;
}

function getThemeStoreData(application){
    if(application !== undefined && application !== null && application !== ''){
      if(application === 'gini_home'){
          return gini_home_data["theme_store"];
      }else if(application === 'restaurant_home'){
          return RESTAURANT_APP_DATA["theme_store"];
      }else if(application === 'music_home'){
          return MUSIC_APP_DATA["theme_store"];
      }else if(application === 'gini_nearby_app'){
          return NEARBY_APP_DATA["theme_store"];
      }else if(application === 'shopping_home'){
          return SHOPPING_APP_DATA["theme_store"];
      }else if(application === 'new_project'){
          return NEW_PROJECT_APP_DATA["theme_store"];
      }
    }else{
      return portfolio_data["theme_store"];
    }
}

function getThemeTemplate(ele, elementId, method, application){
    let template = '';
    let themeStore = null;
    let name = ele.key.name.split(".");
    // let theme = portfolio_data[name[0]][name[1]];
    themeStore = getThemeStoreData(application);
    let theme = themeStore[name[1]];
    theme = JSON.stringify(theme);
    let dataset = `data='`+theme+`'`;
    let themeColor = portfolio_data[name[0]][name[1]].themeColor;
    template += '<div id="'+elementId+'" '+dataset+' '+method+' style="width: 100%; height: 100px; background: '+themeColor+'"></div>';
    return template;
}

function getGridTemplate(data, sectionName, sectionIndex, partsIndex, application, request){

  let template = '';

  data.forEach((ele, index) => {
    let subTemplate = '';
    let id = sectionName+'-'+sectionIndex+'-'+partsIndex+'-'+index;
    let itemId = 'item_'+id;
    let inputId = 'input_'+id;
    let elementId = 'element_'+id;
    let method = '';
    let secClass = '';
    let additionStyle = '';
    let additionClass = '';
    let elementClass = '';

    if(ele.key.id !== undefined && ele.key.id !== ''){
        inputId = ele.key.id;
        elementId = ele.key.id;
        // itemId = ele.key.id;
    }
    if(ele.isSelected !== undefined && ele.isSelected !== ''){
        if(ele.isSelected.state){
            additionStyle += ele.isSelected.style.split("?")[0];
            additionClass += ele.isSelected.class.split("?")[0];
        }else{
            additionStyle += ele.isSelected.style.split("?")[1];
            additionClass += ele.isSelected.class.split("?")[1];
        }
    }

    if(ele.key.preHtml !== undefined && ele.key.preHtml !== null && ele.key.preHtml !== ''){
        ele.key.name = ele.key.preHtml + ' ' + ele.key.name;
    }

    if(ele.key.postHtml !== undefined && ele.key.postHtml !== null && ele.key.postHtml !== ''){
        ele.key.name =  ele.key.name + ' ' + ele.key.postHtml;
    }

    if(ele.event !== undefined && ele.event !== '' && Array.isArray(ele.event)){

        for (var i = 0; i < ele.event.length; i++) {
            if(ele.event[i].argument !== undefined && ele.event[i].argument !== ''){
              method += ele.event[i].eventType+'="'+ele.event[i].eventName+'"  ';
              method += ' ';
              if(ele.event[i].argument.mapToSections !== undefined && ele.event[i].argument.mapToSections !== null && ele.event[i].argument.mapToSections !== ''){
                  console.log("<<<<<<<<< ::: ele.event[i].argument.mapToSections : ", ele.event[i].argument.mapToSections);

                  let map_to_sections_data = get_map_to_sections_data(ele.event[i].argument.mapToSections, application);
                  console.log("<<<<<<<<< ::: map_to_sections_data : ", map_to_sections_data);


                  ele.event[i].argument.mapToSectionsData = map_to_sections_data;
              }
              let argument = JSON.stringify(ele.event[i].argument);
              method += `data='`+argument+`'`;
            }else{
              method += ele.event[i].eventType+'="'+ele.event[i].eventName+'"  ';
              method += ' ';
            }
        }
    }else if(ele.event !== undefined && ele.event !== '' && !Array.isArray(ele.event)){
        if(ele.event.argument === undefined || ele.event.argument === ''){
          method += ele.event.eventType+'="'+ele.event.eventName+'"';
        }else{
          method += ele.event.eventType+'="'+ele.event.eventName+'"';
          method += ' ';
          if(ele.event.argument.mapToSections !== undefined && ele.event.argument.mapToSections !== null && ele.event.argument.mapToSections !== ''){
              let map_to_sections_data = get_map_to_sections_data(ele.event.argument.mapToSections, application);
              ele.event.argument.mapToSectionsData = map_to_sections_data;
          }
          let argument = JSON.stringify(ele.event.argument);
          method += `data='`+argument+`'`;
        }
    }

    // let mapTosections = ev.argument.mapToSections;
    // if(ev.argument.mapToSections !== undefined && ev.argument.mapToSections !== null && ev.argument.mapToSections !== ''){
    //     let map_to_sections_data = get_map_to_sections_data(ev.argument.mapToSections, application);
    //     ev.argument.mapToSectionsData = map_to_sections_data;
    // }
    // let argument = JSON.stringify(ev.argument);
    //


    if(ele.key.class !== undefined && ele.key.class !== ''){
        elementClass += ele.key.class;
    }
    if(ele.type === 'text'){
        let iconTemplate = '';
        let classTemplate = '';
        if(ele.key.class !== undefined ){
          classTemplate += 'class="'+ele.key.class+'"';
        }
        subTemplate += `
            <span id="`+elementId+`" `+classTemplate+` `+method+` style="`+ele.key.style+`">` +ele.key.name+`</span>
        `;
    }else if(ele.type === "button"){
        let classTemplate = '';
        let disabled = '';
        // let elementId = 'btn_'+id;
        if(ele.key.class !== undefined || ele.key.class !== ''){
            classTemplate = ele.key.class;
        }
        if(ele.key.disabled !== undefined && ele.key.disabled === true){
            disabled += 'disabled';
        }
        subTemplate += `
            <button type="button" id="`+elementId+`" `+method+` name="" class="`+classTemplate+`" style="`+ele.key.style+`"  `+disabled+`>`+ele.key.name+`</button>
        `;
    }else if(ele.type === 'image'){
        let onclickMethod = '';
        if(ele.redirectUrl && ele.redirectUrl.url ){
            onclickMethod += 'onclick="onClickRedirectUrl(\'' + ele.redirectUrl.url + '\')" ';
        }
        if(ele.key.name !== undefined && (ele.key.name === '' || ele.key.name === null)){
            if(ele.key.defaultValue !== undefined && ele.key.defaultValue !== ''){
                ele.key.name = ele.key.defaultValue;
            }
        }
        if(ele.key.name){
            subTemplate += `<span><img src="`+ele.key.name+`" id="`+inputId+`" class="img-fluid animated `+elementClass+`" `+onclickMethod+` `+method+` style="`+ele.key.style+`" alt=""></span>`;
        }
    }else if(ele.type === 'video'){
        let onclickMethod = '';
        let defaultVideoType = 'video/mp4';
        let defaultPoster = '';
        let autoplay = '';

        if(ele.redirectUrl && ele.redirectUrl.url ){
            onclickMethod += 'onclick="onClickRedirectUrl(\'' + ele.redirectUrl.url + '\')" ';
        }
        if(ele.key.type !== undefined && ele.key.type !== '' ){
            defaultVideoType = ele.key.type;
        }
        if(ele.key.poster !== undefined && ele.key.poster !== '' ){
            defaultPoster = 'poster="'+ele.key.poster+'"';
        }

        if(ele.key.autoplay !== undefined && ele.key.autoplay){
            autoplay = 'autoplay';
        }

        if(ele.key.name.indexOf(".m3u8") !== -1){
          // class="video-js vjs-fluid vjs-default-skin" controls preload="auto" data-setup='{}'
            console.log("==== url: ", ele.key.name);
            defaultVideoType = 'application/x-mpegURL';
            elementClass += ' video-js vjs-fluid vjs-default-skin'
        }

        if(ele.key.name){
            subTemplate += `
              <span>
                  <video  id="`+inputId+`" class="img-fluid animated `+elementClass+`" `+onclickMethod+` `+method+` `+defaultPoster+` style="`+ele.key.style+`" `+autoplay+`  controls preload="auto" data-setup='{}'>
                    <source src="`+ele.key.name+`" type="`+defaultVideoType+`">
                      Your browser does not support the video tag.
                  </video>
              </span>
            `;
        }
    }else if(ele.type === 'select'){
          if(ele.key.label){
              subTemplate += '<label for="'+ele.key.label.for+'">'+ele.key.label.text+'</label>';
          }
      if(ele.key.name && ele.key.options && ele.key.options.length > 0){
          let optionsTemplate = '';
          ele.key.options.forEach((item, index) => {
              optionsTemplate += '<option value="'+item.value+'">'+item.text+'</option>'
          })
          subTemplate += `
              <select name="`+ele.key.name+`" id="`+elementId+`" `+method+` class="`+ele.key.class+`" style="`+ele.key.style+`" >
                `+optionsTemplate+`
              </select>
          `;
      }
    }else if(ele.type === "all-sections-drop-down"){
      let allSectionData = null;
      if(request.application === 'PORTFOLIO'){
          let srcFile = null;
          if(request.fileName === "default"){
              srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
          }else{
              srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
          }
          allSectionData = require(srcFile).portfolio_data["all_sections"].values;
          if(allSectionData.length > 0){
              let optionsTemplate = '<option value="Select an section" selected disabled="true">Select an section</option>';
              allSectionData.forEach((item, index) => {
                  if(item.section.name !== "header" || item.section.name !== "typed" || item.section.name !== "myProfiles"){
                      optionsTemplate += '<option value="'+item.section.name+'">'+item.section.name+'</option>'
                  }
              })
              subTemplate += `
                  <select name="`+ele.key.name+`" id="`+ele.key.id+`" `+method+` class="`+ele.key.class+`" style="`+ele.key.style+`" placeholder="`+ele.key.placeholder+`">
                    `+optionsTemplate+`
                  </select>
              `;
          }
      }
    }else if(ele.type === 'icon'){
      let classTemplate = '';
      if(ele.key.class !== undefined || ele.key.class !== ''){
          classTemplate += ele.key.class;
      }
      if(ele.secClass !== undefined || ele.secClass !== ''){
          secClass += ele.secClass;
      }

      if(ele.key.name && ele.key.type === "font-awesome"){
          let themeClasses = '';
          if(ele.key.class !== undefined ){
              themeClasses += ele.key.class;
          }
          subTemplate += '<div class="icon" id="'+inputId+ '" '+method+'><i class="icon fa fa-'+ele.key.name+' '+themeClasses+' '+classTemplate+' '+elementClass+'" style="'+ele.key.style+'" aria-hidden="true"></i></div>';
      }
    }else if(ele.type === "progress-bar"){
          subTemplate += getProgressBarTemplate(ele, false);
    }else if(ele.type === "rating"){
          subTemplate += getRankTemplate(ele, false);
    }else if(ele.type === 'iframe'){
        if(ele.key.name){
            subTemplate += '<iframe src="'+ele.key.name+'" id="'+inputId+'" frameborder="0" style="border:0; width: 100%; height: 290px; '+ele.key.style+'" allowfullscreen></iframe>';
        }
    }else if(ele.type === 'utubeIframe'){
        let utubeId = null;
        let embedUrl = '';

        if(ele.dataSource === 'self'){
            utubeId = ele.key.name;
            embedUrl = "https://www.youtube.com/embed/"+utubeId+"?autoplay=1&mute=1";

        }else{
            let obj = data[0];
            // console.log("%%% obj : ", obj);
            utubeId = obj.key.name.split("/");
            utubeId = utubeId[utubeId.length - 2];
            if(partsIndex === 0){
                  embedUrl = "https://www.youtube.com/embed/"+utubeId+"?autoplay=1&mute=1";
            }else{
                  embedUrl = "https://www.youtube.com/embed/"+utubeId;
            }
        }

        if(ele.key.name){
            subTemplate += '<iframe src="'+embedUrl+'" id="'+inputId+'" frameborder="0" style="border:0; width: 100%; height: 290px; '+ele.key.style+'" allowfullscreen></iframe>';
        }
    }else if(ele.type === "input-type-text"){
        if(ele.key.name !== null){
            let valueTemplate = '';
            let classTemplate = '';
            let placeholder = '';
            if(ele.key.placeholder !== undefined && ele.key.placeholder !== ''){
                placeholder += ele.key.placeholder;
            }
            if(ele.key.class !== undefined || ele.key.class !== ''){
                classTemplate += ele.key.class;
            }
            if(ele.key.name !== ''){
                valueTemplate += 'value="'+ele.key.name+'"';
            }
            subTemplate += `<input type="text" id="`+inputId+`" class="`+classTemplate+`"  `+method+`  style="display: inline-block; `+ele.key.style+`"  `+valueTemplate+` placeholder="`+placeholder+`"/>`;
        }
    }else if(ele.type === "input-type-textarea"){

        if(ele.key.name !== null){
            let valueTemplate = '';
            let classTemplate = '';
            let placeholder = '';
            if(ele.key.placeholder !== undefined && ele.key.placeholder !== ''){
                placeholder += ele.key.placeholder;
            }
            if(ele.key.class !== undefined || ele.key.class !== ''){
                classTemplate += ele.key.class;
            }
            if(ele.key.name !== ''){
                valueTemplate += 'value="'+ele.key.name+'"';
            }
            subTemplate += `<textarea id="`+inputId+`" class="`+classTemplate+`"  placeholder="`+placeholder+`"  row="40" name="w3review" style="display: inline-block;  width: 100%; height: 100%; overflow: hidden;  `+ele.key.style+`" >`+valueTemplate+`</textarea>`;
        }
    }else if(ele.type === 'color'){
      // if(ele.key.name !== undefined || ele.key.name !== ''){
      //     subTemplate += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+ele.key.name+'" style="'+ele.key.style+'">';
      // }
      subTemplate += getColorPallateTemplate(ele, application);

    }else if(ele.type === 'theme'){
        subTemplate += getThemeTemplate(ele, elementId, method, application);
    }else if(ele.type === 'wrap-open'){
        subTemplate += '<'+ele.key.name+' id="'+ele.key.id+'" class="'+ele.key.class+'"  style=" '+ele.key.style+'">';

    }else if(ele.type === 'wrap-close'){
        subTemplate += '</'+ele.key.name+'>';
    }else if(ele.type === 'dailymotion_embed'){
        subTemplate += `
          <iframe frameborder="0" width="100%" height="100%" src="https://www.dailymotion.com/embed/video/`+ele.key.name+`" allowfullscreen allow="autoplay" style="`+ele.key.style+`"></iframe>
        `;
    }

    if(ele.type !== 'wrap-open' || ele.type !== 'wrap-close'){
      template += `
          <div id="`+itemId+`"  class="grid-section mob-width-full `+secClass+` `+additionClass+`" style="`+ele.itemStyle+` `+additionStyle+`">
              `+subTemplate+`
          </div>
      `;
    }

  });
  // template += '</div>';
  template += '';

  return template;
}

function getGridEditTemplate(data, sectionName, sectionIndex, partsIndex){
  let template = '<div style="width: 100%;">';
  data.forEach((ele, itemIndex) => {
    let subTemplate = '';
    let id = sectionName+'-'+sectionIndex+'-'+partsIndex+'-'+itemIndex;
    let itemId = 'item_'+id;
    let threeDotsId = 'three_dots_'+id;
    let inputId = 'input_'+id;
    let onMouseHoverAndMouseOutMethod = 'onmouseover="showHideThreeDotsbtn(this, \''+'mouse_over'+'\', \''+'item'+'\')" onmouseout="showHideThreeDotsbtn(this, \''+'mouse_out'+'\', \''+'item'+'\')"';
    let onClickThreeDotsBtn = 'onclick="onClickThreeDotsBtn(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'name'+'\', \''+id+'\')"';
    let threeDotsBtnId = "three_dots_"+sectionName+'-'+sectionIndex+'-'+partsIndex+'-'+itemIndex;
    if(ele.type === 'text'){
        let iconTemplate = '';
        let keyTemplate = '';
        let valueTemplate = '';
        let onKeyUpInputMethodName = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'name'+'\')"';
        let onKeyUpInputMethodValue = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'value'+'\' )"';

        if(ele.key && ele.key !== null && ele.key !== '' && ele.key.name !== '' && ele.key.name !== ''){
              if(ele.key.name.length > 100 || (ele.key.inputType !== undefined && ele.key.inputType !== null && ele.key.inputType === "textarea")){
                subTemplate += `<textarea id="`+inputId+`" name="w3review"  `+onKeyUpInputMethodName+` style="display: inline-block; outline-color: var(--default-theme-color) !important; width: 100%; height: 100%; overflow: hidden; `+ele.key.style+`" >`+ele.key.name+`</textarea>`;
              }else{
                subTemplate += `<input id="`+inputId+`" type="text" `+onKeyUpInputMethodName+` style="display: inline-block; outline-color: var(--default-theme-color) !important; `+ele.key.style+`"  value="`+ele.key.name+`"/>`;
              }
        }

    }else if(ele.type === "button"){
        subTemplate += `
          <button type="button" id="`+itemId+`" name="" style="`+ele.key.style+`">`+ele.key.name+`</button>
        `;
    }else if(ele.type === 'image'){
        let onclickMethod = '';
        if(ele.redirectUrl && ele.redirectUrl.url ){
            onclickMethod += 'onclick="onClickRedirectUrl(\'' + ele.redirectUrl.url + '\')" ';
        }
        if(ele.key.name){
            subTemplate += `<span><img src="`+ele.key.name+`" class="img-fluid" `+onclickMethod+` style="`+ele.key.style+`" alt=""></span>`;
        }
    }else if(ele.type === 'icon' && ele.key.name && ele.key.type === "font-awesome"){
          subTemplate += '<div class="icon"><i class="fa fa-'+ele.key.name+'" style="'+ele.key.style+'" aria-hidden="true"></i></div>';
    }else if(ele.type === "progress-bar"){
          subTemplate += getProgressBarTemplate(ele, true, sectionName, sectionIndex, partsIndex, itemIndex);
    }else if(ele.type === "rating"){
          subTemplate += getRankTemplate(ele, true, sectionName, sectionIndex, partsIndex, itemIndex);
    }else if(ele.type === 'input-type-text'){
        let placeholder = '';
        if(ele.key.placeholder !== undefined && ele.key.placeholder !== ''){
            placeholder += ele.key.placeholder;
        }
        if(ele.key.name){
            subTemplate += `<input type="text"  style="display: inline-block; outline-color: `+default_style.themeColor+` !important; `+ele.key.style+`" placeholder="`+placeholder+`"  value="`+ele.key.name+`"/>`;
        }
    }else if(ele.type === 'input-type-textarea'){
        if(ele.key.name){
            subTemplate += `<textarea id="w3review" name="w3review"   style="display: inline-block; outline-color: var(--default-theme-color) !important; width: 100%; height: 100%; overflow: hidden; `+ele.key.style+`" >`+ele.key.name+`</textarea>`;
        }
    }else if(ele.type === 'color'){
        if(ele.key.name){
            subTemplate += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+ele.key.name+'" style="'+ele.key.style+'">';
        }

    }
    if(ele.type === "progress-bar" && sectionName === "skills_section"){
      // console.log("@@@ data:: ", data);
      template += `
          <div id="`+itemId+`" `+onMouseHoverAndMouseOutMethod+` class="grid-section mob-width-full" style="display: inline-block; width: 49%; float: left; `+ele.itemStyle+` ">
              <div style="width: 95%; display: inline-block;">`+subTemplate+`</div>
              <div id="`+threeDotsId+`"  `+onClickThreeDotsBtn+` style="display: none; float: right; width: 3%; position: relative; top: 10px;"><span style="float: right;"><i id="`+threeDotsBtnId+`" class="fa fa-ellipsis-v" aria-hidden="true" style="color: black; "></i></span></div>
          </div>
      `;
    }else{
      template += `
          <div id="`+itemId+`" `+onMouseHoverAndMouseOutMethod+` class="grid-section mob-width-full" style=" `+ele.itemStyle+` ">
              <div style="width: 95%; display: inline-block;">`+subTemplate+`</div>
              <div id="`+threeDotsId+`"  `+onClickThreeDotsBtn+` style="display: none; float: right; width: 3%; position: relative; top: 10px;"><span style="float: right;"><i id="`+threeDotsBtnId+`" class="fa fa-ellipsis-v" aria-hidden="true" style="color: black; "></i></span></div>
          </div>
      `;
    }

  });
  template += '</div>';
  return template;
}

function sections_template(data, editable, sectionName, sectionIndex, partsIndex, application, request){
  let template = '';
  if(editable){
    template += getGridEditTemplate(data, sectionName, sectionIndex, partsIndex, application);
  }else{
    template += getGridTemplate(data, sectionName, sectionIndex, partsIndex, application, request);
  }
  return template;
}

function get_add_section_slide_template(){
  let template = '';
  let addSectionMethod = 'onclick="onClickAddSection(this, event)"';
  let animation = getAotAnimation({animationType: defaultAnimationType, animationDelay: 50});
  template += `
        <div class="custom-part" `+animation+` `+addSectionMethod+` style="width: 32%; border-radius: 6px; height: 200px; text-align: center; background: white; float: left; ">
              <div style="padding: 20px;">
                  <div><i class="fa fa-plus" style="font-size: 44px; color: var(--default-theme-color)" aria-hidden="true"></i></div>
                  <div style="margin-top: 16px; color: var(--default-theme-color); ">Add Section</div>
              </div>
        </div>
  `;
  return template;
}

function get_carrosel_template(data){
    let template = '';



    return template;
}

var get_api_data = function(uri, authKey){
  // var y = 'https://places.demo.api.here.com/places/v1/places/356tunc6-dd2bb98930f74ea89f835805936177ff;context=Zmxvdy1pZD1lOTdiZTYwYS1hNzQxLTU0OGEtOTA2OC1jODk4MGZlOTkzM2NfMTU2NTk0MzY2NDI0OF8wXzc0MDMmcmFuaz01?app_id=V4wSKcxp8q2UsEzgXebH&app_code=IP9EQlom47cE7GbbxCKFkw';
  // var x = 'https://places.cit.api.here.com/places/v1/places/lookup?app_id=V4wSKcxp8q2UsEzgXebH&app_code=IP9EQlom47cE7GbbxCKFkw&id=356jx7ps-6f2cf687fc300f9df20dda6b8632bfd6';
  // uri = "https://places.demo.api.here.com/places/v1/discover/explore?in=22.769%2C88.371%3Br%3D1000&cat=restaurant&drilldown=true&Accept-Language=en-US%2Cen%3Bq%3D0.9&app_id=V4wSKcxp8q2UsEzgXebH&app_code=IP9EQlom47cE7GbbxCKFkw";
  try {
    var p = new promise(function(resolve, reject){
      var inputOption = null;
      if(authKey !== undefined && authKey !== null && authKey !== ''){
        inputOption = {
                  uri: uri,
                  headers: {
                    Authorization: authKey
                  },
                  method: 'GET'
        };
      }else{
        inputOption = {
                  uri: uri,
                  method: 'GET'
        };
      }
      if(uri === null){
          resolve("SERVER_SIDE_DATA");
      }else{
        request(inputOption,  function(error, response, body){
          if(error || (response.statusCode != 200)){
            console.log("cric api  error: ", error);
          }else{
            console.log("------------- sucessfull here map api result --------------");
            if(body !== undefined || body !== null || body !== ''){
              body = JSON.parse(body);
              resolve(body);
            }else{
              // body = JSON.parse(body);
              body = null;
              resolve(body);
            }
          }
        });
      }
    });
    return p;
  } catch (e) {
      console.log("ERROR: when fetching cric api : ", e);
  } finally {

  }
};

function getPartsEventsSchema(newPartsSchema){

}

function get_schema_to_section_data(section, dataSourceData, sectionName, request, sectionIndex){
    console.log("@@@@ section :: ", section);
    let filteredParts = [];
    if(section.dataSource !== undefined && section.dataSource !== '' && section.dataSource.dataPath !== undefined && section.dataSource.dataPath !== ''){
        if(section.dataSource.dataPath === 'root'){
            // console.log("@@@ section.dataSource.dataPath  === root:: ", section.dataSource.dataPath);
        }else{
          let splitDataPath = section.dataSource.dataPath.split(">");
          console.log("111====== splitDataPath : ", splitDataPath);
          for (var i = 1; i < splitDataPath.length; i++) {
              dataSourceData = dataSourceData[splitDataPath[i].toString()];
              console.log("222====== dataSourceData : ", dataSourceData);

          }
        }
    }

    if(section.dataSource.from !== undefined && section.dataSource.from !== null && section.dataSource.from !== '' && (section.dataSource.from === "API" || section.dataSource.from === "DATA-SERVER")){
      if(section.dataSource.view !== undefined && section.dataSource.view !== null && section.dataSource.view === 'collection'){
          let partsSchema = section.parts[0];
          console.log("@@@@ partsSchema :: ", partsSchema);

          if(dataSourceData !== undefined && dataSourceData !== null && dataSourceData !== ''){
              if(Array.isArray(dataSourceData)){
                    if(section.dataSource.limit === "none"){
                          dataSourceData = dataSourceData;
                    }else if(dataSourceData.length > 10 && section.dataSource.limit !== undefined && section.dataSource.limit !== null && section.dataSource.limit !== ''){
                          dataSourceData = dataSourceData.slice(0, section.dataSource.limit);
                    }
              }

              if(section.dataSource.dataType !== undefined && section.dataSource.defaultAnimationType !== null && section.dataSource.dataType === "Array of elements"){
                  dataSourceData.forEach((item, i) => {
                    let newPartsSchema = JSON.parse(JSON.stringify(partsSchema));
                    let newPartsDesc = [];
                    if(newPartsSchema.desc !== undefined && newPartsSchema.desc !== null  && newPartsSchema.desc !== '' && ((Array.isArray(newPartsSchema.desc)) && (newPartsSchema.desc.length > 0))){
                        newPartsSchema.desc.forEach((ele, eleIndex) => {
                            ele.key.name = item;
                            ele.event.argument.category = item.toString();
                            newPartsDesc.push(ele);
                        })
                    }

                    if((newPartsSchema.event !== undefined && newPartsSchema.event !== null  && newPartsSchema.event !== '') && ((Array.isArray(newPartsSchema.event)) && (newPartsSchema.event.length > 0))){
                          newPartsSchema.event.map((event, index) => {
                              if((event.argument !== undefined && event.argument !== '') && (event.argument.dataSource !== undefined && event.argument.dataSource !== '' && (event.argument.dataSource === "API" || event.argument.dataSource === "DATA-SERVER"))){
                                if(event.argument.innerDataPath !== undefined){
                                    let youtubeIdVal = item[event.argument.innerDataPath.toString()];
                                    let youtubeId = youtubeIdVal.split("/")[2];
                                    let redirectUrl = 'https://www.youtube.com/watch?v='+youtubeId.toString();
                                    item["newurl"] = redirectUrl;
                                    event.argument.key.name = item["newurl"];
                                }else{
                                    if(event.argument.key.name){
                                        console.log("===== event.argument.key.name : ", event.argument.key.name);
                                        console.log("===== item :  ", item);
                                        event.argument.key.name = item[event.argument.key.name.toString()];
                                    }
                                }
                              }
                          })
                    }

                    newPartsSchema.desc = newPartsDesc;
                    filteredParts.push(newPartsSchema);
                  });
              }else{
                dataSourceData.forEach((item, itemIndex) => {

                    let newPartsSchema = JSON.parse(JSON.stringify(partsSchema));
                    let newPartsDesc = [];
                    if(section.dataSource.innerDataPath !== undefined && section.dataSource.innerDataPath !== null && section.dataSource.innerDataPath !== ''){
                          item = item[section.dataSource.innerDataPath.toString()];
                    }

                    if(newPartsSchema.desc !== undefined && newPartsSchema.desc !== null  && newPartsSchema.desc !== '' && ((Array.isArray(newPartsSchema.desc)) && (newPartsSchema.desc.length > 0))){
                        newPartsSchema.desc.forEach((ele, eleIndex) => {
                            if(ele.dataSource !== undefined && ele.dataSource !== null && ele.dataSource !== '' && ele.dataSource === "API"){
                                let dataSourceValue = null;
                                let localItem = JSON.parse(JSON.stringify(item));
                                if(ele.event !== undefined && ele.event.length > 0){
                                    ele.event.forEach((item, i) => {
                                        if(item.argument.dataSource !== undefined && item.argument.dataSource === 'API' && item.argument.key.name !== ''){
                                            item.argument.key.name = localItem[item.argument.key.name.toString()];
                                        }
                                        // console.log("4444444 localItem[ele.event.argument.key.name.toString()] : ", item.argument.key.name.toString());
                                        // console.log("4444444 item.argument.key.name : ", item.argument.key.name);

                                    });

                                }
                                if(ele.key.name.indexOf(">") !== -1){
                                    let splitDataPath = ele.key.name.split(">");
                                    // console.log("8888 splitDataPath arr : ", splitDataPath);
                                    let keyName = splitDataPath[splitDataPath.length - 1];
                                    for (let i = 0; i < splitDataPath.length - 1; i++) {
                                        localItem = localItem[splitDataPath[i].toString()];
                                    }
                                    dataSourceValue = localItem[keyName.toString()];

                                }else{
                                    dataSourceValue = localItem[ele.key.name.toString()];
                                }

                                if(request.apiRef === 'kontestsApisLeftSideBarSearch_section'){
                                    if(ele.event !== undefined && ele.event && ele.event.argument && ele.event.argument.dataSource === 'API'){
                                        if(Array.isArray(ele.event.argument.key)){
                                            let arr = [];
                                            ele.event.argument.key.forEach((arg, i) => {
                                                for (const [key,val] of Object.entries(arg)) {
                                                      let obj = {key: key, value: localItem[val]};
                                                      arr.push(obj);
                                                }
                                            });
                                            ele.event.argument.key = arr;
                                        }else{
                                            let val = localItem[ele.event.argument.key.name.toString()];
                                            ele.event.argument.key.name = val;
                                        }
                                    }
                                }

                                if((dataSourceValue === undefined || dataSourceValue === null || dataSourceValue === '' || dataSourceValue === "None" || dataSourceValue === "none")){
                                    if((ele.key.defaultValue !== undefined && ele.key.defaultValue !== null && ele.key.defaultValue !== '')){
                                      ele.key.name = ele.key.defaultValue;
                                    }else{
                                        ele.key.name = ele.key.name;
                                    }
                                }else{
                                    ele.key.name = dataSourceValue;
                                }


                                newPartsDesc.push(ele);
                            }else if(ele.dataSource === undefined){
                                newPartsDesc.push(ele);
                            }
                        })
                    }

                    if((newPartsSchema.event !== undefined && newPartsSchema.event !== null  && newPartsSchema.event !== '') && ((Array.isArray(newPartsSchema.event)) && (newPartsSchema.event.length > 0))){
                          newPartsSchema.event.map((event, index) => {
                              let localItem = JSON.parse(JSON.stringify(item));
                              if((event.argument !== undefined && event.argument !== '') && (event.argument.dataSource !== undefined && event.argument.dataSource !== '' && (event.argument.dataSource === "API" || event.argument.dataSource === "DATA-SERVER"))){
                                if(event.argument.innerDataPath !== undefined){
                                    let youtubeIdVal = localItem[event.argument.innerDataPath.toString()];
                                    let youtubeId = youtubeIdVal.split("/")[2];
                                    let redirectUrl = 'https://www.youtube.com/watch?v='+youtubeId.toString();
                                    localItem["newurl"] = redirectUrl;
                                    event.argument.key.name = localItem["newurl"];
                                }else{
                                    if(event.argument.key.name){
                                        event.argument.key.name = localItem[event.argument.key.name.toString()];
                                    }
                                }
                              }
                          })
                    }

                    newPartsSchema.desc = newPartsDesc;
                    filteredParts.push(newPartsSchema);
                })
              }
          }
      }
      // console.log("9999999999999999999999999999999999999999999 finally filteredParts:: \n\n", filteredParts);
      return filteredParts;
    }else{
      return filteredParts
    }

}

function get_section_template(sectionName, editable, data, application, request){
    // console.log("==== calling create new section ====");
    // console.log("#### editable: ", editable);
    // console.log("#### sectionName: ", sectionName);
    // console.log("#### section data : ", data.dataSource.data.entries);
    let dataSourceData = null;
    // if(data !== undefined && data.dataSource !== undefined && data.dataSource.data !== undefined && data.dataSource.data !== null && data.dataSource.data !== ''){
    //       dataSourceData = data.dataSource.data;
    // }
    if(request.apiRef !== 'custom_search' && data !== undefined && data.dataSource !== undefined && data.dataSource.data !== undefined && data.dataSource.data !== null && data.dataSource.data !== ''){
          dataSourceData = data.dataSource.data;
    }else if(request.apiRef === 'custom_search'){
          dataSourceData = data.dataSource.data;
    }

    let template = '';
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let blockTemplate = '';
    let containerStyle = '';
    let blockStyle = '';

    if(data && data.containerStyle !== undefined && data.containerStyle !== null && data.containerStyle !== ''){
        containerStyle += data.containerStyle;
    }
    if(data && data.block && data.block.blockStyle !== undefined && data.block.blockStyle !== ''){
        blockStyle += data.block.blockStyle;
    }
    if(data && data.block && data.block.sections && data.block.sections.length > 0){
        data.block.sections.forEach((section, sectionIndex) => {
            let animation = '';
            let newlyAddedSectionStyle = '';
            let sectionsTemplate = '';
            let sectionClass = '';
            let sectionStyle = '';
            let customSectionId = '';
            let isSectionVisibleStyle = '';
            let sectionId = 'section_'+sectionName+'-'+sectionIndex;
            animation += getAotAnimation(section);
            section = JSON.parse(JSON.stringify(section));
            if(section.sectionClass !== undefined && section.sectionClass !== ''){
                  sectionClass += section.sectionClass;
            }
            if(section.sectionStyle !== undefined && section.sectionStyle !== '' && section.sectionStyle !== ''){
                  sectionStyle += section.sectionStyle;
            }
            if(section.isSectionVisible !== undefined && section.isSectionVisible !== ''){
                  if(section.isSectionVisible.state){
                      isSectionVisibleStyle += 'display: block;';
                  }else{
                      isSectionVisibleStyle += 'display: none;';
                  }
            }
            if(section.dataSource !== undefined && section.dataSource !== null && section.dataSource !== ''){
                let newPartsSchema = get_schema_to_section_data(section, dataSourceData, sectionName, request, sectionIndex);
                section.parts = newPartsSchema;
            }
            section.parts.forEach((ele, partsIndex) => {
                  let partsTemplate = '';
                  let id = "part_"+sectionName+'-'+sectionIndex+'-'+partsIndex;
                  let method = '';
                  let dataset = '';
                  let data = '';
                  let style = '';
                  let classTemplate = '';
                  let additionalClass = '';
                  let additionalStyle = '';
                  let secClass = '';
                  let newlyAddedSectionStyle = '';
                  let draggableTemplate = '';
                  if(ele.desc !== undefined && ele.desc !== null && ele.desc && ele.desc.length > 0){
                      // console.log("======= ele.desc : ", JSON.stringify(ele.desc));
                      partsTemplate += sections_template(ele.desc, editable, sectionName, sectionIndex, partsIndex, application, request);
                      // console.log("======== partsTemplate : ", partsTemplate);
                  }
                  if(ele.isNewlyAdded !== undefined && ele.isNewlyAdded === true){
                      ele.isNewlyAdded = false;
                  }
                  if(ele.partStyle !== undefined && ele.partStyle !== ''){
                      style += ele.partStyle;
                  }
                  if(ele.partClass !== undefined && ele.partClass !== ''){
                      secClass += ele.partClass;
                  }
                  if((ele.isSectionToggle !== undefined && ele.isSectionToggle !== null && ele.isSectionToggle !== '')){
                        if(ele.isSectionToggle.state === true){
                            additionalStyle += ele.isSectionToggle.style.split("?")[0];
                            additionalClass += ele.isSectionToggle.class.split("?")[0];
                        }else if(ele.isSectionToggle.state === false){
                            additionalStyle += ele.isSectionToggle.style.split("?")[1];
                            additionalClass += ele.isSectionToggle.class.split("?")[1];
                        }
                  }
                  if((ele.isConditionalStyles !== undefined && ele.isConditionalStyles !== null && ele.isConditionalStyles !== '')){
                        if(ele.isConditionalStyles.state === true){
                            additionalStyle += ele.isConditionalStyles.style.split("?")[0];
                            additionalClass += ele.isConditionalStyles.class.split("?")[0];
                        }else if(ele.isConditionalStyles.state === false){
                            additionalStyle += ele.isConditionalStyles.style.split("?")[1];
                            additionalClass += ele.isConditionalStyles.class.split("?")[1];
                        }
                  }
                  if(ele.dataset !== undefined && ele.dataset !== ''){
                      ele.dataset.isSectionToggle = {};
                      ele.dataset.isSectionToggle.state = ele.isSectionToggle.state;
                      let obj = JSON.stringify(ele.dataset);
                      dataset += `data-all='`+obj+`'`;
                  }
                  if((ele.draggable !== undefined && ele.draggable !== null && ele.draggable === true)){
                        draggableTemplate += 'draggable="true"';
                  }
                  if(ele.event !== undefined && ele.event !== ''){
                      method += get_event_template(ele.event, application);
                  }
                  if(editable){
                      let onMouseHoverAndMouseOutMethod = 'onmouseover="showHideThreeDotsbtn(this, \''+'mouse_over'+'\')" onmouseout="showHideThreeDotsbtn(this, \''+'mouse_out'+'\')"';
                      let threeDotsId = 'part_three_dots_'+sectionName+'-'+sectionIndex+'-'+partsIndex;
                      let threeDotsMethod = 'onclick="onClickSectionThreeDotsBtn(this, event, \''+id+'\', \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\')"'
                      if((ele.isDraggable !== undefined && ele.isDraggable !== null && ele.isDraggable === true)){
                          draggableTemplate += 'draggable="true" ondrop="drop(this, event)" ondragover="allowDrop(this, event)" ondragstart="drag(this, event)"';
                      }
                      sectionsTemplate += `
                            <div class=" custom-part" id="`+id+`"  `+animation+` `+draggableTemplate+` style="float: left; `+style+` ; `+newlyAddedSectionStyle+`">
                                <div  style="display: inline-block; width: 95%; float: left;">`+partsTemplate+`</div>
                                <div style="display: inline-block; width: 3%; float: right;">
                                  <i id="`+threeDotsId+`" `+threeDotsMethod+` class="fa fa-ellipsis-v default-theme-color" aria-hidden="true" style=" display: block; width: 21px; text-align: center; padding: 3px; border-radius: 50px;"></i>
                                </div>
                            </div>
                      `;

                  }
                  else if(section.slider !== undefined && section.slider !== null && section.slider !== ''){
                    if(partsIndex === 0){
                      sectionsTemplate += `
                        <div class="item active">
                            <div>`+partsTemplate+`</div>
                        </div>
                      `;
                    }else{
                      sectionsTemplate += `
                        <div class="item ">
                            <div>`+partsTemplate+`</div>
                        </div>
                      `;
                    }
                  }else{
                      sectionsTemplate += `
                            <div class=" custom-part `+classTemplate+`  `+secClass+`  `+additionalClass+`" id="`+id+`" `+dataset+` `+animation+` `+method+` `+draggableTemplate+`  style="`+style+`  `+additionalStyle+`">
                                <div>`+partsTemplate+`</div>
                            </div>
                      `;
                  }
            });
            if(section.slider !== undefined && section.slider !== null && section.slider !== ''){
                let indicatorsTemplate = '';
                let navigationTemplate = '';

                if(section.slider.indicators){
                    let indicatorsLength = section.parts.length;
                    if(indicatorsLength === 1){
                      indicatorsTemplate += `
                        <ol class="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        </ol>
                      `;
                    }else{
                        let inActiveIndicatorsTemplate = '';
                        let activeIndicatorsTemplate = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
                        for (var i = 1; i < indicatorsLength; i++) {
                            inActiveIndicatorsTemplate += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
                        }
                        indicatorsTemplate += `
                          <ol class="carousel-indicators">
                                `+activeIndicatorsTemplate+`
                                `+inActiveIndicatorsTemplate+`
                          </ol>
                        `;
                    }
                }
                if(section.slider.navigation){
                    let leftNavigation = '';
                    let rightNavigation = '';
                    if(section.slider.navigation.type === 'glyphicon'){
                        let leftStyle = '';
                        if(section.slider.navigation.left.style !== undefined && section.slider.navigation.left.style !== '' && section.slider.navigation.left.style !== null){
                            leftStyle += section.slider.navigation.left.style;
                        }
                        leftNavigation += '<span class="glyphicon '+section.slider.navigation.left.icon+'" style="color: var(--default-theme-color); '+leftStyle+'"></span>'

                        let rightStyle = '';
                        if(section.slider.navigation.right.style !== undefined && section.slider.navigation.right.style !== '' && section.slider.navigation.right.style !== null){
                            rightStyle += section.slider.navigation.right.style;
                        }
                        rightNavigation += '<span class="glyphicon '+section.slider.navigation.right.icon+'" style="color: var(--default-theme-color); '+rightStyle+'"></span>'

                    }else if(section.slider.navigation.type === 'fontAwesome'){
                        let leftStyle = '';
                        if(section.slider.navigation.left.style !== undefined && section.slider.navigation.left.style !== '' && section.slider.navigation.left.style !== null){
                            leftStyle += section.slider.navigation.left.style;
                        }
                        // leftNavigation += '<span class="glyphicon '+section.slider.navigation.left.icon+'" style="color: var(--default-theme-color); '+style+'"></span>';
                        leftNavigation += `  <i class="fa `+section.slider.navigation.left.icon+`" style="color: var(--default-theme-color); font-family: 'fontawesome'; `+leftStyle+`" aria-hidden="true"></i>`;
                        let rightStyle = '';
                        if(section.slider.navigation.right.style !== undefined && section.slider.navigation.right.style !== '' && section.slider.navigation.right.style !== null){
                            rightStyle += section.slider.navigation.right.style;
                        }
                        // rightNavigation += '<span class="glyphicon '+section.slider.navigation.right.icon+'" style="color: var(--default-theme-color); '+style+'"></span>'
                        rightNavigation += `  <i class="fa `+section.slider.navigation.right.icon+`" style="color: var(--default-theme-color); font-family: 'fontawesome'; `+rightStyle+`" aria-hidden="true"></i>`;

                    }
                    navigationTemplate += `
                      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        `+leftNavigation+`
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        `+rightNavigation+`
                        <span class="sr-only">Next</span>
                      </a>
                    `;
                }
                if(section.slider.type === "carousel"){
                   blockTemplate = `
                      <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            `+indicatorsTemplate+`
                            <div class="carousel-inner">`+sectionsTemplate+`</div>
                            `+navigationTemplate+`
                      </div>
                    `
                }
            }else{
              blockTemplate += `
                  <div id="`+sectionId+` " class="`+sectionClass+`" style=" `+sectionStyle+`  `+isSectionVisibleStyle+`">
                    `+sectionsTemplate+`
                  </div>
              `;
            }
        })
    }

    template += `
          <div class="container" style="`+containerStyle+`">
              <div class="skills-content" style="width: 100%; `+blockStyle+`" data-aos="fade-up" >
                  `+blockTemplate+`
              </div>
          </div>
    `;

    if(editable){
      return {template : template, templateData: data};
    }else{
      return template;
    }
}

function backup_get_section_template(sectionName, editable, data, application, request){
    console.log("==== calling create new section ====");
    console.log("#### editable: ", editable);
    console.log("#### sectionName: ", sectionName);
    console.log("#### section data : ", data.dataSource.data.entries);
    let dataSourceData = null;
    // if(data !== undefined && data.dataSource !== undefined && data.dataSource.data !== undefined && data.dataSource.data !== null && data.dataSource.data !== ''){
    //       dataSourceData = data.dataSource.data;
    // }
    if(request.apiRef !== 'custom_search' && data !== undefined && data.dataSource !== undefined && data.dataSource.data !== undefined && data.dataSource.data !== null && data.dataSource.data !== ''){
          dataSourceData = data.dataSource.data;
    }else if(request.apiRef === 'custom_search'){
          dataSourceData = data.dataSource.data;
    }

    let template = '';
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let blockTemplate = '';
    let containerStyle = '';
    let blockStyle = '';

    if(data && data.containerStyle !== undefined && data.containerStyle !== null && data.containerStyle !== ''){
        containerStyle += data.containerStyle;
    }
    if(data && data.block && data.block.blockStyle !== undefined && data.block.blockStyle !== ''){
        blockStyle += data.block.blockStyle;
    }
    if(data && data.block && data.block.sections && data.block.sections.length > 0){

        data.block.sections.forEach((section, sectionIndex) => {
            let animation = '';
            let newlyAddedSectionStyle = '';
            let sectionsTemplate = '';
            let sectionClass = '';
            let sectionStyle = '';
            let customSectionId = '';
            let isSectionVisibleStyle = '';
            let sectionId = 'section_'+sectionName+'-'+sectionIndex;
            animation += getAotAnimation(section);
            let localSection = JSON.parse(JSON.stringify(section));
            if(localSection.sectionClass !== undefined && localSection.sectionClass !== ''){
                  sectionClass += localSection.sectionClass;
            }

            if(localSection.sectionStyle !== undefined && localSection.sectionStyle !== '' && localSection.sectionStyle !== ''){
                  sectionStyle += localSection.sectionStyle;
            }

            if(localSection.isSectionVisible !== undefined && localSection.isSectionVisible !== ''){
                  if(localSection.isSectionVisible.state){
                      isSectionVisibleStyle += 'display: block;';
                  }else{
                      isSectionVisibleStyle += 'display: none;';
                  }
            }

            if(localSection.dataSource !== undefined && localSection.dataSource !== null && localSection.dataSource !== ''){

                let newPartsSchema = get_schema_to_section_data(localSection, dataSourceData, sectionName, request);
                console.log("#### newPartsSchema :: ", newPartsSchema);
                section.parts = newPartsSchema;
            }

            localSection.parts.forEach((ele, partsIndex) => {
                  let partsTemplate = '';
                  let id = "part_"+sectionName+'-'+sectionIndex+'-'+partsIndex;
                  let method = '';
                  let dataset = '';
                  let data = '';
                  let style = '';
                  let classTemplate = '';
                  let additionalClass = '';
                  let additionalStyle = '';
                  let secClass = '';
                  let newlyAddedSectionStyle = '';
                  let draggableTemplate = '';
                  if(ele.desc !== undefined && ele.desc !== null && ele.desc && ele.desc.length > 0){
                      console.log("======= ele.desc : ", JSON.stringify(ele.desc));
                      partsTemplate += sections_template(ele.desc, editable, sectionName, sectionIndex, partsIndex, application, request);
                      console.log("======== partsTemplate : ", partsTemplate);
                  }

                  if(ele.isNewlyAdded !== undefined && ele.isNewlyAdded === true){
                      ele.isNewlyAdded = false;
                  }

                  if(ele.partStyle !== undefined && ele.partStyle !== ''){
                      style += ele.partStyle;
                  }

                  if(ele.partClass !== undefined && ele.partClass !== ''){
                      secClass += ele.partClass;
                  }

                  if((ele.isSectionToggle !== undefined && ele.isSectionToggle !== null && ele.isSectionToggle !== '')){
                        if(ele.isSectionToggle.state === true){
                            additionalStyle += ele.isSectionToggle.style.split("?")[0];
                            additionalClass += ele.isSectionToggle.class.split("?")[0];
                        }else if(ele.isSectionToggle.state === false){
                            additionalStyle += ele.isSectionToggle.style.split("?")[1];
                            additionalClass += ele.isSectionToggle.class.split("?")[1];
                        }
                  }

                  if((ele.isConditionalStyles !== undefined && ele.isConditionalStyles !== null && ele.isConditionalStyles !== '')){
                        if(ele.isConditionalStyles.state === true){
                            additionalStyle += ele.isConditionalStyles.style.split("?")[0];
                            additionalClass += ele.isConditionalStyles.class.split("?")[0];
                        }else if(ele.isConditionalStyles.state === false){
                            additionalStyle += ele.isConditionalStyles.style.split("?")[1];
                            additionalClass += ele.isConditionalStyles.class.split("?")[1];
                        }
                  }

                  if(ele.dataset !== undefined && ele.dataset !== ''){
                      ele.dataset.isSectionToggle = {};
                      ele.dataset.isSectionToggle.state = ele.isSectionToggle.state;
                      let obj = JSON.stringify(ele.dataset);
                      dataset += `data-all='`+obj+`'`;
                  }

                  if((ele.draggable !== undefined && ele.draggable !== null && ele.draggable === true)){
                        draggableTemplate += 'draggable="true"';
                  }

                  if(ele.event !== undefined && ele.event !== ''){
                      method += get_event_template(ele.event, application);
                  }

                  if(editable){
                      let onMouseHoverAndMouseOutMethod = 'onmouseover="showHideThreeDotsbtn(this, \''+'mouse_over'+'\')" onmouseout="showHideThreeDotsbtn(this, \''+'mouse_out'+'\')"';
                      let threeDotsId = 'part_three_dots_'+sectionName+'-'+sectionIndex+'-'+partsIndex;
                      let threeDotsMethod = 'onclick="onClickSectionThreeDotsBtn(this, event, \''+id+'\', \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\')"'
                      if((ele.isDraggable !== undefined && ele.isDraggable !== null && ele.isDraggable === true)){
                          draggableTemplate += 'draggable="true" ondrop="drop(this, event)" ondragover="allowDrop(this, event)" ondragstart="drag(this, event)"';
                      }
                      sectionsTemplate += `
                            <div class=" custom-part" id="`+id+`"  `+animation+` `+draggableTemplate+` style="float: left; `+style+` ; `+newlyAddedSectionStyle+`">
                                <div  style="display: inline-block; width: 95%; float: left;">`+partsTemplate+`</div>
                                <div style="display: inline-block; width: 3%; float: right;">
                                  <i id="`+threeDotsId+`" `+threeDotsMethod+` class="fa fa-ellipsis-v default-theme-color" aria-hidden="true" style=" display: block; width: 21px; text-align: center; padding: 3px; border-radius: 50px;"></i>
                                </div>
                            </div>
                      `;

                  }
                  // else if(sectionName === 'products_section'){
                  //     let img = 'static/img/gini_products_screenshots/giniChatBotHome.PNG';
                  // }
                  else if(localSection.slider !== undefined && localSection.slider !== null && localSection.slider !== ''){
                    if(partsIndex === 0){
                      sectionsTemplate += `
                        <div class="item active">
                            <div>`+partsTemplate+`</div>
                        </div>
                      `;
                    }else{
                      sectionsTemplate += `
                        <div class="item ">
                            <div>`+partsTemplate+`</div>
                        </div>
                      `;
                    }


                  }else{
                      sectionsTemplate += `
                            <div class=" custom-part `+classTemplate+`  `+secClass+`  `+additionalClass+`" id="`+id+`" `+dataset+` `+animation+` `+method+` `+draggableTemplate+`  style="`+style+`  `+additionalStyle+`">
                                <div>`+partsTemplate+`</div>
                            </div>
                      `;
                  }
            });

            if(localSection.slider !== undefined && localSection.slider !== null && localSection.slider !== ''){
                let indicatorsTemplate = '';
                let navigationTemplate = '';

                if(localSection.slider.indicators){
                    let indicatorsLength = localSection.parts.length;
                    if(indicatorsLength === 1){
                      indicatorsTemplate += `
                        <ol class="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        </ol>
                      `;
                    }else{
                        let inActiveIndicatorsTemplate = '';
                        let activeIndicatorsTemplate = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
                        for (var i = 1; i < indicatorsLength; i++) {
                            inActiveIndicatorsTemplate += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
                        }
                        indicatorsTemplate += `
                          <ol class="carousel-indicators">
                                `+activeIndicatorsTemplate+`
                                `+inActiveIndicatorsTemplate+`
                          </ol>
                        `;
                    }

                }
                if(localSection.slider.navigation){
                    let leftNavigation = '';
                    let rightNavigation = '';
                    if(localSection.slider.navigation.type === 'glyphicon'){
                        let leftStyle = '';
                        if(localSection.slider.navigation.left.style !== undefined && localSection.slider.navigation.left.style !== '' && localSection.slider.navigation.left.style !== null){
                            leftStyle += localSection.slider.navigation.left.style;
                        }
                        leftNavigation += '<span class="glyphicon '+localSection.slider.navigation.left.icon+'" style="color: var(--default-theme-color); '+leftStyle+'"></span>'

                        let rightStyle = '';
                        if(localSection.slider.navigation.right.style !== undefined && localSection.slider.navigation.right.style !== '' && localSection.slider.navigation.right.style !== null){
                            rightStyle += localSection.slider.navigation.right.style;
                        }
                        rightNavigation += '<span class="glyphicon '+localSection.slider.navigation.right.icon+'" style="color: var(--default-theme-color); '+rightStyle+'"></span>'

                    }else if(localSection.slider.navigation.type === 'fontAwesome'){
                        let leftStyle = '';
                        if(localSection.slider.navigation.left.style !== undefined && localSection.slider.navigation.left.style !== '' && localSection.slider.navigation.left.style !== null){
                            leftStyle += localSection.slider.navigation.left.style;
                        }
                        // leftNavigation += '<span class="glyphicon '+section.slider.navigation.left.icon+'" style="color: var(--default-theme-color); '+style+'"></span>';
                        leftNavigation += `  <i class="fa `+localSection.slider.navigation.left.icon+`" style="color: var(--default-theme-color); font-family: 'fontawesome'; `+leftStyle+`" aria-hidden="true"></i>`;
                        let rightStyle = '';
                        if(localSection.slider.navigation.right.style !== undefined && localSection.slider.navigation.right.style !== '' && localSection.slider.navigation.right.style !== null){
                            rightStyle += localSection.slider.navigation.right.style;
                        }
                        // rightNavigation += '<span class="glyphicon '+section.slider.navigation.right.icon+'" style="color: var(--default-theme-color); '+style+'"></span>'
                        rightNavigation += `  <i class="fa `+localSection.slider.navigation.right.icon+`" style="color: var(--default-theme-color); font-family: 'fontawesome'; `+rightStyle+`" aria-hidden="true"></i>`;

                    }
                    navigationTemplate += `
                      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        `+leftNavigation+`
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        `+rightNavigation+`
                        <span class="sr-only">Next</span>
                      </a>
                    `;
                }
                if(localSection.slider.type === "carousel"){
                   blockTemplate = `
                      <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            `+indicatorsTemplate+`
                            <div class="carousel-inner">`+sectionsTemplate+`</div>
                            `+navigationTemplate+`
                      </div>
                    `
                }
                // <div class="carousel-indicators">`+indicatorsTemplate+`</div>
                // <div class="carousel-inner">`+sectionsTemplate+`</div>
                // <div class="carousel-navigation">`+navigationTemplate+`</div>
            }else{
              blockTemplate += `
                  <div id="`+sectionId+` " class="`+sectionClass+`" style=" `+sectionStyle+`  `+isSectionVisibleStyle+`">
                    `+sectionsTemplate+`
                  </div>
              `;
            }

            // blockTemplate += `
            //     <div id="`+sectionId+` " class="`+sectionClass+`" style=" `+sectionStyle+`  `+isSectionVisibleStyle+`">
            //       `+sectionsTemplate+`
            //     </div>
            // `;

        })
    }

    template += `
          <div class="container" style="`+containerStyle+`">
              <div class="skills-content" style="width: 100%; `+blockStyle+`" data-aos="fade-up" >
                  `+blockTemplate+`
              </div>
          </div>
    `;

    if(editable){
      return {template : template, templateData: data};
    }else{
      return template;
    }
}

async function get_custom_section_template(sectionName, editable, data, application){
    console.log("==== calling get_custom_section_template function () ====");
    console.log("#### editable: ", editable);
    console.log("#### sectionName: ", sectionName);
    console.log("#### section data : ", data);

    let template = '';
    // let data = portfolio_data[sectionName];
    // let data = getPortfolioData(sectionName);
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let blockTemplate = '';
    let containerStyle = '';
    let blockStyle = '';
    let sectionCount = 0;

    if(data && data.containerStyle !== undefined && data.containerStyle !== null && data.containerStyle !== ''){
        containerStyle += data.containerStyle;
    }
    if(data && data.block && data.block.blockStyle !== undefined && data.block.blockStyle !== ''){
        blockStyle += data.block.blockStyle;
    }
    if(data && data.block && data.block.sections && data.block.sections.length > 0){

        data.block.sections.forEach((section, sectionIndex) => {
            let animation = '';
            let newlyAddedSectionStyle = '';
            let sectionsTemplate = '';
            let sectionClass = '';
            let sectionStyle = '';
            let customSectionId = '';
            let isSectionVisibleStyle = '';
            let sectionId = 'section_'+sectionName+'-'+sectionIndex;

            sectionCount++;

            animation += getAotAnimation(section);

            if(section.sectionClass !== undefined && section.sectionClass !== ''){
                  sectionClass += section.sectionClass;
            }

            if(section.sectionStyle !== undefined && section.sectionStyle !== '' && section.sectionStyle !== ''){
                  sectionStyle += section.sectionStyle;
            }

            if(section.isSectionVisible !== undefined && section.isSectionVisible !== ''){
                  if(section.isSectionVisible.state){
                      isSectionVisibleStyle += 'display: block;';
                  }else{
                      isSectionVisibleStyle += 'display: none;';
                  }
            }

            if(section.dataSource !== undefined && section.dataSource !== null && section.dataSource !== ''){
                // let parts = get_schema_to_section_data(section);
                get_schema_to_section_data(section).then((section) => {
                  console.log("@@@@@ 8888888888888888888888888888888888888888888888888888888888888888 parts data :: \n\n", section);

                  section.parts.forEach((ele, partsIndex) => {
                        let partsTemplate = '';
                        let id = "part_"+sectionName+'-'+sectionIndex+'-'+partsIndex;
                        let method = '';
                        let dataset = '';
                        let data = '';
                        let style = '';
                        let classTemplate = '';
                        let additionalClass = '';
                        let additionalStyle = '';
                        let secClass = '';
                        let newlyAddedSectionStyle = '';
                        let draggableTemplate = '';
                        if(ele.desc !== undefined && ele.desc !== null && ele.desc && ele.desc.length > 0){
                            partsTemplate += sections_template(ele.desc, editable, sectionName, sectionIndex, partsIndex, application, request);
                        }

                        if(ele.isNewlyAdded !== undefined && ele.isNewlyAdded === true){
                            ele.isNewlyAdded = false;
                        }

                        if(ele.partStyle !== undefined && ele.partStyle !== ''){
                            style += ele.partStyle;
                        }

                        if(ele.partClass !== undefined && ele.partClass !== ''){
                            secClass += ele.partClass;
                        }

                        if((ele.isSectionToggle !== undefined && ele.isSectionToggle !== null && ele.isSectionToggle !== '')){
                              if(ele.isSectionToggle.state === true){
                                  additionalStyle += ele.isSectionToggle.style.split("?")[0];
                                  additionalClass += ele.isSectionToggle.class.split("?")[0];
                              }else if(ele.isSectionToggle.state === false){
                                  additionalStyle += ele.isSectionToggle.style.split("?")[1];
                                  additionalClass += ele.isSectionToggle.class.split("?")[1];
                              }
                        }

                        if((ele.isConditionalStyles !== undefined && ele.isConditionalStyles !== null && ele.isConditionalStyles !== '')){
                              if(ele.isConditionalStyles.state === true){
                                  additionalStyle += ele.isConditionalStyles.style.split("?")[0];
                                  additionalClass += ele.isConditionalStyles.class.split("?")[0];
                              }else if(ele.isConditionalStyles.state === false){
                                  additionalStyle += ele.isConditionalStyles.style.split("?")[1];
                                  additionalClass += ele.isConditionalStyles.class.split("?")[1];
                              }
                        }

                        if(ele.dataset !== undefined && ele.dataset !== ''){
                            ele.dataset.isSectionToggle = {};
                            ele.dataset.isSectionToggle.state = ele.isSectionToggle.state;
                            let obj = JSON.stringify(ele.dataset);
                            dataset += `data-all='`+obj+`'`;
                        }

                        if((ele.draggable !== undefined && ele.draggable !== null && ele.draggable === true)){
                              draggableTemplate += 'draggable="true"';
                        }

                        if(ele.event !== undefined && ele.event !== ''){
                            method += get_event_template(ele.event, application);
                        }

                        if(editable){
                            let onMouseHoverAndMouseOutMethod = 'onmouseover="showHideThreeDotsbtn(this, \''+'mouse_over'+'\')" onmouseout="showHideThreeDotsbtn(this, \''+'mouse_out'+'\')"';
                            let threeDotsId = 'part_three_dots_'+sectionName+'-'+sectionIndex+'-'+partsIndex;
                            let threeDotsMethod = 'onclick="onClickSectionThreeDotsBtn(this, event, \''+id+'\', \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\')"'
                            if((ele.isDraggable !== undefined && ele.isDraggable !== null && ele.isDraggable === true)){
                                draggableTemplate += 'draggable="true" ondrop="drop(this, event)" ondragover="allowDrop(this, event)" ondragstart="drag(this, event)"';
                            }
                            sectionsTemplate += `
                                  <div class=" custom-part" id="`+id+`"  `+animation+` `+draggableTemplate+` style="float: left; `+style+` ; `+newlyAddedSectionStyle+`">
                                      <div  style="display: inline-block; width: 95%; float: left;">`+partsTemplate+`</div>
                                      <div style="display: inline-block; width: 3%; float: right;">
                                        <i id="`+threeDotsId+`" `+threeDotsMethod+` class="fa fa-ellipsis-v default-theme-color" aria-hidden="true" style=" display: block; width: 21px; text-align: center; padding: 3px; border-radius: 50px;"></i>
                                      </div>
                                  </div>
                            `;

                        }
                        // else if(sectionName === 'products_section'){
                        //     let img = 'static/img/gini_products_screenshots/giniChatBotHome.PNG';
                        // }
                        else if(section.slider !== undefined && section.slider !== null && section.slider !== ''){
                          if(partsIndex === 0){
                            sectionsTemplate += `
                              <div class="item active">
                                  <div>`+partsTemplate+`</div>
                              </div>
                            `;
                          }else{
                            sectionsTemplate += `
                              <div class="item ">
                                  <div>`+partsTemplate+`</div>
                              </div>
                            `;
                          }


                        }else{
                            sectionsTemplate += `
                                  <div class=" custom-part `+classTemplate+`  `+secClass+`  `+additionalClass+`" id="`+id+`" `+dataset+` `+animation+` `+method+` `+draggableTemplate+`  style="`+style+`  `+additionalStyle+`">
                                      <div>`+partsTemplate+`</div>
                                  </div>
                            `;
                        }
                  });

                  if(section.slider !== undefined && section.slider !== null && section.slider !== ''){
                      let indicatorsTemplate = '';
                      let navigationTemplate = '';

                      if(section.slider.indicators){
                          let indicatorsLength = section.parts.length;
                          if(indicatorsLength === 1){
                            indicatorsTemplate += `
                              <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                              </ol>
                            `;
                          }else{
                              let inActiveIndicatorsTemplate = '';
                              let activeIndicatorsTemplate = '<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
                              for (var i = 1; i < indicatorsLength; i++) {
                                  inActiveIndicatorsTemplate += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
                              }
                              indicatorsTemplate += `
                                <ol class="carousel-indicators">
                                      `+activeIndicatorsTemplate+`
                                      `+inActiveIndicatorsTemplate+`
                                </ol>
                              `;
                          }

                      }
                      if(section.slider.navigation){
                          let leftNavigation = '';
                          let rightNavigation = '';
                          if(section.slider.navigation.type === 'glyphicon'){
                              let leftStyle = '';
                              if(section.slider.navigation.left.style !== undefined && section.slider.navigation.left.style !== '' && section.slider.navigation.left.style !== null){
                                  leftStyle += section.slider.navigation.left.style;
                              }
                              leftNavigation += '<span class="glyphicon '+section.slider.navigation.left.icon+'" style="color: var(--default-theme-color); '+leftStyle+'"></span>'

                              let rightStyle = '';
                              if(section.slider.navigation.right.style !== undefined && section.slider.navigation.right.style !== '' && section.slider.navigation.right.style !== null){
                                  rightStyle += section.slider.navigation.right.style;
                              }
                              rightNavigation += '<span class="glyphicon '+section.slider.navigation.right.icon+'" style="color: var(--default-theme-color); '+rightStyle+'"></span>'

                          }else if(section.slider.navigation.type === 'fontAwesome'){
                              let leftStyle = '';
                              if(section.slider.navigation.left.style !== undefined && section.slider.navigation.left.style !== '' && section.slider.navigation.left.style !== null){
                                  leftStyle += section.slider.navigation.left.style;
                              }
                              // leftNavigation += '<span class="glyphicon '+section.slider.navigation.left.icon+'" style="color: var(--default-theme-color); '+style+'"></span>';
                              leftNavigation += `  <i class="fa `+section.slider.navigation.left.icon+`" style="color: var(--default-theme-color); font-family: 'fontawesome'; `+leftStyle+`" aria-hidden="true"></i>`;
                              let rightStyle = '';
                              if(section.slider.navigation.right.style !== undefined && section.slider.navigation.right.style !== '' && section.slider.navigation.right.style !== null){
                                  rightStyle += section.slider.navigation.right.style;
                              }
                              // rightNavigation += '<span class="glyphicon '+section.slider.navigation.right.icon+'" style="color: var(--default-theme-color); '+style+'"></span>'
                              rightNavigation += `  <i class="fa `+section.slider.navigation.right.icon+`" style="color: var(--default-theme-color); font-family: 'fontawesome'; `+rightStyle+`" aria-hidden="true"></i>`;

                          }
                          navigationTemplate += `
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                              `+leftNavigation+`
                              <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                              `+rightNavigation+`
                              <span class="sr-only">Next</span>
                            </a>
                          `;
                      }
                      if(section.slider.type === "carousel"){
                         blockTemplate = `
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                  `+indicatorsTemplate+`
                                  <div class="carousel-inner">`+sectionsTemplate+`</div>
                                  `+navigationTemplate+`
                            </div>
                          `
                      }
                      // <div class="carousel-indicators">`+indicatorsTemplate+`</div>
                      // <div class="carousel-inner">`+sectionsTemplate+`</div>
                      // <div class="carousel-navigation">`+navigationTemplate+`</div>
                  }else{
                    blockTemplate += `
                        <div id="`+sectionId+` " class="`+sectionClass+`" style=" `+sectionStyle+`  `+isSectionVisibleStyle+`">
                          `+sectionsTemplate+`
                        </div>
                    `;
                  }

                })

            }



        })
    }

    // 3ft/3ft 18mm ply + 1.5 inch perek 100gm + half inch perek 5 takar + 3/4 channel 8ft + 25m;.                       ,             <                   ;///////////kkkkkkkkkkkkkkkppppppppppppppp0gm fevicol + 4pcs allmunium kona + headless perek 50gm + kacher klip 12 pcs + fivet screw +

    if(data && data.block && data.block.sections && data.block.sections.length === sectionCount){
      template += `
            <div class="container" style="`+containerStyle+`">
                <div class="skills-content" style="width: 100%; `+blockStyle+`" data-aos="fade-up" >
                    `+blockTemplate+`
                </div>
            </div>
      `;

      if(editable){
        return {template : template, templateData: data};
      }else{
        return template;
      }
    }


}


function work_section(sectionName, category){
    console.log("======= calling work section function ========");
    let template = '';
    // let data = portfolio_data[sectionName];
    console.log("@@@ sectionName : ", sectionName);
    console.log("@@@ category : ", category);

    let data = getPortfolioData(sectionName);

    let workByCatData = data.latestWork[category];
    let eachItemTemplate = '';
    let animationDelay = 0;
    workByCatData.forEach((item, index) => {
        let animation = ' data-aos="zoom-in-up" data-aos-delay="'+animationDelay+'"';
        eachItemTemplate += `
            <div class="work-item portfolio-item" `+animation+` style="">
                <div class="portfolio-wrap">
                  <a href="`+item.imgUrl+`" data-gall="portfolioGallery" class="venobox" title="`+category+`"><img src="`+item.imgUrl+`" data-gall="portfolioGallery" class="img-fluid custom-work-img" style="height: 250px; width: 100%;`+item.style+`; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px;" alt=""></a>
                </div>
            </div>
        `;
        animationDelay += 30;
    })
    template = `
        <div id="productListingContainer" data-aos="fade-up" data-aos-delay="100" style="width: 100%; display: block;">
          `+eachItemTemplate+`
        </div>
    `;

    return template;

}

function workcat_list_section(sectionName){
  let template = '';
  let itemsTemplate = '';
  // let data = portfolio_data[sectionName];
  let data = getPortfolioData(sectionName);

  data.lists.forEach((item, index) => {
      let id = item.name.replace(/\s+/g, '_');
      let defaultCategoryStyle = '';
      if(data.defaultCategory && data.defaultCategory.name !== '' && data.defaultCategory.name === item.name){
        defaultCategoryStyle = data.defaultCategory.style;
        // itemsTemplate += '<a href="#" onclick="return false;" style=""> <div id="'+id+'" class="category-item" onclick="onClickWorkCatItem(event)" style="'+data.defa+'"> '+item.name+'</div> </a>';
      }
        itemsTemplate += '<a href="#" onclick="return false;" style=""> <div id="'+id+'" class="category-item" onclick="onClickWorkCatItem(event)" style="'+defaultCategoryStyle+'"> '+item.name+'</div> </a>';
  })

  template += `
      <div class="work-cat-block" data-aos="fade-up" style="width: 100%;">
          <div  class="work-cat-left-arrow-block" style="" >
              <i id="workCategory_left_arrow" class="fa fa-angle-left workCategory-left-arrow" onclick="onClickworkCategoryArrowIcon(event, 'left_arrow')" style="font-size: 30px;position: relative;"   aria-hidden="true"></i>
          </div>
          <div class="work-cat-items-block" style="width: 90%; display: inline-block;">
              <div class="work-category scrollmenu" id="workCategory">
                `+itemsTemplate+`
              </div>
          </div>
          <div class="work-cat-right-arrow-block" style="" >
              <i id="workCategory_right_arrow" class="fa fa-angle-right workCategory-right-arrow" onclick="onClickworkCategoryArrowIcon(event, 'right_arrow')" style="font-size: 30px;position: relative;"   aria-hidden="true"></i>
          </div>
      </div>
  `;

  return template;

}

function header_section(request){
  console.log("============ call header section ==============");
  // console.log("@@@ request:: ", request);
  let template = '';
  let profileTemplate = '';
  let menusTemplate = '';
  let socialTemplate = '';
  let sectionName = request.apiRef;
  let requestMenus = request.dynamic_header_menus;
  let editable = request.edit;
  let dynamicSections = request.dynamic_sections;
  let profilesTemplate = '';
  // let data = portfolio_data[sectionName];
  let data = getPortfolioData(sectionName);

  let myProfiles = getPortfolioData("myProfiles_section").profiles;
  // console.log("------------ editable  :: ", editable);
  // console.log("++++++++ dynamicSections : ", dynamicSections);
  // console.log("++++++++ dynamicSections stringify : ", JSON.stringify(dynamicSections));

  if(data.profile && data.profile !== '' && data.profile.socialLinks.length > 0){
        data.profile.socialLinks.forEach((item, index) => {
          let iconTemplate = '';
          if(item.icon && item.icon !== '' && item.icon.type === 'bxl'){
              iconTemplate += '<i class="bx bxl-'+item.icon.name+' " style="'+item.icon.name+'"> </i>';
          }
          socialTemplate += '<a href="#" class="custom-social-links '+item.name+'" style="'+item.style+'">'+iconTemplate+'</a>';

        })
        profileTemplate += `
            <div class="profile">
              <img src="`+data.profile.profileImg.imgUrl+`" alt="" class="img-fluid rounded-circle" style="`+data.profile.profileImg.style+`">
              <h1 class="text-light "><a href="index.html" class="custom-profile" >`+data.profile.profileName.name+`</a></h1>
            </div>
        `;
    }

    if(dynamicSections && dynamicSections !== '' && dynamicSections.values.length > 0){
        console.log("====== calling the create header section ========");
        let menuTemplate = '';
        dynamicSections.values.forEach((item, index) => {
                if(item.section.name !== "header"){
                    // let item = item.menu
                    let iconTemplate = '';
                    let listTemplate = '';
                    if(item.menu && item.menu.icon && item.menu.icon !== '' && item.menu.icon.type === 'bx'){
                        iconTemplate += '<i class="bx bx-'+item.menu.icon.name+' custom-menu-icon" style="'+item.menu.icon.style+'"></i>';
                    }

                    if(editable !== 'my_portfolio' && (request.myPortfolio === undefined)){
                        if(item.section.name.toLowerCase() === 'settings'){
                            let method = 'onclick="openSectionsSetupModal()"';
                            let iconTemplate = '<i class="bx bx-'+item.menu.icon.name+' custom-menu-icon" style="'+item.menu.icon.style+'"></i>';
                            listTemplate += '<li '+method+' class=" aaa custom-menu custom-menu-font default-background-color" style=" color: white; border-radius: 50px; "><a href="#" class="default-theme-menu-font-color" onclick="return false;"> '+iconTemplate+' <span style="">'+item.menu.name+'</span></a></li>';
                        }else{
                            listTemplate += '<li class="aaa custom-menu custom-menu-font"><a href="#'+item.section.name.toLowerCase()+'" class="default-theme-menu-font-color"> '+iconTemplate+' <span style="">'+item.menu.name+'</span></a></li>';
                        }
                    }else{
                        if(item.section.name.toLowerCase() !== 'settings'){
                            listTemplate += '<li class="aaa custom-menu custom-menu-font"><a href="#'+item.section.name.toLowerCase()+'" class="default-theme-menu-font-color"> '+iconTemplate+' <span style="">'+item.menu.name+'</span></a></li>';
                        }
                    }


                    if(item && item.section.name === "Home"){
                        menuTemplate += '<li class="custom-menu custom-menu-font active"><a class="default-theme-menu-font-color" href="index.html"> '+iconTemplate+' <span style="">'+item.menu.name+'</span></a></li>';
                    }else{
                        menuTemplate += listTemplate;
                    }
                }
        })
        //  add the edit manu block
        if(request.myPortfolio === undefined){
            if(editable !== 'my_portfolio'){
                let editMethod = 'onclick="onClickSetupProfile(this, event, \''+'edit_profile'+'\')"';
                let createProfileMethod = 'onclick="onClickSetupProfile(this, event, \''+'create_new_profile'+'\')"';

                let editThemeMethod = 'onclick="onClickSetupProfile(this, event, \''+'setup_theme'+'\')"';
                let previewMethod = 'onclick="onClickSetupProfile(this, event, \''+'preview_profile'+'\')"';
                let openProfileMethod = 'onclick="onClickSetupProfile(this, event, \''+'open_profile'+'\')"';
                let iconTemplate = '<i class="fa fa-pencil-square-o custom-menu-icon" style=" font-size: 22px;" aria-hidden="true"></i>';
                let previewIconTemplate = '<i class="fa fa-pencil-square-o custom-menu-icon" style="font-size: 22px;" aria-hidden="true"></i>';

                if(editable){
                  menuTemplate += '<li id="menu_previewProfile" class=" custom-menu-font custom-menu default-background-color" '+previewMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+previewIconTemplate+' <span style="">Preview Profile</span></a></li>';
                }else{
                  menuTemplate += '<li id="menu_editProfile" class="custom-menu-font custom-menu default-background-color" '+editThemeMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+iconTemplate+' <span style="">Setup Theme</span></a></li>';
                  menuTemplate += '<li id="menu_editProfile" class="custom-menu-font custom-menu default-background-color" '+createProfileMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+iconTemplate+' <span style="">Create New Profile</span></a></li>';
                  menuTemplate += '<li id="menu_editProfile" class="custom-menu-font custom-menu default-background-color" '+editMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+iconTemplate+' <span style="">Edit Profile</span></a></li>';
                  menuTemplate += '<li id="OpenProfileUrlMenu" class="custom-menu-font custom-menu default-background-color" '+openProfileMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+previewIconTemplate+' <span style="">Open My Profile</span></a></li>';
                  menuTemplate += '<li id="OpenProfileUrlMenu" class="custom-menu-font custom-menu default-background-color" onclick="onclickSynsFile()" style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+previewIconTemplate+' <span style="">Sync File</span></a></li>';

                }
            }
        }

        // if(myProfiles.length > 0){
        //     let optionsTemplate = '';
        //     myProfiles.forEach((profile) => {
        //         optionsTemplate += '<option>'+profile+'</option>';
        //     });
        //     profilesTemplate += `
        //     <div id="profilesBlock">
        //       <div class="form-group">
        //           <label for="sel1">My Profiles:</label>
        //           <select class="form-control custom-profiles" id="profiles" onchange="onChangeMyProfiles(this,event)">
        //             `+optionsTemplate+`
        //           </select>
        //        </div>
        //      </div>
        //     `;
        // }

        //================================================= rajib
        let dirPath = ROOT_DIR+'/server/PORTFOLIO/store';
        let optionsTemplate = '';
        fs.readdirSync(dirPath).forEach(file => {
           console.log("===== file: ",file);
           file = file.split(".")[0];
               optionsTemplate += '<option>'+file+'</option>';
        });
        profilesTemplate += `
        <div id="profilesBlock">
          <div class="form-group">
              <label for="sel1">My Profiles:</label>
              <select class="form-control custom-profiles" id="profiles" onchange="onChangeMyProfiles(this,event)">
                `+optionsTemplate+`
              </select>
           </div>
         </div>
        `;


        //=================================================

        menusTemplate += `
          <nav class="nav-menu">
            <ul>
              `+menuTemplate+`
            </ul>
            `+profilesTemplate+`
          </nav>
        `;
    }

    template += `
      <header id="header" class="default-theme-menu-bg-color">
        <div class="d-flex flex-column">
          <div>`+profileTemplate+`</div>
          <div>`+menusTemplate+`</div>
          <div class="profile" style="margin-top: 50px;">
              <div class="social-links mt-3 text-center">`+socialTemplate+`</div>
          </div>
        </div>
      </header>
    `;
    return template;
}

function typed_section(sectionName){
    // let data = portfolio_data[sectionName];
    let data = getPortfolioData(sectionName);

    return data;
}

function update_section_data(sectionData){
  console.log("===== section data : ", sectionData);
  portfolio_data[sectionData.sectionName] = sectionData;
  // console.log("@@@ after update section data :: ", portfolio_data[sectionData.sectionName]);
}

function update_block_data(request, data){
    console.log("@@@ 111111111111111 request: ", request);
    // console.log("@@@ sec name :: ", request.sectionName);
    // console.log("@@@ sec index :: ", request.sectionIndex);
    // console.log("@@@ parts index :: ", request.partsIndex);
    // console.log("@@@ item index :: ", request.itemIndex);
    // console.log("@@@ prop name :: ", request.propName);
    // console.log("@@@ prop value :: ", request.propValue);
    console.log("@@@ update block section data : ", data);
    if(request.actionType === "edit_block_item"){
      if(request.propName === 'name'){
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].key.name = request.propValue;
      }else if(request.propName === 'value'){
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].value.name = request.propValue;
      }
    }else if(request.actionType === "delete_item"){
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex, 1);
    }else if(request.actionType === "add_item_on_top"){
        // let newTextElement = {type: 'text', key: {name: '', style: ''}, value: {name: 'Type your content here...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, itemStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        let newTextElement = {type: 'text', key: {name: 'Type your content here...', style: 'font-size: 16px; font-weight: 500; width: 100%;'}, itemStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex, 0, newTextElement);
    }else if(request.actionType === "add_item_on_below"){
        // let newTextElement = {type: 'text', key: {name: '', style: ''}, value: {name: 'added text below element...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, itemStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        let newTextElement = {type: 'text', key: {name: 'added text below element...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, itemStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        let customIndex = (parseInt(request.itemIndex) + 1);
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(customIndex, 0, newTextElement);
        // console.log("@@@ after add below item block data :: ", JSON.stringify(portfolio_data[request.sectionName]));
    }else if(request.actionType === 'save_updated_style'){
      data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].itemStyle = request.itemStyle;
      data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].key.style = request.itemStyle;
    }else if(request.actionType === 'delete_section'){
        data.block.sections[request.sectionIndex].parts.splice(request.partsIndex, 1);
    }else if(request.actionType === "add_section_left"){
        console.log("==== ADD SECTION LEFT =====");
        console.log("@@@  request: ", request);
        let addedSection = data.block.sections[request.sectionIndex].parts[request.partsIndex];
        addedSection.isNewlyAdded = true;
        data.block.sections[request.sectionIndex].parts.splice(request.partsIndex-1, 0, addedSection);
    }else if(request.actionType === "add_section_right"){
        console.log("==== ADD SECTION right =====");
        console.log("@@@  request: ", request);
        let addedSection = data.block.sections[request.sectionIndex].parts[request.partsIndex];
        addedSection.isNewlyAdded = true;
        console.log("==== after added section the section data : ", addedSection);
        data.block.sections[request.sectionIndex].parts.splice(request.partsIndex+1, 0, addedSection);
    }else if(request.actionType === 'add_similar_item_on_top'){
        console.log("======== add_similar_item_on_top ========");
        console.log("@@@ request: ", request);
        let addedItem = data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex];
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex -1, 0, addedItem)

    }else if(request.actionType === 'add_similar_item_on_below'){
        console.log("======== add_similar_item_on_below ========");
        console.log("@@@ request: ", request);
        let addedItem = data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex];
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex + 1, 0, addedItem)

    }else if(request.actionType === 'save_item_isselected'){
        console.log("======== save_item_isselected ========");
        // console.log("@@@ request: ", request);
        for(let i=0; i<data.block.sections[request.sectionIndex].parts[request.partsIndex].desc.length; i++ ){
               if(i === request.itemIndex){
                   data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[i].isSelected.state = true;
                   data.block.sections[i + 1].isSectionVisible.state = true;
               }else{
                   data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[i].isSelected.state = false;
                   data.block.sections[i + 1].isSectionVisible.state = false;
               }
        }
    }else if(request.actionType === 'apply_store_theme'){
        console.log("============ calling apply_store_theme =============");
        // console.log("@@@ request :: ", request);
        for (let i = 0; i < data.block.sections[request.sectionIndex].parts.length; i++) {
              if(i === request.partsIndex ){
                  if(data.block.sections[request.sectionIndex].parts[i].isConditionalStyles !== undefined ){
                      data.block.sections[request.sectionIndex].parts[i].isConditionalStyles.state = true;
                  }
              }else{
                  if(data.block.sections[request.sectionIndex].parts[i].isConditionalStyles !== undefined ){
                      data.block.sections[request.sectionIndex].parts[i].isConditionalStyles.state = false;

                  }
              }
        }
    }else if(request.actionType === 'edit_item_style'){
        let style = data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].key.style;
        console.log("style : ", style);
        return style;
    }else if(request.actionType === 'save_item_style'){
        data.block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].key.style = request.style;
    }else if(request.actionType === 'edit_part_style'){
        let style = data.block.sections[request.sectionIndex].parts[request.partsIndex].partStyle;
        return style;
    }else if(request.actionType === 'save_part_style'){
        data.block.sections[request.sectionIndex].parts[request.partsIndex].partStyle = request.style;
    }else if(request.actionType === 'settings_drag_and_drop'){
        console.log("@@@@ 3333333333333");
        console.log("@@@ payload : ", request);
        let dragId = parseInt(request.dragId.split(",")[1]);
        let dropId = parseInt(request.dropId.split(",")[1]);
        let dragSectionIndex = parseInt(request.dragId.split(",")[0]);
        let dropSectionIndex = parseInt(request.dropId.split(",")[0]);
        if(dragSectionIndex === dropSectionIndex){
            console.log("************** SUCCESSFULL DRAG AND DROP ON SAME SECTION ****************");
            let swap = data.block.sections[dragSectionIndex].parts[dropId];
            data.block.sections[dragSectionIndex].parts[dropId] = data.block.sections[dragSectionIndex].parts[dragId];
            data.block.sections[dragSectionIndex].parts[dragId] = swap;
        }
    }


    // console.log("@@@ after edit block data :: ", JSON.stringify(data));
    // console.log("@@@ after save :: ", portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts);

}

function convertRawStyleToEditedStyleTemplate(style){
    let template = '<div style="width: 100%; ">';
    style = style.split(";");
    style.forEach((item, index) => {
        let subStyle = item.split(":");
        if(item.length > 5){
          template += `
            <span style=" padding: 5px; border: 1px solid #ccc; border-radius: 50px;">
              <span style="background: yellow; padding: 5px; border-radius: 50px;">`+subStyle[0]+`</span>
              <span> : </span>
              <span style="background: orange; padding: 5px; border-radius: 50px;">`+subStyle[1]+`</span>
              <span style=""> x </span>
            </span>
          `;
        }
        // <span style=" padding: 5px; "><span class="glyphicon glyphicon-trash" style="font-size: 18px; color: red;"></span></span>

    });
    template += '</div>';

    return template;
}

function get_section_data(sectionName){
  // let data = portfolio_data[sectionName];
  return getPortfolioData(sectionName);
}

function new_get_section_data(request){
  // console.log("@@@ new_get_section_data request : ", request);
  if(request.application !== undefined && request.application !== null && request.application !== ''){
      if(request.application === 'gini_home'){
          if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
              return gini_home_data[request.sectionName];
          }
      }else if(request.application === 'restaurant_home'){
            if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
                return RESTAURANT_APP_DATA[request.sectionName];
            }
      }else if(request.application === 'music_home'){
              if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
                  return MUSIC_APP_DATA[request.sectionName];
              }
      }else if(request.application === 'gini_nearby_app'){
              if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
                  return NEARBY_APP_DATA[request.sectionName];
              }
      }else if(request.application === 'shopping_home'){
                if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
                    return SHOPPING_APP_DATA[request.sectionName];
                }
      }else if(request.application === 'new_project'){
                if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
                    return NEW_PROJECT_APP_SERVICES.app_services.get_section_data(request.sectionName);
                }
      }else if(request.application === 'PORTFOLIO'){
          let srcFile = null;
          if(request.fileName === "default"){
            srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
          }else{
            srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
          }
          let sectionData = require(srcFile).portfolio_data[request.sectionName];
          console.log("@@@@ ======= sectionData :: ", sectionData);
          return sectionData;
      }else if(request.application === 'GINIMUSIC'){
            // './server/GINIMUSIC/store/giniMusicApp.js';
            let filePath = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
            console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            console.log("+++++++ request :: ", request);
            console.log("++++++++  filePath : ", filePath);
            // let filePath = './server/GINIMUSIC/store/giniMusicApp.js';
            let GINI_MUSIC_DATA = require(filePath).portfolio_data;
            if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
                return GINI_MUSIC_DATA[request.sectionName];
            }
      }else{
            let filePath = ROOT_DIR+'/server/'+request.application+'/store/'+request.application+'Data.js';
            let DATA = require(filePath).portfolio_data;
            if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
                return DATA[request.sectionName];
            }
      }
  }else{
      if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
          return portfolio_data[request.sectionName];
      }
  }
}

function update_initial_sections(request){
    console.log("===== calling update initial sections =====");
    let sections = request.updatedSections;
    let data = null;
    let sectionData = null;
    let srcFile = null;
    console.log("====== sections : ", sections);
    if(request.application !== undefined && request.application !== null && request.application !== ''){
        if(request.application === 'gini_home'){
              data = gini_home_data[request.sectionName];
        }else if(request.application === 'restaurant_home'){
              data = RESTAURANT_APP_DATA[request.sectionName];
        }else if(request.application === 'new_project'){
              data = NEW_PROJECT_APP_SERVICES.app_services.get_section_data(request.sectionName);
        }else if(request.application === 'PORTFOLIO'){
            if(request.fileName === "default"){
              srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
            }else{
              srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
            }
            data = require(srcFile).portfolio_data[request.sectionName];
            sectionData = data;
        }
    }else{
        if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
            data =  portfolio_data[request.sectionName];
        }
    }
    if(data){
      data.block.sections[0].parts.forEach((item, itemIndex) => {
          if(item.dataset !== undefined && item.dataset.sectionName !== undefined && item.dataset.sectionName !== ''){
              sections.forEach((ele, eleIndex) => {
                  if(item.dataset.sectionName === ele.sectionName){
                      item.dataset.selected = ele.selected;
                      item.isSectionToggle.state = ele.selected;
                  }
              });
          }
      });
    }

    // console.log("!!!!!!!!!! after updating the initial sections data:: \n\n", portfolio_data[request.sectionName].block.sections[0].parts);
    return "Successfully Update Initial Sections"
}

function update_theme1(request){
    console.log("====== calling update theme function ======");
    console.log("@@@ theme : ", request);
    // portfolio_data["default_style"] = request.theme;
    if(request.application !== undefined && request.application !== null && request.application !== ''){
        if(request.application === 'gini_home'){
            gini_home_data["default_style"] = request.theme;
        }else if(request.application === 'restaurant_home'){
              RESTAURANT_APP_DATA["default_style"] = request.theme;
          }
    }else if(request.application === 'PORTFOLIO'){
        if(request.fileName === "default"){
          srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
        }else{
          srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
        }
        data = require(srcFile).portfolio_data[request.sectionName];
        sectionData = data;
    }else{
        if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
            return portfolio_data["default_style"] = request.theme;
        }
    }
}

function update_theme(request){
    console.log("====== calling update theme function ======");
    console.log("@@@ theme : ", request);
    // portfolio_data["default_style"] = request.theme;
    if(request.application !== undefined && request.application !== null && request.application !== ''){
        if(request.application === 'gini_home'){
            gini_home_data["default_style"] = request.theme;
        }else if(request.application === 'restaurant_home'){
              RESTAURANT_APP_DATA["default_style"] = request.theme;
        }else if(request.application === 'PORTFOLIO'){
              if(request.fileName === "default"){
                srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
              }else{
                srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
              }
              // let oldDefaultStyle = require(srcFile).portfolio_data["default_style"];
              // let updatedDefaultStyle = request.theme;
              // oldDefaultStyle = updatedDefaultStyle;
              return require(srcFile).portfolio_data["default_style"] = request.theme;
          }
    }
    // else{
    //     if(request.sectionName !== undefined && request.sectionName !== null && request.sectionName !== ''){
    //         return portfolio_data["default_style"] = request.theme;
    //     }
    // }
}

function create_new_section1(request){
    console.log("=========== calling create new section functionality ============");
    console.log("@@@@ request : ", request);
    let sectionName = request.sectionName+'_section';
    let dummyData = JSON.parse(JSON.stringify(portfolio_data[request.referenceSection]))
    dummyData.block.sections[0].parts[0].desc[0].key.name = request.sectionName;
    dummyData.sectionName = sectionName;
    portfolio_data[sectionName] = dummyData;
    let newSection = {
      section: {name: request.sectionName, id: '', class: '', style: ''},
      menu: {name: request.sectionName, style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
      block: {class: '', style: ''},
      loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
      template: {style: ''}
    };

    let newSettings = JSON.parse(JSON.stringify(portfolio_data["settings_section"].block.sections[0].parts[1]))
    newSettings.mapToSection = request.sectionName;
    newSettings.desc[1].key.name = request.sectionName;
    newSettings.dataset = {selected: true, sectionName: request.sectionName};

    let sections = portfolio_data["all_sections"].values;
    let settingsIndex = sections.length;

    portfolio_data["all_sections"].values.splice(settingsIndex-1, 0, newSection);
    let settingsInsertPosition = portfolio_data["settings_section"].block.sections[0].parts.length - 1;
    portfolio_data["settings_section"].block.sections[0].parts.splice(settingsInsertPosition, 0, newSettings)
    portfolio_data["dummyNewSectionTemplate_section"].block.sections[0].parts[0].desc[0].key.name = request.sectionName;

    return {allSectionsData: portfolio_data["all_sections"].values};
}

function create_new_section(request){
    console.log("=========== calling create new section functionality ============");
    console.log("@@@@ create_new_section request : ", request);
    let srcFile = null;
    let portfolio_data = null;
    if(request.application === 'PORTFOLIO'){
        if(request.fileName === "default"){
          srcFile = ROOT_DIR+'/server/'+request.application+'/store/generic_portfolio_data.js';
        }else{
          srcFile = ROOT_DIR+'/server/'+request.application+'/store/'+request.fileName+'.js';
        }
        portfolio_data = require(srcFile).portfolio_data;
    }


    let sectionName = request.sectionName+'_section';
    let dummyData = JSON.parse(JSON.stringify(portfolio_data[request.referenceSection]))
    dummyData.block.sections[0].parts[0].desc[0].key.name = request.sectionName.replace(/_/g, " ");
    dummyData.sectionName = sectionName;
    portfolio_data[sectionName] = dummyData;
    let newSection = {
      section: {name: request.sectionName, id: '', class: '', style: ''},
      menu: {name: request.sectionName, style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
      block: {class: '', style: ''},
      loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
      template: {style: ''}
    };

    let newSettings = JSON.parse(JSON.stringify(portfolio_data["settings_section"].block.sections[0].parts[1]))
    newSettings.mapToSection = request.sectionName;
    newSettings.desc[1].key.name = request.sectionName;
    newSettings.dataset = {selected: true, sectionName: request.sectionName};

    let sections = portfolio_data["all_sections"].values;
    let settingsIndex = sections.length;

    portfolio_data["all_sections"].values.splice(settingsIndex-1, 0, newSection);
    let settingsInsertPosition = portfolio_data["settings_section"].block.sections[0].parts.length - 1;
    portfolio_data["settings_section"].block.sections[0].parts.splice(settingsInsertPosition, 0, newSettings)
    portfolio_data["dummyNewSectionTemplate_section"].block.sections[0].parts[0].desc[0].key.name = request.sectionName;

    return {allSectionsData: portfolio_data["all_sections"].values};
}

function get_generic_portfolio_data(){
    return JSON.parse(JSON.stringify(portfolio_data));
}


//**************************************** START GINI HOME ************************************************************************************


function get_un_ordered_list_template(list){
    let template = '<ul>';
    list.forEach((item, index) => {
          if(item.type === 'link'){
            template += '<li><a href="#" class="custom-nav-menu">'+item.key.name+'</a></li>'
          }
    });
    template += '</ul>';
    return template;
}

function get_nav_drop_down_template(list){
    let template = '<ul>';
    list.forEach((item, index) => {
        if(item.type === 'link' && item.links === undefined ){
            template += '<li><a href="#" class="custom-nav-menu">'+item.key.name+'</a></li>'
        }else if(item.type === 'dropDown' && item.links !== undefined && item.links.length > 0){
            template += '  <li class="drop-down" class="custom-nav-menu"><a href="#">'+item.key.name+'</a>';
            template += get_un_ordered_list_template(item.links);
            template += '  </li>';
        }
    });
    template += '</ul>';
    return template;
}

function get_nav_link_template(item){
    let template = '';
      template += '<li><a href="#" class="custom-nav-menu">'+item.key.name+'</a></li>';
    return template;
}

function get_map_to_sections_data(sections, application){
    let allSectionsData = null;
    let filteredSectionsData = [];

    if(application === 'gini_home'){
        allSectionsData = GINI_HOME.gini_home_processing.get_section_data("all_sections").values;
    }else if(application === 'restaurant_home'){
        allSectionsData = RESTAURANT_APP_SERVICES.restaurant_app_services.get_section_data("all_sections").values;
    }else if(application === 'music_home'){
        allSectionsData = MUSIC_APP_SERVICES.music_app_services.get_section_data("all_sections").values;
    }else if(application === 'gini_nearby_app'){
        allSectionsData = NEARBY_APP_DATA.nearby_app_services.get_section_data("all_sections").values;
    }else if(application === 'shopping_home'){
        allSectionsData = SHOPPING_APP_SERVICES.shopping_app_services.get_section_data("all_sections").values;
    }else if(application === 'new_project'){
        allSectionsData = NEW_PROJECT_APP_SERVICES.app_services.get_section_data("all_sections").values;
    }else{
        allSectionsData = portfolio_data["all_sections"];
    }

    console.log("=================== ************* allSectionsData :: ", allSectionsData);

    if(Array.isArray(sections)){
        sections.forEach((item, index) => {
            allSectionsData.forEach((ele, index) => {
                if(item === ele.section.name){
                    filteredSectionsData.push(ele);
                }
            });
        })
    }else{
      allSectionsData.forEach((ele, index) => {
          if(sections === ele.section.name){
              filteredSectionsData.push(ele);
          }
      });
    }

    return filteredSectionsData;
}

function get_event_template(event, application){
  // console.log("****************** calling get_event_template ***********************");
  let methodTemplate = '';

  if(Array.isArray(event)){
    event.forEach((ev, index) => {
        if(ev.argument !== undefined && ev.argument !== null && ev.argument !== ''){
            methodTemplate += ' '+ev.eventType+'="'+ev.eventName+'"';
            methodTemplate += ' ';
            let mapTosections = ev.argument.mapToSections;
            if(ev.argument.mapToSections !== undefined && ev.argument.mapToSections !== null && ev.argument.mapToSections !== ''){
                let map_to_sections_data = get_map_to_sections_data(ev.argument.mapToSections, application);
                ev.argument.mapToSectionsData = map_to_sections_data;
            }
            let argument = JSON.stringify(ev.argument);

            methodTemplate += `data='`+argument+`'`;
        }else{
            methodTemplate += ev.eventType+'="'+ev.eventName+'"  ';
        }
    });
  }else{
      if(event.argument !== undefined && event.argument !== null && event.argument !== ''){
          methodTemplate += ' '+event.eventType+'="'+event.eventName+'"';
          methodTemplate += ' ';
          let argument = JSON.stringify(event.argument);
          methodTemplate += `data='`+argument+`'`;
      }else{
          methodTemplate += event.eventType+'="'+event.eventName+'"  ';
      }
  }

  return methodTemplate;
}

function get_header_navigation_template(nav, application){
    console.log("========== calling the header nav section  ===========");
    let navTemplate = '';
    let brandTemplate = '';
    let navigationTemplate = '';
    let customTemplate = '';
    let containerStyle = '';

    if(nav.containerStyle !== undefined && nav.containerStyle !== null && nav.containerStyle !== ''){
        containerStyle += nav.containerStyle;
    }

    if(nav.brand !== undefined && nav.brand !== null && nav.brand !== '' && nav.brand.values.length > 0){
        brandTemplate += '<div class="" style="'+nav.brand.brandStyle+'">';

        nav.brand.values.forEach((item, index) => {
          if(item.type === 'text'){
            brandTemplate += '<h1 class="logo mr-auto"><a href="index.html" style="'+item.key.style+'">'+item.key.name+'</a></h1>';
          }
        });
        brandTemplate += '</div>';

    }
    if(nav.navigation !== undefined && nav.navigation !== null && nav.navigation !== '' && nav.navigation.values.length > 0 ){
        let subNavTemplate = '<ul style="display: flex;">';
        nav.navigation.values.forEach((item, index) => {
        let navMethodTemplate = '';
              if(item.key.event !== undefined && item.key.event !== null && item.key.event !== ''){
                  navMethodTemplate += get_event_template(item.key.event, application);
                  // console.log("@@@ navMethodTemplate : ", navMethodTemplate);
              }

              if(index === 0 ){
                  if(item.type === 'link'){
                    subNavTemplate += '<li class="active" '+navMethodTemplate+'><a href="#" class="custom-nav-menu" >'+item.key.name+'</a></li>'
                  }
              }else{
                  if(item.type === 'link'){
                    subNavTemplate += '<li '+navMethodTemplate+'><a href="#" class="custom-nav-menu" >'+item.key.name+'</a></li>'
                  }else if(item.type === 'dropDown'){
                      subNavTemplate += '  <li class="drop-down" class="custom-nav-menu" '+navMethodTemplate+'><a href="#" >'+item.key.name+'</a>';
                      subNavTemplate += get_nav_drop_down_template(item.links);
                      subNavTemplate += '  </li>';

                  }
              }
        });
        subNavTemplate += '</ul>';

        navigationTemplate += `
            <div style="`+nav.navigation.navStyle+`">
              <nav class="nav-menu d-none d-lg-block">
                `+subNavTemplate+`
              </nav>
            </div>
        `
    }
    if(nav.custom !== undefined && nav.custom !== null && nav.custom !== '' && nav.custom.values.length > 0){
        customTemplate += '<div class="" style="'+nav.custom.customStyle+'">';
        nav.custom.values.forEach((item, index) => {
          if(item.type === 'text'){
            customTemplate += '<h1 class="logo mr-auto"><a href="index.html" style="'+item.key.style+'">'+item.key.name+'</a></h1>';
          }else if(item.type === 'link'){
            customTemplate += '<li ><a href="#" class="custom-nav-menu" >'+item.key.name+'</a></li>'
          }
        });
        customTemplate += '</div>';
    }

    navTemplate += `
      <div class="container-fluid custom-mob-header-block" style=" `+containerStyle+`">
        <div class="row justify-content-center">
            <div class="col-xl-9 d-flex align-items-center" style="">
                `+brandTemplate+`
                `+navigationTemplate+`
                `+customTemplate+`
            </div>
        </div>
      </div>
    `;

    return navTemplate;
}

function update_defaults_settings(request){
  // console.log("===== calling update_defaults_settings fun ============");
  // console.log("======= request :: ", request);
  // console.log("before update MUSIC_APP_DEFAULTS_SETTINGS_DATA : ", MUSIC_APP_DEFAULTS_SETTINGS_DATA);
  // MUSIC_APP_DEFAULTS_SETTINGS_DATA[request.defaultPropToBeUpdate.toString()] = request.newSectionDefaultValue;
  // console.log("after update MUSIC_APP_DEFAULTS_SETTINGS_DATA : ", MUSIC_APP_DEFAULTS_SETTINGS_DATA);
  let defaults = null;
  if(request.application !== undefined && request.application !== null && request.application !== ''){
    if(request.application === 'gini_home'){
        //return gini_home_data["theme_store"];
    }else if(request.application === 'restaurant_home'){
        //return RESTAURANT_APP_DATA["theme_store"];
    }else if(request.application === 'music_home'){
        defaults = MUSIC_APP_DATA[request.sectionName.toString()].defaults;
        defaults.regions = request.newSectionDefaultValue;
    }else if(request.application === 'gini_nearby_app'){
        defaults = NEARBY_APP_DATA[request.sectionName.toString()].defaults;
        defaults.regions = request.newSectionDefaultValue;
    }else if(request.application === 'shopping_home'){
        //return SHOPPING_APP_DATA["theme_store"];
    }else if(request.application === 'new_project'){
        //return NEW_PROJECT_APP_DATA["theme_store"];
    }
  }else{
    //return portfolio_data["theme_store"];
  }
  return "refresh_section"
}


//***************************************** END  GINI HOME ***********************************************************************************


let generic_portfolio_functionality_mapping = {

    get_section_template: get_section_template,

    work_section: work_section,

    workcat_list_section: workcat_list_section,

    header_section: header_section,

    typed_section: typed_section,

    update_section_data: update_section_data,

    update_initial_sections: update_initial_sections,

    update_block_data: update_block_data,

    get_section_data : get_section_data,

    new_get_section_data : new_get_section_data,

    update_theme : update_theme,

    create_new_section : create_new_section,

    get_generic_portfolio_data : get_generic_portfolio_data,

    // get_test_file: get_test_file,

    update_portfolio_file: update_portfolio_file,

    create_new_portfolio_file: create_new_portfolio_file,

    read_portfolio_file_data : read_portfolio_file_data,

    get_header_navigation_template: get_header_navigation_template,

    get_custom_section_template: get_custom_section_template,

    get_api_data : get_api_data,

    update_defaults_settings: update_defaults_settings,

    copy_file : copy_file,

    get_application_default_style : get_application_default_style


}


module.exports.generic_portfolio_functionality_mapping = generic_portfolio_functionality_mapping;
