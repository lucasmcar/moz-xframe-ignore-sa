var defaultRgx =  ["<all_urls>","*://*/*", "https://teams.microsoft.com"].join('\n')


var myPort = browser.runtime.connect({name:"port-from-cs"});


browser.storage.local.get(null, function(res) {
  var regstr = (res.regstr_allowed || defaultRgx);
  document.querySelector("#allowed").value=regstr;
  document.querySelector("#chkAtivo").checked=res.is_disabled;
});
window.onload= function()
{
  var txarea = document.querySelector("#allowed");
  var disable_checkbox=  document.querySelector("#chkAtivo");
	disable_checkbox.onchange
  = function(){
  	regstr = txarea.value.trim()
    myPort.postMessage({
    	regstr_allowed: regstr,
    	is_disabled: disable_checkbox.checked
    }); 

  }
}