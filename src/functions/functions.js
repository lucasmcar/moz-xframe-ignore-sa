var verificaCampos = function(){ 
    if(user.value == "" && senha.value == ""){
         return false;
    }
    return true;
}

var showForm = function() {
    form.removeAttribute('hidden', 'hidden');
    avisoCampos.setAttribute('hidden', 'hidden');
}

var hiddenSucess = function (){
    avisoSucesso.setAttribute('hidden', 'hidden');
} 

var hiddenError = function (){
    avisoUsuario.setAttribute('hidden', 'hidden');
}

var ativaExtensao = function(){
    port.postMessage({is_disabled: checkbox.checked});
}