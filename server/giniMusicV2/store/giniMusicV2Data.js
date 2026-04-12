let default_style = {
      themeColor: '#6264A7',
      themeBgColor: '#F5F5F5',
      themeFontColor: '#000000',
      themePrimaryColor: '#424242',
      themeMenuBgColor: '#FFFFFF',
      themeMenuFontColor: '#000000',
      themeMenuOnHoverFontColor: '#000000',
      themeMenuOnHoverBgColor: '#F5F5F5',
}

let default_settings = {
      defaultCountry: 'US',
      newsByCategory: 'IN',
}

let portfolio_data = {

    "default_style": {
        themeColor: 'brown',
        themeBgColor: '#D1D5DB',
        themeCardBgColor: '#E8EAED',
        themeFontColor: '#000000',
        themePrimaryColor: '#424242',
        themeMenuBgColor: '#FFFFFF',
        themeMenuFontColor: '#000000',
        themeMenuOnHoverFontColor: '#000000',
        themeMenuOnHoverBgColor: '#F5F5F5',
    },

    "theme_settings": {
        isDefaultStyle : false,
        isThemeStyle: true
    },

    "theme_store": {
        "themeOne": {
          themeName : 'Microsoft Teams Theme',
          themeColor: '#6264A7',
          themeBgColor: '#F5F5F5',
          themeCardBgColor: '#ffffff',
          themeFontColor: '#000000',
          themeMenuBgColor: '#FFFFFF',
          themeMenuFontColor: '#000000',
          themeMenuOnHoverFontColor: '#000000',
          themeMenuOnHoverBgColor: '#F5F5F5',
        },
        "themeTwo":{
          themeName : 'Youtube Theme',
          themeColor: '#FF0000',
          themeBgColor: '#F9F9F9',
          themeCardBgColor: '#ffffff',
          themeFontColor: '#000000',
          themeMenuBgColor: '#FFFFFF',
          themeMenuFontColor: '#000000',
          themeMenuOnHoverFontColor: '#000000',
          themeMenuOnHoverBgColor: '#F9F9F9',
        },
        "themeThree":{
          themeName : 'Facebook Theme',
          themeColor: '#1771E6',
          themeBgColor: '#F0F2F5',
          themeCardBgColor: '#ffffff',
          themeFontColor: '#000000',
          themeMenuBgColor: '#FFFFFF',
          themeMenuFontColor: '#000000',
          themeMenuOnHoverFontColor: '#000000',
          themeMenuOnHoverBgColor: '#F0F2F5',
        }
    },

    "headerNav_section": {
        sectionName : 'header_navigation',
        brand: {
          values: [
            {type: 'text', key: {name: 'GINI RESTAURANT', class: '',  style: ''}, itemStyle: ''},
            // {type: 'image', key: {name: 'static/img/me_portfolio/myImg1.jpg', style: ' border-radius: 5%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
          ],
          brandStyle: 'margin-left: -8%;'
        },
        navigation: {
          values: [
            {
              type: 'link', key: {
                name: 'HOME',
                class: '',
                style: '',
                event: [
                  {eventName : 'onClickHeaderNavigation(this, event)',
                  eventType: 'onclick',
                  argument : {
                    mapToSections: ['whydYoutubePopMusic','currentsMovieNews', 'newsApiTopHeadlineByGoogleNews', 'jsonPlaceholder', 'currentsProgrammingNews', "currentsMusicNews", "currentsCovid19News", "currentsLatestNews", 'dailymotionVideos', 'dailymotionVideosList']}, dataSetName: 'nav-links-data'},
                  ],
                  },
                  itemStyle: ''
            },
            {
              type: 'link', key: {
                name: 'NEWS BY CATEGORY',
                class: '',
                style: '',
                event: [
                  {eventName : 'onClickHeaderNavigation(this, event)',
                  eventType: 'onclick',
                  argument : {
                    mapToSections: ['newsByCategoryMenu', 'newsByCategory', 'entertainmentNewsByCategoryMenu', "entertainmentNewsByCategoryContainer", "educationalNewsByCategoryMenu", "educationalNewsByCategoryContainer", 'medicalNewsByCategoryMenu', 'medicalNewsByCategoryContainer', 'newsApiTopArticlesNewsByCategoryMenu', 'newsApiTopArticlesNewsByCategoryContainer', 'newsApiTopJournalNewsByCategoryMenu', 'newsApiTopJournalNewsByCategoryContainer']}, dataSetName: 'nav-links-data'},
                  ],
                  },
                  itemStyle: ''
            },
            {
              type: 'link',
              key: {
                name: 'NEWS SOURCES',
                class: '',
                style: '',
                event: [
                  {
                    eventName : 'onClickHeaderNavigation(this, event)',
                    eventType: 'onclick',
                    argument : {mapToSections: ['newsApiNewsSources']},
                    dataSetName: 'nav-links-data'
                  },
                ],
                itemStyle: ''
              }
            },
            // {
            //   type: 'link',
            //   key: {
            //     name: 'BRAND',
            //     class: '',
            //     style: '',
            //     event: [
            //       {
            //         eventName : 'onClickHeaderNavigation(this, event)',
            //         eventType: 'onclick',
            //         argument : {mapToSections: ['brand',]},
            //         dataSetName: 'nav-links-data'
            //       },
            //     ],
            //     itemStyle: ''
            //   }
            // },
            // {
            //   type: 'link',
            //   key: {
            //     name: 'SPECIAL MENU',
            //     class: '',
            //     style: '',
            //     event: [
            //       {
            //         eventName : 'onClickHeaderNavigation(this, event)',
            //         eventType: 'onclick',
            //         argument : {mapToSections: ['specialMenu','specialMenuContainer']},
            //         dataSetName: 'nav-links-data'
            //       },
            //     ],
            //     itemStyle: ''
            //   }
            // },
            {
              type: 'link', key: {
                name: 'EDIT',
                class: '',
                style: '',
                event: [
                  {
                    eventName : 'onClickHeaderNavigation(this, event)',
                    eventType: 'onclick',
                    argument : {
                      mapToSections: ['brand', 'aboutRestaurant', 'whyUsRestaurant', "menuCategoryRestaurant", "menu", "specialMenu", 'specialMenuContainer', 'shefsRestaurant', 'galleryRestaurant', 'eventsRestaurant', 'reservationRestaurant', 'contactsRestaurant'],
                      isSectionsEdit: true,
                    },
                  dataSetName: 'nav-links-data'
                  },
                ],
              },
                itemStyle: ''
            },
            {
              type: 'link',
              key: {
                name: 'THEMING',
                class: '',
                style: '',
                event: [
                  {
                    eventName : 'onClickHeaderNavigation(this, event)',
                    eventType: 'onclick',
                    argument : {mapToSections: ['theme']},
                    dataSetName: 'nav-links-data'
                  },
                ],
                itemStyle: ''
              }
            },
            {
              type: 'link',
              key: {
                name: 'SETTINGS',
                class: '',
                style: '',
                event: [
                  {
                    eventName : 'onClickHeaderNavigation(this, event)',
                    eventType: 'onclick',
                    argument : {mapToSections: ['settings']},
                    dataSetName: 'nav-links-data'
                  },
                ],
                itemStyle: ''
              }
            },

            // {
            //   type: 'dropDown', key: {name: 'TECHIE', class: '',  style: '', mapToSections: ['about','skills','facts']}, itemStyle: '', links: [
            //       {type: 'link', key: {name: 'TECHIE', class: '',  style: '', mapToSections: ['about','skills','facts']}, itemStyle: ''},
            //       {type: 'link', key: {name: 'TECHIE', class: '',  style: '', mapToSections: ['about','skills','facts']}, itemStyle: ''},
            //       {type: 'link', key: {name: 'TECHIE', class: '',  style: '', mapToSections: ['about','skills','facts']}, itemStyle: ''},
            //       {type: 'dropDown', key: {name: 'TECHIE', class: '',  style: ''}, itemStyle: '', links: [
            //         {type: 'link', key: {name: 'TECHIE', class: '',  style: ''}, itemStyle: ''},
            //         {type: 'link', key: {name: 'TECHIE', class: '',  style: ''}, itemStyle: ''},
            //         {type: 'link', key: {name: 'TECHIE', class: '',  style: ''}, itemStyle: ''},
            //       ]},
            //   ]
            // },
            // {type: 'link', key: {name: 'TECHIE', class: '',  style: '', mapToSections: ['about','skills','facts']}, itemStyle: ''},
            // {type: 'link', key: {name: 'TECHIE', class: '',  style: ''}, itemStyle: '', mapToSections: ['about','skills','facts']},
          ],
          navStyle: 'margin-left: 10%;',
        },
        //   custom: {
        //     values: [
        //       {type: 'link', key: {name: 'TECHIE', class: '',  style: ''}, itemStyle: ''},
        //     ],
        //     customStyle: '',
        // }
        containerStyle: 'background: var(--default-theme-color); padding: 10px 0px;'
      },

    "products_section": {
       sectionName : 'products_section',
       block: {
           sections: [
                       {
                           animationType: 'zoom-in', animationDelay: 100,
                           parts: [
                               {
                                   animationType: 'fade-up', animationDelay: null,
                                   desc: [
                                     {type: 'text', key: {name: 'Products', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin: 40px 0px; '},
                                     {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: 'default-outline-color', style: 'display: inline-block;  font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-bottom: 30px;'},

                                   ],

                                   partStyle: 'width: 100%;display: inline-block; ',
                               },
                               {
                                   mapToSection : 'about',
                                   animationType: 'fade-up', animationDelay: null,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotHome.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     // {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color', style: 'display: inline-block; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-top: 20px; border: 2px solid red; '},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Gini Chat Bot', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},
                                     // {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                                   // partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 10px 5px 20px 5px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',

                               },
                               {
                                   mapToSection : 'activities',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotAiPreview1.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     // {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color', style: 'display: inline-block; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-top: 20px; border: 2px solid red; '},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Chat Bot AI Engine', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white;'},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},
                                     // {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/ai'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'about',
                                   animationType: 'fade-up', animationDelay: null,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniCamera.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Camera', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/camera'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'facts',
                                   animationType: 'fade-up', animationDelay: 50,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniCamera.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Dual Camera ', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/dualcamera'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',

                               },
                               {
                                   mapToSection : 'skills',
                                   animationType: 'fade-up', animationDelay: 100,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniBooks.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Books', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/books'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'education',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotHome.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Football Live Updates ', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/score'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'workexp',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniNews.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'General News', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/news'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'projects',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotHome.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Widgets', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/widgets'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'workcat',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniNewsApp.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'News App', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/newsapp'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'work',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotHome.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'NASA', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/nasa'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'languages',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniOpenSourcePagePNG.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Open Source Library', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/opensource'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'testimonials',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniOpenSourceLibraryApp.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Open Source Library Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/open-source'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'testimonials',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniCovidApp.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Covid 19 Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/covid'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'services',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniMyPortfolio.PNG', style: 'border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'My Portfolio', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/portfolio_rajib'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'services',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniPortfolioCreator.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Portfolio Creator', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:4000/'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'typed',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotHome.PNG', style: 'border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Sound Cloud Music', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/soundcloud'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'contacts',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotHome.PNG', style: 'border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Audio DB Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/audiodb'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'activities',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniMusic.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Music Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/music'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'activities',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniMovie.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Movie Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/movie'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'activities',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniQuiz.PNG', style: ' border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Quiz Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/quiz'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'activities',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniZomato.PNG', style: 'border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Zomato Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/zomato'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'activities',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniChatBotHome.PNG', style: 'border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'Here Map Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/heremap'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                               {
                                   mapToSection : 'activities',
                                   animationType: 'fade-up', animationDelay: 150,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/gini_products_screenshots/giniOmdb.PNG', style: 'border-radius: 0%; width: 100%; height: 225px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'icon', key: {name: 'product-hunt', type: 'font-awesome', style: "font-size: 24px; color: red;  position: relative;  padding-top: 10px; font-family: 'FontAwesome'; color: var(--default-theme-color);" }, itemStyle: 'display: inline-block; '},
                                     {type: 'text', key: {name: 'OMDB Application', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; top: 10px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                     {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white; '},  itemStyle: 'display: inline-block; width: 100%; padding-top: 10px;'},

                                   ],
                                   event: [
                                     {
                                       eventName : 'onClickGiniHomeProducts(this, event)',
                                       eventType: 'onclick',
                                       argument : {redirectUrl: 'http://localhost:3000/omdb'},
                                       dataSetName: 'nav-links-data'
                                     },
                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in',
                                   partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center; background: white; float: left;',
                               },
                           ]
                       },
           ],
           // blockStyle: 'background: white; padding: 20px 100px;',
           blockStyle: '',
       },
     },

    "brand_section": {
       sectionName : 'contacts_section',
       block: {
           sections: [
                       {
                           animationType: 'fade-up', animationDelay: null,
                           parts: [
                               {
                                   animationType: 'fade-up', animationDelay: null,
                                   desc: [
                                     {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color', style: 'display: inline-block; width: 100%;'}, itemStyle: 'width: 100%; position: absolute; z-index: 9; top: 30%; left: 7%; '},
                                     {type: 'text', key: {name: `Welcome To <span style="font-weight: 700; color: var(--default-theme-color); ">My Music </span>`, class: 'custom-primary-font-color', style: 'width: 100%; font-size: 48px; font-weight: 600; color: var(--default-theme-white-color);'},  itemStyle: 'padding: 20px; width: auto;'},
                                     {type: 'text', key: {name: 'Deleviring Great Music For Last Few Years... ', class: 'custom-primary-font-color', style: 'width: 100%; font-size: 24px; font-weight: 400; color: var(--default-theme-white-color);'},  itemStyle: 'padding: 0px 20px; width: 50%; '},

                                     {type: 'button',  key: {name: 'Our Menu', class: 'default-background-color default-outline-color ', style: 'font-size: 16px; font-weight: 500; padding: 10px 20px;  border: none; color: white; border-radius: 50px;'}, itemStyle: 'display: inline-block; padding-left: 2%; '},
                                     {type: 'button',  key: {name: 'Book A Table', class: 'default-background-color default-outline-color ', style: 'font-size: 16px; font-weight: 500; padding: 10px 20px;  border: none; color: white; border-radius: 50px;'}, itemStyle: 'display: inline-block; '},
                                     {type: 'button',  key: {name: '<i class="fa fa-play-circle" style="font-size: 50px;" aria-hidden="true"></i>', class: 'default-background-color default-outline-color ', style: 'font-size: 16px; font-weight: 500; padding: 16px; border: none; color: white; border-radius: 50px; position: relative; top: -50px;'}, itemStyle: 'display: inline-block; margin-left: 45%;'},

                                     {type: 'wrap-close', key: {name: 'div', class: '', style: ''}, itemStyle: ''},
                                     {type: 'image', key: {name: 'static/img/restaurant_app/hero-bg.jpg', style: 'width: 100%; height: 100%;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative;right: 0px; text-align: right; display: block;text-align: center; top: -22px;'},
                                   ],
                                   partStyle: 'width: 100%;display: inline-block; ',
                               },
                           ]
                       },
         ],
           style: '',
       },
       containerStyle: 'max-width: fit-content; padding: 0px; width: 100%;'
     },

    "header_section": {
        sectionName : 'header_section',
        profile: {
            profileName: {name: 'Rajib karmakar', style: ''},
            profileImg: {imgUrl: 'static/img/me_portfolio/myImg1.jpg', style: ''},
            socialLinks: [
                {name: 'twitter', icon: {name: 'twitter',type: 'bxl', style: ''}, style: ''},
                {name: 'facebook', icon: {name: 'facebook',type: 'bxl', style: ''}, style: ''},
                {name: 'instagram', icon: {name: 'instagram',type: 'bxl', style: ''}, style: ''},
                {name: 'google-plus', icon: {name: 'skype',type: 'bxl', style: ''}, style: ''},
                {name: 'linkedin', icon: {name: 'linkedin',type: 'bxl', style: ''}, style: ''},
            ]
        },
        menus1: [
            {name: 'home', links: '', icon: {name: 'home',type: 'bx', style: ''}, style: ''},
            {name: 'about', icon: {name: 'user',type: 'bx', style: ''}, style: ''},
            {name: 'skills',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
            {name: 'languages',icon: {name: 'book-content',type: 'bx', style: ''}, style: ''},
            {name: 'education',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
            {name: 'workexp',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
            {name: 'workcat',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
            {name: 'work',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
            {name: 'facts', icon: {name: 'server',type: 'bx', style: ''}, style: ''},
            {name: 'services', icon: {name: 'server',type: 'bx', style: ''}, style: ''},
            {name: 'testimonials',icon: {name: 'book-content',type: 'bx', style: ''}, style: ''},
            {name: 'contacts', icon: {name: 'envelope',type: 'bx', style: ''}, style: ''},

        ],
        menus: {
          "home": {name: 'home', links: '', icon: {name: 'home',type: 'bx', style: ''}, style: ''},
          "typed": {name: 'typed', links: '', icon: {name: 'home',type: 'bx', style: ''}, style: ''},
          "about": {name: 'about', icon: {name: 'user',type: 'bx', style: ''}, style: ''},
          "settings": {name: 'Settings', icon: {name: 'envelope',type: 'bx', style: ''}, style: ''},
          "skills": {name: 'skills',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
          "languages": {name: 'languages',icon: {name: 'book-content',type: 'bx', style: ''}, style: ''},
          "education":  {name: 'education',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
          "workexp": {name: 'workexp',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
          "workcat": {name: 'workcat',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
          "work": {name: 'work',icon: {name: 'file-blank',type: 'bx', style: ''}, style: ''},
          "facts": {name: 'facts', icon: {name: 'server',type: 'bx', style: ''}, style: ''},
          "activities": {name: 'activities', icon: {name: 'server',type: 'bx', style: ''}, style: ''},
          "projects": {name: 'projects', icon: {name: 'server',type: 'bx', style: ''}, style: ''},
          "services": {name: 'services', icon: {name: 'server',type: 'bx', style: ''}, style: ''},
          "testimonials": {name: 'testimonials',icon: {name: 'book-content',type: 'bx', style: ''}, style: ''},
          "contacts": {name: 'contacts', icon: {name: 'envelope',type: 'bx', style: ''}, style: ''},

        },

        partStyle: '',
    },

    "typed_section": {
        profile: {name: 'Gini Restaurant', style: 'color: white; font-weight: 600; '},
        profileGreeting: {name: "I'm", style: ''},
        // img: {url: 'static/img/me_portfolio/portfolio1.jpg', style: ''},
        img: {url: 'static/img/restaurant_app/hero-bg.jpg', style: ''},
        // img: {url: 'static/img/generic_portfolio_image/gifs/default_women_profile.gif', style: ''},
        // img: {url: 'static/img/generic_portfolio_image/images/default_women_profile.jpg', style: ''},



        animationType: 'fade-in',
        typedOptions: {
            // strings: [
            //   '<span style="color: '+default_style.themeColor+';">Graphic Designer<span>', '<span style="color: '+default_style.themeColor+';">Developer</span>', '<span style="color: '+default_style.themeColor+';">Freelance</span>', '<span style="color: '+default_style.themeColor+';">Photographer</span>'
            // ],
            strings: [
              '<span class="default-theme-color" style="">Graphic Designer<span>', '<span class="default-theme-color" style="">Developer</span>', '<span class="default-theme-color" style="">Freelance</span>', '<span class="default-theme-color" style="">Photographer</span>'
            ],
            typeSpeed:100,
            backDelay:2000,
            loop:true,
            shuffle: true,
            showCursor: false,
            autoInsertCss: false,
        },
        partStyle: '',
        sectionName : 'Typed Section',
        block: {
            sections: [
                {
                    parts: [],
                }
            ],
        }
    },

    "settings_section": {
      sectionName : 'settings',
      block: {
          sections: [
                      {
                          animationType: 'fade-up', animationDelay: null,
                          parts: [
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'text', key: {name: 'Settings', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-bottom: 16px; '},
                                    {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: 'default-outline-color', style: 'display: inline-block;  font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-bottom: 16px;'},

                                  ],
                                  partStyle: 'width: 100%;display: inline-block; ',
                              },
                              {
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'plus', type: 'font-awesome', class:'', style: 'font-size: 24px;  position: relative;  padding-top: 10px; color: white;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Add New Section', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative; color: white;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  event: {eventName : 'onClickAddNewSection(this, event)', eventType: 'onclick'},
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; background: black; text-align: center;',
                              },

                          ]
                      },
                      {
                        animationType: null, animationDelay: null,
                        parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                {type: 'button', event: {eventName : "onClickSettings(this, event, 'settings_apply_changes')", eventType: 'onclick'}, key: {name: 'Apply Sections Setup', class: 'default-background-color default-outline-color ', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px;  border: none; color: white; '}, itemStyle: 'display: inline-block; width: 100%;'},
                              ],
                              partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 10px; ',
                          },
                        ]
                      }
        ],
          style: '',
      }
    },

    "theme_section": {
      sectionName : 'Gini_home_theme',
      block: {
          sections: [
                      {
                          parts: [
                              {
                                    // animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {
                                        type: 'button',
                                        isSelected: {state: true, style: ' ? ', class: 'custom-theme-bb-2 ? '},
                                        event: {eventName : "onClickSetupProfile(this, event, 'custom_theme_section')", eventType: 'onclick'},
                                        // key: {name: 'Custom Theme', class: '  custom-profile custom-theme-bb-2', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px; border: none; background: white; outline: none !important;'},
                                        key: {name: 'Custom Theme', class: '  custom-profile ', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px; border: none; background: var(--default-theme-bg-color); outline: none !important;'},

                                        itemStyle: 'display: inline-block; width: 49.5%;'
                                      },
                                      {
                                        type: 'button',
                                        isSelected: {state: false, style: '? ', class: 'custom-theme-bb-2 ? '},
                                        event: {eventName : "onClickSetupProfile(this, event, 'custom_theme_store')", eventType: 'onclick'},
                                        key: {name: 'Use Theme Store ', class: ' custom-profile default-theme-border', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px; background: var(--default-theme-bg-color); border: none; outline: none !important;'},
                                        itemStyle: 'display: inline-block; width: 49.5%; position: relative; left: -5px;'
                                      },
                                    ],
                                    partStyle: 'width: 70%; display: inline-block; margin-bottom: 50px; margin-left: 15%;',
                              },
                          ],
                      },
                      {
                        //  animationType: 'fade-up', animationDelay: null,
                          parts: [
                              {
                                    // animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'text', key: {name: ' Use Custom Theme ', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                      {type: 'text', key: {name: 'Choose Your Favourite Color To Theming Your Profile.',  style: 'display: inline-block; font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; padding-bottom: 20px;'},

                                    ],
                                    partStyle: 'width: 100%;display: inline-block; ',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'text', key: {name: '# Home Page Theiming', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},

                                  ],
                                  partStyle: 'display: inline-block; width: 100%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px 0px; color: black; border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative;  '}, itemStyle: 'display: inline-block; width: 15%; float: left; '},
                                    {type: 'text', key: {name: 'Background Color', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeBgColor", id: "defaultThemeBgColor", style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left; '},
                                    {type: 'text', key: {name: 'Theme Color', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeColor", id: "defaultThemeColor", style: 'display: block; border: none !important; width: 100%; height: 100px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left; '},
                                    {type: 'text', key: {name: 'Theme Font Color', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeFontColor", id: "defaultThemeFontColor", style: 'display: block; border: none !important; width: 100%; height: 100px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                    {type: 'text', key: {name: 'Theme Primary Color', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themePrimaryColor", id: "themePrimaryColor", style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                    {type: 'text', key: {name: 'Theme Card Background Color', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeCardBgColor", id: "themeCardBgColor", style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'text', key: {name: '# Side Menu Bar Theiming', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; padding-bottom: 12px; '},

                                  ],
                                  partStyle: 'display: inline-block; width: 100%;  margin-right: 1rem; padding: 20px; color: black; border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative;  '}, itemStyle: 'display: inline-block; width: 15%; float: left; '},
                                    {type: 'text', key: {name: 'Menu Background Color ', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeMenuBgColor", id: "defaultThemeMenuBgColor", style: 'display: block; border: none !important; width: 100%; height: 100px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left; '},
                                    {type: 'text', key: {name: 'Menu Font Color ', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeMenuFontColor", id: "defaultThemeMenuFontColor", style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left; '},
                                    {type: 'text', key: {name: 'On Hover Menu background Color ', style: 'font-size: 15px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeMenuOnHoverBgColor", id: "themeMenuOnHoverBgColor", style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                    {type: 'text', key: {name: 'On Hover Menu Font Color', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'color', key: {type: 'custom', name: "default_style.themeMenuOnHoverFontColor", id: "themeMenuOnHoverFontColor", style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },

                              {
                                  // animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    // {type: 'button', event: {eventName : "onClickSetupProfile(this, event, 'close-themeing-modal')", eventType: 'onclick'}, key: {name: 'Cancel', class: 'default-outline-color custom-profile default-theme-border ', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px; background: white; '}, itemStyle: 'display: inline-block; width: 49%; margin-right: 10px;'},
                                    {type: 'button', event: {eventName : "onClickSetupProfile(this, event, 'apply_theme_changes')", eventType: 'onclick'}, key: {name: 'Apply Theme', class: 'default-background-color default-outline-color ', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px;  border: none; color: white; '}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; ',
                              },
                          ],
                          sectionClass: 'custom_theme_section',
                          isSectionVisible: {state: true, class: '', style: ''},
                          partStyle: 'width: 100%; ',

                      },

                      {
                        //  animationType: 'fade-up', animationDelay: null,
                          parts: [
                              //====================================================================================

                              {
                                    // animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'text', key: {name: ' Use Theme Store Themes  ', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-top: 20px; '},
                                      {type: 'text', key: {name: 'Choose Your Favourite Theme That You Want For Your Profile.',  style: 'display: inline-block; font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-bottom: 20px; '},

                                    ],
                                    partStyle: 'width: 100%;display: inline-block; ',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    // {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color', style: 'display: inline-block; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-top: 20px; border: 2px solid red; '},
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                    {type: 'text', key: {name: 'Microsoft Teams Theme', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'theme', event: {eventName : "onClickSetupProfile(this, event, 'apply_store_theme')", eventType: 'onclick'}, key: { name: "theme_store.themeOne",  style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},
                                    // {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                  ],
                                  isConditionalStyles : {state: false, class: '', style: 'border: 2px solid red; ? '},
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                    // {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color', style: 'display: inline-block; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-top: 20px; border: 2px solid red; '},
                                    {type: 'text', key: {name: 'Youtube Theme', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    {type: 'theme', event: {eventName : "onClickSetupProfile(this, event, 'apply_store_theme')", eventType: 'onclick'}, key: { name: "theme_store.themeTwo",  style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},
                                    // {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                  ],
                                  isConditionalStyles : {state: false, class: '', style: 'border: 2px solid red; ? '},
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },
                              {
                                  // animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'paint-brush', type: 'font-awesome', class: 'default-theme-color', style: 'font-size: 24px;  position: relative; '}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                    {type: 'text', key: {name: 'Facebook Theme', style: 'font-size: 16px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 85%; float: left; '},
                                    // {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color', style: 'display: inline-block; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin-top: 20px; border: 2px solid orange; '},
                                    {type: 'theme', event: {eventName : "onClickSetupProfile(this, event, 'apply_store_theme')", eventType: 'onclick'}, key: { name: "theme_store.themeThree",  style: 'display: block; border: none !important; width: 100%; height: 100px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 0px; float: left;'},
                                    // {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                  ],
                                  isConditionalStyles : {state: false, class: '', style: 'border: 2px solid red; ? '},
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px;',
                              },

                              //====================================================================================
                              // {
                              //     // animationType: 'fade-up', animationDelay: 150,
                              //     desc: [
                              //       {type: 'button', event: {eventName : "onClickSetupProfile(this, event, 'close-themeing-modal')", eventType: 'onclick'}, key: {name: 'Cancel', class: 'default-outline-color custom-profile default-theme-border', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px; background: white; '}, itemStyle: 'display: inline-block; width: 100%; margin-right: 10px;'},
                              //       // {type: 'button', event: {eventName : "onClickSetupProfile(this, event, 'apply_theme_changes')", eventType: 'onclick'}, key: {name: 'Apply Theme', class: 'default-background-color default-outline-color ', style: 'font-size: 20px; font-weight: 500; width: 100%; padding: 12px;  border: none; color: white; '}, itemStyle: 'display: inline-block; width: 49%;'},
                              //
                              //     ],
                              //     partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 10px; ',
                              // },
                          ],
                          isSectionVisible: {state: false, class: '', style: ''},
                          sectionClass: 'custom_theme_store',
                          partStyle: 'width: 100%; ',
                      }
        ],
          style: '',
      }
    },

    //========================== WHYD YOUTUBE APIS ================================================
    "whydYoutubeHomeTop_section": {
      sectionName : 'whydYoutubeHomeTop_section',
      // dataSource: {type: 'API', url: 'https://openwhyd.org/hot/electro?format=json'},
      block: {
          sections: [

            {
                animationType: 'fade-up', animationDelay: null,
                parts: [
                    {
                        animationType: 'fade-up', animationDelay: null,
                        isDraggable  : false,
                        desc: [
                          {type: 'utubeIframe', dataSource: 'self', key: {name: 'TRKwHkAQTII', style: 'width: 100%; height: 480px;'}, itemStyle: 'display: inline-block; width: 100%; display: block;'},
                        ],
                        partClass: 'collection-parts-mob-style  overlay-container',
                        partStyle: 'display: inline-block; width: 100%; height: 100%; margin-right: 0px; margin-bottom: 2px; vertical-align: top; background: black; color: grey;'
                    },
                ],
                sectionClass: '',
                sectionStyle: ''
                // sectionStyle: 'overflow-x: scroll; overflow-y: hidden; white-space: nowrap;',
              },

        ],
          blockStyle: '',
      }
    },

    "whydYoutubePopMusic_section": {
      sectionName : 'whydYoutubePopMusic_section',
      dataSource: {type: 'API', url: 'https://openwhyd.org/hot/electro?format=json'},
      block: {
          sections: [
            {
                animationType: 'fade-up', animationDelay: null,
                parts: [
                    {
                        animationType: 'fade-up', animationDelay: null,
                        isDraggable  : true,
                        desc: [
                          {type: 'text', key: {name: 'Popular Electro Music', class: 'default-theme-color default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 28px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 0px 16px 0px; float: left;'},
                        ],
                        partStyle: 'width: 100%;display: inline-block;  padding-bottom: 20px;',
                    },
                ],
                sectionClass: '',
                sectionStyle: '',
            },
            {
                animationType: 'fade-up', animationDelay: null,
                dataSource: {from: 'API', dataPath: 'root>tracks', view: 'collection', limit: "6"},
                parts: [
                    {
                        animationType: 'fade-up', animationDelay: null,
                        isDraggable  : false,
                        desc: [
                          {type: 'image', dataSource: 'API', key: {name: 'img', defaultValue: 'static/img/news/default_currents_news_img.png', style: 'width: 100%; border-radius: 4px; height: 200px; object-fit: cover; '}, itemStyle: 'display: inline-block; width: 100%; '},
                          {type: 'utubeIframe', dataSource: 'API', key: {name: 'eId', style: 'width: 100%; height: 175px;'}, itemStyle: 'display: inline-block; width: 100%; display: none;'},
                          {type: 'text', dataSource: 'API', key: {name: 'name', class: 'default-theme-color default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 16px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 0px 16px 0px; float: left;'},
                        ],

                        event: [
                          {
                            eventName : 'onClickFlipImgToVideo(this, event)',
                            eventType: 'onclick',
                            argument : {dataSource: 'API', innerDataPath: 'eId', key: {name: 'eId', action: 'redirectUrl'}},
                            dataSetName: 'nav-links-data'
                          },
                        ],
                        partClass: 'collection-parts-mob-style  overlay-container',
                        partStyle: 'display: inline-block; width: 32%; margin-right: 0px; margin-bottom: 2px; vertical-align: top; background: black; color: grey;'
                    },
                ],
                sectionClass: '',
                sectionStyle: ''
                // sectionStyle: 'overflow-x: scroll; overflow-y: hidden; white-space: nowrap;',
              },

        ],
          blockStyle: '',
      }
    },

    "whydYoutubeAllMusic_section": {
      sectionName : 'whydYoutubeAllMusic_section',
      dataSource: {type: 'API', url: 'https://openwhyd.org/hot/all?format=json&limit=20'},
      block: {
          sections: [
            {
                animationType: 'fade-up', animationDelay: null,
                dataSource: {from: 'API', dataPath: 'root>tracks', view: 'collection', limit: "none"},
                parts: [
                    {
                        animationType: 'fade-up', animationDelay: null,
                        isDraggable  : false,
                        desc: [
                          {type: 'image', dataSource: 'API', key: {name: 'img', defaultValue: 'static/img/news/default_currents_news_img.png', style: 'width: 100%; border-radius: 4px; height: 200px; object-fit: cover; '}, itemStyle: 'display: inline-block; width: 100%; '},
                          // {type: 'utubeIframe', dataSource: 'API', key: {name: 'eId', style: 'width: 100%; height: 175px;'}, itemStyle: 'display: inline-block; width: 100%; display: none;'},
                          {type: 'text', dataSource: 'API', key: {name: 'name', class: 'default-outline-color ellipse-line-one', style: 'display: inline-block; font-size: 16px; width: 100%; color: gray; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 0px 16px 0px; float: left;'},

                        ],

                        event: [
                          {
                            eventName : 'onClickFlipImgToVideo(this, event)',
                            eventType: 'onclick',
                            argument : {dataSource: 'API', innerDataPath: 'eId', key: {name: 'eId', action: 'redirectUrl'}},
                            dataSetName: 'nav-links-data'
                          },
                        ],
                        partClass: 'collection-parts-mob-style  overlay-container',
                        partStyle: 'display: inline-block; width: 32%; margin-right: 0px; margin-bottom: 2px; vertical-align: top; background: black; color: grey;'
                    },
                ],
                sectionClass: '',
                sectionStyle: ''
                // sectionStyle: 'overflow-x: scroll; overflow-y: hidden; white-space: nowrap;',
              },

        ],
          blockStyle: '',
      }
    },

    "whydPopularByArijitSinghMusic_section": {
      sectionName : 'whydPopularByArijitSinghMusic_section',
      dataSource: {type: 'API', url: 'https://openwhyd.org/search?context=quick&q=arijit%20singh&limit=100'},
      block: {
          sections: [
            {
                animationType: 'fade-up', animationDelay: null,
                dataSource: {from: 'API', dataPath: 'root>tracks', view: 'collection', limit: "none"},
                parts: [
                    {
                        animationType: 'fade-up', animationDelay: null,
                        isDraggable  : false,
                        desc: [
                          {type: 'image', dataSource: 'API', key: {name: 'img', defaultValue: 'static/img/news/default_currents_news_img.png', style: 'width: 100%; border-radius: 4px; height: 200px; object-fit: cover; '}, itemStyle: 'display: inline-block; width: 100%; '},
                          // {type: 'utubeIframe', dataSource: 'API', key: {name: 'eId', style: 'width: 100%; height: 175px;'}, itemStyle: 'display: inline-block; width: 100%; display: none;'},
                          {type: 'text', dataSource: 'API', key: {name: 'name', class: 'default-outline-color ellipse-line-one', style: 'display: inline-block; font-size: 16px; width: 100%; color: gray; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 0px 16px 0px; float: left;'},

                        ],

                        event: [
                          {
                            eventName : 'onClickFlipImgToVideo(this, event)',
                            eventType: 'onclick',
                            argument : {dataSource: 'API', innerDataPath: 'eId', key: {name: 'eId', action: 'redirectUrl'}},
                            dataSetName: 'nav-links-data'
                          },
                        ],
                        partClass: 'collection-parts-mob-style  overlay-container',
                        partStyle: 'display: inline-block; width: 32%; margin-right: 0px; margin-bottom: 2px; vertical-align: top; background: black; color: grey;'
                    },
                ],
                sectionClass: '',
                sectionStyle: ''
                // sectionStyle: 'overflow-x: scroll; overflow-y: hidden; white-space: nowrap;',
              },

        ],
          blockStyle: '',
      }
    },

    "whydYoutubeAllPlaylistMusic_section": {
      sectionName : 'whydYoutubeAllPlaylistMusic_section',
      // dataSource: {type: 'API', url: 'https://api.publicapis.org/entries'},
      dataSource: {type: 'DATA-SERVER', dataFilePath: '/giniMusicV2/store/giniMusicV2PlaylistData.js'},

      block: {
          sections: [
            {
                animationType: 'fade-up', animationDelay: null,
                dataSource: {from: 'DATA-SERVER', dataPath: 'root', view: 'collection', limit: "none"},
                parts: [
                    {
                        animationType: 'fade-up', animationDelay: null,
                        isDraggable  : false,
                        desc: [
                            {type: 'wrap-open', key: {name: 'div', class: 'wrap-open', style: 'width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 15px 16px 15px; margin-top: -15px;'},
                                {type: 'image', dataSource: 'API', key: {name: 'img', defaultValue: 'static/img/gini_defaults/fmRadio.jpg', style: 'width: 100%; border-radius: 4px; height: 200px; object-fit: cover; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                {type: 'text', dataSource: 'API', key: {name: 'name', class:'default-theme-primary-color', style: 'font-size: 18px; padding: 3px 0px; display: block; width: 100%; position: relative; font-weight: 700;'}, itemStyle: 'white-space: initial;'},
                                // {type: 'text', dataSource: 'API', key: {name: 'country', class: '',preHtml: '<span style="font-weight: 600; ">Country : </span>', style: 'font-size: 15px; padding-bottom: 3px; '}, itemStyle: ' white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'},
                                // {type: 'text', dataSource: 'API', key: {name: 'countrycode', preHtml: '<span style="font-weight: 600; ">Countrycode : </span>', style: 'font-size: 15px; '}, itemStyle: 'white-space: initial;'},
                                // {type: 'text', dataSource: 'API', key: {name: 'state', preHtml: '<span style="font-weight: 600; ">State : </span>', style: 'font-size: 15px;'}, itemStyle: 'white-space: initial;'},

                            {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},
// poster: 'static/img/gini_defaults/fmRadio.jpg',
                        ],
                        partClass: 'collection-parts-mob-style  overlay-container',
                        partStyle: 'display: inline-block; width: 30%; margin-right: 10px; margin-bottom: 10px; vertical-align: top; background: white; color: black; border-radius: 4px; '
                    },
                ],
                sectionClass: '',
                sectionStyle: ''
                // sectionStyle: 'overflow-x: scroll; overflow-y: hidden; white-space: nowrap;',
              },
        ],
          blockStyle: '',
      }
    },

    "dailymotionVideos_section": {
            sectionName : 'dailymotionVideos_section',
            dataSource: {type: 'API', url: 'https://api.dailymotion.com/videos?fields=channel%2Cchannel.created_time%2Cchannel.description%2Cduration%2Ccountry%2Cdescription%2Cembed_url%2Cembed_html%2Cid%2Cthumbnail_360_url%2Curl%2Ctitle&limit=10&country=IN&nogenre=movie&channel=news'},
            block: {
                sections: [
                  {
                      animationType: 'fade-up', animationDelay: null,
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              isDraggable  : true,
                              desc: [
                                {type: 'text', key: {name: 'Dailymotion Random Videos', class: 'default-theme-color default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 28px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 0px 16px 0px; float: left;'},
                                {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: 'default-outline-color', style: 'display: inline-block;  font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; float: left;'},

                              ],
                              partStyle: 'width: 100%;display: inline-block;  padding-bottom: 20px;',
                          },
                      ],
                      sectionClass: '',
                      sectionStyle: '',
                  },
                  {
                      animationType: 'fade-up', animationDelay: null,
                      dataSource: {from: 'API', dataPath: 'root>list', view: 'collection', limit: 15},
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              isDraggable  : false,
                              desc: [
                                {type: 'image', dataSource: 'API', key: {name: 'thumbnail_360_url', defaultValue: 'static/img/news/default_currents_news_img.png', style: 'width: 100%; height: 200px;'}, itemStyle: 'display: inline-block; width: 100%; float: left;'},
                                // {type: 'dailymotion_embed', dataSource: 'API', key: {name: 'id', defaultValue: '', style: 'width: 100%; height: 250px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                {type: 'wrap-open', key: {name: 'div', class: '', style: 'width: 100%;'}, itemStyle: 'display: inline-block; width: 64%; padding: 0px 10px 16px 10px; float: left;'},
                                // {type: 'text', dataSource: 'API', key: {name: 'title', class:'default-theme-primary-color', style: 'font-size: 16px; padding: 3px 0px; display: block; width: 100%; position: relative; font-weight: 700;'}, itemStyle: 'white-space: initial;'},
                                // {type: 'text', key: {name: 'RAJIB KARMAKAR', class:'default-theme-primary-color', style: 'font-size: 14px; padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; '}, itemStyle: 'white-space: initial;'},
                                // {type: 'text', dataSource: 'API', key: {name: 'description', class: '', style: 'font-size: 15px; padding-bottom: 3px; '}, itemStyle: 'white-space: initial;'},
                                // {type: 'text', dataSource: 'API', key: {name: 'author', preHtml: '<span style="font-weight: 600; ">Author : </span>', style: 'font-size: 15px; '}, itemStyle: 'white-space: initial;'},
                                // {type: 'text', dataSource: 'API', key: {name: 'language', preHtml: '<span style="font-weight: 600; ">Language : </span>', style: 'font-size: 15px;'}, itemStyle: 'white-space: initial;'},
                                {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                              ],
                              event: [
                                {
                                  eventName : 'onClickRedirectUrl(this, event)',
                                  eventType: 'onclick',
                                  argument : {dataSource: 'API', key: {name: 'url', action: 'redirectUrl'}},
                                  dataSetName: 'nav-links-data'
                                },
                              ],
                              partClass: 'collection-parts-mob-style',
                              partStyle: 'display: inline-block; width: 32%; vertical-align: top;'
                          },
                      ],
                      sectionClass: '',
                      sectionStyle: ''
                      // sectionStyle: 'overflow-x: scroll; overflow-y: hidden; white-space: nowrap;',
                    },

              ],
                blockStyle: '',
            }
        },

    "dailymotionVideosList_section": {
                sectionName : 'dailymotionVideosList_section',
                dataSource: {type: 'API', url: 'https://api.dailymotion.com/videos'},
                block: {
                    sections: [
                      {
                          animationType: 'fade-up', animationDelay: null,
                          parts: [
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Dailymotion Videos Lists', class: 'default-theme-color default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 28px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 0px 16px 0px; float: left;'},
                                    {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: 'default-outline-color', style: 'display: inline-block;  font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; float: left;'},

                                  ],
                                  partStyle: 'width: 100%;display: inline-block;  padding-bottom: 20px;',
                              },
                          ],
                          sectionClass: '',
                          sectionStyle: '',
                      },
                      {
                          animationType: 'fade-up', animationDelay: null,
                          dataSource: {from: 'API', dataPath: 'root>list', view: 'collection', limit: 15},
                          parts: [
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  isDraggable  : false,
                                  desc: [
                                    {type: 'image', dataSource: 'API', key: {name: 'thumbnail_360_url', defaultValue: 'static/img/news/default_currents_news_img.png', style: 'width: 100%; height: 200px;'}, itemStyle: 'display: inline-block; width: 100%; float: left;'},
                                    // {type: 'dailymotion_embed', dataSource: 'API', key: {name: 'id', defaultValue: '', style: 'width: 100%; height: 250px;'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'text', dataSource: 'API', key: {name: 'title', class:'default-theme-primary-color', style: 'font-size: 16px; padding: 3px 0px; display: block; width: 100%; position: relative; font-weight: 600;'}, itemStyle: 'white-space: initial;'},

                                  ],
                                  event: [
                                    {
                                      eventName : 'onClickRedirectUrl(this, event)',
                                      eventType: 'onclick',
                                      argument : {dataSource: 'API', key: {name: 'url', action: 'redirectUrl'}},
                                      dataSetName: 'nav-links-data'
                                    },
                                  ],
                                  partClass: 'collection-parts-mob-style',
                                  partStyle: 'display: inline-block; width: 32%; vertical-align: top;'
                              },
                          ],
                          sectionClass: '',
                          sectionStyle: ''
                          // sectionStyle: 'overflow-x: scroll; overflow-y: hidden; white-space: nowrap;',
                        },

                  ],
                    blockStyle: '',
                }
            },


    //========================== WHYD YOUTUBE APIS ================================================

    "all_sections" : {
        values: [

        ],
        partStyle: 'background: #F1F3F6;',
    },

    "init_sections" : {
        values: [
          // {
          //   section: {name: 'whydYoutubeHomeTop', id: '', class: '', style: 'display: inline-block; width: 100%; float: left;'},
          //   menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: 'height: 100px; width: 100px; margin-left: 45%; position: relative; margin-top: 15%; background: transparent; border-radius: 50px;'},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'whydYoutubeAllMusic', id: '', class: '', style: 'display: inline-block; width: 100%; float: left; border-bottom: 2px solid gray;'},
          //   menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: 'height: 100px; width: 100px; margin-left: 45%; position: relative; margin-top: 15%; background: transparent; border-radius: 50px;'},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'whydYoutubeAllPlaylistMusic', id: '', class: '', style: 'display: inline-block; width: 100%; float: left;'},
          //   menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: 'height: 100px; width: 100px; margin-left: 45%; position: relative; margin-top: 15%; background: transparent; border-radius: 50px;'},  style: ''},
          //   template: {style: ''}
          // },

          {
            section: {name: 'dailymotionVideosList', id: '', class: '', style: 'display: inline-block; width: 100%; float: left;'},
            menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: 'height: 100px; width: 100px; margin-left: 45%; position: relative; margin-top: 15%; background: transparent; border-radius: 50px;'},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'dailymotionVideos', id: '', class: '', style: 'display: inline-block; width: 100%; float: left;'},
            menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: 'height: 100px; width: 100px; margin-left: 45%; position: relative; margin-top: 15%; background: transparent; border-radius: 50px;'},  style: ''},
            template: {style: ''}
          },


        ],
        partStyle: 'background: #F1F3F6;',
    },
}

module.exports.portfolio_data = portfolio_data;
module.exports.default_style = default_style;
module.exports.default_settings = default_settings;



//sakal 11.40am,tula lagna, narogon, mesh rashi, khatrio,
