var elForm = document.querySelector('form');
var elinput = document.querySelector('input');
var walkTime = document.querySelector('.walk-time');
var bicyleTime = document.querySelector('.bicycle-time');
var carTime = document.querySelector('.car-time');
var planeTime = document.querySelector('.plane-time');
var isTrue = document.querySelector('.istrue');

function walk(S) {
	const v = 3.6;
	const t = S / v;

	var m = t * 60;
	m = m - Math.floor(t) * 60;

	var sec = m * 60;
	sec = Math.round(sec - Math.floor(m) * 60);

	var text = ` `;

	if (Math.floor(t) != 0) {
		text = `${Math.floor(t)} soat `;
	}
	if (Math.floor(m) != 0) {
		text = text + `${Math.floor(m)} minut `;
	}
	if (Math.floor(sec) != 0) {
		text = text + `${Math.floor(sec)} soniya `;
	}

	return text;
}

function bicycle(S) {
	const v = 20.1;
	const t = S / v;

	var m = t * 60;
	m = m - Math.floor(t) * 60;

	var sec = m * 60;
	sec = Math.round(sec - Math.floor(m) * 60);

	var text = ` `;

	if (Math.floor(t) != 0) {
		text = `${Math.floor(t)} soat `;
	}
	if (Math.floor(m) != 0) {
		text = text + `${Math.floor(m)} minut `;
	}
	if (Math.floor(sec) != 0) {
		text = text + `${Math.floor(sec)} soniya `;
	}

	return text;
}

function car(S) {
	const v = 70;
	const t = S / v;

	var m = t * 60;
	m = m - Math.floor(t) * 60;

	var sec = m * 60;
	sec = Math.round(sec - Math.floor(m) * 60);

	var text = ` `;

	if (Math.floor(t) != 0) {
		text = `${Math.floor(t)} soat `;
	}
	if (Math.floor(m) != 0) {
		text = text + `${Math.floor(m)} minut `;
	}
	if (Math.floor(sec) != 0) {
		text = text + `${Math.floor(sec)} soniya `;
	}

	return text;
}

function plane(S) {
	const v = 800;
	const t = S / v;

	var m = t * 60;
	m = m - Math.floor(t) * 60;

	var sec = m * 60;
	sec = Math.round(sec - Math.floor(m) * 60);

	var text = ` `;

	if (Math.floor(t) != 0) {
		text = `${Math.floor(t)} soat `;
	}
	if (Math.floor(m) != 0) {
		text = text + `${Math.floor(m)} minut `;
	}
	if (Math.floor(sec) != 0) {
		text = text + `${Math.floor(sec)} soniya `;
	}

	return text;
}

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();

	var elInputVal = +elinput.value;

	if (isNaN(elInputVal) || elInputVal <= 0) {
		elinput.classList.remove('is-valid');
		elinput.classList.add('is-invalid');
		isTrue.textContent = 'Iltimos faqat natural son kiriting  ):';
		isTrue.classList.remove('succes');
		isTrue.classList.add('error');
		return;
	} else {
		elinput.classList.remove('is-invalid');
		elinput.classList.add('is-valid');
		isTrue.textContent = "Hammasi to'g'ri (:";
		isTrue.classList.remove('error');
		isTrue.classList.add('succes');
	}

	walkTime.textContent = walk(elInputVal);
	bicyleTime.textContent = bicycle(elInputVal);
	carTime.textContent = car(elInputVal);
	planeTime.textContent = plane(elInputVal);
});
