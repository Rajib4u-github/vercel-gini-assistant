const promise = require("promise");
const request = require("request");
const ROOT_DIR = require("path").resolve();
var generic_portfolio_data = require('./store/generic_portfolio_data.js');
let portfolio_data = generic_portfolio_data.portfolio_data;
// let default_style = generic_portfolio_data.default_style;
let default_style = generic_portfolio_data.portfolio_data["default_style"];


console.log("!!!! default_style : ", default_style.themeColor);

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
      <div style="`+item.secStyle+`">
        <span><input type="text" value="`+item.key.name+`" `+onKeyUpInputMethodName+` class="`+classTemplate+`" style="font-size: 32px; position: relative; left: 7px; font-weight: 600; color: black; padding: 0px; width: 13%; `+item.key.style+`" /></span>
        <span style="font-size: 26px; font-weight: 400; color: grey; ">/</span>
        <span><input type="text" value="`+item.value.name+`" `+onKeyUpInputMethodValue+` style="font-size: 18px;position: relative; left: -7px; font-weight: 400; padding: 0px; width: 13%; `+item.value.style+`" /></span>
      </div>
    `;
  }else{
    template += `
      <div style="float: right;`+item.secStyle+`">
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

function getColorPallateTemplate(ele){
    console.log("====== calling get color pallate template ======");
    let template = '';
    let default_style = portfolio_data["default_style"];
    console.log("\n\n@@@ default_style: ", default_style);
    if(ele.key.type === 'custom'){
        let key = ele.key.name.split(".");
        let propValue = null;
        if(key[0] === 'default_style'){
            propValue = default_style[key[1]];
            template += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+propValue+'" style="'+ele.key.style+'">';

        }
        console.log("custom color name :: ", propValue);
    }else{
      if(ele.key.name !== undefined || ele.key.name !== ''){
          template += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+ele.key.name+'" style="'+ele.key.style+'">';
      }
    }

    return template;
}

function getGridTemplate(data, sectionName, sectionIndex, partsIndex){
  let template = '<div style="width: 100%;">';
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

    if(ele.isSelected !== undefined && ele.isSelected !== ''){
        if(ele.isSelected.state){
            additionStyle += ele.isSelected.style.split("?")[0];
            additionClass += ele.isSelected.class.split("?")[0];
        }else{
            additionStyle += ele.isSelected.style.split("?")[1];
            additionClass += ele.isSelected.class.split("?")[1];
        }
    }
    if(ele.event !== undefined && ele.event !== ''){
        method += ele.event.eventType+'="'+ele.event.eventName+'"';
    }
    if(ele.type === 'text'){
        let iconTemplate = '';
        let classTemplate = '';
        if(ele.key.class !== undefined ){
          classTemplate += 'class="'+ele.key.class+'"';
        }
        subTemplate += `
            <span `+classTemplate+` style="`+ele.key.style+`">`+ele.key.name+`</span>
        `;
    }else if(ele.type === "button"){
        let classTemplate = '';
        // let elementId = 'btn_'+id;
        if(ele.key.class !== undefined || ele.key.class !== ''){
            classTemplate = ele.key.class;
        }
        subTemplate += `
          <button type="button" id="`+elementId+`" `+method+` name="" class="`+classTemplate+`" style="`+ele.key.style+`">`+ele.key.name+`</button>
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
      let classTemplate = '';
      if(ele.details.class !== undefined || ele.details.class !== ''){
          classTemplate += ele.details.class;
      }
      if(ele.secClass !== undefined || ele.secClass !== ''){
          secClass += ele.secClass;
      }

      if(ele.details.name && ele.details.type === "font-awesome"){
          let themeClasses = '';
          if(ele.details.class !== undefined ){
              themeClasses += ele.details.class;
          }
          subTemplate += '<div class="icon" id="'+inputId+'"><i class="icon fa fa-'+ele.details.name+' '+themeClasses+' '+classTemplate+'" style="'+ele.details.style+'" aria-hidden="true"></i></div>';
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
            let classTemplate = '';
            if(ele.key.class !== undefined || ele.key.class !== ''){
                classTemplate += ele.key.class;
            }
            if(ele.key.name !== ''){
                valueTemplate += 'value="'+ele.key.name+'"';
            }
            subTemplate += `<input type="text" id="`+inputId+`" class="`+classTemplate+`"  style="display: inline-block; border: 1px solid `+default_style.themeColor+`; `+ele.key.style+`"  `+valueTemplate+`/>`;
        }
    }else if(ele.type === "input-type-textarea"){

        if(ele.key.name !== null){
            let valueTemplate = '';
            let classTemplate = '';
            if(ele.key.class !== undefined || ele.key.class !== ''){
                classTemplate += ele.key.class;
            }
            if(ele.key.name !== ''){
                valueTemplate += 'value="'+ele.key.name+'"';
            }
            subTemplate += `<textarea id="`+inputId+`" class="`+classTemplate+`"  row="40" name="w3review" style="display: inline-block;  width: 100%; height: 100%; overflow: hidden; border: 1px solid `+default_style.themeColor+`; `+ele.key.style+`" >`+valueTemplate+`</textarea>`;
        }
    }else if(ele.type === 'color'){
      // if(ele.key.name !== undefined || ele.key.name !== ''){
      //     subTemplate += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+ele.key.name+'" style="'+ele.key.style+'">';
      // }
      subTemplate += getColorPallateTemplate(ele);

    }else if(ele.type === 'theme'){
        let name = ele.key.name.split(".");
        let theme = portfolio_data[name[0]][name[1]];
        theme = JSON.stringify(theme);
        let dataset = `data='`+theme+`'`;
        let themeColor = portfolio_data[name[0]][name[1]].themeColor;
        subTemplate += '<div id="'+elementId+'" '+dataset+' '+method+' style="width: 100%; height: 100px; background: '+themeColor+'"></div>';
    }else if(ele.type === 'wrap-open'){
        subTemplate += '<'+ele.key.name+' id="wrap-oprn" style=" '+ele.key.style+'">';

    }else if(ele.type === 'wrap-close'){
        subTemplate += '</'+ele.key.name+'>';
    }

    if(ele.type !== 'wrap-open' || ele.type !== 'wrap-close'){
      template += `
          <div id="`+itemId+`"  class="grid-section mob-width-full `+secClass+` `+additionClass+`" style="`+ele.secStyle+` `+additionStyle+`">
              `+subTemplate+`
          </div>
      `;
    }

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
                subTemplate += `<textarea id="`+inputId+`" name="w3review"  `+onKeyUpInputMethodName+` style="display: inline-block; outline-color: `+default_style.themeColor+` !important; width: 100%; height: 100%; overflow: hidden; `+ele.key.style+`" >`+ele.key.name+`</textarea>`;
              }else{
                subTemplate += `<input id="`+inputId+`" type="text" `+onKeyUpInputMethodName+` style="display: inline-block; outline-color: `+default_style.themeColor+` !important; `+ele.key.style+`"  value="`+ele.key.name+`"/>`;
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
            subTemplate += `<input type="text"  style="display: inline-block; outline-color: `+default_style.themeColor+` !important; `+ele.key.style+`"  value="`+ele.key.name+`"/>`;
        }
    }else if(ele.type === 'input-type-textarea'){
        if(ele.key.name){
            subTemplate += `<textarea id="w3review" name="w3review"   style="display: inline-block; outline-color: `+default_style.themeColor+` !important; width: 100%; height: 100%; overflow: hidden; `+ele.key.style+`" >`+ele.key.name+`</textarea>`;
        }
    }else if(ele.type === 'color'){
        if(ele.key.name){
            subTemplate += '<input type="color" id="'+ele.key.id+'" name="favcolor" value="'+ele.key.name+'" style="'+ele.key.style+'">';
        }

    }
    if(ele.type === "progress-bar" && sectionName === "skills_section"){
      // console.log("@@@ data:: ", data);
      template += `
          <div id="`+itemId+`" `+onMouseHoverAndMouseOutMethod+` class="grid-section mob-width-full" style="display: inline-block; width: 49%; float: left; `+ele.secStyle+` ">
              <div style="width: 95%; display: inline-block;">`+subTemplate+`</div>
              <div id="`+threeDotsId+`"  `+onClickThreeDotsBtn+` style="display: none; float: right; width: 3%; position: relative; top: 10px;"><span style="float: right;"><i id="`+threeDotsBtnId+`" class="fa fa-ellipsis-v" aria-hidden="true" style="color: black; "></i></span></div>
          </div>
      `;
    }else{
      template += `
          <div id="`+itemId+`" `+onMouseHoverAndMouseOutMethod+` class="grid-section mob-width-full" style=" `+ele.secStyle+` ">
              <div style="width: 95%; display: inline-block;">`+subTemplate+`</div>
              <div id="`+threeDotsId+`"  `+onClickThreeDotsBtn+` style="display: none; float: right; width: 3%; position: relative; top: 10px;"><span style="float: right;"><i id="`+threeDotsBtnId+`" class="fa fa-ellipsis-v" aria-hidden="true" style="color: black; "></i></span></div>
          </div>
      `;
    }

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

function get_add_section_slide_template(){
  let template = '';
  let addSectionMethod = 'onclick="onClickAddSection(this, event)"';
  let animation = getAotAnimation({animationType: defaultAnimationType, animationDelay: 50});
  template += `
        <div class="custom-part" `+animation+` `+addSectionMethod+` style="width: 32%; border-radius: 6px; height: 200px; text-align: center; background: white; float: left; ">
              <div style="padding: 20px;">
                  <div><i class="fa fa-plus" style="font-size: 44px; color: `+default_style.themeColor+`" aria-hidden="true"></i></div>
                  <div style="margin-top: 16px; color: `+default_style.themeColor+`; ">Add Section</div>
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
    let blockTemplate = '';
    if(data.block && data.block.sections && data.block.sections.length > 0){

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

            if(section.sectionClass !== undefined && section.sectionClass !== ''){
                  sectionClass += section.sectionClass;
            }

            if(section.sectionStyle !== undefined && section.sectionStyle !== ''){
                  sectionStyle += section.sectionStyle;
            }

            if(section.isSectionVisible !== undefined && section.isSectionVisible !== ''){
                  if(section.isSectionVisible.state){
                      isSectionVisibleStyle += 'display: block;';
                  }else{
                      isSectionVisibleStyle += 'display: none;';
                  }
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
                  // let partId = "part_"+sectionName+'-'+sectionIndex+'-'+partsIndex;
                  if(ele.desc && ele.desc.length > 0){
                      partsTemplate += sections_template(ele.desc, editable, sectionName, sectionIndex, partsIndex);
                  }

                  if(ele.isNewlyAdded !== undefined && ele.isNewlyAdded === true){
                      ele.isNewlyAdded = false;
                      // newlyAddedSectionStyle += 'box-shadow: 5px 10px 8px #888888;';
                  }
                  if(ele.sectionStyle !== undefined && ele.sectionStyle !== ''){
                      style += ele.sectionStyle;
                  }
                  if(ele.sectionClass !== undefined && ele.sectionClass !== ''){
                      secClass += ele.sectionClass;
                  }

                  if((ele.isSectionToggle !== undefined && ele.isSectionToggle !== null && ele.isSectionToggle !== '')){
                        let additinalStyle = '';
                        let additionClass = '';
                        if(ele.isSectionToggle.state === true){
                            additinalStyle += ele.isSectionToggle.style.split("?")[0];
                            additionClass += ele.isSectionToggle.class.split("?")[0];
                        }else if(ele.isSectionToggle.state === false){
                            additinalStyle += ele.isSectionToggle.style.split("?")[1];
                            additionClass += ele.isSectionToggle.class.split("?")[1];
                        }
                        style += additinalStyle;
                        classTemplate += additionClass;
                        // console.log("!!! after  style  :: ", style);
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

                  if(ele.event !== undefined && ele.event !== ''){
                      method += ele.event.eventType+'="'+ele.event.eventName+'"';
                  }

                  if(editable){
                      let onMouseHoverAndMouseOutMethod = 'onmouseover="showHideThreeDotsbtn(this, \''+'mouse_over'+'\')" onmouseout="showHideThreeDotsbtn(this, \''+'mouse_out'+'\')"';
                      let threeDotsId = 'part_three_dots_'+sectionName+'-'+sectionIndex+'-'+partsIndex;
                      let threeDotsMethod = 'onclick="onClickSectionThreeDotsBtn(this, event, \''+id+'\')"'
                      sectionsTemplate += `
                            <div class=" custom-part" id="`+id+`" `+animation+` style="float: left; `+style+` ; `+newlyAddedSectionStyle+`">
                                <div style="display: inline-block; width: 95%; float: left;">`+partsTemplate+`</div>
                                <div style="display: inline-block; width: 3%; float: right;">
                                  <i id="`+threeDotsId+`" `+threeDotsMethod+` class="fa fa-ellipsis-v" aria-hidden="true" style="color: white; display: block; width: 21px; text-align: center; padding: 3px; background: `+default_style.themeColor+`; border-radius: 50px;"></i>
                                </div>
                            </div>
                      `;
                  }else{
                      sectionsTemplate += `
                            <div class=" custom-part `+classTemplate+`  `+secClass+`  `+additionalClass+`" id="`+id+`" `+dataset+` `+animation+` `+method+`  style="`+style+`  `+additionalStyle+`">
                                <div>`+partsTemplate+`</div>
                            </div>
                      `;
                  }
            });

            blockTemplate += `
                <div id="`+sectionId+` " class="`+sectionClass+`" style=" `+sectionStyle+`  `+isSectionVisibleStyle+`">
                  `+sectionsTemplate+`
                </div>
            `;

        })

    }

    template += `
          <div class="container">
              <div class="skills-content" style="width: 100%; " data-aos="fade-up" >
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

function header_section(request){
  console.log("============ call header section ==============");
  let template = '';
  let profileTemplate = '';
  let menusTemplate = '';
  let socialTemplate = '';
  let sectionName = request.apiRef;
  let requestMenus = request.dynamic_header_menus;
  let editable = request.edit;
  let dynamicSections = request.dynamic_sections;
  let data = portfolio_data[sectionName];

  // console.log("++++++++ editable  :: ", editable);
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
                    if(editable !== 'my_portfolio'){

                        if(item.section.name.toLowerCase() === 'settings'){
                          // console.log("@@@@ if if item : ", item);

                          let method = 'onclick="openSectionsSetupModal()"';
                          let iconTemplate = '<i class="bx bx-'+item.menu.icon.name+' custom-menu-icon" style="'+item.menu.icon.style+'"></i>';
                          listTemplate += '<li '+method+' class="custom-menu custom-menu-font default-background-color" style=" color: white; border-radius: 50px; "><a href="#" class="default-theme-menu-font-color" onclick="return false;"> '+iconTemplate+' <span style="">'+item.menu.name+'</span></a></li>';
                        }else{
                          // console.log("@@@@ else else item : ", item);
                          listTemplate += '<li class="custom-menu custom-menu-font"><a href="#'+item.section.name.toLowerCase()+'" class="default-theme-menu-font-color"> '+iconTemplate+' <span style="">'+item.menu.name+'</span></a></li>';
                        }
                    }else{
                        if(item.section.name.toLowerCase() !== 'settings'){
                          listTemplate += '<li class="custom-menu custom-menu-font default-background-color"><a class="default-theme-menu-font-color" href="#'+item.section.name.toLowerCase()+' onclick="return false;" "> '+iconTemplate+' <span style="">'+item.menu.name+'</span></a></li>';
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
        {
            if(editable !== 'my_portfolio'){
                let editMethod = 'onclick="onClickSetupProfile(this, event, \''+'edit_profile'+'\')"';
                let editThemeMethod = 'onclick="onClickSetupProfile(this, event, \''+'setup_theme'+'\')"';
                let previewMethod = 'onclick="onClickSetupProfile(this, event, \''+'preview_profile'+'\')"';
                let openProfileMethod = 'onclick="onClickSetupProfile(this, event, \''+'open_profile'+'\')"';
                let iconTemplate = '<i class="fa fa-pencil-square-o custom-menu-icon" style=" font-size: 22px;" aria-hidden="true"></i>';
                let previewIconTemplate = '<i class="fa fa-pencil-square-o custom-menu-icon" style="font-size: 22px;" aria-hidden="true"></i>';
                if(editable){
                  menuTemplate += '<li id="menu_previewProfile" class=" custom-menu-font custom-menu default-background-color" '+previewMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+previewIconTemplate+' <span style="">Preview Profile</span></a></li>';
                }else{
                  menuTemplate += '<li id="menu_editProfile" class="custom-menu-font custom-menu default-background-color" '+editThemeMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+iconTemplate+' <span style="">Setup Theme</span></a></li>';

                  menuTemplate += '<li id="menu_editProfile" class="custom-menu-font custom-menu default-background-color" '+editMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+iconTemplate+' <span style="">Edit Profile</span></a></li>';
                  menuTemplate += '<li id="OpenProfileUrlMenu" class="custom-menu-font custom-menu default-background-color" '+openProfileMethod+' style=" color: white; border-radius: 50px;"><a class="default-theme-menu-font-color" href="#" onclick="return false;"> '+previewIconTemplate+' <span style="">Open My Profile</span></a></li>';
                }
            }
        }
        menusTemplate += `
          <nav class="nav-menu">
            <ul>
              `+menuTemplate+`
            </ul>
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
    let data = portfolio_data[sectionName];
    return data;
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
        // let newTextElement = {type: 'text', key: {name: '', style: ''}, value: {name: 'Type your content here...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, secStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        let newTextElement = {type: 'text', key: {name: 'Type your content here...', style: 'font-size: 16px; font-weight: 500; width: 100%;'}, secStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};

        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex, 0, newTextElement);
    }else if(request.actionType === "add_item_on_below"){
        // let newTextElement = {type: 'text', key: {name: '', style: ''}, value: {name: 'added text below element...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, secStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        let newTextElement = {type: 'text', key: {name: 'added text below element...', style: ' font-size: 16px; font-weight: 500; width: 100%;'}, secStyle: 'display: inline-block; padding: 0px 10px; width: 100%;'};
        let customIndex = (parseInt(request.itemIndex) + 1);
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(customIndex, 0, newTextElement);
        // console.log("@@@ after add below item block data :: ", JSON.stringify(portfolio_data[request.sectionName]));
    }else if(request.actionType === 'save_updated_style'){
      portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].secStyle = request.secStyle;
      portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex].key.style = request.itemStyle;
    }else if(request.actionType === 'delete_section'){
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts.splice(request.partsIndex, 1);
    }else if(request.actionType === "add_section_left"){
        console.log("==== ADD SECTION LEFT =====");
        console.log("@@@  request: ", request);
        let addedSection = portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex];
        addedSection.isNewlyAdded = true;
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts.splice(request.partsIndex-1, 0, addedSection);
    }else if(request.actionType === "add_section_right"){
        console.log("==== ADD SECTION right =====");
        console.log("@@@  request: ", request);
        let addedSection = portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex];
        addedSection.isNewlyAdded = true;
        console.log("==== after added section the section data : ", addedSection);
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts.splice(request.partsIndex+1, 0, addedSection);
    }else if(request.actionType === 'add_similar_item_on_top'){
        console.log("======== add_similar_item_on_top ========");
        console.log("@@@ request: ", request);
        let addedItem = portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex];
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex -1, 0, addedItem)

    }else if(request.actionType === 'add_similar_item_on_below'){
        console.log("======== add_similar_item_on_below ========");
        console.log("@@@ request: ", request);
        let addedItem = portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[request.itemIndex];
        portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.splice(request.itemIndex + 1, 0, addedItem)

    }else if(request.actionType === 'save_item_isselected'){
        console.log("======== save_item_isselected ========");
        console.log("@@@ request: ", request);
        for(let i=0; i<portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc.length; i++ ){
               if(i === request.itemIndex){
                 portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[i].isSelected.state = true;
                 portfolio_data[request.sectionName].block.sections[i + 1].isSectionVisible.state = true;
               }else{
                   portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[request.partsIndex].desc[i].isSelected.state = false;
                   portfolio_data[request.sectionName].block.sections[i + 1].isSectionVisible.state = false;
               }
        }
    }else if(request.actionType === 'apply_store_theme'){
        console.log("============ calling apply_store_theme =============");
        console.log("@@@ request :: ", request);
        for (let i = 0; i < portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts.length; i++) {
              if(i === request.partsIndex ){
                  if(portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[i].isConditionalStyles !== undefined ){
                      portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[i].isConditionalStyles.state = true;
                      console.log("@@@ if : ", portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[i]);
                  }
              }else{
                  if(portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[i].isConditionalStyles !== undefined ){
                      portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[i].isConditionalStyles.state = false;
                      console.log("@@@ if else  : ", portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts[i]);

                  }
              }
        }
    }
    // console.log("@@@ after edit block data :: ", JSON.stringify(portfolio_data[request.sectionName].block));
    console.log("@@@ after save :: ", portfolio_data[request.sectionName].block.sections[request.sectionIndex].parts);

}

function get_section_data(sectionName){
  let data = portfolio_data[sectionName];
  return data;
}

function update_initial_sections(request){
    console.log("===== calling update initial sections =====");
    let sections = request.updatedSections;
    // console.log("====== sections : ", sections);

    portfolio_data[request.sectionName].block.sections[0].parts.forEach((item, itemIndex) => {
        if(item.dataset !== undefined && item.dataset.sectionName !== undefined && item.dataset.sectionName !== ''){
            sections.forEach((ele, eleIndex) => {
                if(item.dataset.sectionName === ele.sectionName){
                    item.dataset.selected = ele.selected;
                    item.isSectionToggle.state = ele.selected;
                }
            });
        }
    });

    // console.log("!!!!!!!!!! after updating the initial sections data:: \n\n", portfolio_data[request.sectionName].block.sections[0].parts);
    return "Successfully Update Initial Sections"
}

function update_theme(request){
    console.log("====== calling update theme function ======");
    console.log("@@@ theme : ", request);
    console.log("@@@ before update the default styles is :: ", portfolio_data["default_style"]);
    console.log("------------------------------");

    portfolio_data["default_style"] = request.theme;
    console.log("@@@ after update the default styles is :: ", portfolio_data["default_style"]);
}

let generic_portfolio_functionality_mapping = {

    testimonials_section: new_testimonials_section,

    work_section: work_section,

    workcat_list_section: workcat_list_section,

    header_section: header_section,

    typed_section: typed_section,

    update_section_data: update_section_data,

    update_initial_sections: update_initial_sections,

    update_block_data: update_block_data,

    get_section_data : get_section_data,

    update_theme : update_theme

}


module.exports.generic_portfolio_functionality_mapping = generic_portfolio_functionality_mapping;
