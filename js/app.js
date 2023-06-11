let total = 0;
let itemList = [];

let addToList = (item) => {
	itemList.push(item);
	total += item.price;
	updateItemList();
};

let deleteFromList = (index) => {
	total -= itemList[index].price;
	itemList.splice(index, 1);
	updateItemList();
};

let updateItemList = () => {
	let mainContainer = document.querySelector(".result-container main");
	mainContainer.innerHTML = "";

	itemList.forEach((item, index) => {
		let itemContainer = document.createElement("div");
		itemContainer.classList.add("item" + (index + 1));

		let itemDescription = document.createElement("p");
		itemDescription.textContent = `${item.name} ${item.price}$`;

		let deleteButton = document.createElement("button");
		deleteButton.textContent = "X";
		deleteButton.addEventListener("click", () => {
			deleteFromList(index);
		});

		itemContainer.appendChild(itemDescription);
		itemContainer.appendChild(deleteButton);
		mainContainer.appendChild(itemContainer);
	});

	updateTotal();
};

let updateTotal = () => {
	let totalElement = document.querySelector(".result-container header h1");
	totalElement.textContent = `TOTAL ${total.toFixed(2)}$`;
};
