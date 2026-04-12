const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/',
  params: {limit: '18'},
  headers: {
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
    'X-RapidAPI-Key': 'Mb58JCJic7mshPthY310k0p4z9NRp116Jmpjsnom0Wl6sAYBXa'
  }
};
const options1 = {
  method: 'GET',
  url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/2/',
  headers: {
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
    'X-RapidAPI-Key': 'Mb58JCJic7mshPthY310k0p4z9NRp116Jmpjsnom0Wl6sAYBXa'
  }
};

const options2 = {
  method: 'GET',
  url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/',
  headers: {
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
    'X-RapidAPI-Key': 'Mb58JCJic7mshPthY310k0p4z9NRp116Jmpjsnom0Wl6sAYBXa'
  }
};
const options3 = {
  method: 'GET',
  url: 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/verses/1/',
  headers: {
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
    'X-RapidAPI-Key': 'Mb58JCJic7mshPthY310k0p4z9NRp116Jmpjsnom0Wl6sAYBXa'
  }
};

axios.request(options2).then(function (response) {
	console.log(JSON.stringify(response.data));
}).catch(function (error) {
	console.error(error);
});
