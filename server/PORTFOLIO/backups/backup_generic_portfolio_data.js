const default_style = {
      themeColor: '#0F71A1',
}
let portfolio_data = {
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
        //header: "about_section",
        header: {
            title: {name: 'About Me', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

            heading: {
              txt: `
                To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.              `,
              style: ''
            },
        },
        profile: {
            description: {
                img: {url: 'static/img/profile-img.jpg', style: ''},
                name: {txt: 'Graphic kutta Designer', style: ''},
                shortDesc: {
                  txt: `To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.`,
                  style: '',
                },
                detailDesc: {
                    txt : `Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                      Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.`,
                    style: '',
                }
            },
            img: {url: 'static/img/me_portfolio/myImg1.jpg', style: ''},
            name: {txt: 'Rajib Karmakar', style: ''},
            shortDesc: {
              txt: `To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.`,
              style: '',
            },
            properties: {
              values: [
                    {type: 'text', key: {name: '', style: ''}, value: {name: 'About', style: ' font-size: 28px; font-weight: 700; width: 100%; color: '+default_style.themeColor+''}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px;'},
                    {type: 'text', key: {name: '', style: ''}, value: {name: 'To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, secStyle: 'display: inline-block; width: 100%; padding: 25px 10px;'},
                    {type: 'image', key: {name: '', style: ''}, value: {name: 'static/img/me_portfolio/myImg1.jpg', style: ' font-size: 28px; font-weight: 700; color: '+default_style.themeColor+''}, secStyle: 'display: inline-block; width: 40%; padding: 0px 10px; float: left;'},
                    {type: 'text', key: {name: '', style: ''}, value: {name: 'Rajib karmakar', style: ' font-size: 28px; font-weight: 700; width: 100%; color: '+default_style.themeColor+''}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px;'},
                    {type: 'text', key: {name: '', style: ''}, value: {name: 'Full Stack Developer.', style: ' font-size: 22px; font-weight: 500; width: 100%;' }, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px;'},
                    {type: 'text', key: {name: '', style: ''}, value: {name: 'To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.', style: 'width: 100%;'}, secStyle: 'display: inline-block; width: 60%; margin-top: 5px; padding: 10px;'},
                    {type: 'text',  key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%; '}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px;'},
                    {type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px;'},
                    { type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px; float: right;'},
                    { type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px; float: right;'},
                    { type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%; '}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px; float: right;'},
                    { type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px; float: right;'},
                    { type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 60%; padding: 0px 10px; float: right;'},
                ],
            style: 'padding-left: 1%;',
            },
            detailDesc: {
                txt : `Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.`,
                style: '',
            }

        },
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'image', key: {name: '', style: ''}, value: {name: 'static/img/me_portfolio/myImg1.jpg', style: ' '}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: left;'},

                                    ],
                                    sectionStyle: 'width: 34%;display: inline-block;  ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Rajib karmakar', style: ' font-size: 28px; font-weight: 700; width: 100%; color: '+default_style.themeColor+''}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Full Stack Developer.', style: ' font-size: 22px; font-weight: 500; width: 100%;' }, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'To be part of an organization, which provides a high quality of work life through challenging opportunities, encourages innovation, meaningful career growth and professional developement.', style: 'width: 100%;'}, secStyle: 'display: inline-block; width: 100%; margin-top: 5px; padding: 10px;'},
                                      {type: 'text',  key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%; '}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px;'},
                                      {type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px;'},
                                      {type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: right;'},
                                      {type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: right;'},
                                      {type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%; '}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: right;'},
                                      {type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: right;'},
                                      {type: 'text', key: { name: ' Birthday :',  style: 'font-weight: 700; width: 47%;'}, value: {name: '02-04-1987', style: 'margin-left: 20px; width: 47%;' }, icon: { type: 'fontAwesome', name: 'fa-chevron-right', style: 'color: '+default_style.themeColor+'; margin-right: 5px;'}, secStyle: 'display: inline-block; width: 100%; padding: 0px 10px; float: right;'},
                                    ],
                                    sectionStyle: 'width: 60%;display: inline-block;   ',
                                },

                            ]

                        },

          ],
            style: '',
        }
    },

    "facts_section": {
        sectionName : 'facts_section',
        header: {
            title: {name: 'Facts', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

            heading: {
              txt: `
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              `,
              style: ''
            },
        },
        facts: {
            values: [
                {about: 'Happy Clients', number: '232', aboutOf: ' consequuntur quae', icon: {name: 'smile-o', type: 'font-awesome', style: ''}, animationType: 'fade-up', animationDelay: null, style: 'width: 46%; background: white; margin-right: 1rem; margin-bottom: 1rem; '},
                {about: 'Projects', number: '232', aboutOf: ' consequuntur quae',  icon: {name: 'folder', type: 'font-awesome', style: ''}, animationType: 'fade-up', animationDelay: 100, style: 'width: 46%; background: white; margin-right: 1rem; margin-bottom: 1rem; '},
                {about: 'Hours Of Support', number: '232', aboutOf: ' consequuntur quae',  icon: {name: 'life-ring', type: 'font-awesome', style: ''}, animationType: 'fade-up', animationDelay: 200, style: 'width: 46%; background: white; margin-right: 1rem; margin-bottom: 1rem; '},
                {about: 'Hard Workers', number: '232', aboutOf: ' consequuntur quae',  icon: {name: 'user-plus', type: 'font-awesome', style: ''}, animationType: 'fade-up', animationDelay: 300, style: 'width: 46%; background: white; margin-right: 1rem; margin-bottom: 1rem; '},
            ],

            style: ''
        },
        newfacts: {
            values: [
            {
                details: [
                  {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: ''}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700; font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 100%; background: white;'}, secStyle: 'display: inline-block; width: 88%;'},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px;background: white; '}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},
                ],
                animationType: 'fade-up',
                animationDelay: null,
                sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
            },
            {
                details: [
                  {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: ''}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700; font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 100%; background: white;'}, secStyle: 'display: inline-block; width: 88%; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px; background: white;'}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},
                ],
                animationType: 'fade-up',
                animationDelay: 100,
                sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; '
            },
            {
                details: [
                  {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: ''}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700; font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 100%; background: white;'}, secStyle: 'display: inline-block; width: 88%; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px; background: white;'}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},
                ],
                animationType: 'fade-up',
                animationDelay: 100,
                sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; '
            },
            {
                details: [
                  {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: ''}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700;font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 100%; background: white;'}, secStyle: 'display: inline-block; width: 88%;'},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px; background: white;'}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},
                ],
                animationType: 'fade-up',
                animationDelay: 100,
                sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px; margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; '
            },

          ],
          style: ''
        },
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 30px; color: red;  position: relative; left: 20px; color: '+default_style.themeColor+';'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700; font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; left: 30px;'}, secStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px;background: white; '}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},

                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                      {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 30px; color: red;  position: relative; left: 20px; color: '+default_style.themeColor+';'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700; font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; left: 30px;'}, secStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px; background: white;'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},

                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    desc: [
                                      {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 30px; color: red;  position: relative; left: 20px; color: '+default_style.themeColor+';'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700; font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; left: 30px;'}, secStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px; background: white;'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},

                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    desc: [
                                      {type: 'icon', details: {name: 'smile-o', type: 'font-awesome', style: 'font-size: 30px; color: red;  position: relative; left: 20px; color: '+default_style.themeColor+';'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: '232', style: 'font-weight: 700; font-size: 48px; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 90%; background: white; position: relative; left: 30px;'}, secStyle: 'display: inline-block; width: 88%;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Happy Clients', style: 'font-weight: 600; font-size: 16px; background: white;'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'consequuntur quae', style: 'font-weight: 400; font-size: 16px; background: white;'}, secStyle: 'display: inline-block;'},

                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },

                            ]

                        },

          ],
            style: '',
        }
    },

    "skills_section": {
        sectionName : 'skills_section',
        header: {
            title: {name: 'Skills', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

            heading: {
              txt: `
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              `,
              style: ''
            },
        },
        skills: {
            primarySkill: {
              values: [
                {name : 'HTML5', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px;'},
                {name : 'NODE', percent: '90',  progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: 50, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px;'},
                {name : 'JAVASCRIPT', percent: '90',  progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: 100, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px;'},
                {name : 'ANGULAR', percent: '90',  progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: 150, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px;'},
                {name : 'REACT', percent: '90',  progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: 200, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px;'},
                {name : 'FIREBASE', percent: '90',  progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: 250, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px;'},
            ],
            sectionStyle: '',
          },
            additionalSkill: {
                values: [
                          {
                              skillName: 'Software Skill',
                              header: {name: 'Software Skill', style: 'font-size: 20px; font-weight: 600; color: '+default_style.themeColor+'; margin-top: 20px; margin-bottom: 10px;'},
                              skillIcon: '',
                              skillDesc: '',
                              skillDetails: [
                                  {
                                      // name: {txt: 'Node JS', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: null,
                                      // shortDesc: 'I am an nodejs developer for last 5 years.',
                                      desc: [
                                          {type: 'text', key: {name: 'Node JS', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      rating: {rank: '8', style: 'color: '+default_style.themeColor+''},
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                  },
                                  {
                                      // name: {txt: 'AngularJs & ReactJS', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 50,
                                      // shortDesc: 'I am an nodejs developer for last 5 years.',
                                      desc: [
                                          {type: 'text', key: {name: 'AngularJs & ReactJS', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      rating: {rank: '5', style: 'color: '+default_style.themeColor+''},
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                  },
                                  {
                                      // name: {txt: 'MongoDb & Firebase ', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 100,
                                      // shortDesc: 'I am an nodejs developer for last 5 years. ',
                                      desc: [
                                          {type: 'text', key: {name: 'MongoDb & Firebase ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: '20', style: 'font-weight: 400;'}},
                                      ],
                                      rating: {rank: '4', style: 'color: '+default_style.themeColor+''},
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                  },
                                  {
                                      // name: {txt: 'GraphQl', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 150,
                                      // shortDesc: 'I am an nodejs developer for last 1 years.',
                                      desc: [
                                          {type: 'text', key: {name: 'GraphQl ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 1 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      rating: {rank: '4', style: 'color: '+default_style.themeColor+''},
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                  },
                                  {
                                      // name: {txt: 'AI & Machine Learning', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 200,
                                      // shortDesc: 'I am an nodejs developer for last 3 years.',
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      rating: {rank: '4', style: 'color: '+default_style.themeColor+''},
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                  }
                              ]

                          },
                          {
                              skillName: 'Computer Language',
                              header: {name: 'Computer Language', style: 'font-size: 20px; font-weight: 600; color: '+default_style.themeColor+'; margin-top: 20px; margin-bottom: 10px;'},
                              skillIcon: '',
                              skillDeesc: '',
                              skillDetails: [
                                  {
                                      // name: {txt: 'HTML5', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: null,
                                      // shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                      rating: {rank: '5', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  },
                                  {
                                      // name: {txt: 'CSS3', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 50,
                                      // shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                      rating: {rank: '6', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  },
                                  {
                                      // name: {txt: 'Javascript ES6', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 100,
                                      // shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                      rating: {rank: '6', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  },
                                  {
                                      // name: {txt: 'Java', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 150,
                                      // shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                      rating: {rank: '7', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  }
                              ]

                          },
                          {
                              skillName: 'Framework Known',
                              header: {name: 'Framework Known', style: 'font-size: 20px; font-weight: 600; color: '+default_style.themeColor+'; margin-top: 20px; margin-bottom: 10px;'},
                              skillIcon: '',
                              skillDeesc: '',
                              skillDetails: [
                                  {
                                      // name: {txt: 'Node Js', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: null,
                                      shortDesc: '',
                                      rating: {rank: '8', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  },
                                  {
                                      // name: {txt: 'Angular Js', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 50,
                                      shortDesc: '',
                                      rating: {rank: '7', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  },
                                  {
                                      // name: {txt: 'React Js', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 100,
                                      shortDesc: '',
                                      rating: {rank: '7', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  },
                                  {
                                      // name: {txt: 'Graph QL', style: 'font-size: 22px; font-weight: 700;'},
                                      icon: '',
                                      animationType: 'fade-up', animationDelay: 150,
                                      shortDesc: '',
                                      rating: {rank: '5', style: 'color: '+default_style.themeColor+''},
                                      desc: [
                                          {type: 'text', key: {name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                          {type: 'text', key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                      ],
                                      sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                  }
                              ]
                          },
                ],
                style: ''
            },
            style: ''
        },
        newSkills: {
            sections: [
                        {
                      animationType: 'fade-up', animationDelay: null,
                      details: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: '# Primary Skill', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },
                          {
                              desc: [
                                {type: 'progress-bar', key: {name: 'JAVASCRIPT', style: 'background: white;'}, value: {name: '85', style: 'background: white; width: 13%; float: right;'}, name : 'JAVASCRIPT', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'HTML5', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'},  name : 'HTML5', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'ANGULAR JS', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'}, name : 'ANGULAR JS', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'REACT JS', style: 'background: white;'}, value: {name: '80', style: 'background: white; width: 13%; float: right;'}, name : 'REACT JS', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'NODE JS', style: 'background: white;'}, value: {name: '80', style: 'background: white; width: 13%; float: right;'}, name : 'NODE JS', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'CSS3', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'}, name : 'CSS3', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                              ],
                              sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },

                      ]

                  },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            details: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Software Skill', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'Node JS', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AngularJs & ReactJS', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'MongoDb & Firebase ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: '20', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'GraphQl ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 1 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 200,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            details: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Computer Language', style: 'font-size: 22px; font-weight: 700; '}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; '}, value: {name: '', style: 'font-weight: 400;'}},
                                    ],
                                    sectionStyle: ' display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            details: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Framework Known', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                                    ],
                                    rating: {rank: '8', style: 'color: '+default_style.themeColor+''},
                                    sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                }
                            ]
                        },
          ],
            style: '',
        },
        block: {
            sections: [
                        {
                      animationType: 'fade-up', animationDelay: null,
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: '# Primary Skill', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },
                          {
                              desc: [
                                {type: 'progress-bar', key: {name: 'JAVASCRIPT', style: 'background: white;'}, value: {name: '85', style: 'background: white; width: 13%; float: right;'}, name : 'JAVASCRIPT', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'HTML5', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'},  name : 'HTML5', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'ANGULAR JS', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'}, name : 'ANGULAR JS', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'REACT JS', style: 'background: white;'}, value: {name: '80', style: 'background: white; width: 13%; float: right;'}, name : 'REACT JS', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'NODE JS', style: 'background: white;'}, value: {name: '80', style: 'background: white; width: 13%; float: right;'}, name : 'NODE JS', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                                {type: 'progress-bar', key: {name: 'CSS3', style: 'background: white;'}, value: {name: '90', style: 'background: white; width: 13%; float: right;'}, name : 'CSS3', percent: '90', progressBarStyle: 'background-color: '+default_style.themeColor+'; ', animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 16px; margin-bottom: 1rem; background: white; padding-bottom: 60px; float: left; '},
                              ],
                              sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },

                      ]

                  },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Software Skill', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'Node JS', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AngularJs & ReactJS', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'MongoDb & Firebase ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: '20', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'GraphQl ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 1 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 200,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Computer Language', style: 'font-size: 22px; font-weight: 700; '}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; '}, value: {name: '', style: 'font-weight: 400;'}},
                                    ],
                                    sectionStyle: ' display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                }
                            ]

                        },
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {name: '# Framework Known', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                                    ],
                                    rating: {rank: '8', style: 'color: '+default_style.themeColor+''},
                                    sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                },
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                        {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 100,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                },
                                {
                                    animationType: 'fade-up', animationDelay: 150,
                                    desc: [
                                        {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                        {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                        {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                                    ],
                                    sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                                }
                            ]
                        },
          ],
            style: '',
        }
    },

    "education_section" : {
        sectionName : 'education_section',
        header: {
            title: {name: 'Education', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},
            heading: {
              txt: `
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              `,
              style: ''
            },
        },
        educations: {
            values: [
            {
                details: [
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'Bachelor In Computer Application', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: '2009', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: ' -  2012', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'Netaji Subash Engineering College Under W.B.U.T.', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                ],
                animationType: 'fade-up',
                animationDelay: null,
                sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
            },
            {
                details: [
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'Masters In Computer Application', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: '2012', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                  {type: 'text', key: {name: '', style: ''}, value: {name: ' -  2015', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                  {type: 'text', key: {name: '', style: ''}, value: {name: 'R.V. College Of Engineering', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                ],
                animationType: 'fade-up',
                animationDelay: 100,
                sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; '
            },

          ],
          style: ''
        },
        block: {
            sections: [
                        {
                            animationType: 'fade-up', animationDelay: null,
                            parts: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    desc: [
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Bachelor In Computer Application', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: '2009', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: ' -  2012', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Netaji Subash Engineering College Under W.B.U.T.', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},

                                    ],
                                    sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Masters In Computer Application', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: '2012', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: ' -  2015', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'R.V. College Of Engineering', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},

                                    ],
                                    sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                },
                                {
                                    animationType: 'fade-up', animationDelay: 50,
                                    desc: [
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Masters In Computer Application', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: '2012', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: ' -  2015', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                                      {type: 'text', key: {name: '', style: ''}, value: {name: 'R.V. College Of Engineering', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},

                                    ],
                                    sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                },

                            ]

                        },

          ],
            style: '',
        }
    },

    "workexp_section" : {
          sectionName : 'workexp_section',
          header: {
              title: {name: 'Work Experience', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},
              heading: {
                txt: `
                  Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                `,
                style: ''
              },
          },
          experiences: {
            values: [
                {
                    details: [
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Associate System Engineer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Feb 2015', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                      {type: 'text', key: {name: '', style: ''}, value: {name: ' - Jun 2016', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Azureiken Technologies Pvt Ltd, Banglore', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                    ],

                    animationType: 'fade-up',
                    animationDelay: null,
                    sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                },
                {
                    details: [
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Application Programmer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Jul 2016', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: ' - Sep 2017', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Web Spiders Pvt Ltd, kolkata', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                    ],

                    animationType: 'fade-up',
                    animationDelay: 100,
                    sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                },
                {
                    details: [
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Front-end Developer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Sep 2017', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: ' - Mar 2019', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'P.W.C India', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                    ],

                    animationType: 'fade-up',
                    animationDelay: 200,
                    sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                },
                {
                    details: [
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'UI Developer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Mar 2019', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: ' - Now', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                      {type: 'text', key: {name: '', style: ''}, value: {name: 'Capegimini, Unitech Kolkata.', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                    ],

                    animationType: 'fade-up',
                    animationDelay: 300,
                    sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                },

              ],
              style: ''
            },
          block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Associate System Engineer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Feb 2015', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: ' - Jun 2016', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Azureiken Technologies Pvt Ltd, Banglore', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},

                                        ],
                                        sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        desc: [
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Application Programmer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Jul 2016', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: ' - Sep 2017', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Web Spiders Pvt Ltd, kolkata', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},

                                        ],
                                        sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        desc: [
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Front-end Developer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Sep 2017', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: ' - Mar 2019', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'P.W.C India', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},

                                        ],
                                        sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        desc: [
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'UI Developer', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block; width: 95%;background: white;'}, secStyle: 'display: block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Mar 2019', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: ' - Now', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: '', style: ''}, value: {name: 'Capegimini, Unitech Kolkata.', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding-bottom: 20px; width: 95%;background: white;'}, secStyle: ' display: block;'},

                                        ],
                                        sectionStyle: 'width: 46%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; ',
                                    },

                                ]

                            },

              ],
                style: '',
            }
        },

    "work_section": {
          sectionName : 'work_section',
          header: {
              title: {name: 'Amar Latest sab baler kaj baj work', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

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
            header: {
                title: {name: 'Services', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

                heading: {
                  txt: `
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                  `,
                  style: ''
                },
            },
            services: {
                values: [
                    {name: 'Lorem Ipsum', icon: {name: 'laptop', type: 'font-awesome', style: ''}, desc: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',  animationType: 'fade-up', animationDelay: null, style: 'width: 48%; margin-right: 1rem; padding: 1rem; margin-bottom: 1rem; background: white;'},
                    {name: 'Dolor Sitema', icon: {name: 'shopping-bag', type: 'font-awesome', style: ''}, desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',  animationType: 'fade-up', animationDelay: 50, style: 'width: 48%; margin-right: 1rem; padding: 1rem; margin-bottom: 1rem; background: white;'},
                    {name: 'Sed ut perspiciatis', icon: {name: 'globe', type: 'font-awesome', style: ''}, desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata', animationType: 'fade-up', animationDelay: 100, style: 'width: 48%; margin-right: 1rem; padding: 1rem; margin-bottom: 1rem; background: white;'},
                    {name: 'Magni Dolores', icon: {name: 'ship', type: 'font-awesome', style: ''}, desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',  animationType: 'fade-up', animationDelay: 150, style: 'width: 48%; margin-right: 1rem; padding: 1rem; margin-bottom: 1rem; background: white;'},
                    {name: 'Nemo Enim', icon: {name: 'star', type: 'font-awesome', style: ''}, desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',  animationType: 'fade-up', animationDelay: 200, style: 'width: 48%; margin-right: 1rem; padding: 1rem; margin-bottom: 1rem; background: white;'},
                    {name: 'Eiusmod Tempor', icon: {name: 'tasks', type: 'font-awesome', style: ''}, desc: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',  animationType: 'fade-up', animationDelay: 250, style: 'width: 48%; margin-right: 1rem; padding: 1rem; margin-bottom: 1rem; background: white;'},
                ],
                style: ''
            },
            block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'icon', details: {name: 'laptop', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; '},
                                            {type: 'text', key: {name: 'Lorem Ipsum', style: 'font-size: 22px; font-weight: 700; background: white; width: 85%;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline; '},
                                            {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 50,
                                        desc: [
                                          {type: 'icon', details: {name: 'shopping-bag', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Dolor Sitema', style: 'font-size: 22px; font-weight: 700; background: white; width: 85%;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 100,
                                        desc: [
                                          {type: 'icon', details: {name: 'globe', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Sed ut perspiciatis', style: 'font-size: 22px; font-weight: 700; background: white; width: 85%;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 150,
                                        desc: [
                                          {type: 'icon', details: {name: 'ship', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Magni Dolores', style: 'font-size: 22px; font-weight: 700; background: white; width: 85%;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 200,
                                        desc: [
                                          {type: 'icon', details: {name: 'star', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Nemo Enim', style: 'font-size: 22px; font-weight: 700; background: white; width: 85%;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: 200,
                                        desc: [
                                          {type: 'icon', details: {name: 'tasks', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; '},
                                          {type: 'text', key: {name: 'Eiusmod Tempor', style: 'font-size: 22px; font-weight: 700; background: white; width: 85%;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline; '},
                                          {type: 'text', key: {name: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; width: 100%;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    }
                                ]

                            },

              ],
                style: '',
            }
        },

    "testimonials_section": {
              sectionName : 'testimonials_section',
              header: {
                  title: {name: 'Testimonials', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

                  heading: {
                    txt: `
                      Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    `,
                    style: ''
                  },
              },
              testimonials: {
                values: [
                  {
                    quotes: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
                    imgUrl: 'static/img/testimonials/testimonials-1.jpg',
                    name: 'Saul Goodman',
                    designation: 'Ceo &amp; Founder',
                    aosDelay: null,
                    animationType: 'fade-up',
                    animationDelay: null,
                    style: ''
                  },
                  {
                    quotes: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
                    imgUrl: 'static/img/testimonials/testimonials-2.jpg',
                    name: 'Sara Wilsson',
                    designation: 'Designer',
                    aosDelay: '100',
                    animationType: 'fade-up',
                    animationDelay: 100,
                    style: ''
                  },
                  {
                    quotes: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
                    imgUrl: 'static/img/testimonials/testimonials-3.jpg',
                    name: 'Jena Karlis',
                    designation: 'Store Owner',
                    aosDelay: '200',
                    animationType: 'fade-up',
                    animationDelay: 200,
                    style: ''
                  },
                  {
                    quotes: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
                    imgUrl: 'static/img/testimonials/testimonials-4.jpg',
                    name: 'Matt Brandon',
                    designation: 'Freelancer',
                    aosDelay: '300',
                    animationType: 'fade-up',
                    animationDelay: 300,
                    style: ''
                  },
                  {
                    quotes: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
                    imgUrl: 'static/img/testimonials/testimonials-5.jpg',
                    name: 'John Larson',
                    designation: 'Entrepreneur',
                    aosDelay: '400',
                    animationType: 'fade-up',
                    animationDelay: 400,
                    style: ''
                  },
              ],
              style: '',
            },
              block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [

                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px; font-weight: 500; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'}, value: {name: '', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'text', key: {name: 'Entrepreneur', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },

                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px; font-weight: 500; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'}, value: {name: '', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'text', key: {name: 'Entrepreneur', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px; font-weight: 500; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'}, value: {name: '', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'text', key: {name: 'Entrepreneur', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px;'
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px; font-weight: 500; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'}, value: {name: '', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'text', key: {name: 'Entrepreneur', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'text', key: { name: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.', style: 'font-size: 16px; font-weight: 500; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'image', key: {name: 'static/img/testimonials/testimonials-5.jpg', style: 'width: 90px; height: 90px; border-radius: 50%;'}, value: {name: '', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'position: relative;top: -20px;right: 0px; text-align: right; display: block;text-align: center;'},
                                            {type: 'text', key: {name: 'John Larson', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                            {type: 'text', key: {name: 'Entrepreneur', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                                    },
                                ]

                            },

              ],
                style: '',
            }
          },

    "languages_section": {
            sectionName : 'languages_section',
            header: {
                title: {name: 'Language Known', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

                heading: {
                  txt: `
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                  `,
                  style: ''
                },
            },
            languages: {
              values: [
                {lang: 'Bengali', icon: {type: 'fa', name: 'language', style: "font-size: 24px; color: #0F71A1; font-family: 'fontawesome';"}, read: true, write: true, motherTongue: {txt: 'Native Speech', style: 'font-weight: 600; color: '+default_style.themeColor+';',}, aosDelay: 'null', animationType: 'fade-up', animationDelay: null, icon: {type: 'fontAwesome', name: 'language', style: 'font-size: 22px; color: black;'}, style: 'width: 30%; float: left; margin-right: 16px; margin-bottom: 10px; background: white; padding: 20px; '},
                // box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1); border-radius: 8px;
                {lang: 'English', icon: {type: 'fa', name: 'language', style: "font-size: 24px; color: #0F71A1; font-family: 'fontawesome';"}, read: true, write: false, motherTongue: false, aosDelay: '100', animationType: 'fade-up', animationDelay: 100, icon: {type: 'fontAwesome', name: 'language', style: 'font-size: 22px; color: black;'}, style: 'width: 30%; float: left; margin-right: 16px; margin-bottom: 10px; background: white; padding: 20px; '},
                {lang: 'Hindi', icon: {type: 'fa', name: 'language', style: "font-size: 24px; color: #0F71A1; font-family: 'fontawesome';"}, read: true, write: false, motherTongue: false, aosDelay: '200', animationType: 'fade-up', animationDelay: 200, icon: {type: 'fontAwesome', name: 'language', style: 'font-size: 22px; color: black;'}, style: 'width: 30%; float: left; margin-right: 16px; margin-bottom: 10px; background: white; padding: 20px;'},
              ],
              style: ''
            },
            block: {
                sections: [
                            {
                                animationType: 'fade-up', animationDelay: null,
                                parts: [

                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'icon', details: {name: 'language', type: 'font-awesome', style: "font-size: 30px; color: "+default_style.themeColor+"; font-family: 'fontawesome'; "}, secStyle: 'display: inline-block; '},
                                            {type: 'text', key: { name: 'Bengali', style: 'font-size: 22px; font-weight: 700; background: white; width: 45%;'}, value: {name: 'Native Speech', style: 'font-weight: 400; float: right; width: 54%; background: white;'}, secStyle: ''},
                                            {type: 'text', key: {name: 'Read', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; '}, secStyle: 'display: inline-block; position: relative; top: 10px;'},
                                            {type: 'icon', details: {name: 'check', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; float: right;'},
                                            {type: 'text', key: {name: 'Write', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'display: inline-block; font-weight: 400; background: white; '}, secStyle: 'position: relative; top: 25px;'},
                                            {type: 'icon', details: {name: 'check', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; float: right;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'icon', details: {name: 'language', type: 'font-awesome', style: "font-size: 30px; color: "+default_style.themeColor+"; font-family: 'fontawesome'; "}, secStyle: 'display: inline-block; '},
                                            {type: 'text', key: { name: 'English', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; float: right;'}, secStyle: ''},
                                            {type: 'text', key: {name: 'Read', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; position: relative; top: 10px;'},
                                            {type: 'icon', details: {name: 'check', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; float: right;'},
                                            {type: 'text', key: {name: 'Write', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'display: inline-block; font-weight: 400; background: white;'}, secStyle: 'position: relative; top: 25px;'},
                                            {type: 'icon', details: {name: 'times', type: 'font-awesome', style: 'font-size: 30px; color: red; '}, secStyle: 'display: inline-block; float: right;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },
                                    {
                                        animationType: 'fade-up', animationDelay: null,
                                        desc: [
                                            {type: 'icon', details: {name: 'language', type: 'font-awesome', style: "font-size: 30px; color: "+default_style.themeColor+"; font-family: 'fontawesome'; "}, secStyle: 'display: inline-block; '},
                                            {type: 'text', key: { name: 'Hindi', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; float: right;'}, secStyle: ''},
                                            {type: 'text', key: {name: 'Read', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; position: relative; top: 10px;'},
                                            {type: 'icon', details: {name: 'check', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: inline-block; float: right;'},
                                            {type: 'text', key: {name: 'Write', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'display: inline-block; font-weight: 400; background: white;'}, secStyle: 'position: relative; top: 25px;'},
                                            {type: 'icon', details: {name: 'times', type: 'font-awesome', style: 'font-size: 30px; color: red; '}, secStyle: 'display: inline-block; float: right;'},

                                        ],
                                        sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                                    },

                                ]

                            },
              ],
                style: '',
            }
          },

    "contacts_section": {
                sectionName : 'contacts_section',
                header: {
                    title: {name: 'Contacts', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},
                    heading: {
                      txt: `
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                      `,
                      style: ''
                    },
                },
                contacts: {
                  values: [
                    {key: {txt: 'Location', style: ''}, icon: {name: 'map-marker', type: 'font-awesome', style: ''}, value: {txt: 'A108 Adam Street, New York, NY 535022', style: ''}},
                    {key: {txt: 'Email', style: ''}, icon: {name: 'envelope', type: 'font-awesome', style: ''}, value: {txt: 'info@example.com', style: ''}},
                    {key: {txt: 'Call', style: ''}, icon: {name: 'phone', type: 'font-awesome', style: ''}, value: {txt: '+1 5589 55488 55s', style: ''}},
                  ],
                  map: {url: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621', style: ''},
                  style: ''
                },
                forms: {
                  field1: {level: 'Type your name '},
                  field2: {level: 'Type your email '},
                  field3: {level: 'Type your subject '},
                  field4 : {level: 'Type your message '},
                  button: {type: 'submit', class: '', btnTxt: 'Send Message', style: 'width: 100%; border: none;  height: 38px;  background: '+default_style.themeColor+' ;color: white;border-radius: 4px; '},
                  style: ''
                },
                block: {
                    sections: [
                                {
                                    animationType: 'fade-up', animationDelay: null,
                                    parts: [
                                        {
                                            animationType: 'fade-up', animationDelay: null,
                                            desc: [
                                              {type: 'icon', details: {name: 'map-marker', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: block; margin-top: 10px;'},
                                              {type: 'text', key: {name: 'Location', style: ''}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: block;'},
                                              {type: 'text', key: {name: '27-Bidhanpally, Barrackpore, kol-700122', style: ''}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: block;'},

                                              {type: 'icon', details: {name: 'envelope', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: block; margin-top: 10px;'},
                                              {type: 'text', key: {name: 'Email', style: ''}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block;'},
                                              {type: 'text', key: {name: 'rajibkarmakar87@gmail.com', style: ''}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: block;'},

                                              {type: 'icon', details: {name: 'phone', type: 'font-awesome', style: 'font-size: 30px; color: '+default_style.themeColor+'; '}, secStyle: 'display: block; margin-top: 10px;'},
                                              {type: 'text', key: {name: 'Call', style: ''}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: block;'},
                                              {type: 'text', key: {name: '8147042756', style: ''}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: block;'},

                                              {type: 'iframe', key: {name: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621', style: ''}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; width: 95%; margin-top: 10px;'},

                                            ],
                                            sectionStyle: 'width: 47%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; float: left; ',
                                        },
                                        {
                                            animationType: 'fade-up', animationDelay: null,
                                            desc: [
                                              {type: 'text', key: {name: 'Your Name', style: 'font-size: 18px; font-weight: 600;'}, value: {name: '', style: 'display: inline-block;'}, secStyle: 'display: block; margin: 10px 0px;'},
                                              {type: 'input-type-text', key: {name: '', style: 'width: 100%; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white; padding: 10px; width: 95%; '}, secStyle: 'display: block; '},
                                              {type: 'text', key: {name: 'Your Email', style: 'font-size: 18px; font-weight: 600;'}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; margin: 10px 0px;'},
                                              {type: 'input-type-text', key: {name: '', style: 'width: 100%; background: white;'}, value: {name: '', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding: 10px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                                              {type: 'text', key: {name: 'Subject', style: 'font-size: 18px; font-weight: 600;'}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; margin: 10px 0px;'},
                                              {type: 'input-type-text', key: {name: '', style: 'width: 100%; background: white;'}, value: {name: '', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding: 10px; width: 95%;background: white;'}, secStyle: ' display: block;'},
                                              {type: 'text', key: {name: 'Your Message', style: 'font-size: 18px; font-weight: 600;'}, value: {name: '', style: 'font-weight: 400; background: white;'}, secStyle: 'display: inline-block; margin: 10px 0px;'},
                                              {type: 'input-type-textarea', key: {name: '', style: ''}, value: {name: '', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block; padding: 10px; width: 95%;background: white; height: 220px;'}, secStyle: ' display: block;'},

                                            ],
                                            sectionStyle: 'width: 47%;display: inline-block;  padding-left: 25px;border-left: 2px solid '+default_style.themeColor+';margin-left: 10px; background: white; margin-right: 1rem; margin-bottom: 10px; float: right;',
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
        sectionStyle: ''
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

        sectionStyle: '',
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
        sectionStyle: ''
    },

    "typed_section": {
        profile: {name: 'Rajib Karmakar', style: ''},
        profileGreeting: {name: "I'm", style: ''},
        img: {url: 'static/img/me_portfolio/portfolio1.jpg', style: ''},
        animationType: 'fade-in',
        typedOptions: {
            strings: [
              '<span style="color: orange;">Graphic Designer<span>', '<span style="color: cyan;">Developer</span>', '<span style="color: yellow;">Freelance</span>', '<span style="color: red;">Photographer</span>'
            ],
            typeSpeed:100,
            backDelay:2000,
            loop:true,
            shuffle: true,
            showCursor: false,
            autoInsertCss: false,
        },
        sectionStyle: ''
    },

    "projects_section": {
      sectionName : 'projects_section',
      header: {
          title: {name: 'Projects', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

          heading: {
            txt: `
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            `,
            style: ''
          },
          sectionStyle: '',
      },
      projects: {
          values: [
            {
              header: {
                fullDesc: {
                  details: [
                    {key: {name: '', style: ''}, value: {name: 'Covid 19 Pandemic', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block;'}, secStyle: 'display: block; '},
                    {key: {name: '', style: ''}, value: {name: '1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-left: 20px;  '},
                    {key: {name: '', style: ''}, value: {name: '- 1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-right: 20px; position: relative; left: -4px;'},
                    {key: {name: '', style: ''}, value: {name: 'Cepegemini', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block;'}, secStyle: ' display: block;'},

                  ],
                  secStyle: ''
                },
                desc: {
                  details: [
                    {key: {name: 'Domain : ', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
                    {key: {name: 'Effected Areas : ', style: 'font-weight: 600;'}, value: {name: 'Whole world', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
                    {key: {name: 'Used Api : ', style: 'font-weight: 600;'}, value: {name: 'Covid 19 India Gvt API', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
                    {key: {name: 'Platform : ', style: 'font-weight: 600;'}, value: {name: 'Open Source', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
                  ],
                  secStyle: ' padding: 10px; margin-right: 1rem; height: 60px; width: 29%; '
              },
                secStyle: ' width: 100%; clear: both;'
              },

              additionalFeature: {
                values: [
                    {
                        skillName: 'Software Skill',
                        header: {name: 'Software Skill', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},
                        skillIcon: '',
                        skillDesc: '',
                        skillDetails: [
                            {
                                name: 'Node js',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: 'HTML5 & CSS3',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    // {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'CS6', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: 'Javascript',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: 'AI',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: 'Machine Learning',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    // {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: 'Typescript',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    // {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            }
                        ],
                        secStyle: ' width: 100%; clear: both; padding-top: 3px; '
                    },
                    {
                        skillName: 'Roles And Responsibility ',
                        header: {name: 'Roles And Responsibility', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},
                        skillIcon: '',
                        skillDesc: '',
                        skillDetails: [
                            {
                                name: '',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole idea setup and the way it will implemented.', style: 'font-weight: 600;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 150px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'

                            },
                            {
                                name: '',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'Mostly used APIs are provided by india government and few other APIs consume for worldwide covid data analysis.', style: 'font-weight: 600;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 150px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: '',
                                icon: '',
                                shortDesc: '',
                                desc: [
                                    {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'Try to provide different ways to analyze the covid data to better understanding the pandemic.', style: 'font-weight: 600;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 150px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            }
                        ],
                        secStyle: ' width: 100%; clear: both; padding-top: 3px;  '

                    },
                ],
                style: 'padding-left: 0px;'
              },
              sectionStyle: 'width: 48%; display: inline-block; padding-left: 10px;  border-left: 2px solid '+default_style.themeColor+'; background: white;  margin-right: 12px; margin-bottom: 12px; float: left;',
              separator : '<hr style="width: 95%; border-top: 2px solid '+default_style.theme_color+'; ">'
            },
            {
              header: {
                fullDesc: {
                  details: [
                    {key: {name: '', style: ''}, value: {name: 'Covid 19 Pandemic', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block;'}, secStyle: 'display: block; '},
                    {key: {name: '', style: ''}, value: {name: '1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-left: 20px;  '},
                    {key: {name: '', style: ''}, value: {name: '- 1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-right: 20px; position: relative; left: -4px;'},
                    {key: {name: '', style: ''}, value: {name: 'Cepegemini', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block;'}, secStyle: ' display: block;'},

                  ],
                  secStyle: ''
                },
                desc: {
                  details: [
                    {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
                    {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
                    {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
                    {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'},secStyle: 'width: 28%; display: inline-block;'},
                ],
                secStyle: ' padding: 10px; margin-right: 1rem; height: 60px; width: 29%; position: relative; top: 20px; '
              },
                secStyle: ' width: 100%; clear: both; padding-top: 3px;  '
              },

              additionalFeature: {
                values: [
                    {
                        skillName: 'Software Skill',
                        header: {name: 'Software Skill', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},

                        skillIcon: '',
                        skillDesc: '',
                        skillDetails: [
                            {
                                name: 'Adobe Illustrator',
                                icon: '',
                                shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                desc: [
                                    {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: '20', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 165px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px;  transition: box-shadow .3s;'
                            },
                            {
                                name: 'Adobe Photoshop 2015',
                                icon: '',
                                shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                desc: [
                                    {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'CS6', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 165px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: 'Adobe Premiere Pro',
                                icon: '',
                                shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                desc: [
                                    {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: '20', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 165px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            }
                        ],
                        secStyle: ' width: 100%; clear: both; padding-top: 3px;  '

                    },
                    {
                        skillName: 'Roles And Responsibility ',
                        header: {name: 'Roles And Responsibility ', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},
                        skillIcon: '',
                        skillDesc: '',
                        skillDetails: [
                            {
                                name: '',
                                icon: '',
                                shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                desc: [
                                    {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole developement and to mannage the team members.', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 200px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: '',
                                icon: '',
                                shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                desc: [
                                    {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole developement and to mannage the team members.', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 200px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            },
                            {
                                name: '',
                                icon: '',
                                shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                                desc: [
                                    {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole developement and to mannage the team members.', style: 'font-weight: 400;'}},
                                ],
                                rating: null,
                                sectionStyle: 'width: 47%; height: 200px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                            }
                        ],
                        secStyle: ' width: 100%; clear: both; padding-top: 3px;  '

                    },
                ],
                style: 'padding-left: 0px;'
              },
              sectionStyle: 'width: 48%; display: inline-block; padding-left: 10px;  border-left: 2px solid '+default_style.themeColor+'; background: white;   margin-right: 12px; margin-bottom: 12px; float: left;',
              separator : '<hr style="width: 95%; border-top: 2px solid '+default_style.theme_color+' ; ">'
            },

          ],
          sectionStyle: '',
        }
    },

    "activities_section": {
        sectionName : 'activities_section',
        header: {
            title: {name: 'Extra Curricular Activities', style: 'display: inline-block;outline-color: #0F71A1 !important;font-size: 28px;font-weight: 700;width: 100%;color: #0F71A1;'},

            heading: {
              txt: `
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              `,
              style: ''
            },
        },
        activities: {
            values: [
              {
                  skillName: 'Hobby',
                  header: {name: 'Hobby', style: 'font-size: 20px; font-weight: 600; color: '+default_style.themeColor+'; margin-top: 20px; margin-bottom: 10px;'},
                  skillIcon: '',
                  skillDeesc: '',
                  skillDetails: [
                      {
                          name: {txt: 'Blogging', style: 'font-size: 20px; font-weight: 500; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          animationType: 'fade-up', animationDelay: 200,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '

                      },
                      {
                          name: {txt: 'Drawing', style: 'font-size: 20px; font-weight: 500; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          animationType: 'fade-up', animationDelay: 250,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;  '

                      },
                      {
                          name: {txt: 'Cooking', style: 'font-size: 20px; font-weight: 500; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          animationType: 'fade-up', animationDelay: 300,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '

                      },
                      {
                          name: {txt: 'Learn Novel Technologies', style: 'font-size: 20px; font-weight: 700; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          animationType: 'fade-up', animationDelay: 350,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem;'

                      }
                  ]
              },
              {
                  skillName: 'Certification',
                  header: {name: 'Certification', style: 'font-size: 20px; font-weight: 600; color: '+default_style.themeColor+'; margin-top: 20px; margin-bottom: 10px;'},
                  skillIcon: '',
                  skillDeesc: '',
                  skillDetails: [
                      {
                          name: {txt: 'IBM DB2 Certified, 2015', style: 'font-size: 20px; font-weight: 500; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          img: {url: 'static/img/generic_portfolio_image/icon/certificate.jpg', alt: '', redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, style: 'width: 100%; height: 200px; '},
                          animationType: 'fade-up', animationDelay: null,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '

                      },
                      {
                          name: {txt: 'React JS Professional', style: 'font-size: 20px; font-weight: 500; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          img: {url: 'static/img/generic_portfolio_image/icon/certificate.jpg', alt: '',  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, style: 'width: 100%; height: 200px; '},
                          animationType: 'fade-up', animationDelay: 50,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '
                      },
                      {
                          name: {txt: 'Data Science', style: 'font-size: 20px; font-weight: 500; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          img: {url: 'static/img/generic_portfolio_image/icon/certificate.jpg', alt: '',  redirectUrl: '', style: 'width: 100%; height: 200px; '},
                          animationType: 'fade-up', animationDelay: 100,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '

                      },
                      {
                          name: {txt: 'Programming in R', style: 'font-size: 20px; font-weight: 500; display: block; text-align: center; padding: 10px;'},
                          icon: '',
                          img: {url: 'static/img/generic_portfolio_image/icon/certificate.jpg', alt: '',  redirectUrl: {url: 'https://bootstrapmade.com/demo/iPortfolio/', style: 'color: '+default_style.themeColor+''}, style: 'width: 100%; height: 200px; '},
                          animationType: 'fade-up', animationDelay: 150,
                          shortDesc: '',
                          desc: [],
                          sectionStyle: ' width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; '

                      }
                  ]
                }
            ],
            sectionStyle: ''
        }
    }



}

// let sections1 = ["about", "facts", "services", "skills", "education", "workexp", "workcat", "work", "languages", "contacts"];


module.exports.portfolio_data = portfolio_data;



//====================================================================================================================


projects: {
    values: [
      {
        header: {
          fullDesc: {
            details: [
              {key: {name: '', style: ''}, value: {name: 'Covid 19 Pandemic', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block;'}, secStyle: 'display: block; '},
              {key: {name: '', style: ''}, value: {name: '1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-left: 20px;  '},
              {key: {name: '', style: ''}, value: {name: '- 1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-right: 20px; position: relative; left: -4px;'},
              {key: {name: '', style: ''}, value: {name: 'Cepegemini', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block;'}, secStyle: ' display: block;'},

            ],
            secStyle: ''
          },
          desc: {
            details: [
              {key: {name: 'Domain : ', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
              {key: {name: 'Effected Areas : ', style: 'font-weight: 600;'}, value: {name: 'Whole world', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
              {key: {name: 'Used Api : ', style: 'font-weight: 600;'}, value: {name: 'Covid 19 India Gvt API', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
              {key: {name: 'Platform : ', style: 'font-weight: 600;'}, value: {name: 'Open Source', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},

            ],
            secStyle: ' padding: 10px; margin-right: 1rem; height: 60px; width: 29%; '
        },
          secStyle: ' width: 100%; clear: both;'
        },

        additionalFeature: {
          values: [
              {
                  skillName: 'Software Skill',
                  header: {name: 'Software Skill', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},
                  skillIcon: '',
                  skillDesc: '',
                  skillDetails: [
                      {
                          name: 'Node js',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'Latest', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: 'HTML5 & CSS3',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              // {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'CS6', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: 'Javascript',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: 'AI',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: 'Machine Learning',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              // {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: 'Typescript',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              // {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'ES6', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 100px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      }
                  ],
                  secStyle: ' width: 100%; clear: both; padding-top: 3px; '
              },
              {
                  skillName: 'Roles And Responsibility ',
                  header: {name: 'Roles And Responsibility', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},
                  skillIcon: '',
                  skillDesc: '',
                  skillDetails: [
                      {
                          name: '',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole idea setup and the way it will implemented.', style: 'font-weight: 600;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 150px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'

                      },
                      {
                          name: '',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'Mostly used APIs are provided by india government and few other APIs consume for worldwide covid data analysis.', style: 'font-weight: 600;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 150px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: '',
                          icon: '',
                          shortDesc: '',
                          desc: [
                              {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'Try to provide different ways to analyze the covid data to better understanding the pandemic.', style: 'font-weight: 600;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 150px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      }
                  ],
                  secStyle: ' width: 100%; clear: both; padding-top: 3px;  '

              },
          ],
          style: 'padding-left: 0px;'
        },
        sectionStyle: 'width: 48%; display: inline-block; padding-left: 10px;  border-left: 2px solid '+default_style.themeColor+'; background: white;  margin-right: 12px; margin-bottom: 12px; float: left;',
        separator : '<hr style="width: 95%; border-top: 2px solid '+default_style.theme_color+'; ">'
      },
      {
        header: {
          fullDesc: {
            details: [
              {key: {name: '', style: ''}, value: {name: 'Covid 19 Pandemic', style: 'font-weight: 600; font-size: 1.5rem; margin-top: 20px;  font-weight: 600; padding-bottom: 15px; display: block;'}, secStyle: 'display: block; '},
              {key: {name: '', style: ''}, value: {name: '1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-left: 20px;  '},
              {key: {name: '', style: ''}, value: {name: '- 1st Apr, 2020', style: 'font-weight: 400;'}, secStyle: 'display: inline-block; background: '+default_style.themeColor+'; color: white; padding: 5px; padding-right: 20px; position: relative; left: -4px;'},
              {key: {name: '', style: ''}, value: {name: 'Cepegemini', style: 'font-weight: 400; font-style: italic; margin-top: 15px; margin-top: 10px; font-size: 18px; display: block;'}, secStyle: ' display: block;'},

            ],
            secStyle: ''
          },
          desc: {
            details: [
              {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
              {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
              {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'}, secStyle: 'width: 28%; display: inline-block;'},
              {key: {name: 'Domain', style: 'font-weight: 600;'}, value: {name: 'Health Care', style: 'font-weight: 400;'},secStyle: 'width: 28%; display: inline-block;'},
          ],
          secStyle: ' padding: 10px; margin-right: 1rem; height: 60px; width: 29%; position: relative; top: 20px; '
        },
          secStyle: ' width: 100%; clear: both; padding-top: 3px;  '
        },

        additionalFeature: {
          values: [
              {
                  skillName: 'Software Skill',
                  header: {name: 'Software Skill', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},

                  skillIcon: '',
                  skillDesc: '',
                  skillDetails: [
                      {
                          name: 'Adobe Illustrator',
                          icon: '',
                          shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                          desc: [
                              {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: '20', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 165px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px;  transition: box-shadow .3s;'
                      },
                      {
                          name: 'Adobe Photoshop 2015',
                          icon: '',
                          shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                          desc: [
                              {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: 'CS6', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 165px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: 'Adobe Premiere Pro',
                          icon: '',
                          shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                          desc: [
                              {key: {name: 'Version', style: 'font-weight: 600;'}, value: {name: '20', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 165px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      }
                  ],
                  secStyle: ' width: 100%; clear: both; padding-top: 3px;  '

              },
              {
                  skillName: 'Roles And Responsibility ',
                  header: {name: 'Roles And Responsibility ', style: 'font-size: 18px; font-weight: 600; color: black; margin-top: 20px; margin-bottom: 10px;'},
                  skillIcon: '',
                  skillDesc: '',
                  skillDetails: [
                      {
                          name: '',
                          icon: '',
                          shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                          desc: [
                              {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole developement and to mannage the team members.', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 200px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: '',
                          icon: '',
                          shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                          desc: [
                              {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole developement and to mannage the team members.', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 200px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      },
                      {
                          name: '',
                          icon: '',
                          shortDesc: 'lkjakls ljlkjdskjkl kljslkfdjlkjklfj jkljsdfklfjklj kljlkjsldk sk jdlk sjdkl lsk ',
                          desc: [
                              {key: {name: '', style: 'font-weight: 600;'}, value: {name: 'I was responsible for the whole developement and to mannage the team members.', style: 'font-weight: 400;'}},
                          ],
                          rating: null,
                          sectionStyle: 'width: 47%; height: 200px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px; transition: box-shadow .3s;'
                      }
                  ],
                  secStyle: ' width: 100%; clear: both; padding-top: 3px;  '

              },
          ],
          style: 'padding-left: 0px;'
        },
        sectionStyle: 'width: 48%; display: inline-block; padding-left: 10px;  border-left: 2px solid '+default_style.themeColor+'; background: white;   margin-right: 12px; margin-bottom: 12px; float: left;',
        separator : '<hr style="width: 95%; border-top: 2px solid '+default_style.theme_color+' ; ">'
      },

    ],
    sectionStyle: '',
  }


  //----------------------------------------------------------------------------

  block: {
      sections: [
                  {
                animationType: 'fade-up', animationDelay: null,
                parts: [
                    {
                        animationType: 'fade-up', animationDelay: null,
                        desc: [
                            {type: 'text', key: {name: 'Covid 19 Pandemic', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                            {type: 'text', key: {name: '1st Apr, 2020', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                            {type: 'text', key: {name: '- 1st Apr, 2020', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                            {type: 'text', key: {name: 'Cepegemini', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},

                        ],
                        sectionStyle: 'width: 100%; height: 165px; color: #637d88; background: #f7f7f7; padding: 10px; font-size: 16px; margin-right: 10px; margin-bottom: 10px; float: left; box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 3px 0px, rgba(0, 0, 0, 0.11) 0px 0px 0px 0px;  transition: box-shadow .3s;'
                    },


                ]

                },
                  {
                      animationType: 'fade-up', animationDelay: null,
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: 'Domain Details', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: 'Domain', style: 'font-weight: 600; background: white;'}, value: {name: 'Health Care', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: 'Domain', style: 'font-weight: 600; background: white;'}, value: {name: 'Health Care', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: 'Domain', style: 'font-weight: 600; background: white;'}, value: {name: 'Health Care', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: 'Domain', style: 'font-weight: 600; background: white;'}, value: {name: 'Health Care', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: 'Domain', style: 'font-weight: 600; background: white;'}, value: {name: 'Health Care', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: 'Domain', style: 'font-weight: 600; background: white;'}, value: {name: 'Health Care', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                      ]

                  },
                  {
                      animationType: 'fade-up', animationDelay: null,
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: '# Software Skill', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'Node JS', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: 50,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'AngularJs & ReactJS', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: 100,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'MongoDb & Firebase ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: '20', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: 150,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'GraphQl ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 1 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400; background: white;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          },
                          {
                              animationType: 'fade-up', animationDelay: 200,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''
                          }
                      ]

                  },
                  {
                      animationType: 'fade-up', animationDelay: null,
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: '# Computer Language', style: 'font-size: 22px; font-weight: 700; '}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600; '}, value: {name: '', style: 'font-weight: 400;'}},
                              ],
                              sectionStyle: ' display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          },
                          {
                              animationType: 'fade-up', animationDelay: 50,
                              desc: [
                                  {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          },
                          {
                              animationType: 'fade-up', animationDelay: 100,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          },
                          {
                              animationType: 'fade-up', animationDelay: 150,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          }
                      ]

                  },
                  {
                      animationType: 'fade-up', animationDelay: null,
                      parts: [
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {name: '# Framework Known', style: 'font-size: 22px; font-weight: 700;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 5 years.', style: 'font-weight: 600;'}, value: {name: '', style: 'font-weight: 400;'}},
                              ],
                              rating: {rank: '8', style: 'color: '+default_style.themeColor+''},
                              sectionStyle: 'display: inline-block; width: 100%; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; '
                          },
                          {
                              animationType: 'fade-up', animationDelay: null,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          },
                          {
                              animationType: 'fade-up', animationDelay: 50,
                              desc: [
                                  {type: 'text', key: { inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          },
                          {
                              animationType: 'fade-up', animationDelay: 100,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right; '},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          },
                          {
                              animationType: 'fade-up', animationDelay: 150,
                              desc: [
                                  {type: 'text', key: {inputType: 'textarea', name: 'AI & Machine Learning ', style: 'font-size: 22px; font-weight: 700; background: white; width: 65%;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'rating', key: {name: '5', style: 'font-size: 22px; font-weight: 700; background: white; top: -10px; left: 7px; width: 12%; color: '+default_style.themeColor+';'}, value: {name: '10', style: 'font-weight: 400; background: white; top: 5px; width: 12%; left: 10px;'}, secStyle: 'display: inline-block; position: relative; top: -20px; right: 0px; text-align: right; float: right;'},
                                  {type: 'text', key: {name: 'I am an nodejs developer for last 3 years. ', style: 'font-weight: 600; background: white;'}, value: {name: '', style: 'font-weight: 400;'}},
                                  {type: 'text', key: {name: 'Version', style: 'font-weight: 600; background: white;'}, value: {name: 'Latest', style: 'font-weight: 400; background: white;'}},
                              ],
                              sectionStyle: 'display: inline-block; width: 31%; background: white; margin-right: 1rem; margin-bottom: 1rem; padding: 20px; border-left: 5px solid '+default_style.themeColor+''

                          }
                      ]
                  },


    ],
      style: '',
  }
