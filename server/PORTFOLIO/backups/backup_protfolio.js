const promise = require("promise");
const request = require("request");
const ROOT_DIR = require("path").resolve();
var portfolio_data = require('./store/generic_portfolio_data.js');
portfolio_data = portfolio_data.portfolio_data;

function getRankTemplate(item, editable, sectionName, sectionIndex,  partsIndex, itemIndex){
  let template = '';
  let onKeyUpInputMethodName = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'name'+'\')"';
  let onKeyUpInputMethodValue = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'value'+'\' )"';

  if(editable){
    template += `
      <div style="`+item.secStyle+`">
        <span><input type="text" value="`+item.key.name+`" `+onKeyUpInputMethodName+` style="font-size: 32px; position: relative; left: 7px; font-weight: 600; color: black; padding: 0px; width: 13%; `+item.key.style+`" /></span>
        <span style="font-size: 26px; font-weight: 400; color: grey; ">/</span>
        <span><input type="text" value="`+item.value.name+`" `+onKeyUpInputMethodValue+` style="font-size: 18px;position: relative; left: -7px; font-weight: 400; padding: 0px; width: 13%; `+item.value.style+`" /></span>
      </div>
    `;
  }else{
    template += `
      <div style="float: right;`+item.secStyle+`">
        <span style="font-size: 32px;position: relative;top: -12px;left: 7px;font-weight: 600; color: orange; `+item.key.style+`; left: 0px;">`+item.key.name+`</span>
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

    let onKeyUpInputMethodName = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'name'+'\')"';
    let onKeyUpInputMethodValue = 'onkeyup="onKeyUpInputProperties(event, \''+sectionName+'\', \''+sectionIndex+'\', \''+partsIndex+'\', \''+itemIndex+'\', \''+'value'+'\' )"';

    animation += getAotAnimation(item);
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
    template += `
        <div class="progress custom-progress-block"  `+animation+` style="display: inline-block; `+item.style+`">
          <span class="skill">
            `+infoTemplate+`
          </span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="`+item.percent+`" aria-valuemin="0" aria-valuemax="100" style="width: `+item.percent+`%; `+item.progressBarStyle+`"></div>
          </div>
        </div>
    `;

    return template;

}

function getGridTemplate(data, sectionName, sectionIndex, partsIndex){
  let template = '<div style="width: 100%;">';
  data.forEach((ele, index) => {
    let subTemplate = '';
    let id = sectionName+'-'+sectionIndex+'-'+partsIndex+'-'+index;
    let itemId = 'item_'+id;
    let inputId = 'input_'+id;
    let method = '';
    if(ele.event !== undefined && ele.event !== ''){
        method += ele.event.eventType+'="'+ele.event.eventName+'"';

    }
    if(ele.type === 'text'){
        let iconTemplate = '';
        subTemplate += `
            <span style="`+ele.key.style+`">`+ele.key.name+`</span>
        `;
    }else if(ele.type === "button"){
        subTemplate += `
          <button type="button" id="`+itemId+`" `+method+` name="" style="`+ele.key.style+`">`+ele.key.name+`</button>
        `;
    }else if(ele.type === 'image'){
        let onclickMethod = '';
        if(ele.redirectUrl && ele.redirectUrl.url ){
            onclickMethod += 'onclick="onClickRedirectUrl(\'' + ele.redirectUrl.url + '\')" ';
        }
        if(ele.key.name){
            subTemplate += `<span><img src="`+ele.key.name+`" id="`+inputId+`" class="img-fluid" `+onclickMethod+` style="`+ele.key.style+`" alt=""></span>`;
        }
    }else if(ele.type === 'icon'){
      if(ele.details.name && ele.details.type === "font-awesome"){
          subTemplate += '<div class="icon" id="'+inputId+'"><i class="fa fa-'+ele.details.name+'" style="'+ele.details.style+'" aria-hidden="true"></i></div>';
      }
    }else if(ele.type === "progress-bar"){
          subTemplate += getProgressBarTemplate(ele, false);
    }else if(ele.type === "rating"){
          subTemplate += getRankTemplate(ele, false);
    }else if(ele.type === 'iframe'){
        if(ele.key.name){
            subTemplate += '<iframe src="'+ele.key.name+'" id="'+inputId+'" frameborder="0" style="border:0; width: 100%; height: 290px; '+ele.key.style+'" allowfullscreen></iframe>';
        }
    }else if(ele.type === "input-type-text"){
        if(ele.key.name !== null){
            let valueTemplate = '';
            if(ele.key.name !== ''){

                valueTemplate += 'value="'+ele.key.name+'"';
            }
            subTemplate += `<input type="text" id="`+inputId+`"  style="display: inline-block; border: 1px solid #0F71A1; `+ele.key.style+`"  `+valueTemplate+`/>`;
        }
    }else if(ele.type === "input-type-textarea"){

        if(ele.key.name !== null){
            let valueTemplate = '';
            if(ele.key.name !== ''){
                valueTemplate += 'value="'+ele.key.name+'"';
            }
            subTemplate += `<textarea id="`+inputId+`" row="40" name="w3review" style="display: inline-block; border: 1px solid #0F71A1; width: 100%; height: 100%; overflow: hidden; `+ele.key.style+`" >`+valueTemplate+`</textarea>`;
        }
    }
    template += `
        <div id="`+itemId+`" class="grid-section mob-width-full" style="`+ele.secStyle+`">
            `+subTemplate+`
        </div>
    `;
  });
  template += '</div>';
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
    let onMouseHoverAndMouseOutMethod = 'onmouseover="showHideThreeDotsbtn(this, \''+'mouse_over'+'\')" onmouseout="showHideThreeDotsbtn(this, \''+'mouse_out'+'\')"';
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
                subTemplate += `<textarea id="`+inputId+`" name="w3review"  `+onKeyUpInputMethodName+` style="display: inline-block; outline-color: #0F71A1 !important; width: 100%; height: 100%; overflow: hidden; `+ele.key.style+`" >`+ele.key.name+`</textarea>`;
              }else{
                subTemplate += `<input id="`+inputId+`" type="text" `+onKeyUpInputMethodName+` style="display: inline-block; outline-color: #0F71A1 !important; `+ele.key.style+`"  value="`+ele.key.name+`"/>`;
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
    }else if(ele.type === 'icon' && ele.details.name && ele.details.type === "font-awesome"){
          subTemplate += '<div class="icon"><i class="fa fa-'+ele.details.name+'" style="'+ele.details.style+'" aria-hidden="true"></i></div>';
    }else if(ele.type === "progress-bar"){
          subTemplate += getProgressBarTemplate(ele, true, sectionName, sectionIndex, partsIndex, itemIndex);
    }else if(ele.type === "rating"){
          subTemplate += getRankTemplate(ele, true, sectionName, sectionIndex, partsIndex, itemIndex);
    }else if(ele.type === 'input-type-text'){
        if(ele.key.name){
            subTemplate += `<input type="text"  style="display: inline-block; outline-color: #0F71A1 !important; `+ele.key.style+`"  value="`+ele.key.name+`"/>`;
        }
    }else if(ele.type === 'input-type-textarea'){
        if(ele.key.name){
            subTemplate += `<textarea id="w3review" name="w3review"   style="display: inline-block; outline-color: #0F71A1 !important; width: 100%; height: 100%; overflow: hidden; `+ele.key.style+`" >`+ele.key.name+`</textarea>`;
        }
    }
    template += `
        <div id="`+itemId+`" `+onMouseHoverAndMouseOutMethod+` class="grid-section mob-width-full" style=" `+ele.secStyle+`">
            <div style="width: 95%; display: inline-block;">`+subTemplate+`</div>
            <div id="`+threeDotsId+`"  `+onClickThreeDotsBtn+` style="display: none; float: right; width: 3%; position: relative; top: 10px;"><span style="float: right;"><i id="`+threeDotsBtnId+`" class="fa fa-ellipsis-v" aria-hidden="true" style="color: black; "></i></span></div>
        </div>
    `;
  });
  template += '</div>';
  return template;
}

function sections_template(data, editable, sectionName, sectionIndex, partsIndex){
  let template = '';
  if(editable){
    template += getGridEditTemplate(data, sectionName, sectionIndex, partsIndex);
  }else{
    template += getGridTemplate(data, sectionName, sectionIndex, partsIndex);
  }
  return template;
}

function getDetailsTemplate(data){
    let template = '';
    if(data && data.length > 0){
          template += '<div style="width: 100%;">';
          data.forEach((item, index) => {
                let keyTemplate = '';
                let valueTemplate = '';
                if(item.key.name && item.key.name !== ''){
                    keyTemplate += '<span style="'+item.key.style+'" >'+item.key.name+'</span>';
                }
                if(item.value.name && item.value.name !== ''){
                    valueTemplate += '<span style="'+item.value.style+'" >'+item.value.name+'</span>';
                }
                template += `
                    <div class="custom-each-details-section" style="`+item.secStyle+`">
                        `+keyTemplate+`
                        `+valueTemplate+`
                    </div>
                `;
          });
          template += '</div>';
      }
    return template;
}

function createAdditionalTemplate(data){
    let template = '<div style="'+data.style+'">';
    data.values.forEach((item, index) => {
        template += '<div class="custom-additional-block" data-aos="fade-up" style="'+item.secStyle+'">';

        template += '<div style=" '+item.header.style+'"># <span>'+item.header.name+'</span></div>';

        if(item.skillDetails && item.skillDetails !== '' && item.skillDetails.length > 0){
            item.skillDetails.forEach((item, index) => {
                let descTemplate = '';
                let rankTemplate = '';
                let animation = '';
                let iconImageTemplate = '';
                let externalSourceIconTemplate = '';
                let onclickMethod = '';

                if(item.rating && item.rating !== ''){
                    rankTemplate = getRankTemplate(item.rating);
                }
                {
                    if(item.animationType && item.animationType !== ''){
                      animation += 'data-aos="'+item.animationType+'" ';
                    }
                    if(item.animationDelay && item.animationDelay !== ''){
                        animation += 'data-aos-delay="'+item.animationDelay+'" ';
                    }
                }
                if(item.desc && item.desc !== '' && item.desc.length > 0 ){
                    descTemplate += '<div>';
                    item.desc.forEach((item, index) => {
                      descTemplate += `
                          <div style="margin-top: 10px; font-size: 16px;">
                              <span style="`+item.key.style+`">`+item.key.name+`</span>
                              <span style="`+item.key.style+`">`+item.value.name+`</span>
                          </div>
                      `;
                    });
                    descTemplate += '</div>';
                }

                if(item.icon !== ''){

                }else if(item.img && item.img.url !== ''){
                    if(item.img.redirectUrl && item.img.redirectUrl.url !== ''){
                        onclickMethod += 'onclick="onClickRedirectUrl(\'' + item.img.redirectUrl.url + '\')" ';
                        externalSourceIconTemplate += '<i class="fas fa-external-link-alt" aria-hidden="true" '+onclickMethod+' style="float: left;position: relative;top: 5px;color: blue; '+item.img.redirectUrl.style+'"></i>';
                    }
                    iconImageTemplate = '<img src="'+item.img.url+'" class="img-fluid"  alt="'+item.img.alt+'" style="'+item.img.style+'">';
                }
                template += `
                    <div class="custom-additional-skill-each-section" `+onclickMethod+` `+animation+` style="display: inline-block; `+item.sectionStyle+`">
                        <div>`+iconImageTemplate+`</div>
                        <div style="font-weight: 600; width: 100%;">
                              <span style="float: right;">`+rankTemplate+`</span>
                        </div>
                        <div>
                            `+descTemplate+`
                        </div>
                    </div>
                `;
            });
        }

        template += '</div>';

    });
    template += '</div>';

    return template;
}

function get_header_template(data){
    let template = `
        <div class="section-title">
          <h2>`+data.title.name+`</h2>
          <p id="profile-title" style="`+data.heading.style+`">`+data.heading.txt+`</p>
        </div>
    `;
    return template;
}

function get_header_edit_template(data){
    let template = `
        <div class="section-title">
          <input type="text" value="`+data.title.name+`" style="display: block; `+data.title.style+`" />
          <textarea id="profile-title" name="heading" rows="5" cols="100" style="display: block; `+data.heading.style+`">`+data.heading.txt+`</textarea>
        </div>
    `;
    return template;
}

function header_section_template(data,editable){
    let template = '';
    if(editable){
        template += get_header_edit_template(data);
    }else{
        template += get_header_template(data);
    }
    return template;
}

function about_section(sectionName){
    console.log("=== generic portfolio about section function is calling ===");
    let template = '';
    let data = portfolio_data[sectionName];
    let profileDetailsTemplate = '';
    if(data.profile.properties && data.profile.properties.values && data.profile.properties.values.length > 0){
          let devider = (data.profile.properties.values.length / 2);
          let firstBlockTemplate = '';
          let secondBlockTemplate = '';
          for (var i = 0; i < data.profile.properties.values.length; i++) {
              let property = data.profile.properties.values[i];
              if(i < devider){
                    firstBlockTemplate += '<li><i class="icofont-rounded-right"></i> <strong><span style="'+property.key.style+'">'+property.key.name+'</span></strong><span style="'+property.value.style+'">'+property.value.name+'</span></li>';
              }else{
                    secondBlockTemplate += '<li><i class="icofont-rounded-right"></i> <strong><span style="'+property.key.style+'">'+property.key.name+'</span></strong><span style="'+property.value.style+'">'+property.value.name+'</span></li>';
              }
          }
          profileDetailsTemplate += `
            <div class="row">
              <div class="col-lg-6">
                <ul>
                `+firstBlockTemplate+`
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                `+secondBlockTemplate+`
                </ul>
              </div>
            </div>
          `;
    }
    template += `
        <div class="container">

          <div>
              `+get_header_template(data.header)+`
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="`+data.profile.img.url+`" class="img-fluid" alt="">
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3 style="`+data.profile.name.style+`">`+data.profile.name.txt+`</h3>
              <p class="font-italic" id="profile_short_description_block" style="`+data.profile.shortDesc.style+`">
                `+data.profile.shortDesc.txt+`
              </p>
              <div id="profile_details_block" style="`+data.profile.properties.style+`">
                `+profileDetailsTemplate+`
              </div>
              <p id="profile_description_block" style="`+data.profile.detailDesc.style+`">
                `+data.profile.detailDesc.txt+`
              </p>
            </div>
          </div>

        </div>
    `;

    return template;
}

function edit_about_section(sectionName){
  let template = '';
  let data = portfolio_data[sectionName];
  let aboutMeTemplate = '';
  let updateBtnTemplate = '';
  if(data.profile && data.profile.properties && data.profile.properties.values && data.profile.properties.values.length > 0){
        aboutMeTemplate += `
            <div>
                <div  data-aos="fade-left" class="mob-width-full" style="width: 100%; display: inline-block; `+data.profile.properties.style+`">  `+getGridEditTemplate(data.profile.properties.values, sectionName, null, null)+`</div>
            </div>
        `;
  }
  template += `
        <div class="container">
            <div class="" style="width: 100%;">
                `+aboutMeTemplate+`
            </div>

        </div>
  `;
  return {template : template, templateData: data};
}

function new_about_section1(sectionName){
  let template = '';
  let data = portfolio_data[sectionName];
  let aboutMeTemplate = '';
  if(data.profile && data.profile.properties && data.profile.properties.values && data.profile.properties.values.length > 0){
        aboutMeTemplate += `
            <div>
                <div data-aos="fade-right" class="mob-width-full" style="width: 100%; display: inline-block; float: left;" >
                    <div class="" >
                      <img src="`+data.profile.img.url+`" class="img-fluid" alt="">
                    </div>
                </div>
                <hr>
                <div  data-aos="fade-left" class="mob-width-full" style="width: 100%; display: inline-block; `+data.profile.properties.style+`">  `+getGridTemplate(data.profile.properties.values)+`</div>
            </div>
        `;
  }
  template += `
        <div class="container">
            <div>
                `+get_header_template(data.header)+`
            </div>
            <div class="" style="width: 100%;">
                `+aboutMeTemplate+`
            </div>
        </div>
  `;

  return template;

  // return {template : template, templateData: data};

}

function new_about_section(sectionName){
  let template = '';
  let data = portfolio_data[sectionName];
  let aboutMeTemplate = '';
  if(data.profile && data.profile.properties && data.profile.properties.values && data.profile.properties.values.length > 0){
        aboutMeTemplate += `
            <div>
                <div  data-aos="fade-left" class="mob-width-full" style="width: 100%; display: inline-block; `+data.profile.properties.style+`">  `+getGridTemplate(data.profile.properties.values)+`</div>
            </div>
        `;
  }
  template += `
        <div class="container">
            <div class="" style="width: 100%;">
                `+aboutMeTemplate+`
            </div>
        </div>
  `;

  return template;
}

function new_facts_section(sectionName){
    console.log("###############################################");

    let template = '';
    let data = portfolio_data[sectionName];
    let factsTemplate = '';
    if(data.newfacts && data.newfacts.values && data.newfacts.values.length > 0){
          data.newfacts.values.forEach((item, index) => {
              let animation = '';
              let iconTemplate = '';
              let detailsTemplate = '';
              if(item.icon && item.icon.type === "font-awesome"){
                  iconTemplate += '<div class="icon"><i class="fa fa-'+item.icon.name+'" style="'+item.icon.style+'" aria-hidden="true"></i></div>';
              }
              {
                  if(item.animationType && item.animationType !== ''){
                    animation += 'data-aos="'+item.animationType+'" ';
                  }
                  if(item.animationDelay && item.animationDelay !== ''){
                      animation += 'data-aos-delay="'+item.animationDelay+'" ';
                  }
              }
              if(item.details && item.details.length > 0){
                    detailsTemplate += getGridTemplate(item.details);
              }

              factsTemplate += `
                  <div class="custom-each-fact-section"  `+animation+` style="display: inline-block; width: 48%; `+item.sectionStyle+`">
                    <div class="count-box" style="">
                        `+detailsTemplate+`
                    </div>
                  </div>
              `;
          })
    }

    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class=" " style="width: 100%; " data-aos="fade-up">
                  `+factsTemplate+`
              </div>
          </div>
    `;

    return template;
}

function edit_facts_section(sectionName){
    let template = '';
    let data = portfolio_data[sectionName];
    let factsTemplate = '';
    if(data.newfacts && data.newfacts.values && data.newfacts.values.length > 0){
          data.newfacts.values.forEach((item, sectionIndex) => {
              let animation = '';
              let iconTemplate = '';
              let detailsTemplate = '';
              if(item.icon && item.icon.type === "font-awesome"){
                  iconTemplate += '<div class="icon"><i class="fa fa-'+item.icon.name+'" style="'+item.icon.style+'" aria-hidden="true"></i></div>';
              }
              {
                  if(item.animationType && item.animationType !== ''){
                    animation += 'data-aos="'+item.animationType+'" ';
                  }
                  if(item.animationDelay && item.animationDelay !== ''){
                      animation += 'data-aos-delay="'+item.animationDelay+'" ';
                  }
              }
              if(item.details && item.details.length > 0){
                    detailsTemplate += getGridEditTemplate(item.details, sectionName, sectionIndex, null);
              }

              factsTemplate += `
                  <div class="custom-each-fact-section"  `+animation+` style="display: inline-block; width: 48%; `+item.sectionStyle+`">
                    <div class="count-box" style="padding: 10px; ">
                        `+detailsTemplate+`
                    </div>
                  </div>
              `;
          })
    }

    template += `
          <div class="container">
              <div>
                  `+get_header_edit_template(data.header)+`
              </div>
              <div class=" " style="width: 100%; " data-aos="fade-up">
                  `+factsTemplate+`
              </div>
          </div>
    `;

    // return template;
    return {template : template, templateData: data};

}

function new_services_section1(sectionName){

  let template = '';
  let data = portfolio_data[sectionName];
  let serviceTemplate = '';
  if(data.services && data.services.values && data.services.values.length > 0){
      data.services.values.forEach((item, index) => {
        let iconTemplate = '';
        let delayTemplate = '';
        let animation = '';

        if(item.icon && item.icon.type === "font-awesome"){
            iconTemplate += '<div class="icon"><i class="fa fa-'+item.icon.name+'" style="'+item.icon.style+'" aria-hidden="true"></i></div>';
        }
        animation += getAotAnimation(item);
        serviceTemplate += `
            <div class="custom-progress-block"  `+animation+` style="display: inline-block; width: 48%; `+item.style+`">
              `+iconTemplate+`
              <h4 class="title"><a href="">`+item.name+`</a></h4>
              <p class="description">`+item.desc+`</p>
            </div>
        `;
      })
  }
  template += `
        <div class="container">
            <div>
                `+get_header_template(data.header)+`
            </div>
            <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                `+serviceTemplate+`
            </div>
        </div>
  `;

  return template;
}

function new_testimonials_section(sectionName, editable){
    let template = '';
    let data = portfolio_data[sectionName];
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let sectionsTemplate = '';

    if(data.block && data.block.sections && data.block.sections.length > 0){
        data.block.sections.forEach((section, sectionIndex) => {
            let animation = '';
            animation += getAotAnimation(section);
            section.parts.forEach((ele, partsIndex) => {
                  let detailsTemplate = sections_template(ele.desc, editable, sectionName, sectionIndex, partsIndex);
                  let id = "section_"+sectionName+'-'+sectionIndex+'-'+partsIndex;
                  let method = '';
                  let dataset = '';
                  let data = '';
                  if(ele.dataset !== undefined && ele.dataset !== ''){
                      let obj = JSON.stringify(ele.dataset);
                      dataset += `data-all='`+obj+`'`;
                  }
                  if(ele.event !== undefined && ele.event !== ''){
                      method += ele.event.eventType+'="'+ele.event.eventName+'"';

                  }
                  if(editable){
                    let onMouseHoverAndMouseOutMethod = 'onmouseover="showHideThreeDotsbtn(this, \''+'mouse_over'+'\')" onmouseout="showHideThreeDotsbtn(this, \''+'mouse_out'+'\')"';

                    sectionsTemplate += `
                          <div class="custom-each-education-section custom-section" id="`+id+`" `+animation+` style="`+ele.sectionStyle+`">
                              <div style="display: inline-block; width: 95%; float: left;">`+detailsTemplate+`</div>
                              <div style="display: inline-block; width: 3%; float: right;">
                                <i id="section_three_dots_btn" class="fa fa-ellipsis-v" aria-hidden="true" style="color: black; "></i>
                              </div>
                          </div>
                    `;
                  }else{
                    sectionsTemplate += `
                          <div class="custom-each-education-section custom-section" id="`+id+`" `+dataset+` `+animation+` `+method+`  style="`+ele.sectionStyle+`">
                              <div>`+detailsTemplate+`</div>
                          </div>
                    `;
                  }

            });
        })
    }
    // <div id="`+threeDotsId+`"  `+onClickThreeDotsBtn+` style="display: none; float: right; width: 3%; position: relative; top: 10px;"><span style="float: right;"><i id="`+threeDotsBtnId+`" class="fa fa-ellipsis-v" aria-hidden="true" style="color: black; "></i></span></div>

    template += `
          <div class="container">

              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+sectionsTemplate+`
              </div>
          </div>
    `;
    // <div>
    //     `+header_section_template(data.header, editable)+`
    // </div>
    // console.log("template  :: ", template);

    if(editable){
      return {template : template, templateData: data};
    }else{
      return template;
    }
}

function new_services_section(sectionName){
    let template = '';
    let data = portfolio_data[sectionName];
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let sectionsTemplate = '';
    if(data.block && data.block.sections && data.block.sections.length > 0){
        data.block.sections.forEach((section, sectionIndex) => {
            let animation = '';
            animation += getAotAnimation(section);
            section.parts.forEach((ele, partsIndex) => {
                  let detailsTemplate = '';
                  detailsTemplate += getGridTemplate(ele.desc, sectionName, sectionIndex, partsIndex);
                  sectionsTemplate += `
                        <div class="custom-each-education-section" id="custom_each_education_section" `+animation+` style="`+ele.sectionStyle+`">
                            <div>`+detailsTemplate+`</div>
                        </div>
                  `;
            });
        })
    }
    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+sectionsTemplate+`
              </div>
          </div>
    `;
    // return {template : template, templateData: data};
    return template;
}

function edit_services_section(sectionName){
    let template = '';
    let data = portfolio_data[sectionName];
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let sectionsTemplate = '';
    if(data.block && data.block.sections && data.block.sections.length > 0){
        data.block.sections.forEach((section, sectionIndex) => {
            let animation = '';
            animation += getAotAnimation(section);
            section.parts.forEach((ele, partsIndex) => {
                  let detailsTemplate = '';
                  detailsTemplate += getGridEditTemplate(ele.desc, sectionName, sectionIndex, partsIndex);
                  sectionsTemplate += `
                        <div class="custom-each-education-section" id="custom_each_education_section" `+animation+` style="`+ele.sectionStyle+`">
                            <div>`+detailsTemplate+`</div>
                        </div>
                  `;
            });
        })
    }
    template += `
          <div class="container">
              <div>
                  `+get_header_edit_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+sectionsTemplate+`
              </div>
          </div>
    `;
    return {template : template, templateData: data};
    // return template;
}

function education_section(sectionName){
  let template = '';
  let allEducationTemplate = '';
  let data = portfolio_data[sectionName];

    data.educations.values.forEach((item, index) => {
      let subDegreeTemplate = '';
      if((item.degreeStartYear && item.degreeStartYear !== '') && (item.degreeEndYear && item.degreeEndYear !== '')){
          subDegreeTemplate += `
            <p>
              <span>`+item.degreeStartYear+` </span>
              <span> - </span>
              <span>`+item.degreeEndYear+`</span>
            </p>
          `;
      }
      let animation = '';
      {
          if(item.animationType && item.animationType !== ''){
            animation += 'data-aos="'+item.animationType+'" ';
          }
          if(item.animationDelay && item.animationDelay !== ''){
              animation += 'data-aos-delay="'+item.animationDelay+'" ';
          }
      }
      allEducationTemplate += `
            <div class="custom-each-education-section" id="custom_each_education_section" `+animation+` style="`+item.sectionStyle+`">
                <div style="width: 14px; height: 14px; border-radius: 50%; position: relative; left: -21px; top: -2px">
                    <img src="static/img/generic_portfolio_image/icon/education_icon.png" alt="" style="width: 20px; height: 20px; position: relative; left: -15px; top: -2px;"/>
                </div>
                <div class="custom-education-section-degree">
                    <h4  style="font-weight: 600;"><span>`+item.degree+`</span></h4>
                      `+subDegreeTemplate+`
                    <p  style="font-weight: 400;">
                      <span><em>`+item.degreeInstitute+`</em></span>
                    </p>
                    <div  style="font-weight: 400;">
                      <span>`+item.degreeDesc+`</span>
                    </div>
                </div>

            </div>
      `;
  })
  template += `

        <div class="container">
            <div>
                `+get_header_template(data.header)+`
            </div>
            <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                `+allEducationTemplate+`
            </div>
        </div>
  `;
  return template;
}

function new_education_section(sectionName){
  let template = '';
  let allEducationTemplate = '';
  let data = portfolio_data[sectionName];
    data.educations.values.forEach((item, index) => {
      let detailsTemplate = '';
      let animation = '';
      {
          if(item.animationType && item.animationType !== ''){
            animation += 'data-aos="'+item.animationType+'" ';
          }
          if(item.animationDelay && item.animationDelay !== ''){
              animation += 'data-aos-delay="'+item.animationDelay+'" ';
          }
      }
      if(item.details && item.details.length > 0){
            detailsTemplate += getDetailsTemplate(item.details);
      }
      allEducationTemplate += `
            <div class="custom-each-education-section" id="custom_each_education_section" `+animation+` style="`+item.sectionStyle+`">
                <div style="width: 14px; height: 14px; border-radius: 50%; position: relative; left: -21px; top: -2px">
                    <img src="static/img/generic_portfolio_image/icon/education_icon.png" alt="" style="width: 20px; height: 20px; position: relative; left: -15px; top: -2px;"/>
                </div>
                <div>`+detailsTemplate+`</div>
            </div>
      `;
  })
  template += `
        <div class="container">
            <div>
                `+get_header_template(data.header)+`
            </div>
            <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                `+allEducationTemplate+`
            </div>
        </div>
  `;

  return template;

}

function edit_education_section(sectionName){
  let template = '';
  let allEducationTemplate = '';
  let data = portfolio_data[sectionName];
    data.educations.values.forEach((item, sectionIndex) => {
      let detailsTemplate = '';
      let animation = '';
      {
          if(item.animationType && item.animationType !== ''){
            animation += 'data-aos="'+item.animationType+'" ';
          }
          if(item.animationDelay && item.animationDelay !== ''){
              animation += 'data-aos-delay="'+item.animationDelay+'" ';
          }
      }
      if(item.details && item.details.length > 0){
            detailsTemplate += getGridEditTemplate(item.details, sectionName, sectionIndex, null);
      }
      allEducationTemplate += `
            <div class="custom-each-education-section" id="custom_each_education_section" `+animation+` style="`+item.sectionStyle+`">
                <div style="width: 14px; height: 14px; border-radius: 50%; position: relative; left: -21px; top: -2px">
                    <img src="static/img/generic_portfolio_image/icon/education_icon.png" alt="" style="width: 20px; height: 20px; position: relative; left: -15px; top: -2px;"/>
                </div>
                <div>`+detailsTemplate+`</div>
            </div>
      `;
  })
  template += `
        <div class="container">
            <div>
                `+get_header_edit_template(data.header)+`
            </div>
            <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                `+allEducationTemplate+`
            </div>
        </div>
  `;

  // return template;
  return {template : template, templateData: data};
}

function workexp_section(sectionName){
    let data = portfolio_data[sectionName];
    let template = '';
    let allWorkExp = '';
    data.experiences.values.forEach((item, index) => {
        let descTemplate = '';
        if(item.expDesc !== null && item.expDesc !== undefined && item.expDesc.length > 0){
            descTemplate += '<ul>';
            item.expDesc.forEach((exp, index) => {
                descTemplate += '<li>'+exp.shortExpDesc+'</li>';
            });
            descTemplate += '</ul>';
        }
        let animation = '';
        {
            if(item.animationType && item.animationType !== ''){
              animation += 'data-aos="'+item.animationType+'" ';
            }
            if(item.animationDelay && item.animationDelay !== ''){
                animation += 'data-aos-delay="'+item.animationDelay+'" ';
            }
        }
        allWorkExp += `
              <div class="custom-each-work-exp-section" id="custom_each_work_exp_section" `+animation+` style="`+item.sectionStyle+`">
                  <div style="width: 14px; height: 14px; border-radius: 50%; position: relative; left: -21px; top: -2px;">
                      <img src="static/img/generic_portfolio_image/icon/work_experience_icon.png" alt="" style="width: 20px; height: 20px; position: relative; left: -15px; top: -2px;"/>
                  </div>
                  <div class="custom-education-section-degree">
                      <h4 style="font-weight: 600;"><span>`+item.companyProfile+`</span></h4>
                      <p style="font-weight: 400;">
                        <span>`+item.companyProfileStartYear+` </span>
                        <span>`+item.companyProfileEndYear+`</span>
                      </p>
                      <p style="font-weight: 400;">
                        <span><em>`+item.companyName+`</em></span>
                      </p>
                      <div style="font-weight: 400;">
                        <span>`+descTemplate+`</span>
                      </div>
                  </div>

              </div>
        `;
    })
    // <span> - </span>

    template += `

          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+allWorkExp+`
              </div>
          </div>
    `;
    return template;
}

function edit_workexp_section(sectionName){
    let data = portfolio_data[sectionName];
    let template = '';
    let allWorkExp = '';
    data.experiences.values.forEach((item, sectionIndex) => {
        let descTemplate = '';
        let detailsTemplate = '';
        if(item.expDesc !== null && item.expDesc !== undefined && item.expDesc.length > 0){
            descTemplate += '<ul>';
            item.expDesc.forEach((exp, index) => {
                descTemplate += '<li>'+exp.shortExpDesc+'</li>';
            });
            descTemplate += '</ul>';
        }

        if(item.details && item.details.length > 0){
              // detailsTemplate += getDetailsTemplate(item.details);
              detailsTemplate += getGridEditTemplate(item.details, sectionName, sectionIndex, null);

        }

        let animation = '';
        {
            if(item.animationType && item.animationType !== ''){
              animation += 'data-aos="'+item.animationType+'" ';
            }
            if(item.animationDelay && item.animationDelay !== ''){
                animation += 'data-aos-delay="'+item.animationDelay+'" ';
            }
        }
        allWorkExp += `
              <div class="custom-each-work-exp-section" id="custom_each_work_exp_section" `+animation+` style="`+item.sectionStyle+`">
                  <div style="width: 14px; height: 14px; border-radius: 50%; position: relative; left: -21px; top: -2px;">
                      <img src="static/img/generic_portfolio_image/icon/work_experience_icon.png" alt="" style="width: 20px; height: 20px; position: relative; left: -15px; top: -2px;"/>
                  </div>
                  <div>`+detailsTemplate+`</div>
              </div>
        `;
    })
    template += `

          <div class="container">
              <div>
                  `+get_header_edit_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+allWorkExp+`
              </div>
          </div>
    `;
    // return template;
    return {template : template, templateData: data};

}

function new_workexp_section(sectionName){
    let data = portfolio_data[sectionName];
    let template = '';
    let allWorkExp = '';
    data.experiences.values.forEach((item, index) => {
        let descTemplate = '';
        let detailsTemplate = '';
        if(item.expDesc !== null && item.expDesc !== undefined && item.expDesc.length > 0){
            descTemplate += '<ul>';
            item.expDesc.forEach((exp, index) => {
                descTemplate += '<li>'+exp.shortExpDesc+'</li>';
            });
            descTemplate += '</ul>';
        }
        if(item.details && item.details.length > 0){
              detailsTemplate += getDetailsTemplate(item.details);
        }
        let animation = '';
        {
            if(item.animationType && item.animationType !== ''){
              animation += 'data-aos="'+item.animationType+'" ';
            }
            if(item.animationDelay && item.animationDelay !== ''){
                animation += 'data-aos-delay="'+item.animationDelay+'" ';
            }
        }
        allWorkExp += `
              <div class="custom-each-work-exp-section" id="custom_each_work_exp_section" `+animation+` style="`+item.sectionStyle+`">
                  <div style="width: 14px; height: 14px; border-radius: 50%; position: relative; left: -21px; top: -2px;">
                      <img src="static/img/generic_portfolio_image/icon/work_experience_icon.png" alt="" style="width: 20px; height: 20px; position: relative; left: -15px; top: -2px;"/>
                  </div>
                  <div>`+detailsTemplate+`</div>
              </div>
        `;
    })
    template += `

          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+allWorkExp+`
              </div>
          </div>
    `;
    return template;
}

function latest_work_section(sectionName){
    let data = portfolio_data[sectionName];
    let template = '';
    let imagesTemplate = '';
    let filterTemplate = '';
    if(data.works && data.works.values && data.works.values.length > 0){
          imagesTemplate = '<div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">';
          filterTemplate = '<ul id="portfolio-flters">';

          if(data.works.category.length > 0){
              data.works.category.forEach((item, index) => {
                  if(item === 'all'){
                    filterTemplate += `
                        <li data-filter="*" class="filter-active">`+item+`</li>
                    `;
                  }else{
                    filterTemplate += `
                        <li data-filter=".`+item+`">`+item+`</li>
                    `;
                  }
              })
          }

          data.works.values.forEach((item, index) => {
              imagesTemplate += `
                  <div class="col-lg-4 col-md-6 portfolio-item `+item.filterName+`">
                    <div class="portfolio-wrap">
                      <img src="`+item.imgUrl+`" class="img-fluid" style="height: 280px; width: 100%;`+item.style+`" alt="">
                      <div class="portfolio-links">
                        <a href="`+item.imgUrl+`" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                      </div>
                    </div>
                  </div>
              `;

          })
          imagesTemplate += '</div>';
          filterTemplate += '</ul>';
    }

    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="row" data-aos="fade-up">
                <div class="col-lg-12 d-flex justify-content-center">
                  `+filterTemplate+`
                </div>
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+imagesTemplate+`
              </div>
          </div>
    `;
    return template;
}

function services_section(sectionName){
    let template = '';
    let data = portfolio_data[sectionName];
    let serviceTemplate = '';
    if(data.services && data.services.values && data.services.values.length > 0){
        data.services.values.forEach((item, index) => {
          let iconTemplate = '';
          let delayTemplate = '';
          if(item.icon && item.icon.type === "font-awesome"){
              iconTemplate += '<div class="icon"><i class="fa fa-'+item.icon.name+'" style="'+item.icon.style+'" aria-hidden="true"></i></div>';
          }
          if(item.aosDelay && item.aosDelay !== ''){
              delayTemplate += 'data-aos-delay="'+item.aosDelay+'"';
          }
          serviceTemplate += `
            <div class="col-lg-4 col-md-6 icon-box"  >
              `+iconTemplate+`
              <h4 class="title"><a href="">`+item.name+`</a></h4>
              <p class="description">`+item.desc+`</p>
            </div>
          `;
        })
    }
    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="row" data-aos="fade-up">
                  `+serviceTemplate+`
              </div>
          </div>
    `;
    return template;
}

function testimonials_section(sectionName){
  let template = '';
  let data = portfolio_data[sectionName];
  let testimonialsTemplate = '';
  if(data.testimonials && data.testimonials.values && data.testimonials.values.length > 0){
        let delayTemplate = '';
        data.testimonials.values.forEach((item, index) => {
            let animation = '';
            {
                if(item.animationType && item.animationType !== ''){
                  animation += 'data-aos="'+item.animationType+'" ';
                }
                if(item.animationDelay && item.animationDelay !== ''){
                    animation += 'data-aos-delay="'+item.animationDelay+'" ';
                }
            }

            testimonialsTemplate += `
                <div class="testimonial-item"  `+animation+` style="width: 29%; display: inline-block;">
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    `+item.quotes+`
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src="`+item.imgUrl+`" class="testimonial-img" alt="">
                  <h3>`+item.name+`</h3>
                  <h4>`+item.designation+`</h4>
                </div>
            `;
        })
  }
  template += `
        <div class="container">
            <div>
                `+get_header_template(data.header)+`
            </div>
            <div class="owl-carousel testimonials-carousel " data-aos="fade-up" style="width: 100%;">
                `+testimonialsTemplate+`
            </div>
        </div>
  `;
  return template;
}

function languages_section(sectionName){
  let template = '';
  let data = portfolio_data[sectionName];
  let languagesTemplate = '';
  if(data.languages && data.languages.values && data.languages.values.length > 0){
        data.languages.values.forEach((item, index) => {
              let motherToungeTemplate = '';
              let readTemplate = '';
              let writeTemplate = '';
              let animation = '';
              let iconTemplate = '';
              if(item.icon.type === 'fontAwesome'){
                  iconTemplate += `<p><div class="icon"><i class="fa fa-language" style="font-size: 24px; color: #0F71A1; font-family: 'fontawesome';" aria-hidden="true"></i></div></p>`;
              }
              {
                  if(item.animationType && item.animationType !== ''){
                    animation += 'data-aos="'+item.animationType+'" ';
                  }
                  if(item.animationDelay && item.animationDelay !== ''){
                      animation += 'data-aos-delay="'+item.animationDelay+'" ';
                  }
              }
              if(item.motherTongue){
                    motherToungeTemplate += '<span style="float: right; color: #0F71A1; '+item.motherTongue.style+'">'+item.motherTongue.txt+'</span>'
              }
              if(item.read){
                  readTemplate +=  `
                      <div>
                          <span>Read</span>
                          <span style="float: right;"><i class="fa fa-check" style="font-size: 24px; color: green;" aria-hidden="true"></i></span>
                      </div>
                  `;
              }else{
                  readTemplate +=  `
                      <div>
                          <span>Read</span>
                          <span style="float: right;"><i class="fa fa-times" style="font-size: 24px; color: red;" aria-hidden="true"></i></span>
                      </div>
                  `;
              }
              if(item.write){
                  writeTemplate +=  `
                      <div style="margin-top: 10px; ">
                          <span>Write</span>
                          <span style="float: right;"><i class="fa fa-check" style="font-size: 24px; color: green; position: relative; " aria-hidden="true"></i></span>
                      </div>
                  `;
              }else{
                  writeTemplate +=  `
                      <div style="margin-top: 10px; ">
                          <span>Write</span>
                          <span style="float: right;"><i class="fa fa-times" style="font-size: 24px; color: red; position: relative; " aria-hidden="true"></i></span>
                      </div>
                  `;
              }

              if(item.lang !== null && item.lang !== ''){
                  languagesTemplate += `
                  <div class="mob-width-full" `+animation+` style="display: inline-block; width: 30%; `+item.style+`">
                      `+iconTemplate+`
                    <p>
                      <span style="font-size: 18px; color: black; font-weight: 600;">`+item.lang+`</span>
                      <span>`+motherToungeTemplate+`<span>
                    </p>
                    <p>
                      `+readTemplate+`
                      `+writeTemplate+`
                    </p>
                  </div>`;
              }

        })
  }
  template += `
        <div class="container">
            <div>
                `+get_header_template(data.header)+`
            </div>
            <div class="" data-aos="fade-up" style="width: 100%;">
                `+languagesTemplate+`
            </div>
        </div>
  `;
  return template;
}

function contacts_section(sectionName){
    // console.log("!!!!!!!!!!!!!!!!!!!!!!");
    let template = '';
    let data = portfolio_data[sectionName];
    let contactsTemplate = '';
    let formTemplate = '';
    let btnTemplate = '';
    if(data.contacts && data.contacts.values && data.contacts.values.length > 0){
        contactsTemplate += ``;
        data.contacts.values.forEach((item, index) => {
            contactsTemplate += `
              <div class="address mob-width-full ">
                <i class="fa fa-`+item.icon.name+`" style="font-size: 24px; color: #0F71A1;" aria-hidden="true"></i>
                <h4>`+item.key.txt+`</h4>
                <p>`+item.value.txt+`</p>
              </div>
            `;
        })

        contactsTemplate +=`
            <iframe src="`+data.contacts.map.url+`" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
        `;
    }
    if(data.forms.button){
        btnTemplate += `
            <button class="mob-width-full" type="`+data.forms.button.type+`" style="`+data.forms.button.style+`">
                `+data.forms.button.btnTxt+`
            </button>
        `;
    }
    if(data.forms){
        formTemplate += `
            <form action="forms/contact.php" method="post" role="form" class="php-email-form" style="`+data.forms.style+`">
              <div class="form-row">
                <div class="form-group col-md-6 mob-width-full">
                  <label for="name">`+data.forms.field1.level+`</label>
                  <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6 mob-width-full">
                  <label for="name">`+data.forms.field2.level+`</label>
                  <input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group mob-width-full">
                <label for="name">`+data.forms.field3.level+`</label>
                <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group mob-width-full">
                <label for="name">`+data.forms.field4.level+`</label>
                <textarea class="form-control" name="message" rows="14" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="text-center">
                  `+btnTemplate+`
              </div>
            </form>
        `;
    }

    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="mob-width-full"  >
                  <div class=" d-flex align-items-stretch mob-width-full"  style="width: 58%; display: inline-block !important; padding: 20px; background: white; ">
                    <div class="info">
                       `+contactsTemplate+`
                    </div>
                  </div>
                  <div class=" d-flex align-items-stretch mob-width-full"  style="width: 40%; display: inline-block; float: right; padding: 20px; background: white; ">
                        `+formTemplate+`
                  </div>
              </div>
          </div>
    `;
    return template;
}

function createProductListingContainerTemplate(data){
  // console.log("===== createProductListingContainerTemplate fun is calling =====");
  let template = '';
  let eachItemTemplate = '';
  data.forEach((item, index) => {
      eachItemTemplate += `
          <div class="work-item" style="">
              <div>
                  <img src="`+item.img+`"  onclick="onClick(this)" class="w3-hover-opacity custom-portfolio-img" alt="">
              </div>
          </div>
      `;
  })
  template = `
      <div id="productListingContainer" style="width: 100%; display: block;">
        `+eachItemTemplate+`
      </div>
  `;

  return template;
}

function work_section(sectionName, category){
    console.log("======= calling work section function ========");
    let template = '';
    let data = portfolio_data[sectionName];
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
  let data = portfolio_data[sectionName];
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

function header_section(sectionName, requestMenus, editable){
  console.log("============ call header section ==============");
  let template = '';
  let data = portfolio_data[sectionName];
  let profileTemplate = '';
  let menusTemplate = '';
  if(data.profile && data.profile !== '' && data.profile.socialLinks.length > 0){
        let socialTemplate = '';
        data.profile.socialLinks.forEach((item, index) => {
          let iconTemplate = '';
          if(item.icon && item.icon !== '' && item.icon.type === 'bxl'){
              iconTemplate += '<i class="bx bxl-'+item.icon.name+'" style="'+item.icon.name+'"> </i>';
          }
          socialTemplate += '<a href="#" class="'+item.name+'" style="'+item.style+'">'+iconTemplate+'</a>';
        })
        profileTemplate += `
            <div class="profile">
              <img src="`+data.profile.profileImg.imgUrl+`" alt="" class="img-fluid rounded-circle" style="`+data.profile.profileImg.style+`">
              <h1 class="text-light"><a href="index.html">`+data.profile.profileName.name+`</a></h1>
              <div class="social-links mt-3 text-center">
                    `+socialTemplate+`
              </div>
            </div>
        `;
    }
    if(requestMenus && requestMenus !== '' && requestMenus.length > 0){
        let menuTemplate = '';
        requestMenus.forEach((menu, index) => {
                if(menu !== "header"){
                  let item = data.menus[menu];
                  let iconTemplate = '';
                  let listTemplate = '';
                  if(item && item.icon && item.icon !== '' && item.icon.type === 'bx'){
                      iconTemplate += '<i class="bx bx-'+item.icon.name+'" style="'+item.icon.style+'"></i>';
                  }
                  if(editable){
                      listTemplate += '<li ><a href="#" onclick="onClickSideMenus(\''+item.name+'\')"> '+iconTemplate+' <span>'+item.name+'</span></a></li>';
                  }else{
                      if(item.name.toLowerCase() === 'settings'){
                        let method = 'onclick="openSectionsSetupModal()"';
                        listTemplate += '<li '+method+' style="background: orange; color: white;"><a href="#"> '+iconTemplate+' <span>'+item.name+'</span></a></li>';
                      }else{
                        listTemplate += '<li ><a href="#'+item.name.toLowerCase()+'"> '+iconTemplate+' <span>'+item.name+'</span></a></li>';
                      }
                  }
                  if(item && item.name === "Home"){
                      menuTemplate += '<li class="active"><a href="index.html"> '+iconTemplate+' <span>'+item.name+'</span></a></li>';
                  }else{
                      menuTemplate += listTemplate;
                  }
                }

        })
        menusTemplate += `
          <nav class="nav-menu">
            <ul>
              `+menuTemplate+`
            </ul>
          </nav>
        `;
    }
    template += `
      <header id="header">
        <div class="d-flex flex-column">
        <div>`+profileTemplate+`</div>
        <div>`+menusTemplate+`</div>
        </div>
      </header>
    `;
    return template;
}

function edit_header_section(sectionName, requestMenus){
  console.log("============ call edit header section ==============");
  let template = '';
  let data = portfolio_data[sectionName];
  let profileTemplate = '';
  let menusTemplate = '';
  if(data.profile && data.profile !== '' && data.profile.socialLinks.length > 0){
        let socialTemplate = '';
        data.profile.socialLinks.forEach((item, index) => {
          let iconTemplate = '';
          if(item.icon && item.icon !== '' && item.icon.type === 'bxl'){
              iconTemplate += '<i class="bx bxl-'+item.icon.name+'" style="'+item.icon.name+'"> </i>';
          }
          socialTemplate += '<a href="#" class="'+item.name+'" style="'+item.style+'">'+iconTemplate+'</a>';
        })
        profileTemplate += `
            <div class="profile">
              <img src="`+data.profile.profileImg.imgUrl+`" alt="" class="img-fluid rounded-circle" style="`+data.profile.profileImg.style+`">
              <h1 class="text-light"><a href="index.html">`+data.profile.profileName.name+`</a></h1>
              <div class="social-links mt-3 text-center">
                    `+socialTemplate+`
              </div>
            </div>
        `;
    }
    if(requestMenus && requestMenus !== '' && requestMenus.length > 0){
        let menuTemplate = '';
        requestMenus.forEach((menu, index) => {
                if(menu !== "header" && menu !== "typed"){
                  let item = data.menus[menu];
                  let iconTemplate = '';
                  if(item && item.icon && item.icon !== '' && item.icon.type === 'bx'){
                      iconTemplate += '<i class="bx bx-'+item.icon.name+'" style="'+item.icon.style+'"></i>';
                  }
                  if(item && item.name === "Home"){
                      menuTemplate += '<li class="active"><a href="index.html"> '+iconTemplate+' <span>'+item.name+'</span></a></li>';
                  }else{
                      // menuTemplate += '<li ><a href="#'+item.name.toLowerCase()+'"> '+iconTemplate+' <span>'+item.name+'</span></a></li>';
                      menuTemplate += '<li ><a href=""> '+iconTemplate+' <span>'+item.name+'</span></a></li>';

                  }
                }

        })
        menusTemplate += `
          <nav class="nav-menu">
            <ul>
              `+menuTemplate+`
            </ul>
          </nav>
        `;
    }
    template += `
      <header id="header">
        <div class="d-flex flex-column">
        <div>`+profileTemplate+`</div>
        <div>`+menusTemplate+`</div>
        </div>
      </header>
    `;
    // return template;
    return {template : template, templateData: data};

}

function typed_section(sectionName){
    let data = portfolio_data[sectionName];
    return data;
}

function skills_section(sectionName){
    let template = '';
    let data = portfolio_data[sectionName];
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    if(data.skills && data.skills.primarySkill && data.skills.primarySkill.values.length > 0){
        data.skills.primarySkill.values.forEach((item, index) => {
            let animation = '';
            {
                if(item.animationType && item.animationType !== ''){
                  animation += 'data-aos="'+item.animationType+'" ';
                }
                if(item.animationDelay && item.animationDelay !== ''){
                    animation += 'data-aos-delay="'+item.animationDelay+'" ';
                }
            }
            if(data.skills.additionalSkill && data.skills.additionalSkill.values.length > 0){
                additionalSkillsetTemplate = createAdditionalTemplate(data.skills.additionalSkill);
            }
            progressTemplate += `
                <div class="progress custom-progress-block"  `+animation+` style="display: inline-block; `+item.style+`">
                  <span class="skill">
                    <span>`+item.name+`</span>
                    <i class="val">`+item.percent+`%</i>
                  </span>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar" role="progressbar" aria-valuenow="`+item.percent+`" aria-valuemin="0" aria-valuemax="100" style="width: `+item.percent+`%; `+item.progressBarStyle+`"></div>
                  </div>
                </div>
            `;
        })
    }
    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+progressTemplate+`
              </div>
              <div>
                `+additionalSkillsetTemplate+`
              </div>
          </div>
    `;
    return template;
}

function new_skills_section(sectionName){
    let template = '';
    let data = portfolio_data[sectionName];
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let sectionsTemplate = '';
    if(data.newSkills && data.newSkills.sections && data.newSkills.sections.length > 0){
        data.newSkills.sections.forEach((item, index) => {
            let animation = '';
            {
                if(item.animationType && item.animationType !== ''){
                  animation += 'data-aos="'+item.animationType+'" ';
                }
                if(item.animationDelay && item.animationDelay !== ''){
                    animation += 'data-aos-delay="'+item.animationDelay+'" ';
                }
            }
            item.details.forEach((ele, index) => {
                  let detailsTemplate = '';
                  detailsTemplate += getGridTemplate(ele.desc);
                  sectionsTemplate += `
                        <div class="custom-each-education-section" id="custom_each_education_section" `+animation+` style="`+ele.sectionStyle+`">
                            <div>`+detailsTemplate+`</div>
                        </div>
                  `;
            });
        })
    }
    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+sectionsTemplate+`
              </div>
          </div>
    `;

    return template;
    // return {template : template, templateData: data};
}

function edit_skills_section(sectionName){
    let template = '';
    let data = portfolio_data[sectionName];
    let progressTemplate = '';
    let additionalSkillsetTemplate = '';
    let sectionsTemplate = '';
    if(data.newSkills && data.newSkills.sections && data.newSkills.sections.length > 0){
        data.newSkills.sections.forEach((item, sectionIndex) => {
            let animation = '';
            {
                if(item.animationType && item.animationType !== ''){
                  animation += 'data-aos="'+item.animationType+'" ';
                }
                if(item.animationDelay && item.animationDelay !== ''){
                    animation += 'data-aos-delay="'+item.animationDelay+'" ';
                }
            }
            item.details.forEach((ele, partsIndex) => {
                  let detailsTemplate = '';
                  let data = {

                  }
                  detailsTemplate += getGridEditTemplate(ele.desc, sectionName, sectionIndex, partsIndex);
                  sectionsTemplate += `
                        <div class="custom-each-education-section" id="custom_each_education_section" `+animation+` style="`+ele.sectionStyle+`">
                            <div>`+detailsTemplate+`</div>
                        </div>
                  `;
            });
        })
    }
    template += `
          <div class="container">
              <div>
                  `+get_header_edit_template(data.header)+`
              </div>
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
                  `+sectionsTemplate+`
              </div>
          </div>
    `;
    return {template : template, templateData: data};
}

function projects_section(sectionName){
    let template = '';
    let langTemplate = '';
    let headingPrefixCharTemplate = '#';
    let additionalTemplate = '';
    let data = portfolio_data[sectionName];
    template += `
        <div class="container" style="">
            <div>
                `+get_header_template(data.header)+`
            </div>
      `;
    template += '<div class="custom-project-content-block">';
    if(data.projects && data.projects !== '' && data.projects.values.length > 0){
        let descTemplate = '';
        let headerFullDescTemplate = '';
        data.projects.values.forEach((item, index) => {
          let separatorTemplate = '';
          descTemplate = '';
          headerFullDescTemplate = '';
          if(item.additionalFeature ){
              additionalTemplate = createAdditionalTemplate(item.additionalFeature);
          }
          if(item.separator && item.separator !== ''){
              separatorTemplate += item.separator;
          }

          if(item.header.fullDesc && item.header.fullDesc !== '' && item.header.fullDesc.details.length > 0 ){
              headerFullDescTemplate += '<div style="width: 100%;">';
              item.header.fullDesc.details.forEach((ele, index) => {
                headerFullDescTemplate += `
                    <div class="custom-project-header-desc-section" style="`+ele.secStyle+`">
                        <span style="`+ele.key.style+`">`+ele.key.name+`</span>
                        <span style="`+ele.value.style+`">`+ele.value.name+`</span>
                    </div>
                `;
              });
              headerFullDescTemplate += '</div>';
          }

          if(item.header.desc && item.header.desc !== '' && item.header.desc.details.length > 0 ){
              descTemplate += '<div style="width: 100%;">';
              item.header.desc.details.forEach((ele, index) => {
                descTemplate += `
                    <div class="custom-project-header-desc-section" style="display: inline-block;`+item.header.desc.secStyle+`">
                        <span style="`+ele.key.style+`">`+ele.key.name+`</span>
                        <span style="`+ele.value.style+`">`+ele.value.name+`</span>
                    </div>
                `;
              });
              descTemplate += '</div>';
          }

          template += `
            <div class="each-project-section" style="`+item.sectionStyle+`">
                <div class="">
                  <div>
                      `+headerFullDescTemplate+`
                  </div>
                  <div class=" custom-language-section" style="width: 100%;">
                    `+additionalTemplate+`
                  </div>
                <div>
                <div>`+separatorTemplate+`</div>
            </div>
          `;
        })
        template += '</div>';
    }
    return template;
  }

function new_projects_section(sectionName){
    let data = portfolio_data[sectionName];
    let template = '';
    let additionalTemplate = '';
    let projectsTemplate = '';
    if(data.projects && data.projects !== '' && data.projects.values.length > 0){

        data.projects.values.forEach((item, index) => {
          let separatorTemplate = '';
          let descTemplate = '';
          let headerFullDescTemplate = '';
          descTemplate = '';
          headerFullDescTemplate = '';

          if(item.additionalFeature ){
              additionalTemplate = createAdditionalTemplate(item.additionalFeature);
          }
          if(item.separator && item.separator !== ''){
              separatorTemplate += item.separator;
          }

          if(item.header.fullDesc && item.header.fullDesc !== '' && item.header.fullDesc.details.length > 0 ){
              headerFullDescTemplate += '<div style="width: 100%;">';
              item.header.fullDesc.details.forEach((ele, index) => {
                headerFullDescTemplate += `
                    <div class="custom-project-header-desc-section" style="`+ele.secStyle+`">
                        <span style="`+ele.key.style+`">`+ele.key.name+`</span>
                        <span style="`+ele.value.style+`">`+ele.value.name+`</span>
                    </div>
                `;
              });
              headerFullDescTemplate += '</div>';
          }

          if(item.header.desc && item.header.desc !== '' && item.header.desc.details.length > 0 ){
              descTemplate += '<div style="width: 100%;">';
              item.header.desc.details.forEach((ele, index) => {
                descTemplate += `
                    <div class="custom-project-header-desc-section" style="display: inline-block;`+item.header.desc.secStyle+`">
                        <span style="`+ele.key.style+`">`+ele.key.name+`</span>
                        <span style="`+ele.value.style+`">`+ele.value.name+`</span>
                    </div>
                `;
              });
              descTemplate += '</div>';
          }

          projectsTemplate += `
            <div class="each-project-section" style="`+item.sectionStyle+`">
                <div class="" style="">
                  <div >`+headerFullDescTemplate+`</div>
                  <div >`+descTemplate+`</div>
                  <div >`+additionalTemplate+`</div>
                </div>
            </div>
          `;
        })
    }

    template += `
          <div class="container">
              <div>
                  `+get_header_template(data.header)+`
              </div>
              <div style="width: 100%;">
                `+projectsTemplate+`
              </div>
          </div>
    `;

    return template;
}

function activities_section(sectionName){
  let template = '';
  let data = portfolio_data[sectionName];
  let additionalSkillsetTemplate = '';
  if(data.activities && data.activities.values.length > 0){
      data.activities.values.forEach((item, index) => {
          let animation = '';
          {
              if(item.animationType && item.animationType !== ''){
                animation += 'data-aos="'+item.animationType+'" ';
              }
              if(item.animationDelay && item.animationDelay !== ''){
                  animation += 'data-aos-delay="'+item.animationDelay+'" ';
              }
          }
          if(data.activities.values.length > 0){
              additionalSkillsetTemplate = createAdditionalTemplate(data.activities);
          }

      })
  }
  template += `
        <div class="container">
            <div>
                `+get_header_template(data.header)+`
            </div>

            <div>
              `+additionalSkillsetTemplate+`
            </div>
        </div>
  `;
  return template;
}

function update_section_data(sectionData){
  console.log("===== section data : ", sectionData);
  portfolio_data[sectionData.sectionName] = sectionData;
  // console.log("@@@ after update section data :: ", portfolio_data[sectionData.sectionName]);
}


function update_block_data(request){
    console.log("@@@ sec name :: ", request.sectionName);
    console.log("@@@ sec index :: ", request.sectionIndex);
    console.log("@@@ parts index :: ", request.partsIndex);
    console.log("@@@ item index :: ", request.itemIndex);
    // console.log("@@@ prop name :: ", request.propName);
    // console.log("@@@ prop value :: ", request.propValue);
    if(request.actionType === "edit_block_item"){
      if(request.propName === 'name'){
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].key.name = request.propValue;

      }else if(request.propName === 'value'){
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].value.name = request.propValue;
      }
    }else if(request.actionType === "delete_item"){
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex, 1);
    }else if(request.actionType === "add_item_on_top"){
        let newTextElement = {type: 'text', key: {name: '', style: ''}, value: {name: 'Type your content here...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, secStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex, 0, newTextElement);
    }else if(request.actionType === "add_item_on_below"){
        let newTextElement = {type: 'text', key: {name: '', style: ''}, value: {name: 'added text below element...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, secStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        let customIndex = (parseInt(request.itemIndex) + 1);
        console.log("@@@ custom index :: ", customIndex);
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(customIndex, 0, newTextElement);
        // console.log("@@@ after add below item block data :: ", JSON.stringify(portfolio_data[request.sectionName]));
    }else if(request.actionType === 'save_updated_style'){
      portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].secStyle = request.secStyle;
      portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].key.style = request.itemStyle;


    }
    // console.log("@@@ after edit block data :: ", JSON.stringify(portfolio_data[request.sectionName]));
}

function get_section_data(sectionName){
  let data = portfolio_data[sectionName];
  return data;
}

let generic_portfolio_functionality_mapping = {

    about_section: new_about_section,

    about_edit_section: edit_about_section,

    education_section: new_education_section,

    edit_education_section: edit_education_section,

    facts_section: new_facts_section,

    edit_facts_section: edit_facts_section,

    skills_section: new_skills_section,

    edit_skills_section: edit_skills_section,

    workexp_section: new_workexp_section,

    edit_workexp_section: edit_workexp_section,

    services_section: new_services_section,

    edit_services_section: edit_services_section,

    testimonials_section: new_testimonials_section,

    languages_section: languages_section,

    contacts_section: contacts_section,

    work_section: work_section,

    workcat_list_section: workcat_list_section,

    header_section: header_section,

    typed_section: typed_section,

    projects_section: new_projects_section,

    activities_section: activities_section,

    update_section_data: update_section_data,

    update_block_data: update_block_data,

    get_section_data : get_section_data,



}


module.exports.generic_portfolio_functionality_mapping = generic_portfolio_functionality_mapping;
