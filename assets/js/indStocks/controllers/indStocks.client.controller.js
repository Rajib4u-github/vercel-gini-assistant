

// let currentSelectedWorkCategory = "Education";
let localStorage = {};
let currentOnClickThreeDotsState = {};
let application = 'indStocks';
var fileName = 'newIndStocksApp';

console.log("============= file : giniSportsV2.client.controller.js =============");

function onClickMutualFundCategoryButton(that, event, state){
        console.log("====== calling on click add section method =======");
        console.log("@@@ that : ", that);
        console.log("@@@ id : ", that.id);
        console.log("@@@ state : ", state);
        let argument = that.getAttribute("data");
        let modifiedInnerDataPath = '';
        argument = JSON.parse(argument);
        argument.category = argument.category.split(":")
        console.log("@@@@@@  argument.category : ",  argument.category)
        if(argument.category){
                argument.category.forEach((item, itemIndex) => {
                        modifiedInnerDataPath += item.toString().trim();
                        if(itemIndex !== argument.category.length){
                                modifiedInnerDataPath += '>';
                        }
                });
        }
        // modifiedInnerDataPath = argument.category[0].toString().trim()+'>'+argument.category[1].toString().trim();
        console.log("@@@ argument : ", argument);
        let payload = {
                apiRef : 'action_by_category',
                actionType : 'action_by_category',
                referenceSection: '',
                sectionName : argument.sectionName,
                targetSectionName: argument.targetSectionName,
                modifyInnerDataPath: modifiedInnerDataPath,
                // application: application
                // sectionName : "createNewSectionModal_section",
                // blockId: 'custom_overlay_block',
                // loaderId: 'custom_overlay_loader',
                // templateId: 'custom_overlay_template',
                edit: false,
                application: application
                }
                console.log("@@@@@@  payload : ", payload)
        socket.emit("request-generic-action_by_category", payload);

}


