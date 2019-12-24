function validation(){
    var fname = document.getElementById('firstname');
    var lname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var mob = document.getElementById('mobile');
    var pass = document.getElementById('password');
    var conpass = document.getElementById('confpassword');
    var valid = true;


    if(fname.value.length == 0){
    fname.nextElementSibling.innerHTML="please fill the firstname";
    valid = false;
    }

    if(lname.value.length == 0){
    lname.nextElementSibling.innerHTML="please fill the lastname";
    valid= false;
    }

    if(email.value.length == 0){
    email.nextElementSibling.innerHTML="please fill the email";
    valid= false;
    }

    if(mob.value.length == 0){
    mob.nextElementSibling.innerHTML="please fill the mobile number";
    valid= false;
    }

    if(pass.value.length == 0){
    pass.nextElementSibling.innerHTML="please fill the password";
    valid= false;
    }

    if(conpass.value.length == 0){
    conpass.nextElementSibling.innerHTML="fill the Confirm password";
    valid= false;
   }
   if(pass.value !== conpass.value){
    conpass.nextElementSibling.innerHTML="Confirm Password must be match";
    valid =false;
   }
   return valid;
    
} 