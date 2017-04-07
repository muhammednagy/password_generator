function generate() {
	var website = document.getElementById('website').value ;
	website = sha256(website) ;
	var master = document.getElementById('master').value ;
	master = sha256(master) ;
	var password = master.slice(5,15) + website.slice(5,15) ;
	clipboard.copy(password);
  	Materialize.toast('done and copied !', 4000) // 4000 is the duration of the toast
}
