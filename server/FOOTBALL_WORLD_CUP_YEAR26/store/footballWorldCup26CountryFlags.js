// const obj = {
//     "Mexico": {
//         "countryFlagImgUrl": 'static/img/footballWorldCupYear2026CountryFlags/mexico.png'
//     }
// }

const rawData = {
    "count": 25,
    "defaultImage": 'static/img/footballWorldCupYear2026CountryFlags/commingSoon.png',
    "entries": {
    "Mexico": {
        "name": "Mexico",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/mexico.png"
    },
    "South Africa": {
        "name": "South Africa",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/southAfrica.png"
    },
    "South Korea": {
        "name": "South Korea",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/southKorea.png"
    },
    "Czech Republic": {
        "name": "Czech Republic",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/czechRepublic.png"
    },
    "Canada": {
        "name": "Canada",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/canada.png"
    },
    "Bosnia & Herzegovina": {
        "name": "Bosnia & Herzegovina",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/bosnia.png"
    },
    "Qatar": {
        "name": "Qatar",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/qatar.png"
    },
    "Switzerland": {
        "name": "Switzerland",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/switzerland.png"
    },
    "Brazil": {
        "name": "Brazil",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/brazil.png"
    },
    "Morocco": {
        "name": "Morocco",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/morocco.png"
    },
    "Haiti": {
        "name": "Haiti",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/haiti.png"
    },
    "Scotland": {
        "name": "Scotland",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/scottland.png"
    },
    "USA": {
        "name": "USA",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/usa.png"
    },
    "Paraguay": {
        "name": "Paraguay",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/paraguay.png"
    },
    "Australia": {
        "name": "Australia",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/australia.png"
    },
    "Turkey": {
        "name": "Turkey",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/turkey.png"
    },
    "Germany": {
        "name": "Germany",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/germany.png"
    },
    "Curaçao": {
        "name": "Curaçao",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/curacao.png"
    },
    "Ivory Coast": {
        "name": "Ivory Coast",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/ivoryCoast.png"
    },
    "Ecuador": {
        "name": "Ecuador",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/ecuador.png"
    },
    "Netherlands": {
        "name": "Netherlands",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/netherland.png"
    },
    "Japan": {
        "name": "Japan",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/japan.png"
    },
    "Sweden": {
        "name": "Sweden",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/sweden.png"
    },
    "Tunisia": {
        "name": "Tunisia",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/tunisia.png"
    },
    "Belgium": {
        "name": "Belgium",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/belgium.png"
    },
    "Egypt": {
        "name": "Egypt",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/egypt.png"
    },
    "Iran": {
        "name": "Iran",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/iran.png"
    },
    "New Zealand": {
        "name": "New Zealand",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/newZealand.png"
    },
    "Spain": {
        "name": "Spain",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/spain.png"
    },
    "Cape Verde": {
        "name": "Cape Verde",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/capeVerde.png"
    },
    "Saudi Arabia": {
        "name": "Saudi Arabia",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/soudiArabia.png"
    },
    "Uruguay": {
        "name": "Uruguay",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/uruguay.png"
    },
    "France": {
        "name": "France",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/france.png"
    },
    "Senegal": {
        "name": "Senegal",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/senegal.png"
    },
    "Iraq": {
        "name": "Iraq",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/iraq.png"
    },
    "Norway": {
        "name": "Norway",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/norway.png"
    },
    "Argentina": {
        "name": "Argentina",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/argentina.png"
    },
    "Algeria": {
        "name": "Algeria",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/algeria.png"
    },
    "Austria": {
        "name": "Austria",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/austria.png"
    },
    "Jordan": {
        "name": "Jordan",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/jordan.png"
    },
    "Portugal": {
        "name": "Portugal",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/portugal.png"
    },
    "DR Congo": {
        "name": "DR Congo",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/drCongo.png"
    },
    "Uzbekistan": {
        "name": "Uzbekistan",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/uzbekistan.png"
    },
    "Colombia": {
        "name": "Colombia",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/colombia.png"
    },
    "England": {
        "name": "England",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/england.png"
    },
    "Croatia": {
        "name": "Croatia",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/croatia.png"
    },
    "Ghana": {
        "name": "Ghana",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/ghana.png"
    },
    "Panama": {
        "name": "Panama",
        "flag": "static/img/footballWorldCupYear2026CountryFlags/panama.png"
    }
}
}




module.exports.rawData = rawData;