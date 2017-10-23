

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
    console.log("device ready");
}
	
function updateDisplay() {
    
}


// device APIs are available
//
function onDeviceReady() {
		
    alert("ready to go");
        
    document.addEventListener("resume", onResume, false);
    document.addEventListener("pause", onPause, false);
		
    console.log(device.cordova);
		
    launched_count++;
    updateDisplay();
    
}
