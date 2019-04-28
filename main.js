function validate()
{


    errormsg = document.getElementById("errorMsg");
    errormsg.innerHTML = "";

    successMsg = document.getElementById("successMsg");
    successMsg.innerHTML = "";

    var is_validated = true;


    if(!checkFirstName()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>First name not Found.</b>';
        is_validated = false;
    }

    if(!checkLastName()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Last name not Found.</b>';
        is_validated = false;
    }

    if(!checkGender()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Choose Gender.</b>';
        is_validated = false;
    }

    if(!checkEmail()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Enter Email.</b>';
        is_validated = false;
    }

    if(!checkEduName()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Enter Qualification.</b>';
        is_validated = false;
    }

    if(!checkDate()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Select Date.</b>';
        is_validated = false;
    }

    if(!checkCity()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Select City.</b>';
        is_validated = false;
    }

    if(!checkHobbies()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Select atleast one Hobby.</b>';
        is_validated = false;
    }


    if(!checkRange()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Select Range.</b>';
        is_validated = false;
    }

    if(!checkAge()){
        errormsg.innerHTML = errormsg.innerHTML+'<br><b>Age should be greater than 18.</b>';
        is_validated = false;
    }

    if(is_validated){
        successMsg.innerHTML="Successfully Registered";
    }

      
    return false;
}



function checkFirstName(){
    var frname=document.getElementById("fname");
    console.log("First Name check:", frname.value, frname.value.length);
    if(frname.value.length<=2 || frname.value.length>=20 ){
        return false;
    }
    else{
        return true;
    }
}


function checkLastName(){
    var lstname=document.getElementById("lname");
    console.log("Last Name check:",lstname.value,lstname.value.length);
    if(lstname.value.length<=2 || lstname.value.length>=20){
        return false;
    }else{
        return true;
    }
}

function checkGender(){

    var arr = document.getElementsByName("gender");
    var flag=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].checked){
                flag=1;
        }
    }

    return flag?true:false;
}


function checkEmail(){
    femail=document.getElementById("femail");
    console.log("First Name check:", femail.value, femail.value.length);
    if(femail.value.length<=10 || femail.value.length>=20 ){ //add @check validation
        return false;
    }
    else{
        return true;
    }
}


function checkEduName(){
    var edu=document.getElementById("edu_qu");
    console.log("First Name check:", edu.value, edu.value.length);
    if(edu.value.length<=2 || edu.value.length>=20 ){
        return false;
    }
    else{
        return true;
    }
}


function checkDate(){
    var bdate=document.getElementById("bdate");
    console.log("First Name check:", bdate.value, bdate.value.length);
    if(bdate.value){
        return true;
    }
    else{
        return false;
    }
}



function checkCity(){

    //var arr = document.getElementsByName("city");
    //arr = arr[0]; //then we get Options Array

    var arr = document.getElementById("cityselect"); //we get direct elements and its nested options element
    var flag=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].value!='' && arr[i].selected){
                flag=1;
        }
    }

    return flag?true:false;
}



function checkHobbies(){

    //var arr = document.getElementsByName("city");
    //arr = arr[0]; //then we get Options Array

    var arr = document.getElementsByClassName("hobbies"); //we get direct elements and its nested options element
    var flag=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].checked){
                flag=1; //only if minimum 1 required to be checked
        }
    }

    return flag?true:false;
}



function checkRange(){
    var frange=document.getElementById("frange");
    console.log("First Name check:", frange.value, frange.value.length);
    if(frange.value>1){
        return true;
    }
    else{
        return false;
    }
}


function checkAge(){
    var fage=document.getElementById("fage");
    console.log("First Name check:", fage.value, fage.value.length);
    if(fage.value>18){
        return true;
    }
    else{
        return false;
    }
}