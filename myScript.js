/************* Simple Javascript *******************/
function loadBody() {
	let obj = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	createCards(obj);

	document.getElementById("doSort").onclick = () => {
		obj = sortFunc(obj);
	};
	document.getElementById("doShuffle").onclick = () => {
		obj = shuffleFunc(obj);
	};
}

/*window.onload = function () {
	code goes here.
}*/

function sortFunc(obj) {
	obj.sort((a, b) => a - b);
	createCards(obj);
	return obj;
}

function shuffleFunc(obj) {
	obj.sort(() => Math.random() - 0.5);
	createCards(obj);
	return obj;
}

function createCards(obj) {
	let allCards = document.getElementById("allCards");
	allCards.innerHTML = "";

	obj.forEach(function (item, index) {
		var div = document.createElement("DIV");
		div.className = "c-"+item;
		div.innerText = item;
		allCards.appendChild(div);
    });
}


