function closeWindow(){
    document.querySelector("#displayOtp").style.display="none"
}
var otpNum="";
function openWindow(){
    document.querySelector("#displayOtp").style.display="flex"
    var num1=Math.floor(Math.random()*10);
    var num2=Math.floor(Math.random()*10);
    var num3=Math.floor(Math.random()*10);
    var num4=Math.floor(Math.random()*10);
    otpNum=`${num1}${num2}${num3}${num4}`
    document.querySelector("h1").innerHTML=otpNum;
}
function compare(){
    var userEnterValue=document.querySelector("#otp").value;
    if(userEnterValue.length==0)
        {
            document.querySelector("#result").style.display="block";
            document.querySelector("#result").innerHtml="Enter the value";
            document.querySelector("#result").style.color="red"
        }
        else if(userEnterValue.length>0 && userEnterValue==otpNum)
            {
                document.querySelector("form").action="www.tesla.com"
                console.log("yes");
                document.querySelector("#submitButton").type="submit"
            }
                else{
                    document.querySelector("#result").style.display="block"
                    document.querySelector("#result").innerHTML="Access Denied";
                    document.querySelector("#result").style.color="red"
                    
    }
}