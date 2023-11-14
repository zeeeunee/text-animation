const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
const tits = main.querySelectorAll('h1');

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

splitText(tits[0]); //인수로 h1 DOM자체를 전달
splitText(tits[1]);

//해당함수는 DOM자체를 인수로 전달받음
function splitText(el) {
	let tags = '';
	for (let letter of el.innerText) tags += `<span>${letter}</span>`;
	el.innerHTML = tags;
}
