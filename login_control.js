

var attempt = 3; // Variable to count number of attempts.



var kullanici = sessionStorage.getItem("user");

kullanici = kullanici.split(",");

var isLogin = false;

function Login() {

    
    var mail = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;


    if (mail == kullanici[0] && sifre == kullanici[1]) {

        alert("Giriş bilgileri doğru!");
        document.getElementById("btn_div").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + kullanici[0];

    

         window.location = "application_form.html"; 

       
     
        

        isLogin = true;

        sessionStorage.setItem("isLogin", isLogin);

    }
    else {
        
        attempt--;// Decrementing by one.
    alert(attempt + " deneme hakkınız kaldı");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
        document.getElementById("email").disabled = true;
        document.getElementById("sifre").disabled = true;
        document.getElementById("login").disabled = true;
        swal("Hata!", "Yeniden yönlendiriliyorsunuz...", "warning");
        setTimeout(() => window.location="signin.html", 2300);
       
        return false;
    }
    }

}



