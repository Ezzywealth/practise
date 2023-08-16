// const loginStart = document.getElementById('loginStart');
const loginStart = document.querySelector('.login_normal');
const loginBtn = document.getElementById('loginBtn2');
const container1 = document.getElementById('section1');
const container2 = document.getElementById('section2');
const emailInput = document.getElementById('login_param');
const passwordInput = document.getElementById('password');
const inputId = document.getElementById('email_label');

let email = '';

loginStart.addEventListener('click', () => {
	container1.style.display = 'none';
	container2.style.display = 'flex';
	email = emailInput.value;
	inputId.value = email;
});

loginBtn?.addEventListener('click', () => {
	console.log(email);
	console.log(passwordInput.value);
});

emailInput.addEventListener('input', () => {
	loginStart.style.backgroundColor = 'green';
	loginStart.removeAttribute('disabled');
});

passwordInput.addEventListener('input', () => {
	loginBtn.removeAttribute('disabled');
});
