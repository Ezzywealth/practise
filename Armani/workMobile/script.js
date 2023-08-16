// const loginStart = document.getElementById('loginStart');
const loginStart = document.querySelector('.login_normal');
const loginBtn = document.getElementById('loginBtn');
const container1 = document.querySelector('.page1');
const container2 = document.querySelector('.page2');

console.log(container1);
loginStart.addEventListener('click', () => {
	container1.style.display = 'none';
	container2.style.display = 'flex';
});

loginBtn?.addEventListener('click', () => {
	container2.style.display = 'none';
	container1.style.display = 'flex';
});
