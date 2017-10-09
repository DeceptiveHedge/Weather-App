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
		
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		console.log(device.cordova);
		
		launched_count++;
		updateDisplay();
        
        alert("ready to go");
    }

    // Handle the pause event
    //
    function onPause() {
		
		paused_count++;
		updateDisplay();
        
        alert("paused now");
    }
	
	function onResume() {
		
		resumed_count++;
		updateDisplay();
        
        alert("resume now");
    }
