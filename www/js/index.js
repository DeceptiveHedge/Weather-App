 document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}   

function random() {
	var rValue = !Math.round(Math.random());
    $("#rV").text(rValue);
    if (rValue = true)
    {
        navigator.notification.beep(1);
        navigator.vibrate(2000);
    }
    else
    {
        navigator.notification.beep(2);
        navigator.vibrate([200, 300, 500]);
    }
}



