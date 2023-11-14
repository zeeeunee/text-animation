const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

// btns.forEach((btn, idx) => {
// 	btn.addEventListener('click', () => {
// 		btns.forEach((btn) => btn.classList.remove('on'));
// 		btns[idx].classList.add('on');

// 		boxs.forEach((btn) => btn.classList.remove('on'));
// 		boxs[idx].classList.add('on');
// 	});
// });

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		activation(btns, idx);
		activation(boxs, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

function splitText(el) {
	const dom = document.querySelector(el);
	let tags = '';
	for (let letter of dom.innerText) tags += `<span>${letter}</span>`;

	dom.innerHTML = tags;
}
