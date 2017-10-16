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
    getLength();
    chocBar();
    chocArray();
    
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

function getLength() {
    var length = window.localStorage.length;
    $("#length").text("Length: " + length);
}

function chocBar() {
    var bar= {
        "EnergyKJ": "2278",
        "EnergyKCAL": "546",
        "FatG": "32.4",
        "of which saturatesG": "19.7",
        "CarbohydratesG": "55.7",
        "of which sugarsG": "55.1",
        "ProteinG": "6.8",
        "SaltG": "0.30"
    }
    
    var key = "chocbar";
    var value = JSON.stringify(bar); 
    window.localStorage.setItem( key, value);
    
    var valueJSON = window.localStorage.getItem(key);
    value = JSON.parse(valueJSON);
    
    $("#bar").text("Carbohydrates: " + value.CarbohydratesG);
}

function chocArray() {
    var array = [{
        "name": "Twix",
        "EnergyKJ": "2074",
        "EnergyKCAL": "495",
        "FatG": "24.0",
        "of which saturatesG": "13.9",
        "CarbohydrateG": "64.6",
        "of which sugars": "48.8",
        "ProteinG": "4.5",
        "SaltG": "0.44",
    }, {
        "name": "Galaxy",
        "EnergyKJ": "2278",
        "EnergyKCAL": "546",
        "FatG": "32.4",
        "of which saturatesG": "19.7",
        "CarbohydrateG": "55.7",
        "of which sugars": "55.1",
        "ProteinG": "6.8",
        "SaltG": "0.30",
    }, {
        "name": "Mars",
        "EnergyKJ": "1883",
        "EnergyKCAL": "448",
        "FatG": "16.7",
        "of which saturatesG": "8.1",
        "CarbohydrateG": "69.3",
        "of which sugars": "59.9",
        "ProteinG": "4.4",
        "SaltG": "0.42",
    }, {
        "name": "Bounty",
        "EnergyKJ": "2036",
        "EnergyKCAL": "487",
        "FatG": "25.7",
        "of which saturatesG": "21.2",
        "CarbohydrateG": "58.9",
        "of which sugars": "48.2",
        "ProteinG": "3.7",
        "SaltG": "0.25",
    }, {
        "name": "Snickers",
        "EnergyKJ": "2131",
        "EnergyKCAL": "510",
        "FatG": "27.9",
        "of which saturatesG": "9.6",
        "CarbohydrateG": "54.4",
        "of which sugars": "44.9",
        "ProteinG": "9.5",
        "SaltG": "0.45",
    }];
    
    var output = '';
    $.each(array, function (index, value) {
        output += '<li>' + value.name + '</li>';
    });
    $('#searchFood').html(output).listview("refresh");
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
