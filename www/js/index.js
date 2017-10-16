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
        setItems();
        getItem();
        
        
    }

   function setItems() {
       var key = "phone";
       var value = "black";
       window.localStorage.setItem( key, value );
       
       key = "cable";
       value = "white";
       window.localStorage.setItem( key, value );
       
       key = "notepad";
       value = "blue";
       window.localStorage.setItem( key, value );
       
       key = "chair";
       value = "blue";
       window.localStorage.setItem( key, value );
       
       key = "jacket";
       value = "blue";
       window.localStorage.setItem( key, value );
   }

    function getItem() {
        var key = "phone";
        var value = window.localStorage.getItem(key);
        
        $("#item").text("Item: " + value);
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
