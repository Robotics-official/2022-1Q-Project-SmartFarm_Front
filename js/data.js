var requestURL = 'https://api.thingspeak.com/channels/1651803/feeds.json?results=1';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var statusdata = request.response;
  var temperaturedata=parseInt(statusdata["feeds"][0]["field1"])
  var humiditydata=parseInt(statusdata["feeds"][0]["field2"])
  var moisturedata=parseInt(statusdata["feeds"][0]["field3"])
  console.log(moisturedata)
  var moisturepdata=parseInt(100-moisturedata/1024*100)
  $('#temperature').html(temperaturedata+" °C");
  $('#humidity').html(humiditydata+" %");
  $('#moisture').html(moisturepdata+" %");
  changemeter(temperaturedata,'temperature_image',[18,20],[16,21],[14,23]);
  changemeter(humiditydata,'humidity_image',[50,50],[40,70],[20,80]);
  changemeter(moisturedata,'moisture_image',[700,1024],[500,1024],[400,1024]);
}

function changemeter(eachdata,imgid,best,good,soso){
  if (eachdata>=best[0] & eachdata<=best[1]){
    console.log("best");
    document.getElementById(imgid).src = "./images/meter_4.png";
  }
  else if(eachdata>=good[0] & eachdata<=good[1]){
    console.log("good");
    document.getElementById(imgid).src = "./images/meter_3.png";
  }
  else if(eachdata>=soso[0] & eachdata<=soso[1]){
    console.log("soso");
    document.getElementById(imgid).src = "./images/meter_2.png";
  }
  else{
    console.log("bad");
    document.getElementById(imgid).src = "./images/meter_1.png";
  }
}
