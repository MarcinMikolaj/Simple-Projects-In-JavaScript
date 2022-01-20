let textInput;
let productList;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	textInput = document.querySelector('.search-input');
	productList = document.querySelector('.products-list-ul');
};

const prepareDOMEvents = () => {
	textInput.addEventListener('keyup', enterTextAction);
};

const enterTextAction = (e) => {
	let text = e.target.value.toLowerCase().trim();

	for (const iterator of productList.children) {
		if (iterator.textContent.toLowerCase().indexOf(text) !== -1) {
			iterator.style.display = 'block';
		} else {
			iterator.style.display = 'none';
		}
	}
};

document.addEventListener('DOMContentLoaded', main);
