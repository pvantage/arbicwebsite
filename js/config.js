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

var user_id = 0;
if (localStorage.getItem('user_id') !== null) {
	user_id = localStorage.getItem('user_id');
}

function accountLogout(user_ids){
	
	localStorage.removeItem('user_id');
	location.reload();
}
