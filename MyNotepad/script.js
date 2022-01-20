let openPanelBtn;
let closePanelBtn;
let notePanel;
let noteArea;

let selectCategory;
let textAreaNote;
let saveSingleNoteBtn;
let removeSingleNoteBtn;
let removeAllNodeBtn;
let errorPanel;

let noteId = 0;

const prepareDOMElements = () => {
	openPanelBtn = document.querySelector('.add-note-btn');
	closePanelBtn = document.querySelector('.cancel-note-btn-panel');
	removeSingleNoteBtn = document.getElementsByClassName(
		'.delete-single-note-btn'
	);
	removeAllNodeBtn = document.querySelector('.remove-all-note-btn');
	saveSingleNoteBtn = document.querySelector('.add-note-btn-panel');
	notePanel = document.querySelector('.note-panel');
	noteArea = document.querySelector('.note-area');

	selectCategory = document.querySelector('#select-category');
	textAreaNote = document.querySelector('#text-area');
	errorPanel = document.querySelector('.note-panel-error');
};

const prepareDOMEvents = () => {
	openPanelBtn.addEventListener('click', openPanel);
	closePanelBtn.addEventListener('click', closePanel);
	saveSingleNoteBtn.addEventListener('click', saveNote);
	removeAllNodeBtn.addEventListener('click', deleteAllNode);
};

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const openPanel = () => {
	notePanel.style.display = 'block';
	errorPanel.style.visibility = 'hidden';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	errorPanel.style.visibility = 'hidden';
	textAreaNote.value = '';
	selectCategory.selectedIndex = 0;
};

// **** Create and save note ***

const saveNote = () => {
	if (
		selectCategory.options[selectCategory.selectedIndex].value !== '0' &&
		textAreaNote.value !== ''
	) {
		createNote();
		closePanel();
	} else {
		errorPanel.style.visibility = 'visible';
	}
};

const createNote = () => {
	const selectedCategory =
		selectCategory.options[selectCategory.selectedIndex].text;

	let note = document.createElement('div');
	note.setAttribute('id', noteId);
	console.log(note.getAttribute('id'));

	note.classList.add('note');

	note.innerHTML = `<div class="note-header">
    <h3 class="note-header-title">${selectedCategory}</h3>
    <button class="delete-single-note-btn" onclick="deleteNote(${noteId})"><i class="fas fa-times"></i></button>
     </div>
    <div class="note-body">
    <p>${textAreaNote.value}</p>
    </div>`;

	noteId++;
	addColorToNode(selectedCategory, note);

	noteArea.append(note);
};

const addColorToNode = (selectedCategory, note) => {
	switch (selectedCategory) {
		case 'Shopping':
			note.style.backgroundColor = '#cade35';
			break;
		case 'Work':
			note.style.backgroundColor = '#2c69b8';
			break;
		case 'Other':
			note.style.backgroundColor = '#bd3e51';
			break;
		default:
			note.style.backgroundColor = '#959e8d';
	}
};

// *** Delete note ***

const deleteAllNode = () => {
	noteArea.textContent = '';
	noteId = 0;
};

const deleteNote = (noteId) => {
	const noteToDelete = document.getElementById(noteId);
	noteArea.removeChild(noteToDelete);
};

addEventListener('DOMContentLoaded', main);
