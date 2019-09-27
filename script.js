// appel de ma méthode lors de l'évennement onSubmit de mon formulaire
$("#TP_WEB").submit(function(){
    var tel = true;
    var mail = false;
    var pass = false;
    if ($('#tel').val() != "") {
        if (!checkTel()) {
            tel = false;
            alert("Numero telephone invalide");
        }
    }
    if (checkMail()) {
        mail = true;
    }
    else {
        alert("Adresse mail invalide");
    }
    if(checkPassword()) {
        pass = true;
        alert("Password confirmed");
    }
    else {
        alert("Les deux mots de passes doivent être égaux");
    }
    if (tel == true && mail == true && pass == true) {
        alert("Vous etes en regle sur tous les points");
    }
    else {
        alert("Il y a un soucis quelque part, vérifier dans les messages précédents");
    }
});

      
// ma fonction qui vérifie le champ password
function checkPassword(){
	if($("#password").val() == $("#confirmPassword").val()){
		return true;
	}
	else {  
		return false;
	}
}

// ma fonction qui vérifie l'adresse mail
function checkMail(){
    var emailRegex = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$'; 
	if($('#mail').val().match(emailRegex)){
		return true;
	}
	else {  
		return false;
	}
}

// ma fonction qui vérifie le champ telephone
function checkTel(){
    var phoneNumber = /[0-9-()+]{3,20}/;  
	if($('#tel').val().match(phoneNumber)){
		return true;
	}
	else {  
		return false;
	}
}