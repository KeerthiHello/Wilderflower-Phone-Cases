function dashie(){
    if(document.getElementById("emailip").value == null || document.getElementById("emailip").value == ''){
        alert("Please add the email address for subscription");
        console.log("hello");
    }
    else{
    document.getElementById("msg9").innerHTML="Thank you for subscribing!";
}
}