let myImage = document.querySelector('img');
myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if (mySrc==='images/Onmyoji.jpg') {
		myImage.setAttribute('src', 'images/Onmyoji2.jpg');
	}else {
		myImage.setAttribute('src', 'images/Onmyoji.jpg');
	}
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myNme = prompt('Please enter your name.');
	if (!myNme || myNme==null) {
		setUserName();
	}else {
		localStorage.setItem('name', myNme);
		myHeading.textContent = 'Onmyoji for ' + myNme;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
}else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Onmyoji for ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}