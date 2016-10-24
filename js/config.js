var siteurl = "http://www.hcwcbmoh.com";

function gup(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

var user_id = gup('uid');


function checkloggedin(user_id)
{
	
	var url = siteurl+'/api/register.php';
	
	jQuery.ajax({  
	 type: 'POST',  
	 url: url, 	
	 dataType: 'json',  
	 data: {account_type:'checkuserexist',uid:uid},  
	 crossDomain: true,  
	 beforeSend: function() {
							
	 },		
	 complete: function() {
		jQuery('body .bodyoverlay').remove();
		jQuery('body .preloader').remove();					
	 },
	 success: function(res) {  
	   if(res['success'][0]['message']=='Invalid userid')
	   {
		//window.location='index.html';   
	   }
		return false;
	 },  
	 error: function(response, d, a){
		jQuery('footer .source').append('<span class="msgnotification">Server error</span>');
		setTimeout(function(){
			jQuery('footer .source span.msgnotification').remove();
		},700);
	 } 
   });
		
}


document.addEventListener("deviceready", init, false);
function init() {
	localStorage.setItem('device_id', device.uuid);	
	setTimeout(function(){
	document.querySelector("#applogout").addEventListener("touchend", applogout, false);
						},1000);	
}
function applogout(){
	TwitterConnect.logout(
	  function() {
		alert('Successful logout!');
	  },
	  function() {
		alert('Error logging out');
	  }
	);
	CordovaFacebook.logout({
	   onSuccess: function() {
		  alert("The user is now logged out");
	   }
	});
}

function getcountrycode(){
	var requestUrl = "http://ip-api.com/json";
	jQuery.ajax({
	  url: requestUrl,
	  type: 'GET',
	  success: function(json)
	  {
		  var countrycode = json.countryCode;
		  localStorage.setItem('countrycode',countrycode);
		
	  }
	});
}
if(localStorage.getItem('countrycode')==null){
	getcountrycode();
}