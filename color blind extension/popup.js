var BackgroundPage = chrome.extension.getBackgroundPage();
var objCurrentPage = BackgroundPage.objCurrentPage;

function ChangeBtnState(BtnId, BtnText, overrideType, blnOverriden, localStorageValue, addOrRemove, overrideFn){
    var btn = document.getElementById(BtnId);
    btn.innerHTML = BtnText;
    btn.onclick = function(){objCurrentPage.manageOverride.call(this, overrideType, blnOverriden, localStorageValue, addOrRemove, overrideFn); DisplayButtons();};
}

function DisplayButtons(){
    var objPageOverrides = BackgroundPage.objCurrentPage.blnOverrides;
    var currentUrl = objCurrentPage.Url;
    var currentDomain = objCurrentPage.Domain;

       
    if(objPageOverrides['OverrideAll']){

	ChangeBtnState('overrideAll', 'Unactive Color Blind Mode', 'OverrideAll', false, false, 'set', objCurrentPage.callRemoveCss);
    }
    else{
	ChangeBtnState('overrideAll', 'Active Color Blind Mode', 'OverrideAll', true, true, 'set', objCurrentPage.callInjectCss);
    }
}

window.addEventListener("load", DisplayButtons);