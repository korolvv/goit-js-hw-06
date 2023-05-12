function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const inputAmount = document.querySelector("input");

const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
	for (let i = 1; i <= amount; i += 1) {
		let width = 30;
		let height = 30;
		if (i > 1) {
			width = 30 + (i * 10 - 10);
			height = 30 + (i * 10 - 10);
		}

		let div = document.createElement("div");
		let color = getRandomHexColor();
		div.style.cssText = `width: ${width}px; height: ${height}px; background-color: ${color}`;
		divBoxes.append(div);
	}
}

createBtn.addEventListener("click", () => {
	let amount = Number(inputAmount.value);
	createBoxes(amount);
});

destroyBtn.addEventListener("click", () => {
	divBoxes.innerHTML = "";
});
