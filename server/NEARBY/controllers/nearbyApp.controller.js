const promise = require("promise");
const request = require("request");
const ROOT_DIR = require("path").resolve();
const fs = require('fs');
var MUSIC_APP_DATA = require(ROOT_DIR+'/server/NEARBY/store/nearby_app_data.js').sections_data;
var GENERIC_TEMPLATE_GENERATOR = require(ROOT_DIR+'/server/GENERIC_TEMPLATE/genericTemplate.js');



var get_api_data = function(uri){
  // var y = 'https://places.demo.api.here.com/places/v1/places/356tunc6-dd2bb98930f74ea89f835805936177ff;context=Zmxvdy1pZD1lOTdiZTYwYS1hNzQxLTU0OGEtOTA2OC1jODk4MGZlOTkzM2NfMTU2NTk0MzY2NDI0OF8wXzc0MDMmcmFuaz01?app_id=V4wSKcxp8q2UsEzgXebH&app_code=IP9EQlom47cE7GbbxCKFkw';
  // var x = 'https://places.cit.api.here.com/places/v1/places/lookup?app_id=V4wSKcxp8q2UsEzgXebH&app_code=IP9EQlom47cE7GbbxCKFkw&id=356jx7ps-6f2cf687fc300f9df20dda6b8632bfd6';
  // uri = "https://places.demo.api.here.com/places/v1/discover/explore?in=22.769%2C88.371%3Br%3D1000&cat=restaurant&drilldown=true&Accept-Language=en-US%2Cen%3Bq%3D0.9&app_id=V4wSKcxp8q2UsEzgXebH&app_code=IP9EQlom47cE7GbbxCKFkw";
  try {
    var p = new promise(function(resolve, reject){
      var inputOption = {
                uri: uri,
                method: 'GET'
      };
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

// let argList = [
//     {key : "collection", subkey: [
//       {key : "title", subkey: null, type: "block", prefixValue: 'Title : ', postFixValue: '', ellipse : 'one line', style: "color: orange; font-size: 16px; text-align: center;"},
//       {key : "description", subkey: null, type: "block", prefixValue: 'Description : ', postFixValue: '', ellipse : 'one line', style:''},
//       {key : "image_url", subkey: null, type: "image", prefixValue: '', postFixValue: '', ellipse : 'one line', style:'height: 200px;'},
//       {key : "url", subkey: null, type: "newWindow",text: 'Visit Zomato Collection', prefixValue: '', postFixValue: '', style:''},
//     ]},
// ];
//
// let payload = {
//     data : DUMMY_ZOMATO_DATA.zomatoCollectionApiResponse.collections,
//     argList : argList,
//     style : {
//       imgPos : 'top',
//       textAlign : 'left',
//       hScroll: "hScroll",
//       backgroundColor : null,
//       height : null,
//       width : null,
//       padding: null,
//       fontSize: null,
//       defaults : {
//           backgroundColor : 'white',
//           textAlign : 'center',
//           height: 'auto',
//           width : '300px',
//           color: 'grey',
//           fontSize : '13px',
//           padding: '5px 5px',
//           margin : '5px 2px',
//           devider : '0px solid grey',
//           coverPadding : '5px',
//           border: " 1px solid whitesmoke",
//           descriptionTemplateStyle : 'background-color: whitesmoke;'
//       }
//     },
//     emptySlide : 'no'
// };


function get_section_data(sectionName){
  return MUSIC_APP_DATA[sectionName];
}

function get_generic_template(){
  let template = GENERIC_TEMPLATE_GENERATOR.basic_template_generator(payload);

  return template;
}

function get_schema_tosection_data(){
    console.log("========== calling get schema to section data fun() ============");
    let url = 'https://jsonplaceholder.typicode.com/posts';
    get_api_data(url).then((data) => {
        console.log("44444444444444444444444444444444444444444444444444444444444444");
        console.log("@@@@@ api data \n\n", data);
    })
}

// 8097173873
// socket.on("zomato-collection-api-request", function(data){
        // console.log("DUMMY_NEWS_DATA.newsApiResponse : \n", DUMMY_NEWS_DATA.newsApiResponse);

// let template = GENERIC_TEMPLATE_GENERATOR.basic_template_generator(payload);
        // console.log("@@@@  near by serach results are here \n\n", template);
      //   socket.emit("zomato-collection-api-response", { template : template });
      // })


let nearby_app_services = {

    get_section_data : get_section_data,

    get_generic_template: get_generic_template,

    get_api_data : get_api_data,

    get_schema_tosection_data : get_schema_tosection_data

}


module.exports.nearby_app_services = nearby_app_services;
