// var socket = io();
let currentSelectedWorkCategory = "Education";
let localStorage = {};
let application = "gini_home";
const fileName = 'gini_home';


// (function init(){
//     // socket.emit("request-final-portfolio-sections", {});
//     socket.emit("request-gini-home-initial-sections", {});
//     // socket.emit("request-generic-portfolio", {apiRef: 'request_initial_sections', application: 'gini_home'});
// })();

// (function init(){
//     console.log("88888888888888888888888888888888888888888888")
//     if(application === 'gini_home'){
//         // console.log("=================== init sections data using post http call.. initSectionsData ::: ", initSectionsData);
//         // socket.emit("request-gini-home-initial-sections", {});
//         socket.emit("request-generic-portfolio", {apiRef: 'request_initial_sections', application: application, fileName: fileName});
//     }
// })();

// socket.on("response-gini-home-initial-sections", (data) => {
//         console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//         console.log("!!! initSections :: ", data.initSections);
//         setup_default_theme(data.defaultStyle);
//         inittial_setup(data.initSections, false);
// })


// async function postData(request, payload) {
//     const url = request?.url || '';
//     const data = (payload === null || payload === undefined) ? null : payload;
//     try {
//     const response = await fetch(url, {
//         method: request.method, // Specify the request method
//         headers: {
//         "Content-Type": "application/json", // Tell the server you're sending JSON
//         },
//         body: JSON.stringify(data), // Convert your JS object to a JSON string
//     });

//     // Check if the request was successful (status 200-299)
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json(); // Parse the response body as JSON
//     console.log("in client Success:", result);
//     } catch (error) {
//     console.error("Error:", error);
//     }
// }
