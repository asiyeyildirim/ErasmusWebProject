
function SignupControl() {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;

    var kullanici = [(document.getElementById("email").value), (document.getElementById("sifre").value)];

    var sifre2 = document.getElementById("reSifre").value;
    
    mailcontrol = "@";
   



    if (email== ""){
        alert("Email gerekli.");
        return ;
    }
    else if (email.indexOf(mailcontrol) == -1){
        alert("@ gerekli.");
        return ;
    }
    else if (sifre == ""){
        alert("Şifre  gerekli.");
        return ;
    }
    else if(sifre.length<6){
        alert("Sifre 6 karakterden büyük olmalı.");
    }
    else if (sifre2 == ""){
        alert("Sifre gerekli.");
        return ;
    }
    else if (sifre != sifre2 ){
        alert("Şifreler eşleşmiyor!");
        return;
    }
    

       else if  (kullanici[1] == sifre2) {
        

        alert(kullanici + "  Kayıt başarılı !");
        window.location= "signin.html";
        sessionStorage.setItem("user", kullanici);
        return;


    }
    
    else{
        alert(email + " kayıt zaten mevcut.");
        return;
    }



}

