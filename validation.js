function cekEmail() {
	var inpEmail = document.getElementById('email');
	var email = inpEmail.value;
	var arr_email = email.split("@");

	// console.log(arr_email);
	if (arr_email[1] != 'gmail.com' && email != '') {
		alert('Email yang digunakan wajib menggunakan email GMAIL');
		inpEmail.value = '';
	}
}


function cekPass() {
	var inpPass = document.getElementById('password');
	var pass = inpPass.value;

	// console.log(pass.length);
	if (pass.length < 8 && pass != '') {
		alert("Password minimal 8 karakter");
	}
}