const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

var plusBtn = document.getElement('');

plusBtn.addEventListener('click', function () {


    let notesObj;
	let addNote = document.getElementById('addNote');
	let notesString = localStorage.getItem('notes');
	
	if(notesString == null){
		notesObj = [];
	}
	else{
		notesObj = JSON.parse(notesString);
	}
    
});