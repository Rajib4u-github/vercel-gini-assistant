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


let sections_data = {

    "default_style": {
        themeColor: '#6264A7',
        themeBgColor: '#F5F5F5',
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

    "sidebar_section": {
        sectionName : 'sidebar_section',
        profile: {
            name: 'Alex Smith',
            img: 'static/img/profile-img.jpg',
            social_network_links: [
              {name : 'twitter', style: ''},
              {name : 'facebook', style: ''},
              {name : 'instagram', style: ''},
              {name : 'google-plus', style: ''},
              {name : 'linkedin', style: ''},
            ]
          },
        sections : [
          {name : 'Home', style: ''},
          {name : 'About', style: ''},
          {name : 'Resume', style: ''},
          {name : 'Portfolio', style: ''},
          {name : 'Services', style: ''},
          {name : 'Contact', style: ''},
        ],
        menuBtn: {style: ''}
    },

    "about_section": {
        sectionName : 'about_section',
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'text', key: {name: 'About Me', class: 'default-theme-color default-outline-color',  style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, itemStyle: 'display: inline-block;  padding: 0px 10px; float: left; width: 100%;'},
                                      {type: 'text', key: {name: 'To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.', class: ' default-outline-color ', style: 'display: inline-block;  font-size: 16px; '},  itemStyle: 'display: inline-block; padding: 0px 10px; float: left; width: 100%; margin: 16px 0px;'},

                                    ],
                                    partStyle: 'width: 100%;display: inline-block;  ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'image', key: {name: 'static/img/me_portfolio/myImg1.jpg', style: ' border-radius: 5%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                      // {type: 'image', key: {name: 'static/img/generic_portfolio_image/images/default_user_profile.jpg', style: ' border-radius: 5%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},

                                    ],
                                    partStyle: 'width: 40%;display: inline-block;  ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                      {type: 'text', key: {name: 'Rajib karmakar', class: 'default-theme-color default-outline-color', style: ' font-size: 28px; font-weight: 700; width: 100%; '}, itemStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'},
                                      {type: 'text', key: {name: 'Full Stack Developer.', class:'custom-primary-font-color default-theme-primary-color', style: ' font-size: 22px; width: 100%;' }, itemStyle: 'display: inline-block;  padding: 0px 10px; width: 100%;'},
                                      {type: 'text', key: {name: 'To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.', style: 'width: 100%;'}, itemStyle: 'display: inline-block; margin-top: 5px; padding: 10px; width: 100%; margin: 16px 0px;'},

                                      {type: 'icon', key: {name: 'chevron-right', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ' margin-right: 5px;'}, itemStyle: 'display: inline-block; width: 10%; text-align: center; float: left;'},

                                      {type: 'text', key: {name: 'Birthday', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block;  padding: 0px 10px; width: 15%;'},
                                      {type: 'text', key: {name: '02-04-1987', style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block; padding: 0px 10px; width: 72%;'},

                                      {type: 'icon', key: {name: 'chevron-right', type: 'font-awesome',  class: 'default-theme-color default-outline-color', style: ' margin-right: 5px;'}, itemStyle: 'display: inline-block; width: 10%; text-align: center; float: left;'},

                                      {type: 'text', key: {name: 'Birthday', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block; padding: 0px 10px; float: left; width: 15%;'},
                                      {type: 'text', key: {name: '02-04-1987',  style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block;  padding: 0px 10px; float: right; width: 72%;'},

                                      {type: 'icon', key: {name: 'chevron-right', type: 'font-awesome',  class: 'default-theme-color default-outline-color', style: ' margin-right: 5px;'}, itemStyle: 'display: inline-block; width: 10%; text-align: center; float: left;'},

                                      {type: 'text', key: {name: 'Birthday', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block;  padding: 0px 10px; float: left; width: 15%;'},
                                      {type: 'text', key: {name: '02-04-1987', style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block;  padding: 0px 10px; float: right; width: 72%;'},

                                      {type: 'icon', key: {name: 'chevron-right', type: 'font-awesome',  class: 'default-theme-color default-outline-color', style: ' margin-right: 5px;'}, itemStyle: 'display: inline-block; width: 10%; text-align: center; float: left;'},

                                      {type: 'text', key: {name: 'Birthday', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block; padding: 0px 10px; float: left; width: 15%;'},
                                      {type: 'text', key: {name: '02-04-1987', style: 'margin-left: 20px; width: 100%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, itemStyle: 'display: inline-block;  padding: 0px 10px; float: right; width: 72%;'},

                                    ],
                                    partStyle: 'width: 60%;display: inline-block; float: right;',
                                },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },
          ],
            style: '',
        }
    },

    "facts_section": {
        sectionName : 'facts_section',
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,
                                    desc: [
                                      {type: 'text', key: {name: 'Facts', class: 'default-theme-color default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 28px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                      {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: 'default-outline-color', style: 'display: inline-block;  font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},

                                    ],
                                    partStyle: 'width: 100%;display: inline-block;  ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,
                                    desc: [
                                      {type: 'icon', key: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 26px; position: relative; color: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '232', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 48px; padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; '}, itemStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: 'Happy Clients', class: 'custom-primary-font-color', style: 'font-size: 16px;background: white; '}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: 'consequuntur quae', style: 'font-size: 16px; background: white;'}, itemStyle: 'display: inline-block;'},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'icon', key: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 26px; position: relative; color: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '232', class:'default-theme-primary-color custom-primary-font-color', style: ' font-size: 48px;  padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; '}, itemStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: 'Happy Clients', class:'custom-primary-font-color', style: 'font-size: 16px; background: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: 'consequuntur quae', style: ' font-size: 16px; background: white;'}, itemStyle: 'display: inline-block;'},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'icon', key: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 26px; color: red;  position: relative; color: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '232', class:'default-theme-primary-color custom-primary-font-color', style: ' font-size: 48px;  padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; '}, itemStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: 'Happy Clients', class:'custom-primary-font-color', style: 'font-size: 16px; background: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: 'consequuntur quae', style: ' font-size: 16px; background: white;'}, itemStyle: 'display: inline-block;'},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'icon', key: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 26px; color: red;  position: relative; color: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '232', class:'default-theme-primary-color custom-primary-font-color', style: ' font-size: 48px; padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; '}, itemStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: 'Happy Clients', class:'custom-primary-font-color', style: 'font-size: 16px; background: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: 'consequuntur quae', style: ' font-size: 16px; background: white;'}, itemStyle: 'display: inline-block;'},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },

                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
    },

    "skills_section": {
        sectionName : 'skills_section',
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'text', key: {name: 'Skills', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%;'},  itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                      {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', style: 'display: inline-block; outline-color: '+default_style.themeColor+' !important; font-size: 16px;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},

                                    ],
                                    partStyle: 'width: 100%;display: inline-block;  ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Primary Skill', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, itemStyle: 'display: block; width: 100%;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, itemStyle: 'display: block; width: 100%;'},
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    desc: [
                                      {type: 'progress-bar', key: {name: 'JAVASCRIPT', style: 'background: white;'}, value: {name: '85', style: 'background: white; width: 13%; float: right;'}, name : 'JAVASCRIPT', percent: '90', class: 'default-outline-color progress-bar-theme ',  progressBarStyle: ' ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                      {type: 'progress-bar', key: {name: 'HTML5', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'},  name : 'HTML5', percent: '90', class: 'default-outline-color progress-bar-theme ',  progressBarStyle: '', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                      {type: 'progress-bar', key: {name: 'ANGULAR JS', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'}, name : 'ANGULAR JS', percent: '90', class: 'default-outline-color progress-bar-theme ',  progressBarStyle: '', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                      {type: 'progress-bar', key: {name: 'REACT JS', style: 'background: white;'}, value: {name: '80', style: 'background: white; width: 13%; float: right;'}, name : 'REACT JS', percent: '90', class: 'default-outline-color progress-bar-theme ',  progressBarStyle: '', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                      {type: 'progress-bar', key: {name: 'NODE JS', style: 'background: white;'}, value: {name: '80', style: 'background: white; width: 13%; float: right;'}, name : 'NODE JS', percent: '90', class: 'default-outline-color progress-bar-theme ',  progressBarStyle: '', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                      {type: 'progress-bar', key: {name: 'CSS3', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'}, name : 'CSS3', percent: '90', class: 'default-outline-color progress-bar-theme ',  progressBarStyle: ' ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                            ],
                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Software Skill', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;'}, value: {name: '', style: ''}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, value: {name: '', style: ''}},
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'Node JS', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: ''}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 400; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, value: {name: 'Latest', style: 'background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AngularJs & ReactJS', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: ''}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 400; background: white;'}, value: {name: '', style: ''}},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, value: {name: 'Latest', style: ' background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'MongoDb & Firebase ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, value: {name: '', style: ' '}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 400; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, value: {name: '20', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'GraphQl ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: ''}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 1 years. ', style: 'font-weight: 400; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 200,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, value: {name: '', style: ''}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, value: {name: '', style: ''}},
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, value: {name: 'Latest', style: 'background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Computer Language', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, },
                                    ],
                                    partStyle: ' display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, value: {name: 'Latest', style: ' background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, value: {name: 'Latest', style: ' background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, value: {name: 'Latest', style: ' background: white;'}},
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Framework Known', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '},},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, },
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'background: white;'},},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'Mongodb', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                }
                            ]
                        },
          ],
            style: '',
        }
    },

    "education_section" : {
        sectionName : 'education_section',
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'text', key: {name: 'Education', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                      {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: ' default-outline-color', style: 'display: inline-block; font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin: 16px 0px;'},

                                    ],
                                    partStyle: 'width: 100%;display: inline-block;  ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'text', key: {name: 'Bachelor In Computer Application', class:'default-theme-primary-color custom-primary-font-color',style: ' font-size: 1.5rem; margin-top: 20px;  padding-bottom: 15px; display: block; width: 95%;background: white;'}, itemStyle: 'display: block; '},
                                      {type: 'text', key: {name: '2009', style: ' background: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: ' -  2012', style: ' background: white;'}, itemStyle: 'display: inline-block;'},
                                      {type: 'text', key: {name: 'Netaji Subash Engineering College Under W.B.U.T.', style: 'font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, itemStyle: ' display: block;'},

                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'text', key: {name: 'Masters In Computer Application', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 1.5rem; margin-top: 20px; padding-bottom: 15px; display: block; width: 95%;background: white;'}, itemStyle: 'display: block; '},
                                      {type: 'text', key: {name: '2012', style: 'background: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: ' -  2015', style: 'background: white;'}, itemStyle: 'display: inline-block;'},
                                      {type: 'text', key: {name: 'R.V. College Of Engineering', style: ' font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, itemStyle: ' display: block;'},

                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'text', key: {name: 'Masters In Computer Application', class:'default-theme-primary-color custom-primary-font-color', style: ' font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, itemStyle: 'display: block; '},
                                      {type: 'text', key: {name: '2012', style: ' background: white;'}, itemStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: ' -  2015', style: 'background: white;'}, itemStyle: 'display: inline-block;'},
                                      {type: 'text', key: {name: 'R.V. College Of Engineering', style: ' font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, itemStyle: ' display: block;'},

                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                },

                            ]

                        },

          ],
            style: '',
        }
    },

    "workexp_section" : {
          sectionName : 'workexp_section',
          block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                          {type: 'text', key: {name: 'Work Experience', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                          {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: ' default-outline-color', style: 'display: inline-block;  font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin: 16px 0px;'},

                                        ],
                                        partStyle: 'width: 100%;display: inline-block;  ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                          {type: 'text', key: {name: 'Associate System Engineer', class:'default-theme-primary-color custom-primary-font-color', style: ' font-size: 1.5rem; margin-top: 20px; padding-bottom: 15px; display: block; width: 95%;background: white;'}, itemStyle: 'display: block; '},
                                          {type: 'text', key: {name: 'Feb 2015', style: ' background: white;'}, itemStyle: 'display: inline-block;'},
                                          {type: 'text', key: {name: ' - Jun 2016', style: ' background: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Azureiken Technologies Pvt Ltd, Banglore', style: ' font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, itemStyle: ' display: block;'},

                                        ],
                                        sectionClass: 'custom-theme-border',
                                        partStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        desc: [
                                          {type: 'text', key: {name: 'Application Programmer', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 1.5rem; margin-top: 20px; padding-bottom: 15px; display: block; width: 95%;background: white;'}, itemStyle: 'display: block; '},
                                          {type: 'text', key: {name: 'Jul 2016', style: ' background: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: ' - Sep 2017', style: ' background: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Web Spiders Pvt Ltd, kolkata', style: ' font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, itemStyle: ' display: block;'},

                                        ],
                                        sectionClass: 'custom-theme-border',
                                        partStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        desc: [
                                          {type: 'text', key: {name: 'Front-end Developer', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 1.5rem; margin-top: 20px; padding-bottom: 15px; display: block; width: 95%;background: white;'}, itemStyle: 'display: block; '},
                                          {type: 'text', key: {name: 'Sep 2017', style: ' background: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: ' - Mar 2019', style: 'background: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'P.W.C India', style: 'font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, itemStyle: ' display: block;'},

                                        ],
                                        sectionClass: 'custom-theme-border',
                                        partStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        desc: [
                                          {type: 'text', key: {name: 'UI Developer', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 1.5rem; margin-top: 20px; padding-bottom: 15px; display: block; width: 95%;background: white;'}, itemStyle: 'display: block; '},
                                          {type: 'text', key: {name: 'Mar 2019', style: 'background: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: ' - Now', style: 'background: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Capegimini, Unitech Kolkata.', style: ' font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, itemStyle: ' display: block;'},

                                        ],
                                        sectionClass: 'custom-theme-border',
                                        partStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },

                                ]

                            },

              ],
                style: '',
            }
        },

    "work_section1": {
          sectionName : 'work_section',
          header: {
              title: {name: 'Amar Latest sab baler kaj baj work', style: 'display: inline-block;outline-color: '+default_style.themeColor+' !important;font-size: 28px;font-weight: 700;width: 100%;color: '+default_style.themeColor+';'},

              heading: {
                txt: `
                  Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                `,
                style: ''
              },
          },
          works: {
            category: [
              "all", "education", "beauty", "accounts", "nature", "illustration", "medical", "media", "restaurant", "industries", "sports", "estate"
            ],
            values: [
                // ========================================================
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo1.png", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo2.jpg", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo3.jpg", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo4.jpg", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo5.png", style: '', filterName: 'education'},
                //========
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty1.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty2.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty3.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty4.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty5.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty6.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty7.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty8.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty9.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty10.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty11.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty12.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty13.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty14.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty15.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty16.jpg", style: '', filterName: 'beauty'},
                //========
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts1.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts2.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts3.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts4.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts5.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts6.jpg", style: '', filterName: 'accounts'},
                //========
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature1.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature2.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature3.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature4.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature5.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature6.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature7.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature8.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature9.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature10.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature11.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature12.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature13.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature14.jpg", style: '', filterName: 'nature'},
                //==========

                //======
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration1.jpg",style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration2.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration3.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration4.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration5.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration6.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration7.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration9.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration10.jpg", style: '', filterName: 'illustration'},

                //==========
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical1.jpg", style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical2.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical3.png" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical4.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical5.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical6.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical7.png" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical8.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical9.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical10.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical11.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical12.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical13.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical14.jpg" ,style: '', filterName: 'medical'},
                //===========
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media1.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media2.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media3.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media4.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media5.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media6.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media7.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media8.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media9.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media10.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media11.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media12.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media13.jpg",style: '', filterName: 'media'},
                //=============
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant1.jpg", style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant2.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant3.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant4.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant5.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant6.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant7.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant8.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant9.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant10.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant11.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant12.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant13.jpg" , style: '', filterName: 'restaurant'},

                //=========
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service1.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service2.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service3.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service4.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service5.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service6.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service7.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service8.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service9.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service10.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service11.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service12.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service13.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service14.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service15.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service16.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service17.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service18.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service19.jpg" , style: '', filterName: 'industries'},
                //========
                //=======
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports1.jpg" , style: '', filterName: 'sports'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports2.jpg" , style: '', filterName: 'sports'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports3.png" , style: '', filterName: 'sports'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports4.png" , style: '', filterName: 'sports'},
                //========
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate1.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate2.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate3.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate4.png" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate5.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate6.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate7.jpg" , style: '', filterName: 'estate'},
                //=======
                // {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports1.jpg" , style: '', filterName: 'sports'},
                // {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports2.jpg" , style: '', filterName: 'sports'},
                // {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports3.png" , style: '', filterName: 'sports'},
                // {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports4.png" , style: '', filterName: 'sports'},

                //==========

            ],
            style: ''
          },
          latestWork: {
              "Education": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo1.png", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo2.jpg", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo3.jpg", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo4.jpg", style: '', filterName: 'education'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/education_and_religious/logo5.png", style: '', filterName: 'education'},
              ],
              "Beauty": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty1.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty2.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty3.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty4.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty5.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty6.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty7.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty8.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty9.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty10.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty11.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty12.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty13.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty14.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty15.jpg", style: '', filterName: 'beauty'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/beauty/beauty16.jpg", style: '', filterName: 'beauty'},
              ],
              "Consulting_And_Accounting": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts1.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts2.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts3.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts4.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts5.jpg", style: '', filterName: 'accounts'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/consulting_and_accounting/accounts6.jpg", style: '', filterName: 'accounts'},
              ],
              "Nature_Source": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature1.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature2.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature3.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature4.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature5.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature6.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature7.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature8.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature9.png", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature10.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature11.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature12.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature13.jpg", style: '', filterName: 'nature'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/nature/nature14.jpg", style: '', filterName: 'nature'},
              ],
              "Illustration" : [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration1.jpg",style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration2.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration3.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration4.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration5.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration6.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration7.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration9.jpg", style: '', filterName: 'illustration'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/illustration/illustration10.jpg", style: '', filterName: 'illustration'},

              ],
              "Medical": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical1.jpg", style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical2.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical3.png" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical4.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical5.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical6.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical7.png" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical8.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical9.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical10.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical11.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical12.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical13.jpg" ,style: '', filterName: 'medical'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/medical/medical14.jpg" ,style: '', filterName: 'medical'},
              ],
              "Media_And_Technology": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media1.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media2.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media3.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media4.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media5.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media6.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media7.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media8.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media9.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media10.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media11.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media12.jpg",style: '', filterName: 'media'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/media/media13.jpg",style: '', filterName: 'media'},
              ],
              "Restaurant": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant1.jpg", style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant2.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant3.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant4.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant5.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant6.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant7.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant8.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant9.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant10.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant11.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant12.jpg" , style: '', filterName: 'restaurant'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/restaurant/restaurant13.jpg" , style: '', filterName: 'restaurant'},
              ],
              "Service_Industries": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service1.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service2.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service3.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service4.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service5.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service6.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service7.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service8.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service9.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service10.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service11.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service12.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service13.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service14.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service15.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service16.png" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service17.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service18.jpg" , style: '', filterName: 'industries'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/service/service19.jpg" , style: '', filterName: 'industries'},
              ],
              "Sports": [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports1.jpg" , style: '', filterName: 'sports'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports2.jpg" , style: '', filterName: 'sports'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports3.png" , style: '', filterName: 'sports'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/sports/sports4.png" , style: '', filterName: 'sports'},
              ],
              "Real_Estate" : [
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate1.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate2.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate3.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate4.png" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate5.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate6.jpg" , style: '', filterName: 'estate'},
                {imgUrl: "static/img/final_portfolio/logo_by_industries/real_estate/realestate7.jpg" , style: '', filterName: 'estate'},
              ],

          }
        },

    "services_section" : {
            sectionName : 'services_section',
            block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                          {type: 'text', key: {name: 'Services', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '},  itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                          {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: 'default-outline-color', style: 'display: inline-block; font-size: 16px;'},  itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},

                                        ],
                                        partStyle: 'width: 100%;display: inline-block;  ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        isDraggable  : true,

                                        desc: [
                                            {type: 'icon', key: {name: 'laptop', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 24px;  color: white;'}, itemStyle: 'display: inline-block; '},
                                            {type: 'text', key: {name: 'Lorem Ipsum', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 85%;'},  itemStyle: 'display: inline; '},
                                            {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'background: white;'},  itemStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        isDraggable  : true,

                                        desc: [
                                          {type: 'icon', key: {name: 'shopping-bag', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 24px; color: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Dolor Sitema', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 85%;'},  itemStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: ' background: white;'},  itemStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 100,
                                        isDraggable  : true,

                                        desc: [
                                          {type: 'icon', key: {name: 'globe', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 24px; color: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Sed ut perspiciatis', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 85%;'},  itemStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: ' background: white;'},  itemStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 150,
                                        isDraggable  : true,

                                        desc: [
                                          {type: 'icon', key: {name: 'ship', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 24px; color: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Magni Dolores', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 85%;'}, itemStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: ' background: white;'},  itemStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 200,
                                        isDraggable  : true,

                                        desc: [
                                          {type: 'icon', key: {name: 'star', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 24px;  color: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Nemo Enim', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 85%;'}, itemStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: ' background: white;'},  itemStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 200,
                                        isDraggable  : true,

                                        desc: [
                                          {type: 'icon', key: {name: 'tasks', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 24px; color: white;'}, itemStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Eiusmod Tempor', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 85%;'},  itemStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: ' background: white;'},  itemStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                    }
                                ]

                            },

              ],
                style: '',
            }
        },

    "testimonials_section": {
              sectionName : 'testimonials_section',
              block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [
                                    {
                                        animationType: 'zoom-in', animationDelay: 100,
                                        isDraggable  : true,
                                        desc: [
                                          {type: 'text', key: {name: 'Testimonials ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                          {type: 'text', key: {name: `What they're saying about us`, class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                        ],
                                        partClass: '',
                                        partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        isDraggable  : true,

                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px;  background: transparent; width: 65%;'}, },
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'},  itemStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', class: 'default-theme-color default-outline-colo',  style: 'background: transparent;'}, itemStyle: 'text-align: center;'},
                                            {type: 'text', key: {name: 'Entrepreneur', class:'default-theme-primary-color custom-primary-font-color', style: ' background: transparent;'}, itemStyle: 'text-align: center;'},
                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },

                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        isDraggable  : true,

                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px;  background: transparent; width: 65%;'}, },
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'},  itemStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', class: 'default-theme-color default-outline-color',  style: ' background: transparent;'}, value: {name: '', style: 'font-weight: 400;'}, itemStyle: 'text-align: center;'},
                                            {type: 'text', key: {name: 'Entrepreneur', class:'default-theme-primary-color custom-primary-font-color', style: ' background: transparent;'}, value: {name: '', style: 'font-weight: 400; background: transparent;'}, itemStyle: 'text-align: center;'},
                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        isDraggable  : true,

                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px;  background: transparent; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'},  itemStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', class: 'default-theme-color default-outline-color', style: ' background: transparent;'}, itemStyle: 'text-align: center;'},
                                            {type: 'text', key: {name: 'Entrepreneur', class:'default-theme-primary-color custom-primary-font-color', style: ' background: transparent;'}, itemStyle: 'text-align: center;'},
                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 20px;'
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        isDraggable  : true,

                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px; background: transparent; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'},  itemStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', class: 'default-theme-color default-outline-color',  style: 'background: transparent;'}, itemStyle: 'text-align: center;'},
                                            {type: 'text', key: {name: 'Entrepreneur', class:'default-theme-primary-color custom-primary-font-color', style: 'background: transparent;'}, itemStyle: 'text-align: center;'},
                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        isDraggable  : true,

                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px;  background: transparent; width: 65%;'}, },
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'},  itemStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', class: 'default-theme-color default-outline-color',  style: ' background: transparent;'}, itemStyle: 'text-align: center;'},
                                            {type: 'text', key: {name: 'Entrepreneur', class:'default-theme-primary-color custom-primary-font-color', style: 'background: transparent;'}, itemStyle: 'text-align: center;'},
                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                ]

                            },

              ],
                style: '',
            }
          },

    "languages_section": {
            sectionName : 'languages_section',
            block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                          {type: 'text', key: {name: 'Language Known', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, value: {name: '', style: ''}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                          {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', style: 'display: inline-block; outline-color: '+default_style.themeColor+' !important; font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; margin: 16px 0px;'},

                                        ],
                                        partStyle: 'width: 100%;display: inline-block;  ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'icon', key: {name: 'language', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: "font-size: 30px;  font-family: 'fontawesome'; "}, itemStyle: 'display: inline-block; '},
                                            {type: 'text', key: { name: 'Bengali', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 45%;'}, value: {name: 'Native Speech', style: 'font-weight: 400; float: right; width: 54%; background: white;'}, itemStyle: ''},
                                            {type: 'text', key: {name: 'Read', style: ' background: white;'},  itemStyle: 'display: inline-block; position: relative; top: 10px;'},
                                            {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 30px;'}, itemStyle: 'display: inline-block; float: right;'},
                                            {type: 'text', key: {name: 'Write', style: ' background: white;'},  itemStyle: 'position: relative; top: 25px;'},
                                            {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 30px; '}, itemStyle: 'display: inline-block; float: right;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'icon', key: {name: 'language', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: "font-size: 30px;  font-family: 'fontawesome'; "}, itemStyle: 'display: inline-block; '},
                                            {type: 'text', key: { name: 'English', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; float: right;'}, itemStyle: ''},
                                            {type: 'text', key: {name: 'Read', style: ' background: white;'}, itemStyle: 'display: inline-block; position: relative; top: 10px;'},
                                            {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 30px;  '}, itemStyle: 'display: inline-block; float: right;'},
                                            {type: 'text', key: {name: 'Write', style: ' background: white;'},  itemStyle: 'position: relative; top: 25px;'},
                                            {type: 'icon', key: {name: 'times', type: 'font-awesome', style: 'font-size: 30px; color: red; '}, itemStyle: 'display: inline-block; float: right;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'icon', key: {name: 'language', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: "font-size: 30px;  font-family: 'fontawesome'; "}, itemStyle: 'display: inline-block; '},
                                            {type: 'text', key: { name: 'Hindi', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; float: right;'}, itemStyle: ''},
                                            {type: 'text', key: {name: 'Read', style: 'background: white;'}, value: {name: '', style: 'font-weight: 400;'}, itemStyle: 'display: inline-block; position: relative; top: 10px;'},
                                            {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: 'font-size: 30px; '}, itemStyle: 'display: inline-block; float: right;'},
                                            {type: 'text', key: {name: 'Write', style: ' background: white;'},  itemStyle: 'position: relative; top: 25px;'},
                                            {type: 'icon', key: {name: 'times', type: 'font-awesome', style: 'font-size: 30px; color: red; '}, itemStyle: 'display: inline-block; float: right;'},

                                        ],
                                        partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },

                                ]

                            },
              ],
                style: '',
            }
          },

    "contacts_section": {
                sectionName : 'contacts_section',
                block: {
                    sections: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    parts: [
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'text', key: {name: 'Contact ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                              {type: 'text', key: {name: `Contact Us`, class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                            ],
                                            partClass: '',
                                            partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                                        },
                                        {
                                            animationType: 'fade-up', animationDelay: null,
                                            desc: [
                                              {type: 'icon', key: {name: 'map-marker', type: 'font-awesome', style: 'font-size: 22px; color: white; '}, secClass: 'default-background-color', itemStyle: 'display: block; margin-top: 10px; margin-top: 10px;display: inline-block;width: 45px;text-align: center; padding: 10px;border-radius: 50%;position: relative;top: 13px;margin-right: 10px;'},
                                              {type: 'text', key: {name: 'Location', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 20px; background: white;'}, secClass: '', itemStyle: 'display: inline-block;'},
                                              {type: 'text', key: {name: '27-Bidhanpally, Barrackpore, kol-700122', style: 'background: white;'}, secClass: '', itemStyle: 'display: block; margin-left: 60px;'},
                                              {type: 'icon', key: {name: 'envelope', type: 'font-awesome', style: 'font-size: 22px; color: white; '}, secClass: 'default-background-color', itemStyle: 'display: block; margin-top: 10px; margin-top: 10px;display: inline-block;width: 45px;text-align: center;  padding: 10px;border-radius: 50%;position: relative;top: 13px;margin-right: 10px;'},
                                              {type: 'text', key: {name: 'Email', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 20px; background: white;'}, secClass: '', itemStyle: 'display: inline-block;'},
                                              {type: 'text', key: {name: 'rajibkarmakar87@gmail.com', style: 'background: white;'},  itemStyle: 'display: block; margin-left: 60px;'},
                                              {type: 'icon', key: {name: 'phone', type: 'font-awesome', style: 'font-size: 22px; color: white; '}, secClass: 'default-background-color', itemStyle: 'display: block; margin-top: 10px; margin-top: 10px;display: inline-block;width: 45px;text-align: center; padding: 10px;border-radius: 50%;position: relative;top: 13px;margin-right: 10px;'},
                                              {type: 'text', key: {name: 'Call', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 20px; background: white;'}, secClass: '',  itemStyle: 'display: inline-block;'},
                                              {type: 'text', key: {name: '8147042756', style: 'background: white;'}, secClass: '', itemStyle: 'display: block; margin-left: 60px;'},
                                              {type: 'iframe', key: {name: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621', style: ''}, itemStyle: 'display: inline-block; width: 95%; margin-top: 10px;'},

                                            ],
                                            partStyle: 'width: 47%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; float: left; padding: 20px; ',
                                        },
                                        {
                                            animationType: 'fade-up', animationDelay: null,
                                            desc: [
                                              {type: 'text', key: {name: 'Your Name', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 18px; background: white;'}, itemStyle: 'display: block; margin: 10px 0px;'},
                                              {type: 'input-type-text', key: {name: '', style: 'width: 100%; background: white; padding: 8px;'},  itemStyle: 'display: block; '},
                                              {type: 'text', key: {name: 'Your Email', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 18px; background: white;'}, itemStyle: 'display: inline-block; margin: 10px 0px;'},
                                              {type: 'input-type-text', key: {name: '', style: 'width: 100%; background: white; padding: 8px;'}, itemStyle: ' display: block;'},
                                              {type: 'text', key: {name: 'Subject', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 18px; background: white;'},  itemStyle: 'display: inline-block; margin: 10px 0px;'},
                                              {type: 'input-type-text', key: {name: '', style: 'width: 100%; background: white; padding: 8px;'},  itemStyle: ' display: block;'},
                                              {type: 'text', key: {name: 'Your Message', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 18px; background: white;'},  itemStyle: 'display: inline-block; margin: 10px 0px;'},
                                              {type: 'input-type-textarea', key: {name: '', style: 'background: white; padding: 8px;'}, itemStyle: ' display: block; height: 220px; '},

                                            ],
                                            partStyle: 'width: 47%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; float: right; padding: 20px;',
                                        },

                                    ]
                                },
                  ],
                    style: '',
                }
            },

    "workcat_section": {
        sectionName : 'workcat_section',
        defaultCategory : {name: 'Education', style: 'background: '+default_style.themeColor+'; color: white;'},
        lists: [
          {name : "Education"},
          {name : "Consulting And Accounting"},
          {name : "Beauty"},
          {name : "Nature Source"},
          {name : "Illustration"},
          {name : "Media And Technology"},
          {name : "Medical"},
          {name : "Real Estate"},
          {name : "Restaurant"},
          {name : "Sports"},
          {name : "Service Industries"},
        ],
        partStyle: ''
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

    "typed_section1": {
        profile: {name: 'Rajib Karmakar', style: ''},
        profileGreeting: {name: "I'm", style: ''},
        animationType: 'fade-in',
        typedText1: [
          {name: 'Graphic Designer', style: ''},
          {name: 'Developer', style: ''},
          {name: 'Freelancer', style: ''},
          {name: 'Photographer', style: ''},
        ],
        typedText: [
          "Graphic Designer", "Developer", "Freelancer", "Photographer"
        ],
        typedText: 'Graphic Designer,Developer,Freelancer,Photographer',
        partStyle: ''
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

    "projects_section": {
        sectionName : 'projects_section',
        block: {
            sections: [
                        {
                          animationType: 'fade-up', animationDelay: null,
                          parts: [
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'text', key: {name: 'Projects', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, value: {name: '', style: ''}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                    {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: ' default-outline-color', style: 'display: inline-block; font-size: 16px;'}, value: {name: '', style: ''}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},

                                  ],
                                  partStyle: 'width: 100%;display: inline-block;  ',
                              },
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                      {type: 'text', key: {name: 'Covid 19 Pandemic', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, },
                                      {type: 'text', key: {name: '1st Apr, 2020', style: 'font-weight: 600;'},},
                                      {type: 'text', key: {name: '- 1st Apr, 2020', style: 'font-weight: 600;'}, },
                                      {type: 'text', key: {name: 'Cepegemini', style: 'font-weight: 600;'}, },

                                  ],
                                  partStyle: 'width: 100%; height: 165px; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; '
                              },
                          ],
                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: 'Domain key', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;'}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, },
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {name: 'Domain', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {name: 'Domain', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {name: 'Domain', class:'default-theme-primary-color custom-primary-font-color', style: 'background: white;'}, },
                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {name: 'Domain', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {name: 'Domain', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {name: 'Domain', class:'default-theme-primary-color custom-primary-font-color', style: 'background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Software Skill', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '},},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, },
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'Node JS', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AngularJs & ReactJS', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'MongoDb & Firebase ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'GraphQl ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 1 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 200,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px;  background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Computer Language', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; '}, },
                                    ],
                                    partStyle: ' display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'},},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color', style: 'font-size: 22px; background: white; width: 65%;'}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '

                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Framework Known', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, },
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: 'background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;'

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', class: 'default-theme-color default-outline-color', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; '}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, itemStyle: 'display: inline-block; position: relative; top: -10px; right: -5px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: ' background: white;'}, },
                                        {type: 'text', key: {name: 'Version', style: ' background: white;'}, },
                                    ],
                                    sectionClass: 'custom-theme-border',
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '

                                }
                            ]
                        },


          ],
            style: '',
        }

    },

    "activities_section": {
        sectionName : 'activities_section',
        block: {
            sections: [
                        {
                      animationType: 'fade-up', animationDelay: null,
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                {type: 'text', key: {name: 'Extra Curricular Activities', class: 'default-theme-color default-outline-color', style: 'display: inline-block; font-size: 28px;font-weight: 700;width: 100%; '}, value: {name: '', style: ''}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                {type: 'text', key: {name: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.', class: ' default-outline-color', style: 'display: inline-block;  font-size: 16px; '}, value: {name: '', style: ''}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},

                              ],
                              partStyle: 'width: 100%;display: inline-block;  ',
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              isDraggable  : true,

                              desc: [
                                  {type: 'text', key: {name: '# Hobby', class: ' default-outline-color default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, },
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ''}, },
                              ],
                              partStyle: 'width: 100%; height: 165px;  padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; '
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              isDraggable  : true,

                              desc: [
                                  {type: 'text', key: {name: 'Hobby one ', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },

                              ],
                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                          },
                          {
                              animationType: 'fade-up', animationDelay: 50,
                              isDraggable  : true,

                              desc: [
                                {type: 'text', key: {name: 'Hobby two', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },

                              ],
                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                          },
                          {
                              animationType: 'fade-up', animationDelay: 100,
                              isDraggable  : true,

                              desc: [
                                {type: 'text', key: {name: 'Hobby three', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },

                              ],
                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                          },
                          {
                              animationType: 'fade-up', animationDelay: 150,
                              isDraggable  : true,

                              desc: [
                                {type: 'text', key: {name: 'Hobby four', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },

                              ],
                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                          },
                          {
                              animationType: 'fade-up', animationDelay: 200,
                              isDraggable  : true,

                              desc: [
                                {type: 'text', key: {name: 'Hobby five', class:'default-theme-primary-color custom-primary-font-color', style: ' background: white;'}, },

                              ],
                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;  '
                          }

                      ]

                  },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: 'Certificates',  class: ' default-outline-color default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, },
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ' width: 100%; '}, },
                                    ],
                                    partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    isDraggable  : true,

                                    desc: [
                                        {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative;right: 0px; text-align: right; display: block;text-align: center;'},
                                        {type: 'text', key: {name: 'Certificate One', class: 'default-theme-primary-color custom-primary-font-color', style: 'width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                      {type: 'text', key: {name: 'Certificate Two', class: 'default-theme-primary-color custom-primary-font-color',  style: 'width: 100%; background: white;'}, itemStyle: 'text-align: center; padding: 20px; '},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                      {type: 'text', key: {name: 'Certificate Three', class: 'default-theme-primary-color custom-primary-font-color', style: 'width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;  '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'}, redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                      {type: 'text', key: {name: 'Certificate Four', class: 'default-theme-primary-color custom-primary-font-color', style: ' width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 200,
                                    isDraggable  : true,

                                    desc: [
                                      {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                      {type: 'text', key: {name: 'Certificate Five', class: 'default-theme-primary-color custom-primary-font-color', style: ' width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                    ],
                                    partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '
                                }
                            ]

                        },

          ],
            style: '',
        }
    },

    "products_section1": {
      sectionName : 'products_section',
      block: {
          sections: [
                      {
                          animationType: 'fade-up', animationDelay: null,
                          parts: [
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                      {type: 'text', key: {name: 'Certificates',  class: ' default-outline-color default-theme-primary-color custom-primary-font-color', style: 'font-size: 22px; '}, },
                                      {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: ' width: 100%; '}, },
                                  ],
                                  partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                              },
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  isDraggable  : true,

                                  desc: [
                                      {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative;right: 0px; text-align: right; display: block;text-align: center;'},
                                      {type: 'text', key: {name: 'Certificate One', class: 'default-theme-primary-color custom-primary-font-color', style: 'width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '
                              },
                              {
                                  animationType: 'fade-up', animationDelay: 50,
                                  isDraggable  : true,

                                  desc: [
                                    {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                    {type: 'text', key: {name: 'Certificate Two', class: 'default-theme-primary-color custom-primary-font-color',  style: 'width: 100%; background: white;'}, itemStyle: 'text-align: center; padding: 20px; '},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'
                              },
                              {
                                  animationType: 'fade-up', animationDelay: 100,
                                  isDraggable  : true,

                                  desc: [
                                    {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                    {type: 'text', key: {name: 'Certificate Three', class: 'default-theme-primary-color custom-primary-font-color', style: 'width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;  '
                              },
                              {
                                  animationType: 'fade-up', animationDelay: 150,
                                  isDraggable  : true,

                                  desc: [
                                    {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'}, redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                    {type: 'text', key: {name: 'Certificate Four', class: 'default-theme-primary-color custom-primary-font-color', style: ' width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '
                              },
                              {
                                  animationType: 'fade-up', animationDelay: 200,
                                  isDraggable  : true,

                                  desc: [
                                    {type: 'image', key: {name: 'static/img/generic_portfolio_image/icon/certificate.jpg', style: 'width: 100%; height: 200px;'},  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                    {type: 'text', key: {name: 'Certificate Five', class: 'default-theme-primary-color custom-primary-font-color', style: ' width: 100%; background: white;'},  itemStyle: 'text-align: center; padding: 20px; '},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '
                              }
                          ]

                      },
          ],
          style: '',
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
                                  mapToSection : 'brand',
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Brand', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "brand"},
                                  draggable: true,
                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'aboutRestaurant',
                                  animationType: 'fade-up', animationDelay: 50,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'About Restaurant ', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "aboutRestaurant"},
                                  draggable: true,
                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',

                              },
                              {
                                  mapToSection : 'whyUsRestaurant',
                                  animationType: 'fade-up', animationDelay: 100,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Why Us Restaurant', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "whyUsRestaurant"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'menuCategoryRestaurant',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'menu Category Restaurant', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "menuCategoryRestaurant"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'menu',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Menu', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "menu"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'specialMenu',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'specialMenu', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "specialMenu"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'specialMenuContainer',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'specialMenuContainer', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "specialMenuContainer"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'shefsRestaurant',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'shefsRestaurant', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "shefsRestaurant"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'galleryRestaurant',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'galleryRestaurant', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "galleryRestaurant"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'eventsRestaurant',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'eventsRestaurant', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "eventsRestaurant"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'reservationRestaurant',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'reservationRestaurant', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "reservationRestaurant"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'typed',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Typed Section', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "typed"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'contactsRestaurant',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'contactsRestaurant', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: true, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: true, sectionName: "contactsRestaurant"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'activities',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Extra Curricular Activities', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "activities"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'about',
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'About Me', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "about"},
                                  draggable: true,
                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'facts',
                                  animationType: 'fade-up', animationDelay: 50,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Facts ', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "facts"},
                                  draggable: true,
                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',

                              },
                              {
                                  mapToSection : 'skills',
                                  animationType: 'fade-up', animationDelay: 100,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Skills', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "skills"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'education',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'education', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "education"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'workexp',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Work Experience', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "workexp"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'projects',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Projects Section', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "projects"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'workcat',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'workcat', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "workcat"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'work',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Work', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "work"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'languages',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Languages Known', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "languages"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'testimonials',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Testimonials', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "testimonials"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms;  border-radius: 2px; text-align: center;',
                              },
                              {
                                  mapToSection : 'services',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Services', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "services"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
                              },

                              {
                                  mapToSection : 'contacts',
                                  animationType: 'fade-up', animationDelay: 150,
                                  desc: [
                                    {type: 'icon', key: {name: 'cogs', type: 'font-awesome', style: 'font-size: 24px; color: red;  position: relative; color: white; padding-top: 10px;'}, itemStyle: 'display: inline-block; '},
                                    {type: 'text', key: {name: 'Contact Me', style: 'font-size: 18px; font-weight: 600; display: block; width: 100%; position: relative;'}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  isSectionToggle: {state: false, class: 'default-background-color ? default-theme-color', style: ' color: white; ? background: white; '},
                                  dataset: {selected: false, sectionName: "contacts"},
                                  draggable: true,

                                  event: [
                                    {eventName : 'onClickParts(this, event)', eventType: 'onclick'},
                                    {eventName : 'drop(this, event)', eventType: 'ondrop'},
                                    {eventName : 'allowDrop(this, event)', eventType: 'ondragover'},
                                    {eventName : 'drag(this, event)', eventType: 'ondragstart'},

                                  ],
                                  partStyle: 'display: inline-block; width: 31%;  margin-right: 1rem; margin-bottom: 1rem; padding: 20px; color: black; box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2); transition: box-shadow 83ms; border-radius: 2px; text-align: center;',
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

    "all_sections" : {
        values: [
          {
            section: {name: 'headerNav', id: '', class: '', style: ''},
            menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          // {
          //   section: {name: 'typed', id: '', class: '', style: ''},
          //   menu: {name: 'Introduction ', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: '', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          {
            section: {name: 'brand', id: '', class: '', style: ''},
            menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'aboutRestaurant', id: '', class: '', style: ''},
            menu: {name: 'About Restaurant', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'whyUsRestaurant', id: '', class: '', style: ''},
            menu: {name: 'About Restaurant', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'menuCategoryRestaurant', id: '', class: '', style: ''},
            menu: {name: 'About Restaurant', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'menu', id: '', class: '', style: 'padding-top: 0px;', defaultCategory: 'starter'},
            menu: {name: 'My Menu', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'specialMenu', id: '', class: '', style: 'padding-top: 0px;'},
            menu: {name: 'My Menu', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'specialMenuContainer', id: '', class: '', style: 'width: 84%; margin-top: -355px; ', defaultCategory: 'special_1'},
            menu: {name: 'My Menu', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'reservationRestaurant', id: '', class: '', style: ''},
            menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'eventsRestaurant', id: '', class: 'testimonials ', style: ''},
            menu: {name: 'People Working With Me', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
            block: {name: '', class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },

          {
            section: {name: 'galleryRestaurant', id: '', class: '', style: ''},
            menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'testimonials', id: '', class: 'testimonials ', style: ''},
            menu: {name: 'People Working With Me', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
            block: {name: '', class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'shefsRestaurant', id: '', class: 'testimonials ', style: ''},
            menu: {name: 'People Working With Me', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
            block: {name: '', class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },


          {
            section: {name: 'contactsRestaurant', id: '', class: '', style: ''},
            menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'theme', id: '', class: '', style: ''},
            menu: {name: '', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'settings', id: '', class: '', style: ''},
            menu: {name: 'Sections You Like', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          // ============================================================================================================

          {
            section: {name: 'contacts', id: '', class: '', style: ''},
            menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },

          {
            section: {name: 'about', id: '', class: '', style: ''},
            menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },

          {
            section: {name: 'products', id: '', class: '', style: ''},
            menu: {name: 'Products', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'skills', id: 'skills', class: 'skills', style: ''},
            menu: {name: 'My Skills', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'activities', id: '', class: '', style: ''},
            menu: {name: 'Extra Curricular Activities', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'education', id: '', class: '', style: ''},
            menu: {name: 'My Education', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'workexp', id: '', class: '', style: ''},
            menu: {name: 'My Work Experience', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: null,  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'projects', id: '', class: '', style: ''},
            menu: {name: 'Projects Done By Me', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'workcat', id: '', class: '', style: ''},
            menu: {name: 'Work Category', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },

          {
            section: {name: 'work', id: '', class: '', style: 'padding-top: 0px;'},
            menu: {name: 'My Work', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {id: 'custom_services_template', class: 'custom-services-template', style: ''}
          },
          {
            section: {name: 'services', id: 'services', class: 'services', style: ''},
            menu: {name: 'Services I Provide', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
            block: {id: 'custom_services_block', class: 'custom-services-block', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {id: 'custom_services_template', class: 'custom-services-template', style: ''}
          },
          {
            section: {name: 'facts', id: '', class: ' services facts', style: ''},
            menu: {name: 'My Valuable Clients', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'languages', id: '', class: '', style: ''},
            menu: {name: 'Languages I knew', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
        ],
        partStyle: 'background: #F1F3F6;',
    },

    "init_sections" : {
        values: [
          {
            section: {name: 'headerNav', id: '', class: '', style: ''},
            menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          // {
          //   section: {name: 'typed', id: '', class: '', style: ''},
          //   menu: {name: 'Introduction ', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: '', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          {
            section: {name: 'brand', id: '', class: '', style: ''},
            menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'aboutRestaurant', id: '', class: '', style: ''},
            menu: {name: 'About Restaurant', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'whyUsRestaurant', id: '', class: '', style: ''},
            menu: {name: 'About Restaurant', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'menuCategoryRestaurant', id: '', class: '', style: ''},
            menu: {name: 'About Restaurant', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'menu', id: '', class: '', style: 'padding-top: 0px;', defaultCategory: 'starter'},
            menu: {name: 'My Menu', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'specialMenu', id: '', class: '', style: 'padding-top: 0px;'},
            menu: {name: 'My Menu', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'specialMenuContainer', id: '', class: '', style: 'width: 84%; margin-top: -355px; ', defaultCategory: 'special_1'},
            menu: {name: 'My Menu', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
            block: {class: '', style: 'width: 90%; margin: auto;'},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'reservationRestaurant', id: '', class: '', style: ''},
            menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'eventsRestaurant', id: '', class: 'testimonials ', style: ''},
            menu: {name: 'People Working With Me', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
            block: {name: '', class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },

          {
            section: {name: 'galleryRestaurant', id: '', class: '', style: ''},
            menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'testimonials', id: '', class: 'testimonials ', style: ''},
            menu: {name: 'People Working With Me', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
            block: {name: '', class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },
          {
            section: {name: 'shefsRestaurant', id: '', class: 'testimonials ', style: ''},
            menu: {name: 'People Working With Me', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
            block: {name: '', class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },

          // {
          //   section: {name: 'contacts', id: '', class: '', style: ''},
          //   menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          {
            section: {name: 'contactsRestaurant', id: '', class: '', style: ''},
            menu: {name: 'Contact key', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
            block: {class: '', style: ''},
            loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
            template: {style: ''}
          },

          // {
          //   section: {name: 'about', id: '', class: '', style: ''},
          //   menu: {name: 'About Me', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'theme', id: '', class: '', style: ''},
          //   menu: {name: '', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'products', id: '', class: '', style: ''},
          //   menu: {name: 'Products', style: '', method: '', icon: {name: 'user',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'skills', id: 'skills', class: 'skills', style: ''},
          //   menu: {name: 'My Skills', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'activities', id: '', class: '', style: ''},
          //   menu: {name: 'Extra Curricular Activities', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'education', id: '', class: '', style: ''},
          //   menu: {name: 'My Education', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'workexp', id: '', class: '', style: ''},
          //   menu: {name: 'My Work Experience', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: null,  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'projects', id: '', class: '', style: ''},
          //   menu: {name: 'Projects Done By Me', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'workcat', id: '', class: '', style: ''},
          //   menu: {name: 'Work Category', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
          //   block: {class: '', style: 'width: 90%; margin: auto;'},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },

          // {
          //   section: {name: 'work', id: '', class: '', style: 'padding-top: 0px;'},
          //   menu: {name: 'My Work', style: '', method: '', icon: {name: 'file-blank',type: 'bx', style: ''}},
          //   block: {class: '', style: 'width: 90%; margin: auto;'},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {id: 'custom_services_template', class: 'custom-services-template', style: ''}
          // },
          // {
          //   section: {name: 'services', id: 'services', class: 'services', style: ''},
          //   menu: {name: 'Services I Provide', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
          //   block: {id: 'custom_services_block', class: 'custom-services-block', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {id: 'custom_services_template', class: 'custom-services-template', style: ''}
          // },
          // {
          //   section: {name: 'facts', id: '', class: ' services facts', style: ''},
          //   menu: {name: 'My Valuable Clients', style: '', method: '', icon: {name: 'server',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },
          // {
          //   section: {name: 'languages', id: '', class: '', style: ''},
          //   menu: {name: 'Languages I knew', style: '', method: '', icon: {name: 'book-content',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },


          // {
          //   section: {name: 'settings', id: '', class: '', style: ''},
          //   menu: {name: 'Sections You Like', style: '', method: '', icon: {name: 'envelope',type: 'bx', style: ''}},
          //   block: {class: '', style: ''},
          //   loader: {img: {imgUrl: 'static/img/generic_portfolio_image/loader/loader_wait.gif', alt: '', style: ''},  style: ''},
          //   template: {style: ''}
          // },

        ],
        partStyle: 'background: #F1F3F6;',
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
            {type: 'link', key: {name: 'HOME', class: '',  style: '', event: [{eventName : 'onClickHeaderNavigation(this, event)', eventType: 'onclick', argument : {mapToSections: ['brand', 'aboutRestaurant', 'whyUsRestaurant', "menuCategoryRestaurant", "menu", "specialMenu", 'specialMenuContainer', 'shefsRestaurant', 'galleryRestaurant', 'eventsRestaurant', 'reservationRestaurant', 'contactsRestaurant']}, dataSetName: 'nav-links-data'}, ]},  itemStyle: ''},
            {
              type: 'link',
              key: {
                name: 'PRODUCTS',
                class: '',
                style: '',
                event: [
                  {
                    eventName : 'onClickHeaderNavigation(this, event)',
                    eventType: 'onclick',
                    argument : {mapToSections: ['reservationRestaurant', 'eventsRestaurant']},
                    dataSetName: 'nav-links-data'
                  },
                ],
                itemStyle: ''
              }
            },
            {
              type: 'link',
              key: {
                name: 'BRAND',
                class: '',
                style: '',
                event: [
                  {
                    eventName : 'onClickHeaderNavigation(this, event)',
                    eventType: 'onclick',
                    argument : {mapToSections: ['brand',]},
                    dataSetName: 'nav-links-data'
                  },
                ],
                itemStyle: ''
              }
            },
            {
              type: 'link',
              key: {
                name: 'SPECIAL MENU',
                class: '',
                style: '',
                event: [
                  {
                    eventName : 'onClickHeaderNavigation(this, event)',
                    eventType: 'onclick',
                    argument : {mapToSections: ['specialMenu','specialMenuContainer']},
                    dataSetName: 'nav-links-data'
                  },
                ],
                itemStyle: ''
              }
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
                                     {type: 'text', key: {name: `Welcome To <span style="font-weight: 700; color: var(--default-theme-color); ">Shopping App</span>`, class: 'custom-primary-font-color', style: 'width: 100%; font-size: 48px; font-weight: 600; color: var(--default-theme-white-color);'},  itemStyle: 'padding: 20px; width: auto;'},
                                     {type: 'text', key: {name: 'Deleviring Great products For Last Few Years... ', class: 'custom-primary-font-color', style: 'width: 100%; font-size: 24px; font-weight: 400; color: var(--default-theme-white-color);'},  itemStyle: 'padding: 0px 20px; width: 50%; '},

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

    "aboutRestaurant_section": {
       sectionName : 'about_section',
       block: {
           sections: [
                       {
                           animationType: 'fade-up', animationDelay: null,
                           parts: [
                               {
                                   animationType: 'zoom-in', animationDelay: 100,
                                   isDraggable  : true,
                                   desc: [
                                     {type: 'text', key: {name: 'About Us ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'text', key: {name: 'Small Introduction About Us', class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                   ],
                                   partClass: '',
                                   partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                               },
                               {
                                   animationType: 'fade-up', animationDelay: 50,
                                   desc: [
                                     {type: 'text', key: {name: `Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.`, class: ' default-outline-color', style: ' font-size: 26px; font-weight: 700; width: 100%; '}, itemStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'},
                                     {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 100%;`},

                                     {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ' '}, itemStyle: 'display: inline-block; width: 5%; text-align: center; float: left; position: relative; left: 10px;'},
                                     {type: 'text', key: {name: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 90%; padding-bottom: 8px;'},

                                     {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center; position: relative; left: 10px;'},
                                     {type: 'text', key: {name: 'Duis aute irure dolor in reprehenderit in voluptate velit.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 90%; padding-bottom: 8px;'},

                                     {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center; float: left; position: relative; left: 10px;'},
                                     {type: 'text', key: {name: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' },  itemStyle: 'display: inline-block; width: 90%;'},

                                     {type: 'text', key: {name: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum`, style: 'width: 100%; font-size: 16px;'}, itemStyle: 'display: inline-block; margin-top: 5px; padding: 10px; width: 100%; margin: 16px 0px;'},

                                   ],
                                   partStyle: 'width: 50%;display: inline-block; float: left; ',
                               },
                               {
                                   animationType: 'fade-up', animationDelay: null,
                                   desc: [
                                     {type: 'image', key: {name: 'static/img/restaurant_app/about.jpg', class: '', style: ' border: 4px solid grey;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left; '},
                                   ],
                                   partClass: 'custom-img-on-hover-zoom-in custom-on-hover-part-zoom-in',
                                   partStyle: 'width: 48%;display: inline-block; float: left; margin-top: 10px; box-shadow: none;',
                               },

                           ],
                           sectionClass: '',
                           sectionStyle: '',
                       },
         ],
           style: '',
       }
     },

    "whyUsRestaurant_section": {
      sectionName : 'facts_section',
      block: {
          sections: [
                      {
                          animationType: 'zoom-in', animationDelay: 100,
                          parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 100,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Why Us ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                    {type: 'text', key: {name: 'Why Choose Our Restaurant', class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                  ],
                                  partClass: '',
                                  partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: '01', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block;  position: relative; color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'text', key: {name: 'Lorem Ipsum', class: 'custom-primary-font-color', style: 'font-size: 24px;'}, itemStyle: 'display: inline-block; width: 100%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat', style: 'font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: '02', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'text', key: {name: 'Lorem Ipsum', class: 'custom-primary-font-color', style: 'font-size: 24px;'}, itemStyle: 'display: inline-block; width: 100%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat', style: 'font-size: 16px;'}, itemStyle: 'display: inline-block; width: 100%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 400,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: '03', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'text', key: {name: 'Lorem Ipsum', class: 'custom-primary-font-color', style: 'font-size: 24px; '}, itemStyle: 'display: inline-block; width: 100%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat', style: 'font-size: 16px; '}, itemStyle: 'display: inline-block; width: 100%;'},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 31%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                              },
                          ],
                          sectionClass: '',
                          sectionStyle: '',
                      },
        ],
      }
    },

    "menuCategoryRestaurant_section": {
       sectionName : 'facts_section',
       block: {
           sections: [
                       {
                           animationType: 'zoom-in', animationDelay: 100,
                           parts: [
                               {
                                   animationType: 'zoom-in', animationDelay: 100,
                                   desc: [
                                     {type: 'text', key: {name: 'Menu ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'text', key: {name: 'Check Our Tasty Menu', class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                   ],
                                   partClass: '',
                                   partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                               },
                               {
                                   animationType: 'fade-up', animationDelay: null,
                                   desc: [
                                     {
                                       type: 'text',
                                       event: [
                                         {
                                           eventName : 'onClickWorkCatItem(this, event)',
                                           eventType: 'onclick',
                                           argument : {category: 'starter', sectionName: 'menu'},
                                           dataSetName: 'nav-links-data'
                                         },
                                       ],
                                       // event: {eventName : "onClickSetupProfile(this, event, 'item_1')", eventType: 'onclick'},
                                       key: {name: 'Starter', class: 'custom-primary-font-color menu menu-active-selection', style: 'width: auto; font-size: 20px; padding: 5px 20px; border-radius: 24px; font-weight: 400;'},
                                       itemStyle: ' width: auto; display: inline-block;  margin-right: 10px; '
                                     },
                                     {
                                       type: 'text',
                                       event: [
                                         {
                                           eventName : 'onClickWorkCatItem(this, event)',
                                           eventType: 'onclick',
                                           argument : {category: 'salads', sectionName: 'menu'},
                                           dataSetName: 'nav-links-data'
                                         },
                                       ],
                                       // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                       key: {name: 'Salads', class: 'custom-primary-font-color menu', style: 'width: auto; font-size: 20px; padding: 5px 20px; border-radius: 24px; font-weight: 400; '},
                                       itemStyle: ' width: auto; display: inline-block;  margin-right: 10px; '
                                     },
                                     {
                                       type: 'text',
                                       event: [
                                         {
                                           eventName : 'onClickWorkCatItem(this, event)',
                                           eventType: 'onclick',
                                           argument : {category: 'specials', sectionName: 'menu'},
                                           dataSetName: 'nav-links-data'
                                         },
                                       ],
                                       // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                       key: {name: 'Specials', class: 'custom-primary-font-color menu', style: 'width: auto; font-size: 20px; padding: 5px 20px; border-radius: 24px; font-weight: 400; '},
                                       itemStyle: ' width: auto; display: inline-block;  margin-right: 10px; '
                                     },
                                     {
                                       type: 'text',
                                       event: [
                                         {
                                           eventName : 'onClickWorkCatItem(this, event)',
                                           eventType: 'onclick',
                                           argument : {category: 'briyani', sectionName: 'menu'},
                                           dataSetName: 'nav-links-data'
                                         },
                                       ],
                                       // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                       key: {name: 'Briyani', class: 'custom-primary-font-color menu', style: 'width: auto; font-size: 20px; padding: 5px 20px; border-radius: 24px; font-weight: 400; '},
                                       itemStyle: ' width: auto; display: inline-block;  margin-right: 10px; '
                                     },


                                   ],
                                   partClass: 'custom-hScroll',
                                   partStyle: 'width: 85%;display: inline-block; text-align: center; margin-left: 7.5%; padding: 10px 0px; white-space: nowrap; overflow-y: scroll;',
                               },
                           ],
                           sectionClass: '',
                           sectionStyle: '',
                       },

         ],
       }
     },

    "menuCategoryRestaurant_section1": {
      sectionName : 'contacts_section',
      block: {
          sections: [
                      {
                          animationType: 'fade-up', animationDelay: null,
                          parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 100,
                                  desc: [
                                    {type: 'text', key: {name: 'Menu ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                    {type: 'text', key: {name: 'Check Our Tasty Menu', class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                  ],
                                  partClass: '',
                                  partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                              },
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {type: 'text', key: {name: 'item 1', class: 'custom-primary-font-color', style: 'width: auto; font-size: 20px; font-weight: 400; color: white;'},  itemStyle: 'padding: 5px 20px; width: auto; display: inline-block; background: var(--default-theme-color); margin-right: 10px; '},
                                    {type: 'text', key: {name: 'item 2', class: 'custom-primary-font-color', style: 'width:  auto; font-size: 20px; font-weight: 400; color: white;'},  itemStyle: 'padding: 5px 20px; width: auto; display: inline-block; background: var(--default-theme-color); margin-right: 10px; '},
                                    {type: 'text', key: {name: 'item 3', class: 'custom-primary-font-color', style: 'width:  auto; font-size: 20px; font-weight: 400; color: white;'},  itemStyle: 'padding: 5px 20px; width: auto; display: inline-block; background: var(--default-theme-color); margin-right: 10px; '},
                                    {type: 'text', key: {name: 'item 4', class: 'custom-primary-font-color', style: 'width:  auto; font-size: 20px; font-weight: 400; color: white;'},  itemStyle: 'padding: 5px 20px; width: auto; display: inline-block; background: var(--default-theme-color); margin-right: 10px; '},
                                    {type: 'text', key: {name: 'item 5', class: 'custom-primary-font-color', style: 'width:  auto; font-size: 20px; font-weight: 400; color: white;'},  itemStyle: 'padding: 5px 20px; width: auto; display: inline-block; background: var(--default-theme-color); margin-right: 10px; '},
                                    {type: 'text', key: {name: 'item 6', class: 'custom-primary-font-color', style: 'width:  auto; font-size: 20px; font-weight: 400; color: white;'},  itemStyle: 'padding: 5px 20px; width: auto; display: inline-block; background: var(--default-theme-color); margin-right: 10px; '},

                                  ],
                                  partStyle: 'width: 100%;display: inline-block; ',
                              },
                          ]
                      },
        ],
          style: '',
      },
      containerStyle: 'max-width: fit-content; padding: 0px; '
    },

    "menu_section": {

      sectionName : 'menu_section',

      "starter" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Starter 1', class: 'custom-primary-font-color', style: 'font-size: 16px;  font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px;  color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/caesar.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Starter 2', class: 'custom-primary-font-color', style: 'font-size: 16px;  font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px;  color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/cake.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Starter 3', class: 'custom-primary-font-color', style: 'font-size: 16px;  font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-roll.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Starter 4', class: 'custom-primary-font-color', style: 'font-size: 16px;  font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px;  color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-bisque.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Starter 5', class: 'custom-primary-font-color', style: 'font-size: 16px;  font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px;  color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/mozzarella.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Starter 6', class: 'custom-primary-font-color', style: 'font-size: 16px;  font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px;  color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "salads" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'salads 1', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/caesar.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'salads 2', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/cake.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'salads 3', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-roll.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'salads 4', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-bisque.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'salads 5', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/mozzarella.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'salads 6', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "specials" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Special 1', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px; '},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/caesar.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Special 2', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/cake.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Special 3', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-roll.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Special 4', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-bisque.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Special 5', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/mozzarella.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Special 6', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "briyani" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Briyani 1', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/caesar.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Briyani 2', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/cake.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Briyani 3', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-roll.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Briyani 4', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/lobster-bisque.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Briyani 5', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                              {
                                  animationType: 'zoom-in', animationDelay: 200,
                                  desc: [
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/mozzarella.jpg', class: 'menu-onhover-img', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: left; overflow: hidden;'},
                                    {type: 'text', key: {name: 'Briyani 6', class: 'custom-primary-font-color', style: 'font-size: 16px; background: transparent; font-weight: 600;'}, itemStyle: 'display: inline-block; width: 55%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: '$5.95', class: 'custom-theme-color', style: 'font-size: 18px;background: transparent; color: var(--default-theme-color); font-weight: 700'}, itemStyle: 'display: inline-block; width: 15%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Lorem, deren, trataro, filede, nerada', style: 'font-size: 16px; background: transparent; color: var(--default-theme-font-color)'}, itemStyle: 'display: inline-block; width: 75%;'},

                                  ],
                                  //partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 48%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 16px 8px; float: left; '
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

    },

    "specialMenu_section": {
      sectionName : 'facts_section',
      block: {
          sections: [
                      {
                          animationType: 'zoom-in', animationDelay: 100,
                          parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 100,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Specials ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                    {type: 'text', key: {name: 'Check Out Our Specials', class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                  ],
                                  partClass: '',
                                  partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                              },
                              {
                                  animationType: 'fade-up', animationDelay: null,
                                  desc: [
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_1', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_1')", eventType: 'onclick'},
                                      key: {name: 'Specials 1', class: 'custom-primary-font-color  special-active-selection', style: 'width: auto; display: block; font-size: 20px; padding: 5px 20px; font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: ' width: 100%; display: inline-block;  background: transparent; margin-right: 10px; '
                                    },
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_2', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                      key: {name: 'Specials 2', class: 'custom-primary-font-color ', style: 'width:  auto; display: block; font-size: 20px; padding: 5px 20px; font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: ' width: 100%;  display: inline-block; background: transparent; margin-right: 10px; '
                                    },
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_3', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                      key: {name: 'Specials 3', class: 'custom-primary-font-color ', style: 'width:  auto; display: block; font-size: 20px; padding: 5px 20px; font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: ' width: 100%;  display: inline-block;  background: transparent; margin-right: 10px;'
                                    },
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_4', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                      key: {name: 'Specials 4', class: 'custom-primary-font-color ', style: 'width:  auto; display: block; font-size: 20px; padding: 5px 20px; font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: ' width: 100%; display: inline-block;  background: transparent; margin-right: 10px; '
                                    },
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_5', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                      key: {name: 'Specials 5', class: 'custom-primary-font-color ', style: 'width:  auto; display: block; font-size: 20px; padding: 5px 20px;  font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: 'width: 100%; display: inline-block;  background: transparent; margin-right: 10px; '
                                    },
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_6', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                      key: {name: 'Specials 6', class: 'custom-primary-font-color ', style: 'width:  auto; display: block; font-size: 20px; padding: 5px 20px; font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: ' width: 100%; display: inline-block;  background: transparent; margin-right: 10px; '
                                    },
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_7', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                      key: {name: 'Specials 7', class: 'custom-primary-font-color ', style: 'width:  auto; display: block; font-size: 20px; padding: 5px 20px; font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: ' width: 100%; display: inline-block;  background: transparent; margin-right: 10px; '
                                    },
                                    {
                                      type: 'text',
                                      event: [
                                        {
                                          eventName : 'onClickWorkCatItem(this, event)',
                                          eventType: 'onclick',
                                          argument : {category: 'special_8', sectionName: 'specialMenuContainer'},
                                          dataSetName: 'nav-links-data'
                                        },
                                      ],
                                      // event: {eventName : "onClickSetupProfile(this, event, 'item_2')", eventType: 'onclick'},
                                      key: {name: 'Specials 8', class: 'custom-primary-font-color ', style: 'width:  auto; display: block; font-size: 20px; padding: 5px 20px; font-weight: 400; color: var(--default-theme-color); background: transparent;'},
                                      itemStyle: ' width: 100%; display: inline-block;  margin-right: 10px; '
                                    },

                                  ],
                                  partClass: 'custom-hScroll',
                                  partStyle: 'width: 30%;display: inline-block; text-align: center; overflow-y: scroll; height: 295px; float: left; background: var(--default-theme-card-bg-color);',
                              },

                          ],
                          sectionClass: '',
                          sectionStyle: '',
                      },

        ],
      }
    },

    "specialMenuContainer_section1" : {
      sectionName : 'facts_section',
      block: {
          sections: [
                      {
                          animationType: 'zoom-in', animationDelay: 100,
                          parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: '02', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: white; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'text', key: {name: 'Lorem Ipsum', class: 'custom-primary-font-color', style: 'font-size: 24px;background: white; '}, itemStyle: 'display: inline-block; width: 100%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat', style: 'font-size: 16px; background: white;'}, itemStyle: 'display: inline-block; width: 100%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; height: 280px;'
                              },

                          ],
                          sectionClass: '',
                          sectionStyle: '',
                      },

        ],
      }
    },

    "specialMenuContainer_section": {

      sectionName : 'menu_section',

      "special_1" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "special_2" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "special_3" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "special_4" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "special_5" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "special_6" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "special_7" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },

      "special_8" : {
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                              {
                                  animationType: 'zoom-in', animationDelay: 300,
                                  isDraggable  : true,
                                  desc: [
                                    {type: 'text', key: {name: 'Impedit facilis occaecati odio neque aperiam sit', class:' custom-primary-font-color', style: 'font-size: 28px; padding-bottom: 15px; display: block; background: transparent; position: relative;  color: var(--default-theme-color);'}, itemStyle: 'display: inline-block; width: 100%;'},
                                    {type: 'image', key: {name: 'static/img/restaurant_app/menu/bread-barrel.jpg', style: 'width: 90%; border-radius: 8px; '}, itemStyle: 'display: inline-block; width: 25%; padding: 0px 5px; float: right;'},
                                    {type: 'text', key: {name: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka', class: 'custom-primary-font-color', style: 'font-size: 16px;background: transparent; font-style: italic; '}, itemStyle: 'display: inline-block; width: 75%; padding-bottom: 12px;'},
                                    {type: 'text', key: {name: 'Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero', style: 'font-size: 16px; background: transparent;'}, itemStyle: 'display: inline-block; width: 75%; '},

                                  ],
                                  partClass: 'custom-on-hover-part-zoom-in',
                                  partStyle: 'display: inline-block; width: 68%; background: var(--default-theme-card-bg-color); margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: right; height: 295px; position: relative; left: 10%;'
                              },
                            ],
                            sectionClass: '',
                            sectionStyle: '',
                        },

          ],
        }
      },
    },

    "shefsRestaurant_section": {
                    sectionName : 'testimonials_section',
                    block: {
                      sections: [
                                  {
                                      animationType: 'fade-up', animationDelay: null,
                                      parts: [
                                          {
                                              animationType: 'zoom-in', animationDelay: 100,
                                              isDraggable  : true,
                                              desc: [
                                                {type: 'text', key: {name: 'Shefs ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                                {type: 'text', key: {name: `Our Proffesional Chefs`, class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                              ],
                                              partClass: '',
                                              partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                                          },

                                          {
                                              animationType: 'fade-up', animationDelay: null,
                                              isDraggable  : true,
                                              desc: [
                                                  {type: 'image',
                                                  event: [
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseIn_shefs')`,
                                                      eventType: 'onmouseover',
                                                    },
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseOut_shefs')`,
                                                      eventType: 'onmouseout',
                                                    }
                                                  ], key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 100%;'},  itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                                  {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color display-none ', style: ' '}, itemStyle: 'display: none; width: 100%; padding: 0px 10px; float: left; position: absolute; bottom: 10px;'},
                                                  {type: 'text', key: {name: 'John Larson', class: ' default-outline-color', style: 'color: white; font-size: 18px; font-weight: 700; '}, itemStyle: 'text-align: center;'},
                                                  {type: 'text', key: {name: 'Entrepreneur', class:'default-outline-color', style: 'color: white; font-size: 13px; font-weight: 600; font-style: italic; '}, itemStyle: 'text-align: center; padding-bottom: 8px;'},
                                                  {type: 'icon', key: {name: 'twitter', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  margin-left: 20%;'},
                                                  {type: 'icon', key: {name: 'facebook', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'instagram', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'linkedin', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},

                                                  {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                              ],
                                              partClass: 'member',
                                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'
                                          },
                                          {
                                              animationType: 'fade-up', animationDelay: null,
                                              isDraggable  : true,

                                              desc: [
                                                  {type: 'image',
                                                  event: [
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseIn_shefs')`,
                                                      eventType: 'onmouseover',
                                                    },
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseOut_shefs')`,
                                                      eventType: 'onmouseout',
                                                    }
                                                  ], key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 100%;'},  itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                                  {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color display-none ', style: ' '}, itemStyle: 'display: none; width: 100%; padding: 0px 10px; float: left; position: absolute; bottom: 10px;'},
                                                  {type: 'text', key: {name: 'John Larson', class: ' default-outline-color', style: 'color: white; font-size: 18px; font-weight: 700; '}, itemStyle: 'text-align: center;'},
                                                  {type: 'text', key: {name: 'Entrepreneur', class:'default-outline-color', style: 'color: white; font-size: 13px; font-weight: 600; font-style: italic; '}, itemStyle: 'text-align: center; padding-bottom: 8px;'},
                                                  {type: 'icon', key: {name: 'twitter', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  margin-left: 20%;'},
                                                  {type: 'icon', key: {name: 'facebook', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'instagram', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'linkedin', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},

                                                {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                              ],
                                              partClass: 'member',
                                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'
                                          },
                                          {
                                              animationType: 'fade-up', animationDelay: null,
                                              isDraggable  : true,

                                              desc: [
                                                  {type: 'image',
                                                  event: [
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseIn_shefs')`,
                                                      eventType: 'onmouseover',
                                                    },
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseOut_shefs')`,
                                                      eventType: 'onmouseout',
                                                    }
                                                  ], key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 100%;'},  itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                                  {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color display-none ', style: ' '}, itemStyle: 'display: none; width: 100%; padding: 0px 10px; float: left; position: absolute; bottom: 10px;'},
                                                  {type: 'text', key: {name: 'John Larson', class: ' default-outline-color', style: 'color: white; font-size: 18px; font-weight: 700; '}, itemStyle: 'text-align: center;'},
                                                  {type: 'text', key: {name: 'Entrepreneur', class:'default-outline-color', style: 'color: white; font-size: 13px; font-weight: 600; font-style: italic; '}, itemStyle: 'text-align: center; padding-bottom: 8px;'},
                                                  {type: 'icon', key: {name: 'twitter', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  margin-left: 20%;'},
                                                  {type: 'icon', key: {name: 'facebook', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'instagram', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'linkedin', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},

                                                  {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                              ],
                                              partClass: 'member',
                                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'
                                          },
                                          {
                                              animationType: 'fade-up', animationDelay: null,
                                              isDraggable  : true,

                                              desc: [
                                                  {type: 'image',
                                                  event: [
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseIn_shefs')`,
                                                      eventType: 'onmouseover',
                                                    },
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseOut_shefs')`,
                                                      eventType: 'onmouseout',
                                                    }
                                                  ], key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 100%;'},  itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                                  {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color display-none ', style: ' '}, itemStyle: 'display: none; width: 100%; padding: 0px 10px; float: left; position: absolute; bottom: 10px;'},
                                                  {type: 'text', key: {name: 'John Larson', class: ' default-outline-color', style: 'color: white; font-size: 18px; font-weight: 700; '}, itemStyle: 'text-align: center;'},
                                                  {type: 'text', key: {name: 'Entrepreneur', class:'default-outline-color', style: 'color: white; font-size: 13px; font-weight: 600; font-style: italic; '}, itemStyle: 'text-align: center; padding-bottom: 8px;'},
                                                  {type: 'icon', key: {name: 'twitter', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  margin-left: 20%;'},
                                                  {type: 'icon', key: {name: 'facebook', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'instagram', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'linkedin', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},

                                                  {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                              ],
                                              partClass: 'member',
                                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'
                                          },
                                          {
                                              animationType: 'fade-up', animationDelay: null,
                                              isDraggable  : true,

                                              desc: [
                                                  {type: 'image',
                                                  event: [
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseIn_shefs')`,
                                                      eventType: 'onmouseover',
                                                    },
                                                    {
                                                      eventName : `onMouseInOutShefs(this, event,'onMouseOut_shefs')`,
                                                      eventType: 'onmouseout',
                                                    }
                                                  ], key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 100%;'},  itemStyle: 'position: relative; right: 0px; text-align: right; display: block;text-align: center;'},
                                                  {type: 'wrap-open', key: {name: 'div', class: 'default-theme-color default-outline-color display-none custom-on-hover-part-zoom-in', style: ' '}, itemStyle: 'display: none; width: 100%; padding: 0px 10px; float: left; position: absolute; bottom: 10px;'},
                                                  {type: 'text', key: {name: 'John Larson', class: ' default-outline-color', style: 'color: white; font-size: 18px; font-weight: 700; '}, itemStyle: 'text-align: center;'},
                                                  {type: 'text', key: {name: 'Entrepreneur', class:'default-outline-color', style: 'color: white; font-size: 13px; font-weight: 600; font-style: italic; '}, itemStyle: 'text-align: center; padding-bottom: 8px;'},
                                                  {type: 'icon', key: {name: 'twitter', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  margin-left: 20%;'},
                                                  {type: 'icon', key: {name: 'facebook', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'instagram', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},
                                                  {type: 'icon', key: {name: 'linkedin', type: 'font-awesome', class: '', style: `font-size: 24px;  position: relative; color: var(--default-theme-highlight-color); font-family: 'FontAwesome'`}, itemStyle: 'display: inline-block; width: 15%; float: left;  '},

                                                  {type: 'wrap-close', key: {name: 'div', class: '', style: ' '}, itemStyle: ''},

                                              ],
                                              partClass: 'member',
                                              partStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'
                                          },

                                      ]

                                  },

                    ],
                      style: '',
                  }
                },

    "galleryRestaurant_section": {
          sectionName : 'testimonials_section',
          block: {
                      sections: [
                                  {
                                      animationType: 'fade-up', animationDelay: null,
                                      parts: [
                                          {
                                              animationType: 'zoom-in', animationDelay: 100,
                                              isDraggable  : true,
                                              desc: [
                                                {type: 'text', key: {name: 'Gallery ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                                {type: 'text', key: {name: `Some Photos Of Our Restaurant`, class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                              ],
                                              partClass: '',
                                              partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                                          },

                                      ]

                                  },
                                  {
                                      animationType: 'fade-up', animationDelay: null,
                                      parts: [
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-1.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-2.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-3.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-4.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-5.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-6.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-4.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-7.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                        {
                                            animationType: 'zoom-in', animationDelay: 100,
                                            isDraggable  : true,
                                            desc: [
                                              {type: 'image', key: {name: 'static/img/restaurant_app/gallery/gallery-8.jpg', class: 'onhover-img', style: 'width: 100%; border-radius: 2px; '}, itemStyle: 'display: inline-block; width: 100%; '},
                                            ],
                                            partClass: '',
                                            partStyle: 'width: 33%;display: inline-block; float: left; margin-right: 2px; margin-bottom: 2px; overflow: hidden;',
                                        },
                                      ]

                                  },

                    ],
                      style: '',
                  }
     },

    "eventsRestaurant_section": {
       sectionName : 'eventsRestaurant_section',
       block: {
           sections: [
                       {
                           animationType: 'zoom-in', animationDelay: 100,
                           parts: [
                               {
                                   animationType: 'zoom-in', animationDelay: 100,
                                   isDraggable  : false,
                                   desc: [
                                     {type: 'text', key: {name: 'Events ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'text', key: {name: 'Organize Your Events In Our Restaurant', class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                   ],
                                   partClass: '',
                                   partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                               },

                           ],
                           sectionClass: '',
                           sectionStyle: '',
                       },
                       {
                           animationType: 'zoom-in', animationDelay: 100,
                           // slider: {type: "carousel",  animationType: 'zoom-in', animationDelay: 100, indicators: true, navigation: {type: 'glyphicon', left: {icon: ' glyphicon-arrow-left', type: 'glyphicon', style: ''}, right: {icon: 'glyphicon-arrow-right', type: 'glyphicon', style: ''}}},
                           slider: {type: "carousel",  animationType: 'zoom-in', animationDelay: 100, indicators: true, navigation: {type: 'fontAwesome', left: {icon: 'fa-long-arrow-left',  style: 'font-size: 22px; position: relative;top: 90%; left: -45px;'}, right: {icon: 'fa-long-arrow-right', style: 'font-size: 22px; position: relative;top: 90%; right: -45px;'}}},

                           parts: [
                               {
                                   animationType: 'zoom-in', animationDelay: 200,
                                   isDraggable  : true,
                                   desc: [
                                       {type: 'image', key: {name: 'static/img/restaurant_app/gallery/event-birthday.jpg', style: 'width: 100%; border-radius: 2px; position: relative; top: 40px;'}, itemStyle: 'display: inline-block; width: 42%; padding: 0px 5px; float: left; padding-right: 30px; '},
                                       {type: 'text', key: {name: 'Birthday Parties', class: 'custom-primary-font-color custom-theme-color', style: 'font-size: 26px;  font-weight: 600; color: var(--default-theme-color); padding-top: 20px;'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px; padding-top: 30px; '},
                                       {type: 'text', key: {name: '$300.95', class: 'custom-primary-font-color ', style: 'font-size: 26px; font-weight: 700'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px;'},
                                       {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 49%;`},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ' '}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; top: 20px; '},
                                        {type: 'text', key: {name: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center; position: relative; float: left; '},
                                        {type: 'text', key: {name: 'Duis aute irure dolor in reprehenderit in voluptate velit.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; '},
                                        {type: 'text', key: {name: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' },  itemStyle: 'display: inline-block; width: 50%; padding-bottom: 50px;'},
                                       //  {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                       // magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 50%; margin-left: 40%;`},



                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in event-item',
                                   partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                               },

                               {
                                   animationType: 'zoom-in', animationDelay: 200,
                                   isDraggable  : true,
                                   desc: [
                                       {type: 'image', key: {name: 'static/img/restaurant_app/gallery/event-custom.jpg', style: 'width: 100%; border-radius: 2px; position: relative; top: 40px;'}, itemStyle: 'display: inline-block; width: 42%; padding: 0px 5px; float: left; padding-right: 30px; '},
                                       {type: 'text', key: {name: 'Custom Parties', class: 'custom-primary-font-color custom-theme-color', style: 'font-size: 26px;  font-weight: 600; color: var(--default-theme-color); padding-top: 20px;'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px; padding-top: 30px;'},
                                       {type: 'text', key: {name: '$300.95', class: 'custom-primary-font-color ', style: 'font-size: 26px; font-weight: 700'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px;'},
                                       {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 49%;`},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ' '}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; top: 20px;'},
                                        {type: 'text', key: {name: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center; position: relative; float: left; '},
                                        {type: 'text', key: {name: 'Duis aute irure dolor in reprehenderit in voluptate velit.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; '},
                                        {type: 'text', key: {name: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' },  itemStyle: 'display: inline-block; width: 50%; padding-bottom: 50px;'},
                                       //  {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                       // magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 50%; margin-left: 40%;`},


                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in event-item',
                                   partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                               },

                               {
                                   animationType: 'zoom-in', animationDelay: 200,
                                   isDraggable  : true,
                                   desc: [
                                       {type: 'image', key: {name: 'static/img/restaurant_app/gallery/event-private.jpg', style: 'width: 100%; border-radius: 2px; position: relative; top: 40px;'}, itemStyle: 'display: inline-block; width: 42%; padding: 0px 5px; float: left; padding-right: 30px; '},
                                       {type: 'text', key: {name: 'Private Parties', class: 'custom-primary-font-color custom-theme-color', style: 'font-size: 26px;  font-weight: 600; color: var(--default-theme-color); padding-top: 20px;'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px; padding-top: 30px; '},
                                       {type: 'text', key: {name: '$300.95', class: 'custom-primary-font-color ', style: 'font-size: 26px; font-weight: 700'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px;'},
                                       {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 49%;`},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ' '}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; top: 20px; '},
                                        {type: 'text', key: {name: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center; position: relative; float: left; '},
                                        {type: 'text', key: {name: 'Duis aute irure dolor in reprehenderit in voluptate velit.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; '},
                                        {type: 'text', key: {name: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' },  itemStyle: 'display: inline-block; width: 50%; padding-bottom: 50px;'},
                                       //  {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                       // magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 50%; margin-left: 40%;`},
                                       //


                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in event-item',
                                   partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                               },

                               {
                                   animationType: 'zoom-in', animationDelay: 200,
                                   isDraggable  : true,
                                   desc: [
                                       {type: 'image', key: {name: 'static/img/restaurant_app/gallery/event-custom.jpg', style: 'width: 100%; border-radius: 2px; position: relative; top: 40px;'}, itemStyle: 'display: inline-block; width: 42%; padding: 0px 5px; float: left; padding-right: 30px; '},
                                       {type: 'text', key: {name: 'Custom Parties', class: 'custom-primary-font-color custom-theme-color', style: 'font-size: 26px;  font-weight: 600; color: var(--default-theme-color); padding-top: 20px;'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px; padding-top: 30px;'},
                                       {type: 'text', key: {name: '$300.95', class: 'custom-primary-font-color ', style: 'font-size: 26px; font-weight: 700'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px;'},
                                       {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 49%;`},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ' '}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; top: 20px;'},
                                        {type: 'text', key: {name: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center; position: relative; float: left; '},
                                        {type: 'text', key: {name: 'Duis aute irure dolor in reprehenderit in voluptate velit.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; '},
                                        {type: 'text', key: {name: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' },  itemStyle: 'display: inline-block; width: 50%; padding-bottom: 50px;'},
                                       //  {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                       // magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 50%; margin-left: 40%;`},


                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in event-item',
                                   partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                               },

                               {
                                   animationType: 'zoom-in', animationDelay: 200,
                                   isDraggable  : true,
                                   desc: [
                                       {type: 'image', key: {name: 'static/img/restaurant_app/gallery/event-private.jpg', style: 'width: 100%; border-radius: 2px; position: relative; top: 40px;'}, itemStyle: 'display: inline-block; width: 42%; padding: 0px 5px; float: left; padding-right: 30px; '},
                                       {type: 'text', key: {name: 'Private Parties', class: 'custom-primary-font-color custom-theme-color', style: 'font-size: 26px;  font-weight: 600; color: var(--default-theme-color); padding-top: 20px;'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px; padding-top: 30px; '},
                                       {type: 'text', key: {name: '$300.95', class: 'custom-primary-font-color ', style: 'font-size: 26px; font-weight: 700'}, itemStyle: 'display: inline-block; width: 49%; padding-bottom: 12px;'},
                                       {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                      magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 49%;`},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ' '}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; top: 20px; '},
                                        {type: 'text', key: {name: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center; position: relative; float: left; '},
                                        {type: 'text', key: {name: 'Duis aute irure dolor in reprehenderit in voluptate velit.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' }, itemStyle: 'display: inline-block; width: 45%; padding-bottom: 8px;'},

                                        {type: 'icon', key: {name: 'check', type: 'font-awesome', class: 'default-theme-color default-outline-color', style: ''}, itemStyle: 'display: inline-block; width: 5%; text-align: center;  position: relative; float: left; '},
                                        {type: 'text', key: {name: ' Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.', class:'custom-primary-font-color', style: 'margin-left: 20px; width: 100%; font-size: 16px;' },  itemStyle: 'display: inline-block; width: 50%; padding-bottom: 50px;'},
                                       //  {type: 'text', key: {name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                       // magna aliqua.`, class:`custom-primary-font-color default-theme-primary-color`, style: `font-size: 16px; font-style: italic; width: 100%; ` }, itemStyle: ` display: inline-block;  padding: 10px 10px; width: 50%; margin-left: 40%;`},
                                       //


                                   ],
                                   partClass: 'custom-on-hover-part-zoom-in event-item',
                                   partStyle: 'display: inline-block; width: 100%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 50px 30px; float: left; '
                               },
                           ],
                           sectionClass: '',
                           sectionStyle: '',
                       },

         ],
       }
     },

    "reservationRestaurant_section": {
       block: {
           sections: [
                       {
                           animationType: 'fade-up', animationDelay: null,
                           parts: [
                             {
                                 animationType: 'zoom-in', animationDelay: 100,
                                 isDraggable  : true,
                                 desc: [
                                   {type: 'text', key: {name: 'Reservation ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                   {type: 'text', key: {name: `Book A Table`, class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                 ],
                                 partClass: '',
                                 partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                             },
                             {
                                 animationType: 'zoom-in', animationDelay: 300,
                                 isDraggable  : true,
                                 desc: [
                                   {type: 'input-type-text', key: {name: '', placeholder: 'Your Name', style: 'width: 100%;   padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 32%; margin-right: 10px;'},
                                   {type: 'input-type-text', key: {name: '', placeholder: 'Your Email', style: 'width: 100%;  padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 32%; margin-right: 10px;'},
                                   {type: 'input-type-text', key: {name: '', placeholder: 'Your Phone', style: 'width: 100%;  padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 32%; '},

                                   {type: 'input-type-text', key: {name: '', placeholder: 'Date', style: 'width: 100%; padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 32%; margin-right: 10px; margin-top: 10px;'},
                                   {type: 'input-type-text', key: {name: '', placeholder: 'Time', style: 'width: 100%;  padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 32%; margin-right: 10px; margin-top: 10px;'},
                                   {type: 'input-type-text', key: {name: '', placeholder: '# Of People', style: 'width: 100%;   padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 32%;  margin-top: 10px;'},

                                   {type: 'input-type-textarea', key: {name: '', placeholder: 'Message', style: ' padding: 10px; border: 1px solid var(--default-theme-color);'}, itemStyle: ' display: block; height: 100px; width: 100%; margin-top: 12px;'},

                                 ],
                                 partClass: 'custom-on-hover-part-zoom-in',
                                 partStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 30px 30px; float: left;'
                             },

                           ],
                           sectionClass: '',
                           sectionStyle: '',
                       },
                       {
                           animationType: 'fade-up', animationDelay: null,
                           parts: [
                               {
                                   animationType: 'zoom-in', animationDelay: 100,
                                   isDraggable  : true,
                                   desc: [
                                     {type: 'text', key: {name: 'Events ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                     {type: 'text', key: {name: `Organize Your Events In Our Restaurant`, class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                   ],
                                   partClass: '',
                                   partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px; margin-top: 30px;',
                               },
                           ]
                       },

         ],
       }
     },

    "contactsRestaurant_section": {
                 sectionName : 'contacts_section',
                 block: {
                     sections: [
                                 {
                                     animationType: 'fade-up', animationDelay: null,
                                     parts: [
                                         {
                                             animationType: 'zoom-in', animationDelay: 100,
                                             isDraggable  : true,
                                             desc: [
                                               {type: 'text', key: {name: 'Contact ------------', class: ' default-outline-color custom-primary-font-color', style: 'display: inline-block; font-size: 14px; width: 100%;'}, itemStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},
                                               {type: 'text', key: {name: `Contact Us`, class: ' default-theme-color default-outline-color', style: 'display: inline-block;  font-size: 36px; '}, itemStyle: 'display: inline-block; width: 100%; padding: 10px 10px; float: left;'},

                                             ],
                                             partClass: '',
                                             partStyle: 'width: 100%;display: inline-block;  padding-bottom: 10px;',
                                         },
                                         {
                                             animationType: 'zoom-in', animationDelay: 100,
                                             isDraggable  : true,
                                             desc: [
                                                 {type: 'icon', key: {name: 'map-marker', type: 'font-awesome', style: 'font-size: 22px; color: white; '}, secClass: 'default-background-color', itemStyle: 'display: block; margin-top: 10px; margin-top: 10px;display: inline-block;width: 45px;text-align: center; padding: 10px;border-radius: 50%;position: relative;top: 13px;margin-right: 10px;'},
                                                 {type: 'text', key: {name: 'Location', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 20px; '}, secClass: '', itemStyle: 'display: inline-block;'},
                                                 {type: 'text', key: {name: '27-Bidhanpally, Barrackpore, kol-700122', style: ''}, secClass: '', itemStyle: 'display: block; margin-left: 60px;'},

                                                 {type: 'icon', key: {name: 'clock-o', type: 'font-awesome', style: 'font-size: 22px; color: white; '}, secClass: 'default-background-color', itemStyle: 'display: block; margin-top: 10px; margin-top: 10px;display: inline-block;width: 45px;text-align: center; padding: 10px;border-radius: 50%;position: relative;top: 13px;margin-right: 10px;'},
                                                 {type: 'text', key: {name: 'Open Hours', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 20px; '}, secClass: '', itemStyle: 'display: inline-block;'},
                                                 {type: 'text', key: {name: 'Monday-Saturday: 9am - 11pm', style: ''}, secClass: '', itemStyle: 'display: block; margin-left: 60px;'},

                                                 {type: 'icon', key: {name: 'envelope', type: 'font-awesome', style: 'font-size: 22px; color: white; '}, secClass: 'default-background-color', itemStyle: 'display: block; margin-top: 10px; margin-top: 10px;display: inline-block;width: 45px;text-align: center;  padding: 10px;border-radius: 50%;position: relative;top: 13px;margin-right: 10px;'},
                                                 {type: 'text', key: {name: 'Email', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 20px; '}, secClass: '', itemStyle: 'display: inline-block;'},
                                                 {type: 'text', key: {name: 'rajibkarmakar87@gmail.com', style: ''},  itemStyle: 'display: block; margin-left: 60px;'},

                                                 {type: 'icon', key: {name: 'phone', type: 'font-awesome', style: 'font-size: 22px; color: white; '}, secClass: 'default-background-color', itemStyle: 'display: block; margin-top: 10px; margin-top: 10px;display: inline-block;width: 45px;text-align: center; padding: 10px;border-radius: 50%;position: relative;top: 13px;margin-right: 10px;'},
                                                 {type: 'text', key: {name: 'Call', class:'default-theme-primary-color custom-primary-font-color', style: 'font-size: 20px; '}, secClass: '',  itemStyle: 'display: inline-block;'},
                                                 {type: 'text', key: {name: '8147042756', style: ''}, secClass: '', itemStyle: 'display: block; margin-left: 60px;'},
                                             ],
                                             partClass: '',
                                             partStyle: 'width: 40%;display: inline-block;  padding-bottom: 10px;',
                                         },
                                         {
                                             animationType: 'zoom-in', animationDelay: 100,
                                             isDraggable  : true,
                                             desc: [
                                               {type: 'input-type-text', key: {name: '', placeholder: 'Your Name', style: 'width: 100%;  padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 48%; margin-right: 10px;'},
                                               {type: 'input-type-text', key: {name: '', placeholder: 'Your Email', style: 'width: 100%;  padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 49%; '},
                                               {type: 'input-type-text', key: {name: '', placeholder: 'Subject', style: 'width: 100%;  padding: 10px; border: 1px solid var(--default-theme-color);'},  itemStyle: ' display: inline-block; width: 100%; margin-right: 10px; margin-top: 5px;'},
                                               {type: 'input-type-textarea', key: {name: '', placeholder: 'Message', style: ' padding: 10px; border: 1px solid var(--default-theme-color);'}, itemStyle: ' display: block; height: 150px; width: 100%; margin-top: 12px;'},

                                             ],
                                             partClass: '',
                                             partStyle: 'width: 58%;display: inline-block;  padding-bottom: 10px;',
                                         },



                                     ]
                                 },
                   ],
                     style: '',
                 }
             },

}

module.exports.sections_data = sections_data;
module.exports.default_style = default_style;


//sakal 11.40am,tula lagna, narogon, mesh rashi, khatrio,
