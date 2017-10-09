var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
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

    // Handle the pause event
    //
    function onPause() {
		alert("paused now");
		paused_count++;
		updateDisplay();
        
        
    }
	
	function onResume() {
		alert("resume now");
		resumed_count++;
		updateDisplay();
        
        
    }
