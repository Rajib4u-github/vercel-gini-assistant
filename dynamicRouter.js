const express = require('express');
const router = express.Router();
const path = require('path');

// Route that captures a dynamic user identifier
router.get('/:dynamiRoute', (req, res) => {
    // Extract the dynamic value using req.params
    const dynamicRoute = req.params.dynamiRoute; 
    console.log("req.query : ", req.query)
    console.log("==== dynamicRoute : ", dynamicRoute)
    const dynamicAppName = dynamicRoute;
    dynamicRoute = dynamicRoute.toLowerCase().split('_')
        // if (dynamicRoute[1]) return ""; // Handle empty strings safely
        //     return dynamicRoute[1].charAt(0).toUpperCase() + dynamicRoute[1].slice(1);    
            
    const dynamicFileName = dynamicRoute[0]+(dynamicRoute[1].charAt(0).toUpperCase() + dynamicRoute[1].slice(1))
    // Send a dynamically generated HTML page back to the browser
    // res.send(`<h1>Welcome to the dynamic profile page of ${dynamicRoute}!</h1>`);
    console.log("=== before redirect appName : dynamicAppName : ",dynamicAppName)
    console.log("=== before redirect appName : dynamicFileName : ",dynamicFileName)

    res.sendFile(path.join(__dirname + `/client/${dynamicAppName}/${dynamicFileName}App.html`));
});

module.exports = router;
